<script setup lang="ts">
import { useI18n } from "vue-i18n";

const props = defineProps<{
  button: {
    id: string;
    title: string;
    katakana: string;
    subtitle: string;
    description?: string;
    image: string;
  };
}>();

const { t } = useI18n();

const key = `section.about.${props.button.id}.description`;
</script>

<template>
  <h2 class="text-4xl font-oswald uppercase">
    {{ props.button.title }}
  </h2>
  <p class="text-gray-300 text-base leading-relaxed max-w-lg">
    {{ t(key) }}
  </p>

  <template v-if="props.button.id === 'style'">
    <h3 class="text-2xl">
      Colours
      <span class="text-sm text-sky-300"
        >by
        <i class="devicon-tailwindcss-original colored"></i>
      </span>
    </h3>
    <button
      type="button"
      class="size-4 aspect-square bg-sky-300 rounded-xs"
    ></button>
  </template>
</template>
