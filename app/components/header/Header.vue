<script setup lang="ts">
import Logo from "./Logo.vue";
import Links from "./Links.vue";
import Controls from "./Controls.vue";
import Menu from "./Menu.vue";
</script>

<template>
  <header class="fixed top-0 left-0 z-10 h-16 w-full backdrop-blur-[1px]">
    <nav class="flex flex-row items-center justify-stretch p-2">
      <Logo />
      <Links />
      <Controls />
      <Menu />
    </nav>
  </header>
</template>
