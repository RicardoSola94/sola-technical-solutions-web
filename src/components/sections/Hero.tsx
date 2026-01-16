// src/components/sections/Hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function GlowDot() {
  return <span className="h-1 w-1 rounded-full bg-white/35" aria-hidden="true" />;
}

export function Hero() {
  return (
    <section className="relative w-full max-w-full overflow-x-clip overflow-y-visible">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 w-full max-w-full overflow-x-clip"
        aria-hidden="true"
      >
        {/* Base */}
        <div className="absolute inset-0 bg-[#070B14]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(circle at 30% 30%, black 0%, transparent 60%)",
            WebkitMaskImage: "radial-gradient(circle at 30% 30%, black 0%, transparent 60%)",
          }}
        />

        {/* Cinematic glows (use translate instead of negative right to avoid overflow with blur) */}
        <div className="absolute right-0 top-[-140px] translate-x-[160px] h-[640px] w-[640px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-[-260px] translate-x-[-140px] h-[540px] w-[540px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-blue-600/18 blur-3xl" />

        {/* Hero image */}
        <div
  className="absolute inset-0 bg-no-repeat bg-[position:110%_center] bg-[length:min(980px,60vw)] md:bg-[length:min(1200px,58vw)]"
  style={{ backgroundImage: "url('/hero-globe.webp')" }}
/>


        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/72 to-[#070B14]/15" />

        {/* Bottom transition into white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white" />
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-white [clip-path:ellipse(120%_100%_at_50%_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-white/60 blur-xl" />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Left: copy */}
          <div className="max-w-xl">
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex max-w-full items-center whitespace-normal break-words text-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-white/80"
            >
              Custom Software • SaaS • Automation
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.06 }}
              className="mt-7 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
            >
              <span className="block drop-shadow-[0_2px_18px_rgba(37,99,235,0.30)]">
                We build custom software
              </span>
              <span className="mt-2 block text-white/90 sm:text-5xl">
                that scales business operations.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              From internal tools to full platforms, we design, develop, and launch production-ready
              systems — web, mobile, automation, and integrations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
              className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.12em] uppercase text-white/55"
            >
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                Strategy
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                Engineering
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                Long-term Support
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {/* Primary CTA */}
              <motion.div
                className="inline-flex rounded-full"
                whileHover={{ scale: 1.04, y: -1, boxShadow: "0 18px 46px rgba(37,99,235,0.42)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(37,99,235,0.30)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
                >
                  Get a Quote
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                className="inline-flex rounded-full"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
                >
                  View Services
                </Link>
              </motion.div>

              {/* Micro-link */}
              <Link
                href="#products"
                className="text-sm font-semibold text-white/70 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-white/50 sm:ml-1"
              >
                See products
              </Link>
            </motion.div>

            {/* Trust layer */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.30 }}
              className="mt-9"
            >
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                Trusted for modern builds across the U.S.
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                {["Web Apps", "Mobile Apps", "SaaS Platforms", "Automation", "Integrations"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-medium tracking-[0.14em] uppercase text-white/55">
                <span>Web & Mobile</span>
                <GlowDot />
                <span>SaaS Platforms</span>
                <GlowDot />
                <span>Automation</span>
              </div>
            </motion.div>
          </div>

          {/* Right: visual anchor (desktop) */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.14 }}
            className="relative hidden lg:block pb-10"
          >
            <div className="relative overflow-visible rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/85">Delivery Preview</div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  <span className="text-xs font-semibold text-white/55">Production-ready</span>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                    Workflow
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-blue-500/70 to-emerald-500/70" />
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white/80">
                    Automations + Integrations
                  </div>
                  <div className="mt-1 text-xs text-white/60">
                    Payments • Scheduling • CRM • Dashboards
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                      Stack
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white/80">
                      Next.js • APIs
                    </div>
                    <div className="mt-1 text-xs text-white/60">TypeScript • Deploy</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                      Support
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white/80">
                      Long-term
                    </div>
                    <div className="mt-1 text-xs text-white/60">Security • Monitoring</div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-12 -bottom-16 h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl" />
            </div>

            <div className="absolute -bottom-8 left-10 z-20 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/70 shadow-[0_18px_46px_rgba(0,0,0,0.35)] backdrop-blur">
  Fast • Clean • Scalable
</div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
