<template>
  <section
    class="w-screen h-screen pt-16 pb-16 pr-12 lg:pr-32 flex items-center justify-center"
  >
    <div
      class="flex flex-col items-stretch justify-center w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl h-fit"
    >
      <div class="flex flex-col md:flex-row items-stretch justify-center">
        <img
          src="../../images/imathe.webp"
          alt="imathe"
          class="aspect-4/3 w-full h-full max-h-32 sm:max-h-40 md:aspect-3/4 md:max-w-50 md:max-h-max p-2 md:p-0 bg-gray-950 object-contain rounded-t-md md:rounded-tr-none"
        />
        <div
          class="bg-purple-800 w-full flex flex-col p-2 py-4 md:rounded-tr-md"
        >
          <h1
            class="text-2xl sm:text-3xl text-gray-300 font-zain text-center md:text-start"
          >
            hey there, my name is..
            <span class="text-4xl sm:text-5xl text-gray-100 block">
              Axel Ramadhan!
            </span>
          </h1>
          <h2
            class="text-3xl sm:text-4xl text-purple-300 font-zain lowercase text-center md:text-start"
          >
            Web Developer
          </h2>
          <hr class="my-2" />
          <div
            class="flex flex-row items-center justify-center md:justify-between gap-8"
          >
            <h3 class="font-fira-code text-xl text-gray-300 hidden md:inline">
              currently learning the frontend!
            </h3>
            <div
              class="flex flex-row gap-2 items-center justify-center md:justify-end"
            >
              <a
                href="mailto:maxelramadhan@gmail.com"
                class="bg-gray-950 text-gray-50 p-2 rounded-sm"
                ><lucide-mail class="w-8 h-8 sm:w-10 sm:h-10"
              /></a>
              <a
                href="https://linkedin.com/in/axelramadhan"
                target="_blank"
                class="bg-[#0077B5] text-gray-50 p-2 rounded-sm"
                ><lucide-linkedin class="w-8 h-8 sm:w-10 sm:h-10"
              /></a>
              <a
                href="https://github.com/axelmychro"
                class="bg-gray-950 text-gray-50 p-2 rounded-sm"
                ><lucide-github class="w-8 h-8 sm:w-10 sm:h-10"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-stretch justify-center">
        <div
          class="flex items-center justify-center bg-neutral-800 p-2 py-4 lg:rounded-bl-sm"
        >
          <p
            class="text-xl font-fira-code sm:text-2xl text-neutral-100 text-center md:text-start"
          >
            first-year computer science student at Universitas Sumatera Utara,
            Indonesia. aspiring web developer
          </p>
        </div>
        <div
          class="flex flex-row bg-gray-950 p-2 gap-2 items-center justify-center md:justify-end rounded-b-sm lg:rounded-bl-none lg:justify-center lg:grid lg:grid-cols-3 lg:aspect-square lg:auto-rows-auto shrink-0"
        >
          <i
            class="devicon-nodejs-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale hover:grayscale-0"
          ></i>
          <i
            class="devicon-pnpm-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale hover:grayscale-0"
          ></i>
          <i
            class="devicon-git-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale hover:grayscale-0"
          ></i>
          <i
            class="devicon-javascript-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale hover:grayscale-0"
          ></i>
          <i
            class="devicon-typescript-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale hover:grayscale-0"
          ></i>
          <i
            class="devicon-tailwindcss-original colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale hover:grayscale-0"
          ></i>
          <i
            class="devicon-vite-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale hover:grayscale-0 items-center"
          ></i>
          <i
            class="devicon-vuejs-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale hover:grayscale-0"
          ></i>
          <i
            class="devicon-nuxt-original colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale hover:grayscale-0"
          ></i>
        </div>
      </div>
    </div>
  </section>
</template>
