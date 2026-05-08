import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Разрешает доступ из локальной сети
    port: 5173,      // Жестко заданный порт
    // ДОБАВЛЕН ПРОКСИ:
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Куда перенаправлять запросы
        changeOrigin: true,
      }
    }
  }
})