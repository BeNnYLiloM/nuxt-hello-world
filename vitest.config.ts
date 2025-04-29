import { defineVitestConfig } from '@nuxt/test-utils/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineVitestConfig({
  // plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['tests/**/*.test.js'],
  },
  // resolve: {
  //   alias: {
  //     '~': resolve(__dirname),
  //     '#app': fileURLToPath(new URL('./.nuxt/types/app', import.meta.url)),
  //     '#imports': fileURLToPath(new URL('./.nuxt/imports', import.meta.url))
  //   },
  // },
})