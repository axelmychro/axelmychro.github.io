<script setup lang="ts">
import Section from "../Section.vue";

const projects = [
  {
    title: "Ryoran",
    year: "2025",
    date: "2025-09-28",
    url: "https://github.com/axelmychro/ryoran",
  },
  {
    title: "Priestess",
    year: "2025",
    date: "2025-09-28",
    url: "https://github.com/axelmychro/priestess",
  },
  {
    title: "Scraptab",
    year: "2025",
    date: "2025-11-9",
    url: "https://github.com/axelmychro/scraptab-web",
  },
];
</script>

<template>
  <Section>
    <div
      class="w-full h-full flex flex-row items-stretch justify-stretch relative"
    >
      <div class="w-12 lg:w-32 h-full shrink-0"></div>

      <div class="flex flex-col w-full h-full">
        <div class="w-full h-full flex flex-col items-stretch justify-stretch">
          <a
            v-for="project in projects"
            :key="project.title"
            :href="project.url"
            target="_blank"
            class="px-4 py-2 flex flex-row items-center justify-between hover:bg-gray-100 transition-colors duration-300"
          >
            <!-- 23/11/25 4:53 hoverfocus gradient -->
            <div class="flex flex-col">
              <h2 class="text-2xl font-fira-code">{{ project.title }}</h2>
              <time :datetime="project.date" class="text-sm">{{
                project.year
              }}</time>
            </div>
            <LucideArrowUpRight
              class="each-project-icon group-hover:scale-110 transition-transform"
            />
          </a>
        </div>
        <div class="flex items-center justify-start">
          <a
            class="flex items-center justify-center aspect-3/4 w-12 rounded-md m-4 -rotate-12 bg-gray-100"
            href="https://github.com/axelmychro"
          >
            <LucideGithub class="size-8 text-gray-900" />
          </a>
          <div>
            <a
              href="https://github.com/axelmychro"
              target="_blank"
              class="text-xl text-gray-100"
              >visit my GitHub!</a
            >
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
