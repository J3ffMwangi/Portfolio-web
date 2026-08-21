import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Mail, Phone, Sparkles, Terminal } from "lucide-react";
import { Button } from "./Button.tsx";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Subtle ambient light accents (restrained, no excessive blur or glowing slop) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-900/15 via-purple-900/10 to-rose-900/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 right-10 w-[280px] h-[280px] bg-blue-900/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto w-full text-center sm:text-left flex flex-col items-center sm:items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full space-y-7"
        >
          {/* Subtle Status Chip */}
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center sm:justify-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131b2c] border border-slate-800 text-xs text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-slate-200">Software Developer</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-400 font-medium">Focus on UI & Product</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-extrabold tracking-tight leading-[1.08] text-slate-100 max-w-4xl">
              <span className="text-gradient-electric">Developing software systems</span>
              <br className="hidden sm:inline" />{" "}
              <span className="text-slate-100">
                and engineering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-300 to-cyan-300">
                  user-centered digital applications.
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed text-balance"
          >
            Passionate about bridging the gap between robust software systems, automated workflows,
            and intuitive, crafted user experiences.
          </motion.p>

          {/* Hero CTAs & Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 pt-2"
          >
            <Button
              variant="primary"
              size="lg"
              magnetic={true}
              onClick={() => handleScrollTo("projects")}
              icon={<ArrowDown className="w-4 h-4" />}
              iconPosition="right"
              id="hero-btn-projects"
            >
              View Projects
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleScrollTo("contact")}
              icon={<Mail className="w-4 h-4 text-cyan-400" />}
              iconPosition="left"
              id="hero-btn-contact"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Quick Technical Highlights */}
          <motion.div
            variants={itemVariants}
            className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl"
          >
            <div className="p-3.5 rounded-xl bg-[#111726]/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>UI & Interaction</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-1">Design systems, Tailwind, responsive interfaces</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#111726]/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>Security & Systems</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-1">AES encryption, Keystores, Java, C#</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
