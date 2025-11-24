<script lang="ts" setup>
const linkItems = [
  { label: "index", icon: "House", href: "#" },
  { label: "projects", icon: "Code", href: "#projects" },
  { label: "about", icon: "Info", href: "#about" },
  { label: "timeline", icon: "Map", href: "#timeline" },
  { label: "contact", icon: "User", href: "#contact" },
];

const showLinks = useState("showLinks");
const isLargeScreen = useState("isLargeScreen");

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024;
  if (isLargeScreen.value) {
    showLinks.value = true;
  }
};
onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

  onUnmounted(() => {
    window.removeEventListener("resize", checkScreenSize);
  });
});

function closeLinks() {
  if (isLargeScreen.value) {
    showLinks.value = true;
  }
}
</script>

<template>
  <div
    class="flex flex-col lg:flex-row lg:items-center justify-start lg:justify-end w-screen lg:w-full h-screen lg:h-full lg:gap-2 lg:px-2 z-10"
  >
    <a
      v-for="item in linkItems"
      :key="item.label"
      :href="item.href"
      @click="closeLinks"
      class="each-link each-link-lg each-link-hoverfocus"
    >
      <LucideHouse v-if="item.icon === 'House'" class="link-icon" />
      <LucideCode v-else-if="item.icon === 'Code'" class="link-icon" />
      <LucideInfo v-else-if="item.icon === 'Info'" class="link-icon" />
      <LucideMap v-else-if="item.icon === 'Map'" class="link-icon" />
      <LucideUser v-else-if="item.icon === 'User'" class="link-icon" />
      {{ $t(item.label) }}
    </a>
  </div>
</template>

<style scoped>
@import "~/assets/css/main.css";

.each-link {
  @apply text-xl sm:text-2xl md:text-3xl p-2 font-oswald font-medium uppercase flex flex-row items-center justify-between border-b-2;
}
.each-link-lg {
  @apply lg:font-fira-code lg:border-b-0 lg:border-l-2 lg:py-0 lg:rounded-none lg:border-gray-600 lg:text-sm lg:gap-2;
}
.each-link-hoverfocus {
  @apply hover:text-sky-300 focus:text-sky-300 transition-colors duration-300;
}

.link-icon {
  @apply aspect-square w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-4 lg:h-4 lg:text-gray-300;
}
</style>
