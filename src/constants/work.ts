interface WorkEntry {
    id: string;
    company: string;
    href: string;
    badges: string[];
    location: string;
    logoUrl: string;
    start: string;
    end: string | null;
  }

export const WORK_DATA: readonly WorkEntry[] = [
    {
      id: "freelance",
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      logoUrl: "/freelance.png",
      start: "May 2023",
      end: "Present"
    },
    {
      id: "qualita",
      company: "Qualita",
      badges: [],
      href: "https://qualita.studio/",
      location: "Remote",
      logoUrl: "/qualita.png",
      start: "Nov 2023",
      end: "Oct 2024"
    },
      {
        id: "swaply",
        company: "Swaply",
        href: "https://swaplyar.vercel.app/",
        badges: [],
        location: "Frontend Developer - Remote",
        logoUrl: "/swaply.webp",
        start: "Nov 2024",
        end: "Jan 2025"
      },
  ] as const;