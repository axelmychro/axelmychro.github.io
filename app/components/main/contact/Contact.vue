nuxt 4, vue 3, tailwnd v4
<script lang="ts" setup>
import Section from "~/components/common/Section.vue";
</script>

<template>
  <Section id="contact" bg-color="bg-neutral-800" text-color="text-neutral-200">
    <div class="size-full p-2 flex flex-row items-center justify-center">
      <div class="flex flex-col gap-2 sm:gap-8 [&>div>div>time]:text-xs">
        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-2">
            <div
              class="size-8 aspect-square bg-neutral-600 rounded-full flex items-center justify-center"
            >
              <p class="font-zain">AR</p>
            </div>
            <p class="text-xl">Axel</p>
            <time>4:02</time>
          </div>

          <div
            class="bg-purple-200 p-2 max-w-[90%] self-start rounded-xl rounded-tl-none"
          >
            <p class="text-neutral-800">
              since you've reached this part, why not reach me as well? let's
              talk.
            </p>
          </div>

          <div
            class="bg-purple-200 p-2 max-w-[90%] self-start rounded-xl rounded-tl-none"
          >
            <p class="text-neutral-800">
              <a
                class="underline text-sky-800"
                href="mailto:axelmychro@gmail.com"
              >
                <LucideMail class="size-4 inline m-px" />
                axelmychro@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-2 self-end">
            <div
              class="size-8 aspect-square bg-neutral-600 rounded-full flex items-center justify-center"
            >
              <p class="font-zain">U</p>
            </div>
            <p class="text-xl">You</p>
            <time>4:11</time>
          </div>

          <p
            class="bg-emerald-800 p-2 max-w-[90%] self-end rounded-xl rounded-br-none text-neutral-200"
          >
            that's cool, but are you okay with casual talks?
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-2">
            <div
              class="size-8 aspect-square bg-neutral-600 rounded-full flex items-center justify-center"
            >
              <p class="font-zain">AR</p>
            </div>
            <p class="text-xl">Axel</p>
            <time>4:17</time>
          </div>

          <div
            class="bg-purple-200 p-2 max-w-[90%] self-start rounded-xl rounded-tl-none"
          >
            <p class="text-neutral-800">
              of course! you wanna just talk about games, it's fine
            </p>
          </div>

          <div
            class="bg-purple-200 p-2 max-w-[90%] self-start rounded-xl rounded-tl-none"
          >
            <p class="text-neutral-800">
              <a
                class="text-fuchsia-800"
                target="_blank"
                href="https://instagram.com/axelmychro"
              >
                <LucideInstagram class="size-4 inline m-px" />@axelmychro
              </a>
            </p>
          </div>

          <div
            class="bg-purple-200 p-2 max-w-[90%] self-start rounded-xl rounded-tl-none"
          >
            <p class="text-neutral-800">thanks for visiting my portfolio!</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
