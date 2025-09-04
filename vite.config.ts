import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  // Para el despliegue en GitHub Pages, 'base' debe ser el nombre de tu repositorio.
  // Lo he actualizado para que coincida con tu nuevo repositorio.
  base: '/stepsProgramacionDidactica/', 
  plugins: [react(), viteSingleFile()],
})
