import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CheckCircle2,
  Sparkles,
  Layers,
  Code2,
} from "lucide-react";
import { Project } from "../types.ts";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Subtle 3D tilt calculation on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) * 2 - 1;
    const yPct = (mouseY / height) * 2 - 1;

    setRotateY(xPct * 2.5);
    setRotateX(-yPct * 2.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        setIsHovered(true);
        handleMouseMove(e);
      }}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${
          isHovered ? 1.01 : 1
        })`,
      }}
      className={`relative rounded-2xl bg-[#111726] border transition-all duration-300 overflow-hidden shadow-xl ${
        isHovered
          ? "border-cyan-500/40 shadow-cyan-950/30 ring-1 ring-purple-500/20"
          : "border-slate-800/90 shadow-black/40"
      }`}
      id={`project-card-${project.id}`}
    >
      {/* Top Accent Gradient Line */}
      <div
        className={`h-1 w-full transition-opacity duration-300 ${
          project.type === "mobile-security"
            ? "bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500"
            : "bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"
        } ${isHovered ? "opacity-100" : "opacity-75"}`}
      />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Header & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Case Study {index + 1}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-medium text-cyan-400">Team Project</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Explicit Contribution Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162035] border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>My Contribution: {project.contribution}</span>
          </div>
        </div>

        {/* Project Overview */}
        <div className="p-4 rounded-xl bg-[#0d131f] border border-slate-800/90">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">
            Project Overview
          </p>
          <p className="text-sm sm:text-base text-slate-200">{project.overview}</p>
        </div>

        {/* Detailed Description & Personal Contribution Highlight */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider font-semibold text-purple-300 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Engineering & Contribution Detail
          </p>
          <blockquote className="p-4 rounded-xl bg-[#141d30]/60 border-l-2 border-purple-500 text-slate-300 text-sm sm:text-base leading-relaxed italic">
            "{project.description}"
          </blockquote>
        </div>

        {/* Key Architectural & Implementation Highlights */}
        <div className="space-y-2.5 pt-1">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            Key Implementation Highlights
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="p-3.5 rounded-xl bg-[#0d131f] border border-slate-800/90 text-xs text-slate-300 flex items-start gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                <span className="leading-relaxed font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies List Tags */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium mr-1">Stack:</span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-[#162035] border border-slate-700/80 text-xs font-medium text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium ml-auto px-3 py-1 rounded-lg bg-slate-800/40 border border-slate-800">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineered for Reliability</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const projectList: Project[] = [
    {
      id: "secure-notes",
      title: "Secure Notes App",
      tagline: "Mobile Note-Taking with Hardware-Backed Cryptography",
      overview:
        "A team-built mobile note-taking application focused on securely storing personal notes.",
      contribution: "Security Implementation",
      description:
        "As part of a team building a mobile note-taking app in React Native, I focused on strengthening its security — implementing AES encryption so note content stays protected at rest, and using secure device keystores to safeguard the encryption keys themselves.",
      technologies: ["React Native", "AES Encryption", "Secure Keystore"],
      highlights: [
        "AES-256 encryption for at-rest storage protection",
        "Hardware-backed keystore key isolation architecture",
        "Biometric authentication access guardrails",
      ],
      type: "mobile-security",
    },
    {
      id: "budget-tracker",
      title: "Budget Tracker App",
      tagline: "Personal Budgeting & High-Clarity Financial Visualizer",
      overview:
        "A team-built personal budgeting application designed to make spending patterns easier to understand.",
      contribution: "UI & Data Visualization",
      description:
        "As part of a team building a personal budget tracking app, I focused on the user interface — designing how spending data is visualized, using charts to make expense patterns easy to understand at a glance.",
      technologies: ["React", "Tailwind CSS", "Recharts / Chart.js"],
      highlights: [
        "Cognitive-first visual spending breakdown and layouts",
        "Dynamic category filtering with live recalculations",
        "Accessible contrast-checked color hierarchy",
      ],
      type: "ui-dataviz",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Projects & <span className="text-gradient-electric">Contributions</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
            A look into key applications I've contributed to, highlighting my specific engineering roles
            in mobile security and UI data visualization.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projectList.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
