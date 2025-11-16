<script setup lang="ts">
import Logo from "./Logo.vue";
import Links from "./Links.vue";
import Menu from "./Menu.vue";
</script>

<template>
  <nav
    class="fixed left-0 top-0 flex flex-row flex-1 gap-8 items-center justify-between p-2 w-full h-16 z-10"
  >
    <Logo />
    <Links />
    <Menu />
  </nav>
</template>
