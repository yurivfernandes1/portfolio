export default {
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
  }
}