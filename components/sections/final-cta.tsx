"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/30 blur-[110px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <span className="eyebrow justify-center">Start a Project</span>
        <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          Ready to Build Your
          <br />
          Next Digital Product?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted">
          Tell us what you&apos;re building. Trevio Technologies will help
          you turn it into a scalable, production-ready product.
        </p>
        <a
          href="#contact"
          data-cursor-active
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-royal px-7 py-4 text-sm font-medium text-white shadow-[0_0_40px_-8px_rgba(59,91,255,0.9)] transition-transform hover:scale-105"
        >
          Schedule Your Free Consultation
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </motion.div>
    </section>
  );
}
