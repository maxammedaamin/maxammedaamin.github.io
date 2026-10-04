"use client";

import * as React from "react";
import {
  Bus,
  ShieldCheck,
  GraduationCap,
  Snowflake,
  HeartPulse,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { usePortfolioNav } from "@/components/portfolio-nav";

const PROJECT_ICONS: LucideIcon[] = [
  Bus,
  ShieldCheck,
  GraduationCap,
  Snowflake,
  HeartPulse,
];

export function Projects() {
  const { t } = useLanguage();
  const items = t.projects.items;

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        {/* Bento grid: featured (2col x 2row) + 4 compact cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {items.map((project, i) => (
            <Reveal
              key={project.id}
              delay={(i % 4) * 0.06}
              className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <ProjectCard index={i} featured={i === 0} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <ArrowUpRight className="size-3.5 text-foreground" />
          {t.projects.onRequest}
        </p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  index,
  featured,
}: {
  index: number;
  featured?: boolean;
}) {
  const { t } = useLanguage();
  const { navigate } = usePortfolioNav();
  const project = t.projects.items[index];
  const Icon = PROJECT_ICONS[index] ?? Bus;

  return (
    <button
      type="button"
      onClick={() => navigate({ type: "project", index })}
      className="group relative flex h-full w-full flex-col text-start transition-transform duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
    >
      {/* animated glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-emerald-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:bg-emerald-500/10 group-hover:opacity-100"
      />
      <div
        className={`relative flex h-full flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 group-hover:border-emerald-500/50 group-hover:shadow-2xl group-hover:shadow-emerald-900/10 ${
          featured ? "lg:flex-row" : ""
        }`}
      >
        {/* Cover band */}
        <div
          className={`group/cover relative overflow-hidden border-b border-border bg-gradient-to-br from-emerald-500/20 via-emerald-400/5 to-transparent transition-all duration-500 group-hover:from-emerald-500/30 group-hover:via-emerald-400/10 ${
            featured ? "h-40 sm:h-48 lg:h-full lg:w-2/5 lg:border-b-0 lg:border-e" : "h-28"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-40 transition-opacity duration-500 group-hover/cover:opacity-70 dark:bg-grid-dots-dark" />
          {/* Large faint index number — animates on hover */}
          <span className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-7xl font-black text-emerald-600/10 transition-all duration-500 group-hover/cover:scale-125 group-hover/cover:text-emerald-600/20 dark:text-emerald-400/10 dark:group-hover/cover:text-emerald-400/20">
            {String(index + 1).padStart(2, "0")}
          </span>
          {/* icon chip — scales + rotates on hover */}
          <span className="absolute -bottom-5 start-5 flex size-12 items-center justify-center rounded-2xl border border-border bg-card text-emerald-600 shadow-sm transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-foreground/20 group-hover:bg-accent dark:text-emerald-400">
            <Icon className="size-6" />
          </span>
          {project.codename ? (
            <Badge
              variant="secondary"
              className="absolute end-3 top-3 font-mono text-[0.65rem] tracking-tight backdrop-blur"
            >
              {project.codename}
            </Badge>
          ) : null}
        </div>

        {/* Body */}
        <div
          className={`flex flex-1 flex-col gap-2 px-5 pb-5 pt-7 ${
            featured ? "lg:justify-center lg:px-7 lg:py-8" : ""
          }`}
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-foreground">
            {String(index + 1).padStart(2, "0")} · {t.projects.eyebrow}
          </span>
          <h3
            className={`font-bold leading-snug text-balance ${
              featured ? "text-xl sm:text-2xl" : "text-base"
            }`}
          >
            {project.name}
          </h3>
          <p
            className={`text-muted-foreground leading-relaxed ${
              featured
                ? "text-sm sm:text-base line-clamp-4"
                : "text-sm line-clamp-2"
            }`}
          >
            {project.summary}
          </p>

          {/* stack */}
          <div className="mt-auto flex flex-col gap-1 pt-2">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {t.projects.stack}
            </p>
            <p className="text-xs font-medium leading-relaxed text-foreground/80">
              {project.stack}
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <span className="text-xs font-semibold text-emerald-700 transition-colors dark:text-emerald-300">
              {t.projects.viewDetails}
            </span>
            <span className="flex size-8 items-center justify-center rounded-full border border-border bg-foreground text-background transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 rtl:-rotate-180 rtl:group-hover:-translate-x-1">
              <ArrowRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
