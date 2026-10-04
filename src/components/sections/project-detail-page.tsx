"use client";

import * as React from "react";
import { motion } from "framer-motion";
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
  Target,
  Lightbulb,
  GitBranch,
  CheckCircle2,
  Layers,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
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

export function ProjectDetailPage({ index }: { index: number }) {
  const { t, dir } = useLanguage();
  const { navigate } = usePortfolioNav();
  const project = t.projects.items[index];
  const Icon = PROJECT_ICONS[index] ?? Bus;
  const detail = project.detail as ProjectDetail;
  const isRtl = dir === "rtl";
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  const total = t.projects.items.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [index]);

  return (
    <article dir={dir} className="relative">
      {/* Header band */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dots dark:bg-grid-dots-dark opacity-50" />
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 end-[-10%] h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => navigate({ type: "page", view: "projects" })}
            className="mb-6 -ms-2 text-muted-foreground hover:text-foreground"
          >
            <BackIcon className="size-4" />
            {t.projects.detail.backToProjects}
          </Button>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex size-16 items-center justify-center rounded-2xl border border-border bg-muted/40 text-foreground shadow-sm">
              <Icon className="size-8" />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-foreground">
                  {t.projects.eyebrow} · {String(index + 1).padStart(2, "0")}
                </span>
                {project.codename ? (
                  <Badge
                    variant="secondary"
                    className="font-mono text-[0.7rem] tracking-tight"
                  >
                    {project.codename}
                  </Badge>
                ) : null}
              </div>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl">
                {project.name}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Body — magazine layout: sticky meta sidebar + main narrative */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Sticky meta sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-col gap-4">
              {/* role + timeline */}
              <div className="grid grid-cols-2 gap-3">
                <MetaCard
                  icon={Briefcase}
                  label={t.projects.detail.roleLabel}
                  value={detail.role}
                />
                <MetaCard
                  icon={Clock}
                  label={t.projects.detail.timelineLabel}
                  value={detail.timeline}
                />
              </div>

              {/* stack */}
              <div className="rounded-xl border border-border bg-card p-4">
                <h3 className="mb-2 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  <Layers className="size-3.5 text-foreground" />
                  {t.projects.detail.stackLabel}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-foreground/80">
                  {project.stack}
                </p>
              </div>

              {/* highlights */}
              <div className="rounded-xl border border-border bg-card p-4">
                <h3 className="mb-3 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  <Sparkles className="size-3.5 text-foreground" />
                  {t.projects.detail.highlightsLabel}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((hl: string) => (
                    <Badge
                      key={hl}
                      variant="outline"
                      className="border-border bg-muted/30 px-2.5 py-1 text-[0.7rem] font-medium text-foreground/80"
                    >
                      {hl}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                type="button"
                onClick={() => navigate({ type: "page", view: "contact" })}
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                {t.nav.cta}
              </Button>
            </div>
          </aside>

          {/* Main narrative */}
          <div className="flex flex-col gap-8">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <SectionLabel>{t.projects.detail.overviewLabel}</SectionLabel>
              <p className="mt-3 text-base leading-relaxed text-foreground/90 sm:text-lg">
                {project.summary}
              </p>
            </motion.section>

            {/* Interview blocks */}
            <div className="flex flex-col gap-5">
              <NarrativeBlock
                icon={Target}
                title={t.projects.detail.problemLabel}
                body={detail.problem}
              />
              <NarrativeBlock
                icon={Lightbulb}
                title={t.projects.detail.solutionLabel}
                body={detail.solution}
              />
              <NarrativeBlock
                icon={GitBranch}
                title={t.projects.detail.architectureLabel}
                body={detail.architecture}
              />
            </div>

            {/* Outcomes */}
            <div>
              <SectionLabel>{t.projects.detail.outcomesLabel}</SectionLabel>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {detail.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2.5 rounded-xl border border-border bg-muted/20 px-3.5 py-3 text-sm text-foreground/80"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-foreground" />
                    <span className="leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Prev / next nav */}
        <div className="mt-14 border-t border-border pt-8">
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t.projects.detail.relatedLabel}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => navigate({ type: "project", index: prevIndex })}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-start transition-colors hover:border-foreground/20 hover:bg-accent"
            >
              <BackIcon className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="flex flex-col">
                <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.projects.detail.backToProjects}
                </span>
                <span className="text-sm font-medium line-clamp-1">
                  {t.projects.items[prevIndex].name}
                </span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => navigate({ type: "project", index: nextIndex })}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-start transition-colors hover:border-foreground/20 hover:bg-accent sm:flex-row-reverse sm:text-end"
            >
              {!isRtl ? (
                <ArrowRight className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              ) : (
                <ArrowLeft className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              )}
              <span className="flex flex-col">
                <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.projects.eyebrow}
                </span>
                <span className="text-sm font-medium line-clamp-1">
                  {t.projects.items[nextIndex].name}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function MetaCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3.5">
      <Icon className="size-5 text-foreground" />
      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium leading-tight">{value}</p>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
      <span className="h-px w-6 bg-foreground/40" />
      {children}
    </h2>
  );
}

function NarrativeBlock({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <h3 className="mb-2.5 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
        <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-muted/40">
          <Icon className="size-4" />
        </span>
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
        {body}
      </p>
    </div>
  );
}
