<script lang="ts" setup>
import Section from "../Section.vue";
import AboutLabel from "./AboutLabel.vue";
import { ref, onMounted, onUnmounted } from "vue";

const previewVisible = ref(false);
const previewPosition = ref({ x: 0, y: 0 });
const targetPosition = ref({ x: 0, y: 0 });
const currentImage = ref("");

import meImage from "~/assets/images/imathe.webp";
import philosophyImage from "~/assets/images/imathe.webp";
import styleImage from "~/assets/images/imathe.webp";

const buttons = [
  {
    id: "me",
    title: "me",
    katakana: "わたし",
    image: meImage,
  },
  {
    id: "philosophy",
    title: "philosophy",
    katakana: "哲学",
    image: philosophyImage,
  },
  {
    id: "style",
    title: "style",
    katakana: "スタイル",
    image: styleImage,
  },
];

let animationFrame: number;

function showPreview(button: (typeof buttons)[0], event: MouseEvent) {
  previewVisible.value = true;
  currentImage.value = button.image;
  updateTargetPosition(event);
}

function hidePreview() {
  previewVisible.value = false;
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
    <div class="grid grid-cols-1 size-full items-center px-8">
      <button
        v-for="button in buttons"
        :key="button.id"
        type="button"
        class="group border-b-2 border-neutral-300 cursor-pointer w-full max-w-64 h-fit"
        @mouseenter="showPreview(button, $event)"
        @mouseleave="hidePreview()"
      >
        <h2
          class="text-neutral-300 text-start text-2xl font-oswald uppercase group-hover:translate-x-8 group-hover:text-neutral-100 group-hover:text-shadow-[0_0_8px_rgba(0,0,0,1)] transition duration-500"
        >
          {{ button.title }}
          <span class="text-sm">{{ button.katakana }}</span>
        </h2>
      </button>
    </div>

    <div
      class="fixed pointer-events-none -z-10 transition-opacity transform -translate-x-1/2 -translate-y-1/2"
      :class="previewVisible ? 'opacity-100' : 'opacity-0'"
      :style="{
        left: `${previewPosition.x}px`,
        top: `${previewPosition.y}px`,
      }"
    >
      <img
        :src="currentImage"
        alt="Preview"
        class="aspect-auto size-64 object-cover"
      />
    </div>

    <AboutLabel />
  </Section>
</template>
