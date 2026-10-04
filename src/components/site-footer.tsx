"use client";

import { Github, Mail, Terminal } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between md:py-10">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-card text-emerald-600 dark:text-emerald-400 shadow-sm">
            <Terminal className="size-4" />
          </span>
          <div className="text-sm">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-muted-foreground">{t.hero.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex size-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <Github className="size-[1.05rem]" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex size-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <Mail className="size-[1.05rem]" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <p className="text-center text-xs text-muted-foreground md:text-start">
            © {year} {profile.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
