<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t } = useI18n();

const props = defineProps<{
  button: {
    id: string;
  };
}>();

const localizedTitle = t(`section.about.${props.button.id}.title`);
const localizedDescription = t(`section.about.${props.button.id}.description`);

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

const copyToClipboard = async (color: string, event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const originalText = target.innerText;

  try {
    await navigator.clipboard.writeText(color);

    target.innerText = `copied!`;
    setTimeout(() => {
      target.innerText = originalText;
    }, 3000);
  } catch (err) {
    console.error("failed to copy:", err);
    const textArea = document.createElement("textarea");
    textArea.value = color;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    target.innerText = `copied!`;
    setTimeout(() => {
      target.innerText = originalText;
    }, 3000);
  }
};

const l7dFonts = `section.about.style.fonts.`;
const fonts = {
  title: t(`${l7dFonts}title`),
  section: t(`${l7dFonts}section`),
  paragraph: t(`${l7dFonts}paragraph`),
  code1: t(`${l7dFonts}code1`),
  code2: t(`${l7dFonts}code2`),
  footer: t(`${l7dFonts}footer`),
};

const fontLinks = [
  {
    name: fonts.title,
    url: "https://fonts.google.com/specimen/Zain",
    class: "font-zain",
  },
  {
    name: fonts.section,
    url: "https://fonts.google.com/specimen/Oswald",
    class: "font-oswald",
  },
  {
    name: fonts.paragraph,
    url: "https://fonts.google.com/specimen/Google+Sans+Flex",
    class: "font-google-sans-flex",
  },
  {
    name: fonts.code1,
    url: "https://fonts.google.com/specimen/Fira+Code",
    class: "font-fira-code",
  },
  {
    name: fonts.code2,
    url: "https://fonts.google.com/specimen/Google+Sans+Code",
    class: "font-google-sans-code",
  },
  {
    name: fonts.footer,
    url: "https://fonts.google.com/specimen/Playpen+Sans",
    class: "font-playpen-sans",
  },
];
</script>

<template>
  <div class="space-y-2">
    <h2 class="text-4xl font-oswald uppercase">
      {{ localizedTitle }}
    </h2>
    <p class="text-gray-300 text-base leading-relaxed max-w-lg">
      {{ localizedDescription }}
    </p>
  </div>

  <template v-if="props.button.id === 'style'">
    <div class="space-y-2">
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
          class="rounded-xs border-2 text-base px-2 cursor-pointer font-google-sans-code"
          :class="[
            colorButton.bgClass,
            colorButton.borderClass,
            colorButton.textClass,
          ]"
          @click="copyToClipboard(colorButton.hexColor, $event)"
        >
          {{ colorButton.name }}
        </button>
      </div>
    </div>

    <div class="space-y-2">
      <h3 class="text-2xl">
        Fonts
        <span class="text-sm text-amber-300"
          >from
          <img
            class="size-3.5 inline"
            src="~/assets/icons/google_fonts.svg"
            alt=""
          />Google Fonts</span
        >
      </h3>
      <div class="flex flex-row flex-wrap gap-2">
        <a
          v-for="fontLink in fontLinks"
          :key="fontLink.name"
          :href="fontLink.url"
          target="_blank"
          :class="fontLink.class"
        >
          {{ fontLink.name }}
        </a>
      </div>
    </div>
  </template>
</template>
