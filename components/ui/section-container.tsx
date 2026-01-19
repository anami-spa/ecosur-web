import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  as?: "section" | "div" | "article"
  id?: string
  background?: "white" | "gray" | "green-light" | "blue-light" | "dark"
}

export function SectionContainer({
  children,
  className,
  as: Component = "section",
  id,
  background = "white",
}: SectionContainerProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-muted",
    "green-light": "bg-ecosur-green/5",
    "blue-light": "bg-ecosur-blue/5",
    dark: "bg-ecosur-dark text-white",
  }

  return (
    <Component id={id} className={cn("py-16 md:py-24", backgrounds[background], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </Component>
  )
}
