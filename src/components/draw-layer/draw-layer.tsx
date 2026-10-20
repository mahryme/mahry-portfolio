"use client";

import { useEffect, useRef, useState } from "react";
import {
    addPoint,
    createStroke,
    dropOldest,
    fadeAlpha,
    levelToWidth,
    makeCurveLUT,
    pruneBefore,
    smoothWidth,
    strokeLength,
    widthFromSpeed,
    widthToLevel,
    type Stroke,
} from "./strokes";

// ─── Tuning ──────────────────────────────────────────────────────────────────

/**
 * Fine pointers only (mouse, pen), and only from the lg breakpoint (1024px) up.
 * Below that the columns stack, text fills the width and there is no empty
 * space to draw on, so a stroke would only run over the copy. Outside this
 * query the layer never mounts; it mounts and unmounts as the window resizes.
 */
const DRAW_QUERY =
    "(min-width: 1024px) and (hover: hover) and (pointer: fine)";

/** Semantic token behind the "Say hi!" button (Button variant="primary"). */
const ACCENT_TOKEN = "--color-action-primary";

/** Line width in px: slow pointer → thick, fast pointer → thin. */
const WIDTH_SLOW = 3.5;
const WIDTH_FAST = 1.5;
/** Width a stroke starts at, before velocity takes over. */
const WIDTH_BASE = 2.5;
/** px/ms at which the line reaches WIDTH_FAST. 1 px/ms (1000 px/s) lands on WIDTH_BASE. */
const SPEED_MAX = 2;
/** Width low-pass time constant (ms). Higher = smoother width, more lag. */
const WIDTH_SMOOTHING_MS = 50;
/** A click with no movement draws this dot (px). */
const DOT_DIAMETER = 4;
/** Ignore samples closer than this to the last point (px). */
const MIN_POINT_DISTANCE = 1;

/** Per-point age at full opacity (ms). */
const HOLD_MS = 30_000;
/** Then fade to nothing over this long (ms). */
const FADE_MS = 900;
/**
 * Fade curve, applied to remaining opacity (exit = ease-out).
 * "ease-out" = cubic-bezier(0.23, 1, 0.32, 1); "linear" for comparison.
 * FEEL-CHECK PENDING: default stays ease-out per the brief until judged by eye.
 */
const FADE_CURVE: "ease-out" | "linear" = "ease-out";

/** Cursor-following hint over empty space. Hidden for good after the first stroke. */
const HINT_TEXT = "Drag to draw";
/** Gap between cursor and hint (px). */
const HINT_OFFSET = 14;

/** Live points across all strokes. Oldest dropped first. */
const MAX_POINTS = 2000;
const MAX_DPR = 2;

/**
 * Overlapping round caps double-darken when segments are drawn one by one at
 * partial opacity, so segments are bucketed into alpha bands × width levels and
 * each bucket is stroked as a single path.
 */
const ALPHA_BANDS = 16;
const WIDTH_LEVELS = 9;

// A drag that starts on any of these never draws, and never has its default
// behaviour touched. `[data-no-draw]` is the explicit opt-out.
const NO_DRAW_SELECTOR = [
    "a",
    "button",
    "input",
    "textarea",
    "select",
    "summary",
    "label",
    '[role="button"]',
    '[contenteditable]:not([contenteditable="false"])',
    "[data-no-draw]",
    // text content: dragging here selects text as usual
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "li",
    "span",
    "code",
    "pre",
].join(",");

/**
 * TEMP (remove before merge): play hold and fade slower to feel-check them.
 * Dev only, e.g. `?slow=3`. Production always returns 1.
 */
