<script lang="ts" setup>
import { ref } from "vue";
const { locale, setLocale } = useI18n();

const colorMode = useColorMode();
const sound = ref(false);

function toggleLocale() {
  setLocale(locale.value === "en" ? "id" : "en");
}

function toggleTheme() {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
}

function toggleSound() {
  sound.value = !sound.value;
}
</script>

<template>
  <div
    class="flex flex-1 flex-row items-center justify-end gap-2 px-4 lg:flex-none lg:p-0"
  >
    <button
      @click="toggleLocale"
      type="button"
      class="relative cursor-pointer transition-all duration-300 active:scale-90"
    >
      <lucide-languages class="size-8" :class="locale" /><span
        class="font-fira-code absolute bottom-0 left-0 text-xs leading-none uppercase opacity-50"
        >{{ locale }}</span
      >
    </button>

    <button
      @click="toggleTheme"
      type="button"
      class="cursor-pointer transition-all duration-300 active:scale-90"
    >
      <lucide-moon v-if="colorMode.value === 'dark'" class="size-8" />
      <lucide-sun v-else-if="colorMode.value === 'light'" class="size-8" />
      <lucide-orbit v-else class="size-8" />
    </button>

    <button
      @click="toggleSound"
      type="button"
      class="cursor-pointer transition-all duration-300 active:scale-90"
      :class="sound ? 'opacity-100' : 'opacity-50'"
    >
      <lucide-headphone-off v-if="sound === false" class="size-8" />
      <lucide-headphones v-else="sound === true" class="size-8" />
    </button>
  </div>
</template>
