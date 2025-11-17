<template>
  <section
    class="w-screen h-[calc(100vh-10rem)] mt-20 mb-20 flex flex-col items-center justify-center"
  >
    <div class="flex flex-col w-xs sm:w-md md:w-2xl lg:w-4xl xl:w-6xl h-auto">
      <div class="flex flex-col md:flex-row items-stretch justify-center">
        <img
          src="../../images/imathe.webp"
          alt="imathe"
          class="aspect-4/3 h-full max-h-32 sm:max-h-40 md:aspect-3/4 md:max-w-32 md:max-h-64 lg:max-w-64 xl:max-w-lg p-2 md:p-0 bg-gray-950 object-contain rounded-t-md md:rounded-tr-none"
        />
        <div
          class="bg-purple-800 w-full flex flex-col p-2 py-4 md:rounded-tr-md"
        >
          <span
            class="text-2xl sm:text-3xl text-gray-300 font-zain text-center md:text-start"
            >hey there, my name is..
            <h1 class="text-4xl sm:text-5xl text-gray-100">
              Axel Ramadhan!
            </h1></span
          >
          <h2
            class="text-3xl sm:text-4xl text-purple-300 font-zain lowercase text-center md:text-start"
          >
            Web Developer
          </h2>
          <hr class="my-2" />
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
      <div class="flex flex-col lg:flex-row items-stretch justify-center">
        <div
          class="flex items-center justify-center bg-neutral-800 p-2 py-4 min-h-32 lg:rounded-bl-sm flex-1"
        >
          <p
            class="text-xl font-fira-code sm:text-2xl text-neutral-100 text-center md:text-start"
          >
            computer science student at Universitas Sumatera Utara, Indonesia.
            aspiring web developer
          </p>
        </div>
        <div
          class="flex flex-row bg-gray-950 p-2 gap-2 items-center justify-end rounded-b-sm lg:rounded-bl-none lg:justify-center lg:grid lg:grid-cols-3"
        >
          <i
            class="devicon-webstorm-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale-75 hover:grayscale-0"
          ></i>
          <i
            class="devicon-nodejs-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale-75 hover:grayscale-0"
          ></i>
          <i
            class="devicon-pnpm-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale-75 hover:grayscale-0"
          ></i>
          <i
            class="devicon-git-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale-75 hover:grayscale-0"
          ></i>
          <i
            class="devicon-javascript-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale-75 hover:grayscale-0"
          ></i>
          <i
            class="devicon-typescript-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale-75 hover:grayscale-0"
          ></i>
          <i
            class="devicon-tailwindcss-original colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale-75 hover:grayscale-0"
          ></i>
          <i
            class="devicon-vuejs-plain colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale-75 hover:grayscale-0"
          ></i>
          <i
            class="devicon-nuxt-original colored text-xl sm:text-3xl transition-all hover:-rotate-4 duration-300 hover:scale-110 ease-in-out grayscale-75 hover:grayscale-0"
          ></i>
        </div>
      </div>
    </div>
  </section>
</template>
