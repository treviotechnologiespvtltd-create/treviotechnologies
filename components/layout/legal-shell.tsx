import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-cyan"
      >
        <ArrowLeft size={14} />
        back to trevio.tech
      </Link>
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 font-mono text-xs text-muted">
        Last updated: {updated}
      </p>
      <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-muted">
        {children}
      </div>
    </main>
  );
}
