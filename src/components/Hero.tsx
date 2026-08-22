import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
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
      {/* Subtle ambient light accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-900/15 via-purple-900/10 to-rose-900/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 right-10 w-[280px] h-[280px] bg-blue-900/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto w-full text-center sm:text-left flex flex-col items-center sm:items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full space-y-7"
        >
          {/* Status Chip */}
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center sm:justify-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131b2c] border border-slate-800 text-xs text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-slate-200">Software Engineering Studio</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-400 font-medium">Digital Solutions</span>
            </div>
          </motion.div>

          {/* Main Headline with CodeLoom */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-extrabold tracking-tight leading-[1.08] text-slate-100 max-w-4xl">
              We are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                CodeLoom
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-medium mb-4">
              Software Engineering & Modern Digital Solutions
            </p>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed text-balance"
          >
            We weave cutting-edge technology, scalable backend architectures, and pixel-perfect user interfaces into cohesive, high-impact digital experiences.
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
              Contact Us
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
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Full-Stack & Cloud</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-1">React, TypeScript, APIs & scalable architectures</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
