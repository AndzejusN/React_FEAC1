import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/_variables";
          @import "./src/assets/scss/_buttons";
          @import "./src/assets/scss/_mixins";
          @import "./src/assets/scss/_common";          
        `,
      },
    },
  },
});
