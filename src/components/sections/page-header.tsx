"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { usePortfolioNav } from "@/components/portfolio-nav";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  const { t, dir } = useLanguage();
  const { navigate } = usePortfolioNav();
  const isRtl = dir === "rtl";
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dots dark:bg-grid-dots-dark opacity-50" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 start-[-8%] h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 end-[-8%] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <motion.div variants={item}>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => navigate({ type: "home" })}
            className="mb-6 -ms-2 text-muted-foreground hover:text-foreground"
          >
            <BackIcon className="size-4" />
            {t.nav.backHome}
          </Button>
        </motion.div>

        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
        >
          <span className="h-px w-6 bg-foreground/40" />
          {eyebrow}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>

        {description ? (
          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance sm:text-lg"
          >
            {description}
          </motion.p>
        ) : null}

        {children ? (
          <motion.div variants={item} className="mt-6">
            {children}
          </motion.div>
        ) : null}
      </motion.div>
    </header>
  );
}
