"use client";

import * as React from "react";
import {
  Bus,
  ShieldCheck,
  GraduationCap,
  Snowflake,
  HeartPulse,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Clock,
  Layers,
  type LucideIcon,
} from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
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

type ProjectDetail = {
  role: string;
  timeline: string;
  problem: string;
  solution: string;
  architecture: string;
  outcomes: string[];
};

export function ProjectsPage() {
  const { t } = useLanguage();
  const { navigate } = usePortfolioNav();
  const items = t.projects.items;

  return (
    <article>
      <PageHeader
        eyebrow={t.projects.page.eyebrow}
        title={t.projects.page.title}
        description={t.projects.page.description}
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          {items.length} {t.projects.page.countLabel}
        </p>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6">
          {items.map((project, i) => {
            const Icon = PROJECT_ICONS[i] ?? Bus;
            const detail = project.detail as ProjectDetail;
            return (
              <Reveal key={project.id} delay={(i % 3) * 0.06}>
                <button
                  type="button"
                  onClick={() => navigate({ type: "project", index: i })}
                  className="group relative block w-full text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
                >
                  {/* hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-emerald-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:bg-emerald-500/10 group-hover:opacity-100"
                  />
                  <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-emerald-500/50 group-hover:shadow-2xl group-hover:shadow-emerald-900/10">
                    {/* Cover band with icon + codename */}
                    <div className="group/cover relative flex items-center justify-between gap-4 overflow-hidden border-b border-border bg-gradient-to-r from-emerald-500/15 via-emerald-400/5 to-transparent px-5 py-4 transition-all duration-500 group-hover:from-emerald-500/25 sm:px-6">
                      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-30 dark:bg-grid-dots-dark" />
                      <div className="relative flex items-center gap-3">
                        <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-card text-emerald-600 shadow-sm transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 dark:text-emerald-400">
                          <Icon className="size-6" />
                        </span>
                        <div>
                          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-foreground">
                            {String(i + 1).padStart(2, "0")} ·{" "}
                            {t.projects.eyebrow}
                          </span>
                          {project.codename ? (
                            <span className="font-mono text-sm font-bold tracking-tight text-foreground">
                              {project.codename}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <span className="pointer-events-none text-5xl font-black text-emerald-600/10 transition-all duration-500 group-hover/cover:scale-125 dark:text-emerald-400/10 sm:text-6xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col gap-4 p-5 sm:p-6">
                      <h3 className="text-lg font-bold leading-snug text-balance sm:text-xl">
                        {project.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.summary}
                      </p>

                      {/* meta: role + timeline + stack */}
                      <div className="grid gap-3 sm:grid-cols-3">
                        <MetaItem
                          icon={Briefcase}
                          label={t.projects.detail.roleLabel}
                          value={detail.role}
                        />
                        <MetaItem
                          icon={Clock}
                          label={t.projects.detail.timelineLabel}
                          value={detail.timeline}
                        />
                        <MetaItem
                          icon={Layers}
                          label={t.projects.detail.stackLabel}
                          value={project.stack}
                        />
                      </div>

                      {/* highlights */}
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((hl: string) => (
                          <Badge
                            key={hl}
                            variant="outline"
                            className="border-emerald-500/30 bg-emerald-500/[0.04] px-2.5 py-1 text-[0.7rem] font-medium text-foreground/80"
                          >
                            {hl}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between border-t border-border pt-4">
                        <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                          {t.projects.viewDetails}
                        </span>
                        <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-background transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 rtl:-rotate-180 rtl:group-hover:-translate-x-1">
                          <ArrowRight className="size-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
        </div>
      </div>
    </article>
  );
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border bg-muted/20 px-3.5 py-2.5">
      <span className="flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="size-3.5 text-foreground" />
        {label}
      </span>
      <span className="text-xs font-medium leading-tight text-foreground/90">
        {value}
      </span>
    </div>
  );
}
