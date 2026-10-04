"use client";

import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center rounded-md border border-border bg-card/60 p-0.5 text-xs font-medium"
      role="group"
      aria-label="Switch language"
    >
      {(["en", "ar"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "flex h-7 items-center gap-1 rounded-[5px] px-2 uppercase tracking-wide transition-colors",
            locale === code
              ? "bg-emerald-600 text-white shadow-sm dark:bg-emerald-500"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {code === "en" ? (
            <>
              <span className="hidden sm:inline">EN</span>
              <span className="sm:hidden">EN</span>
            </>
          ) : (
            <>
              <Languages className="size-3.5 sm:hidden" />
              <span className="hidden sm:inline">ع</span>
              <span className="sm:hidden">ع</span>
            </>
          )}
        </button>
      ))}
    </div>
  );
}
