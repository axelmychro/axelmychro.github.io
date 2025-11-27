<script setup lang="ts">
import Logo from "./Logo.vue";
import Links from "./Links.vue";
import Controls from "./Controls.vue";
import Menu from "./Menu.vue";
</script>

<template>
  <nav class="grid grid-cols-[auto_1fr_auto_auto] p-2">
    <Logo />
    <Links />
    <Controls />
    <Menu />
  </nav>
</template>