function readTimeScale(): number {
    if (process.env.NODE_ENV === "production") return 1;
    const v = Number(new URLSearchParams(window.location.search).get("slow"));
    return v >= 1 && v <= 10 ? v : 1;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function DrawLayer() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia(DRAW_QUERY);
        const sync = () => setEnabled(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    return enabled ? <DrawCanvas /> : null;
}

function DrawCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const hintRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const hint = hintRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !hint || !ctx) return;

        const html = document.documentElement;
        const timeScale = readTimeScale();
        const lifeMs = (HOLD_MS + FADE_MS) * timeScale;
        const curve =
            FADE_CURVE === "linear" ? null : makeCurveLUT(0.23, 1, 0.32, 1);

        const strokes: Stroke[] = [];
        let total = 0;
        let active: {
            id: number;
            stroke: Stroke;
            x: number;
            y: number;
            ts: number;
            w: number;
        } | null = null;

        let color = "";
        let cssW = 0;
        let cssH = 0;
        let raf = 0;
        // Which (alpha band, width level) buckets have segments this frame.
        const present = new Uint8Array((ALPHA_BANDS + 1) * WIDTH_LEVELS);

        const readColor = () => {
            color =
                getComputedStyle(html).getPropertyValue(ACCENT_TOKEN).trim() ||
                getComputedStyle(canvas).color;
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
        };

        // ── Render ──────────────────────────────────────────────────────────

        const render = (now: number) => {
            const cutoff = now - lifeMs;
            for (let s = strokes.length - 1; s >= 0; s--) {
                const st = strokes[s];
                total -= pruneBefore(st, cutoff);
                if (strokeLength(st) === 0 && (!active || active.stroke !== st))
                    strokes.splice(s, 1);
            }

            ctx.clearRect(0, 0, cssW, cssH);
            if (total === 0) return;

            // Pass 1: bucket every live point; draw lone dots directly.
            for (let s = 0; s < strokes.length; s++) {
                const st = strokes[s];
                const n = st.x.length;
                if (strokeLength(st) === 1) {
                    const a = fadeAlpha(
                        (now - st.t[st.start]) / timeScale,
                        HOLD_MS,
                        FADE_MS,
                        curve,
                    );
                    if (a > 0) {
                        ctx.globalAlpha = a;
                        ctx.beginPath();
                        ctx.arc(
                            st.x[st.start],
                            st.y[st.start],
                            DOT_DIAMETER / 2,
                            0,
                            Math.PI * 2,
                        );
                        ctx.fill();
                    }
                    continue;
                }
                for (let i = st.start; i < n; i++) {
                    const a = fadeAlpha(
                        (now - st.t[i]) / timeScale,
                        HOLD_MS,
                        FADE_MS,
                        curve,
                    );
                    // Any visible point keeps at least the faintest band, so the tail
                    // thins out smoothly instead of popping at ~3% opacity.
                    const band =
                        a > 0
                            ? Math.max(1, Math.round(a * ALPHA_BANDS))
                            : 0;
                    if (band === 0) {
                        st.key[i] = -1;
                        continue;
                    }
                    const key =
                        band * WIDTH_LEVELS +
                        widthToLevel(
                            st.w[i],
                            WIDTH_FAST,
                            WIDTH_SLOW,
                            WIDTH_LEVELS,
                        );
                    st.key[i] = key;
                    present[key] = 1;
                }
            }

            // Pass 2: one path per bucket. Quadratic curves run through
            // segment midpoints with each point as the control point.
            for (let key = 0; key < present.length; key++) {
                if (!present[key]) continue;
                present[key] = 0;
                ctx.globalAlpha = Math.floor(key / WIDTH_LEVELS) / ALPHA_BANDS;
                ctx.lineWidth = levelToWidth(
                    key % WIDTH_LEVELS,
                    WIDTH_FAST,
                    WIDTH_SLOW,
                    WIDTH_LEVELS,
                );
                ctx.beginPath();
                for (let s = 0; s < strokes.length; s++) {
                    const st = strokes[s];
                    const first = st.start;
                    const last = st.x.length - 1;
                    if (last - first < 1) continue;
                    for (let i = first; i <= last; i++) {
                        if (st.key[i] !== key) continue;
                        const px = st.x[i];
                        const py = st.y[i];
                        const sx = i === first ? px : (st.x[i - 1] + px) / 2;
                        const sy = i === first ? py : (st.y[i - 1] + py) / 2;
                        const ex = i === last ? px : (px + st.x[i + 1]) / 2;
                        const ey = i === last ? py : (py + st.y[i + 1]) / 2;
                        ctx.moveTo(sx, sy);
                        ctx.quadraticCurveTo(px, py, ex, ey);
                    }
                }
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
        };

        // The loop only runs while live points exist; idle = zero frames.
        const frame = () => {
            raf = 0;
            render(performance.now());
            if (total > 0) raf = requestAnimationFrame(frame);
        };
        const ensureLoop = () => {
            if (!raf) raf = requestAnimationFrame(frame);
        };

        // ── Sizing ──────────────────────────────────────────────────────────

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            cssW = rect.width;
            cssH = rect.height;
            const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
            canvas.width = Math.round(cssW * dpr);
            canvas.height = Math.round(cssH * dpr);
            // Resizing resets all context state.
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            readColor();
            if (total > 0) render(performance.now());
        };

        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        // ResizeObserver doesn't fire when only the DPR changes (window moved
        // to another display), so watch the resolution media query too.
        let dprQuery: MediaQueryList | null = null;
        const onDprChange = () => {
            resize();
            watchDpr();
        };
        const watchDpr = () => {
            dprQuery?.removeEventListener("change", onDprChange);
            dprQuery = window.matchMedia(
                `(resolution: ${window.devicePixelRatio}dppx)`,
            );
            dprQuery.addEventListener("change", onDprChange);
        };
        watchDpr();
        resize();

        // ── Input ───────────────────────────────────────────────────────────

        const canDrawFrom = (e: PointerEvent) => {
            const t = e.target;
            if (!(t instanceof Element)) return false;
            // Scrollbar gutters report html as the target.
            if (
                e.clientX >= html.clientWidth ||
                e.clientY >= html.clientHeight
            )
                return false;
            return !t.closest(NO_DRAW_SELECTOR);
        };

        let canDraw = false;
        const setCanDraw = (v: boolean) => {
            if (v === canDraw) return;
            canDraw = v;
            html.toggleAttribute("data-can-draw", v);
        };

        // Hint follows the cursor via left/top (plain tracking, not motion) and
        // only fades opacity. It never reappears once the visitor has drawn.
        let hintDone = false;
        let hintW = 0;
        const showHint = (e: PointerEvent, on: boolean) => {
            if (hintDone || !on) {
                hint.style.opacity = "0";
                return;
            }
            hintW ||= hint.offsetWidth;
            const flip = e.clientX + HINT_OFFSET + hintW > html.clientWidth;
            hint.style.left = `${
                flip ? e.clientX - HINT_OFFSET - hintW : e.clientX + HINT_OFFSET
            }px`;
            hint.style.top = `${e.clientY + HINT_OFFSET}px`;
            hint.style.opacity = "1";
        };

        const enforceCap = () => {
            while (total > MAX_POINTS) {
                const oldest = strokes.find((st) => strokeLength(st) > 0);
                if (!oldest) break;
                total -= dropOldest(oldest, total - MAX_POINTS);
            }
        };

        const addSample = (x: number, y: number, ts: number, now: number) => {
            if (!active) return;
            const dx = x - active.x;
            const dy = y - active.y;
            const dist = Math.hypot(dx, dy);
            if (dist < MIN_POINT_DISTANCE) return;
            const dt = Math.max(ts - active.ts, 1);
            active.w = smoothWidth(
                active.w,
                widthFromSpeed(dist / dt, WIDTH_SLOW, WIDTH_FAST, SPEED_MAX),
                dt,
                WIDTH_SMOOTHING_MS,
            );
            addPoint(active.stroke, x, y, now, active.w);
            total++;
            active.x = x;
            active.y = y;
            active.ts = ts;
            enforceCap();
        };

        const endStroke = () => {
            active = null;
            html.removeAttribute("data-drawing");
        };

        const onPointerDown = (e: PointerEvent) => {
            if (
                active ||
                !e.isPrimary ||
                e.button !== 0 ||
                e.pointerType === "touch" ||
                e.shiftKey ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey ||
                !canDrawFrom(e)
            )
                return;

            hintDone = true;
            hint.style.opacity = "0";
            // Set before the browser starts its own selection gesture.
            html.setAttribute("data-drawing", "");
            window.getSelection()?.removeAllRanges();
            readColor();

            const stroke = createStroke();
            strokes.push(stroke);
            addPoint(stroke, e.clientX, e.clientY, performance.now(), WIDTH_BASE);
            total++;
            active = {
                id: e.pointerId,
                stroke,
                x: e.clientX,
                y: e.clientY,
                ts: e.timeStamp,
                w: WIDTH_BASE,
            };
            enforceCap();
            ensureLoop();
        };

        const onPointerMove = (e: PointerEvent) => {
            if (!active) {
                if (e.pointerType === "touch") return;
                const ok = canDrawFrom(e);
                setCanDraw(ok);
                showHint(e, ok);
                return;
            }
            if (e.pointerId !== active.id) return;
            const now = performance.now();
            const batch = e.getCoalescedEvents?.();
            if (batch && batch.length > 0) {
                for (let i = 0; i < batch.length; i++)
                    addSample(
                        batch[i].clientX,
                        batch[i].clientY,
                        batch[i].timeStamp,
                        now,
                    );
            } else {
                addSample(e.clientX, e.clientY, e.timeStamp, now);
            }
            ensureLoop();
        };

        const onPointerEnd = (e: PointerEvent) => {
            if (!active || e.pointerId !== active.id) return;
            endStroke();
            if (e.type === "pointerup") setCanDraw(canDrawFrom(e));
        };

        // Safari/Firefox can still begin a selection or native drag from the
        // pointerdown that started a stroke; swallow those while drawing. Only
        // reachable for strokes that began on non-interactive, non-text targets.
        const blockWhileDrawing = (e: Event) => {
            if (active) e.preventDefault();
        };

        window.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerEnd);
        window.addEventListener("pointercancel", onPointerEnd);
        window.addEventListener("blur", endStroke);
        const hideHint = () => {
            hint.style.opacity = "0";
        };
        html.addEventListener("pointerleave", hideHint);
        document.addEventListener("selectstart", blockWhileDrawing);
        document.addEventListener("dragstart", blockWhileDrawing);

        return () => {
            window.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerEnd);
            window.removeEventListener("pointercancel", onPointerEnd);
            window.removeEventListener("blur", endStroke);
            html.removeEventListener("pointerleave", hideHint);
            document.removeEventListener("selectstart", blockWhileDrawing);
            document.removeEventListener("dragstart", blockWhileDrawing);
            dprQuery?.removeEventListener("change", onDprChange);
            ro.disconnect();
            if (raf) cancelAnimationFrame(raf);
            html.removeAttribute("data-drawing");
            html.removeAttribute("data-can-draw");
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-50 h-full w-full mix-blend-multiply dark:mix-blend-screen"
            />
            <div
                ref={hintRef}
                aria-hidden="true"
                className="label-mono text-fg-secondary! pointer-events-none fixed top-0 left-0 z-50 whitespace-nowrap opacity-0 transition-opacity duration-150 ease-out"
            >
                {HINT_TEXT}
            </div>
        </>
    );
}
