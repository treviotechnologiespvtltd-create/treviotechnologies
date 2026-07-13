"use client";

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
  "Fluteer",
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
  const loop = [...STACK, ...STACK];
  return (
    <section id="stack" className="relative overflow-hidden border-y border-line py-14">
      <div className="mb-8 px-6 text-center">
        <span className="eyebrow">Technology Stack</span>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
          {loop.map((tech, i) => (
            <span
              key={i}
              className="font-display shrink-0 text-2xl font-medium text-muted transition-colors hover:text-ink sm:text-3xl"
            >
              {tech}
            </span>
          ))}
        </div>
        <div
          className="animate-marquee flex shrink-0 items-center gap-12 pr-12"
          aria-hidden="true"
        >
          {loop.map((tech, i) => (
            <span
              key={i}
              className="font-display shrink-0 text-2xl font-medium text-muted sm:text-3xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
