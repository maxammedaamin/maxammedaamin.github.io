import * as React from "react";

import {
  siNextdotjs,
  siNestjs,
  siGo,
  siReact,
  siPostgresql,
  siRedis,
  siPrisma,
  siDocker,
  siTypescript,
  siTailwindcss,
  siDjango,
  siExpress,
  siFlutter,
  siLinux,
  siGit,
  type SimpleIcon,
} from "simple-icons";

type BrandKey =
  | "nextjs"
  | "nestjs"
  | "go"
  | "react"
  | "reactnative"
  | "postgresql"
  | "redis"
  | "prisma"
  | "docker"
  | "typescript"
  | "tailwindcss"
  | "django"
  | "express"
  | "flutter"
  | "linux"
  | "git";

const iconMap: Record<BrandKey, SimpleIcon | null> = {
  nextjs: siNextdotjs,
  nestjs: siNestjs,
  go: siGo,
  react: siReact,
  // React Native has no dedicated simple-icon; reuse React mark
  reactnative: siReact,
  postgresql: siPostgresql,
  redis: siRedis,
  prisma: siPrisma,
  docker: siDocker,
  typescript: siTypescript,
  tailwindcss: siTailwindcss,
  django: siDjango,
  express: siExpress,
  flutter: siFlutter,
  linux: siLinux,
  git: siGit,
};

/** Brands whose official logo is pure black — invert them in dark mode. */
const darkOnLight = new Set<BrandKey>([
  "nextjs",
  "express",
  "django",
  "prisma",
]);

export function BrandLogo({
  brand,
  className,
  size = 22,
  title,
}: {
  brand: BrandKey;
  className?: string;
  size?: number;
  title?: string;
}) {
  const icon = iconMap[brand];
  if (!icon) return null;

  const hex = `#${icon.hex}`;
  const isDarkOnLight = darkOnLight.has(brand);

  return (
    <svg
      role="img"
      aria-label={title ?? icon.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      style={
        isDarkOnLight
          ? { color: hex }
          : { color: hex }
      }
    >
      <title>{title ?? icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

export type { BrandKey };
