export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/fonts'],
  colorMode: { classSuffix: '' },
  fonts: {
    families: [
      { name: 'Barlow-ExtraBold', src: '/Barlow-ExtraBold.ttf' },
      { name: 'NotoSansJP-ExtraBold', src: '/NotoSansJP-ExtraBold.ttf' },
      { name: 'NotoSansJP-Medium', src: '/NotoSansJP-Medium.ttf' },
    ],
  },
});
