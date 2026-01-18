// src/components/sections/Products.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Boxes, Building2, Sparkles, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Product = {
  title: string;
  subtitle: string;
  desc: string;
  bullets: string[];
  Icon: LucideIcon;
  badge: string;
  accent: string;
  ring: string;
  dot: string;
  image?: string | null;
  href?: string;
  secondaryHref?: string;
};

const leaders: Product[] = [
  {
    title: "MyBizNeed",
    subtitle: "BUSINESS MANAGEMENT PLATFORM",
    desc: "A production-grade operating system for service businesses — built to manage real operations at scale.",
    bullets: ["Estimates & invoices", "Scheduling & job tracking", "Multi-org ready"],
    Icon: Boxes,
    badge: "Flagship • Live",
    accent: "from-blue-500/30 via-sky-400/12 to-transparent",
    ring: "group-hover:ring-blue-400/30",
    dot: "bg-blue-400/70",
    image: "/products/MyBizNeed.png",
    href: "#mybizneed",
    secondaryHref: "#mybizneed-case-study",
  },
  {
    title: "Bay360 Virtual Tours",
    subtitle: "REAL ESTATE MEDIA & 360° TOURS",
    desc: "A full-stack media experience combining immersive 360° tours, drone media, and clean web-ready delivery.",
    bullets: ["360° tours", "Drone media", "Web-ready delivery"],
    Icon: Sparkles,
    badge: "Live Product",
    accent: "from-cyan-500/26 via-sky-400/12 to-transparent",
    ring: "group-hover:ring-cyan-300/25",
    dot: "bg-cyan-300/70",
    image: "/products/Bay360.png",
    href: "#bay360",
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

function LeaderCard(p: Product) {
  const { title, subtitle, desc, bullets, Icon, badge, accent, ring, dot, image, href, secondaryHref } = p;

  const primaryCta = title === "MyBizNeed" ? "View platform" : "Explore samples";

  return (
    <motion.div
      variants={fadeUp}
      className={[
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur",
        "transition-all duration-200 shadow-[0_18px_50px_rgba(0,0,0,0.45)]",
        // ✅ iOS/mobile-friendly: hover effects only on desktop
        "md:hover:-translate-y-1 md:hover:bg-white/[0.055] md:hover:shadow-[0_24px_70px_rgba(0,0,0,0.55)]",
      ].join(" ")}
    >
      {/* Accent */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-300 ${ring}`}
      />

      <div className="relative grid h-full grid-rows-[auto_auto_auto_1fr_auto]">
        {/* Row 1 */}
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Icon className="h-5 w-5 text-white/85" />
            </span>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-white">{title}</div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55 line-clamp-2">
                {subtitle}
              </div>

              {/* ✅ trust micro-line (enterprise feel) */}
              <div className="mt-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/45">
                Designed • Built • Operated by Sola Technical Solutions
              </div>
            </div>
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
            {badge}
          </span>
        </div>

        {/* Row 2 */}
        <p
          className="mt-5 text-sm leading-relaxed text-white/65 h-[72px] overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {desc}
        </p>

        {/* Row 3 */}
        <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <div className="relative h-[210px] w-full">
            {image ? (
              <Image
                src={image}
                alt={`${title} preview`}
                fill
                className="object-cover opacity-95"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={title === "MyBizNeed"}
              />
            ) : (
              <div className="h-full w-full bg-[radial-gradient(60%_120%_at_20%_10%,rgba(29,78,216,0.35)_0%,rgba(22,163,74,0.10)_45%,rgba(0,0,0,0)_70%)]" />
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Row 4 */}
        <ul className="mt-6 space-y-2 text-sm text-white/70 min-h-[78px]">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        {/* Row 5 */}
        <div className="mt-7 flex items-center justify-between">
          <Link
            href={href ?? "#contact"}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white"
          >
            {primaryCta}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          {title === "MyBizNeed" && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55 hover:text-white"
            >
              View case study
            </Link>
          ) : (
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-white/35">
              Platform
            </span>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

export function Products() {
  return (
    <section id="products" className="relative scroll-mt-24 overflow-hidden pt-20 pb-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#070B14]" />
        <div className="absolute left-1/2 top-[-180px] h-[680px] w-[980px] -translate-x-1/2 rounded-full bg-blue-600/18 blur-3xl" />
        <div className="absolute right-[-220px] bottom-[-180px] h-[720px] w-[720px] rounded-full bg-cyan-400/10 blur-3xl" />
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
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-white/70">
            Products
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Products built & operated by us
          </h2>

          <p className="mt-4 text-white/65">
            Real-world platforms designed, built, and maintained by Sola Technical Solutions — plus custom software
            tailored to your workflows and growth goals.
          </p>

          {/* ✅ extra trust line (small, but very enterprise) */}
          <p className="mt-3 text-sm text-white/50">
            Same standards we use internally: performance, security, clean UX, and production deployment.
          </p>
        </motion.div>

        {/* Leaders grid (2 only) */}
        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {leaders.map((p) => (
            <LeaderCard key={p.title} {...p} />
          ))}
        </motion.div>

        {/* Custom banner (service, not product) */}
        <motion.div
          className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/14 via-blue-500/8 to-transparent" />

            <div className="relative grid gap-6 p-7 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Building2 className="h-5 w-5 text-white/85" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white">Custom Projects</div>
                      <div className="mt-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55">
                        SOFTWARE, AUTOMATION & INTEGRATIONS
                      </div>
                      <div className="mt-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/45">
                        Built to match your workflow
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
                    Custom Build
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  <span className="font-semibold text-white/85">Want something built for your business?</span>{" "}
                  We apply the same standards behind our own platforms to deliver custom software — from internal tools
                  to full products.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                  >
                    Get a custom solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>

                  {/* ✅ FIXED anchor */}
                  <Link
                    href="#howwework"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
                  >
                    How we work
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                <div className="relative h-[220px] w-full">
                  <Image
                    src="/hero_product.png"
                    alt="Custom projects preview"
                    fill
                    className="object-cover opacity-95"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/45 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
