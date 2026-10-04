"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Server,
  Activity,
  Lock,
  Terminal,
  Quote,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { profile } from "@/lib/portfolio-data";

const HIGHLIGHT_ICONS: LucideIcon[] = [Server, Activity, Lock, Terminal];

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Visual column */}
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={profile.image}
                    alt={profile.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 448px, 100vw"
                    loading="lazy"
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

              {/* pull-quote */}
              <div className="mt-4 rounded-2xl border border-border bg-muted/30 p-5">
                <Quote className="size-5 text-foreground" />
                <p className="mt-2 text-sm font-medium leading-relaxed text-foreground/90">
                  {t.about.body}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Content column */}
          <div className="flex flex-col">
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
            />

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t.about.body}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.about.highlights.map((h, i) => {
                const Icon = HIGHLIGHT_ICONS[i] ?? Server;
                return (
                  <Reveal key={h.title} delay={i * 0.08}>
                    <Card className="group h-full gap-0 py-5 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md">
                      <CardContent className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted/40 text-foreground transition-colors group-hover:border-foreground/20 group-hover:bg-accent">
                            <Icon className="size-5" />
                          </span>
                          <h3 className="text-sm font-semibold">{h.title}</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {h.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
