/**
 * Función helper para generar rutas correctas de assets
 * Usa import.meta.env.BASE_URL que ya está configurado dinámicamente:
 * - Desarrollo: BASE_URL = "/"
 * - Producción: BASE_URL = "/ecosur-web/"
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalizedPath}`.replace(/\/\//g, '/')
}
