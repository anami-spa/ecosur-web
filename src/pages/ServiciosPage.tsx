import { Image } from "@/components/ui/image"
import { Link } from "@/components/ui/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Package,
  Boxes,
  CheckCircle2,
  Clock,
  Award,
  CircleDot,
  Hexagon,
  Pentagon,
  Octagon,
} from "lucide-react"

const materialesCompra = [
  { name: "Chatarra de Aluminios", icon: Hexagon },
  { name: "Chatarra de Aceros", icon: Octagon },
  { name: "Chatarra de Bronces", icon: Pentagon },
  { name: "Chatarra de Cobres", icon: CircleDot },
]

const materialesVenta = [
  { name: "Chatarra de Aluminios", icon: Hexagon },
  { name: "Chatarra de Aceros", icon: Octagon },
  { name: "Chatarra de Bronces", icon: Pentagon },
  { name: "Chatarra de Cobres", icon: CircleDot },
]

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Nuestros Servicios"
          title="Compra y Venta de Metales No Ferrosos"
          description="Soluciones integrales con estándares internacionales ISRI"
          backgroundImage="/hero-servicios.jpg"
          overlayColor="dark"
        />

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Badge ISRI destacado */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-ecosur-green/10 border border-ecosur-green/30 rounded-full">
                <Award className="h-6 w-6 text-ecosur-green" />
                <span className="font-semibold text-ecosur-dark">
                  Certificación ISRI - Instituto de Scrap Recycling Industries
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* COMPRA DE METALES - Acento Azul */}
              <div
                id="compra"
                className="bg-card p-8 lg:p-10 rounded-2xl border-2 border-ecosur-blue/20 hover:border-ecosur-blue/50 transition-all hover:shadow-xl group"
              >
                <div className="w-16 h-16 rounded-xl bg-ecosur-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Package className="h-8 w-8 text-ecosur-blue" />
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-ecosur-dark mb-4">Compra de Metales No Ferrosos</h2>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Adquirimos chatarra de metales no ferrosos de proveedores certificados, cumpliendo con todos los
                  requisitos legales y de trazabilidad.
                </p>

                {/* Materiales que compramos */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-ecosur-blue uppercase tracking-wider mb-4">
                    Materiales que compramos
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {materialesCompra.map((material) => (
                      <div
                        key={material.name}
                        className="flex items-center gap-3 p-3 bg-ecosur-blue/5 rounded-lg hover:bg-ecosur-blue/10 transition-colors"
                      >
                        <material.icon className="h-5 w-5 text-ecosur-blue shrink-0" />
                        <span className="text-sm font-medium text-foreground">{material.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proceso */}
                <div className="mb-8 p-4 bg-muted/50 rounded-xl border border-border">
                  <h3 className="text-sm font-semibold text-ecosur-dark mb-2">Proceso para Proveedores</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Para ingresar como proveedor, debe contactar al Departamento Comercial, donde se le informará sobre
                    los requerimientos y antecedentes necesarios que debe presentar.
                  </p>
                </div>

                <Button asChild size="lg" className="w-full bg-ecosur-blue hover:bg-ecosur-blue/90 text-white">
                  <Link href="/contacto">
                    Quiero ser Proveedor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* VENTA DE METALES - Acento Verde */}
              <div
                id="venta"
                className="bg-card p-8 lg:p-10 rounded-2xl border-2 border-ecosur-green/20 hover:border-ecosur-green/50 transition-all hover:shadow-xl group"
              >
                <div className="w-16 h-16 rounded-xl bg-ecosur-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Boxes className="h-8 w-8 text-ecosur-green" />
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-ecosur-dark mb-4">Venta de Metales No Ferrosos</h2>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Comercializamos chatarra de metales no ferrosos clasificada y procesada según estándares
                  internacionales del Instituto de Scrap Recycling Industries (ISRI).
                </p>

                {/* Materiales que vendemos */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-ecosur-green uppercase tracking-wider mb-4">
                    Materiales que vendemos
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {materialesVenta.map((material) => (
                      <div
                        key={material.name}
                        className="flex items-center gap-3 p-3 bg-ecosur-green/5 rounded-lg hover:bg-ecosur-green/10 transition-colors"
                      >
                        <material.icon className="h-5 w-5 text-ecosur-green shrink-0" />
                        <span className="text-sm font-medium text-foreground">{material.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calidad Certificada */}
                <div className="mb-4 p-4 bg-ecosur-green/5 rounded-xl border border-ecosur-green/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-ecosur-green shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-ecosur-dark mb-1">Calidad Certificada</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Toda nuestra gama de productos es clasificada y procesada según los requerimientos ISRI,
                        garantizando estándares internacionales de calidad.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Proceso */}
                <div className="mb-8 p-4 bg-muted/50 rounded-xl border border-border">
                  <h3 className="text-sm font-semibold text-ecosur-dark mb-2">Cómo Comprar</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Para adquirir nuestros productos, contacte al Departamento de Negocios a través de nuestro correo
                    electrónico, formulario de contacto o números telefónicos.
                  </p>
                </div>

                <Button asChild size="lg" className="w-full bg-ecosur-green hover:bg-ecosur-green/90 text-ecosur-dark">
                  <Link href="/contacto">
                    Solicitar Cotización
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-ecosur-dark text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold text-ecosur-green uppercase tracking-wider">
                  Nuestro Proceso
                </span>
                <h2 className="mt-3 text-3xl font-bold">Materiales procesados con estándares ISRI</h2>
                <p className="mt-6 text-gray-300 leading-relaxed">
                  Todos nuestros materiales son clasificados, procesados y preparados siguiendo los estándares
                  internacionales del Instituto de Scrap Recycling Industries, garantizando la máxima calidad para
                  nuestros clientes nacionales e internacionales.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Clasificación según especificaciones ISRI",
                    "Trazabilidad completa de origen",
                    "Documentación legal y certificados",
                    "Control de calidad en cada etapa",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-ecosur-green shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/industrial-warehouse-interior-with-organized-metal-.jpg"
                    alt="Materiales procesados según estándares ISRI"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-ecosur-green text-ecosur-dark p-4 rounded-xl shadow-xl">
                  <Award className="h-8 w-8 mb-2" />
                  <div className="text-sm font-bold">Estándar ISRI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-ecosur-green/10 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-ecosur-green" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-ecosur-dark mb-2">Horario de Atención</h2>
                    <p className="text-lg text-muted-foreground">
                      Lunes a Viernes: <span className="font-semibold text-foreground">08:30 - 14:00 hrs</span> y{" "}
                      <span className="font-semibold text-foreground">15:00 - 18:30 hrs</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-ecosur-blue hover:bg-ecosur-blue/90 text-white">
                    <Link href="/contacto">
                      Quiero ser Proveedor
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-ecosur-green hover:bg-ecosur-green/90 text-ecosur-dark">
                    <Link href="/contacto">
                      Solicitar Cotización
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
