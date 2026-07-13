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
  "Website",
  "Web App / CRM",
  "AI Product",
  "Mobile App",
];
const TIMELINE_OPTIONS = ["ASAP (< 1 month)", "1–3 months", "3+ months", "Not sure yet"];
const BUSINESS_OPTIONS = ["Startup", "SMB", "Enterprise", "Personal / Solo"];

function getRecommendation(a: Answers) {
  const base: Record<string, { tier: string; note: string }> = {
    Website: {
      tier: "Custom Website",
      note: "A focused marketing site with a strong design system.",
    },
    "Web App / CRM": {
      tier: "CRM / Web Platform",
      note: "Custom dashboard, auth, and integrations tailored to your workflow.",
    },
    "AI Product": {
      tier: "AI Solution",
      note: "LLM integration, data pipeline, and a production-grade interface.",
    },
    "Mobile App": {
      tier: "Mobile Application",
      note: "Cross-platform build with native-feel interactions.",
    },
  };

  const fallback = { tier: "Custom Solution", note: "We'll scope this precisely on a call." };
  const rec = (a.type && base[a.type]) || fallback;

  return { ...rec, range: "Custom Quote" };
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
    setAnswers((a) => ({ ...a, [key]: value }));
    setTimeout(() => setStepIndex((i) => Math.min(i + 1, STEPS.length - 1)), 200);
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
            Not sure what you need? Ask the estimator.
          </h2>
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
                  What&apos;s your timeline?
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
                  {recommendation.range}
                </p>
                <p className="mx-auto mt-4 max-w-sm text-sm text-muted">
                  {recommendation.note}
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
              onClick={() => setStepIndex((i) => Math.max(i - 1, 0))}
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
