"use client";

import * as React from "react";
import { ArrowUpRight, MailOpen } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/components/language-provider";
import { profile, socialLinks } from "@/lib/portfolio-data";

export function ContactPage() {
  const { t } = useLanguage();
  const page = t.contact.page;
  const ctaBody = t.contact.ctaBody.replace("{email}", profile.email);

  return (
    <article>
      <PageHeader
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          {/* Direct contact cards + CTA */}
          <div className="flex flex-col gap-4">
            {socialLinks.map((link, i) => (
              <Reveal key={link.label} delay={i * 0.06}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block h-full"
                >
                  <Card className="group h-full gap-0 py-4 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md">
                    <CardContent className="flex items-center gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40 text-foreground transition-colors group-hover:border-foreground/20 group-hover:bg-accent">
                        <link.icon className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {link.label}
                        </p>
                        <p className="mt-1 truncate text-sm font-medium">
                          {link.value}
                        </p>
                      </div>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 rtl:-scale-x-100" />
                    </CardContent>
                  </Card>
                </a>
              </Reveal>
            ))}

            {/* CTA banner */}
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-emerald-500/[0.07] to-transparent p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="hidden size-12 shrink-0 items-center justify-center rounded-xl bg-foreground text-background sm:flex">
                    <MailOpen className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-balance">
                      {t.contact.ctaTitle}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{ctaBody}</p>
                    <Button
                      asChild
                      size="sm"
                      className="mt-3 bg-foreground text-background hover:bg-foreground/90"
                    >
                      <a href={`mailto:${profile.email}`}>{t.contact.ctaButton}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
        </div>
      </div>
    </article>
  );
}
