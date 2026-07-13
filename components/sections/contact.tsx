"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(10, "Tell us a bit more about the project"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
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
        body: JSON.stringify({ type: "contact", ...data }),
      });

      if (!response.ok) {
        throw new Error("We couldn’t send your message right now.");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "We couldn’t send your message right now."
      );
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div>
          <span className="eyebrow">Start a Project</span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something
            <br />
            worth showing off.
          </h2>
          <p className="mt-5 max-w-md text-muted">
            Tell us what you&apos;re building. We&apos;ll reply within one
            business day with next steps — no sales script, just engineers.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                Email
              </p>
              <a
                href="mailto:treviotechnologies@outlook.com"
                className="mt-1 block font-mono text-muted transition-colors hover:text-cyan"
              >
                treviotechnologies@outlook.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                Sales &amp; Marketing
              </p>
              <div className="mt-1 flex flex-col gap-1 font-mono text-muted">
                <a href="tel:+917862927605" className="transition-colors hover:text-cyan">
                  +91 96876 52863
                </a>
                <a href="tel:+919974745061" className="transition-colors hover:text-cyan">
                  +91 99747 45061
                </a>              
                
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                Business Hours
              </p>
              <p className="mt-1 text-muted">
                Monday – Saturday, 10:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7"
        >
          {submitted ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 text-center">
              <CheckCircle2 size={32} className="text-success" />
              <p className="font-display text-lg text-ink">Message sent</p>
              <p className="text-sm text-muted">
                We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-4"
            >
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-muted">
                  Name
                </label>
                <input
                  {...register("name")}
                  className="w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-royal"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-muted">
                  Email
                </label>
                <input
                  {...register("email")}
                  className="w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-royal"
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-muted">
                  Budget range
                </label>
                <select
                  {...register("budget")}
                  defaultValue=""
                  className="w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-royal"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="<2l">Under ₹2 Lakh</option>
                  <option value="2-10l">₹2 Lakh – ₹10 Lakh</option>
                  <option value="10-40l">₹10 Lakh – ₹40 Lakh</option>
                  <option value="40l+">₹40 Lakh+</option>
                </select>
                {errors.budget && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.budget.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-muted">
                  Project details
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full resize-none rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-royal"
                  placeholder="What are you looking to build?"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                data-cursor-active
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-royal px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_-6px_rgba(59,91,255,0.8)] transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <Send size={15} />
              </button>
              {submitError && <p className="mt-2 text-sm text-red-400">{submitError}</p>}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
