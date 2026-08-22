import React, { useState, useEffect } from "react";
import { Menu, X, Code2, Sparkles, Home, User, Layers, Cpu, MessageSquare } from "lucide-react";
import { PageType } from "../types.ts";

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { id: PageType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Layers },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ];

  const handlePageClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5"
          : "bg-[#0b0f17]/40 backdrop-blur-sm py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handlePageClick("home")}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl p-1 cursor-pointer"
            aria-label="CodeLoom Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center font-['JetBrains_Mono',monospace]">
              <span className="text-white font-extrabold tracking-tight text-xl sm:text-2xl">Code</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-extrabold text-xl sm:text-2xl">Loom</span>
            </div>
          </button>

          {/* Desktop Navigation Pages */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-full border border-slate-800 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePageClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/25 to-blue-600/25 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Direct Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => handlePageClick("contact")}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Let's Build</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Pages */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePageClick(item.id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-base font-medium transition-colors text-left cursor-pointer ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handlePageClick("contact")}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Build</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
