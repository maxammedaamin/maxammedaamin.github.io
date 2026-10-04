"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Boxes } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/components/language-provider";
import { sponsorsRow1, sponsorsRow2, sponsorTags, type Sponsor } from "@/lib/sponsors";

function LogoChip({ sponsor }: { sponsor: Sponsor }) {
  const { locale } = useLanguage();
  const tag = sponsorTags[locale][sponsor.tagKey] ?? sponsor.tagKey;

  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-xl border border-border bg-card/70 px-4 py-3 backdrop-blur transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/[0.04]">
      <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/40 transition-transform group-hover:scale-110">
        <BrandLogo brand={sponsor.brand} size={20} />
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold leading-tight text-foreground">
          {sponsor.name}
        </span>
        <span className="text-[0.7rem] leading-tight text-muted-foreground">
          {tag}
        </span>
      </span>
    </div>
  );
}

function MarqueeRow({
  sponsors,
  reverse = false,
  duration = 42,
}: {
  sponsors: Sponsor[];
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...sponsors, ...sponsors];
  return (
    <div className="marquee-mask marquee-group relative flex overflow-hidden">
      <div
        className={cn("marquee gap-4 pe-4", reverse && "marquee--reverse")}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {loop.map((s, i) => (
          <LogoChip key={`${s.brand}-${i}`} sponsor={s} />
        ))}
      </div>
    </div>
  );
}

export function SponsorMarquee() {
  const { t } = useLanguage();
  return (
    <section
      aria-label={t.sponsors.heading}
      className="relative border-y border-border bg-muted/30 py-8 sm:py-10"
    >
      <div className="mx-auto mb-5 flex max-w-6xl flex-col items-center justify-center gap-2 px-4 text-center sm:px-6">
        <Boxes className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {t.sponsors.heading}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        <MarqueeRow sponsors={sponsorsRow1} duration={42} />
        <MarqueeRow sponsors={sponsorsRow2} reverse duration={52} />
      </div>
    </section>
  );
}
