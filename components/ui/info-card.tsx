"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface InfoCardProps {
  title: string
  description: string
  icon?: LucideIcon
  hoverEffect?: boolean
  variant?: "default" | "elevated" | "bordered"
  className?: string
  children?: React.ReactNode
}

export function InfoCard({
  title,
  description,
  icon: Icon,
  hoverEffect = true,
  variant = "default",
  className,
  children,
}: InfoCardProps) {
  const variants = {
    default: "bg-white shadow-sm",
    elevated: "bg-white shadow-md",
    bordered: "bg-white border border-border",
  }

  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-300",
        variants[variant],
        hoverEffect && "hover:shadow-lg hover:-translate-y-1",
        className,
      )}
    >
      {Icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ecosur-green/10">
          <Icon className="h-6 w-6 text-ecosur-green" />
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-ecosur-dark">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      {children}
    </div>
  )
}
