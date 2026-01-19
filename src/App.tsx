import { Routes, Route } from "react-router-dom"
import { LanguageProvider } from "@/contexts/language-context"
import { SkipToContent } from "@/components/skip-to-content"

// Pages
import HomePage from "@/src/pages/HomePage"
import QuienesSomosPage from "@/src/pages/QuienesSomosPage"
import ServiciosPage from "@/src/pages/ServiciosPage"
import SustentabilidadPage from "@/src/pages/SustentabilidadPage"
import DenunciasPage from "@/src/pages/DenunciasPage"
import ContactoPage from "@/src/pages/ContactoPage"

export default function App() {
  return (
    <LanguageProvider>
      <SkipToContent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<QuienesSomosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/sustentabilidad" element={<SustentabilidadPage />} />
        <Route path="/denuncias" element={<DenunciasPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </LanguageProvider>
  )
}
