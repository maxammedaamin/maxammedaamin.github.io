import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const outfit = Outfit({
  variable: "--font-sans-en",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-sans-ar",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mohamed — Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in scalable web and mobile applications using Next.js, NestJS, Go, React Native, and PostgreSQL.",
  keywords: [
    "Mohamed",
    "Full-Stack Engineer",
    "Software Engineer",
    "Next.js",
    "NestJS",
    "Go",
    "React Native",
    "PostgreSQL",
    "Enterprise Architecture",
    "Portfolio",
  ],
  authors: [{ name: "Mohamed" }],
  openGraph: {
    title: "Mohamed — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in scalable web and mobile applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in scalable web and mobile applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${ibmPlexArabic.variable}`}
    >
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
