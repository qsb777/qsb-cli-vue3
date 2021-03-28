import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  resolve
} from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '_c': resolve(__dirname, './src/components'),
      '_api': resolve(__dirname, './src'),
    }
  },
  server: {
    open: true
  }

})