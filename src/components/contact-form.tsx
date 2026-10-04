"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/language-provider";
import { getContactFormErrors, submitContactMessage } from "@/lib/web3forms";

export function ContactForm() {
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

  return (
    <Card className="h-full gap-0 py-6">
      <CardContent>
        <h3 className="mb-4 text-base font-semibold">{t.contact.formTitle}</h3>
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
  );
}
