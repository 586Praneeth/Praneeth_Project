


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Praneeth_Project//', // 👈 THIS LINE IS CRUCIAL
  plugins: [react()],
})
