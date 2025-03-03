import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // Handle client-side routing
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // For React Router
  server: {
    port: 5173,
    historyApiFallback: true,
  },
})
