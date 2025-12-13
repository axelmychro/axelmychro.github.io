<script setup lang="ts">
  import Logo from "./Logo.vue";
  import Links from "./Links.vue";
  import Controls from "./Controls.vue";
  import Menu from "./Menu.vue";
</script>

<template>
  <header class="fixed left-0 top-0 w-full h-16 backdrop-blur-xs z-10">
    <nav class="flex flex-row justify-stretch items-center p-2">
      <Logo />
      <Links />
      <Controls />
      <Menu />
    </nav>
  </header>
</template>
