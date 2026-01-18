// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/lib/site";
import { Menu, X } from "lucide-react";

type SectionId = "top" | "services" | "howwework" | "products" | "testimonials" | "contact";

function BodyPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // hydration-safe
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const safeActive = mounted ? active : null;
  const safeScrolled = mounted ? scrolled : false;

  // lock to prevent observer overriding active during smooth scroll
  const lockActiveRef = useRef(false);

  // ✅ helper: navigate with lock + smooth scroll
  const goTo = (id: SectionId) => {
    setOpen(false);
    setActive(id);

    lockActiveRef.current = true;

    // ✅ let mobile sheet close before scrolling
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    });

    // ✅ longer lock (420ms is too short for long pages)
    window.setTimeout(() => {
      lockActiveRef.current = false;
    }, 900);
  };

  // active section observer
  useEffect(() => {
    if (!mounted) return;

    const ids = Array.from(new Set<SectionId>(["top", ...items.map((x) => x.id)]));

    const obs = new IntersectionObserver(
      (entries) => {
        if (lockActiveRef.current) return;

        // ✅ when near the top, force "top"
        if (window.scrollY < 80) {
          setActive("top");
          return;
        }

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        const next = (visible?.target as HTMLElement | undefined)?.id as SectionId | undefined;
        if (next) setActive(next);
      },
      { threshold: [0.15, 0.35, 0.55], rootMargin: "-18% 0px -62% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [items, mounted]);

  // scroll state
  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  // lock body scroll when menu open
  useEffect(() => {
    if (!mounted) return;
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, mounted]);

  // ESC closes
  useEffect(() => {
    if (!mounted) return;
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, mounted]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full",
          "border-b",
          safeScrolled
            ? "border-white/12 bg-[#070B14]/75 shadow-[0_16px_50px_rgba(0,0,0,0.35)]"
            : "border-white/10 bg-[#070B14]/45",
          "backdrop-blur supports-[backdrop-filter]:backdrop-blur",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              goTo("top");
            }}
            className="group text-sm font-bold tracking-[0.18em] text-white uppercase transition hover:text-white"
            aria-label="Sola Technical Solutions home"
          >
            Sola <span className="text-white/70">Technical</span>{" "}
            <span className="text-white/90">Solutions</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
            {items.map((it) => {
              const isActive = safeActive === it.id;
              return (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={(e) => {
                    e.preventDefault(); // ✅ prevent default jump
                    goTo(it.id as SectionId);
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "group relative rounded-full px-4 py-2",
                    "text-xs font-medium tracking-[0.16em] uppercase transition-colors",
                    isActive ? "text-white" : "text-white/70 hover:text-white",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "absolute inset-0 rounded-full transition",
                      isActive ? "bg-white/8 ring-1 ring-white/12" : "bg-transparent",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                  <span
                    className={[
                      "absolute left-4 right-4 -bottom-0.5 h-[2px] origin-center",
                      "bg-gradient-to-r from-blue-400/0 via-emerald-400/75 to-blue-400/0",
                      "transition-all duration-300 ease-out",
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-75 group-hover:opacity-80 group-hover:scale-x-100",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                  <span className="relative">{it.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                goTo("contact");
              }}
              className={[
                "relative hidden md:inline-flex items-center justify-center",
                "rounded-full px-4 py-2",
                "text-xs font-semibold tracking-[0.14em] uppercase text-white",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]",
              ].join(" ")}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/70 to-emerald-600/70 opacity-80 transition hover:opacity-95" />
              <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
              <span className="absolute -inset-1 rounded-full bg-blue-500/20 blur-lg opacity-70" />
              <span className="relative transition-transform duration-200 ease-out hover:-translate-y-[1px]">
              Request a consultation
              </span>
            </a>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 p-2 text-white/85 transition hover:bg-white/10 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU via Portal */}
      {open && (
        <BodyPortal>
          <button
            type="button"
            className="fixed inset-0 z-[80] bg-black/55 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
            aria-label="Close menu backdrop"
          />

          <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-[calc(env(safe-area-inset-bottom)+16px)]">
            <div className="mx-auto max-w-6xl">
              <div className="max-h-[75vh] overflow-auto overflow-x-hidden rounded-3xl border border-white/12 bg-[#070B14]/92 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur">
                <div className="p-4">
                  <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/15" />

                  <a
                    href="#top"
                    onClick={(e) => {
                      e.preventDefault();
                      goTo("top");
                    }}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold tracking-wide bg-white/6 text-white hover:bg-white/10"
                  >
                    <span>Home</span>
                    <span className="text-xs font-semibold text-white/50">Top</span>
                  </a>

                  <div className="mt-2 grid gap-2">
                    {items.map((it) => {
                      const isActive = safeActive === it.id;
                      return (
                        <a
                          key={it.href}
                          href={it.href}
                          onClick={(e) => {
                            e.preventDefault();
                            goTo(it.id as SectionId);
                          }}
                          className={[
                            "flex items-center justify-between rounded-2xl px-4 py-3",
                            "text-sm font-semibold tracking-wide",
                            isActive ? "bg-white/8 text-white" : "bg-white/0 text-white/85 hover:bg-white/6",
                          ].join(" ")}
                        >
                          <span>{it.label}</span>
                          <span className="text-xs font-semibold text-white/50">{isActive ? "Active" : ""}</span>
                        </a>
                      );
                    })}
                  </div>

                  <div className="mt-4 grid gap-3">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        goTo("contact");
                      }}
                      className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_46px_rgba(37,99,235,0.30)] transition hover:brightness-110"
                    >
                      Request a consultation
                    </a>

                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        goTo("services");
                      }}
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      View Services
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/50">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Web</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Mobile</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">SaaS</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BodyPortal>
      )}
    </>
  );
}
