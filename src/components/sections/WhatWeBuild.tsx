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

const stacks = [
  { label: "Frontend", value: "Next.js • TypeScript • Design System" },
  { label: "Mobile", value: "Flutter • Riverpod • Native integrations" },
  { label: "Backend", value: "APIs • Postgres • Edge Functions" },
  { label: "Integrations", value: "Payments • Maps • CRM • Webhooks" },
  { label: "Security", value: "Auth • RLS • Audits • Least privilege" },
  { label: "Delivery", value: "CI/CD • Observability • Versioning" },
];

const outcomes = [
  "Clear workflows, fewer manual steps",
  "Fast performance + stable releases",
  "Scales with your team and data",
  "Secure by design (roles, policies)",
];

export function WhatWeBuild() {
  return (
    <section
      id="what-we-build"
      className="relative scroll-mt-24 overflow-hidden py-14 sm:py-16"
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
            End-to-end software solutions — built for speed, reliability, and
            long-term scalability.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* LEFT: Capabilities */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-semibold text-white/80">
                Capabilities
              </div>
              <div className="hidden sm:block text-xs text-white/50">
                Product-grade engineering • Clean UX • Scalable foundations
              </div>
            </div>

            <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-1">
              {items.map(({ title, desc, Icon, dot }, idx) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className={[
                    "group relative py-6",
                    "border-t border-white/10",
                    idx === items.length - 1 ? "border-b border-white/10" : "",
                  ].join(" ")}
                >
                  <div className="pointer-events-none absolute inset-x-0 -inset-y-1 rounded-2xl bg-white/[0.03] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">
                    <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-white/85" />
                    </div>

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

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* RIGHT: System Snapshot */}
          <motion.aside variants={fadeUp} className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">
                    System snapshot
                  </div>
                  <p className="mt-1 text-sm text-white/60">
                    A clear view of how we think: layers, integrations, security,
                    and delivery.
                  </p>
                </div>
                <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-white/65">
                  Architecture
                </div>
              </div>

              {/* Abstract diagram */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#070B14]/40 p-5">
                <div className="grid gap-3">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-blue-400/80" />
                      <span className="text-sm font-semibold text-white/90">
                        Interfaces
                      </span>
                    </div>
                    <span className="text-xs text-white/55">
                      Web • Mobile • Admin
                    </span>
                  </div>

                  <div className="mx-auto h-6 w-px bg-gradient-to-b from-white/20 to-transparent" />

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                      <span className="text-sm font-semibold text-white/90">
                        Services
                      </span>
                    </div>
                    <span className="text-xs text-white/55">
                      APIs • Workflows • Jobs
                    </span>
                  </div>

                  <div className="mx-auto h-6 w-px bg-gradient-to-b from-white/20 to-transparent" />

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-sky-300/80" />
                      <span className="text-sm font-semibold text-white/90">
                        Data & Security
                      </span>
                    </div>
                    <span className="text-xs text-white/55">
                      Postgres • RLS • Audit
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Payments", "Maps", "Email", "Webhooks", "Storage", "Analytics"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/65"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Stack */}
              <div className="mt-6">
                <div className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                  Build layers
                </div>
                <div className="mt-3 space-y-3">
                  {stacks.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="text-sm font-semibold text-white/85">
                        {s.label}
                      </div>
                      <div className="text-sm text-white/60 text-right">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                  Outcomes
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/65">
                  {outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/35" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(60%_60%_at_30%_10%,rgba(29,78,216,0.25)_0%,rgba(7,11,20,0)_60%)]"
              aria-hidden="true"
            />
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
