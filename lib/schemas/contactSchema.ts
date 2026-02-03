import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es muy largo'),

  email: z.string()
    .min(1, 'El email es requerido')
    .email('Ingrese un email válido'),

  phone: z.string()
    .min(8, 'El teléfono debe tener al menos 8 dígitos')
    .max(20, 'El teléfono es muy largo'),

  company: z.string()
    .max(100, 'El nombre de la empresa es muy largo')
    .optional()
    .or(z.literal('')),

  subject: z.string()
    .min(1, 'Debe seleccionar el tipo de consulta'),

  message: z.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje es muy largo (máximo 2000 caracteres)'),
})

export type ContactFormData = z.infer<typeof contactSchema>
