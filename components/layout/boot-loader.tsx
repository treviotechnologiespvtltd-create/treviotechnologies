"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "initializing trevio systems...",
  "connecting engineering core...",
  "loading interface modules...",
  "calibrating AI systems...",
  "welcome to trevio technologies",
];

export default function BootLoader({
  onDone,
}: {
  onDone: () => void;
}) {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      onDone();
      return;
    }

    const already = sessionStorage.getItem("trevio-booted");
    if (already) {
      setVisible(false);
      onDone();
      return;
    }

    const interval = setInterval(() => {
      setLineIndex((i) => {
        if (i >= LINES.length - 1) {
          clearInterval(interval);
          setTimeout(() => finish(), 550);
          return i;
        }
        return i + 1;
      });
    }, 380);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    sessionStorage.setItem("trevio-booted", "1");
    setVisible(false);
    onDone();
  }

  useEffect(() => {
    if (skip) finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="grid-fade absolute inset-0" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <Image
                src="/logo.png"
                alt="Trevio Technologies"
                width={52}
                height={52}
                className="h-12 w-12"
                priority
              />
              <span className="font-display text-3xl font-semibold tracking-tight text-ink text-glow">
                trevio<span className="text-cyan">.</span>
              </span>
            </motion.div>
            <div className="h-6 font-mono text-xs text-muted">
              {LINES[lineIndex]}
              <span className="cursor-blink">_</span>
            </div>
            <div className="h-px w-48 overflow-hidden bg-line">
              <motion.div
                className="h-full bg-gradient-to-r from-royal to-cyan"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((lineIndex + 1) / LINES.length) * 100}%`,
                }}
                transition={{ duration: 0.35 }}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSkip(true)}
            data-cursor-active
            className="absolute bottom-8 right-8 font-mono text-xs text-muted transition-colors hover:text-cyan"
          >
            skip intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
