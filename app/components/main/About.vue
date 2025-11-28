<script lang="ts" setup>
import Section from "../Section.vue";
import AboutLabel from "./AboutLabel.vue";
</script>

<template>
  <Section id="about" bgColor="bg-gray-950">
    <div class="flex flex-col h-full">
      <div class="each-card">
        <div class="ect-container">
          <h2 class="text-sky-300 each-card-title">me</h2>
        </div>

        <p class="each-card-content">
          i'm Axel, a first-year computer science student with a
          <span class="text-emerald-200">healthy</span>
          obsession of websites. i learn by doing and ship whatever survives my
          perfectionism.
          <i class="devicon-vuejs-plain colored"
            ><span class="font-google-sans-flex">Vue</span></i
          >
          and
          <i class="devicon-nuxt-original colored"
            ><span class="font-google-sans-flex">Nuxt</span></i
          >
          feel like home to me, so my experiments end up living there
        </p>
      </div>

      <div class="each-card">
        <div class="ect-container">
          <h2 class="text-fuchsia-300 each-card-title">philosophy</h2>
        </div>

        <p class="each-card-content">
          follows a simple rule that modern doesn't have to mean soft. i like
          clean layouts, minimal colors, and edges that stay sharp enough to
          feel intentional. i adore interfaces that load fast, read clearly, and
          feel honest about what they are
        </p>
      </div>
    </div>
    <AboutLabel />
  </Section>
</template>

<style scoped>
@import "~/assets/css/main.css";

.each-card {
  @apply h-full flex flex-row;
}
.ect-container {
  @apply bg-gray-700 px-2 rounded-sm w-16 h-full shrink-0 flex items-center justify-center;
}
.each-card-title {
  @apply text-2xl font-zain -rotate-90;
}
.each-card-content {
  @apply text-lg text-gray-300 bg-gray-900 p-2 rounded-sm;
}
.ecc-inline-icon {
  @apply flex;
}
</style>
