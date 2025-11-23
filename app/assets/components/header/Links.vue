<script setup lang="ts">
const linkItems = [
  { label: "index", icon: "lucide-house", href: "#" },
  { label: "projects", icon: "lucide-code", href: "#projects" },
  { label: "about", icon: "lucide-info", href: "#about" },
  { label: "timeline", icon: "lucide-map", href: "#timeline" },
  { label: "contact", icon: "lucide-user", href: "#contact" },
];

const showLinks = useState("showLinks");

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
      v-show="showLinks"
      @click="closeLinks"
      class="bg-black/50 lg:bg-transparent w-full h-full fixed lg:static inset-0 pl-2 pr-14 pt-16 flex lg:p-0 z-50"
    >
      <TransitionGroup
        @click.stop
        tag="div"
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
        move-class="transition-all duration-500"
        class="flex flex-col lg:flex-row lg:items-center justify-start lg:justify-end w-screen lg:w-full h-screen lg:h-full lg:gap-2 lg:px-2"
      >
        <a
          v-for="item in linkItems"
          :key="item.label"
          :href="item.href"
          @click="closeLinks"
          class="each-link each-link-lg each-link-hoverfocus"
        >
          <lucide-house v-if="item.icon === 'lucide-house'" class="link-icon" />
          <lucide-code
            v-else-if="item.icon === 'lucide-code'"
            class="link-icon"
          />
          <lucide-info
            v-else-if="item.icon === 'lucide-info'"
            class="link-icon"
          />
          <lucide-map
            v-else-if="item.icon === 'lucide-map'"
            class="link-icon"
          />
          <lucide-user
            v-else-if="item.icon === 'lucide-user'"
            class="link-icon"
          />
          {{ $t(item.label) }}
        </a>
      </TransitionGroup>
    </div>
  </Transition>
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
