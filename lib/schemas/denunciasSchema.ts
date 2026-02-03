import { z } from 'zod'

export const denunciasSchema = z.object({
  email: z.string()
    .min(1, 'El email es requerido')
    .email('Ingrese un email válido'),

  nombre: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es muy largo'),

  relacion: z.string()
    .min(1, 'Debe seleccionar su relación con ECOSUR'),

  motivo: z.string()
    .min(1, 'Debe seleccionar el motivo de la denuncia'),

  lugar: z.string()
    .min(3, 'Debe indicar el lugar de los hechos')
    .max(200, 'El lugar es muy largo'),

  hechos: z.string()
    .min(20, 'La descripción debe tener al menos 20 caracteres')
    .max(5000, 'La descripción es muy larga (máximo 5000 caracteres)'),

  telefono: z.string()
    .optional(),

  personas: z.string()
    .optional(),

  fecha: z.string()
    .optional(),
})

export type DenunciasFormData = z.infer<typeof denunciasSchema>
