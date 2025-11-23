<script setup>
import { ref } from "vue";
const { locale, setLocale } = useI18n();

const theme = ref("dark");
const sound = ref(false);

function toggleLocale() {
  setLocale(locale.value === "en" ? "id" : "en");
}

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}

function toggleSound() {
  sound.value = !sound.value;
}
</script>

<template>
  <div class="flex flex-row gap-2 items-center justify-end px-4 lg:p-0">
    <button
      @click="toggleLocale"
      type="button"
      class="animate relative text-gray-300"
    >
      <lucide-languages class="each-icon-size" :class="locale" /><span
        class="absolute left-0 bottom-0 text-xs text-gray-400 font-fira-code uppercase"
        >{{ locale }}</span
      >
    </button>

    <button @click="toggleTheme" type="button" class="animate text-gray-300">
      <lucide-moon v-if="theme === 'dark'" class="each-icon-size" />
      <lucide-sun v-else-if="theme === 'light'" class="each-icon-size" />
      <lucide-fan v-else class="each-icon-size" />
    </button>

    <button
      @click="toggleSound"
      type="button"
      class="animate"
      :class="sound ? 'text-gray-300' : 'text-gray-600'"
    >
      <lucide-headphone-off v-if="sound === false" class="each-icon-size" />
      <lucide-headphones v-else="sound === true" class="each-icon-size" />
    </button>
  </div>
</template>

<style scoped>
@import "~/assets/css/main.css";

.each-icon-size {
  @apply w-8 h-8;
}

.animate {
  @apply transition-all duration-300 active:scale-80;
}
</style>
