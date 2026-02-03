import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUpload } from "@/components/ui/file-upload"
import {
  ShieldCheck,
  Lock,
  Scale,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react"
import { toast } from "sonner"
import { denunciasSchema, type DenunciasFormData } from "@/lib/schemas/denunciasSchema"
import { submitDenunciaForm } from "@/lib/services/denunciasFormService"

const guarantees = [
  {
    icon: Lock,
    title: "Confidencialidad Absoluta",
    description: "Tu identidad está protegida",
  },
  {
    icon: ShieldCheck,
    title: "No Represalias",
    description: "Garantizamos tu protección",
  },
  {
    icon: Scale,
    title: "Investigación Imparcial",
    description: "Todos los casos son investigados objetivamente",
  },
  {
    icon: Clock,
    title: "Respuesta Oportuna",
    description: "Seguimiento y resolución eficiente",
  },
]

const motivosDenuncia = [
  "Infracción Políticas / Protocolos Mod. Prevención Delitos",
  "Corrupción / Cohecho",
  "Lavado de Activos",
  "Receptación de especies",
  "Corrupción entre particulares",
  "Conflictos de intereses",
  "Infracción a normas de seguridad laboral",
  "Acoso y maltrato laboral / acoso sexual",
  "Delitos o infracciones tributarias",
  "Delitos patrimoniales",
  "Delitos o infracciones aduaneras",
  "Delitos contra seguridad social",
  "Infracción a medidas de la Autoridad",
  "Otros delitos / otras infracciones",
]

const relacionesEcosur = [
  "Cliente",
  "Proveedor",
  "Trabajador",
  "Colaborador",
  "Vecino",
  "Otro",
]

export default function DenunciasPage() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [trackingCode, setTrackingCode] = useState("")
  const [files, setFiles] = useState<File[]>([])

  const form = useForm<DenunciasFormData>({
    resolver: zodResolver(denunciasSchema),
    defaultValues: {
      email: "",
      nombre: "",
      relacion: "",
      motivo: "",
      lugar: "",
      hechos: "",
      telefono: "",
      personas: "",
      fecha: "",
    },
  })

  const handleSubmit = async (data: DenunciasFormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitDenunciaForm(data, files)
      setTrackingCode(result.trackingCode)
      setIsSubmitted(true)
      toast.success("Denuncia enviada", {
        description: `Su código de seguimiento es: ${result.trackingCode}`,
      })
      form.reset()
      setFiles([])
    } catch (error) {
      toast.error("Error al enviar denuncia", {
        description: error instanceof Error ? error.message : "Por favor, intente nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setTrackingCode("")
    form.reset()
    setFiles([])
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Canal de Denuncias"
          title="Canal de Denuncias Ley 20.393"
          description="Sistema seguro y confidencial para reportar irregularidades"
          backgroundImage="/hero-denuncias.jpg"
          overlayColor="dark"
        />

        {/* Formulario Principal */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-ecosur-dark text-center">
                  Formulario de Denuncia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {isSubmitted ? (
                  // Vista de confirmación
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-ecosur-green/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-12 w-12 text-ecosur-green" />
                    </div>
                    <h2 className="text-2xl font-bold text-ecosur-dark mb-3">Denuncia Registrada</h2>
                    <p className="text-muted-foreground mb-6">Su denuncia ha sido recibida y será procesada de acuerdo a nuestros protocolos.</p>

                    <div className="bg-muted/50 rounded-xl p-6 mb-8 max-w-md mx-auto">
                      <p className="text-sm text-muted-foreground mb-2">Código de Seguimiento:</p>
                      <p className="text-2xl font-bold font-mono text-ecosur-dark tracking-wider">{trackingCode}</p>
                      <p className="text-xs text-muted-foreground mt-3">
                        Guarde este código para consultar el estado de su denuncia
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 max-w-md mx-auto">
                      <p className="text-sm text-blue-900">
                        <strong>Próximos pasos:</strong>
                      </p>
                      <ul className="text-sm text-blue-800 mt-2 space-y-1 text-left">
                        <li>• Su denuncia será revisada en las próximas 24-48 horas</li>
                        <li>• Recibirá un acuse de recibo por email</li>
                        <li>• Se mantendrá la confidencialidad del proceso</li>
                      </ul>
                    </div>

                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="border-ecosur-green text-ecosur-green hover:bg-ecosur-green hover:text-white"
                    >
                      Realizar otra denuncia
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Banner informativo */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div className="text-sm text-amber-900">
                        <p className="font-semibold mb-1">Cómo mantener tu anonimato:</p>
                        <p>
                          Puedes usar un seudónimo en lugar de tu nombre real y crear un email anónimo
                          (ej: ProtonMail, Tutanota) para preservar tu identidad.
                        </p>
                      </div>
                    </div>

                    {/* Formulario */}
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        {/* Grid de campos básicos */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="email">Correo electrónico *</FormLabel>
                                <FormControl>
                                  <Input id="email" type="email" placeholder="correo@ejemplo.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="nombre">Nombre o Seudónimo *</FormLabel>
                                <FormControl>
                                  <Input id="nombre" placeholder="Ingrese su nombre o seudónimo" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="relacion"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="relacion">Relación con ECOSUR *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger id="relacion">
                                      <SelectValue placeholder="Seleccione una opción" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {relacionesEcosur.map((relacion) => (
                                      <SelectItem key={relacion} value={relacion}>
                                        {relacion}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="motivo"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="motivo">Motivo de denuncia *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger id="motivo">
                                      <SelectValue placeholder="Seleccione el motivo" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {motivosDenuncia.map((motivo) => (
                                      <SelectItem key={motivo} value={motivo}>
                                        {motivo}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="telefono"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="telefono">Teléfono (opcional)</FormLabel>
                                <FormControl>
                                  <Input id="telefono" type="tel" placeholder="+56 9 XXXX XXXX" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="personas"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="personas">Cantidad de personas involucradas (opcional)</FormLabel>
                                <FormControl>
                                  <Input id="personas" type="number" min="1" placeholder="Ej: 2" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="fecha"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="fecha">Fecha de los hechos (opcional)</FormLabel>
                                <FormControl>
                                  <Input id="fecha" type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="lugar"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="lugar">Lugar de los hechos *</FormLabel>
                                <FormControl>
                                  <Input id="lugar" placeholder="Ej: Planta Concepción" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Campo de texto largo */}
                        <FormField
                          control={form.control}
                          name="hechos"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="hechos">Descripción de los hechos denunciados *</FormLabel>
                              <FormControl>
                                <Textarea
                                  id="hechos"
                                  placeholder="Describa detalladamente los hechos que desea denunciar"
                                  rows={8}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Upload de archivos */}
                        <div>
                          <p className="text-sm font-medium mb-2">Antecedentes que se adjuntan (opcional)</p>
                          <div className="mt-2">
                            <FileUpload
                              files={files}
                              onChange={setFiles}
                              maxFiles={5}
                              maxSize={10 * 1024 * 1024}
                            />
                          </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            onClick={() => navigate("/")}
                            className="sm:flex-1"
                          >
                            Cancelar
                          </Button>
                          <Button
                            type="submit"
                            size="lg"
                            className="sm:flex-1 bg-ecosur-green hover:bg-ecosur-green/90 text-white font-semibold"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="animate-spin mr-2">⏳</span>
                                Enviando...
                              </>
                            ) : (
                              <>
                                <Lock className="mr-2 h-5 w-5" />
                                Enviar Denuncia
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Garantías del Canal */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ecosur-dark mb-4">Nuestras Garantías</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprometidos con un proceso transparente y justo
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon
                return (
                  <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 rounded-full bg-ecosur-green/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-ecosur-green" />
                      </div>
                      <h3 className="font-semibold text-ecosur-dark mb-2">{guarantee.title}</h3>
                      <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contacto Alternativo */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-ecosur-blue/20">
              <CardHeader>
                <CardTitle className="text-xl text-ecosur-dark">Canales Alternativos de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Si prefieres realizar tu denuncia por otro medio, también puedes contactarnos a través de:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Mail className="h-5 w-5 text-ecosur-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ecosur-dark text-sm">Email</p>
                      <a
                        href="mailto:denuncias@ecosurspa.com"
                        className="text-sm text-ecosur-blue hover:underline"
                      >
                        denuncias@ecosurspa.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Phone className="h-5 w-5 text-ecosur-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ecosur-dark text-sm">Teléfono</p>
                      <a href="tel:+56412460097" className="text-sm text-ecosur-blue hover:underline">
                        +56 41 2460097
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-blue-900">
                    <strong>Nota importante:</strong> Todas las denuncias son tratadas con estricta confidencialidad
                    de acuerdo a la Ley 20.393 sobre Responsabilidad Penal de las Personas Jurídicas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
