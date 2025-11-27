<script lang="ts" setup>
import Counter from "./common/Counter.vue";
</script>

<template>
  <!-- top lane -->
  <div
    class="fixed left-0 top-16 w-screen border-b border-gray-600 shrink-0 z-30"
  ></div>

  <!-- mid lane -->
  <div
    class="fixed right-12 lg:right-32 bottom-0 h-screen border-l border-gray-600 shrink-0 z-40"
  ></div>

  <!-- anything else -->
  <Counter />

  <!-- mid projects -->

  <!-- bot -->
  <div
    class="fixed right-0 bottom-16 w-screen border-b border-gray-600 shrink-0 z-30"
  ></div>
</template>
