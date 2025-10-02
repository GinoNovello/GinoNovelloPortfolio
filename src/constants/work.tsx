import { FreelanceLogo } from "@/components/freelance-logo";

interface WorkEntry {
  id: string;
  company: string;
  href: string;
  badges: string[];
  location: string;
  logoUrl: string | React.ReactNode;
  start: string;
  end: string | null;
}
export const WORK_DATA: readonly WorkEntry[] = [
  {
    id: "tropware",
    company: "Tropware",
    href: "",
    badges: [],
    location: "Remote",
    logoUrl: "/tropware-logo.webp",
    start: "Feb 2025",
    end: "Present",
  },
  {
    id: "freelance",
    company: "Freelance",
    href: "",
    badges: [],
    location: "Remote",
    logoUrl: <FreelanceLogo />,
    start: "May 2023",
    end: "Present",
  },
  {
    id: "swaply",
    company: "Swaply",
    href: "https://swaplyar.vercel.app/",
    badges: [],
    location: "Frontend Developer - Remote",
    logoUrl: "/swaply.webp",
    start: "Nov 2024",
    end: "Jan 2025",
  },
  {
    id: "qualita",
    company: "Qualita",
    badges: [],
    href: "https://qualita.studio/",
    location: "Remote",
    logoUrl: "/qualita.png",
    start: "Nov 2023",
    end: "Oct 2024",
  },
] as const;
