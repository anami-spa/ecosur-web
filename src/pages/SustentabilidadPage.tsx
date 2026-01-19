import { Image } from "@/components/ui/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { CTASection } from "@/components/cta-section"
import { Leaf, Recycle, ShieldCheck, ArrowRight } from "lucide-react"

const acciones = [
  {
    icon: Recycle,
    title: "Reciclaje y Valorización",
    description: "Más de 5.000.000 de toneladas anuales de metales no ferrosos reciclados",
    color: "ecosur-green",
  },
  {
    icon: ShieldCheck,
    title: "Procesos Responsables",
    description: "Seguridad laboral, ética profesional, orden y trazabilidad en todas nuestras operaciones",
    color: "ecosur-blue",
  },
  {
    icon: Leaf,
    title: "Reducción de Impacto",
    description: "Contribuimos a disminuir la extracción de recursos naturales y las emisiones de CO₂",
    color: "ecosur-green",
  },
]

const cicloEconomia = [
  { step: "01", title: "Recolección", icon: "📦" },
  { step: "02", title: "Clasificación", icon: "🔍" },
  { step: "03", title: "Valorización", icon: "⚙️" },
  { step: "04", title: "Reutilización", icon: "♻️" },
]

export default function SustentabilidadPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Economía Circular"
          title="Compromiso con la Economía Circular"
          description="Transformando residuos en recursos para un futuro sostenible"
          backgroundImage="/hero-sustentabilidad.jpg"
          overlayColor="green"
        />

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-ecosur-dark mb-8">Nuestra Visión de Sustentabilidad</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Para ECOSUR SPA, sustentabilidad significa transformar residuos metálicos en recursos útiles mediante
                procesos responsables, seguros y trazables, reduciendo el impacto ambiental y aportando a la economía
                circular.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f0f9ee]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-ecosur-green uppercase tracking-wider">
                Nuestro Impacto
              </span>
              <h2 className="mt-3 text-3xl font-bold text-ecosur-dark">Acciones Concretas</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {acciones.map((accion) => (
                <div
                  key={accion.title}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                      accion.color === "ecosur-green" ? "bg-ecosur-green/10" : "bg-ecosur-blue/10"
                    }`}
                  >
                    <accion.icon
                      className={`h-8 w-8 ${
                        accion.color === "ecosur-green" ? "text-ecosur-green" : "text-ecosur-blue"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-ecosur-dark mb-3">{accion.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{accion.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-ecosur-green/20">
                <div className="text-6xl md:text-7xl font-bold text-ecosur-green mb-2">5M+</div>
                <div className="text-lg text-muted-foreground">Toneladas anuales recicladas</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-ecosur-green uppercase tracking-wider">El Ciclo</span>
              <h2 className="mt-3 text-3xl font-bold text-ecosur-dark">Economía Circular</h2>
            </div>

            {/* Diagrama del ciclo */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-2 mb-12">
              {cicloEconomia.map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-ecosur-green/10 border-2 border-ecosur-green flex flex-col items-center justify-center hover:bg-ecosur-green hover:text-white transition-colors duration-300 group cursor-default">
                      <span className="text-3xl mb-1">{item.icon}</span>
                      <span className="text-xs font-semibold text-ecosur-green group-hover:text-white uppercase tracking-wide">
                        {item.title}
                      </span>
                    </div>
                    <span className="mt-2 text-sm font-bold text-ecosur-dark">{item.step}</span>
                  </div>
                  {index < cicloEconomia.length - 1 && (
                    <ArrowRight className="h-8 w-8 text-ecosur-green mx-2 md:mx-4 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cerramos el ciclo de vida de los metales, evitando que terminen en vertederos y reintegrándolos a
                cadenas productivas globales.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-ecosur-dark text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/compromiso-futuro.jpg"
                    alt="Compromiso con el futuro ECOSUR"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <span className="text-sm font-semibold text-ecosur-green uppercase tracking-wider">
                  Mirando Adelante
                </span>
                <h2 className="mt-3 text-3xl font-bold mb-6">Compromiso Futuro</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Seguimos trabajando para mejorar continuamente nuestros procesos y ampliar nuestro impacto positivo
                  en las comunidades donde operamos.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="px-6 py-3 rounded-full bg-ecosur-green/20 border border-ecosur-green/30">
                    <span className="text-ecosur-green font-semibold">Mejora Continua</span>
                  </div>
                  <div className="px-6 py-3 rounded-full bg-ecosur-blue/20 border border-ecosur-blue/30">
                    <span className="text-ecosur-blue font-semibold">Impacto Positivo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
