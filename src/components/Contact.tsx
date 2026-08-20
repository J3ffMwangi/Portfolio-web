import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  RefreshCw,
  MessageSquare,
  User,
  AtSign,
} from "lucide-react";
import { Button } from "./Button.tsx";
import { ContactFormData, ContactResponse } from "../types.ts";

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverFeedback, setServerFeedback] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        if (value.trim().length > 100) return "Name is too long.";
        return "";
      case "email":
        if (!value.trim()) return "Please enter your email address.";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value.trim())) return "Please enter a valid email address.";
        return "";
      case "message":
        if (!value.trim()) return "Please enter your message.";
        if (value.trim().length < 10) return "Message must be at least 10 characters long.";
        if (value.trim().length > 3000) return "Message cannot exceed 3,000 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const messageErr = validateField("message", formData.message);

    setTouched({ name: true, email: true, message: true });
    setErrors({ name: nameErr, email: emailErr, message: messageErr });

    if (nameErr || emailErr || messageErr) {
      return;
    }

    setStatus("submitting");
    setServerFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          honeypot,
        }),
      });

      const data: ContactResponse = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setServerFeedback(data.message || "Your message has been delivered to Jeff.");
        setSubmissionId(data.submissionId || null);
        setFormData({ name: "", email: "", message: "" });
        setTouched({});
      } else {
        setStatus("error");
        setServerFeedback(data.error || "Failed to send message. Please try again.");
      }
    } catch (err: any) {
      console.error("Submission failed:", err);
      setStatus("error");
      setServerFeedback(
        "Network error: Unable to connect to the server. Please email jeffmuriithi89@gmail.com directly."
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setServerFeedback(null);
    setSubmissionId(null);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Let's build something <span className="text-gradient-electric">thoughtful.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
            Whether you have an inquiry, an internship opportunity, or want to discuss software and UI
            engineering, send a message below.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111726]/80 border border-slate-800/90 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-slate-100">Contact Information</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Feel free to connect directly via email or check out my repositories on GitHub.
              </p>

              <div className="space-y-4">
                {/* Email Direct Link */}
                <a
                  href="mailto:jeffmuriithi89@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0d131f] border border-slate-800/80 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label="Send email to jeffmuriithi89@gmail.com"
                  id="contact-email-link"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <div className="text-sm font-semibold text-cyan-300 truncate">
                      jeffmuriithi89@gmail.com
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                {/* GitHub Direct Link */}
                <a
                  href="https://github.com/J3ffMwangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0d131f] border border-slate-800/80 hover:border-purple-500/50 text-slate-200 hover:text-white transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label="Visit GitHub profile of Jeff Mwangi"
                  id="contact-github-link"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-400 font-medium">GitHub Profile</div>
                    <div className="text-sm font-semibold text-purple-300 truncate">
                      github.com/J3ffMwangi
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Typically responds within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl relative overflow-hidden">
              {/* Top gradient border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500" />

              {status === "success" ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-100">Message Delivered!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      {serverFeedback || "Thank you for reaching out. Jeff will review your message promptly."}
                    </p>
                    {submissionId && (
                      <p className="text-xs font-mono text-slate-500 pt-1">
                        Confirmation ID: {submissionId}
                      </p>
                    )}
                  </div>
                  <div className="pt-4">
                    <Button variant="secondary" onClick={handleReset} icon={<RefreshCw className="w-4 h-4" />}>
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Spam honeypot hidden field */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_hp">Do not fill this</label>
                    <input
                      type="text"
                      id="website_hp"
                      name="website_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Server error alert banner if needed */}
                  {status === "error" && (
                    <div
                      className="p-4 rounded-xl bg-rose-950/60 border border-rose-800/80 text-rose-200 text-xs flex items-start gap-3"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block mb-0.5">Submission Error</span>
                        <span>{serverFeedback}</span>
                      </div>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Your Name</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === "submitting"}
                      placeholder="e.g. Alex Chen"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0b0f17] text-slate-100 text-sm border transition-all duration-200 placeholder:text-slate-600 focus:outline-none ${
                        errors.name && touched.name
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      }`}
                      aria-invalid={!!(errors.name && touched.name)}
                      aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                      required
                    />
                    {errors.name && touched.name && (
                      <p id="name-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <AtSign className="w-3.5 h-3.5 text-slate-400" />
                      <span>Your Email</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === "submitting"}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0b0f17] text-slate-100 text-sm border transition-all duration-200 placeholder:text-slate-600 focus:outline-none ${
                        errors.email && touched.email
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      }`}
                      aria-invalid={!!(errors.email && touched.email)}
                      aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                      required
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="contact-message"
                        className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                        <span>Message</span>
                        <span className="text-rose-400">*</span>
                      </label>
                      <span className="text-[11px] text-slate-500">
                        {formData.message.length}/3000
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === "submitting"}
                      placeholder="Hi Jeff, I'd like to discuss a software project / opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#0b0f17] text-slate-100 text-sm border transition-all duration-200 placeholder:text-slate-600 focus:outline-none resize-y ${
                        errors.message && touched.message
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      }`}
                      aria-invalid={!!(errors.message && touched.message)}
                      aria-describedby={errors.message && touched.message ? "message-error" : undefined}
                      required
                    />
                    {errors.message && touched.message && (
                      <p id="message-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      isLoading={status === "submitting"}
                      disabled={status === "submitting"}
                      icon={<Send className="w-4 h-4" />}
                      iconPosition="right"
                      magnetic={true}
                      id="contact-submit-btn"
                    >
                      {status === "submitting" ? "Sending Message..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
