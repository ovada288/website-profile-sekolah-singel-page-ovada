import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Jika sedang 'build' (npm run deploy), gunakan path GitHub Pages.
  // Jika sedang 'serve' (npm run dev), gunakan root '/' agar gambar di public muncul.
  base: command === 'build' 
    ? '/website-profile-sekolah-singel-page-ovada/' 
    : '/',
    
  plugins: [inspectAttr(), react()],
  
  server: {
    port: 3000,
  },
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));