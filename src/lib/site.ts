// src/lib/site.ts
export const site = {
    name: "Sola Technical Solutions",
    description:
      "We build modern web and mobile products — SaaS, automation, and custom software for growing businesses.",
    url: "http://localhost:3000", // luego lo cambiamos por el dominio real
  
    nav: [
      { label: "Services", href: "#services" },
      { label: "How we work", href: "#howwework" },
      { label: "Products", href: "#products" },
      { label: "Testimonials", href: "#testimonials" }
    ]
  } as const;
  