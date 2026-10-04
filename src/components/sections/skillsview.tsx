"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Terminal,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";
import { usePortfolioNav } from "@/components/portfolio-nav";

const CATEGORY_ICONS: LucideIcon[] = [
  Code2,
  Smartphone,
  Server,
  Database,
  Terminal,
];

function ProficiencyBar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

function levelLabel(value: number): string {
  if (value >= 90) return "Expert";
  if (value >= 80) return "Advanced";
  if (value >= 70) return "Proficient";
  return "Working knowledge";
}

export function SkillsPage() {
  const { t } = useLanguage();
  const { navigate } = usePortfolioNav();
  const page = t.skills.page;
  const categories = t.skills.categories;
  const proficiencyMap = t.skills.proficiencyMap;

  const [active, setActive] = React.useState(0);
  const ActiveIcon = CATEGORY_ICONS[active] ?? Code2;
  const activeCategory = categories[active];

  const totalSkills = categories.reduce(
    (sum, c) => sum + c.skills.length,
    0,
  );

  return (
    <article>
      <PageHeader
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      >
        <div className="flex flex-wrap items-center gap-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {categories.length} {t.projects.page.countLabel === "works" ? "categories" : t.projects.page.countLabel}
          </p>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {totalSkills} {t.skills.proficiency === "مستوى الإتقان" ? "مهارة" : "skills"}
          </p>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
        {/* Interactive tab view */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Category tabs */}
          <Reveal className="flex flex-col gap-2">
            {categories.map((cat, i) => {
              const Icon = CATEGORY_ICONS[i] ?? Code2;
              const isActive = i === active;
              return (
                <button
                  key={cat.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl border px-4 py-3 text-start transition-all",
                    isActive
                      ? "border-emerald-500/50 bg-emerald-500/[0.06] shadow-sm"
                      : "border-border bg-card/60 hover:border-emerald-500/30 hover:bg-accent/40",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-lg border transition-colors",
                      isActive
                        ? "border-foreground/20 bg-accent text-foreground"
                        : "border-border bg-muted/40 text-muted-foreground group-hover:text-foreground",
                    )}
                  >
                    <Icon className="size-[1.05rem]" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold">
                      {cat.title}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {cat.skills.length} · {cat.skills.slice(0, 3).join(" · ")}
                    </span>
                  </span>
                  <Badge variant={isActive ? "default" : "secondary"}>
                    {String(i + 1).padStart(2, "0")}
                  </Badge>
                </button>
              );
            })}
          </Reveal>

          {/* Active category detail */}
          <Reveal delay={0.1}>
            <Card className="h-full gap-0 py-6">
              <CardContent>
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-muted/40 text-foreground">
                    <ActiveIcon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">
                      {activeCategory.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {t.skills.proficiency}
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.ul
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 flex flex-col gap-4"
                  >
                    {activeCategory.skills.map((skill) => {
                      const value =
                        (proficiencyMap as Record<string, number>)[skill] ?? 70;
                      return (
                        <li key={skill} className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm font-medium">{skill}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-foreground">
                                {levelLabel(value)}
                              </span>
                              <span className="text-xs font-semibold text-muted-foreground tabular-nums">
                                {value}%
                              </span>
                            </div>
                          </div>
                          <ProficiencyBar value={value} />
                        </li>
                      );
                    })}
                  </motion.ul>
                </AnimatePresence>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* Full overview grid — all categories at a glance */}
        <div className="mt-16">
          <h2 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
            <span className="h-px w-6 bg-emerald-600/60 dark:bg-emerald-400/60" />
            {t.skills.proficiency}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => {
              const Icon = CATEGORY_ICONS[i] ?? Code2;
              return (
                <Reveal key={cat.title} delay={(i % 3) * 0.06}>
                  <Card className="group h-full gap-0 py-5 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md">
                    <CardContent>
                      <div className="flex items-center gap-3 border-b border-border pb-3">
                        <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/40 text-foreground">
                          <Icon className="size-[1.05rem]" />
                        </span>
                        <h3 className="text-sm font-semibold">{cat.title}</h3>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => {
                          const value =
                            (proficiencyMap as Record<string, number>)[skill] ??
                            70;
                          return (
                            <span
                              key={skill}
                              className="rounded-md border border-border bg-muted/20 px-2 py-0.5 text-[0.7rem] font-medium text-foreground/80"
                              title={`${skill} — ${value}%`}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <Button
              type="button"
              onClick={() => navigate({ type: "page", view: "projects" })}
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              {t.nav.projects}
              <ArrowRight className="size-4 rtl:-rotate-180" />
            </Button>
          </div>
        </Reveal>
        </div>
      </div>
    </article>
  );
}
