import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ShieldCheck,
  Lock,
  Scale,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Upload,
  Plus,
  X,
} from "lucide-react"

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const code = `ECO-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
    setTrackingCode(code)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleCancel = () => {
    if (window.confirm("¿Está seguro que desea cancelar? Se perderán los datos ingresados.")) {
      navigate("/")
    }
  }

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main>
          <PageHeader
            badge="Confirmación"
            title="Denuncia Registrada"
            description="Gracias por su confianza"
            backgroundImage="/hero-denuncias.jpg"
            overlayColor="blue"
          />

          <section className="py-20 bg-white">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
              <Card className="border-ecosur-green/20 shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-ecosur-green/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-ecosur-green" />
                  </div>
                  <CardTitle className="text-ecosur-dark">Su denuncia ha sido recibida</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Guarde su código de seguimiento para consultar el estado de su caso
                  </p>
                  <div className="bg-muted p-6 rounded-xl mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Código de Seguimiento</p>
                    <p className="text-2xl font-bold text-ecosur-dark font-mono">{trackingCode}</p>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-2 mb-6">
                    <p>
                      Todas las denuncias son gestionadas por nuestro Encargado de Prevención de Delitos según
                      protocolos establecidos.
                    </p>
                  </div>

                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-ecosur-blue hover:bg-ecosur-blue/90 text-white"
                  >
                    Realizar otra denuncia
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Ley 20.393"
          title="Canal de Denuncias"
          description="Espacio confidencial y seguro para reportar irregularidades"
          backgroundImage="/hero-denuncias.jpg"
          overlayColor="blue"
        />

        {/* Formulario de Denuncia */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-ecosur-dark text-center">Formulario de Denuncia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Banner Importante */}
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-800 mb-1">IMPORTANTE</p>
                      <p className="text-sm text-amber-700">
                        Para realizar una denuncia de forma anónima debe incorporar un <strong>seudónimo</strong> en el 
                        campo correspondiente e incorporar además un <strong>correo electrónico</strong> que no contenga 
                        datos que puedan identificarlo. El correo electrónico le permitirá realizar un seguimiento del 
                        proceso asociado a su denuncia.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid 2 columnas */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Correo electrónico */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-ecosur-dark">
                        Correo electrónico <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="correo@ejemplo.com" 
                        required
                        className="focus:border-ecosur-green focus:ring-ecosur-green"
                      />
                    </div>

                    {/* Nombre o Seudónimo */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-ecosur-dark">
                        Nombre o Seudónimo <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Ingrese su nombre o seudónimo" 
                        required
                        className="focus:border-ecosur-green focus:ring-ecosur-green"
                      />
                    </div>

                    {/* Teléfono */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-ecosur-dark">Teléfono</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+56 9 XXXX XXXX"
                        className="focus:border-ecosur-green focus:ring-ecosur-green"
                      />
                    </div>

                    {/* Relación con ECOSUR */}
                    <div className="space-y-2">
                      <Label htmlFor="relation" className="text-ecosur-dark">
                        ¿Cuál es su relación con ECOSUR? <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="relation" className="focus:border-ecosur-green focus:ring-ecosur-green">
                          <SelectValue placeholder="Seleccionar..." />
                        </SelectTrigger>
                        <SelectContent>
                          {relacionesEcosur.map((relacion) => (
                            <SelectItem key={relacion} value={relacion.toLowerCase()}>
                              {relacion}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Motivo de denuncia - Full width */}
                  <div className="space-y-2">
                    <Label htmlFor="motivo" className="text-ecosur-dark">
                      Seleccione el motivo de su denuncia: <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="motivo" className="focus:border-ecosur-green focus:ring-ecosur-green">
                        <SelectValue placeholder="Seleccionar motivo..." />
                      </SelectTrigger>
                      <SelectContent>
                        {motivosDenuncia.map((motivo) => (
                          <SelectItem key={motivo} value={motivo.toLowerCase().replace(/\s+/g, "-")}>
                            {motivo}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Grid 2 columnas: Personas involucradas y Fecha */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Personas involucradas */}
                    <div className="space-y-2">
                      <Label htmlFor="personas" className="text-ecosur-dark">
                        ¿Cuántas personas están involucradas?
                      </Label>
                      <Input 
                        id="personas" 
                        type="number" 
                        min="1"
                        placeholder="Número de personas"
                        className="focus:border-ecosur-green focus:ring-ecosur-green"
                      />
                    </div>

                    {/* Fecha de los hechos */}
                    <div className="space-y-2">
                      <Label htmlFor="fecha" className="text-ecosur-dark">
                        ¿Cuándo ocurrieron los hechos?
                      </Label>
                      <Input 
                        id="fecha" 
                        type="date"
                        className="focus:border-ecosur-green focus:ring-ecosur-green"
                      />
                    </div>
                  </div>

                  {/* Lugar de los hechos */}
                  <div className="space-y-2">
                    <Label htmlFor="lugar" className="text-ecosur-dark">
                      ¿Dónde ocurrieron los hechos? <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="lugar" 
                      type="text" 
                      placeholder="Lugar donde ocurrieron los hechos"
                      required
                      className="focus:border-ecosur-green focus:ring-ecosur-green"
                    />
                  </div>

                  {/* Hechos denunciados */}
                  <div className="space-y-2">
                    <Label htmlFor="hechos" className="text-ecosur-dark">
                      Hechos denunciados <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="hechos"
                      placeholder="Describa detalladamente los hechos que desea denunciar"
                      rows={8}
                      required
                      className="resize-none focus:border-ecosur-green focus:ring-ecosur-green"
                    />
                  </div>

                  {/* Adjuntar archivos */}
                  <div className="space-y-2">
                    <Label className="text-ecosur-dark">Antecedentes que se adjuntan</Label>
                    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-ecosur-green/50 transition-colors bg-muted/20">
                      <input 
                        type="file" 
                        id="files" 
                        className="hidden" 
                        multiple
                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="files" className="cursor-pointer">
                        <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                        <p className="text-sm font-medium text-ecosur-dark">
                          Arrastra archivos aquí o haz clic para seleccionar
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Tamaño máximo 10MB por archivo
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Formatos: jpg, jpeg, png, pdf, doc, docx
                        </p>
                      </label>
                    </div>
                    
                    {/* Lista de archivos seleccionados */}
                    {files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-muted/50 px-3 py-2 rounded-lg">
                            <span className="text-sm text-ecosur-dark truncate max-w-[80%]">{file.name}</span>
                            <button 
                              type="button" 
                              onClick={() => removeFile(index)}
                              className="text-muted-foreground hover:text-red-500 transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => document.getElementById("files")?.click()}
                          className="flex items-center gap-1 text-sm text-ecosur-blue hover:text-ecosur-blue/80 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                          Añadir más
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Captcha placeholder */}
                  <div className="bg-muted/50 border border-border rounded-lg p-4 flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-muted-foreground rounded" />
                    <span className="text-sm text-muted-foreground">No soy un robot</span>
                    <div className="ml-auto text-xs text-muted-foreground">reCAPTCHA</div>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={handleCancel}
                      className="sm:flex-1 border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent"
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
                          <span className="animate-spin mr-2">
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                          </span>
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
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Garantías */}
        <section className="py-12 bg-ecosur-blue/5">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {guarantees.map((item) => (
                <div key={item.title} className="text-center p-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-ecosur-blue/10 flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-ecosur-blue" />
                  </div>
                  <h3 className="font-semibold text-ecosur-dark text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto alternativo */}
        <section className="py-8 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">
              También puede enviar su denuncia directamente a:{" "}
              <a href="mailto:denuncias@ecosurspa.com" className="text-ecosur-blue font-semibold hover:underline">
                denuncias@ecosurspa.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
