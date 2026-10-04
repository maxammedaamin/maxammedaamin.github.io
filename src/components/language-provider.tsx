"use client";

import * as React from "react";
import { translations, type Locale, type Dict } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  t: Dict;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  dir: "ltr" | "rtl";
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en");

  // hydrate from localStorage / browser preference
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "en" || stored === "ar") {
        setLocaleState(stored);
        return;
      }
      const nav = navigator.language.toLowerCase();
      if (nav.startsWith("ar")) setLocaleState("ar");
    } catch {
      /* ignore */
    }
  }, []);

  const dir = translations[locale].dir as "ltr" | "rtl";

  // sync <html lang + dir> + persist
  React.useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", locale);
    html.setAttribute("dir", dir);
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale, dir]);

  const setLocale = React.useCallback((next: Locale) => setLocaleState(next), []);
  const toggleLocale = React.useCallback(
    () => setLocaleState((prev) => (prev === "en" ? "ar" : "en")),
    [],
  );

  const value = React.useMemo(
    () => ({ locale, t: translations[locale], setLocale, toggleLocale, dir }),
    [locale, setLocale, toggleLocale, dir],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/** Convenience hook returning the translation dictionary only. */
export function useT() {
  return useLanguage().t;
}
