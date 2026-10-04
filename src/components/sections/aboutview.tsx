"use client";

import * as React from "react";
import Image from "next/image";
import {
  Server,
  Activity,
  Lock,
  Terminal,
  Briefcase,
  MapPin,
  CircleDot,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { usePortfolioNav } from "@/components/portfolio-nav";
import { profile } from "@/lib/portfolio-data";

const HIGHLIGHT_ICONS: LucideIcon[] = [Server, Activity, Lock, Terminal];

export function AboutPage() {
  const { t } = useLanguage();
  const { navigate } = usePortfolioNav();
  const page = t.about.page;

  return (
    <article>
      <PageHeader
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
        {/* Portrait + intro */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={profile.image}
                  alt={profile.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 26rem, 100vw"
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              </div>
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-2">
                <Badge className="bg-foreground text-background">
                  {t.hero.role}
                </Badge>
                <Badge variant="secondary" className="backdrop-blur">
                  {t.hero.namePlate}
                </Badge>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
              {t.about.body}
            </p>

            {/* quick facts grid */}
            <div className="grid grid-cols-2 gap-3">
              <FactCard
                icon={Briefcase}
                label={page.factsLabel}
                value={page.facts.role}
              />
              <FactCard
                icon={Server}
                label={page.eyebrow}
                value={page.facts.focus}
              />
              <FactCard
                icon={MapPin}
                label={page.factsLabel}
                value={page.facts.location}
              />
              <FactCard
                icon={CircleDot}
                label={t.hero.statStatus}
                value={page.facts.availability}
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                onClick={() => navigate({ type: "page", view: "contact" })}
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                {t.nav.cta}
                <ArrowRight className="size-4 rtl:-rotate-180" />
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate({ type: "page", view: "skills" })}
              >
                {t.nav.skills}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate({ type: "page", view: "projects" })}
              >
                {t.nav.projects}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* What I value — highlight cards */}
        <div className="mt-16">
          <h2 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
            <span className="h-px w-6 bg-emerald-600/60 dark:bg-emerald-400/60" />
            {page.valuesLabel}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.about.highlights.map((h, i) => {
              const Icon = HIGHLIGHT_ICONS[i] ?? Server;
              return (
                <Reveal key={h.title} delay={i * 0.08}>
                  <Card className="group h-full gap-0 py-5 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg">
                    <CardContent className="flex items-start gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40 text-emerald-600 transition-all group-hover:-rotate-6 group-hover:scale-110 group-hover:border-foreground/20 group-hover:bg-accent dark:text-emerald-400">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold">{h.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {h.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Closing CTA band */}
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.07] to-transparent p-6 sm:p-8">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-balance">
                  {t.contact.ctaTitle}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.contact.ctaBody.replace("{email}", profile.email)}
                </p>
              </div>
              <Button
                type="button"
                onClick={() => navigate({ type: "page", view: "contact" })}
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                {t.nav.cta}
                <ArrowRight className="size-4 rtl:-rotate-180" />
              </Button>
            </div>
          </div>
        </Reveal>
        </div>
      </div>
    </article>
  );
}

function FactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-muted/20 p-4 transition-colors hover:border-emerald-500/30">
      <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-card text-foreground">
        <Icon className="size-4" />
      </span>
      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium leading-tight">{value}</p>
      </div>
    </div>
  );
}
