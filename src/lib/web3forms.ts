import type { Locale } from "@/lib/i18n";

type ContactFields = {
  name: string;
  email: string;
  message: string;
};

type ContactMessage = ContactFields & {
  locale: Locale;
};

type ContactErrors = Partial<Record<keyof ContactFields, string>>;

export function getContactFormErrors({
  name,
  email,
  message,
}: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (trimmedName.length < 2 || trimmedName.length > 80) {
    errors.name = "invalid";
  }
  if (
    trimmedEmail.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
  ) {
    errors.email = "invalid";
  }
  if (trimmedMessage.length < 5 || trimmedMessage.length > 2000) {
    errors.message = "invalid";
  }

  return errors;
}

export async function submitContactMessage({
  name,
  email,
  message,
  locale,
}: ContactMessage): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Configure it in the build environment.",
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      subject: `New portfolio message from ${name.trim()}`,
      from_name: "Mohamed's Portfolio",
      locale,
      botcheck: "",
    }),
  });

  let result: { success?: boolean; message?: string };
  try {
    result = await response.json();
  } catch {
    throw new Error("Web3Forms returned an invalid response.");
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Web3Forms could not send the message.");
  }
}
