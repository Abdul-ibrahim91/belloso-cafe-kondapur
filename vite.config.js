import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: this folder's name contains "#" ("belloso cafe #4"). Vite's dev server
// builds internal module ids as URLs, where "#" starts a fragment, so `npm run
// dev` cannot resolve files from here ("Failed to load url /src/main.jsx").
// `npm run build` / `npm run preview` are unaffected, and `npm run dev:static`
// (watch + static serve) works in place. Renaming the folder to drop the "#"
// restores the normal dev server with HMR.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
