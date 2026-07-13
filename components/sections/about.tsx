"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const VALUES = [
  "Innovation",
  "Integrity",
  "Customer Success",
  "Continuous Learning",
  "Quality Engineering",
  "Transparency",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-void/70 to-void" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <span className="eyebrow">About Trevio</span>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building technology
              <br />
              that moves businesses forward.
            </h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Trevio Technologies was founded with one mission: to help
                businesses embrace digital transformation through innovative
                software solutions and intelligent automation.
              </p>
              <p>
                As a new-in-market startup, we stay small and hands-on by
                design. Every engagement is scoped, designed, and built by
                the same core team, which means fewer translation errors and
                a lot more accountability.
              </p>
              <p>
                This site is our own proof of work — a live demonstration of
                the same engineering discipline we bring to every client
                build.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4 rounded-2xl border border-line p-6"
            >
              <Target size={20} className="mt-0.5 shrink-0 text-cyan" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-base font-medium text-ink">
                  Mission
                </h3>
                <p className="mt-1 text-sm text-muted">
                  To engineer reliable, scalable, and intelligent software
                  that enables organizations to grow confidently in the
                  digital era.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-line p-6"
            >
              <Eye size={20} className="mt-0.5 shrink-0 text-cyan" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-base font-medium text-ink">
                  Vision
                </h3>
                <p className="mt-1 text-sm text-muted">
                  To become a globally trusted technology partner known for
                  innovation, quality, and long-term client success.
                </p>
              </div>
            </motion.div>

            <div className="rounded-2xl bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-muted">
                Core Values
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {VALUES.map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-line px-3 py-1.5 text-xs text-ink"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
