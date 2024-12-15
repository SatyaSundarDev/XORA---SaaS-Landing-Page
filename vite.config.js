import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure proper aliasing for imports if necessary
      '@': '/src',
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
})
