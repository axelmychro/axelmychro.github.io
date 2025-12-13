<script lang="ts" setup>
  const showLinks = useState("showLinks", () => false);
  function toggleLinks() {
    showLinks.value = !showLinks.value;
  }
</script>

<template>
  <button
    @click="toggleLinks"
    type="button"
    class="lg:hidden flex items-center justify-center cursor-pointer"
  >
    <lucide-menu class="size-8" />
  </button>
</template>
