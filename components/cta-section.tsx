import { Link } from "react-router-dom"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-ecosur-blue to-ecosur-blue/90 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">¿Listo para comenzar a trabajar con nosotros?</h2>
          <p className="mt-6 text-lg text-blue-100 leading-relaxed">
            Contáctenos hoy para obtener una cotización personalizada. Nuestro equipo está preparado para ofrecerle las
            mejores soluciones en reciclaje de metales.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button
              asChild
              size="lg"
              className="bg-ecosur-green hover:bg-ecosur-green/90 text-ecosur-dark font-semibold px-8"
            >
              <Link to="/contacto">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 bg-transparent"
            >
              <a href="tel:+56912345678">
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-blue-100">
            <a href="mailto:contacto@ecosur.cl" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              contacto@ecosur.cl
            </a>
            <a href="tel:+56912345678" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              +56 9 1234 5678
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
