<script setup lang="ts">
import { useI18n } from "vue-i18n";

const props = defineProps<{
  button: {
    id: string
    title: string
    katakana: string
    subtitle: string
    description: string
    image: string
  }
}>();

const { t } = useI18n();

// get the translation key
const key = `section.about.${props.button.id}.description`;
</script>

<template>
  <div class="flex flex-col gap-6 w-full">

    <h2 class="text-3xl font-oswald uppercase">
      {{ props.button.title }}
      <span class="text-base">{{ props.button.katakana }}</span>
    </h2>

    <!-- ME + PHILOSOPHY : show text -->
    <p
      v-if="props.button.id === 'me' || props.button.id === 'philosophy'"
      class="text-gray-300 leading-relaxed"
    >
      {{ t(key) }}
    </p>

    <!-- STYLE : show your custom layout -->
    <div
      v-if="props.button.id === 'style'"
      class="flex flex-col gap-4"
    >
      <p class="text-gray-300">{{ t(key) }}</p>

      <!-- Insert your images, grids, moodboard whatever you want -->
      <img :src="props.button.image" class="w-full max-w-md object-cover" />
    </div>

  </div>
</template>
