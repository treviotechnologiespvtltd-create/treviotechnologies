"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  GitBranch,
  Users,
  Target,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
const POINTS = [
  {
    icon: Zap,
    title: "Fast & Agile Development",
    desc: "Our agile development process ensures rapid iterations, transparent communication, and faster delivery without compromising quality. Clients receive continuous updates and working software throughout the project lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "Security is integrated into every stage of development. From secure authentication and encrypted communication to infrastructure best practices, we build software that businesses can trust.",
  },
  {
    icon: GitBranch,
    title: "Scalable Architecture",
    desc: "We engineer software with future growth in mind. Modular architecture, clean APIs, and maintainable code allow your platform to evolve without costly rebuilds.",
  },
  {
    icon: Users,
    title: "Dedicated In-House Team",
    desc: "The same professionals who understand your business requirements are involved throughout design, development, deployment, and long-term support. No outsourcing. No communication gaps.",
  },
  {
    icon: Target,
    title: "Transparent Project Planning",
    desc: "Every engagement begins with a detailed roadmap, defined deliverables, realistic milestones, and regular progress tracking so you always know where your project stands.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Technology Partner",
    desc: "Our relationship doesn't end after deployment. We provide ongoing maintenance, feature enhancements, monitoring, performance optimization, and technical consulting as your business grows.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance by Default",
    desc: "Every release passes through functional testing, responsive validation, accessibility reviews, performance optimization, and quality assurance before reaching production.",
  },
  {
    icon: GitBranch,
    title: "Modern Technology Stack",
    desc: "We leverage Next.js, React, Flutter, AI, cloud infrastructure, automation, and enterprise-grade technologies to build modern digital products that remain relevant for years.",
  },
];

export default function WhyTrevio() {
  return (
    <section id="why-trevio" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="eyebrow">Why Trevio</span>

            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building Technology
              <br />
              That Creates
              <br />
              Long-Term Business Value
            </h2>

            <p className="mt-5 max-w-md text-muted leading-relaxed">
              At Trevio Technologies, we believe software should solve business
              problems—not create new ones. Every solution we build combines
              modern engineering, thoughtful design, AI innovation, and
              long-term maintainability. Whether you're a startup launching your
              first product or an enterprise modernizing legacy systems, our
              focus remains the same: deliver reliable technology that drives
              measurable business growth.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {POINTS.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-line bg-card/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-royal/50 hover:shadow-xl hover:shadow-royal/10"
              >
                <point.icon
                  size={22}
                  strokeWidth={1.8}
                  className="text-cyan"
                />

                <h3 className="font-display mt-4 text-base font-semibold text-ink">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-8 rounded-3xl border border-line bg-card/40 p-8 backdrop-blur-sm md:grid-cols-4"
        >
          <div>
            <h3 className="text-3xl font-bold text-royal">100%</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Custom-built solutions tailored to your business goals.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-royal">11+</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Specialized software and AI development services.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-royal">End-to-End</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              From strategy and design to deployment and long-term support.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-royal">AI Ready</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Intelligent automation and AI integration for modern businesses.
            </p>
          </div>
        </motion.div>
        {/* Premium CTA */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative mt-20 overflow-hidden rounded-3xl border border-line bg-gradient-to-r from-royal/10 via-cyan/5 to-royal/10 p-10 text-center backdrop-blur-xl"
>
  {/* Background Glow */}
  <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-royal/20 blur-3xl" />
  <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />

  {/* Floating Particles */}
  {Array.from({ length: 14 }).map((_, i) => (
    <motion.span
      key={i}
      className="absolute h-2 w-2 rounded-full bg-white/20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [-8, 8, -8],
        opacity: [0.25, 0.8, 0.25],
      }}
      transition={{
        duration: 3 + (i % 4),
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2,
      }}
    />
  ))}

  <div className="relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
    >
      Ready to Build Your Next Digital Product?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted"
    >
      Whether you're building a custom website, mobile application, CRM,
      ERP, or an AI-powered platform, our team is ready to transform
      your vision into scalable, high-performance software.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.45 }}
      className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      {/* Primary Button */}
      <a
        href="#contact"
        className="group relative overflow-hidden rounded-xl bg-royal px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-royal/30"
      >
        {/* Shine Effect */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        <span className="relative flex items-center gap-2">
          Book a Free Consultation

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </a>

      {/* Secondary Button */}
      <a
        href="#services"
        className="rounded-xl border border-line bg-card/50 px-8 py-4 font-semibold text-ink backdrop-blur transition-all duration-300 hover:border-royal/50 hover:bg-card"
      >
        View Our Services
      </a>
    </motion.div>

    {/* Trust Line */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted"
    >
      <span>✓ Free consultation</span>

      <span className="hidden sm:block h-1 w-1 rounded-full bg-muted" />

      <span>✓ No obligation</span>

      <span className="hidden sm:block h-1 w-1 rounded-full bg-muted" />

      <span>✓ Response within 24 hours</span>
    </motion.div>
  </div>
</motion.div>
        
      </div>
    </section>
  );
}