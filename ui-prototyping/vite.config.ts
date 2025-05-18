import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/vibe-starter/",
  server: { port: 5176 },
  plugins: [react()],
})
