import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "mwasjeffrey3@gmail.com";
  const rawPhoneNumber = "0792015482";
  const internationalPhone = "+254792015482";
  const displayPhone = "0792 015 482";

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = emailAddress;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(rawPhoneNumber);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = rawPhoneNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch (err) {
      console.error("Failed to copy phone number:", err);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Get In <span className="text-gradient-electric">Touch</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
            Have a project in mind, an internship opportunity, or want to discuss software systems
            and UI engineering? Reach out directly via email or phone.
          </p>
        </motion.div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Email Direct Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300"
          >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />

            <div className="space-y-6">
              <div className="flex items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/60 text-cyan-300">
                  Primary Email
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Email Address
                </p>
                <div className="text-lg sm:text-xl font-bold text-slate-100 font-mono tracking-tight break-all">
                  {emailAddress}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                  Preferred for detailed inquiries, project specifications, and professional collaboration.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                id="contact-btn-send-email"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#162035] hover:bg-[#1f2d4a] border border-slate-700/80 text-slate-200 font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                aria-label="Copy email address"
                id="contact-btn-copy-email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Phone & Instant Reach Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-rose-500" />

            <div className="space-y-6">
              <div className="flex items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-950/50 border border-purple-800/60 text-purple-300">
                  Direct Line & WhatsApp
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Phone Number
                </p>
                <div className="text-xl sm:text-2xl font-bold text-slate-100 font-mono tracking-tight">
                  {rawPhoneNumber}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                  Direct voice call or instant messaging on WhatsApp for immediate conversations.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${rawPhoneNumber}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-purple-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                id="contact-btn-call-phone"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/254792015482?text=${encodeURIComponent(
                  "Hello Jeff, I saw your portfolio and would like to connect."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-200 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                id="contact-btn-whatsapp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#162035] hover:bg-[#1f2d4a] border border-slate-700/80 text-slate-200 font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer"
                aria-label="Copy phone number"
                id="contact-btn-copy-phone"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Supporting Availability & Quick Context Strip */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-2xl bg-[#0e1422] border border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Current Availability</div>
              <div className="text-xs text-slate-400">Open to software roles & contracts</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Fast Turnaround</div>
              <div className="text-xs text-slate-400">Direct response via email or phone</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Work Preferences</div>
              <div className="text-xs text-slate-400">Remote, Hybrid, or On-site</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
