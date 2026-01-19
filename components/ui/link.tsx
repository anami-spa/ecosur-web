import type React from "react"
import { Link as RouterLink } from "react-router-dom"

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export function Link({ href, children, className, ...props }: LinkProps) {
  // External links
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }

  // Internal links - use React Router
  return (
    <RouterLink to={href} className={className} {...props}>
      {children}
    </RouterLink>
  )
}
