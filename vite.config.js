import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts()
  ],
  build: {
    lib: {
      entry: './index.ts',
      name: 'vue3-ce-noshadow',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', '@vue/runtime-core', '@vue/shared'],
    },
  }
})
