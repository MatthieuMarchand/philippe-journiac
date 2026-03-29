import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "/src/assets/styles/_reset.scss";
            @use "/src/assets/styles/_variables.scss" as *;
          `,
        },
      },
    },
  },
});