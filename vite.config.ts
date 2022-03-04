import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  build: {
    outDir: '../public'
  },
  server: {
    open: true,
  },
  plugins: [react()],
  define: {
    ENV_AUTH_TOKEN: JSON.stringify('246513f2-92d1-11ec-b909-0242ac120002')
  }
})
