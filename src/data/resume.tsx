import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gino Novello",
  initials: "GN",
  url: "",
  location: "Santa Fe, Santa Fe, Argentina",
  locationLink: "",
  description:
    "Desarrollador Frontend enfocado en crear interfaces modernas, eficientes y de alto rendimiento, utilizando mi conocimiento y mejores prácticas.",
  summary:
    "Apasionado por la técnologia decidí adentrarme al mundo del desarrollo web, también estoy a la vez cursando la carrera de Ciencia de datos en la Universidad Nacional del Litoral.",
  avatarUrl: "/me.png",
  skills: [
  {
    name: "TypeScript",
    translationKey: "typescript",
    imageUrl: "/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "Javascript",
    translationKey: "javascript",
    imageUrl: "/logos/javascript.svg",
    bgColor: "bg-[#F7DF1E]/20",
  },
  {
    name: "React",
    translationKey: "react",
    imageUrl: "/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    name: "NextJS",
    translationKey: "nextjs",
    imageUrl: "/logos/nextjs.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
  },
  {
    name: "Svelte",
    translationKey: "svelte",
    imageUrl: "/logos/svelte.svg",
    bgColor: "bg-[#FF3E00]/20",
  },
  {
    name: "Vue",
    translationKey: "vue",
    imageUrl: "/logos/vue.svg",
    bgColor: "bg-[#42B883]/20",
  },
  {
    name: "Tailwind",
    translationKey: "tailwind",
    imageUrl: "/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    name:"NodeJS",
    translationKey: "nodejs",
    imageUrl: "/logos/nodejs.svg",
    bgColor: "bg-[#339933]/20",
  },
  {
    name: "Git",
    translationKey: "git",
    imageUrl: "/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "Supabase",
    translationKey: "supabase",
    imageUrl: "/logos/supabase.svg",
    bgColor: "bg-[#3ECF8E]/20",
  },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ginonovello9@gmail.com",
    tel: "+543564563470",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GinoNovello",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ginonovello/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:ginonovello9@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

} as const;
