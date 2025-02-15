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
    "React",
    "Next.js",
    "Typescript",
    "Tailwind",
    "Node.js",
    "Python",
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
