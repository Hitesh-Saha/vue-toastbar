import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), dts({
    insertTypesEntry: true,
  }),],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue-toastbar',
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `vue-toastbar.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      input: {
        main: path.resolve(__dirname, 'src/index.ts')
      },
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
