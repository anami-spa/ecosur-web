import { Link } from "react-router-dom"
import { ArrowRight, Award, Users, Leaf, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: Award,
    title: "Certificaciones",
    description: "ISO 9001 y certificaciones ambientales",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales especializados en la industria",
  },
  {
    icon: Leaf,
    title: "Sustentabilidad",
    description: "Compromiso con el medio ambiente",
  },
  {
    icon: Building2,
    title: "Infraestructura",
    description: "Instalaciones modernas y equipadas",
  },
]

export function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/modern-industrial-facility-interior-metal-processi.jpg" alt="Instalaciones ECOSUR" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-ecosur-dark text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <div className="text-4xl font-bold text-ecosur-green mb-1">15+</div>
              <div className="text-sm text-gray-300">Años liderando la industria</div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-ecosur-green/30 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm font-semibold text-ecosur-green uppercase tracking-wider">Quiénes Somos</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ecosur-dark text-balance">
              Líderes en economía circular del sur de Chile
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              ECOSUR SPA es una empresa dedicada al reciclaje y valorización de metales no ferrosos, comprometida con la
              sustentabilidad y el desarrollo de la economía circular en la región.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Trabajamos con los más altos estándares de calidad, seguridad y transparencia, ofreciendo soluciones
              integrales a clientes industriales, institucionales y gubernamentales.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-ecosur-green/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-ecosur-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-ecosur-dark text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="mt-8 border-ecosur-dark text-ecosur-dark hover:bg-ecosur-dark hover:text-white bg-transparent"
            >
              <Link to="/quienes-somos">
                Conocer Más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
