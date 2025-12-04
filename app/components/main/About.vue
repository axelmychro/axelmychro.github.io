<script lang="ts" setup>
import Section from "../Section.vue";
import AboutLabel from "./AboutLabel.vue";
import AboutCard from "./AboutCard.vue";
import AboutMagic from "./AboutMagic.vue";

import { ref, computed } from "vue";
import { aboutButtons } from "./about";

const showButtons = ref(true);
const buttons = aboutButtons;

const hoveredButton = ref<(typeof aboutButtons)[0] | null>(null);
const selectedButton = ref<(typeof aboutButtons)[0] | null>(null);

const activeButton = computed(
  () => selectedButton.value || hoveredButton.value
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
  <Section id="about" bgColor="bg-neutral-950" @mousemove="handleMouseMove">
    <div
      class="flex size-full transition-all duration-1000"
      :class="showButtons ? 'flex-row p-2 lg:p-8 gap-8' : 'flex-row p-0 gap-0'"
    >
      <div
        class="flex flex-col size-full justify-evenly shrink-0 transition-all duration-1000"
        :class="
          showButtons
            ? 'translate-x-0 opacity-100 blur-none max-w-xs'
            : '-translate-x-full opacity-0 blur-3xl max-w-0'
        "
      >
        <button
          v-for="button in buttons"
          :key="button.id"
          type="button"
          class="relative group border-b-2 border-gray-300 cursor-pointer w-full max-w-xs h-fit flex items-end justify-between"
          @mouseenter="showPreview(button)"
          @mouseleave="hidePreview()"
          @focus="selectedButton = button"
          @click="
            showButtons = false;
            selectedButton = button;
          "
        >
          <h2
            class="z-10 text-gray-300 text-center text-2xl font-oswald font-bold uppercase group-hover:translate-x-8 group-hover:text-gray-100 group-hover:text-shadow-[-2px_0_8px] group-focus:translate-x-8 group-focus:text-gray-100 group-focus:text-shadow-[-2px_0_8px] text-shadow-black transition-all duration-500"
          >
            {{ button.title }}
            <span class="text-sm font-ibm-plex-sans-jp">{{
              button.katakana
            }}</span>
          </h2>
          <p
            class="absolute right-0 text-4xl text-sky-300 uppercase font-oswald text-shadow-[2px_0_8px] text-shadow-black opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition-opacity duration-500"
          >
            {{ button.subtitle }}
          </p>
        </button>
      </div>

      <div
        class="relative flex flex-col place-items-start rounded-md p-2 lg:p-8 gap-8 size-full transition duration-1000"
        :class="
          showButtons
            ? 'bg-neutral-800/20 backdrop-blur-xs opacity-0 lg:opacity-100'
            : 'bg-neutral-800 opacity-100'
        "
      >
        <AboutCard v-if="activeButton" :button="activeButton" />

        <template v-if="!activeButton">
          <h2 class="text-gray-500 text-4xl">...</h2>
          <p class="text-gray-500 text-8xl place-self-center">...</p>
          <button></button>
        </template>

        <button
          type="button"
          class="bg-neutral-600 flex cursor-pointer absolute right-8 bottom-8 transition duration-300"
          :class="
            showButtons
              ? 'opacity-0 scale-0 rounded-xs'
              : 'opacity-100 scale-100 rounded-none'
          "
          @click="
            showButtons = true;
            selectedButton = null;
          "
        >
          <LucideChevronLeft class="size-8 text-neutral-300" />
        </button>
      </div>
    </div>

    <AboutMagic :button="hoveredButton" :mouse="mouse" />
    <AboutLabel />
  </Section>
</template>
