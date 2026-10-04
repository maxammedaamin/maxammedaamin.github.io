"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Briefcase, FolderCheck, CircleDot } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { useCountUp } from "@/hooks/use-count-up";
import { profile } from "@/lib/portfolio-data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { t } = useLanguage();
  const hs = t.hero.heroStats;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dots dark:bg-grid-dots-dark opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 end-[-10%] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 start-[-8%] h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-16 pb-10 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pt-28"
      >
        {/* ---- Copy ---- */}
        <div className="flex flex-col">
          <motion.h1
            variants={item}
            className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {t.hero.greeting} {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-xl font-semibold text-foreground sm:text-2xl"
          >
            {t.hero.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              <a href="#projects">
                {t.hero.viewProjects}
                <ArrowDown className="size-4 rtl:rotate-90" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">{t.hero.contactMe}</a>
            </Button>
          </motion.div>
        </div>

        {/* ---- Portrait + decorative ring ---- */}
        <motion.div
          variants={item}
          className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:max-w-none"
        >
          <div className="relative aspect-[3/4] w-[clamp(15rem,80vw,22rem)]">
            {/* rotating gradient ring (emerald monochrome) */}
            <div
              aria-hidden
              className="ring-spin pointer-events-none absolute -inset-3 rounded-[2rem] opacity-80"
              style={{
                background:
                  "conic-gradient(from 0deg, oklch(0.769 0.131 156), transparent 25%, oklch(0.696 0.17 162.48) 50%, transparent 75%, oklch(0.769 0.131 156))",
                maskImage:
                  "radial-gradient(closest-side, transparent calc(100% - 10px), #000 calc(100% - 9px))",
                WebkitMaskImage:
                  "radial-gradient(closest-side, transparent calc(100% - 10px), #000 calc(100% - 9px))",
              }}
            />
            {/* soft secondary glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-[1.75rem] bg-emerald-500/15 blur-md"
            />

            {/* portrait frame */}
            <div className="absolute inset-0 overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-xl shadow-emerald-900/5">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 352px, 80vw"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* floating chip: name plate */}
            <div className="float-y absolute -bottom-4 start-[-1rem] flex items-center gap-2.5 rounded-xl border border-border bg-background/95 px-3 py-2 shadow-lg backdrop-blur sm:start-[-1.5rem]">
              <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background">
                <Terminal className="size-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">{profile.name}</span>
                <span className="text-[0.7rem] text-muted-foreground">
                  {t.hero.role}
                </span>
              </span>
            </div>

            {/* floating chip: top tag */}
            <div className="float-y-slow absolute -top-3 end-[-0.75rem] flex items-center gap-2 rounded-xl border border-border bg-background/95 px-3 py-2 shadow-lg backdrop-blur sm:end-[-1.25rem]">
              <Sparkles className="size-4 text-foreground" />
              <span className="text-xs font-medium">{t.hero.badgeArch}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ---- Stat cards — clean, flat, no gradients ---- */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-5xl grid-cols-1 gap-3 px-4 sm:grid-cols-3 sm:gap-4 sm:px-6"
      >
        <HeroStat
          key="experience"
          icon={Briefcase}
          label={hs.experience.label}
          value={hs.experience.value}
          suffix={hs.experience.suffix}
        />
        <HeroStat
          key="projects"
          icon={FolderCheck}
          label={hs.projects.label}
          value={hs.projects.value}
          suffix={hs.projects.suffix}
        />
        <HeroStatText
          key="status"
          icon={CircleDot}
          label={hs.status.label}
          text={hs.status.text}
        />
      </motion.div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-center px-4 pb-12 sm:px-6">
        <a
          href="#about"
          className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.hero.scroll}
          <ArrowUpRight className="size-3.5 rotate-90 transition-transform group-hover:translate-y-0.5 rtl:-rotate-90" />
        </a>
      </div>
    </section>
  );
}

function HeroStat({
  icon: Icon,
  label,
  value,
  suffix,
}: {
  icon: typeof Briefcase;
  label: string;
  value: number;
  suffix: string;
}) {
  const { ref, display } = useCountUp(value);
  return (
    <motion.div
      variants={item}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
    >
      <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/40 text-foreground">
        <Icon className="size-[1.05rem]" />
      </span>
      <div className="flex items-baseline gap-0.5">
        <span
          ref={ref}
          className="text-3xl font-bold tracking-tight text-foreground tabular-nums sm:text-4xl"
        >
          {display}
        </span>
        {suffix ? (
          <span className="text-xl font-bold text-foreground">{suffix}</span>
        ) : null}
      </div>
      <span className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
}

function HeroStatText({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof Briefcase;
  label: string;
  text: string;
}) {
  return (
    <motion.div
      variants={item}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
    >
      <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/40 text-foreground">
        <Icon className="size-[1.05rem]" />
      </span>
      <span className="inline-flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl">
        <span className="relative flex size-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        {text}
      </span>
      <span className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
}
