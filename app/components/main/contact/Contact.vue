<script lang="ts" setup>
import Section from "~/components/Section.vue";
</script>

<template>
  <Section id="contact" txt="wow, you stayed?" class="">
    <div class="flex size-full flex-row items-center justify-center p-2">
      <div class="flex flex-col gap-2 sm:gap-8 [&>div>div>time]:text-xs">
        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-2">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-full bg-neutral-500"
            >
              <p class="font-zain">AR</p>
            </div>
            <p class="text-xl">Axel</p>
            <time>4:02</time>
          </div>

          <div
            class="max-w-[90%] self-start rounded-xl rounded-tl-none bg-purple-300 p-2"
          >
            <p class="text-neutral-800">
              since you've reached this part, why not reach me as well? let's
              talk.
            </p>
          </div>

          <div
            class="max-w-[90%] self-start rounded-xl rounded-tl-none bg-purple-300 p-2"
          >
            <p class="text-neutral-800">
              <a
                class="text-sky-800 underline"
                href="mailto:axelmychro@gmail.com"
              >
                <LucideMail class="m-px inline size-4" />
                axelmychro@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-2 self-end">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-full bg-neutral-500"
            >
              <p class="font-zain">U</p>
            </div>
            <p class="text-xl">You</p>
            <time>4:11</time>
          </div>

          <p
            class="max-w-[90%] self-end rounded-xl rounded-br-none bg-sky-300 p-2 text-neutral-800"
          >
            that's cool, but are you okay with casual talks?
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-2">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-full bg-neutral-500"
            >
              <p class="font-zain">AR</p>
            </div>
            <p class="text-xl">Axel</p>
            <time>4:17</time>
          </div>

          <div
            class="max-w-[90%] self-start rounded-xl rounded-tl-none bg-purple-300 p-2"
          >
            <p class="text-neutral-800">
              of course! you wanna just talk about games, it's fine
            </p>
          </div>

          <div
            class="max-w-[90%] self-start rounded-xl rounded-tl-none bg-purple-300 p-2"
          >
            <p class="text-neutral-800">
              <a
                class="text-fuchsia-800"
                target="_blank"
                href="https://instagram.com/axelmychro"
              >
                <LucideInstagram class="m-px inline size-4" />@axelmychro
              </a>
            </p>
          </div>

          <div
            class="max-w-[90%] self-start rounded-xl rounded-tl-none bg-purple-300 p-2"
          >
            <p class="text-neutral-800">thanks for visiting my portfolio!</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
