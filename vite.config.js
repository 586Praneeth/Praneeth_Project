// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Praneeth_Nagilla_Portfolio/', // <-- ADD THIS LINE
  plugins: [react()],
})
