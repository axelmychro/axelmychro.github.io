<script setup lang="ts">
import LinkItems from "./LinkItems.vue";

const showLinks = useState("showLinks");
const isLargeScreen = useState("isLargeScreen");

function handleBackdropClick() {
  if (!isLargeScreen.value) {
    showLinks.value = false;
  }
}
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      @click="handleBackdropClick"
      v-show="showLinks"
      class="bg-black/50 lg:bg-transparent w-full h-full fixed lg:static inset-0 pl-2 pr-14 pt-16 flex lg:p-0 z-50"
    >
      <LinkItems />
    </div>
  </Transition>
</template>
