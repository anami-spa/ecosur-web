import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface Translations {
  [key: string]: {
    es: string
    en: string
  }
}

// Traducciones globales del sitio
export const translations: Translations = {
  // Navigation
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.about": { es: "Quiénes Somos", en: "About Us" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.sustainability": { es: "Sustentabilidad", en: "Sustainability" },
  "nav.complaints": { es: "Canal de Denuncias", en: "Ethics Channel" },
  "nav.contact": { es: "Contacto", en: "Contact" },

  // Common
  "common.learnMore": { es: "Conocer más", en: "Learn more" },
  "common.contact": { es: "Contactar", en: "Contact" },
  "common.send": { es: "Enviar", en: "Send" },
  "common.loading": { es: "Cargando...", en: "Loading..." },
  "common.readMore": { es: "Leer más", en: "Read more" },

  // Footer
  "footer.rights": { es: "Todos los derechos reservados", en: "All rights reserved" },
  "footer.quickLinks": { es: "Enlaces Rápidos", en: "Quick Links" },
  "footer.contact": { es: "Contacto", en: "Contact" },
  "footer.developedBy": { es: "Desarrollado por", en: "Developed by" },

  // CTA
  "cta.becomeSupplier": { es: "Quiero ser Proveedor", en: "Become a Supplier" },
  "cta.requestQuote": { es: "Solicitar Cotización", en: "Request Quote" },
  "cta.contactUs": { es: "Contáctanos", en: "Contact Us" },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) return key
    return translation[language] || translation.es || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
