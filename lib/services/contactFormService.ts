import type { ContactFormData } from '../schemas/contactSchema'

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean }> {
  const formData = new FormData()

  // Access key de Web3Forms
  formData.append('access_key', import.meta.env.VITE_WEB3FORMS_CONTACTO_KEY)

  // Configuración del email
  formData.append('subject', `[ECOSUR Contacto] ${data.subject}`)
  formData.append('from_name', data.name)
  formData.append('cc', 'anami.empresa@gmail.com') // Copia de respaldo
  formData.append('redirect', 'false')

  // Datos del formulario
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('phone', data.phone)
  formData.append('company', data.company || 'No especificada')
  formData.append('inquiry_type', data.subject)
  formData.append('message', data.message)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error('Error al enviar el formulario')
    }

    const result = await response.json()

    if (!result.success) {
      throw new Error(result.message || 'Error al procesar el formulario')
    }

    return { success: true }
  } catch (error) {
    console.error('Error en submitContactForm:', error)
    throw new Error('No se pudo enviar el mensaje. Por favor, intente nuevamente.')
  }
}
