<script lang="ts" setup>
import Section from "../Section.vue";
import AboutLabel from "./AboutLabel.vue";
import { ref, onMounted, onUnmounted } from "vue";

const hoveredButton = ref<(typeof buttons)[0] | null>(null);
const selectedButton = ref<(typeof buttons)[0] | null>(null);

const previewVisible = ref(false);
const previewPosition = ref({ x: 0, y: 0 });
const targetPosition = ref({ x: 0, y: 0 });
const currentImage = ref("");

import meImage from "~/assets/images/ID_Info_Update_Card.webp";
import philosophyImage from "~/assets/images/Curio_Written_in_Water.webp";
import styleImage from "~/assets/images/Curio_Punklorde_Mentality.webp";

const buttons = [
  {
    id: "me",
    title: "me",
    katakana: "わたし",
    subtitle: "Axel Ramadhan",
    description: $t("aboutMeDescription"),
    image: meImage,
  },
  {
    id: "philosophy",
    title: "philosophy",
    katakana: "哲学",
    subtitle: "sharp & clear",
    description: $t("aboutPhilosophyDescription"),
    image: philosophyImage,
  },
  {
    id: "style",
    title: "style",
    katakana: "スタイル",
    subtitle: "moodboard",
    description: $t("aboutStyleDescription"),
    image: styleImage,
  },
];

let animationFrame: number;

function showPreview(button: (typeof buttons)[0], event: MouseEvent) {
  previewVisible.value = true;
  currentImage.value = button.image;
  hoveredButton.value = button;
  updateTargetPosition(event);
}

function hidePreview() {
  previewVisible.value = false;
  hoveredButton.value = null;
}

function selectButton(button: (typeof buttons)[0]) {
  if (selectedButton.value?.id === button.id) {
    selectedButton.value = null;
  } else {
    selectedButton.value = button;
  }
}

function updateTargetPosition(event: MouseEvent) {
  targetPosition.value = {
    x: event.clientX,
    y: event.clientY,
  };
}

function startAnimation() {
  const animate = () => {
    previewPosition.value.x +=
      (targetPosition.value.x - previewPosition.value.x) * 0.05;
    previewPosition.value.y +=
      (targetPosition.value.y - previewPosition.value.y) * 0.05;

    animationFrame = requestAnimationFrame(animate);
  };
  animate();
}

function handleMouseMove(event: MouseEvent) {
  updateTargetPosition(event);
}

onMounted(() => {
  startAnimation();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <Section id="about" bgColor="bg-neutral-950" @mousemove="handleMouseMove">
    <div class="flex flex-row size-full p-8 gap-8">
      <div class="flex flex-col size-full max-w-xs justify-evenly shrink-0">
        <button
          v-for="button in buttons"
          :key="button.id"
          type="button"
          class="relative group border-b-2 border-gray-300 cursor-pointer w-full max-w-xs h-fit flex items-end justify-between"
          @mouseenter="showPreview(button, $event)"
          @mouseleave="hidePreview()"
          @click="selectButton(button)"
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
        class="hidden lg:flex flex-col bg-neutral-800/20 backdrop-blur-xs rounded-md p-8 gap-8 size-full"
      >
        <h2 class="text-4xl font-oswald uppercase">
          {{ selectedButton?.title || hoveredButton?.title || "..." }}
        </h2>

        <p>
          {{
            selectedButton?.description || hoveredButton?.description || "..."
          }}
        </p>
      </div>
    </div>

    <div
      class="fixed pointer-events-none select-none -z-10 transition-opacity transform -translate-x-1/2 -translate-y-1/2"
      :class="previewVisible ? 'opacity-100' : 'opacity-0'"
      :style="{
        left: `${previewPosition.x}px`,
        top: `${previewPosition.y}px`,
      }"
    >
      <img
        :src="currentImage"
        alt="Hey!"
        class="aspect-auto size-64 object-cover"
      />
    </div>

    <AboutLabel />
  </Section>
</template>
