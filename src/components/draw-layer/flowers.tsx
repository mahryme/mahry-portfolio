/**
 * Three outlined flowers standing on the lawn line, in the same pen-sketch
 * style: accent colour, thin round-capped lines, no fill. Static and
 * decorative; they never fade.
 *
 * Positions are a % across the lawn, and each stands at the line's height at
 * that spot (lawnY), so they keep their place at any width.
 */

import { LAWN_HEIGHT, lawnY } from "./lawn";

/** Stems run this far below the line so they join it cleanly. */
const BASE_DROP = 1;
const STROKE_WIDTH = 2;

interface Leaf {
    /** Where on the stem the leaf attaches (0 = base, 1 = head). */
    t: number;
    side: -1 | 1;
    length: number;
}

interface FlowerSpec {
    /** Horizontal position across the lawn, in %. */
    x: number;
    /** Distance from the top of the lawn strip to the line, in px. */
    lineY: number;
    petals: number;
    petalR: number;
    centreR: number;
    stem: number;
    /** Sideways offset of the head from the base, in px. */
    lean: number;
    leaves: Leaf[];
}

const FLOWERS: FlowerSpec[] = [
    {
        x: 84,
        lineY: lawnY(84),
        petals: 6,
        petalR: 14,
        centreR: 5,
        stem: 60,
        lean: -5,
        leaves: [
            { t: 0.28, side: -1, length: 22 },
            { t: 0.46, side: 1, length: 19 },
        ],
    },
    {
        x: 89,
        lineY: lawnY(89),
        petals: 8,
        petalR: 18,
        centreR: 6,
        stem: 86,
        lean: 3,
        leaves: [
            { t: 0.3, side: 1, length: 26 },
            { t: 0.45, side: -1, length: 23 },
        ],
    },
    {
        x: 94,
        lineY: lawnY(94),
        petals: 5,
        petalR: 12,
        centreR: 4,
        stem: 46,
        lean: 3,
        leaves: [{ t: 0.35, side: -1, length: 18 }],
    },
];

const n = (v: number) => v.toFixed(1);

/** Cubic Bézier coordinate at t. */
function bez(p0: number, p1: number, p2: number, p3: number, t: number) {
    const u = 1 - t;
    return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
}

/** Everything is drawn around a local origin at the line, y pointing up as negative. */
function flowerGeometry(f: FlowerSpec, index: number) {
    const paths: string[] = [];
    const wobble = (i: number) => Math.sin(i * 12.9898 + index * 78.233);

    // Stem: a gentle S from the line up to the head.
    const sx = [0, f.lean * -0.3 + wobble(1) * 2, f.lean * 1.2 + wobble(2) * 2, f.lean];
    const sy = [BASE_DROP, -f.stem * 0.35, -f.stem * 0.7, -f.stem];
    paths.push(
        `M${n(sx[0])} ${n(sy[0])} C${n(sx[1])} ${n(sy[1])} ${n(sx[2])} ${n(sy[2])} ${n(sx[3])} ${n(sy[3])}`,
    );

    // Leaves: pointed outlines with a midrib, angled away from the stem.
    for (const [i, leaf] of f.leaves.entries()) {
        const ax = bez(sx[0], sx[1], sx[2], sx[3], leaf.t);
        const ay = bez(sy[0], sy[1], sy[2], sy[3], leaf.t);
        const angle = (52 + wobble(i + 3) * 8) * (Math.PI / 180);
        const dx = leaf.side * Math.sin(angle);
        const dy = -Math.cos(angle);
        const nx = -dy;
        const ny = dx;
        const L = leaf.length;
        const w = L * 0.22;
        const tip = [ax + dx * L, ay + dy * L];
        const c1 = [ax + dx * L * 0.55 + nx * w, ay + dy * L * 0.55 + ny * w];
        const c2 = [ax + dx * L * 0.55 - nx * w, ay + dy * L * 0.55 - ny * w];
        paths.push(
            `M${n(ax)} ${n(ay)} Q${n(c1[0])} ${n(c1[1])} ${n(tip[0])} ${n(tip[1])} Q${n(c2[0])} ${n(c2[1])} ${n(ax)} ${n(ay)}`,
            `M${n(ax)} ${n(ay)} L${n(ax + dx * L * 0.78)} ${n(ay + dy * L * 0.78)}`,
        );
    }

    // Petals: rounded loops around the head, each a little different.
    const hx = f.lean;
    const hy = -f.stem;
    const polar = (r: number, a: number) => [hx + Math.cos(a) * r, hy + Math.sin(a) * r];
    const r0 = f.centreR * 0.9;
    for (let i = 0; i < f.petals; i++) {
        const a = (i / f.petals) * Math.PI * 2 - Math.PI / 2 + wobble(i + 10) * 0.08;
        const R = f.petalR * (1 + wobble(i + 20) * 0.08);
        const half = (Math.PI / f.petals) * 0.7;
        const p0 = polar(r0, a - half);
        const c1 = polar(R * 0.98, a - half * 1.9);
        const tip = polar(R, a);
        const c2 = polar(R * 0.98, a + half * 1.9);
        const p1 = polar(r0, a + half);
        paths.push(
            `M${n(p0[0])} ${n(p0[1])} Q${n(c1[0])} ${n(c1[1])} ${n(tip[0])} ${n(tip[1])} Q${n(c2[0])} ${n(c2[1])} ${n(p1[0])} ${n(p1[1])}`,
        );
    }

    // Centre
    const rc = f.centreR;
    paths.push(
        `M${n(hx + rc)} ${n(hy)} a${n(rc)} ${n(rc)} 0 1 0 ${n(-2 * rc)} 0 a${n(rc)} ${n(rc)} 0 1 0 ${n(2 * rc)} 0`,
    );

    // Bounds, so the svg is sized 1:1 in px and the line width stays 2px.
    const reach = Math.max(
        Math.abs(f.lean) + f.petalR,
        ...f.leaves.map((l) => l.length * 0.9),
    );
    const pad = 4;
    const halfW = reach + pad;
    const top = f.stem + f.petalR + pad;
    return {
        paths,
        width: Math.ceil(halfW * 2),
        height: Math.ceil(top + BASE_DROP),
        // Origin (line, stem x=0) sits at this point inside the svg.
        originX: Math.ceil(halfW),
        originY: Math.ceil(top),
    };
}

const GEOMETRY = FLOWERS.map(flowerGeometry);

export default function Flowers({ className }: { className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 bottom-0 select-none ${className ?? ""}`}
            style={{ height: LAWN_HEIGHT }}
        >
            {FLOWERS.map((f, i) => {
                const g = GEOMETRY[i];
                return (
                    <svg
                        key={i}
                        width={g.width}
                        height={g.height}
                        viewBox={`${-g.originX} ${-g.originY} ${g.width} ${g.height}`}
                        fill="none"
                        strokeWidth={STROKE_WIDTH}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-action-primary absolute overflow-visible"
                        style={{
                            left: `${f.x}%`,
                            marginLeft: -g.originX,
                            // svg bottom sits BASE_DROP below the line
                            bottom: LAWN_HEIGHT - f.lineY - BASE_DROP,
                        }}
                    >
                        {g.paths.map((d, j) => (
                            <path key={j} d={d} />
                        ))}
                    </svg>
                );
            })}
        </div>
    );
}
