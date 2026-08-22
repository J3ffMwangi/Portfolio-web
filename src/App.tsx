import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { HomeView } from "./components/HomeView.tsx";
import { About } from "./components/About.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { Contact } from "./components/Contact.tsx";
import { Footer } from "./components/Footer.tsx";
import { PageType } from "./types.ts";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  // Sync with URL hash for browser back/forward and bookmarking support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase() as PageType;
      const validPages: PageType[] = ["home", "about", "projects", "skills", "contact"];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === "home" ? "" : page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Skip Link */}
      <button
        type="button"
        onClick={() => {
          const main = document.getElementById("main-content");
          if (main) main.focus();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-black focus:font-bold focus:rounded-lg shadow-lg"
      >
        Skip to main content
      </button>

      {/* Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Pages */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {currentPage === "home" && <HomeView onNavigate={handleNavigate} />}
        {currentPage === "about" && <About onNavigate={handleNavigate} />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "skills" && <Skills />}
        {currentPage === "contact" && <Contact />}
      </main>

      {/* Footer */}
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
}
