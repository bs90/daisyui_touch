import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        signup: resolve(__dirname, 'signup.html'),
        login: resolve(__dirname, 'login.html'),
        chatshow: resolve(__dirname, 'chatshow.html')
      }
    }
  }
})
