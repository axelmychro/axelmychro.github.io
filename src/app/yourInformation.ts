// Configure page content here
export const myProfile: MyProfile = {
  author: "Axel Ramadhan",
  // As for the bio, you can configure it in MyCard.tsx
};

// You can always add more items into the array
export const linkTree: LinkTree[] = [
  {
    link: "www.axelmychro.my.id",
    title: "Portfolio",
  },
  {
    link: "www.wanderer.my.id",
    title: "Blog",
  },
  {
    link: "github.com/axelmychro",
    title: "GitHub",
  },
  {
    link: "instagram.com/axelmychro",
    title: "Instagram",
  },
  {
    link: "linkedin.com/in/axelramadhan",
    title: "LinkedIn",
  },
  // {
  //   link: "**.*/**",
  //   title: "**",
  // },
];

type MyProfile = {
  author: string;
};
type LinkTree = {
  link: string;
  title: string;
};
