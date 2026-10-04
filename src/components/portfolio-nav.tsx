"use client";

import * as React from "react";

export type NavView =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "contact"
  | "detail";

export type NavAction =
  | { type: "home" }
  | { type: "page"; view: "about" | "skills" | "projects" | "contact" }
  | { type: "project"; index: number };

type PortfolioNavValue = {
  view: NavView;
  projectIndex: number | null;
  navigate: (action: NavAction) => void;
};

const PortfolioNavContext = React.createContext<PortfolioNavValue | null>(null);

export function PortfolioNavProvider({
  value,
  children,
}: {
  value: PortfolioNavValue;
  children: React.ReactNode;
}) {
  return (
    <PortfolioNavContext.Provider value={value}>
      {children}
    </PortfolioNavContext.Provider>
  );
}

export function usePortfolioNav() {
  const ctx = React.useContext(PortfolioNavContext);
  if (!ctx) {
    throw new Error("usePortfolioNav must be used within a PortfolioNavProvider");
  }
  return ctx;
}
