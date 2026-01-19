import { Image } from "@/components/ui/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { CTASection } from "@/components/cta-section"
import { Shield, FileCheck, AlertTriangle, Award, Heart, Leaf, Users, Target, TrendingUp } from "lucide-react"

const differentiators = [
  {
    icon: Shield,
    title: "Cumplimiento Normativo",
    description: "Modelo de Prevención de Delitos (Ley 20.393) - Únicos en el sur de Chile",
  },
  {
    icon: FileCheck,
    title: "Trazabilidad Total",
    description: "Orden documental y seguimiento completo de operaciones",
  },
  {
    icon: AlertTriangle,
    title: "Seguridad Operacional",
    description: "Cultura de prevención y mejora continua",
  },
  {
    icon: Award,
    title: "Estándares Internacionales",
    description: "Procesos alineados con ISRI (Institute of Scrap Recycling Industries)",
  },
]

const values = [
  { icon: Heart, label: "Integridad y Transparencia" },
  { icon: Shield, label: "Seguridad Operacional" },
  { icon: TrendingUp, label: "Excelencia y Mejora Continua" },
  { icon: Leaf, label: "Compromiso con la Sustentabilidad" },
  { icon: Users, label: "Orientación al Cliente" },
]

export default function QuienesSomosPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Nuestra Empresa"
          title="Profesionalismo y Transparencia en Reciclaje Industrial"
          description="Valorizando metales no ferrosos con estándares de seguridad, trazabilidad y cumplimiento."
          backgroundImage="/hero-quienes-somos.jpg"
          overlayColor="dark"
        />

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-ecosur-dark mb-6">
                  Profesionalismo y Transparencia en Reciclaje Industrial
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ECOSUR SPA fue fundada por un equipo con amplia experiencia en gestión de materiales reciclables, con
                  el propósito de profesionalizar la valorización de metales no ferrosos en el sur de Chile. Nuestro
                  compromiso es ofrecer un servicio confiable, con procesos claros, seguridad operacional y trazabilidad
                  completa, conectando la industria nacional con cadenas globales de reciclaje.
                </p>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                  <Image
                    src="/warehouse-workers-discussing-production-schedule-m.jpg"
                    alt="Equipo ECOSUR trabajando en instalaciones"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-ecosur-green/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-ecosur-green/10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ecosur-green/20 mb-8">
              <Target className="h-8 w-8 text-ecosur-green" />
            </div>
            <h2 className="text-3xl font-bold text-ecosur-dark mb-6">Nuestra Misión</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Contribuir a una economía circular eficiente, valorizando metales no ferrosos con estándares de seguridad,
              trazabilidad y cumplimiento, generando valor sostenible para clientes, colaboradores y el entorno.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-ecosur-green uppercase tracking-wider">
                Nuestros Diferenciadores
              </span>
              <h2 className="mt-3 text-3xl font-bold text-ecosur-dark">¿Por qué elegirnos?</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {differentiators.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-lg hover:border-ecosur-green/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-ecosur-green/10 flex items-center justify-center mb-6 group-hover:bg-ecosur-green/20 transition-colors">
                    <item.icon className="h-7 w-7 text-ecosur-green" />
                  </div>
                  <h3 className="text-xl font-bold text-ecosur-dark mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-ecosur-green uppercase tracking-wider">Nuestros Valores</span>
              <h2 className="mt-3 text-3xl font-bold text-ecosur-dark">Los principios que nos guían</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {values.map((value, index) => (
                <div
                  key={value.label}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white border border-border shadow-sm hover:border-ecosur-green/50 hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-ecosur-green/10 flex items-center justify-center">
                    <value.icon className="h-5 w-5 text-ecosur-green" />
                  </div>
                  <span className="font-semibold text-ecosur-dark">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
