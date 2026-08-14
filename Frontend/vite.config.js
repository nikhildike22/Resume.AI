import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  proxy: {
      // forward requests starting with /api to the backend
      "/api": {
        target: "https://resume-ai-0uk4.onrender.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path ,// keep /api/v1/users/register intact
      }
    }
  }
})
