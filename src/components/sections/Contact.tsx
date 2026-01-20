// src/components/sections/Contact.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Clock, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | undefined>(undefined);

  const disabled = useMemo(() => status === "sending", [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    const form = e.currentTarget; // ✅ FIX: referencia estable
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      type: String(fd.get("type") ?? ""),
      stage: String(fd.get("stage") ?? ""),
      timeline: String(fd.get("timeline") ?? ""),
      message: String(fd.get("message") ?? ""),
      company_website: String(fd.get("company_website") ?? ""), // honeypot
      turnstileToken,
    };

    // honeypot -> éxito silencioso
    if (payload.company_website) {
      form.reset(); // ✅ FIX
      setTurnstileToken(undefined);
      setStatus("sent");
      return;
    }

    if (!turnstileToken) {
      setErrorMsg("Please complete the verification.");
      return;
    }

    setStatus("sending");

    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 20000);

      const res = await fetch("/api/public/sola-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
      });

      clearTimeout(t);

      let data: any = null;
      try {
        data = await res.json();
      } catch {}

      if (!res.ok) {
        throw new Error(
          data?.details || data?.error || `Request failed (${res.status})`
        );
      }

      form.reset(); // ✅ FIX
      setTurnstileToken(undefined);
      setStatus("sent");
    } catch (err: any) {
      const msg =
        err?.name === "AbortError"
          ? "Request timed out. Please try again."
          : err?.message || "We couldn’t send your message. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 bg-[#F7FAFF] py-20">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7FAFF] via-white to-slate-50" />
        <div className="absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-[-140px] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_18%_10%,rgba(29,78,216,0.07)_0%,rgba(247,250,255,0)_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid gap-10 lg:grid-cols-2 lg:items-start"
        >
          {/* Left */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-slate-600 shadow-sm">
              Contact
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Let’s build something serious.
            </h2>

            <p className="mt-4 text-slate-600">
              Share what you’re building — we’ll reply with next steps, scope direction,
              and realistic timeline expectations.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
              <Mail className="h-4 w-4 text-slate-700" />
              <span className="font-semibold text-slate-900">Prefer email?</span>
              <span className="text-slate-500">info@solatechnicalsolutions.com</span>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Clock className="h-5 w-5 text-slate-900" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Fast response</div>
                  <div className="mt-1 text-sm text-slate-600">Usually within 24 hours on business days.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Sparkles className="h-5 w-5 text-slate-900" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Clear next steps</div>
                  <div className="mt-1 text-sm text-slate-600">
                    We’ll propose scope, milestones, and a delivery plan — no guesswork.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-slate-900" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Production mindset</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Security, reliability, and maintainability from day one.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right (Form) */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_90%_at_10%_0%,rgba(29,78,216,0.10)_0%,rgba(255,255,255,0)_60%)]" />

            {status === "sent" ? (
              <div className="relative rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Message received</div>
                    <p className="mt-1 text-sm text-slate-600">
                      We’ll reply with next steps and timeline expectations soon.
                    </p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                      >
                        Send another
                      </button>
                      <Link
                        href="#services"
                        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                      >
                        View Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form className="relative space-y-4" onSubmit={onSubmit}>
                {/* Honeypot hidden field */}
                <input name="company_website" tabIndex={-1} autoComplete="off" className="hidden" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold tracking-wide text-slate-600">Name</label>
                    <input
                      required
                      name="name"
                      disabled={disabled}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-wide text-slate-600">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      disabled={disabled}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="text-xs font-semibold tracking-wide text-slate-600">Project type</label>
                    <select
                      name="type"
                      disabled={disabled}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60"
                      defaultValue="Web app"
                    >
                      <option>Web app</option>
                      <option>Mobile app</option>
                      <option>SaaS platform</option>
                      <option>Automation / Integrations</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-wide text-slate-600">Stage</label>
                    <select
                      name="stage"
                      disabled={disabled}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60"
                      defaultValue="New build"
                    >
                      <option>New build</option>
                      <option>Existing system</option>
                      <option>Redesign / rebuild</option>
                      <option>Ongoing improvements</option>
                      <option>Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-wide text-slate-600">Timeline</label>
                    <select
                      name="timeline"
                      disabled={disabled}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60"
                      defaultValue="2–6 weeks"
                    >
                      <option>ASAP</option>
                      <option>2–6 weeks</option>
                      <option>6–12 weeks</option>
                      <option>3+ months</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold tracking-wide text-slate-600">What are you building?</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    disabled={disabled}
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60"
                    placeholder="Briefly describe your project, goals, and what success looks like..."
                  />
                </div>

                {/* Turnstile */}
                <div className="pt-1">
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken(undefined)}
                    onError={() => setTurnstileToken(undefined)}
                    options={{ appearance: "always" }}
                  />
                  {errorMsg && <p className="mt-2 text-xs text-red-600">{errorMsg}</p>}
                </div>

                <button
                  type="submit"
                  disabled={disabled}
                  className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(37,99,235,0.25)] transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "idle" && (
                    <>
                      Send request <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                  {status === "sending" && "Sending..."}
                </button>

                <p className="text-xs text-slate-500">
                  By submitting, you agree to be contacted about your request.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
}
