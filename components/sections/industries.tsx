"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  ShoppingBag,
  Landmark,
  Truck,
  GraduationCap,
  Home,
  Factory,
} from "lucide-react";

const INDUSTRIES = [
  { icon: Building2, label: "Enterprise & B2B SaaS" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: ShoppingBag, label: "E-Commerce & Retail" },
  { icon: Landmark, label: "Fintech" },
  { icon: Truck, label: "Logistics" },
  { icon: GraduationCap, label: "Education" },
  { icon: Home, label: "Real Estate" },
  { icon: Factory, label: "Manufacturing" },
];

export default function Industries() {
  return (
    <section id="industries" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="eyebrow">Industries</span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built across sectors,
            <br />
            grounded in your domain.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="flex flex-col items-start gap-3 rounded-2xl border border-line p-5 transition-colors hover:border-royal/50"
            >
              <ind.icon size={20} className="text-cyan" strokeWidth={1.75} />
              <span className="text-sm text-ink">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
