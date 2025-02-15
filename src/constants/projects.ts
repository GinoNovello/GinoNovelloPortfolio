import { DivideIcon as LucideIcon } from "lucide-react";

interface ProjectLink {
  type: string;
  href: string;
  icon: JSX.Element | string;
}

interface ProjectEntry {
  id: string;
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly ProjectLink[];
  image: string;
  video: string;
}

export const PROJECT_DATA: readonly ProjectEntry[] = [
  {
    id: "easy-finance",
    title: "Easy Finance",
    href: "https://easy-finance-v2.vercel.app/",
    dates: "Sep 2024 - Nov 2024",
    active: true,
    description: "projects.easy-finance.description",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Shadcn UI",
      "Google Sheets",
    ],
    links: [
      {
        type: "Website",
        href: "https://easy-finance-v2.vercel.app/",
        icon: "globe"
      },
    ],
    image: "/easyfinancecapture.png",
    video: "",
  },
  {
    id: "netflix-clone",
    title: "Netflix clone",
    href: "https://nexflit-six.vercel.app/",
    dates: "June 2023 - Present",
    active: true,
    description: "projects.netflix-clone.description",
    technologies: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://nexflit-six.vercel.app/",
        icon: "globe"
      },
      {
        type: "Source",
        href: "https://github.com/GinoNovello/netflix-clon",
        icon: "github"
      },
    ],
    image: "",
    video: "nextflix.mp4",
  },
  {
    id: "foxdo-list",
    title: "FoxDo list",
    href: "https://foxdo-list.vercel.app/",
    dates: "November 2023",
    active: true,
    description: "projects.foxdo-list.description",
    technologies: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://foxdo-list.vercel.app/",
        icon: "globe"
      },
      {
        type: "Source",
        href: "https://github.com/GinoNovello/foxdo-list",
        icon: "github"
      },
    ],
    image: "",
    video: "foxdolist.mp4",
  },
  {
    id: "leyen-cafe",
    title: "Leyen Café",
    href: "https://automatic.chat",
    dates: "October 2024 - January 2025",
    active: true,
    description: "projects.leyen-cafe.description",
    technologies: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Shadcn UI",
      "Supabase",
      "Zustand",
      "Resend",
    ],
    links: [
      {
        type: "",
        href: "",
        icon: "globe"
      },
    ],
    image: "/leyencafe.png",
    video: "",
  },
] as const;