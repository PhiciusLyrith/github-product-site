import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // GitHub Pages部署配置
  base: process.env.NODE_ENV === 'production' ? '/github-product-site/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
