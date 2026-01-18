// src/components/layout/Footer.tsx
import Link from "next/link";
import { site } from "@/lib/site";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Globe } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  // ✅ Static placeholders (swap later)
  const email = "contact@solatechnicalsolutions.com";
  const phoneDisplay = "+1 (813) 555-0123";
  const phoneE164 = "+18135550123";
  const location = "Tampa, FL";
  const mapsHref = "https://www.google.com/maps?q=Tampa+FL";

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: Linkedin },
    { label: "Instagram", href: "https://www.instagram.com/", Icon: Instagram },
    { label: "Facebook", href: "https://www.facebook.com/", Icon: Facebook },
    { label: "Website", href: "https://solatechnicalsolutions.com", Icon: Globe },
  ];

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

            {/* Contact mini-block */}
            <div className="mt-6 grid gap-2 text-sm">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-white/60" />
                <span className="truncate">{email}</span>
              </a>

              <a
                href={`tel:${phoneE164}`}
                className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-white/60" />
                <span>{phoneDisplay}</span>
              </a>

              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
              >
                <MapPin className="h-4 w-4 text-white/60" />
                <span>{location}</span>
              </a>
            </div>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-5 text-xs text-white/45">
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
              <Link href="#howwework" className="text-white/70 transition hover:text-white">
                How we work
              </Link>
              <Link href="#products" className="text-white/70 transition hover:text-white">
                Products
              </Link>
              <Link href="#testimonials" className="text-white/70 transition hover:text-white">
                Testimonials
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

            {/* Optional small trust/legal */}
            <div className="mt-6 text-xs text-white/45">
              Serving US-based businesses • Remote-friendly delivery
            </div>

            <div className="mt-6 text-sm text-white/60">
              © {year} {site.name}. All rights reserved.
            </div>
          </div>
        </div>

        {/* bottom divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </footer>
  );
}
