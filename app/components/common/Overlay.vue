<script lang="ts" setup>
import Counter from "~/components/common/Counter.vue";
</script>

<template>
  <!-- top lane -->
  <div
    class="fixed top-16 left-0 z-30 w-screen shrink-0 border-b border-black/50 dark:border-white/50"
  ></div>

  <!-- mid lane -->
  <div
    class="fixed right-12 bottom-0 z-40 h-screen shrink-0 border-l border-black/50 lg:right-32 dark:border-white/50"
  ></div>

  <!-- anything else -->
  <Counter />

  <!-- mid projects -->

  <!-- bot -->
  <div
    class="fixed right-0 bottom-16 z-30 w-screen shrink-0 border-b border-black/50 dark:border-white/50"
  ></div>
</template>
