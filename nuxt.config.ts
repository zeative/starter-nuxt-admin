import tailwindcss from '@tailwindcss/vite';
import metadata from './app/config/metadata';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['./app/assets/css/main.css'],
  plugins: ['./app/plugins/casl'],

  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    ...metadata,
  },
});
