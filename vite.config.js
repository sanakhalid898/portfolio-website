import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Set the base path to your repository name for GitHub Pages deployment
  // If your repo is https://github.com/sanakhalid898/portfolio-website, base should be '/portfolio-website/'
  base: '/portfolio-website/',
})
