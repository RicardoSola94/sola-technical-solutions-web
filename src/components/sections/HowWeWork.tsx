// src/components/sections/HowWeWork.tsx
"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Search, Layout, Code2, LifeBuoy, ArrowRight } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We map your workflow, clarify goals, and define scope, timeline, and success metrics.",
    Icon: Search,
    dot: "bg-blue-600/80",
  },
  {
    title: "Design & Architecture",
    desc: "UX + system design: data model, integrations, user flows, and scalable architecture decisions.",
    Icon: Layout,
    dot: "bg-indigo-600/80",
  },
  {
    title: "Development & Launch",
    desc: "We build, test, and ship — with clean code, performance, and a smooth deployment process.",
    Icon: Code2,
    dot: "bg-cyan-600/80",
  },
  {
    title: "Support & Scaling",
    desc: "Ongoing improvements, monitoring, new features, and scaling as your business grows.",
    Icon: LifeBuoy,
    dot: "bg-emerald-600/80",
  },
];

export function HowWeWork() {
  return (
    <section
      id="howwework"
      className="relative scroll-mt-24 overflow-hidden bg-slate-100 py-20"
    >
      {/* Light → clean bridge (no glass) */}
      <div
        className="pointer-events-none absolute -top-20 left-0 right-0 h-20"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7FAFF] to-transparent" />
      </div>

      {/* subtle background (lighter, less “samey”) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/10" />
        <div className="absolute -top-28 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-28 right-[-160px] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_18%_12%,rgba(29,78,216,0.07)_0%,rgba(255,255,255,0)_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-slate-600 shadow-sm">
            Process
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            How we work
          </h2>

          <p className="mt-4 text-slate-600">
            A structured process that reduces risk, keeps timelines clear, and delivers quality outcomes.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative mt-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical rail (protagonist) */}
          <div
            className="pointer-events-none absolute left-[28px] top-1 hidden h-[calc(100%-4px)] w-px md:block"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-300/80 via-slate-300/50 to-transparent" />
          </div>

          <div className="space-y-5">
            {steps.map(({ title, desc, Icon, dot }, idx) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative grid gap-4 md:grid-cols-[64px_1fr]"
              >
                {/* Left rail node */}
                <div className="relative hidden md:flex md:items-start md:justify-center">
                  <div className="relative mt-1 flex h-12 w-12 items-center justify-center">
                    {/* node plate (flat) */}
                    <span className="absolute inset-0 rounded-2xl border border-slate-200 bg-white transition group-hover:border-slate-300" />
                    {/* small dot on rail */}
                    <span
                      className={[
                        "absolute -left-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full",
                        dot,
                      ].join(" ")}
                    />
                    <Icon className="relative h-5 w-5 text-slate-900" />
                  </div>
                </div>

                {/* Content row (flat, rail-driven) */}
                <div
                  className={[
                    "relative rounded-2xl border border-slate-200 bg-white/85 p-6",
                    "shadow-[0_6px_18px_rgba(15,23,42,0.05)]",
                    "transition-all duration-200",
                    "hover:-translate-y-0.5 hover:border-slate-300",
                  ].join(" ")}
                >
                  {/* top hairline accent (subtle) */}
                  <div
                    className={[
                      "pointer-events-none absolute inset-x-6 top-0 h-px",
                      "bg-gradient-to-r from-transparent via-slate-200 to-transparent",
                    ].join(" ")}
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        {/* Mobile icon */}
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm md:hidden">
                          <Icon className="h-5 w-5 text-slate-900" />
                        </span>

                        <h3 className="truncate text-lg font-semibold text-slate-900">
                          {title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {desc}
                      </p>

                      {/* Micro outcome line (keeps it “process”) */}
                      <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                        <span className="font-medium">Clear deliverables, clean execution</span>
                      </div>
                    </div>

                    {/* Step label (quiet but pro) */}
                    <div className="hidden shrink-0 text-right md:block">
                      <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400">
                        Step
                      </div>
                      <div className="mt-1 text-3xl font-semibold text-slate-900/85">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(37,99,235,0.25)] transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7FAFF]"
          >
            Request a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7FAFF]"
          >
            View Services
          </Link>
        </motion.div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
}
