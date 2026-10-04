import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Terminal,
  Github,
  Mail,
  MapPin,
  Bus,
  ShieldCheck,
  GraduationCap,
  Zap,
  Activity,
  Lock,
  Wifi,
  Video,
  ClipboardList,
} from "lucide-react";

export const profile = {
  name: "Mohamed",
  firstName: "Mohamed",
  role: "Full-Stack Software Engineer",
  tagline:
    "Specializing in scalable web and mobile applications using Next.js, NestJS, Go, React Native, and PostgreSQL. Passionate about enterprise system architecture, real-time location tracking, and clean code.",
  location: "Open to remote & on-site",
  availability: "Open to full-time roles, high-impact contracts & collaborations",
  /** Optimized profile portrait (served from /public/profile) */
  image: "/profile/mohamed.png",
  imageFallback: "/profile/mohamed.jpg",
  imageAlt: "Portrait of Mohamed, Full-Stack Software Engineer",
  email: "maxammedaamin@gmail.com",
  github: "github.com/maxammedaamin",
  githubUrl: "https://github.com/maxammedaamin",
};

export const heroStats: { label: string; value: string }[] = [
  { label: "Core stacks", value: "Next.js · NestJS · Go" },
  { label: "Focus", value: "Enterprise architecture" },
  { label: "Status", value: "Open to work" },
];

export const about = {
  body: "I am a full-stack engineer with expertise across the entire application lifecycle — from designing database schemas and optimizing REST APIs to crafting performant user interfaces. Experienced in containerized deployments using Docker and managing distributed systems with Redis and PostgreSQL.",
  highlights: [
    {
      icon: Server,
      title: "End-to-end delivery",
      description:
        "From database schema design to polished, performant UI — across the full application lifecycle.",
    },
    {
      icon: Activity,
      title: "Real-time systems",
      description:
        "Building live location tracking and event-driven flows with Redis pub/sub and WebSockets.",
    },
    {
      icon: Lock,
      title: "Security & RBAC",
      description:
        "Role-based access control, biometric data handling, and offline-first synchronization.",
    },
    {
      icon: Terminal,
      title: "DevOps mindset",
      description:
        "Containerized deployments with Docker, Linux, and reproducible environments.",
    },
  ],
};

export type SkillCategory = {
  icon: LucideIcon;
  title: string;
  accent: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: "Languages",
    accent: "text-emerald-600 dark:text-emerald-400",
    skills: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
  },
  {
    icon: Smartphone,
    title: "Frontend & Mobile",
    accent: "text-emerald-600 dark:text-emerald-400",
    skills: ["Next.js", "React", "React Native", "Flutter", "TailwindCSS"],
  },
  {
    icon: Server,
    title: "Backend & API",
    accent: "text-emerald-600 dark:text-emerald-400",
    skills: ["NestJS", "Express.js", "Django REST Framework", "Go (Gin/Fiber)"],
  },
  {
    icon: Database,
    title: "Database & Caching",
    accent: "text-emerald-600 dark:text-emerald-400",
    skills: ["PostgreSQL", "SQLite", "Redis", "Prisma ORM"],
  },
  {
    icon: Terminal,
    title: "DevOps & Tools",
    accent: "text-emerald-600 dark:text-emerald-400",
    skills: ["Docker", "Git", "Linux", "Postman", "pgAdmin"],
  },
];

export type Project = {
  icon: LucideIcon;
  name: string;
  codename?: string;
  stack: string;
  summary: string;
  highlights: { icon: LucideIcon; text: string }[];
};

export const projects: Project[] = [
  {
    icon: Bus,
    name: "Suburban & Local Bus Transit System",
    codename: "BusLink",
    stack: "Django, PostgreSQL, Redis, React Native / Flutter",
    summary:
      "An enterprise-grade local intra-city bus transit platform featuring real-time GPS tracking for active fleet routes, driver shift management, and a zero-booking live map view for urban passengers.",
    highlights: [
      { icon: Activity, text: "Real-time GPS fleet tracking on live map" },
      { icon: ClipboardList, text: "Driver shift management & route assignment" },
      { icon: MapPin, text: "Zero-booking live view for urban passengers" },
    ],
  },
  {
    icon: ShieldCheck,
    name: "Correctional Management Platform",
    stack: "Next.js, NestJS, PostgreSQL, Prisma, Docker",
    summary:
      "A secure correctional facility management system integrating biometric data flows, offline synchronization capabilities, dynamic role-based access control (RBAC), and multi-facility analytics.",
    highlights: [
      { icon: Lock, text: "Dynamic role-based access control (RBAC)" },
      { icon: Wifi, text: "Offline-first synchronization capabilities" },
      { icon: ShieldCheck, text: "Biometric data flow integration" },
      { icon: Activity, text: "Multi-facility analytics dashboards" },
    ],
  },
  {
    icon: GraduationCap,
    name: "E-Learning Management System",
    stack: "NestJS, Next.js, Prisma ORM, PostgreSQL",
    summary:
      "An end-to-end e-learning engine supporting dynamic course structures, media streaming playback, progress tracking, and interactive assessments.",
    highlights: [
      { icon: Video, text: "Media streaming playback engine" },
      { icon: Zap, text: "Dynamic course structure builder" },
      { icon: ClipboardList, text: "Progress tracking & interactive assessments" },
    ],
  },
];

export const socialLinks: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}[] = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: profile.github,
    href: profile.githubUrl,
  },
];

export const navLinks: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
