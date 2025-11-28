<script setup lang="ts">
defineProps<{
  id: string;
  bgColor?: string;
}>();
</script>

<template>
  <section
    :id="id"
    class="relative w-full h-screen pt-16 pb-16 pr-12 lg:pr-32 overflow-hidden z-0"
    :class="bgColor"
  >
    <slot />
  </section>
</template>
