import React from "react";
import { Code2, Github, Mail, Phone, MessageSquare, ArrowUp } from "lucide-react";
import { PageType } from "../types.ts";

interface FooterProps {
  currentPage?: PageType;
  onNavigate?: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks: { id: PageType; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-[#090d14] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Brand & Tagline */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/20">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex items-center font-['JetBrains_Mono',monospace]">
                <span className="text-white font-extrabold tracking-tight text-lg">Code</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-extrabold text-lg">Loom</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Software engineering and digital solutions studio delivering modern web systems.
            </p>
          </div>

          {/* Quick Page Links */}
          {onNavigate && (
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Direct channels & back to top */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:mwasjeffrey3@gmail.com"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors border border-slate-800"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:0792015482"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-purple-400 hover:bg-slate-800 transition-colors border border-slate-800"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/254792015482"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors border border-slate-800"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/mwasjeffrey3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors border border-slate-800 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Sub-footer Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} CodeLoom. All rights reserved.</p>
          <p>Designed and engineered with modern web standards.</p>
        </div>
      </div>
    </footer>
  );
}
