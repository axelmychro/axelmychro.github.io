<script lang="ts" setup>
  import { onMounted, onUnmounted } from "vue";

  const linkItems = [
    { label: "nav.home", icon: "House", href: "#" },
    { label: "nav.projects", icon: "Code", href: "#projects" },
    { label: "nav.about", icon: "Info", href: "#about" },
    { label: "nav.timeline", icon: "Map", href: "#timeline" },
    { label: "nav.contact", icon: "User", href: "#contact" },
  ];

  const showLinks = useState("showLinks");

  const isLargeScreen = useState(
    "isLargeScreen",
    () => typeof window !== "undefined" && window.innerWidth >= 1024
  );

  const checkScreenSize = () => {
    if (typeof window !== "undefined") {
      isLargeScreen.value = window.innerWidth >= 1024;
      if (isLargeScreen.value) {
        showLinks.value = true;
      }
    }
  };

  onMounted(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", checkScreenSize);
  });

  function handleBackdropClick() {
    if (!isLargeScreen.value) {
      showLinks.value = false;
    }
  }
  function closeLinks() {
    showLinks.value = false;
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
      v-show="showLinks || isLargeScreen"
      class="bg-black/50 lg:bg-transparent w-full h-screen lg:h-fit absolute lg:static inset-0 pl-2 pr-14 pt-16 flex lg:p-0 z-50 flex-1"
    >
      <div
        class="flex flex-col lg:flex-row lg:items-center justify-start lg:justify-end w-full lg:w-full h-screen lg:h-fit lg:gap-2 lg:mx-4"
      >
        <a
          v-for="item in linkItems"
          :key="item.label"
          :href="item.href"
          @click="closeLinks"
          class="text-lg text-gray-100 lg:text-inherit p-2 font-oswald uppercase leading-0 flex flex-row items-center justify-between border-b-2 lg:border-transparent lg:gap-2 hover:text-sky-300 focus:text-sky-300 hover:border-sky-300 focus:border-sky-300 transition-colors duration-300"
        >
          <LucideHouse v-if="item.icon === 'House'" />
          <LucideCode v-else-if="item.icon === 'Code'" />
          <LucideInfo v-else-if="item.icon === 'Info'" />
          <LucideMap v-else-if="item.icon === 'Map'" />
          <LucideUser v-else-if="item.icon === 'User'" />
          {{ $t(item.label) }}
        </a>
      </div>
    </div>
  </Transition>
</template>
