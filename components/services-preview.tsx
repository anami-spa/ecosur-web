import { Link } from "react-router-dom"
import { ArrowRight, Package, Truck, Scale, FileCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Package,
    title: "Compra de Metales",
    description:
      "Adquirimos cobre, aluminio, bronce, latón y otros metales no ferrosos con precios competitivos del mercado internacional.",
    href: "/servicios#compra",
  },
  {
    icon: Truck,
    title: "Venta de Metales",
    description: "Comercializamos metales procesados y certificados para industrias nacionales e internacionales.",
    href: "/servicios#venta",
  },
  {
    icon: Scale,
    title: "Pesaje Certificado",
    description: "Contamos con básculas certificadas y sistemas de pesaje que garantizan total transparencia.",
    href: "/servicios#pesaje",
  },
  {
    icon: FileCheck,
    title: "Trazabilidad",
    description: "Sistema completo de seguimiento desde el origen hasta el destino final de cada material.",
    href: "/servicios#trazabilidad",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-ecosur-green uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ecosur-dark text-balance">
            Soluciones integrales en reciclaje de metales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Ofrecemos un servicio completo que abarca desde la compra hasta la comercialización de metales no ferrosos,
            con los más altos estándares de calidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-ecosur-green/10 text-ecosur-green group-hover:bg-ecosur-green group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-ecosur-dark mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-sm font-medium text-ecosur-blue hover:text-ecosur-green transition-colors"
                >
                  Más información
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-ecosur-blue hover:bg-ecosur-blue/90 text-white">
            <Link to="/servicios">
              Ver Todos los Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
