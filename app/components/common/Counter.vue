<script lang="ts" setup></script>

<template>
  <div
    class="fixed right-0 bottom-16 lg:bottom-1/2 z-40 w-12 lg:w-32 h-24 flex items-center justify-center pointer-events-none select-none"
  >
    <div
      class="relative flex flex-col lg:items-end justify-center w-full lg:w-fit h-full lg:h-fit"
    >
      <div class="flex flex-row justify-start">
        <div
          class="absolute lg:static bottom-0 lg:bottom-2 overflow-hidden w-fit h-fit"
        >
          <div class="relative -bottom-4">
            <p class="text-5xl font-oswald text-fuchsia-300">00</p>
          </div>
        </div>

        <div class="flex flex-col mt-5 items-end justify-center">
          <p
            class="text-sm font-google-sans-code text-gray-300 absolute lg:static -rotate-90 lg:rotate-none left-5 bottom-5"
          >
            <span class="text-transparent lg:text-gray-300">00</span>/05
          </p>

          <p
            class="font-zain text-xs absolute lg:static rotate-90 lg:rotate-none right-4 top-6"
          >
            mychro
          </p>
        </div>
      </div>

      <p
        class="font-oswald text-md uppercase absolute lg:static rotate-90 lg:rotate-none top-8 -left-2 lg:bottom-6"
      >
        homepage
      </p>
    </div>
  </div>
</template>

<style scoped></style>
