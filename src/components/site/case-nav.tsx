"use client";

import { useEffect, useRef, useState } from "react";
import { NavLink } from "@mahry/ds";

export type CaseNavItem = { id: string; label: string };

export default function CaseNav({ items }: { items: CaseNavItem[] }) {
    const [activeId, setActiveId] = useState(items[0]?.id);
    const isScrollingToTarget = useRef(false);

    useEffect(() => {
        const sections = items
            .map((item) => document.getElementById(item.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrollingToTarget.current) return;
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveId(visible.target.id);
            },
            { rootMargin: "-10% 0px -70% 0px" },
        );

        const releaseLock = () => {
            isScrollingToTarget.current = false;
        };

        sections.forEach((section) => observer.observe(section));
        window.addEventListener("scrollend", releaseLock);
        return () => {
            observer.disconnect();
            window.removeEventListener("scrollend", releaseLock);
        };
    }, [items]);

    const handleClick = (id: string) => {
        setActiveId(id);
        isScrollingToTarget.current = true;
        // scrollend is missing in older Safari; don't leave the observer locked out
        window.setTimeout(() => {
            isScrollingToTarget.current = false;
        }, 1200);
    };

    return (
        <nav aria-label="Case study sections" className="flex flex-col gap-1">
            <p className="label-mono">
                Navigation
            </p>
            <ul className="flex flex-col items-start">
                {items.map((item) => (
                    <li key={item.id}>
                        <NavLink
                            asChild
                            label={item.label}
                            isCurrent={item.id === activeId}
                        >
                            <a
                                href={`#${item.id}`}
                                onClick={() => handleClick(item.id)}
                            >
                                {item.label}
                            </a>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
