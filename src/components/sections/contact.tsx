"use client";

import * as React from "react";
import { ArrowUpRight, MailOpen, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/language-provider";
import { profile, socialLinks } from "@/lib/portfolio-data";
import { getContactFormErrors, submitContactMessage } from "@/lib/web3forms";

export function Contact() {
  const { t, locale } = useLanguage();
  const { toast } = useToast();

  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const clearFieldError = (field: "name" | "email" | "message") =>
    setErrors((e) => ({ ...e, [field]: undefined }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    const validationErrors = getContactFormErrors(form);
    setErrors(validationErrors);
    if (Object.values(validationErrors).some(Boolean)) return;
    setStatus("sending");
    try {
      await submitContactMessage({ ...form, locale });

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      toast({
        title: t.contact.successTitle,
        description: t.contact.successDesc,
      });
    } catch (error) {
      console.error("[contact] failed to submit message", error);
      setStatus("error");
      toast({
        variant: "destructive",
        title: t.contact.errorTitle,
        description: t.contact.errorDesc,
      });
    }
  };

  const ctaBody = t.contact.ctaBody.replace("{email}", profile.email);

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Direct contact cards */}
          <div className="flex flex-col gap-4">
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
            </div>

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
                    <p className="mt-1 text-sm text-muted-foreground">
                      {ctaBody}
                    </p>
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
            <Card className="h-full gap-0 py-6">
              <CardContent>
                <h3 className="mb-4 text-base font-semibold">
                  {t.contact.formTitle}
                </h3>
                <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="cf-name">{t.contact.name}</Label>
                    <Input
                      id="cf-name"
                      name="name"
                      autoComplete="name"
                      required
                      minLength={2}
                      maxLength={80}
                      placeholder={t.contact.namePh}
                      value={form.name}
                      aria-invalid={!!errors.name}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, name: e.target.value }));
                        clearFieldError("name");
                      }}
                    />
                    {errors.name ? (
                      <p className="flex items-center gap-1 text-xs text-destructive">
                        <AlertCircle className="size-3" />
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="cf-email">{t.contact.email}</Label>
                    <Input
                      id="cf-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={120}
                      placeholder={t.contact.emailPh}
                      value={form.email}
                      aria-invalid={!!errors.email}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, email: e.target.value }));
                        clearFieldError("email");
                      }}
                    />
                    {errors.email ? (
                      <p className="flex items-center gap-1 text-xs text-destructive">
                        <AlertCircle className="size-3" />
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="cf-message">{t.contact.message}</Label>
                    <Textarea
                      id="cf-message"
                      name="message"
                      required
                      minLength={5}
                      maxLength={2000}
                      placeholder={t.contact.messagePh}
                      rows={5}
                      value={form.message}
                      aria-invalid={!!errors.message}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, message: e.target.value }));
                        clearFieldError("message");
                      }}
                    />
                    {errors.message ? (
                      <p className="flex items-center gap-1 text-xs text-destructive">
                        <AlertCircle className="size-3" />
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  {status === "success" ? (
                    <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/[0.06] px-3 py-2 text-sm text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 className="size-4" />
                      {t.contact.successDesc}
                    </div>
                  ) : status === "error" ? (
                    <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/[0.06] px-3 py-2 text-sm text-destructive">
                      <AlertCircle className="size-4" />
                      {t.contact.errorDesc}
                    </div>
                  ) : null}

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-foreground text-background hover:bg-foreground/90"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="size-4 rtl:-scale-x-100" />
                        {t.contact.submit}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
        </div>
      </div>
    </section>
  );
}
