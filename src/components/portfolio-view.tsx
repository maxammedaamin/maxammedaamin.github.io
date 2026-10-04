"use client";

import * as React from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { SponsorMarquee } from "@/components/sponsor-marquee";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { ProjectsPage } from "@/components/sections/projects-page";
import { ProjectDetailPage } from "@/components/sections/project-detail-page";
import { AboutPage } from "@/components/sections/aboutview";
import { SkillsPage } from "@/components/sections/skillsview";
import { ContactPage } from "@/components/sections/contactview";
import {
  PortfolioNavProvider,
  type NavAction,
  type NavView,
} from "@/components/portfolio-nav";

const MAX_PROJECTS = 5;

/**
 * Single-route portfolio shell. Each navbar item navigates to a dedicated
 * in-app page view (about / skills / projects / contact / detail), all
 * served from the `/` Next.js route. The active view is reflected in the
 * URL so it can be shared/bookmarked.
 */
export function PortfolioView() {
  const [view, setView] = React.useState<NavView>("home");
  const [projectIndex, setProjectIndex] = React.useState<number | null>(null);

  // hydrate from URL on mount
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const v = params.get("v");
    const p = params.get("p");
    if (p !== null) {
      const idx = Number(p);
      if (!Number.isNaN(idx) && idx >= 0 && idx < MAX_PROJECTS) {
        setProjectIndex(idx);
        setView("detail");
        return;
      }
    }
    if (
      v === "about" ||
      v === "skills" ||
      v === "projects" ||
      v === "contact"
    ) {
      setView(v);
    }
  }, []);

  const syncUrl = React.useCallback(
    (nextView: NavView, nextIndex: number | null) => {
      const url = new URL(window.location.href);
      url.searchParams.delete("v");
      url.searchParams.delete("p");
      if (nextView === "detail" && nextIndex !== null) {
        url.searchParams.set("p", String(nextIndex));
      } else if (nextView !== "home") {
        url.searchParams.set("v", nextView);
      }
      window.history.replaceState(null, "", url);
    },
    [],
  );

  const navigate = React.useCallback(
    (action: NavAction) => {
      if (action.type === "home") {
        setView("home");
        setProjectIndex(null);
        syncUrl("home", null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (action.type === "page") {
        setView(action.view);
        setProjectIndex(null);
        syncUrl(action.view, null);
        window.scrollTo({ top: 0, behavior: "auto" });
      } else if (action.type === "project") {
        setProjectIndex(action.index);
        setView("detail");
        syncUrl("detail", action.index);
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    },
    [syncUrl],
  );

  const navValue = React.useMemo(
    () => ({ view, projectIndex, navigate }),
    [view, projectIndex, navigate],
  );

  return (
    <PortfolioNavProvider value={navValue}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          {view === "home" && (
            <>
              <Hero />
              <SponsorMarquee />
              <About />
              <Skills />
              <Projects />
              <Faq />
              <Contact />
            </>
          )}
          {view === "about" && <AboutPage />}
          {view === "skills" && <SkillsPage />}
          {view === "projects" && <ProjectsPage />}
          {view === "contact" && <ContactPage />}
          {view === "detail" && projectIndex !== null && (
            <ProjectDetailPage index={projectIndex} />
          )}
        </main>
        <SiteFooter />
      </div>
    </PortfolioNavProvider>
  );
}
