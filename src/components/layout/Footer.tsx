// src/components/layout/Footer.tsx
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070B14]">
      {/* subtle top line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />

      {/* background glows (contained) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-120px] h-[320px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-[-160px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-emerald-400/8 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070B14]/35 to-[#070B14]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* Left */}
          <div>
            <div className="text-sm font-semibold text-white/85">{site.name}</div>
            <div className="mt-2 text-sm text-white/60">
              Software & digital systems — built for reliability, speed, and scale.
            </div>

            <div className="mt-4 text-xs text-white/45">
              Sola Technical Solutions LLC — Software & Digital Systems Company
            </div>
          </div>

          {/* Middle */}
          <div className="md:justify-self-center">
            <div className="text-xs font-semibold tracking-[0.16em] uppercase text-white/45">
              Explore
            </div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="#services" className="text-white/70 transition hover:text-white">
                Services
              </Link>
              <Link href="#products" className="text-white/70 transition hover:text-white">
                Products
              </Link>
              <Link href="#contact" className="text-white/70 transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="md:justify-self-end md:text-right">
            <div className="text-xs font-semibold tracking-[0.16em] uppercase text-white/45">
              Built with
            </div>
            <div className="mt-3 text-sm text-white/60">
              Next.js • React • TypeScript
            </div>

            <div className="mt-6 text-sm text-white/60">
              © {year} {site.name}. All rights reserved.
            </div>
          </div>
        </div>

        {/* bottom divider (optional) */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </footer>
  );
}
