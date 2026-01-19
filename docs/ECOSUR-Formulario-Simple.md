# ECOSUR - Formulario Denuncias con Archivos
## Guía Rápida de Implementación

**Stack:** React + Supabase Storage + Web3Forms  
**Costo:** $0/año  
**Tiempo:** 1 hora

---

## 🚀 Setup Rápido (15 minutos)

### 1. Crear Cuenta Supabase

```
1. Ir a https://supabase.com → Sign up
2. New Project → Name: "ecosur" → Create
3. Copiar de Settings → API:
   - Project URL: https://xxx.supabase.co
   - Anon key: eyJhbG...
```

### 2. Crear Bucket Storage

```
1. Dashboard → Storage → New bucket
2. Name: "denuncias"
3. ✅ Public bucket: YES
4. Create
```

### 3. Crear Access Key Web3Forms

```
1. Ir a https://web3forms.com
2. Ingresar: denuncias@ecosur.cl
3. Copiar Access Key del email
```

---

## 💻 Código (3 archivos)

### 1. Instalar Supabase

```bash
npm install @supabase/supabase-js
```

### 2. Crear `src/lib/supabase.js`

```javascript
import { createClient } from '@supabase/supabase-js'

// ⚠️ REEMPLAZAR con tus credenciales
const supabaseUrl = 'https://xxx.supabase.co'
const supabaseKey = 'eyJhbG...'

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function uploadFile(file) {
  const filename = `${Date.now()}-${file.name}`
  
  const { error } = await supabase.storage
    .from('denuncias')
    .upload(filename, file)
  
  if (error) throw error
  
  const { data } = supabase.storage
    .from('denuncias')
    .getPublicUrl(filename)
  
  return data.publicUrl
}
```

### 3. Crear `src/components/FormularioDenuncias.jsx`

```jsx
import { useState } from 'react'
import { uploadFile } from '../lib/supabase'

export default function FormularioDenuncias() {
  const [form, setForm] = useState({
    email: '',
    nombre: '',
    relacion: '',
    motivo: '',
    lugar: '',
    hechos: ''
  })
  const [archivo, setArchivo] = useState(null)
  const [enviando, setEnviando] = useState(false)
  const [mensaje, setMensaje] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setEnviando(true)
    setMensaje('')

    try {
      // 1. Subir archivo a Supabase (si existe)
      let archivoURL = ''
      if (archivo) {
        archivoURL = await uploadFile(archivo)
      }

      // 2. Enviar email con Web3Forms
      const data = new FormData()
      data.append('access_key', 'TU-ACCESS-KEY-AQUI') // ⚠️ REEMPLAZAR
      data.append('subject', '🚨 Nueva Denuncia ECOSUR')
      data.append('email', 'denuncias@ecosur.cl')
      
      // Datos formulario
      Object.keys(form).forEach(key => {
        data.append(key, form[key])
      })
      
      // URL archivo
      if (archivoURL) {
        data.append('archivo_adjunto', archivoURL)
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      })

      const result = await res.json()

      if (result.success) {
        setMensaje('✅ Denuncia enviada exitosamente')
        setForm({ email: '', nombre: '', relacion: '', motivo: '', lugar: '', hechos: '' })
        setArchivo(null)
      } else {
        throw new Error('Error enviando')
      }
    } catch (error) {
      setMensaje('❌ Error al enviar: ' + error.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Formulario de Denuncia</h2>
      
      <input
        type="email"
        placeholder="Email *"
        value={form.email}
        onChange={e => setForm({...form, email: e.target.value})}
        required
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Nombre o Seudónimo *"
        value={form.nombre}
        onChange={e => setForm({...form, nombre: e.target.value})}
        required
        style={inputStyle}
      />

      <select
        value={form.relacion}
        onChange={e => setForm({...form, relacion: e.target.value})}
        required
        style={inputStyle}
      >
        <option value="">Relación con ECOSUR *</option>
        <option value="trabajador">Trabajador/a</option>
        <option value="cliente">Cliente</option>
        <option value="proveedor">Proveedor</option>
        <option value="otro">Otro</option>
      </select>

      <select
        value={form.motivo}
        onChange={e => setForm({...form, motivo: e.target.value})}
        required
        style={inputStyle}
      >
        <option value="">Motivo de denuncia *</option>
        <option value="acoso">Acoso laboral</option>
        <option value="discriminacion">Discriminación</option>
        <option value="seguridad">Seguridad e higiene</option>
        <option value="fraude">Fraude</option>
        <option value="ambiental">Problema ambiental</option>
      </select>

      <input
        type="text"
        placeholder="Lugar de los hechos *"
        value={form.lugar}
        onChange={e => setForm({...form, lugar: e.target.value})}
        required
        style={inputStyle}
      />

      <textarea
        placeholder="Descripción de los hechos *"
        value={form.hechos}
        onChange={e => setForm({...form, hechos: e.target.value})}
        required
        rows="5"
        style={inputStyle}
      />

      <div style={{ margin: '20px 0' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Archivo adjunto (opcional):
        </label>
        <input
          type="file"
          onChange={e => setArchivo(e.target.files[0])}
          accept=".pdf,.jpg,.png,.doc,.docx"
        />
        {archivo && <p>📎 {archivo.name}</p>}
      </div>

      <button
        type="submit"
        disabled={enviando}
        style={{
          background: enviando ? '#ccc' : '#28a745',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '4px',
          cursor: enviando ? 'not-allowed' : 'pointer',
          fontSize: '16px',
          width: '100%'
        }}
      >
        {enviando ? 'Enviando...' : '🔒 Enviar Denuncia'}
      </button>

      {mensaje && (
        <p style={{ 
          marginTop: '20px', 
          padding: '15px', 
          background: mensaje.includes('✅') ? '#d4edda' : '#f8d7da',
          borderRadius: '4px'
        }}>
          {mensaje}
        </p>
      )}
    </form>
  )
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '14px'
}
```

