<template>
  <div
    class="flex flex-col items-stretch justify-center w-full h-fit max-w-xs sm:max-w-md md:max-w-xl"
  >
    <div class="flex flex-col md:flex-row">
      <div
        class="bg-neutral-950 md:max-w-32 lg:max-w-full flex place-items-center p-2 md:p-0 rounded-t-md md:rounded-bl-md md:rounded-tr-none"
      >
        <img
          src="~/assets/images/imathe.webp"
          alt="imathe"
          class="size-full max-h-32 md:max-h-full object-contain pointer-events-none select-none"
        />
      </div>

      <div
        class="bg-purple-800 size-full flex flex-col items-stretch justify-center p-2 py-4 md:rounded-tr-md"
      >
        <h1
          class="text-xl sm:text-2xl text-neutral-300 font-zain text-center md:text-start"
        >
          {{ $t("cardGreeting") }}
          <span class="text-2xl sm:text-4xl text-neutral-100 block">
            Axel Ramadhan!
          </span>
        </h1>
        <h2
          class="text-lg sm:text-xl text-purple-300 font-google-sans-code text-center md:text-start"
        >
          Junior Web Developer
        </h2>
        <hr class="my-2 border-t-2" />
        <div
          class="flex flex-row items-center justify-center md:justify-end gap-4"
        >
          <a
            href="mailto:maxelramadhan@gmail.com"
            class="bg-neutral-950 text-neutral-50 p-2 rounded-xs"
            ><lucide-mail class="size-4 sm:size-8"
          /></a>
          <a
            href="https://linkedin.com/in/axelramadhan"
            target="_blank"
            class="bg-[#0077B5] text-white p-2 rounded-sm"
            ><lucide-linkedin class="size-4 sm:size-8"
          /></a>
          <a
            href="https://github.com/axelmychro"
            class="bg-neutral-950 text-neutral-50 p-2 rounded-sm"
            ><lucide-github class="size-4 sm:size-8"
          /></a>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
      <div
        class="flex items-center justify-center bg-neutral-800 p-4 lg:rounded-bl-sm"
      >
        <p class="sm:text-lg text-neutral-100 text-center md:text-start">
          {{ $t("cardBio") }}
        </p>
      </div>

      <div
        class="flex flex-row bg-neutral-950 p-2 gap-2 place-items-center md:justify-end rounded-b-sm lg:rounded-bl-none lg:justify-center lg:grid lg:grid-cols-3 lg:aspect-square shrink-0"
      >
        <i class="devicon-nodejs-plain colored each-devicon"></i>
        <i class="devicon-git-plain colored each-devicon"></i>
        <i class="devicon-figma-plain colored each-devicon"></i>
        <i class="devicon-javascript-plain colored each-devicon"></i>
        <i class="devicon-typescript-plain colored each-devicon"></i>
        <i class="devicon-tailwindcss-original colored each-devicon"></i>
        <i class="devicon-vite-plain colored each-devicon"></i>
        <i class="devicon-vuejs-plain colored each-devicon"></i>
        <i class="devicon-nuxt-original colored each-devicon"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "~/assets/css/main.css";

.each-devicon {
  @apply sm:text-xl transition-all duration-500 ease-in-out grayscale hover:grayscale-0 hover:-rotate-4 hover:scale-120 leading-none;
}
</style>
