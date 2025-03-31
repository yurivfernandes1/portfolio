import { defineConfig } from 'vite'
import dotenv from 'dotenv'

// Carrega variáveis de ambiente do arquivo .env
dotenv.config()

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap', 'gsap/ScrollTrigger']
        }
      }
    },
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ['gsap', 'gsap/ScrollTrigger']
  },
  // Expor as variáveis de ambiente para o cliente
  define: {
    'process.env.GITHUB_TOKEN': JSON.stringify(process.env.GITHUB_TOKEN)
  }
})