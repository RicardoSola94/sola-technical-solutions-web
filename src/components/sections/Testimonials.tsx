// src/components/sections/Testimonials.tsx
"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

type T = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const testimonials: T[] = [
  {
    quote:
      "They moved fast, communicated clearly, and shipped a clean product that actually matches our workflow.",
    name: "Operations Lead",
    role: "Service Business",
    company: "Tampa, FL",
  },
  {
    quote:
      "Strong engineering. The system feels stable, the UI is polished, and the delivery was professional.",
    name: "Founder",
    role: "Local Company",
    company: "Florida",
  },
  {
    quote:
      "We needed automation + integrations, and they delivered exactly what was promised — no chaos, no surprises.",
    name: "Manager",
    role: "Operations",
    company: "US",
  },
  {
    quote:
      "Great structure: discovery, scope, execution. You can tell they build like an enterprise team.",
    name: "Owner",
    role: "Small Business",
    company: "US",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden py-20"
    >
      {/* dark background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[#070B14]" />
        <div className="absolute left-1/2 top-[-180px] h-[680px] w-[980px] -translate-x-1/2 rounded-full bg-blue-600/14 blur-3xl" />
        <div className="absolute right-[-220px] bottom-[-240px] h-[720px] w-[720px] rounded-full bg-cyan-400/10 blur-3xl" />
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
            Testimonials
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Trusted delivery — clean, fast, reliable
          </h2>

          <p className="mt-4 text-white/65">
            We focus on outcomes: clarity, execution, and systems that don’t break under real usage.
          </p>
        </motion.div>

        {/* Trust strip (no cards) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur sm:grid-cols-3"
        >
          <div className="text-sm text-white/70">
            <span className="font-semibold text-white">Production-ready</span> engineering
          </div>
          <div className="text-sm text-white/70">
            <span className="font-semibold text-white">Clear scope</span> + timeline control
          </div>
          <div className="text-sm text-white/70">
            <span className="font-semibold text-white">Long-term</span> support mindset
          </div>
        </motion.div>

        {/* Quote wall (NO cards) */}
        <motion.div
          className="mt-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid gap-x-12 md:grid-cols-2">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={[
                  "group relative py-7",
                  "border-t border-white/10",
                  "md:odd:pr-6 md:even:pl-6",
                ].join(" ")}
              >
                {/* subtle hover row */}
                <div className="absolute inset-x-0 -inset-y-2 rounded-2xl bg-white/[0.03] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Quote className="h-4 w-4 text-white/80" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm leading-relaxed text-white/70">
                        “{t.quote}”
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                        <span className="font-semibold text-white/90">{t.name}</span>
                        <span className="text-white/35">•</span>
                        <span className="text-white/60">{t.role}</span>
                        <span className="text-white/35">•</span>
                        <span className="text-white/55">{t.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* micro divider */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(37,99,235,0.35)] transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
          >
            Talk to us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
