// src/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: wire to your endpoint (Resend, Formspree, Supabase, etc.)
    setTimeout(() => setStatus("sent"), 650);
  }

  return (
    <section id="contact" className="relative scroll-mt-24 bg-[#F7FAFF] py-20">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7FAFF] via-white to-slate-50" />
        <div className="absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-[-140px] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid gap-10 lg:grid-cols-2 lg:items-start"
        >
          {/* Left */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-slate-600 shadow-sm">
              Contact
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Let’s build something serious.
            </h2>

            <p className="mt-4 text-slate-600">
              Tell us what you’re trying to build — we’ll reply with next steps, timeline expectations,
              and a clear plan.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Mail className="h-5 w-5 text-slate-900" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Fast response</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Usually within 24 hours on business days.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Clock className="h-5 w-5 text-slate-900" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Clear timelines</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Scope first, then delivery milestones — no guesswork.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-slate-900" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Production mindset</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Security, reliability, and maintainability from day one.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right (Form) */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_90%_at_10%_0%,rgba(29,78,216,0.10)_0%,rgba(255,255,255,0)_60%)]" />

            <form className="relative space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold tracking-wide text-slate-600">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold tracking-wide text-slate-600">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold tracking-wide text-slate-600">
                  What are you building?
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10"
                  placeholder="Briefly describe your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(37,99,235,0.25)] transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "idle" && (
                  <>
                    Send request <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Sent ✅"}
              </button>

              <p className="text-xs text-slate-500">
                By submitting, you agree to be contacted about your request.
              </p>
            </form>
          </div>
        </motion.div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
}
