<template>
  <!-- top -->
  <div class="fixed left-0 top-0 w-screen h-16 border-b border-gray-600"></div>

  <!-- mid -->
  <div
    class="fixed right-0 bottom-0 w-12 lg:w-32 h-screen border-l border-gray-600"
  ></div>

  <!-- mid page name n count -->
  <div
    class="fixed right-0 bottom-0 w-12 h-screen flex items-end justify-center lg:w-32 lg:items-center"
  >
    <div
      class="relative flex flex-col w-full h-32 items-center justify-start bottom-16"
    >
      <div
        class="relative flex flex-col overflow-hidden w-full h-full items-center justify-end inset-0 z-10"
      >
        <p
          class="absolute font-oswald text-4xl -bottom-4 text-fuchsia-300 flex items-start justify-start"
        >
          00<span
            class="absolute -rotate-90 text-xs bottom-9 -right-1 text-gray-100 font-fira-code lg:static lg:rotate-none lg:mt-1"
            >/05</span
          >
        </p>
      </div>
      <p
        class="absolute bottom-7 rotate-90 text-sm font-oswald uppercase lg:rotate-none lg:-bottom-5 lg:right-3"
      >
        homepage
      </p>
      <p
        class="absolute bottom-9 rotate-90 right-4 font-zain text-xs lg:rotate-none lg:-bottom-2 lg:right-3"
      >
        mychro
      </p>
    </div>
  </div>

  <!-- mid projects -->

  <!-- bot -->
  <div
    class="fixed right-0 bottom-0 flex w-screen h-16 border-t border-gray-600"
  ></div>
</template>
