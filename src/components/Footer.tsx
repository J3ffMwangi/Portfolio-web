import React from "react";
import { Mail, Phone, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#090d14] py-14 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand & Supporting text */}
        <div className="space-y-2 max-w-md">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 via-purple-500 to-rose-500 p-[1px]">
              <div className="w-full h-full bg-[#090d14] rounded-[6px] flex items-center justify-center font-heading font-bold text-[11px] text-white">
                JM
              </div>
            </div>
            <span className="font-heading font-bold text-slate-100 text-base">Jeff Mwangi</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Software developer focused on building thoughtful, user-centered software.
          </p>
        </div>

        {/* Links & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="mailto:mwasjeffrey3@gmail.com"
              className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              aria-label="Email Jeff Mwangi"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>mwasjeffrey3@gmail.com</span>
            </a>

            <span className="text-slate-700">•</span>

            <a
              href="tel:0792015482"
              className="text-slate-400 hover:text-purple-300 transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              aria-label="Call Jeff Mwangi"
            >
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <span>0792015482</span>
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700/60 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Scroll back to top"
            id="back-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <p>© {currentYear} Jeff Mwangi. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with intentional UI craft & systems thinking
        </p>
      </div>
    </footer>
  );
};
