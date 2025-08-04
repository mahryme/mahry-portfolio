import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-label-md font-medium cursor-pointer transition-all duration-400 ease-out shadow-xs hover:shadow-none",
    {
        variants: {
            variant: {
                accent: "bg-action-accent text-action-accent-text border-action-accent-border border-2  hover:bg-action-accent-hovered",
                primary:
                    "bg-action-primary text-action-accent-text border-action-primary-border border-2 hover:bg-action-primary-hovered",
                ghost: "text-action-ghost-text shadow-none hover:bg-action-ghost-hovered",
                icon: "bg-action-secondary text-action-secondary-text border-action-secondary-border border-2 hover:bg-action-secondary-hovered",
            },
            size: {
                default: "h-10 px-3 py-2 has-[>svg]",
                icon: "h-10 w-10 p-2 ",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
