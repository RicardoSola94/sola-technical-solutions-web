// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  metadataBase: new URL(site.url),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#070B14] text-white antialiased">
        <div className="relative flex min-h-screen flex-col">
          {/* Cinematic background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(37,99,235,0.35)_0%,rgba(7,11,20,0)_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_20%,rgba(59,130,246,0.22)_0%,rgba(7,11,20,0)_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_90%_30%,rgba(14,165,233,0.16)_0%,rgba(7,11,20,0)_55%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070B14] via-[#070B14] to-black" />
            <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
          </div>

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
