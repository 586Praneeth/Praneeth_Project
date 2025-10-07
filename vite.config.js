import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Praneeth_Project/', // ✅ remove semicolon — keep trailing slash
  plugins: [react()],
})
