<script setup lang="ts">
import Logo from "./Logo.vue";
import Links from "./Links.vue";
import Controls from "./Controls.vue";
import Menu from "./Menu.vue";
</script>

<template>
  <nav
    class="fixed left-0 top-0 grid grid-cols-[auto_1fr_auto_auto] items-center p-2 w-full h-16 z-10"
  >
    <Logo />
    <Links />
    <Controls />
    <Menu />
  </nav>
</template>
