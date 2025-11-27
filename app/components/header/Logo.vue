<script setup>
import { ref } from "vue";
const logoHovered = ref(false);
const logoFocused = ref(false);
</script>

<template>
  <a
    tabindex="0"
    @mouseover="logoHovered = true"
    @mouseleave="logoHovered = false"
    @focus="logoFocused = true"
    @blur="logoFocused = false"
    href="#"
    class="flex flex-row items-center gap-2 select-none"
  >
    <img
      ref="logoImage"
      src="~/assets/images/imathe.webp"
      alt="Logo"
      class="aspect-square w-12 h-12 object-cover border-2 border-fuchsia-300 rounded-full transition duration-500"
      :class="
        logoHovered || logoFocused
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-0'
      "
    /><span
      class="font-zain text-4xl text-sky-300 transition duration-500"
      :class="logoHovered || logoFocused ? 'translate-x-0' : '-translate-x-14'"
      >mychro!</span
    >
  </a>
</template>
