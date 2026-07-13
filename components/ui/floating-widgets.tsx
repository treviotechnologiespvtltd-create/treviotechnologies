"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919687652863";
const PHONE_NUMBER = "+91-96876-52863";

export default function FloatingWidgets() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[80] hidden flex-col items-end gap-3 md:flex">
        <AnimatePresence>
          {showBackTop && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-cursor-active
              aria-label="Back to top"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:border-cyan/60"
            >
              <ArrowUp size={17} />
            </motion.button>
          )}
        </AnimatePresence>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-active
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[80] flex gap-2 border-t border-line bg-void/95 p-3 backdrop-blur-lg md:hidden">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-4 py-3 text-sm font-medium text-ink"
        >
          <Phone size={15} />
          Call
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-royal px-4 py-3 text-sm font-medium text-white shadow-[0_0_20px_-4px_rgba(59,91,255,0.7)]"
        >
          Get a Quote
        </a>
      </div>
    </>
  );
}
