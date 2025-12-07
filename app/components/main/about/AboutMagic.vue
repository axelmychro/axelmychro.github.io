<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  button: { image: string } | null;
  mouse: { x: number; y: number };
}>();

const previewVisible = ref(false);
const currentImage = ref("");
const previewPosition = ref({ x: 0, y: 0 });
const targetPosition = ref({ x: 0, y: 0 });

let animationFrame: number;

watch(
  () => props.button,
  (newButton) => {
    if (newButton) {
      previewVisible.value = true;
      currentImage.value = newButton.image;
    } else {
      previewVisible.value = false;
    }
  }
);

watch(
  () => props.mouse,
  (newPos) => {
    targetPosition.value = { ...newPos };
  }
);

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

onMounted(startAnimation);
onUnmounted(() => cancelAnimationFrame(animationFrame));
</script>

<template>
  <div
    class="fixed pointer-events-none select-none -z-10 transition-opacity transform -translate-x-1/2 -translate-y-1/2"
    :class="previewVisible ? 'opacity-100' : 'opacity-0'"
    :style="{
      left: `${previewPosition.x}px`,
      top: `${previewPosition.y}px`,
    }"
  >
    <img :src="currentImage" alt="" class="min-w-64 min-h-64 object-cover" />
  </div>
</template>
