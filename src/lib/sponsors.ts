import type { BrandKey } from "@/components/brand-logo";

export type Sponsor = {
  brand: BrandKey;
  /** display name */
  name: string;
  /** short label shown under the brand */
  tagKey: string;
};

/**
 * Technology "sponsor" logos shown in the animated marquee.
 * Tag text is resolved via the i18n dictionary by `tagKey`.
 */
export const sponsorsRow1: Sponsor[] = [
  { brand: "nextjs", name: "Next.js", tagKey: "framework" },
  { brand: "nestjs", name: "NestJS", tagKey: "backend" },
  { brand: "go", name: "Go", tagKey: "golang" },
  { brand: "react", name: "React", tagKey: "ui" },
  { brand: "reactnative", name: "React Native", tagKey: "mobile" },
  { brand: "postgresql", name: "PostgreSQL", tagKey: "database" },
  { brand: "redis", name: "Redis", tagKey: "cache" },
  { brand: "prisma", name: "Prisma", tagKey: "orm" },
];

export const sponsorsRow2: Sponsor[] = [
  { brand: "docker", name: "Docker", tagKey: "containers" },
  { brand: "typescript", name: "TypeScript", tagKey: "language" },
  { brand: "tailwindcss", name: "TailwindCSS", tagKey: "styling" },
  { brand: "django", name: "Django", tagKey: "rest" },
  { brand: "express", name: "Express.js", tagKey: "server" },
  { brand: "flutter", name: "Flutter", tagKey: "mobile2" },
  { brand: "linux", name: "Linux", tagKey: "devops" },
  { brand: "git", name: "Git", tagKey: "vcs" },
];

/** Tag labels per locale (kept here, close to the brand data, for brevity). */
export const sponsorTags: Record<"en" | "ar", Record<string, string>> = {
  en: {
    framework: "React Framework",
    backend: "Node Backend",
    golang: "Gin / Fiber",
    ui: "UI Library",
    mobile: "Mobile",
    database: "Database",
    cache: "Caching / Pub-Sub",
    orm: "ORM",
    containers: "Containers",
    language: "Language",
    styling: "Styling",
    rest: "REST Framework",
    server: "Node Server",
    mobile2: "Mobile",
    devops: "DevOps",
    vcs: "Version Control",
  },
  ar: {
    framework: "إطار React",
    backend: "خلفية Node",
    golang: "Gin / Fiber",
    ui: "مكتبة واجهات",
    mobile: "جوال",
    database: "قاعدة بيانات",
    cache: "تخزين مؤقت / Pub-Sub",
    orm: "ORM",
    containers: "حاويات",
    language: "لغة",
    styling: "تنسيق",
    rest: "إطار REST",
    server: "خادم Node",
    mobile2: "جوال",
    devops: "DevOps",
    vcs: "إصدار",
  },
};
