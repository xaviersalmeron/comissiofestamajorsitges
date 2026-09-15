import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base relativa perquè el build funcioni servit des de qualsevol subcarpeta
// (GitHub Pages, intranet de la Comissió, obrint el dist/ directament, etc.)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
