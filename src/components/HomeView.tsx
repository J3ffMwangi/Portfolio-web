import React from "react";
import { ArrowRight, Code2, Server, Rocket, Layers, ArrowUpRight, Mail, Phone, MessageSquare } from "lucide-react";
import { PageType } from "../types.ts";

interface HomeViewProps {
  onNavigate: (page: PageType) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  const previewProjects = [
    {
      id: "1",
      title: "Nexus Analytics Platform",
      category: "Full Stack",
      description: "Real-time telemetry and predictive data dashboards with sub-second response times.",
      tags: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Aura Commerce Ecosystem",
      category: "E-Commerce",
      description: "Headless store architecture with dynamic inventory tracking and integrated payments.",
      tags: ["Next.js", "TypeScript", "Stripe API", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "Pulse Cloud API Gateway",
      category: "Backend & Systems",
      description: "High-throughput API gateway with edge caching, token validation, and rate limiting.",
      tags: ["Node.js", "Express", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const pillars = [
    {
      icon: Code2,
      title: "Front-End Craftsmanship",
      desc: "Pixel-perfect, fluid interfaces developed with React, TypeScript, and modern accessibility standards.",
    },
    {
      icon: Server,
      title: "Scalable Systems",
      desc: "Reliable APIs, microservices, and database schemas built for security, resilience, and speed.",
    },
    {
      icon: Rocket,
      title: "Modern DevOps",
      desc: "Automated CI/CD pipelines, containerization, and zero-downtime cloud deployments.",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[280px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 mb-6 backdrop-blur-sm shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Custom Builds, Engineering & Digital Transformation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              We are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                CodeLoom
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium mb-4">
              Software Engineering & Modern Digital Solutions Studio
            </p>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              We weave cutting-edge technology, scalable backend architectures, and intuitive user interfaces into cohesive, high-impact digital products.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button
                type="button"
                onClick={() => onNavigate("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Us</span>
              </button>
            </div>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400 bg-slate-900/60 border border-slate-800/80 px-4 py-2.5 rounded-2xl">
              <a href="mailto:mwasjeffrey3@gmail.com" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>mwasjeffrey3@gmail.com</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <a href="tel:0792015482" className="hover:text-purple-300 flex items-center gap-1.5 transition-colors">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>0792015482</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <a href="https://wa.me/254792015482" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">What We Deliver</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Engineered for Reliability and Scale</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Recent Engineering Projects</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("projects")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onNavigate("projects")}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-cyan-500/40 transition-all cursor-pointer flex flex-col"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-semibold text-cyan-300 border border-cyan-500/20">
                  {proj.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/40 border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Ready to Start?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have a project in mind? Let's build something exceptional.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From web apps and mobile APIs to full system architectures, CodeLoom delivers quality software tailored to your vision.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Get in Touch with CodeLoom</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
