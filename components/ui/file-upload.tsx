import { Upload, X, Plus } from 'lucide-react'
import { Button } from './button'
import { toast } from 'sonner'

interface FileUploadProps {
  files: File[]
  onChange: (files: File[]) => void
  maxFiles?: number
  maxSize?: number // bytes
  accept?: string
}

export function FileUpload({
  files,
  onChange,
  maxFiles = 5,
  maxSize = 10 * 1024 * 1024, // 10MB por defecto
  accept = '.jpg,.jpeg,.png,.pdf,.doc,.docx'
}: FileUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const newFiles = Array.from(e.target.files)

    // Validar límite de archivos
    if (files.length + newFiles.length > maxFiles) {
      toast.error('Límite de archivos excedido', {
        description: `Máximo ${maxFiles} archivos permitidos`
      })
      e.target.value = ''
      return
    }

    // Validar tamaño
    const oversizedFiles = newFiles.filter((f) => f.size > maxSize)
    if (oversizedFiles.length > 0) {
      toast.error('Archivos muy grandes', {
        description: `Tamaño máximo: ${(maxSize / 1024 / 1024).toFixed(0)}MB por archivo`
      })
      e.target.value = ''
      return
    }

    onChange([...files, ...newFiles])
    e.target.value = ''
  }

  const removeFile = (index: number) => {
    onChange(files.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <div className="space-y-3">
      {/* Área de upload */}
      <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-ecosur-green/50 transition-colors bg-muted/20">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          accept={accept}
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="cursor-pointer block">
          <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm font-medium text-ecosur-dark mb-1">
            Arrastra archivos aquí o haz clic para seleccionar
          </p>
          <p className="text-xs text-muted-foreground">
            Tamaño máximo {(maxSize / 1024 / 1024).toFixed(0)}MB por archivo • Hasta {maxFiles}{' '}
            archivos
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Formatos: PDF, JPG, PNG, DOC, DOCX
          </p>
        </label>
      </div>

      {/* Lista de archivos seleccionados */}
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-ecosur-dark">
            Archivos seleccionados ({files.length}/{maxFiles})
          </p>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-muted/50 px-3 py-2 rounded-lg group hover:bg-muted transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm text-ecosur-dark truncate font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                className="ml-2 text-muted-foreground hover:text-red-500 transition-colors"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}

          {/* Botón para añadir más archivos */}
          {files.length < maxFiles && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('file-upload')?.click()}
              className="w-full mt-2"
            >
              <Plus className="h-4 w-4 mr-2" />
              Añadir más archivos
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
