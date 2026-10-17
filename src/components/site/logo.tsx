import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "flex items-center justify-center h-9 w-9 shrink-0 rounded-lg bg-action-primary border-border-focus border-2 shadow-2xs",
                className,
            )}
        >
            <div className="h-4 w-4 rounded-full bg-container-high border-border-focus border-2"></div>
        </div>
    );
}
