export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [['@nuxtjs/google-fonts',
    {
      families: {
        Sora: [400,600, 700, 800],
        Inter: [500],
      }
    }
  ],"nuxt-icons"],

  compatibilityDate: '2024-07-03',
})