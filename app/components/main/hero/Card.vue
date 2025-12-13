<template>
  <div
    class="flex flex-col items-stretch justify-center w-full h-fit max-w-xs sm:max-w-md md:max-w-xl"
  >
    <div class="flex flex-col md:flex-row">
      <div
        class="bg-neutral-950 md:max-w-32 lg:max-w-full flex place-items-center p-2 md:p-0 rounded-t-md md:rounded-tr-none"
      >
        <img
          src="~/assets/images/imathe.webp"
          alt="imathe"
          class="size-full max-h-32 md:max-h-full object-contain pointer-events-none select-none"
        />
      </div>

      <div
        class="bg-purple-800 w-full flex flex-col items-stretch justify-center p-2 py-4 md:rounded-tr-md"
      >
        <h1
          class="text-xl sm:text-2xl text-neutral-300 font-zain text-center md:text-start"
        >
          {{ $t("section.index.card.greeting") }}
          <span class="text-2xl sm:text-4xl text-neutral-100 block">
            Axel Ramadhan!
          </span>
        </h1>
        <h2
          class="text-lg sm:text-xl text-purple-300 font-google-sans-code text-center md:text-start"
        >
          Junior Frontend Developer
        </h2>
        <hr class="my-2 border-t-2" />
        <div
          class="flex flex-row items-center justify-center md:justify-end gap-4 [&>a]:p-2 [&>a]:rounded-sm"
        >
          <a
            href="mailto:axelmychro@gmail.com"
            class="bg-neutral-950 text-neutral-50"
            ><lucide-mail class="size-4 sm:size-8"
          /></a>
          <a
            href="https://linkedin.com/in/axelramadhan"
            target="_blank"
            class="bg-[#0077B5] text-white"
            ><lucide-linkedin class="size-4 sm:size-8"
          /></a>
          <a
            href="https://github.com/axelmychro"
            class="bg-neutral-950 text-neutral-50"
            ><lucide-github class="size-4 sm:size-8"
          /></a>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
      <div
        class="flex w-full items-center justify-center bg-neutral-800 p-4 lg:rounded-bl-sm"
      >
        <p class="sm:text-lg text-neutral-100 text-center md:text-start">
          {{ $t("section.index.card.bio") }}
        </p>
      </div>

      <div
        class="[&>i]:sm:text-xl [&>i]:transition-all [&>i]:duration-500 [&>i]:ease-in-out [&>i]:grayscale [&>i]:hover:grayscale-0 [&>i]:hover:-rotate-4 [&>i]:hover:scale-120 [&>i]:leading-none flex flex-row bg-neutral-950 p-2 gap-2 place-items-center md:justify-end rounded-b-sm lg:rounded-bl-none lg:justify-center lg:grid lg:grid-cols-3 lg:aspect-square shrink-0"
      >
        <i class="devicon-nodejs-plain colored"></i>
        <i class="devicon-git-plain colored"></i>
        <i class="devicon-figma-plain colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-typescript-plain colored"></i>
        <i class="devicon-tailwindcss-original colored"></i>
        <i class="devicon-vite-plain colored"></i>
        <i class="devicon-vuejs-plain colored"></i>
        <i class="devicon-nuxt-original colored"></i>
      </div>
    </div>
  </div>
</template>
