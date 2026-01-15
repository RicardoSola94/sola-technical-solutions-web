// src/components/sections/Services.tsx
"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Code2, Smartphone, Camera, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    desc: "Production-ready systems tailored to your operations — from internal tools to full platforms.",
    bullets: ["Internal tools & dashboards", "APIs & integrations", "Admin panels & workflows"],
    Icon: Code2,
    accent: "from-blue-600/12 via-sky-500/8 to-transparent",
    dot: "bg-blue-600/70",
  },
  {
    title: "Web & Mobile Applications",
    desc: "Fast, modern experiences across devices — engineered for UX, performance, and maintainability.",
    bullets: ["Next.js + TypeScript", "Flutter mobile apps", "Design systems"],
    Icon: Smartphone,
    accent: "from-indigo-600/12 via-blue-600/8 to-transparent",
    dot: "bg-indigo-600/70",
  },
  {
    title: "Media & Virtual Tours",
    desc: "High-impact visuals for real estate & brands — photography, video, and immersive 360° experiences.",
    bullets: ["Bay360 virtual tours", "Drone media", "Web-ready delivery"],
    Icon: Camera,
    accent: "from-cyan-600/12 via-sky-500/8 to-transparent",
    dot: "bg-cyan-600/70",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-[#F7FAFF] pt-16 pb-20"
    >
      {/* Dark -> Light bridge (smooth transition from Hero) */}
      <div
        className="pointer-events-none absolute -top-24 left-0 right-0 h-24"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14] to-[#F7FAFF]" />
      </div>

      {/* Top curve (softer, more premium) */}
      <div
        className="pointer-events-none absolute -top-10 left-0 right-0 h-10 bg-[#F7FAFF] [clip-path:ellipse(140%_100%_at_50%_0%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-6 left-0 right-0 h-10 bg-[#F7FAFF]/70 blur-xl"
        aria-hidden="true"
      />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7FAFF] via-white to-slate-50" />
        <div className="absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
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
            Services
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Services built for serious growth
          </h2>

          <p className="mt-4 text-slate-600">
            End-to-end delivery — strategy, design, development, and launch.
            Focused on outcomes: reliability, speed, and clarity.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map(({ title, desc, bullets, Icon, accent, dot }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
            >
              {/* accent wash */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* hover ring (neutral, premium) */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-300 group-hover:ring-slate-900/10" />

              <div className="relative">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition group-hover:border-blue-200">
                    <Icon className="h-5 w-5 text-slate-900" />
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-slate-900 transition hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7FAFF]"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
}
