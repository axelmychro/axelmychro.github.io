<script setup>
  import Section from "~/components/Section.vue";
  import HeroCard from "./HeroCard.vue";
</script>
<template>
  <Section
    id="home"
    class="bg-linear-to-br from-purple-50/60 via-slate-100 to-gray-100 dark:from-purple-950/60 dark:via-slate-900 dark:to-gray-900"
  >
    <div class="flex items-center justify-center w-full h-full">
      <HeroCard
        class="animate-float transition-transform duration-300 ease-out shadow-md"
      />
    </div>
  </Section>
</template>
