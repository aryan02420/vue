/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: [
        'src/main.ts',
        'src/utils.ts',
      ],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    minify: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      '@aryan02420/vue-context': '/',
    }
  },
})
