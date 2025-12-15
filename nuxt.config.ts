// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  ssr: true,

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

  css: ["~/assets/css/main.css", "devicon/devicon.min.css"],

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/i18n",
    "nuxt-lucide-icons",
    "@nuxtjs/color-mode",
  ],

  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "id",
        file: "id.json",
      },
    ],
    langDir: "locales/",
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
