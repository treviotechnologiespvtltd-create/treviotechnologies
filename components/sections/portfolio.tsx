"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    name: "CrackIt",
    category: "EdTech Platform",
    status: "Currently Building",
    desc: "An AI-powered interview preparation platform featuring DSA practice, coding challenges, mock interviews, company-wise question banks, and personalized learning paths.",
  },
 {
    name: "SemantiX",
    category: "Offline AI Knowledge Engine",
    desc: "A fully offline multimodal RAG system supporting PDFs, DOCX, images, and voice with FAISS vector search, GPT4All, CLIP, and Vosk for private AI knowledge retrieval.",
  },
 
  {
    name: "Client Ops Suite",
    category: "Internal CRM",
    desc: "A workflow and pipeline management system built to replace three disconnected spreadsheets.",
  },
  {
    name: "Flight Detection System",
    category: "AI Aviation",
    desc: "An AI-powered flight tracking system capable of detecting and locating nearby aircraft within a 50 km radius using real-time aviation data and intelligent search algorithms.",
  },

  {
    name: "AgriHealth",
    category: "AI Agriculture",
    desc: "A deep learning-based plant disease diagnosis platform using MobileNet CNN with Gemini-powered crop recommendations, packaged with Docker and deployed via Streamlit.",
  },
  {
    name: "Resume Skill Matcher",
    category: "AI Recruitment",
    desc: "An intelligent resume analysis platform that matches resumes against job descriptions using NLP, semantic similarity, ATS scoring, and LLM-powered optimization suggestions.",
  },


];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 max-w-xl">
          <span className="eyebrow">Our Work</span>

          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Recent Builds
          </h2>

          <p className="mt-4 text-muted">
            A selection of AI platforms, enterprise applications, and digital
            products we&apos;ve designed and engineered.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col divide-y divide-line border-y border-line">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.name}
              href="#contact"
              data-cursor-active
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
              className="group flex flex-col items-start justify-between gap-6 py-8 transition-all duration-300 hover:bg-surface/40 sm:flex-row sm:items-center sm:px-4"
            >
              <div className="flex-1">
                {/* Category + Status */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
                    {p.category}
                  </span>

                  {p.status && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                      {p.status}
                    </span>
                  )}
                </div>

                {/* Project Name */}
                <h3 className="font-display mt-3 text-xl font-medium text-ink transition-colors group-hover:text-cyan sm:text-2xl">
                  {p.name}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                  {p.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ArrowUpRight
                  size={26}
                  className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-cyan"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}