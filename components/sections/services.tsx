"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Workflow,
  BarChart3,
  Smartphone,
  Database,
  Bot,
  LayoutDashboard,
  RefreshCw,
  LifeBuoy,
  Server,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    icon: Code2,
    title: "Custom Website Development",
    desc: "Professional, SEO-friendly, responsive websites built for performance and conversions.",
    accent: "royal",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform applications for Android and iOS.",
    accent: "purple",
  },
  {
    icon: Database,
    title: "CRM Development",
    desc: "Customer relationship management systems customized to your business processes.",
    accent: "royal",
  },
  {
    icon: Server,
    title: "ERP Development",
    desc: "Enterprise resource planning solutions for operations, inventory, HR, finance, and more.",
    accent: "purple",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Websites",
    desc: "Modern websites enhanced with AI assistants, automation, and intelligent search.",
    accent: "royal",
  },
  {
    icon: Bot,
    title: "AI-Powered Mobile Apps",
    desc: "Mobile applications with AI features such as recommendations, chatbots, voice interactions, and analytics.",
    accent: "purple",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate repetitive business processes and increase operational efficiency.",
    accent: "royal",
  },
  {
    icon: RefreshCw,
    title: "Existing Software Redesign",
    desc: "Modernize outdated systems with improved UI/UX, performance, and scalability.",
    accent: "purple",
  },
  {
    icon: LifeBuoy,
    title: "Technical Support & Maintenance",
    desc: "Continuous monitoring, updates, bug fixes, and technical assistance.",
    accent: "royal",
  },
  {
    icon: LayoutDashboard,
    title: "AI Admin Dashboards",
    desc: "Real-time dashboards with business intelligence and actionable insights.",
    accent: "purple",
  },
  {
    icon: BarChart3,
    title: "Business Analytics Tools",
    desc: "Custom analytics platforms to monitor KPIs, reports, and decision-making.",
    accent: "royal",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="eyebrow">What We Build</span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            11+ disciplines. One engineering team.
          </h2>
          <p className="mt-4 text-muted">
            Every business has unique challenges. That&apos;s why we
            don&apos;t sell pre-built software — we engineer custom digital
            solutions tailored to your goals, workflows, and growth plans.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={cn(
                  "absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100",
                  s.accent === "purple" ? "bg-[#8b5cf6]" : "bg-royal"
                )}
              />
              <div
                className={cn(
                  "relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl border",
                  s.accent === "purple"
                    ? "border-[#8b5cf6]/40 text-[#a78bfa]"
                    : "border-royal/40 text-cyan"
                )}
              >
                <s.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="relative font-display text-lg font-medium text-ink">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
