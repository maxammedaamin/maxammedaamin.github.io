"use client";

import * as React from "react";
import { Menu, X, Terminal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { usePortfolioNav, type NavAction } from "@/components/portfolio-nav";
import { profile } from "@/lib/portfolio-data";

type NavItem = {
  id: "home" | "about" | "skills" | "projects" | "contact";
  action: NavAction;
};

export function SiteHeader() {
  const { t } = useLanguage();
  const { navigate, view } = usePortfolioNav();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: "home", action: { type: "home" } },
    { id: "about", action: { type: "page", view: "about" } },
    { id: "skills", action: { type: "page", view: "skills" } },
    { id: "projects", action: { type: "page", view: "projects" } },
    { id: "contact", action: { type: "page", view: "contact" } },
  ];

  const handleNav = (action: NavAction) => {
    navigate(action);
    setOpen(false);
  };

  const isActive = (id: NavItem["id"]) => {
    if (id === "home") return view === "home";
    if (id === "projects") return view === "projects" || view === "detail";
    if (id === "about") return view === "about";
    if (id === "skills") return view === "skills";
    if (id === "contact") return view === "contact";
    return false;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background"
          : "border-transparent bg-background/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav({ type: "home" })}
          className="group flex items-center gap-2 font-semibold tracking-tight"
          aria-label={profile.name}
        >
          <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-transform group-hover:-rotate-6">
            <Terminal className="size-4" />
          </span>
          <span className="text-[0.95rem]">
            {profile.firstName}
            <span className="text-emerald-600 dark:text-emerald-400">.</span>
          </span>
        </button>

        {/* Desktop nav — clean pill tabs, solid color for active */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.action)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                {t.nav[item.id]}
              </button>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <Button
            type="button"
            size="sm"
            onClick={() => handleNav({ type: "page", view: "contact" })}
            className="hidden bg-foreground text-background hover:bg-foreground/90 lg:inline-flex"
          >
            {t.nav.cta}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => {
              const active = isActive(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.action)}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-start text-sm font-medium transition-colors",
                    active
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  {t.nav[item.id]}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleNav({ type: "page", view: "contact" })}
              className="mt-1 inline-flex h-9 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background hover:bg-foreground/90"
            >
              {t.nav.cta}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
