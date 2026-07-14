"use client";

import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Check } from "lucide-react";

const ParticleNetwork = dynamic(
  () => import("@/components/three/particle-network"),
  { ssr: false }
);

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24"
    >
      <div
        className="hero-photo absolute inset-0 bg-cover bg-center opacity-[0.56] mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="grid-fade absolute inset-0"
        animate={{ opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-70">
        <ParticleNetwork />
      </div>
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-[18%] h-56 w-56 rounded-full bg-cyan/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -18, 0], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[10%] top-[28%] h-72 w-72 rounded-full bg-royal/10 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[12%] left-[34%] h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.42, 0.18] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void/80"
        animate={{ opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-6"
      >
        <motion.span
          variants={item}
          className="eyebrow eyebrow--online mb-6 rounded-full glass px-3 py-1.5"
        >
          Trevio Technologies - Your AI & Software Development Partner
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display max-w-3xl text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Engineering Digital Experiences That
          <br />
          <span className="bg-gradient-to-r from-ink via-cyan to-royal bg-clip-text text-transparent">
            Accelerate Business Growth.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base text-muted sm:text-lg"
        >
          Trevio Technologies designs and develops scalable websites, mobile applications, enterprise software, AI-powered solutions, and business automation platforms that help startups, SMEs, and enterprises innovate with confidence.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            data-cursor-active
            className="group flex items-center gap-2 rounded-full bg-royal px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_-6px_rgba(59,91,255,0.8)] transition-transform hover:scale-105"
          >
            Book a Free Consultation
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#services"
            data-cursor-active
            className="glass rounded-full px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-cyan/60"
          >
            Explore Our Services
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          {[
            "NDA on request",
            "Fixed-scope pricing",
            "Direct founder access",
            "Post-launch support included",
          ].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-muted"
            >
              <Check size={12} className="text-success" />
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-3 md:grid-cols-5"
        >
          {[
            ["11+", "Core Services"],
            ["100%", "Custom Solutions"],
            ["AI", "Driven Development"],
            ["E2E", "End-to-End Support"],
            ["8", "Scalable Architecture"],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {stat}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
