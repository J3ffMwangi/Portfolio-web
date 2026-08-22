import React, { useState, useEffect } from "react";
import { Menu, X, Code2, Sparkles } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0f17]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="CodeLoom Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center font-['JetBrains_Mono',monospace]">
              <span className="text-white font-extrabold tracking-tight text-xl">Code</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-extrabold text-xl">Loom</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/70 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Get Started</span>
            </a>
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Started</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
