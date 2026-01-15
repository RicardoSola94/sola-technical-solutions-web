// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site";

type SectionId = "services" | "products" | "industries" | "testimonials" | "contact";

export function Navbar() {
  const items = useMemo(
    () =>
      site.nav
        .map((n) => ({
          label: n.label,
          href: n.href,
          id: n.href.replace("#", "") as SectionId,
        }))
        .filter((x) => x.href.startsWith("#")),
    []
  );

  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const ids = items.map((x) => x.id);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        const next = (visible?.target as HTMLElement | undefined)?.id as SectionId | undefined;
        if (next && next !== active) setActive(next);
      },
      {
        root: null,
        threshold: [0.15, 0.35, 0.55],
        rootMargin: "-18% 0px -62% 0px",
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, active]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/65 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] text-white/90 uppercase hover:text-white transition"
        >
          Sola <span className="text-white/70">Technical</span>{" "}
          <span className="text-white/90">Solutions</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <a
                key={it.href}
                href={it.href}
                className="group relative text-xs font-medium tracking-[0.16em] uppercase text-white/70 hover:text-white transition-colors"
              >
                <span>{it.label}</span>
                <span
                  className={[
                    "absolute left-0 -bottom-2 h-[2px] w-full origin-center",
                    "bg-gradient-to-r from-blue-400/0 via-blue-400/80 to-blue-400/0",
                    "transition-all duration-300 ease-out",
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-75 group-hover:opacity-80 group-hover:scale-x-100",
                  ].join(" ")}
                />
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase text-white
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
        >
          <span className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur transition group-hover:bg-white/12" />
          <span className="absolute -inset-0.5 rounded-full bg-blue-500/25 blur-md opacity-70 transition group-hover:opacity-95" />
          <span className="relative transition-transform duration-200 ease-out group-hover:-translate-y-[1px]">
            Get a Quote
          </span>
        </a>
      </div>
    </header>
  );
}
