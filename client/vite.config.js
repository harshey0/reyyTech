import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": "https://e-commerce-final-z6ao.onrender.com/",
      "/upload": "https://e-commerce-final-z6ao.onrender.com/",
    },
  },
})
