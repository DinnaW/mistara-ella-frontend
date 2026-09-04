import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Relative assets make the build work both locally and on GitHub Pages.
  base: './',
  plugins: [vue()],
})
