<script lang="ts" setup>
import Section from "../Section.vue";
import AboutLabel from "./AboutLabel.vue";
</script>

<template>
  <Section id="about" bgColor="bg-neutral-950">
    <div class="flex flex-col w-full h-full items-center justify-evenly">
      <button type="button" class="each-card">
        <h2 class="card-title">
          <span class="inline-katakana">ワタシ</span> me
        </h2>
      </button>

      <button type="button" class="each-card">
        <h2 class="card-title">
          <span class="inline-katakana">フィロソフィー</span> philosophy
        </h2>
      </button>

      <button type="button" class="each-card">
        <h2 class="card-title">
          <span class="inline-katakana">スタイル</span> style
        </h2>
      </button>
    </div>
    <AboutLabel />
  </Section>
</template>

<style scoped>
@import "~/assets/css/main.css";

.each-card {
  @apply border-b-2 border-neutral-600 w-xs h-fit cursor-pointer;
}
.card-title {
  @apply text-neutral-300 text-start text-2xl w-fit h-fit;
}
.inline-katakana {
  @apply blur-[1px];
}
</style>
