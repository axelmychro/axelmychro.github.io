<script lang="ts" setup>
import Section from "../Section.vue";
import AboutLabel from "./AboutLabel.vue";
</script>

<template>
  <Section id="about" bgColor="bg-gray-950">
    <div class="flex gap-8">
      <div class="each-card">
        <h2 class="text-sky-300 each-card-title">me</h2>

        <p></p>
      </div>

      <div class="each-card">
        <h2 class="text-fuchsia-300 each-card-title">philosophy</h2>

        <p></p>
      </div>
    </div>
    <AboutLabel />
  </Section>
</template>

<style scoped>
@import "~/assets/css/main.css";

.each-card {
  @apply bg-gray-800 p-2 rounded-xs;
}
.each-card-title {
  @apply text-2xl font-zain;
}
</style>
