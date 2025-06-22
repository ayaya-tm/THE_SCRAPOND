import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/THE_SCRAPOND/',
  build: {
    outDir: 'docs', // ←これを追加
  },
  plugins: [react()],
})
