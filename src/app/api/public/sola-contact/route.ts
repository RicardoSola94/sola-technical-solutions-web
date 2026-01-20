// src/app/api/public/sola-contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  name: string;
  email: string;
  type?: string;
  stage?: string;
  timeline?: string;
  message: string;
  company_website?: string; // honeypot
  turnstileToken?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

async function verifyTurnstile(token: string, ip?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) throw new Error("Missing TURNSTILE_SECRET_KEY");

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });

  const data = (await r.json()) as { success: boolean; "error-codes"?: string[] };
  return data;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      null;

    const body = (await req.json()) as Payload;

    // Honeypot: éxito silencioso
    if (body.company_website) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, message, type, stage, timeline, turnstileToken } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!turnstileToken) {
      return NextResponse.json({ error: "Missing verification" }, { status: 400 });
    }

    const v = await verifyTurnstile(turnstileToken, ip);
    if (!v.success) {
      return NextResponse.json(
        { error: "Verification failed", details: v["error-codes"]?.join(", ") },
        { status: 400 }
      );
    }

    // ✅ Opción 1: From debe ser del dominio verificado (mybizneed.com)
    // Usa un address tipo contact@mybizneed.com o no-reply@mybizneed.com
    const from = "Sola Technical Solutions via MyBizNeed <no-reply@mybizneed.com>";

    const subject = `Sola Contact: ${name} — ${type ?? "General"}`;

    const text = [
      "New contact request (Sola Technical Solutions)",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${type ?? "-"}`,
      `Stage: ${stage ?? "-"}`,
      `Timeline: ${timeline ?? "-"}`,
      "",
      "Message:",
      message,
      "",
      `IP: ${ip ?? "-"}`,
    ].join("\n");

    await resend.emails.send({
      from,
      to: ["info@solatechnicalsolutions.com"],
      replyTo: email, // ⭐ clave: reply directo al lead
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[sola-contact] error:", err);
    return NextResponse.json(
      { error: "We couldn’t send your message. Please try again." },
      { status: 500 }
    );
  }
}
