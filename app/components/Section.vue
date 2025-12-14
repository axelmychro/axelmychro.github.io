<script setup lang="ts">
  defineProps<{
    id: string;
  }>();
</script>

<template>
  <section
    :id="id"
    class="relative w-full h-screen pt-16 pb-16 pr-12 lg:pr-32 overflow-hidden z-0"
  >
    <h2
      class="font-oswald font-bold uppercase opacity-10 text-8xl leading-none absolute left-0 top-0 [writing-mode:vertical-lr] -z-10 select-none pointer-events-none whitespace-nowrap"
    >
      ~/{{ id }}
    </h2>
    <slot />
    <small
      class="font-dela-gothic-one lowercase opacity-90 text-4xl leading-none absolute right-0 bottom-0 -z-10 select-none pointer-events-none whitespace-nowrap"
    >
      {{ $t(`section.${id}.txt`) }}
    </small>
  </section>
</template>
