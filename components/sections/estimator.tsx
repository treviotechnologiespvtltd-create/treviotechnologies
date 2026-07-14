"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

type Answers = {
  type: string | null;
  timeline: string | null;
  business: string | null;
};

const STEPS = ["type", "timeline", "business", "result"] as const;

const TYPE_OPTIONS = [
  "Custom Website",
  "Mobile Application",
  "AI Solutions",
  "CRM Solution",
  "ERP Platform",
  "Enterprise Software",
];
const TIMELINE_OPTIONS = ["ASAP (< 1 month)", "1-3 months", "3+ months", "Not sure yet"];
const BUSINESS_OPTIONS = ["Startup", "SMB", "Enterprise", "Personal / Solo"];

function formatPrice(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function getRecommendation(a: Answers) {
  const base: Record<
    string,
    { tier: string; note: string; estimate: string; hint: string }
  > = {
    "Custom Website": {
      tier: "Custom Website",
      note: "A focused website with clear messaging, polished visuals, and conversion-friendly structure.",
      estimate: "From ₹9,999*",
      hint: "Best for landing pages, marketing sites, and company websites.",
    },
    "Mobile Application": {
      tier: "Mobile Application",
      note: "Cross-platform mobile app development with modern UI and scalable architecture.",
      estimate: "From ₹14,999*",
      hint: "Great for customer-facing apps and internal tools.",
    },
    "AI Solutions": {
      tier: "AI Solutions",
      note: "AI features, assistants, automation, and integrations tailored to your workflows.",
      estimate: "From ₹19,999*",
      hint: "Ideal when AI needs to solve a specific business bottleneck.",
    },
    "CRM Solution": {
      tier: "CRM Solution",
      note: "Sales pipelines, customer workflows, and reporting tailored to your process.",
      estimate: "Custom estimate",
      hint: "We scope this based on users, workflows, and integrations.",
    },
    "ERP Platform": {
      tier: "ERP Platform",
      note: "A connected operations platform for inventory, finance, HR, and back-office teams.",
      estimate: "Custom estimate",
      hint: "Best for multi-department systems with more complexity.",
    },
    "Enterprise Software": {
      tier: "Enterprise Software",
      note: "Large-scale software builds with governance, integrations, and long-term support.",
      estimate: "Custom estimate",
      hint: "Recommended for multi-system or enterprise-grade initiatives.",
    },
  };

  const fallback = {
    tier: "Custom Solution",
    note: "We will scope this precisely on a call.",
    estimate: "Custom estimate",
    hint: "We can refine the number after the quick questions below.",
  };

  const rec = (a.type && base[a.type]) || fallback;

  const timelineBoost =
    a.timeline === "ASAP (< 1 month)" ? 1.2 : a.timeline === "1-3 months" ? 1.08 : 1;
  const businessBoost = a.business === "Enterprise" ? 1.15 : a.business === "SMB" ? 1.05 : 1;

  const estimateRange = {
    "Custom Website": [9999, 14999],
    "Mobile Application": [14999, 24999],
    "AI Solutions": [19999, 39999],
    "CRM Solution": [24999, 49999],
    "ERP Platform": [39999, 79999],
    "Enterprise Software": [59999, 120000],
  } as const;

  const range = a.type ? estimateRange[a.type as keyof typeof estimateRange] : undefined;
  const adjustedRange = range
    ? range.map((price) => Math.round(price * timelineBoost * businessBoost))
    : null;

  const estimate = adjustedRange
    ? adjustedRange[0] === adjustedRange[1]
      ? `From ${formatPrice(adjustedRange[0])}*`
      : `${formatPrice(adjustedRange[0])} - ${formatPrice(adjustedRange[1])}`
    : rec.estimate;

  return { ...rec, estimate };
}

export default function Estimator() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    type: null,
    timeline: null,
    business: null,
  });

  const step = STEPS[stepIndex];
  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  function select(key: keyof Answers, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setTimeout(() => setStepIndex((current) => Math.min(current + 1, STEPS.length - 1)), 200);
  }

  function reset() {
    setAnswers({ type: null, timeline: null, business: null });
    setStepIndex(0);
  }

  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  return (
    <section id="estimator" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="eyebrow">Project Estimator</span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Get a quick estimate before the discovery call.
          </h2>
          <p className="mt-4 text-muted">
            Answer a few questions and we will suggest the right build type with a realistic starting price.
          </p>
        </div>

        <div className="glass rounded-2xl p-8">
          <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-surface-2">
            <motion.div
              className="h-full bg-gradient-to-r from-royal to-cyan"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step === "type" && (
              <motion.div
                key="type"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-6 font-display text-xl text-ink">
                  What are you looking to build?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {TYPE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      data-cursor-active
                      onClick={() => select("type", opt)}
                      className="rounded-xl border border-line px-4 py-4 text-left text-sm text-ink transition-colors hover:border-royal hover:bg-surface-2"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === "timeline" && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-6 font-display text-xl text-ink">
                  What is your timeline?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {TIMELINE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      data-cursor-active
                      onClick={() => select("timeline", opt)}
                      className="rounded-xl border border-line px-4 py-4 text-left text-sm text-ink transition-colors hover:border-royal hover:bg-surface-2"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === "business" && (
              <motion.div
                key="business"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-6 font-display text-xl text-ink">
                  What best describes your business?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {BUSINESS_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      data-cursor-active
                      onClick={() => select("business", opt)}
                      className="rounded-xl border border-line px-4 py-4 text-left text-sm text-ink transition-colors hover:border-royal hover:bg-surface-2"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <span className="font-mono text-xs uppercase tracking-wide text-cyan">
                  Recommended Solution
                </span>
                <p className="font-display mt-2 text-3xl font-semibold text-ink">
                  {recommendation.tier}
                </p>
                <p className="font-display mt-1 text-xl text-royal">
                  {recommendation.estimate}
                </p>
                <p className="mx-auto mt-4 max-w-sm text-sm text-muted">
                  {recommendation.note}
                </p>
                <p className="mx-auto mt-2 max-w-sm text-xs text-muted">
                  {recommendation.hint}
                </p>

                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <a
                    href="#contact"
                    data-cursor-active
                    className="flex items-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_-6px_rgba(59,91,255,0.8)] transition-transform hover:scale-105"
                  >
                    Book a consultation
                    <ArrowRight size={15} />
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    data-cursor-active
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                  >
                    <RotateCcw size={14} />
                    Start over
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {step !== "type" && step !== "result" && (
            <button
              type="button"
              onClick={() => setStepIndex((current) => Math.max(current - 1, 0))}
              data-cursor-active
              className="mt-6 flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft size={13} />
              back
            </button>
          )}
        </div>
      </div>
    </section>
  );
}