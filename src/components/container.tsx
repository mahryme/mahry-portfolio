// components/Container.tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'


const containerVariants = cva(
  'max-w-screen-xl w-full flex justify-between px-5 py-6 md:px-10 py-8',
  {
    variants: {
      variant: {
        default: 'none',
        blog: 'max-w-screen-md',
        nav: 'max-w-screen-xl px-5 py-4 md:px-10 py-5'
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

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
  )
}
