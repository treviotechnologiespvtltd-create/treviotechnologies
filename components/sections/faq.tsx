"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "A marketing site usually ships in 2–4 weeks. Web apps and CRMs run 6–12 weeks depending on scope. We give you a firm timeline after the scoping call, not before.",
  },
  {
    q: "Do you work with startups or only established companies?",
    a: "Both. About half our work is early-stage startups building their first real product, the other half is established businesses replacing outdated systems.",
  },
  {
    q: "What does the estimator's number actually mean?",
    a: "It's a starting range based on similar past projects — not a final quote. Every engagement gets a fixed quote after we understand your actual requirements.",
  },
  {
    q: "Can you maintain the product after launch?",
    a: "Yes. Every tier includes a support window, and most clients move to a monthly retainer afterward for ongoing updates and features.",
  },
  {
    q: "Do you sign NDAs before scoping calls?",
    a: "Yes, happy to sign an NDA before any detailed discussion if your project requires it.",
  },
  {
    q: "Can you redesign existing software?",
    a: "Yes. We regularly modernize outdated systems — improving UI/UX, performance, and scalability without disrupting your ongoing operations.",
  },
  {
    q: "Do you develop AI applications?",
    a: "Yes. From AI-powered websites and mobile apps to chatbots, admin dashboards, and workflow automation, AI is built into most of what we ship.",
  },
  {
    q: "Which technologies do you use?",
    a: "React, Next.js, and Flutter on the frontend; Node.js, Django, and Laravel on the backend; PostgreSQL, MySQL, MongoDB, and Firebase for data; AWS, Google Cloud, and Azure for hosting — chosen per project.",
  },
  {
    q: "What industries do you serve?",
    a: "Healthcare, manufacturing, retail, education, finance, logistics, real estate, hospitality, startups, and professional services, among others.",
  },
  {
    q: "How does payment work?",
    a: "Payment terms are agreed upfront in a signed engagement — typically a milestone-based schedule tied to project phases.",
  },
  {
    q: "How do I start?",
    a: "Book a free consultation or send us your project details through the contact form. We'll reply within one business day with next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 max-w-xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions, answered.
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-line border-y border-line">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  data-cursor-active
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base text-ink sm:text-lg">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-cyan transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
