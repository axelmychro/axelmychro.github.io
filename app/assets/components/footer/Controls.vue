<template>
  <div
    class="lg:absolute flex flex-row gap-2 items-center justify-center lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
  >
    <button
      type="button"
      class="border-2 p-2 flex items-center justify-center gap-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
    >
      <lucide-languages :size="32" />
    </button>
    <button
      type="button"
      class="border-2 p-2 flex items-center justify-center gap-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
    >
      <lucide-moon :size="32" />
    </button>
    <button
      type="button"
      class="border-2 p-2 flex items-center justify-center gap-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
    >
      <lucide-chevrons-left :size="32" />
    </button>
  </div>
</template>
