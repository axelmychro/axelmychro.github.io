<script setup lang="ts">
defineProps<{
  id?: string;
}>();
</script>

<template>
  <section
    :id="id"
    class="w-full h-screen pt-16 pb-16 pr-12 lg:pr-32 flex items-center justify-center"
  >
    <slot />
  </section>
</template>
