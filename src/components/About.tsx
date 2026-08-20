import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Cpu, Layout, Users, ShieldCheck, Sparkles, Code2 } from "lucide-react";

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Driven by automation. <br />
            <span className="text-gradient-blue-purple">Crafted for humans.</span>
          </h2>
        </motion.div>

        {/* Narrative & Values Layout */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8"
        >
          {/* Main Story Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111726]/70 border border-slate-800/80 shadow-md">
            <p className="font-medium text-slate-100 text-lg sm:text-xl leading-relaxed mb-5">
              "The world's shift toward automation is what pulled me into software in the first place — watching manual processes get replaced by smart systems made me want to be part of building that shift, not just witnessing it."
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-5">
              "I've found a particular pull toward UI development, making sure the end product feels simple to use."
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              "As a software developer, I build for the end user, not just for the code to run."
            </p>
          </div>

          {/* Core Values / Philosophy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-xl bg-[#131b2c] border border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                <Layout className="w-5 h-5" />
              </div>
              <h4 className="text-slate-100 font-semibold text-base mb-1.5">User Experience First</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Clean layouts, purposeful interaction states, and accessibility baked in from day one.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#131b2c] border border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-slate-100 font-semibold text-base mb-1.5">Sound Engineering</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Writing clean, maintainable logic with deep respect for data privacy and security.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
