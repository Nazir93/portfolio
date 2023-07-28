import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/src/main.jsx'], // Добавьте путь к вашему файлу main.jsx здесь
    },
  },
});
