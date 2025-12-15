<script lang="ts" setup>
import Section from "~/components/Section.vue";
import AboutCard from "./AboutCard.vue";
import AboutMagic from "./AboutMagic.vue";

import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import meImage from "~/assets/images/ID_Info_Update_Card.webp";
import philosophyImage from "~/assets/images/Curio_Written_in_Water.webp";
import styleImage from "~/assets/images/Curio_Punklorde_Mentality.webp";

const aboutButtons = [
  {
    id: "me",
    katakana: "わたし",
    image: meImage,
  },
  {
    id: "philosophy",
    katakana: "哲学",
    image: philosophyImage,
  },
  {
    id: "style",
    katakana: "スタイル",
    image: styleImage,
  },
];

const showButtons = ref(true);
const buttons = aboutButtons;

const hoveredButton = ref<(typeof aboutButtons)[0] | null>(null);
const selectedButton = ref<(typeof aboutButtons)[0] | null>(null);

const processedButton = computed(() => {
  const button = selectedButton.value || hoveredButton.value;
  if (!button) return null;

  return {
    ...button,
    description: t(`section.about.${button.id}.description`),
  };
});

const activeButton = computed(
  () => selectedButton.value || hoveredButton.value,
);

const mouse = ref({ x: 0, y: 0 });
function handleMouseMove(event: MouseEvent) {
  mouse.value = {
    x: event.clientX,
    y: event.clientY,
  };
}

function showPreview(button: (typeof buttons)[0]) {
  hoveredButton.value = button;
}

function hidePreview() {
  hoveredButton.value = null;
}
</script>

<template>
  <Section
    id="about"
    class="bg-linear-to-r from-zinc-50 via-neutral-50 to-stone-50 text-neutral-900 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 dark:text-neutral-100"
    @mousemove="handleMouseMove"
  >
    <div
      class="flex size-full transition-all duration-1000"
      :class="showButtons ? 'flex-row gap-8 lg:p-8' : 'flex-row gap-0 p-0'"
    >
      <div
        class="flex size-full shrink-0 flex-col justify-evenly transition-all duration-1000"
        :class="
          showButtons
            ? 'max-w-xs translate-x-0 p-2 opacity-100 blur-none lg:p-0'
            : 'max-w-0 -translate-x-full p-0 opacity-0 blur-3xl'
        "
      >
        <button
          v-for="button in buttons"
          :key="button.id"
          type="button"
          class="group relative flex h-fit w-full max-w-xs cursor-pointer items-end justify-between border-b-2"
          @mouseenter="showPreview(button)"
          @mouseleave="hidePreview()"
          @focus="selectedButton = button"
          @click="
            showButtons = false;
            selectedButton = button;
          "
        >
          <h2
            class="font-oswald z-10 text-center text-2xl font-bold uppercase opacity-100 transition-all duration-300 text-shadow-neutral-100 group-hover:translate-x-8 group-hover:opacity-100 group-hover:text-shadow-[-2px_0_8px] group-focus:translate-x-8 group-focus:opacity-100 group-focus:text-shadow-[-2px_0_8px] dark:text-shadow-neutral-900"
          >
            {{ t(`section.about.${button.id}.title`) }}
            <span class="font-ibm-plex-sans-jp -z-10 text-sm">{{
              button.katakana
            }}</span>
          </h2>
          <p
            class="font-oswald absolute right-0 bottom-0 text-4xl text-sky-500 uppercase opacity-0 transition-opacity duration-500 text-shadow-[-2px_0_8px] text-shadow-neutral-100 group-hover:opacity-100 group-focus:opacity-100 dark:text-shadow-neutral-900"
          >
            {{ t(`section.about.${button.id}.subtitle`) }}
          </p>
        </button>
      </div>

      <div
        class="relative flex size-full min-w-full flex-col gap-8 p-2 backdrop-blur-xs transition duration-1000 lg:min-w-auto lg:p-8"
        :class="
          showButtons
            ? 'rounded-xs bg-neutral-800/40 text-neutral-100 opacity-0 lg:opacity-100 dark:bg-neutral-200/40 dark:text-neutral-900'
            : 'rounded-none bg-neutral-800/10 opacity-100 dark:bg-neutral-200/10'
        "
      >
        <p
          v-if="!activeButton"
          class="pointer-events-none m-auto text-9xl leading-0 select-none"
        >
          ...
        </p>

        <AboutCard v-if="processedButton" :button="processedButton" />

        <button
          type="button"
          class="absolute top-2 right-2 flex cursor-pointer bg-neutral-900 transition duration-300 lg:top-8 lg:right-8 dark:bg-neutral-100"
          :class="
            showButtons
              ? 'scale-0 rounded-xs opacity-0'
              : 'scale-100 rounded-none opacity-100'
          "
          @click="
            showButtons = true;
            selectedButton = null;
          "
        >
          <LucideChevronLeft
            class="size-8 text-neutral-100 dark:text-neutral-900"
          />
        </button>

        <div
          class="pointer-events-none absolute right-8 bottom-8 -z-10 flex flex-row gap-2 duration-300 select-none *:size-8 *:text-black *:opacity-20 *:transition dark:*:text-white"
          :class="showButtons ? '*:scale-100' : '*:scale-0'"
        >
          <LucidePlus /><LucideSquare /><LucideX /><LucideCircle />
        </div>
      </div>
    </div>

    <AboutMagic :button="hoveredButton" :mouse="mouse" />
  </Section>
</template>
