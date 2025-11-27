<script lang="ts" setup></script>

<template>
  <p
    class="absolute -left-18 lg:-left-47 top-16 lg:top-44 text-5xl lg:text-9xl font-oswald uppercase transform -rotate-90 text-gray-900 bg-blue-600/80 fade-mask px-2"
  >
    projects
  </p>
</template>

<style scoped>
.fade-mask {
  mask-image: linear-gradient(
    to left,
    transparent 0%,
    black 0%,
    black 60%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to left,
    transparent 0%,
    black 0%,
    black 60%,
    transparent 100%
  );
}
</style>
