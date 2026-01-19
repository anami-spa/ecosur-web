import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes Somos", href: "/quienes-somos" },
  { name: "Servicios", href: "/servicios" },
  { name: "Sustentabilidad", href: "/sustentabilidad" },
  { name: "Canal de Denuncias", href: "/denuncias" },
  { name: "Contacto", href: "/contacto" },
]

export function Footer() {
  return (
    <footer className="bg-ecosur-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Columna 1 - Acerca de ECOSUR */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/logo-verde.png" alt="ECOSUR Reciclaje" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Reciclaje industrial con trazabilidad y cumplimiento. Desde el sur de Chile hacia el mundo.
            </p>
            <div className="inline-block bg-ecosur-green/10 border border-ecosur-green/30 rounded-lg px-4 py-2">
              <p className="text-xs text-ecosur-green font-medium">
                Única empresa del sur con Modelo de Prevención de Delitos
              </p>
            </div>
          </div>

          {/* Columna 2 - Enlaces Rápidos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ecosur-green mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-ecosur-green hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Contacto Rápido */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ecosur-green mb-4">Contacto Rápido</h3>
            <ul className="space-y-4">
              <li>
                <span className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-ecosur-green" />
                  Caupolicán 1580, Concepción
                </span>
              </li>
              <li>
                <a
                  href="tel:+56412460097"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-ecosur-green transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0 text-ecosur-green" />
                  (56) 41 2460097
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@ecosurspa.com"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-ecosur-green transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0 text-ecosur-green" />
                  contacto@ecosurspa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2025 ECOSUR SPA. Todos los derechos reservados.</p>
            <a
              href="https://anami.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-xs text-transparent hover:text-gray-600 transition-colors duration-300"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Desarrollado por Anami SPA
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
