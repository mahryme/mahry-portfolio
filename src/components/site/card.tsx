"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge, Button } from "@mahry/ds";
import * as React from "react";
import Image from "next/image";

export interface CardProps {
    title: string;
    subtitle?: string;
    tags: string[];
    href: string;
    imageSrc?: string;
    imageAlt?: string;
}
export default function Card({
    title,
    subtitle,
    tags,
    href,
    imageSrc,
    imageAlt,
}: CardProps) {
    return (
        <article className="bg-container-high rounded-2xl border border-border-secondary overflow-hidden">
            <div className="bg-container-brand p-3 relative w-full aspect-[440/277.68]">
                <Image
                    src={imageSrc ?? "/covers/image.png"}
                    alt={imageAlt ?? "Default alt text"}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-3 flex flex-col justify-between gap-3 md:items-start">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-1">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="default">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-heading-sm">{title}</h3>
                            {subtitle && (
                                <p className="text-body-md text-fg-secondary">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <Button asChild variant="secondary">
                    <Link href={href} className="items-center gap-2">
                        Read
                        <ArrowRight className="w-6 h-6 -ml-1" />
                    </Link>
                </Button>
            </div>
        </article>
    );
}
