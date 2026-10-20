/**
 * Pure helpers for the draw layer: point storage, width-from-velocity,
 * fade alpha. No DOM access, so everything here is unit-testable.
 */

/**
 * A stroke is a struct of arrays (one entry per point). `start` is the index of
 * the oldest live point, so pruning from the tail is O(1) instead of shift().
 */
export interface Stroke {
    x: number[];
    y: number[];
    /** performance.now() when the point was added. */
    t: number[];
    w: number[];
    /** Render scratch: bucket key per point, written every frame. */
    key: number[];
    start: number;
}

export function createStroke(): Stroke {
    return { x: [], y: [], t: [], w: [], key: [], start: 0 };
}

export function strokeLength(s: Stroke): number {
    return s.x.length - s.start;
}

export function addPoint(
    s: Stroke,
    x: number,
    y: number,
    t: number,
    w: number,
) {
    s.x.push(x);
    s.y.push(y);
    s.t.push(t);
    s.w.push(w);
    s.key.push(-1);
}

/** Reclaim the dead prefix once it dominates the arrays. */
function compact(s: Stroke) {
    if (s.start < 128 || s.start * 2 < s.x.length) return;
    s.x.splice(0, s.start);
    s.y.splice(0, s.start);
    s.t.splice(0, s.start);
    s.w.splice(0, s.start);
    s.key.splice(0, s.start);
    s.start = 0;
}

/** Drop the `n` oldest live points. Returns how many were dropped. */
export function dropOldest(s: Stroke, n: number): number {
    const dropped = Math.min(n, strokeLength(s));
    s.start += dropped;
    compact(s);
    return dropped;
}

/** Drop every point stamped at or before `cutoff`. Returns how many. */
export function pruneBefore(s: Stroke, cutoff: number): number {
    let i = s.start;
    const n = s.x.length;
    while (i < n && s.t[i] <= cutoff) i++;
    const dropped = i - s.start;
    s.start = i;
    compact(s);
    return dropped;
}

/**
 * Faster pointer = thinner line. `speed` is px/ms, linear between `slow` (at 0)
 * and `fast` (at `speedMax` and above).
 */
export function widthFromSpeed(
    speed: number,
    slow: number,
    fast: number,
    speedMax: number,
): number {
    const t = Math.min(speed / speedMax, 1);
    return slow + (fast - slow) * t;
}

/**
 * Time-based one-pole low-pass. `dt` and `tau` in ms: the width closes ~63% of
 * the gap to `target` every `tau`, regardless of how often samples arrive.
 */
export function smoothWidth(
    prev: number,
    target: number,
    dt: number,
    tau: number,
): number {
    return prev + (target - prev) * (1 - Math.exp(-dt / tau));
}

/** Quantise a width onto `levels` evenly spaced steps in [min, max]. */
export function widthToLevel(
    w: number,
    min: number,
    max: number,
    levels: number,
): number {
    const t = (w - min) / (max - min);
    return Math.max(0, Math.min(levels - 1, Math.round(t * (levels - 1))));
}

export function levelToWidth(
    level: number,
    min: number,
    max: number,
    levels: number,
): number {
    return min + ((max - min) * level) / (levels - 1);
}

const LUT_SIZE = 256;

/**
 * Sample a CSS-style cubic-bezier easing (x1, y1, x2, y2) into a lookup table
 * indexed by progress, so the per-frame cost is one lerp, not a solver.
 */
export function makeCurveLUT(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): Float32Array {
    const lut = new Float32Array(LUT_SIZE);
    const steps = LUT_SIZE * 4;
    const bez = (a: number, b: number, t: number) => {
        const u = 1 - t;
        return 3 * u * u * t * a + 3 * u * t * t * b + t * t * t;
    };
    // Walk t forward once; x(t) is monotonic for the curves we use.
    let x = 0;
    let y = 0;
    let step = 0;
    for (let i = 0; i < LUT_SIZE; i++) {
        const targetX = i / (LUT_SIZE - 1);
        while (x < targetX && step < steps) {
            step++;
            const t = step / steps;
            x = bez(x1, x2, t);
            y = bez(y1, y2, t);
        }
        lut[i] = y;
    }
    lut[LUT_SIZE - 1] = 1;
    return lut;
}

/** Eased progress for p in [0, 1]. A null table means linear. */
export function sampleCurve(lut: Float32Array | null, p: number): number {
    if (!lut) return p;
    const f = p * (LUT_SIZE - 1);
    const i = Math.floor(f);
    if (i >= LUT_SIZE - 1) return lut[LUT_SIZE - 1];
    return lut[i] + (lut[i + 1] - lut[i]) * (f - i);
}

/**
 * Opacity of a point `age` ms after it was drawn: full for `hold`, then the
 * remaining opacity follows the curve over `fade` ms.
 */
export function fadeAlpha(
    age: number,
    hold: number,
    fade: number,
    lut: Float32Array | null,
): number {
    if (age <= hold) return 1;
    const p = (age - hold) / fade;
    if (p >= 1) return 0;
    return 1 - sampleCurve(lut, p);
}