### 4. Importar en `src/App.jsx`

```jsx
import FormularioDenuncias from './components/FormularioDenuncias'

function App() {
  return <FormularioDenuncias />
}

export default App
```

---

## 🧪 Testing Local (5 minutos)

```bash
# 1. Iniciar dev server
npm run dev

# 2. Abrir http://localhost:5173

# 3. Llenar formulario:
   - Email: test@test.com
   - Nombre: Test
   - Relación: Trabajador/a
   - Motivo: Seguridad e higiene
   - Lugar: Oficina
   - Hechos: Prueba de funcionamiento
   - Archivo: Seleccionar PDF de prueba

# 4. Click "Enviar Denuncia"

# 5. Verificar:
   ✅ Mensaje "Denuncia enviada exitosamente"
   ✅ Email llegó a denuncias@ecosur.cl
   ✅ Archivo en Supabase Dashboard → Storage → denuncias
   ✅ Link en email funciona
```

---

## 🚀 Deploy a Producción (5 minutos)

```bash
# 1. Build
npm run build

# 2. Commit
git add .
git commit -m "Add formulario denuncias"
git push origin main

# 3. GitHub Pages deploys automáticamente

# 4. Testing producción:
   - Ir a https://tu-usuario.github.io/ecosur
   - Enviar formulario de prueba
   - Verificar email + archivo
```

---

## 📧 Email que Recibirás

```
De: Sistema Denuncias ECOSUR
Para: denuncias@ecosur.cl
Asunto: 🚨 Nueva Denuncia ECOSUR

email: test@test.com
nombre: Usuario Anónimo
relacion: Trabajador/a
motivo: Seguridad e higiene
lugar: Planta Biobío
hechos: Descripción de la denuncia...

📎 Archivo adjunto:
https://xxx.supabase.co/storage/v1/object/public/denuncias/1737334800-evidencia.pdf
```

---

## ⚙️ Configuración Final

### Reemplazar en el código:

**src/lib/supabase.js:**
```javascript
const supabaseUrl = 'TU-URL-AQUI'       // De Supabase Dashboard
const supabaseKey = 'TU-KEY-AQUI'       // De Supabase Dashboard
```

**src/components/FormularioDenuncias.jsx:**
```javascript
data.append('access_key', 'TU-ACCESS-KEY-AQUI')  // De Web3Forms
```

---

## 🔧 Troubleshooting

**Error: Archivo no sube**
```
- Verificar que bucket "denuncias" existe
- Verificar que bucket es público
- Verificar credenciales Supabase correctas
```

**Error: Email no llega**
```
- Verificar Access Key Web3Forms correcto
- Revisar carpeta SPAM
- Verificar Dashboard Web3Forms → envíos
```

**Error: Link archivo no funciona**
```
- Verificar bucket es PÚBLICO (no privado)
- Verificar archivo visible en Supabase Dashboard
```

---

## 📊 Límites Plan Gratuito

```
Supabase:       1GB storage (~500 PDFs)
Web3Forms:      250 emails/mes
GitHub Pages:   Ilimitado
```

---

## ✅ Checklist

**Setup:**
- [ ] Cuenta Supabase creada
- [ ] Bucket "denuncias" creado (público)
- [ ] Access Key Web3Forms generada
- [ ] npm install @supabase/supabase-js

**Código:**
- [ ] supabase.js creado
- [ ] FormularioDenuncias.jsx creado
- [ ] Credenciales reemplazadas
- [ ] Importado en App.jsx

**Testing Local:**
- [ ] npm run dev funciona
- [ ] Formulario se muestra
- [ ] Upload archivo funciona
- [ ] Email llega
- [ ] Link archivo funciona

**Deploy:**
- [ ] npm run build exitoso
- [ ] Push a GitHub
- [ ] Deploy exitoso
- [ ] Testing en producción OK

---

**Tiempo total:** ~1 hora  
**Costo:** $0/año  
**Listo para producción** ✅
