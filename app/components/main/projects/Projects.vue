<script setup lang="ts">
import Section from "~/components/Section.vue";

const myGH = "https://github.com/axelmychro/";
const projects = [
  // {
  //   title: "Ryoran",
  //   year: "2025",
  //   date: "2025-09-28",
  //   url: `${myGH}ryoran`,
  // },
  {
    title: "Priestess",
    year: "2025",
    date: "2025-09-28",
    url: `${myGH}priestess`,
  },
  {
    title: "Scraptab",
    year: "2025",
    date: "2025-11-9",
    url: `${myGH}scraptab-web`,
  },
];
</script>

<template>
  <Section id="projects" txt="what have i done?" class="">
    <div class="flex size-full flex-col">
      <div class="flex size-full flex-col items-stretch justify-stretch">
        <a
          v-for="project in projects"
          :key="project.title"
          :href="project.url"
          target="_blank"
          class="group relative flex flex-row items-center justify-stretch overflow-hidden border-b-2 p-4"
        >
          <div
            class="absolute inset-0 -z-10 size-full -translate-x-full bg-gray-900 transition duration-300 group-hover:translate-x-0 group-focus:translate-x-0 dark:bg-gray-100"
          ></div>
          <h2
            class="flex-1 text-2xl transition-colors duration-300 group-hover:text-gray-100 group-focus:text-gray-100"
          >
            {{ project.title }}
          </h2>
          <time
            :datetime="project.date"
            class="text-2xl text-fuchsia-500 transition-colors"
            >{{ project.year }}</time
          >
          <LucideArrowUpRight class="size-8 text-sky-500" />
        </a>
        <div class="flex h-full w-full items-center justify-center select-none">
          <a
            href="https://github.com/axelmychro"
            target="_blank"
            class="animate-float font-google-sans-code flex aspect-3/4 w-32 -rotate-4 flex-col items-center justify-center rounded-xs bg-gray-900 text-center text-xl text-gray-100 dark:bg-gray-100 dark:text-gray-900"
            ><LucideGithub class="size-16" />visit my GitHub!</a
          >
        </div>
      </div>
    </div>
  </Section>
</template>
