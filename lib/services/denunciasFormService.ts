import type { DenunciasFormData } from '../schemas/denunciasSchema'
import { uploadDenunciaFiles } from '../config/supabase'

/**
 * Genera un código único de seguimiento para la denuncia
 */
function generateTrackingCode(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `ECO-${timestamp}-${random}`
}

/**
 * Envía una denuncia con archivos adjuntos
 */
export async function submitDenunciaForm(
  data: DenunciasFormData,
  files: File[]
): Promise<{ success: boolean; trackingCode: string }> {
  try {
    // 1. Generar código de seguimiento
    const trackingCode = generateTrackingCode()

    // 2. Subir archivos a Supabase (si hay)
    let fileUrls: { url: string; name: string }[] = []
    if (files.length > 0) {
      fileUrls = await uploadDenunciaFiles(files)
    }

    // 3. Preparar datos para Web3Forms
    const formData = new FormData()

    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_DENUNCIAS_KEY)
    formData.append('subject', `[ECOSUR Denuncia] ${data.motivo}`)
    formData.append('from_name', data.nombre)
    formData.append('cc', 'anami.empresa@gmail.com') // Copia de respaldo
    formData.append('redirect', 'false')

    // Código de seguimiento (importante para auto-responder)
    formData.append('tracking_code', trackingCode)

    // Datos del formulario
    formData.append('email', data.email)
    formData.append('nombre', data.nombre)
    formData.append('relacion', data.relacion)
    formData.append('motivo', data.motivo)
    formData.append('lugar', data.lugar)
    formData.append('hechos', data.hechos)
    formData.append('telefono', data.telefono || 'No proporcionado')
    formData.append('personas_involucradas', data.personas || 'No especificado')
    formData.append('fecha_hechos', data.fecha || 'No especificada')

    // Archivos adjuntos (URLs de Supabase)
    if (fileUrls.length > 0) {
      const filesInfo = fileUrls.map((f, i) => `${i + 1}. ${f.name}: ${f.url}`).join('\n')
      formData.append('archivos_adjuntos', filesInfo)
    } else {
      formData.append('archivos_adjuntos', 'Sin archivos adjuntos')
    }

    // 4. Enviar a Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error('Error al enviar la denuncia')
    }

    const result = await response.json()

    if (!result.success) {
      throw new Error(result.message || 'Error al procesar la denuncia')
    }

    return { success: true, trackingCode }
  } catch (error) {
    console.error('Error en submitDenunciaForm:', error)
    throw new Error('No se pudo enviar la denuncia. Por favor, intente nuevamente.')
  }
}
