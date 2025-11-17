<template>
  <div
    class="bg-black/50 lg:bg-transparent absolute top-0 left-256 p-8 pt-24 lg:p-0 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col lg:flex-row w-screen lg:w-fit h-screen lg:h-fit lg:gap-2"
  >
    <a
      href="#"
      class="text-xl font-oswald font-medium uppercase flex flex-row gap-2 items-center justify-between border-b-2 lg:border-2 py-2 lg:p-2 lg:rounded-lg hover:bg-sky-800 hover:text-sky-300 transition-colors duration-300"
      ><lucide-house :size="32" /> <span class="lg:hidden">app</span></a
    >
    <a
      href="#projects"
      class="text-xl font-oswald font-medium uppercase flex flex-row lg:gap-2 items-center justify-between border-b-2 lg:border-2 py-2 lg:p-2 lg:rounded-lg hover:bg-blue-800 hover:text-blue-300 transition-colors duration-300"
      ><lucide-code :size="32" /> <span class="lg:hidden">projects</span></a
    >
    <a
      href="#about"
      class="text-xl font-oswald font-medium uppercase flex flex-row lg:gap-2 items-center justify-between border-b-2 lg:border-2 py-2 lg:p-2 lg:rounded-lg hover:bg-emerald-800 hover:text-emerald-300 transition-colors duration-300"
      ><lucide-info :size="32" /> <span class="lg:hidden">about</span></a
    >
    <a
      href="#journey"
      class="text-xl font-oswald font-medium uppercase flex flex-row lg:gap-2 items-center justify-between border-b-2 lg:border-2 py-2 lg:p-2 lg:rounded-lg hover:bg-yellow-800 hover:text-yellow-300 transition-colors duration-300"
      ><lucide-lightbulb :size="32" /> <span class="lg:hidden">journey</span></a
    >
    <a
      href="#contact"
      class="text-xl font-oswald font-medium uppercase flex flex-row lg:gap-2 items-center justify-between border-b-2 lg:border-2 py-2 lg:p-2 lg:rounded-lg hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300"
      ><lucide-user :size="32" /> <span class="lg:hidden">contact</span></a
    >
  </div>
</template>
