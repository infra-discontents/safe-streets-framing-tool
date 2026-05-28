import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'safe-streets-framing-tool' below with your actual GitHub repo name
// if it differs. This sets the base path for GitHub Pages deployment.
export default defineConfig({
  plugins: [react()],
  base: '/safe-streets-framing-tool/',
})
