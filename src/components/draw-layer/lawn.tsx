/**
 * The ground: one long line across the full width, in the accent colour with
 * the same 2px round-capped stroke as the cursor. It isn't ruler-straight:
 * it rises and falls slowly (about 12px top to bottom) with a little hand
 * wobble on top, which is what makes it read as a drawn horizon.
 *
 * Static and decorative; it never fades.
 */

/** Height of the strip the line moves in (px). */
export const LAWN_HEIGHT = 18;

const VIEW_WIDTH = 1000;
const SAMPLES = 48;
const STROKE_WIDTH = 2;

/**
 * Height of the line (px from the top of the strip) at `u` across the width,
 * 0–1. Two slow waves for the rise and fall, two fast faint ones for the
 * wobble. Pure, so flowers can stand exactly on the line.
 */
function lineY(u: number): number {
    const wave = (freq: number, phase: number) =>
        Math.sin(2 * Math.PI * (freq * u + phase));
    return (
        LAWN_HEIGHT / 2 +
        4.6 * wave(1.15, 0.1) +
        1.8 * wave(2.9, 0.55) +
        0.5 * wave(9.7, 0.3) +
        0.35 * wave(17.3, 0.1)
    );
}

/** Line height at `percent` (0–100) across the width, in px from the strip top. */
export function lawnY(percent: number): number {
    return lineY(percent / 100);
}

/** Smooth path through the sampled points (Catmull-Rom → cubic Béziers). */
function buildPath(): string {
    const pts = Array.from({ length: SAMPLES + 1 }, (_, i) => {
        const u = i / SAMPLES;
        return [u * VIEW_WIDTH, lineY(u)] as const;
    });
    const f = (v: number) => v.toFixed(2);
    let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
    for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[Math.max(0, i - 1)];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[Math.min(pts.length - 1, i + 2)];
        d += ` C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`;
    }
    return d;
}

const PATH = buildPath();

export default function Lawn({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox={`0 0 ${VIEW_WIDTH} ${LAWN_HEIGHT}`}
            preserveAspectRatio="none"
            width="100%"
            height={LAWN_HEIGHT}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`pointer-events-none stroke-action-primary block select-none ${className ?? ""}`}
        >
            <path
                d={PATH}
                strokeWidth={STROKE_WIDTH}
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
}
