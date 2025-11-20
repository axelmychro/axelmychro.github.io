<script setup>
import { ref } from "vue";
const logoHovered = ref(false);
const logoFocus = ref(false);
</script>

<template>
  <a
    tabindex="0"
    @mouseover="logoHovered = true"
    @mouseleave="logoHovered = false"
    @focus="logoFocus = true"
    @blur="logoFocus = false"
    href="#"
    class="flex flex-row items-center gap-2"
  >
    <img
      ref="logoImage"
      src="~/assets/images/imathe.webp"
      alt="Logo"
      class="aspect-square w-12 h-12 object-cover border-2 border-fuchsia-300 rounded-full transition duration-500"
      :class="
        logoHovered || logoFocus
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-0 pointer-events-none'
      "
    /><span
      class="font-zain text-4xl text-sky-300 transition duration-500"
      :class="logoHovered || logoFocus ? 'translate-x-0' : '-translate-x-14'"
      >mychro!</span
    >
  </a>
</template>
