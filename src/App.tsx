import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";
import { About } from "./components/About.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { Contact } from "./components/Contact.tsx";
import { Footer } from "./components/Footer.tsx";
import { NotFound } from "./components/NotFound.tsx";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  useEffect(() => {
    const checkRoute = () => {
      const pathname = window.location.pathname.replace(/\/$/, "");
      // Valid paths including GitHub Pages subfolder
      const validPaths = [
        "",
        "/",
        "/Portfolio-web",
        "/Portfolio-web/index.html",
        "/index.html"
      ];

      if (!validPaths.includes(pathname)) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    };

    checkRoute();

    const handlePopState = () => {
      checkRoute();
    };

    window.addEventListener("popstate", handlePopState);

    // IntersectionObserver to track active section during scroll
    const sections = ["hero", "about", "projects", "skills", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("popstate", handlePopState);
      observer.disconnect();
    };
  }, []);

  if (isNotFound) {
    return (
      <NotFound
        onBackHome={() => {
          const basePath = window.location.pathname.includes("Portfolio-web") ? "/Portfolio-web/" : "/";
          window.history.pushState({}, "", basePath);
          setIsNotFound(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Skip to Main Content for Accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-black focus:font-bold focus:rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
