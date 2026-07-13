import type { Metadata } from "next";
import LegalShell from "@/components/layout/legal-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Trevio Technologies website and services.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="12 July 2026">
      <p>
        This is a starting template — replace the placeholders below with
        terms that reflect your actual engagement model, and have it
        reviewed by counsel before publishing.
      </p>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          1. Use of this site
        </h2>
        <p className="mt-2">
          This website is provided for informational purposes about Trevio
          Technologies and its services. You agree not to
          misuse the site, attempt unauthorized access, or interfere with its
          normal operation.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          2. Project engagements
        </h2>
        <p className="mt-2">
          Estimates shown on this site (including the Project Estimator and
          Pricing sections) are indicative only. Binding terms, scope, and
          pricing for any project are set out in a separate signed agreement
          between Trevio Technologies and the client.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          3. Intellectual property
        </h2>
        <p className="mt-2">
          All content on this site — including design, copy, and code — is
          the property of Trevio Technologies unless
          otherwise noted, and may not be reproduced without permission.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          4. Limitation of liability
        </h2>
        <p className="mt-2">
          This site is provided &quot;as is&quot; without warranties of any
          kind. Trevio Technologies is not liable for any
          indirect or consequential loss arising from use of this site.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          5. Payments
        </h2>
        <p className="mt-2">
          Payment terms, schedules, and milestones for any project are set
          out in the signed agreement for that engagement. Late or missed
          payments may result in a pause of project work until resolved.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          6. Governing law
        </h2>
        <p className="mt-2">
          These terms are governed by the laws of India, and any disputes
          arising from use of this site or our services will be subject to
          the jurisdiction of the courts of Gujarat, India.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          7. Changes
        </h2>
        <p className="mt-2">
          We may update these terms from time to time. Continued use of the
          site after changes constitutes acceptance of the revised terms.
        </p>
      </section>
    </LegalShell>
  );
}
