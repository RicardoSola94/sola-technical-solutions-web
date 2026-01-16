// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
//import { Industries } from "@/components/sections/Industries";
//import { Testimonials } from "@/components/sections/Testimonials";
//import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <div id="top" />
      <Hero />
      <Services />
      <HowWeWork />
      <WhatWeBuild />
      <Products />
      <Testimonials />
      <Contact />
      <div id="contact" />
    </>
  );
}
