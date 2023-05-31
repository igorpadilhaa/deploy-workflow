import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const urlBase = globalThis.process.env.APP_BASE_URL || '/'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    base: urlBase
  },
  plugins: [react()],
})
