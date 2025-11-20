<template>
  <div
    class="bg-black/50 lg:bg-transparent w-full h-full fixed lg:static inset-0 pl-2 pr-14 pt-16 flex lg:p-0 z-50"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-center justify-start lg:justify-end w-screen lg:w-full h-screen lg:h-full lg:gap-2 lg:px-2"
    >
      <a href="#" class="each-link each-link-lg each-link-hoverfocus"
        ><lucide-house class="link-icon" /> {{ $t("index") }}</a
      >
      <a href="#projects" class="each-link each-link-lg each-link-hoverfocus"
        ><lucide-code class="link-icon" />{{ $t("projects") }}</a
      >
      <a href="#about" class="each-link each-link-lg each-link-hoverfocus"
        ><lucide-info class="link-icon" />{{ $t("about") }}</a
      >
      <a href="#timeline" class="each-link each-link-lg each-link-hoverfocus"
        ><lucide-map class="link-icon" />{{ $t("timeline") }}</a
      >
      <a href="#contact" class="each-link each-link-lg each-link-hoverfocus"
        ><lucide-user class="link-icon" />{{ $t("contact") }}</a
      >
    </div>
  </div>
</template>

<style scoped>
@import "~/assets/css/main.css";

.each-link {
  @apply text-xl sm:text-2xl md:text-3xl p-2 font-oswald font-medium uppercase flex flex-row items-center justify-between border-b-2;
}
.each-link-lg {
  @apply lg:font-fira-code lg:border-b-0 lg:border-l-2 lg:py-0 lg:rounded-none lg:border-gray-600 lg:text-sm lg:gap-2;
}
.each-link-hoverfocus {
  @apply hover:text-sky-300 focus:text-sky-300 transition-colors duration-300;
}

.link-icon {
  @apply aspect-square w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-4 lg:h-4 lg:text-gray-300;
}
</style>
