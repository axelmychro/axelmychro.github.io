<script setup lang="ts">
  import Section from "~/components/common/Section.vue";
  import ProjectsLabel from "./ProjectsLabel.vue";

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
  <Section id="projects">
    <div class="w-full h-full flex flex-row items-center justify-center">
      <div
        class="relative w-12 lg:w-32 h-full flex items-start justify-start overflow-hidden"
      >
        <ProjectsLabel />
      </div>

      <div class="flex flex-col w-full h-full">
        <div class="w-full h-full flex flex-col items-stretch justify-stretch">
          <a
            v-for="project in projects"
            :key="project.title"
            :href="project.url"
            target="_blank"
            class="relative p-4 flex flex-row items-center justify-stretch overflow-hidden group"
          >
            <div
              class="absolute inset-0 bg-gray-100 size-full -z-10 transition duration-300 -translate-x-full group-hover:translate-x-0 group-focus:translate-x-0"
            ></div>
            <div
              class="flex flex-1 flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between border-b-2 border-gray-500"
            >
              <h2
                class="text-2xl transition-colors duration-300 text-gray-100 group-hover:text-gray-900 group-focus:text-gray-900"
              >
                {{ project.title }}
              </h2>
              <time
                :datetime="project.date"
                class="text-xl sm:text-2xl text-fuchsia-300 transition-colors duration-700 group-hover:text-fuchsia-700 group-focus:text-fuchsia-700"
                >{{ project.year }}</time
              >
            </div>
            <LucideArrowUpRight
              class="size-8 transition-colors duration-700 text-sky-300 group-hover:text-sky-700 group-focus:text-sky-700"
            />
          </a>
          <div
            class="flex items-center justify-center w-full h-full select-none"
          >
            <a
              href="https://github.com/axelmychro"
              target="_blank"
              class="animate-float bg-gray-100 text-gray-900 text-xl font-sans font-semibold text-center flex flex-col items-center justify-center aspect-3/4 w-32 rounded-xl"
              ><LucideGithub class="size-16" />visit my GitHub!</a
            >
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(-13deg);
    }
    50% {
      transform: translateY(-10px) rotate(-11deg);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>
