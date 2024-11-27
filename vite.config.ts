import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/5mins-deploy-vue/', // Thêm dòng này
  plugins: [vue()],
})
