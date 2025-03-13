import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'pinia-plugin-persistedstate/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    display: 'swap',
    families: {
      Roboto: [400, 500, 600, 700],
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})
