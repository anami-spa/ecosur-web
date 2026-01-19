import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  server: {
    port: 3000,
  },
  base: "/", // Cambiar a "/nombre-repo/" si usas GitHub Pages con repo específico
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
})
