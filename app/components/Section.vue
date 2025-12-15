<script setup lang="ts">
defineProps<{
  id: string;
}>();
</script>

<template>
  <section
    :id="id"
    class="relative z-0 h-screen w-full overflow-hidden pt-16 pr-12 pb-16 transition-colors duration-300 lg:pr-32"
  >
    <h2
      class="font-oswald pointer-events-none absolute top-0 left-0 -z-10 text-8xl leading-none font-bold whitespace-nowrap uppercase opacity-10 select-none [writing-mode:vertical-lr]"
    >
      ~/{{ id }}
    </h2>
    <slot />
    <small
      class="font-dela-gothic-one pointer-events-none absolute right-2 bottom-2 -z-10 text-xs leading-none whitespace-nowrap lowercase opacity-90 select-none sm:text-sm md:text-base lg:text-lg xl:text-xl"
    >
      {{ $t(`section.${id}.txt`) }}
    </small>
  </section>
</template>
