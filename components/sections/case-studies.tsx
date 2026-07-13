"use client";

import { motion } from "framer-motion";

const CASES = [
{
  name: "SemantiX",
  tag: "Offline Enterprise AI",
  problem:
    "Organizations need secure knowledge retrieval without exposing sensitive documents to cloud-based AI services.",
  solution:
    "Engineered a fully offline multimodal RAG platform that understands PDFs, Word documents, images, and voice recordings using vector search and local language models.",
  stack: [
    "Django",
    "PyTorch",
    "FAISS",
    "Sentence Transformers",
    "CLIP",
    "GPT4All",
    "Vosk",
    "PyPDF2",
    "python-docx"
  ],
  impact:
    "Provides enterprise-grade AI search and grounded Q&A while keeping every document completely on-premise.",
},
  {
  name: "AgriHealth",
  tag: "AI Agriculture Platform",
  problem:
    "Farmers often struggle to identify crop diseases early, resulting in lower yields and delayed treatment.",
  solution:
    "Built an AI-powered disease diagnosis platform using MobileNet CNN with a Streamlit interface, Gemini-powered insights, and Dockerized deployment for scalable access.",
  stack: [
    "Python", "Django", "TensorFlow",
    "MobileNet",
    "Gemini API",
    "Streamlit",
    "Docker",
    "NumPy",
    "Pandas"
  ],
  impact:
    "Transforms a simple leaf image into an intelligent diagnosis with treatment recommendations in seconds.",
},
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="eyebrow">Case Studies</span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Problem, solution, impact.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {CASES.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-line p-7"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-cyan">
                {c.tag}
              </span>
              <h3 className="font-display mt-2 text-xl font-medium text-ink">
                {c.name}
              </h3>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                    Problem
                  </p>
                  <p className="mt-1 text-muted">{c.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                    Solution
                  </p>
                  <p className="mt-1 text-muted">{c.solution}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                    Impact
                  </p>
                  <p className="mt-1 text-ink">{c.impact}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
