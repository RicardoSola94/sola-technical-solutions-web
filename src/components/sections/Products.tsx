// src/components/sections/Products.tsx
"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Boxes, Building2, Sparkles, ArrowRight } from "lucide-react";

const products = [
  {
    title: "MyBizNeed",
    subtitle: "BUSINESS MANAGEMENT PLATFORM",
    desc: "A modern operating system for service businesses — customers, jobs, estimates, invoices, and automation.",
    bullets: ["Estimates & invoices", "Scheduling & job tracking", "Multi-org ready"],
    Icon: Boxes,
    badge: "Flagship",
    accent: "from-blue-500/25 via-sky-400/10 to-transparent",
    ring: "group-hover:ring-blue-400/30",
    dot: "bg-blue-400/70",
  },
  {
    title: "Bay360 Virtual Tours",
    subtitle: "REAL ESTATE MEDIA & 360° TOURS",
    desc: "High-impact photography, video, and immersive 360° tours with clean web integration.",
    bullets: ["360° tours", "Drone media", "Web-ready delivery"],
    Icon: Sparkles,
    badge: "Premium Media",
    accent: "from-cyan-500/22 via-sky-400/10 to-transparent",
    ring: "group-hover:ring-cyan-300/25",
    dot: "bg-cyan-300/70",
  },
  {
    title: "Custom Projects",
    subtitle: "SOFTWARE & AUTOMATION",
    desc: "From internal tools to full platforms — designed and built specifically for your operations.",
    bullets: ["Dashboards & admin panels", "APIs & integrations", "Automation workflows"],
    Icon: Building2,
    badge: "B2B Delivery",
    accent: "from-indigo-500/22 via-blue-500/10 to-transparent",
    ring: "group-hover:ring-indigo-300/25",
    dot: "bg-indigo-300/70",
  },
];

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

export function Products() {
  return (
    <section
      id="products"
      className="relative scroll-mt-24 overflow-hidden pt-20 pb-14"
    >
      {/* Light → Dark bridge (cleaner + curved + blur) */}
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3F7FF] via-[#F3F7FF]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-[#070B14] [clip-path:ellipse(140%_100%_at_50%_100%)]" />
        <div className="absolute inset-x-0 bottom-[-10px] h-16 bg-[#070B14]/55 blur-2xl" />
      </div>

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[#070B14]" />
        <div className="absolute left-1/2 top-[-180px] h-[680px] w-[980px] -translate-x-1/2 rounded-full bg-blue-600/18 blur-3xl" />
        <div className="absolute right-[-220px] bottom-[-180px] h-[720px] w-[720px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_20%_20%,rgba(29,78,216,0.18)_0%,rgba(7,11,20,0)_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070B14]/40 to-[#070B14]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-white/70">
            Products
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built products & custom platforms
          </h2>

          <p className="mt-4 text-white/65">
            We build and operate our own platforms — and deliver custom solutions
            for businesses that need reliability, speed, and scale.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(37,99,235,0.35)] transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
            >
              Get a quote
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
            >
              Explore services
            </Link>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map(({ title, subtitle, desc, bullets, Icon, badge, accent, ring, dot }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.055] shadow-[0_18px_50px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
            >
              {/* gradient wash */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              {/* ring glow */}
              <div className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-300 ${ring}`} />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 opacity-60" />

              {/* top sheen */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-white/85" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{title}</div>
                      <div className="mt-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55">
                        {subtitle}
                      </div>
                    </div>
                  </div>

                  {/* badge (more premium) */}
                  <span className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70 backdrop-blur">
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-60" />
                    <span className="relative">{badge}</span>
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-white/65">{desc}</p>

                <ul className="mt-6 space-y-2 text-sm text-white/70">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>

                  {badge === "Flagship" ? (
                    <Link
                      href="#mybizneed-case-study"
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/55 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
                    >
                      View case study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  ) : (
                    <div className="text-xs font-medium tracking-[0.14em] uppercase text-white/35">
                      Platform
                    </div>
                  )}
                </div>
              </div>

              {/* bottom sheen */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* divider to footer (tighter + cleaner) */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
