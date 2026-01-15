// src/components/sections/WhatWeBuild.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import {
  LayoutDashboard,
  Smartphone,
  Layers,
  Workflow,
  ShieldCheck,
  Camera,
} from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const items = [
  {
    title: "Web Apps & Dashboards",
    desc: "Modern web systems to manage operations, analytics, and workflows.",
    Icon: LayoutDashboard,
    dot: "bg-blue-500/80",
  },
  {
    title: "Mobile Applications",
    desc: "Fast, polished mobile experiences for teams and customers.",
    Icon: Smartphone,
    dot: "bg-indigo-500/80",
  },
  {
    title: "SaaS Platforms",
    desc: "Multi-tenant platforms built to scale with reliability and clarity.",
    Icon: Layers,
    dot: "bg-cyan-500/80",
  },
  {
    title: "Automation & Integrations",
    desc: "Connect tools, reduce manual work, and automate business processes.",
    Icon: Workflow,
    dot: "bg-emerald-500/80",
  },
  {
    title: "Security & Best Practices",
    desc: "Auth, roles, data protection, and production-grade architecture.",
    Icon: ShieldCheck,
    dot: "bg-slate-300/70",
  },
  {
    title: "Media Systems & Delivery",
    desc: "Photography / 360 tour workflows with clean web integration.",
    Icon: Camera,
    dot: "bg-sky-500/80",
  },
];

export function WhatWeBuild() {
  return (
    <section
      id="what-we-build"
      className="relative scroll-mt-24 overflow-hidden py-14"
    >
      {/* background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#070B14]" />
        <div className="absolute left-1/2 top-[-180px] h-[680px] w-[980px] -translate-x-1/2 rounded-full bg-blue-600/14 blur-3xl" />
        <div className="absolute right-[-220px] bottom-[-240px] h-[720px] w-[720px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_20%_20%,rgba(29,78,216,0.14)_0%,rgba(7,11,20,0)_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070B14]/35 to-[#070B14]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-white/70">
            What we build
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Systems designed for real operations
          </h2>

          <p className="mt-3 text-white/65">
            End-to-end software solutions — built for speed, reliability, and long-term scalability.
          </p>
        </motion.div>

        {/* LIST / SIMPLE GRID (no cards) */}
        <motion.div
          className="mt-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid gap-x-10 md:grid-cols-2">
            {items.map(({ title, desc, Icon, dot }, idx) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className={[
                  "group relative py-6",
                  // consistent row separators
                  "border-t border-white/10",
                  // add bottom border to BOTH columns' last row
                  idx >= items.length - 2 ? "border-b border-white/10" : "",
                ].join(" ")}
              >
                {/* row hover (NOT a card) */}
                <div className="pointer-events-none absolute inset-x-0 -inset-y-1 rounded-2xl bg-white/[0.02] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  {/* icon */}
                  <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-white/85" />
                  </div>

                  {/* content */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                      <h3 className="text-base font-semibold text-white">
                        {title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* bottom hairline */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
