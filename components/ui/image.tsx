import type React from "react"
import { cn } from "@/lib/utils"
import { asset } from "@/lib/assets"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fill?: boolean
  priority?: boolean
  width?: number
  height?: number
}

export function Image({
  src,
  alt,
  fill,
  priority,
  width,
  height,
  className,
  ...props
}: ImageProps) {
  // Aplicar asset() solo a rutas relativas, no a URLs absolutas
  const imageSrc = src && !src.startsWith('http') ? asset(src) : src || asset("placeholder.svg")

  if (fill) {
    return (
      <img
        src={imageSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={cn("absolute inset-0 w-full h-full", className)}
        {...props}
      />
    )
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      className={className}
      {...props}
    />
  )
}
