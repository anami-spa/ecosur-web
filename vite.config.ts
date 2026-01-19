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
  base: "/ecosur-web/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
})
