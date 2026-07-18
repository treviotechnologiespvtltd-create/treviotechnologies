"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Trevio", href: "#why-trevio" },
  { label: "Work", href: "#portfolio" },
  { label: "Project Estimator", href: "#estimator" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
          scrolled ? "glass shadow-[0_8px_40px_-12px_rgba(59,91,255,0.35)]" : "bg-transparent"
        )}
      >
        <a href="#top" data-cursor-active className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Trevio Technologies"
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Trevio<span className="text-cyan">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor-active
                className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeSwitcher />
          <a
            href="#contact"
            data-cursor-active
            className="rounded-full bg-royal px-4 py-2 text-xs font-medium text-white shadow-[0_0_20px_-4px_rgba(59,91,255,0.7)] transition-transform hover:scale-105"
          >
            Book Consultation
          </a>
        </div>

        <button
          type="button"
          className="text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute inset-x-4 top-20 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 font-mono text-sm text-muted hover:bg-surface-2 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between px-3">
            <ThemeSwitcher />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-royal px-4 py-2 text-xs font-medium text-white"
            >
              Book Consultation
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
