import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
    src: string;
    alt: string;
    caption?: string;
    captionTone?: "secondary" | "tertiary";
    priority?: boolean;
    sizes?: string;
    className?: string;
};

export default function MediaFrame({
    src,
    alt,
    caption,
    captionTone = "tertiary",
    priority = false,
    sizes = "(min-width: 1024px) 896px, 100vw",
    className,
}: MediaFrameProps) {
    return (
        <figure className={cn("flex flex-col gap-3", className)}>
            <div className="rounded-3xl bg-container-low p-3">
                <div className="relative aspect-[644/402] w-full">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes={sizes}
                        priority={priority}
                        className="object-cover"
                    />
                </div>
            </div>
            {caption && (
                <figcaption
                    className={cn(
                        "text-caption-default font-medium",
                        captionTone === "secondary"
                            ? "text-fg-secondary"
                            : "text-fg-tertiary",
                    )}
                >
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
