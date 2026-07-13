"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Custom Website",
    price: "Custom",
    desc: "Tailored pricing based on project requirements.",
    features: [
      "Responsive, SEO-friendly build",
      "Custom design system",
      "Performance & accessibility audited",
      "Post-launch support included",
    ],
    highlight: false,
    cta: "Get Custom Quote",
  },
  {
    name: "Mobile Application",
    price: "Custom",
    desc: "Native or cross-platform apps scoped to your roadmap.",
    features: [
      "iOS & Android from one codebase",
      "API & third-party integrations",
      "AI features where relevant",
      "Post-launch support included",
    ],
    highlight: true,
    cta: "Get Custom Quote",
  },
  {
    name: "CRM Solution",
    price: "Custom",
    desc: "Customer relationship systems built around your workflow.",
    features: [
      "Custom pipelines & automations",
      "Team roles & permissions",
      "Reporting dashboards",
      "Ongoing support available",
    ],
    highlight: false,
    cta: "Get Custom Quote",
  },
  {
    name: "ERP Platform",
    price: "Custom",
    desc: "Operations, inventory, HR, and finance in one system.",
    features: [
      "Multi-module architecture",
      "Role-based access control",
      "Integrations with existing tools",
      "Dedicated engineering pod",
    ],
    highlight: false,
    cta: "Get Custom Quote",
  },
  {
    name: "Enterprise Software",
    price: "Custom",
    desc: "Multi-system builds and ongoing engineering partnership.",
    features: [
      "Multiple integrated systems",
      "SLA-backed support",
      "Architecture & security review",
      "Quarterly roadmap planning",
    ],
    highlight: false,
    cta: "Contact Sales",
  },
  {
    name: "AI Solutions",
    price: "Custom",
    desc: "LLM integrations, copilots, and intelligent automation.",
    features: [
      "AI-powered products & agents",
      "Data pipeline & model integration",
      "Production-grade interfaces",
      "Post-launch support included",
    ],
    highlight: false,
    cta: "Book Consultation",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="eyebrow">Pricing</span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Flexible engagement models
            <br />
            for every business.
          </h2>
          <p className="mt-4 text-muted">
            No fixed prices. Every project is quoted after a scoping call,
            tailored to your requirements.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "relative flex flex-col rounded-2xl p-7",
                t.highlight
                  ? "border-2 border-royal bg-surface shadow-[0_0_50px_-12px_rgba(59,91,255,0.5)]"
                  : "border border-line"
              )}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-royal px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-white">
                  Most common
                </span>
              )}
              <h3 className="font-display text-lg font-medium text-ink">
                {t.name}
              </h3>
              <p className="font-display mt-2 text-3xl font-semibold text-ink">
                {t.price}
              </p>
              <p className="mt-3 text-sm text-muted">{t.desc}</p>

              <ul className="mt-6 flex flex-col gap-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-success"
                    />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                data-cursor-active
                className={cn(
                  "mt-8 rounded-full px-5 py-3 text-center text-sm font-medium transition-transform hover:scale-[1.02]",
                  t.highlight
                    ? "bg-royal text-white shadow-[0_0_24px_-6px_rgba(59,91,255,0.8)]"
                    : "border border-line text-ink hover:border-royal/50"
                )}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
