// Configure page content here
export const myProfile: MyProfile = {
  author: "Axel Ramadhan",
  // As for the bio, you can configure it in MyCard.tsx
};

// You can always add more items into the array
export const linkTree: LinkTree[] = [
  {
    link: "www.axelmychro.my.id",
    label: "Portfolio",
    icon: "PanelsRightBottom",
  },
  {
    link: "www.wanderer.my.id",
    label: "Blog",
    icon: "Rss",
  },
  {
    link: "github.com/axelmychro",
    label: "GitHub",
    icon: "Github",
  },
  {
    link: "instagram.com/axelmychro",
    label: "Instagram",
    icon: "Instagram",
  },
  {
    link: "linkedin.com/in/axelramadhan",
    label: "LinkedIn",
    icon: "Linkedin",
  },
  // {
  //   link: "**.*/**",
  //   title: "**",
  // },
];

type MyProfile = {
  author: string;
};

import type { icons } from "lucide-react";

type IconName = keyof typeof icons;
type LinkTree = {
  link: string;
  label: string;
  icon?: IconName;
};
