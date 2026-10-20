"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface CasePreviewMeta {
    label: string;
    value: string;
}

interface CasePreviewProps {
    /** First image of the case, as shown at the top of the case page. */
    image: string;
    meta: CasePreviewMeta[];
    children: React.ReactNode;
}

/** Gap between the cursor (or focused link) and the card (px). */
const OFFSET = 18;
/** Minimum distance from the viewport edge (px). */
const EDGE = 8;

/**
 * Wraps a case link and shows a small, non-interactive preview card beside the
 * pointer while it is over the link (or while the link has keyboard focus).
 * The card is decorative (the link already carries the description), ignores
 * pointer events, and only fades opacity. It follows the cursor 1:1 with
 * left/top, like the draw hint.
 */
export default function CasePreview({
    image,
    meta,
    children,
}: CasePreviewProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const size = useRef<{ w: number; h: number } | null>(null);
    const [open, setOpen] = useState(false);
    // The image is only requested after the first hover or focus.
    const [armed, setArmed] = useState(false);

    const place = (x: number, y: number, gap: number) => {
        const card = cardRef.current;
        if (!card) return;
        size.current ??= { w: card.offsetWidth, h: card.offsetHeight };
        const { w, h } = size.current;
        const vw = document.documentElement.clientWidth;
        const vh = window.innerHeight;
        let left = x + gap;
        if (left + w > vw - EDGE) left = x - gap - w;
        let top = y + gap;
        if (top + h > vh - EDGE) top = y - gap - h;
        card.style.left = `${Math.max(EDGE, left)}px`;
        card.style.top = `${Math.max(EDGE, top)}px`;
    };

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const onPointerEnter = (e: React.PointerEvent) => {
        if (e.pointerType === "touch") return;
        setArmed(true);
        place(e.clientX, e.clientY, OFFSET);
        setOpen(true);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (e.pointerType === "touch") return;
        place(e.clientX, e.clientY, OFFSET);
    };

    const onFocus = (e: React.FocusEvent) => {
        if (!e.target.matches(":focus-visible")) return;
        const r = e.target.getBoundingClientRect();
        setArmed(true);
        place(r.left, r.bottom, 8);
        setOpen(true);
    };

    return (
        <div
            onPointerEnter={onPointerEnter}
            onPointerMove={onPointerMove}
            onPointerLeave={() => setOpen(false)}
            onFocus={onFocus}
            onBlur={() => setOpen(false)}
        >
            {children}
            <div
                ref={cardRef}
                aria-hidden="true"
                className={`border-border-secondary bg-container-low pointer-events-none fixed top-0 left-0 z-50 w-72 overflow-hidden rounded-xl border shadow-sm transition-opacity duration-150 ease-out select-none ${
                    open ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="bg-surface-default relative aspect-[16/10] w-full">
                    {armed && (
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="288px"
                            className="object-cover object-top"
                        />
                    )}
                </div>
                <dl className="flex flex-col gap-1.5 p-3">
                    {meta.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-baseline justify-between gap-4"
                        >
                            <dt className="label-mono shrink-0">
                                {item.label}
                            </dt>
                            <dd className="text-label-sm text-fg-primary text-right">
                                {item.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
