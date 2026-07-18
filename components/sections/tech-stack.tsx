"use client";

import { useEffect, useRef } from "react";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Three.js",
  "GSAP",
  "Python",
  "OpenAI API",
  "Docker",
  "AWS",
  "Vercel",
  "GraphQL",
  "REST APIs",
  "Flutter",
  "Django",
  "TensorFlow",
  "PyTorch",
  "FAISS",
  "Streamlit",
  "Gemini API",
  "NumPy",
  "Pandas",
];

export default function TechStack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const speed = 0.55;

    const tick = () => {
      if (!isDraggingRef.current) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const loop = [...STACK, ...STACK];

  return (
    <section id="stack" className="relative overflow-hidden border-y border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Technology Stack</span>
            <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              A living system of tools we move through daily.
            </h2>
          </div>
         
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void via-void/85 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void via-void/85 to-transparent" />

        <div
          ref={trackRef}
          className="flex cursor-grab select-none gap-4 overflow-x-auto px-6 pb-3 pt-2 active:cursor-grabbing"
          onPointerDown={(event) => {
            isDraggingRef.current = true;
            lastXRef.current = event.clientX;
          }}
          onPointerMove={(event) => {
            const track = trackRef.current;
            if (!track || !isDraggingRef.current) return;
            const delta = event.clientX - lastXRef.current;
            track.scrollLeft -= delta;
            lastXRef.current = event.clientX;
          }}
          onPointerUp={() => {
            isDraggingRef.current = false;
          }}
          onPointerLeave={() => {
            isDraggingRef.current = false;
          }}
        >
          <div className="flex min-w-max items-center gap-4 pr-6" aria-hidden="true">
            {loop.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="stack-pill flex min-w-[150px] items-center justify-center rounded-2xl border border-line bg-[linear-gradient(180deg,var(--surface)_0%,color-mix(in_srgb,var(--surface)_82%,var(--royal)_18%)_100%)] px-5 py-4 font-display text-lg font-medium text-muted shadow-[0_10px_30px_-18px_rgba(37,68,224,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:border-royal/50 hover:text-ink sm:text-xl"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex min-w-max items-center gap-4 pr-6" aria-hidden="true">
            {loop.map((tech, index) => (
              <span
                key={`${tech}-${index}-clone`}
                className="stack-pill flex min-w-[150px] items-center justify-center rounded-2xl border border-line bg-[linear-gradient(180deg,var(--surface)_0%,color-mix(in_srgb,var(--surface)_82%,var(--royal)_18%)_100%)] px-5 py-4 font-display text-lg font-medium text-muted shadow-[0_10px_30px_-18px_rgba(37,68,224,0.45)] sm:text-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}