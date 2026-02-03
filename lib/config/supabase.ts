import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Crear cliente de Supabase solo si las variables están disponibles
// Esto permite que páginas que no usan Supabase funcionen sin problemas
export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : null

// Helper para verificar que Supabase está configurado
function ensureSupabaseConfigured() {
  if (!supabase) {
    throw new Error('Supabase no está configurado. Verifica VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY')
  }
  return supabase
}

/**
 * Sube archivos al bucket de denuncias en Supabase Storage
 * @param files - Array de archivos a subir
 * @returns Array de URLs públicas de los archivos subidos
 */
export async function uploadDenunciaFiles(files: File[]): Promise<{ url: string; name: string }[]> {
  const client = ensureSupabaseConfigured()

  const uploadPromises = files.map(async (file) => {
    // Generar nombre único para evitar colisiones
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 8)
    const fileExtension = file.name.split('.').pop()
    const uniqueFileName = `${timestamp}-${random}.${fileExtension}`

    // Subir archivo a Supabase Storage
    const { data, error } = await client.storage
      .from('denuncias-ecosur')
      .upload(uniqueFileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error('Error subiendo archivo:', error)
      throw new Error(`Error al subir archivo ${file.name}: ${error.message}`)
    }

    // Obtener URL pública
    const { data: urlData } = client.storage
      .from('denuncias-ecosur')
      .getPublicUrl(uniqueFileName)

    return {
      url: urlData.publicUrl,
      name: file.name
    }
  })

  return await Promise.all(uploadPromises)
}
