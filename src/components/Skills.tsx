import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Code,
  Library,
  Wrench,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Palette,
  GitBranch,
} from "lucide-react";
import { SkillCategory } from "../types.ts";

export const Skills: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      title: "Languages",
      subtitle: "Foundational & Object-Oriented",
      iconName: "code",
      skills: [
        {
          name: "Java",
          description: "Object-oriented programming, data structures, and core software design.",
        },
        {
          name: "Python",
          description: "Scripting, algorithm implementation, and backend processing.",
        },
        {
          name: "JavaScript",
          description: "Modern ES6+, asynchronous programming, and browser APIs.",
        },
        {
          name: "HTML/CSS",
          description: "Semantic document structure, accessibility, and modern CSS layout models.",
        },
        {
          name: "C#",
          description: "Structured system development, typed component logic, and OOP patterns.",
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      subtitle: "UI & Modern Architecture",
      iconName: "library",
      skills: [
        {
          name: "React",
          description: "Component lifecycle, state management, hooks, and responsive interfaces.",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first design system architecture, responsive grids, and design tokens.",
        },
        {
          name: "Node.js",
          description: "Server runtimes, RESTful API design, middleware integration, and Express.",
        },
      ],
    },
    {
      title: "Tools",
      subtitle: "Workflow & Engineering Environment",
      iconName: "wrench",
      skills: [
        {
          name: "Git Version Control",
          description: "Version control workflows, branch management, and collaborative development.",
        },
        {
          name: "VS Code",
          description: "Workspace configuration, linting, debugging, and productivity tooling.",
        },
        {
          name: "Figma",
          description: "Interface prototyping, design handoff, layout grids, and component specs.",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Skills & <span className="text-gradient-electric">Tooling</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
            A transparent overview of the languages, frameworks, and engineering tools I use to build
            robust, human-centered software.
          </p>
        </motion.div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.12 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#111726]/80 border border-slate-800/90 shadow-lg flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800/80">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      catIndex === 0
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        : catIndex === 1
                        ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                    }`}
                  >
                    {catIndex === 0 && <Terminal className="w-5 h-5" />}
                    {catIndex === 1 && <Layers className="w-5 h-5" />}
                    {catIndex === 2 && <GitBranch className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{category.title}</h3>
                    <p className="text-xs text-slate-400">{category.subtitle}</p>
                  </div>
                </div>

                {/* Skills List / Tags with Detail */}
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-3.5 rounded-xl border transition-all duration-200 cursor-default ${
                          isHovered
                            ? "bg-[#172238] border-cyan-500/40 shadow-sm"
                            : "bg-[#0d131f]/70 border-slate-800/70 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
