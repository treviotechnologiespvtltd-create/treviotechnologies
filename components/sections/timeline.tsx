"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronRight } from "lucide-react";

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

const CARD_WIDTH = 300;
const CARD_GAP = 20; // matches gap-5

const cardVariants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    rotateX: 62,
    rotateY: isEven ? -20 : 20,
    y: 60,
    z: -140,
    filter: "blur(6px)",
  }),
  visible: {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    y: 0,
    z: 0,
    filter: "blur(0px)",
  },
};

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  // Raw 0–1 scroll progress of the horizontal container
  const { scrollXProgress } = useScroll({ container: scrollRef, axis: "x" });
  const smoothProgress = useSpring(scrollXProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
  });
  const lineScaleX = smoothProgress; // fill line grows with real scroll
  const cometLeft = useTransform(smoothProgress, (v) => `${v * 100}%`);
  const cometOpacity = useTransform(smoothProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".timeline-card");
    items?.forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 110}ms`);
    });
  }, []);

  const updateActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const raw = el.scrollLeft / (CARD_WIDTH + CARD_GAP);
    setActiveIndex(Math.min(STEPS.length - 1, Math.round(raw)));
    setAtEnd(max <= 0 || el.scrollLeft / max >= 0.98);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateActive();
    el.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      el.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  const scrollByCard = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: CARD_WIDTH + CARD_GAP, behavior: "smooth" });
  }, []);

  return (
    <section id="how-we-work" ref={sectionRef} className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">How We Work</span>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Eleven stages. Zero surprises.
            </h2>
          </div>
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase tracking-[0.24em] text-muted"
          >
            <span className="text-cyan">{String(activeIndex + 1).padStart(2, "0")}</span>
            {" / "}
            {String(STEPS.length).padStart(2, "0")}
          </motion.p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="scrollbar-hide relative snap-x snap-mandatory overflow-x-auto pb-8"
            style={{ perspective: 1800 }}
          >
            {/* Base track line */}
            <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

            {/* Progress fill — grows with actual scroll position */}
            <motion.div
              style={{ scaleX: lineScaleX }}
              className="absolute left-0 right-0 top-8 h-px origin-left bg-gradient-to-r from-royal via-cyan to-cyan"
            />
            <motion.div
              aria-hidden="true"
              style={{ scaleX: lineScaleX }}
              className="absolute left-0 right-0 top-8 h-px origin-left bg-gradient-to-r from-royal via-cyan to-cyan blur-md"
              animate={{ opacity: [0.5, 0.95, 0.5] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Comet head travelling at the live scroll position */}
            <motion.div
              aria-hidden="true"
              style={{ left: cometLeft, opacity: cometOpacity }}
              className="absolute top-8 z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_20px_6px_rgba(79,224,255,0.75)]"
            />

            <ol className="flex min-w-max gap-5 pt-6">
              {STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                const isLast = index === STEPS.length - 1;
                const isPassed = index <= activeIndex;
                return (
                  <motion.li
                    key={step.label}
                    className="timeline-card group relative w-[300px] shrink-0 transform-gpu snap-center"
                    custom={isEven}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 1, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {isLast && (
                      <motion.span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-3 rounded-[34px] bg-gradient-to-br from-cyan/50 via-royal/40 to-cyan/50 blur-2xl"
                        animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.97, 1.03, 0.97] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}

                    <motion.div
                      className={`timeline-card-shell relative rounded-[28px] border p-6 backdrop-blur-md transition-colors duration-500 ${
                        isLast
                          ? "border-cyan/60 bg-card/90 shadow-[0_0_70px_-20px_rgba(79,224,255,0.75)]"
                          : isPassed
                            ? "border-cyan/40 bg-card/85 shadow-[0_28px_90px_-55px_rgba(79,224,255,0.55)]"
                            : "border-line/90 bg-card/80 shadow-[0_28px_90px_-55px_rgba(37,68,224,0.7)]"
                      }`}
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
                          <motion.span
                            animate={{
                              scale: isPassed ? [1, 1.12, 1] : 1,
                            }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-semibold transition-colors duration-500 ${
                              isPassed || isLast
                                ? "border-cyan/60 bg-cyan/10 text-cyan shadow-[0_0_28px_-10px_rgba(79,224,255,0.95)]"
                                : "border-line bg-surface text-ink shadow-[0_0_28px_-16px_rgba(59,91,255,0.95)]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </motion.span>
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan">
                              {isLast ? "Final Stage" : "Stage"}
                            </p>
                            <p className="font-display text-sm text-muted">
                              Step {index + 1}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`h-2.5 w-2.5 rounded-full transition-colors duration-500 ${
                            isPassed || isLast ? "bg-cyan shadow-[0_0_18px_rgba(79,224,255,0.9)]" : "bg-line"
                          }`}
                        />
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

          {/* Animated Right Arrow */}
          <AnimatePresence>
            {!atEnd && (
              <motion.button
                type="button"
                onClick={scrollByCard}
                aria-label="Scroll to next step"
                className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/90 text-cyan shadow-[0_10px_40px_-15px_rgba(79,224,255,0.8)] backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, x: [0, 6, 0] }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  x: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}