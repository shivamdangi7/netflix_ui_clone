import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensure proper relative paths
  build: {
    outDir: 'dist',
    sourcemap: true, // Ensure the output folder is set correctly
  },
  plugins: [react(),
    tailwindcss()
  ],

})
