"use client";

import * as React from "react";
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

const CATEGORY_ICONS: LucideIcon[] = [Code2, Smartphone, Server, Database, Terminal];

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

export function Skills() {
  const { t } = useLanguage();
  const categories = t.skills.categories;
  const proficiencyMap = t.skills.proficiencyMap;

  const [active, setActive] = React.useState(0);
  const ActiveIcon = CATEGORY_ICONS[active] ?? Code2;
  const activeCategory = categories[active];

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Category list (tabs) */}
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
                    <span className="block text-sm font-semibold">{cat.title}</span>
                    <span className="block text-xs text-muted-foreground">
                      {cat.skills.length}{" "}
                      <span className="opacity-70">·</span>{" "}
                      {cat.skills.slice(0, 3).join(" · ")}
                    </span>
                  </span>
                  <Badge
                    variant={isActive ? "default" : "secondary"}
                    className={cn(
                      isActive &&
                        "bg-foreground text-background",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </Badge>
                </button>
              );
            })}
          </Reveal>

          {/* Active category detail with proficiency bars */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
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
                          <span className="text-xs font-semibold text-muted-foreground tabular-nums">
                            {value}%
                          </span>
                        </div>
                        <ProficiencyBar value={value} />
                      </li>
                    );
                  })}
                </motion.ul>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
        </div>
      </div>
    </section>
  );
}
