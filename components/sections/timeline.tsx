"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    label: "Discovery Call",
    desc: "Every successful project starts with understanding your business. We discuss your goals, users, current challenges, and long-term vision to define the right solution, not just the requested features.",
  },
  {
    label: "Business & Technical Analysis",
    desc: "Our team evaluates workflows, integrations, technical feasibility, security requirements, scalability, and future expansion opportunities before planning begins.",
  },
  {
    label: "Proposal & Project Planning",
    desc: "We prepare a detailed project roadmap including milestones, deliverables, technology stack, estimated timeline, communication plan, and development strategy.",
  },
  {
    label: "UI / UX Research & Design",
    desc: "We design intuitive user experiences backed by wireframes, user flows, prototypes, and modern interface systems that balance usability with premium aesthetics.",
  },
  {
    label: "Architecture & Sprint Planning",
    desc: "Before writing code, we establish scalable software architecture, database design, APIs, infrastructure planning, sprint breakdowns, and development standards.",
  },
  {
    label: "Development",
    desc: "Our engineers build your solution using agile sprints with continuous demonstrations, version control, code reviews, and transparent weekly progress updates.",
  },
  {
    label: "Testing & Quality Assurance",
    desc: "Every feature undergoes functional testing, responsive validation, security checks, accessibility reviews, performance optimization, and cross-browser compatibility testing.",
  },
  {
    label: "Client Review & Feedback",
    desc: "You receive staging access to review the product. We gather structured feedback, implement refinements, and ensure the solution aligns with your expectations before launch.",
  },
  {
    label: "Deployment & Go Live",
    desc: "We configure production infrastructure, optimize performance, complete SEO setup, deploy securely, monitor stability, and ensure a seamless launch experience.",
  },
  {
    label: "Training & Documentation",
    desc: "Your team receives user training, technical documentation, administrator guides, deployment records, and operational best practices for long-term success.",
  },
  {
    label: "Support, Optimization & Growth",
    desc: "After launch, we continue with monitoring, maintenance, feature enhancements, performance improvements, analytics reviews, and strategic technology consulting as your business grows.",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".timeline-card");
    items?.forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 110}ms`);
    });
  }, []);

  return (
    <section id="how-we-work" ref={sectionRef} className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="eyebrow">How We Work</span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Eleven stages. Zero surprises.
          </h2>
        </div>

        <div className="relative overflow-x-auto pb-8" style={{ perspective: 1800 }}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-8 h-px origin-left bg-gradient-to-r from-transparent via-royal to-transparent"
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent blur-md"
            animate={{ opacity: [0.45, 0.9, 0.45] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <ol className="flex min-w-max gap-5 pt-6">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.li
                  key={step.label}
                  className="timeline-card group relative w-[300px] shrink-0 transform-gpu"
                  initial={{ opacity: 0, rotateX: 58, rotateY: isEven ? -18 : 18, y: 50, z: -120 }}
                  whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0, z: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.9, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="timeline-card-shell relative rounded-[28px] border border-line/90 bg-card/80 p-6 shadow-[0_28px_90px_-55px_rgba(37,68,224,0.7)] backdrop-blur-md"
                    initial={false}
                    animate={{
                      y: [0, isEven ? -10 : 10, 0],
                      rotateY: isEven ? [-8, -12, -8] : [8, 12, 8],
                    }}
                    transition={{
                      duration: 5.5 + (index % 3),
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    style={{ transformStyle: "preserve-3d", animationDelay: `${index * 0.12}s` }}
                    whileHover={{ scale: 1.03, rotateX: -2, rotateY: 0, y: -6 }}
                  >
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-x-10 -top-3 mx-auto h-6 rounded-full bg-royal/20 blur-xl"
                      animate={{ opacity: [0.35, 0.85, 0.35], scale: [0.9, 1.05, 0.9] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-surface text-sm font-semibold text-ink shadow-[0_0_28px_-16px_rgba(59,91,255,0.95)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan">
                            Stage
                          </p>
                          <p className="font-display text-sm text-muted">
                            Step {index + 1}
                          </p>
                        </div>
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_18px_rgba(79,224,255,0.9)]" />
                    </div>

                    <h3 className="font-display text-xl font-medium text-ink">
                      {step.label}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted">
                      <span className="h-px flex-1 bg-gradient-to-r from-line via-cyan/50 to-line" />
                      <span>Process</span>
                      <span className="h-px flex-1 bg-gradient-to-r from-line via-cyan/50 to-line" />
                    </div>
                  </motion.div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}