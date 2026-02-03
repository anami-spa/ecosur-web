import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Globe } from "lucide-react"
import { toast } from "sonner"
import { contactSchema, type ContactFormData } from "@/lib/schemas/contactSchema"
import { submitContactForm } from "@/lib/services/contactFormService"

const inquiryTypes = [
  { value: "Consulta general", label: "Consulta general" },
  { value: "Ser proveedor", label: "Ser proveedor" },
  { value: "Solicitar cotización", label: "Solicitar cotización" },
  { value: "Otro", label: "Otro" },
]

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  })

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      await submitContactForm(data)
      setIsSubmitted(true)
      toast.success("Mensaje enviado", {
        description: "Nos contactaremos con usted pronto.",
      })
      form.reset()
    } catch (error) {
      toast.error("Error al enviar", {
        description: error instanceof Error ? error.message : "Por favor, intente nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    form.reset()
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Contacto"
          title="Contáctanos"
          description="Estamos disponibles para atender tus consultas y requerimientos"
          backgroundImage="/hero-contacto.jpg"
          overlayColor="dark"
        />

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Columna Izquierda - Información de Contacto */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-ecosur-dark mb-6">Información de Contacto</h2>

                  {/* Dirección */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-ecosur-green/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-ecosur-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ecosur-dark mb-1">Dirección</h3>
                      <p className="text-muted-foreground">Caupolicán 1580, Ciudad de Concepción, Chile</p>
                    </div>
                  </div>

                  {/* Teléfonos */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-ecosur-green/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-ecosur-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ecosur-dark mb-1">Teléfonos</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+56412460097" className="hover:text-ecosur-green transition-colors">
                          (56) 41 2460097
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+56412460098" className="hover:text-ecosur-green transition-colors">
                          (56) 41 2460098
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Correos */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-ecosur-green/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-ecosur-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ecosur-dark mb-1">Correos Electrónicos</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:contacto@ecosurspa.com" className="hover:text-ecosur-green transition-colors">
                          contacto@ecosurspa.com
                        </a>
                        <span className="text-sm text-gray-400 ml-2">(General)</span>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="mailto:ventas@ecosurspa.com" className="hover:text-ecosur-green transition-colors">
                          ventas@ecosurspa.com
                        </a>
                        <span className="text-sm text-gray-400 ml-2">(Comercial)</span>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="mailto:denuncias@ecosurspa.com" className="hover:text-ecosur-green transition-colors">
                          denuncias@ecosurspa.com
                        </a>
                        <span className="text-sm text-gray-400 ml-2">(Canal de Denuncias)</span>
                      </p>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-ecosur-green/10 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-ecosur-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ecosur-dark mb-1">Horario de Atención</h3>
                      <p className="text-muted-foreground">Lunes a Viernes: 08:30 - 14:00 hrs y 15:00 - 18:30 hrs</p>
                    </div>
                  </div>

                  {/* Cobertura */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ecosur-blue/10 flex items-center justify-center shrink-0">
                      <Globe className="h-6 w-6 text-ecosur-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ecosur-dark mb-1">Cobertura</h3>
                      <p className="text-muted-foreground">Región del Maule hasta Región de Magallanes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha - Formulario */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-ecosur-dark mb-6">Envíanos un mensaje</h2>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-ecosur-green/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-ecosur-green" />
                      </div>
                      <h3 className="text-xl font-semibold text-ecosur-dark mb-2">¡Mensaje enviado!</h3>
                      <p className="text-muted-foreground mb-6">
                        Gracias por contactarnos. Un representante se comunicará con usted a la brevedad.
                      </p>
                      <Button
                        onClick={resetForm}
                        variant="outline"
                        className="border-ecosur-green text-ecosur-green hover:bg-ecosur-green hover:text-white bg-transparent"
                      >
                        Enviar otro mensaje
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre completo *</FormLabel>
                              <FormControl>
                                <Input placeholder="Su nombre completo" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="correo@ejemplo.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Teléfono *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+56 9 XXXX XXXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Empresa (opcional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Nombre de su empresa" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Asunto *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Seleccione una opción" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {inquiryTypes.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                      {type.label}
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
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mensaje *</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Escriba su mensaje aquí..." rows={5} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-ecosur-green hover:bg-ecosur-green/90 text-white font-semibold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin mr-2">⏳</span>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Enviar Mensaje
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-0">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.2876548345123!2d-73.0512!3d-36.8270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5c2f5a1c5c5%3A0x5a1c5c5f5a1c5c5!2sCaupolic%C3%A1n%201580%2C%20Concepci%C3%B3n%2C%20B%C3%ADo%20B%C3%ADo%2C%20Chile!5e0!3m2!1ses!2scl!4v1704067200000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación ECOSUR - Caupolicán 1580, Concepción"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
