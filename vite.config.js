import { defineConfig } from 'vite'
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})
