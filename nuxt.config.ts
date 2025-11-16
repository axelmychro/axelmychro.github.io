// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "mychro!",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
          type: "image/x-icon",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/scripts",
    "nuxt-lucide-icons",
  ],
});
