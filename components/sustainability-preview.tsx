import { Link } from "react-router-dom"
import { ArrowRight, Leaf, RotateCcw, Factory, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const impacts = [
  {
    icon: RotateCcw,
    value: "10K+",
    label: "Toneladas recicladas",
    description: "Material recuperado y reintegrado a la economía",
  },
  {
    icon: Factory,
    value: "50%",
    label: "Reducción de CO₂",
    description: "Comparado con la extracción minera tradicional",
  },
  {
    icon: Globe2,
    value: "100%",
    label: "Trazabilidad",
    description: "Seguimiento completo de cada material",
  },
]

export function SustainabilityPreview() {
  return (
    <section className="py-24 bg-ecosur-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ecosur-green/20 border border-ecosur-green/30 mb-6">
              <Leaf className="h-4 w-4 text-ecosur-green" />
              <span className="text-sm font-medium text-ecosur-green">Sustentabilidad</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Comprometidos con un <span className="text-ecosur-green">futuro sustentable</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              En ECOSUR, la sustentabilidad no es solo un compromiso, es nuestra razón de ser. Cada tonelada de metal
              que reciclamos representa un paso hacia una economía más circular y un planeta más limpio.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Nuestros procesos están diseñados para minimizar el impacto ambiental, maximizar la recuperación de
              materiales y contribuir activamente a los objetivos de desarrollo sustentable.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-ecosur-green hover:bg-ecosur-green/90 text-ecosur-dark font-semibold"
            >
              <Link to="/sustentabilidad">
                Conocer Nuestro Impacto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {impacts.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-ecosur-green/30 transition-colors"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-ecosur-green/20 flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-ecosur-green" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-ecosur-green">{item.value}</div>
                  <div className="text-lg font-semibold text-white mt-1">{item.label}</div>
                  <div className="text-sm text-gray-400 mt-1">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
