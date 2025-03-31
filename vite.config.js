import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap']
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
    include: ['gsap']
  },
  // Configurações para variáveis de ambiente
  define: {
    'process.env.GITHUB_TOKEN': JSON.stringify(process.env.GITHUB_TOKEN || '')
  }
})