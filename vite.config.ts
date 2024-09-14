import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/safentasty/' : '/',
    define: {
      'process.env.BASE_URL': JSON.stringify(mode === 'production' ? '/safentasty/' : '/'),
    },
    plugins: [react()],
  }
})
