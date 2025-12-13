<script lang="ts" setup>
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
  <div
    class="flex flex-row gap-2 items-center justify-end px-4 lg:p-0 flex-1 lg:flex-none"
  >
    <button
      @click="toggleLocale"
      type="button"
      class="transition-all duration-300 active:scale-80 cursor-pointer relative text-gray-300"
    >
      <lucide-languages class="size-8" :class="locale" /><span
        class="absolute left-0 bottom-0 text-xs text-gray-400 font-fira-code uppercase leading-none"
        >{{ locale }}</span
      >
    </button>

    <button
      @click="toggleTheme"
      type="button"
      class="transition-all duration-300 active:scale-80 cursor-pointer text-gray-300"
    >
      <lucide-moon v-if="theme === 'dark'" class="size-8" />
      <lucide-sun v-else-if="theme === 'light'" class="size-8" />
      <lucide-fan v-else class="size-8" />
    </button>

    <button
      @click="toggleSound"
      type="button"
      class="transition-all duration-300 active:scale-80 cursor-pointer"
      :class="sound ? 'text-gray-300' : 'text-gray-600'"
    >
      <lucide-headphone-off v-if="sound === false" class="size-8" />
      <lucide-headphones v-else="sound === true" class="size-8" />
    </button>
  </div>
</template>
