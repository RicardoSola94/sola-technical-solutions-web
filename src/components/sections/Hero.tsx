// src/components/sections/Hero.tsx
"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Base */}
        <div className="absolute inset-0 bg-[#070B14]" />

        {/* Cinematic glows */}
        <div className="absolute right-[-140px] top-[-120px] h-[620px] w-[620px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-[120px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-blue-600/18 blur-3xl" />

        {/* Image (no distortion) */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-[length:min(1100px,55vw)] md:bg-[length:min(1300px,55vw)]"
          style={{ backgroundImage: "url('/hero-globe.webp')" }}
        />

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/72 to-[#070B14]/15" />

        {/* Hero → White transition */}
        <div className="absolute bottom-0 left-0 right-0 h-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white [clip-path:ellipse(120%_100%_at_50%_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-white/60 blur-xl" />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-28">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-white/80"
          >
            Custom Software • SaaS • Automation
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.06 }}
            className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            <span className="block drop-shadow-[0_2px_18px_rgba(37,99,235,0.30)]">
              We build custom software
            </span>
            <span className="block text-white/90 sm:text-5xl">
              that scales your business operations.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            From internal tools to full platforms, we design, develop, and launch
            production-ready systems — web, mobile, automation, and integrations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
            className="mt-6 text-sm font-semibold tracking-[0.12em] uppercase text-white/60"
          >
            Strategy • Engineering • Long-term Support
          </motion.div>

         {/* CTAs */}
<motion.div
  variants={fadeUp}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
  className="mt-10 flex flex-col gap-4 sm:flex-row"
>
  {/* Primary CTA */}
  <motion.div
    className="inline-flex rounded-full"
    whileHover={{ scale: 1.04, y: -1, boxShadow: "0 18px 46px rgba(37,99,235,0.45)" }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
  >
    <Link
      href="#contact"
      className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(37,99,235,0.35)] transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
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
</motion.div>

{/* Trust layer */}
<motion.div
  variants={fadeUp}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.30 }}
  className="mt-10"
>
  <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
    Trusted by small businesses, real estate teams, and service companies across the U.S.
  </div>

  <div className="mt-4 flex flex-wrap items-center gap-3">
    {["Web Apps", "Mobile Apps", "SaaS Platforms", "Automation", "Media Systems"].map((t) => (
      <span
        key={t}
        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
      >
        {t}
      </span>
    ))}
  </div>
</motion.div>




          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.28 }}
            className="mt-10"
          >
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
              Trusted for modern builds across:
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              {["Small Businesses", "Service Companies", "Real Estate Teams", "Creators & Media"].map(
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
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.34 }}
            className="mt-10 flex items-center gap-4 text-xs font-medium tracking-[0.14em] uppercase text-white/55"
          >
            <span>Web & Mobile</span>
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span>SaaS Platforms</span>
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span>Automation & Integrations</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
