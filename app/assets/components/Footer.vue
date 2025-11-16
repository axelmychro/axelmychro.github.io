<script setup lang="ts">
import Credits from "./footer/Credits.vue";
import Controls from "./footer/Controls.vue";
</script>

<template>
  <footer
    class="fixed right-0 bottom-0 flex flex-row gap-8 items-center justify-between p-2 w-full h-16"
  >
    <Credits />
    <Controls />
  </footer>
</template>
