// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  modules: ["@element-plus/nuxt"],
  css: ["~/assets/css/main.css"],
  elementPlus: {
    /** Options */
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
