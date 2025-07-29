import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/e-plantShopping/', // required for GitHub Pages
  build: {
    outDir: 'docs', // 👈 this is key
  },
  plugins: [react()],
});
