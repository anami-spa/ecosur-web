import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

const navigation = [
  { key: "nav.about", href: "/quienes-somos" },
  { key: "nav.services", href: "/servicios" },
  { key: "nav.sustainability", href: "/sustentabilidad" },
  { key: "nav.complaints", href: "/denuncias" },
  { key: "nav.contact", href: "/contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-md" : "shadow-sm",
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-16" : "h-20"
          )}
        >
          <Link
            to="/"
            className="flex items-center lg:flex-none flex-1 justify-center lg:justify-start"
            aria-label="ECOSUR SPA - Ir al inicio"
          >
            <img
              src="/logo.png"
              alt="ECOSUR Reciclaje"
              className={cn(
                "w-auto transition-all duration-300",
                isScrolled ? "h-10 lg:h-14" : "h-14 lg:h-16"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className="text-sm font-medium text-ecosur-dark transition-colors hover:text-ecosur-green focus:outline-none focus:ring-2 focus:ring-ecosur-green focus:ring-offset-2 rounded px-2 py-1"
              >
                {t(item.key)}
              </Link>
            ))}

            <div className="flex items-center gap-1 rounded-full bg-muted p-1">
              <button
                onClick={() => setLanguage("es")}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                  language === "es"
                    ? "bg-ecosur-green text-white shadow-sm"
                    : "text-ecosur-dark hover:bg-white",
                )}
                aria-label="Cambiar a Español"
                aria-pressed={language === "es"}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                  language === "en"
                    ? "bg-ecosur-green text-white shadow-sm"
                    : "text-ecosur-dark hover:bg-white",
                )}
                aria-label="Switch to English"
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-ecosur-dark transition-colors focus:outline-none focus:ring-2 focus:ring-ecosur-green absolute right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-white rounded-b-lg shadow-lg py-4 animate-fade-in-up"
            role="menu"
          >
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className="block px-4 py-3 text-ecosur-dark font-medium hover:bg-ecosur-green/10 hover:text-ecosur-green transition-colors focus:outline-none focus:bg-ecosur-green/10"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="border-t mt-4 pt-4 px-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Idioma:</span>
                <button
                  onClick={() => setLanguage("es")}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-full transition-all",
                    language === "es" ? "bg-ecosur-green text-white" : "text-muted-foreground hover:bg-muted",
                  )}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-full transition-all",
                    language === "en" ? "bg-ecosur-green text-white" : "text-muted-foreground hover:bg-muted",
                  )}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
