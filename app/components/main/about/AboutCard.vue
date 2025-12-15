<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t } = useI18n();

const props = defineProps<{
  button: {
    id: string;
  };
}>();

const l7dTitle = t(`section.about.${props.button.id}.title`);
const l7dDescription = t(`section.about.${props.button.id}.description`);
const l7dReason = t(`section.about.${props.button.id}.reason`);

const l7dColours = `section.about.style.colours.`;
const colours = {
  primary: t(`${l7dColours}primary`),
  secondary: t(`${l7dColours}secondary`),
  mainBackground: t(`${l7dColours}main_background`),
  subBackground: t(`${l7dColours}sub_background`),
};

const colorButtons = ref([
  {
    id: "primary",
    name: colours.primary,
    bgClass: "bg-sky-300",
    borderClass: "border-sky-400",
    textClass: "text-sky-950",
    hexColor: "#7dd3fc",
  },
  {
    id: "secondary",
    name: colours.secondary,
    bgClass: "bg-fuchsia-300",
    borderClass: "border-fuchsia-400",
    textClass: "text-fuchsia-950",
    hexColor: "#f0abfc",
  },
  {
    id: "main_background",
    name: colours.mainBackground,
    bgClass: "bg-gray-800",
    borderClass: "border-gray-700",
    textClass: "text-gray-50",
    hexColor: "#1f2937",
  },
  {
    id: "sub_background",
    name: colours.subBackground,
    bgClass: "bg-neutral-800",
    borderClass: "border-neutral-700",
    textClass: "text-neutral-50",
    hexColor: "#262626",
  },
]);

const copiedColorId = ref<string | null>(null);
const copyToClipboard = async (color: string, id: string) => {
  try {
    await navigator.clipboard.writeText(color);
    copiedColorId.value = id;

    setTimeout(() => {
      copiedColorId.value = null;
    }, 3000);
  } catch (err) {
    console.error("failed to copy:", err);
  }
};

const l7dFonts = `section.about.style.fonts.`;
const fonts = {
  title: t(`${l7dFonts}title`),
  subtitle: t(`${l7dFonts}subtitle`),
  jp: t(`${l7dFonts}jp`),
  section: t(`${l7dFonts}section`),
  paragraph: t(`${l7dFonts}paragraph`),
  code1: t(`${l7dFonts}code1`),
  code2: t(`${l7dFonts}code2`),
  footer: t(`${l7dFonts}footer`),
};

const fontsSpecimen = "https://fonts.google.com/specimen/";
const fontLinks = [
  {
    name: fonts.title,
    url: `${fontsSpecimen}Zain`,
    class: "font-zain bg-sky-500 text-2xl",
  },
  {
    name: fonts.subtitle,
    url: `${fontsSpecimen}Dela+Gothic+One`,
    class: "font-dela-gothic-one blur-[1px] text-xl",
  },
  {
    name: fonts.jp,
    url: `${fontsSpecimen}IBM+Plex+Sans+JP`,
    class: "font-ibm-plex-sans-jp text-shadow-[-2px_0_8px] text-sm",
  },
  {
    name: fonts.section,
    url: `${fontsSpecimen}Oswald`,
    class: "font-oswald uppercase text-lg",
  },
  {
    name: fonts.paragraph,
    url: `${fontsSpecimen}Google+Sans+Flex`,
    class: "font-google-sans-flex bg-purple-500 text-neutral-100 text-base",
  },
  {
    name: fonts.code1,
    url: `${fontsSpecimen}Fira+Code`,
    class: "font-fira-code text-red-600 dark:text-red-400",
  },
  {
    name: fonts.code2,
    url: `${fontsSpecimen}Google+Sans+Code`,
    class: "font-google-sans-code text-yellow-600 dark:text-yellow-400",
  },
  {
    name: fonts.footer,
    url: `${fontsSpecimen}Playpen+Sans`,
    class:
      "font-playpen-sans text-sm bg-neutral-900 dark:bg-transparent text-fuchsia-300",
  },
];
</script>

<template>
  <div class="space-y-2 [&>p]:max-w-lg [&>p]:text-xl [&>p]:leading-relaxed">
    <h2 class="font-oswald text-6xl font-bold uppercase">
      {{ l7dTitle }}
    </h2>
    <p>
      {{ l7dDescription }}
    </p>
    <p v-if="props.button.id === 'philosophy'">{{ l7dReason }}</p>

    <template v-if="props.button.id === 'style'">
      <h3 class="text-2xl">
        Colours
        <span class="text-sm text-sky-300"
          >from <i class="devicon-tailwindcss-original"></i>tailwindcss
        </span>
      </h3>
      <div class="flex flex-row flex-wrap gap-2">
        <button
          v-for="colorButton in colorButtons"
          :key="colorButton.id"
          type="button"
          class="font-google-sans-code aspect-square size-16 cursor-pointer rounded-xs border-2 p-2"
          :class="[
            colorButton.bgClass,
            colorButton.borderClass,
            colorButton.textClass,
          ]"
          @click="copyToClipboard(colorButton.hexColor, colorButton.id)"
        >
          <template v-if="copiedColorId !== colorButton.id">
            {{ colorButton.name }}
          </template>
          <template v-else>
            <LucideClipboardCheck class="size-full" />
          </template>
        </button>
      </div>

      <h3 class="text-2xl">
        Fonts
        <span class="text-sm text-amber-300"
          >from
          <img
            class="inline size-3.5"
            src="~/assets/icons/google_fonts.svg"
            alt=""
          />Google Fonts</span
        >
      </h3>
      <div class="flex flex-row flex-wrap items-center gap-2">
        <a
          v-for="fontLink in fontLinks"
          :key="fontLink.name"
          :href="fontLink.url"
          target="_blank"
          :class="fontLink.class"
          class="flex size-fit rounded-xs border-2 p-2 leading-none"
        >
          {{ fontLink.name }}
        </a>
      </div>
    </template>
  </div>
</template>
