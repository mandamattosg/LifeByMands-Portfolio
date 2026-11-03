import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativo: funciona em https://<usuario>.github.io/<nome-do-repo>/ sem depender do nome do repo.
// As rotas usam HashRouter (#/home), então o GitHub Pages não precisa de fallback 404.
export default defineConfig({
  plugins: [react()],
  base: './',
})
