import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "Why Trevio", href: "#why-trevio" },
      { label: "About", href: "#about" },
      { label: "How We Work", href: "#how-we-work" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Services", href: "#services" },
      { label: "Industries", href: "#industries" },
      { label: "Project Estimator", href: "#estimator" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-6 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Trevio Technologies"
                width={26}
                height={26}
                className="h-6 w-6"
              />
              <span className="font-display text-lg font-semibold">
                trevio<span className="text-cyan">.</span>
              </span>
            </span>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Engineering the future, one digital experience at a time.
            </p>
            <div className="mt-6 space-y-2.5 font-mono text-sm text-muted">
              <a
                href="mailto:treviotechnologies@outlook.com"
                className="flex items-center gap-2 transition-colors hover:text-cyan"
              >
                <Mail size={15} />
                treviotechnologies@outlook.com
              </a>
              <a
                href="tel:+917859889238"
                className="flex items-center gap-2 transition-colors hover:text-cyan"
              >
                <Phone size={15} />
                +91 78598 89238
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-wide text-cyan">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 pb-20 text-xs text-muted sm:flex-row md:pb-6">
          <p>© {new Date().getFullYear()} Trevio Technologies. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
