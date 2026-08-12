import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   proxy: {
      // forward requests starting with /api to the backend
      "/api": {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path ,// keep /api/v1/users/register intact
      }
    }

})
