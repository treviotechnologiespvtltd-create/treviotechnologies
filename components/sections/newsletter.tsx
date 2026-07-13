"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";

const schema = z.object({
  email: z.string().email("Enter a valid email"),
});
type FormData = z.infer<typeof schema>;

export default function Newsletter() {
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email: data.email }),
      });

      if (!response.ok) {
        throw new Error("We couldn’t subscribe you right now.");
      }

      setDone(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "We couldn’t subscribe you right now."
      );
    }
  }

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-surface px-8 py-14 text-center">
        <span className="eyebrow">Stay in the Loop</span>
        <h2 className="font-display mx-auto mt-3 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
          Engineering notes, occasionally. No spam.
        </h2>

        {done ? (
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-success">
            <Check size={16} /> You&apos;re on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="flex-1 text-left">
              <input
                {...register("email")}
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-full border border-line bg-surface-2 px-5 py-3 text-sm text-ink outline-none transition-colors focus:border-royal"
              />
              {errors.email && (
                <p className="mt-1.5 pl-4 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              data-cursor-active
              className="flex items-center justify-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_-6px_rgba(59,91,255,0.8)] transition-transform hover:scale-105 disabled:opacity-60"
            >
              {isSubmitting ? "..." : "Subscribe"}
              <ArrowRight size={15} />
            </button>
          </form>
        )}
        {submitError && <p className="mt-3 text-sm text-red-400">{submitError}</p>}
      </div>
    </section>
  );
}
