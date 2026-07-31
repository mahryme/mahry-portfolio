import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva(
    "w-full flex justify-between px-5 py-6 md:px-10 py-8",
    {
        variants: {
            variant: {
                default: "max-w-screen-xl",
                blog: "max-w-screen-md gap-8",
                nav: "max-w-screen-xl px-5 py-2 md:px-10 py-5",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface ContainerProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof containerVariants> {}

export function Container({
    variant,
    className,
    children,
    ...props
}: ContainerProps) {
    return (
        <div
            className={cn(containerVariants({ variant }), className)}
            {...props}
        >
            {children}
        </div>
    );
}
