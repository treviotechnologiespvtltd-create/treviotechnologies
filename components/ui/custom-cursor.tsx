"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const pos = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      setHidden(false);
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
      const target = e.target as HTMLElement;
      setActive(!!target.closest("a, button, [data-cursor-active]"));
    };

    let raf: number;
    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[999] hidden md:block transition-opacity duration-300 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan"
      />
      <div
        ref={ringRef}
        className={`absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out ${
          active
            ? "h-12 w-12 border-cyan bg-cyan/10"
            : "h-8 w-8 border-royal/70"
        }`}
        style={{
          boxShadow: active
            ? "0 0 24px color-mix(in srgb, var(--cyan) 55%, transparent)"
            : "0 0 16px color-mix(in srgb, var(--royal) 40%, transparent)",
        }}
      />
    </div>
  );
}
