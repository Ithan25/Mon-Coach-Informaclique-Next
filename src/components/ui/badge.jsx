import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold transition-colors",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--color-primary)] text-white",
                secondary:
                    "bg-[var(--color-secondary)] text-white",
                accent:
                    "bg-[var(--color-accent)] text-[var(--color-dark)]",
                outline:
                    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent",
                success:
                    "bg-green-500 text-white",
                muted:
                    "bg-[var(--color-light)] text-[var(--color-gray)]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function Badge({ className, variant, ...props }) {
    return (
        <span className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
