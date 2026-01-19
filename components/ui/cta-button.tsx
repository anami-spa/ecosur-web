"use client"

import type React from "react"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline-primary" | "outline-secondary"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  children: React.ReactNode
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
      primary:
        "bg-ecosur-green text-white hover:bg-ecosur-green/90 hover:shadow-lg hover:-translate-y-0.5 focus:ring-ecosur-green",
      secondary:
        "bg-ecosur-blue text-white hover:bg-ecosur-blue/90 hover:shadow-lg hover:-translate-y-0.5 focus:ring-ecosur-blue",
      "outline-primary":
        "border-2 border-ecosur-green text-ecosur-green bg-transparent hover:bg-ecosur-green hover:text-white focus:ring-ecosur-green",
      "outline-secondary":
        "border-2 border-ecosur-blue text-ecosur-blue bg-transparent hover:bg-ecosur-blue hover:text-white focus:ring-ecosur-blue",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  },
)

CTAButton.displayName = "CTAButton"

export { CTAButton }
