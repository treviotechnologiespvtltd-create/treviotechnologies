  "use client";

  import { useEffect, useRef } from "react";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  {
    label: "Discovery Call",
    desc: "Every successful project starts with understanding your business. We discuss your goals, users, current challenges, and long-term vision to define the right solution—not just the requested features.",
  },

  {
    label: "Business & Technical Analysis",
    desc: "Our team evaluates workflows, integrations, technical feasibility, security requirements, scalability, and future expansion opportunities before planning begins.",
  },

  {
    label: "Proposal & Project Planning",
    desc: "We prepare a detailed project roadmap including milestones, deliverables, technology stack, estimated timeline, communication plan, and development strategy.",
  },

  {
    label: "UI / UX Research & Design",
    desc: "We design intuitive user experiences backed by wireframes, user flows, prototypes, and modern interface systems that balance usability with premium aesthetics.",
  },

  {
    label: "Architecture & Sprint Planning",
    desc: "Before writing code, we establish scalable software architecture, database design, APIs, infrastructure planning, sprint breakdowns, and development standards.",
  },

  {
    label: "Development",
    desc: "Our engineers build your solution using agile sprints with continuous demonstrations, version control, code reviews, and transparent weekly progress updates.",
  },

  {
    label: "Testing & Quality Assurance",
    desc: "Every feature undergoes functional testing, responsive validation, security checks, accessibility reviews, performance optimization, and cross-browser compatibility testing.",
  },

  {
    label: "Client Review & Feedback",
    desc: "You receive staging access to review the product. We gather structured feedback, implement refinements, and ensure the solution aligns with your expectations before launch.",
  },

  {
    label: "Deployment & Go Live",
    desc: "We configure production infrastructure, optimize performance, complete SEO setup, deploy securely, monitor stability, and ensure a seamless launch experience.",
  },

  {
    label: "Training & Documentation",
    desc: "Your team receives user training, technical documentation, administrator guides, deployment records, and operational best practices for long-term success.",
  },

  {
    label: "Support, Optimization & Growth",
    desc: "After launch, we continue with monitoring, maintenance, feature enhancements, performance improvements, analytics reviews, and strategic technology consulting as your business grows.",
  },
];

  export default function Timeline() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
        items.forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              delay: i * 0.05,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              },
            }
          );
        });

        gsap.fromTo(
          ".timeline-line",
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }, []);

    return (
      <section
        id="how-we-work"
        ref={sectionRef}
        className="relative px-6 py-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 max-w-xl">
            <span className="eyebrow">How We Work</span>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Five stages. Zero surprises.
            </h2>
          </div>

          <div className="relative pl-10">
            <div className="absolute left-[7px] top-1 h-full w-px bg-line">
              <div className="timeline-line h-full w-full bg-gradient-to-b from-royal to-cyan" />
            </div>

            <ol className="flex flex-col gap-12">
              {STEPS.map((s, i) => (
                <li key={s.label} className="timeline-item relative">
                  <span className="absolute -left-10 top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-void ring-2 ring-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  </span>
                  <span className="font-mono text-xs text-cyan">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-1 text-xl font-medium text-ink">
                    {s.label}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    );
  }
