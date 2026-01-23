import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:-translate-y-0.5 hover:shadow-lg",
                secondary:
                    "bg-[var(--color-dark)] text-white hover:bg-[#1a1f20] hover:-translate-y-0.5",
                outline:
                    "border-2 border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
                ghost:
                    "text-[var(--color-dark)] hover:bg-[var(--color-light)] hover:text-[var(--color-primary)]",
                accent:
                    "bg-[var(--color-accent)] text-[var(--color-dark)] hover:bg-[var(--color-accent-dark)] hover:-translate-y-0.5 hover:shadow-lg",
                link:
                    "text-[var(--color-primary)] underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-7 py-3",
                sm: "h-10 px-5 py-2 text-sm",
                lg: "h-14 px-10 py-4 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const Button = React.forwardRef(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
