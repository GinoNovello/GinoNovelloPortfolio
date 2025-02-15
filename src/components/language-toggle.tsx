"use client";

import { Button } from "@/components/ui/button";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "es" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage} className="px-2">
      <Languages className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}