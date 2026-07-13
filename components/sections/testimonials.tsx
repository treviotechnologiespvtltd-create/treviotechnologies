"use client";

// PLACEHOLDER CONTENT — replace every entry below with a real client quote,
// name, and role before this section goes live. Shipping fabricated
// testimonials on the live site would be misleading.
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Trevio Technologies delivered our custom business management system exactly as promised. Their team understood our requirements quickly, maintained excellent communication throughout the project, and delivered a scalable solution that significantly improved our daily operations.",
    name: "Rahul Sharma",
    role: "Director, Manufacturing Company",
  },
  {
    quote:
      "From UI/UX design to final deployment, the entire process was smooth and transparent. The team was highly responsive, met every milestone on time, and built a modern web application that exceeded our expectations.",
    name: "Priya Patel",
    role: "Founder, Healthcare Startup",
  },
  {
    quote:
      "We partnered with Trevio Technologies to develop an AI-powered platform, and the results were outstanding. Their technical expertise, attention to detail, and long-term support have made them a trusted technology partner for our business.",
    name: "Amit Verma",
    role: "CEO, IT Consulting Firm",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow justify-center">Client Feedback</span>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          What clients say
        </h2>
        <p className="mt-3 text-sm text-muted">
          Placeholder quotes — swap in real feedback as projects wrap.
        </p>

        <div className="relative mt-12 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-10"
            >
              <p className="font-display text-lg italic leading-relaxed text-ink sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-royal/20 font-mono text-xs text-cyan">
                  {current.name
                    .replace(/[[\]]/g, "")
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-ink">
                    {current.name}
                  </p>
                  <p className="text-xs text-muted">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              data-cursor-active
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-royal" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
