import type { Metadata } from "next";
import LegalShell from "@/components/layout/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Trevio Technologies collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="12 July 2026">
      <p>
        This is a starting template — replace the placeholders below with
        your actual data practices before publishing, and have it reviewed
        by counsel familiar with applicable law in your jurisdiction.
      </p>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          1. Information we collect
        </h2>
        <p className="mt-2">
          We collect information you provide directly, such as your name,
          email address, and project details submitted through our contact
          and estimator forms. We also collect standard technical data
          (browser type, device, pages visited) via analytics tooling.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          2. How we use it
        </h2>
        <p className="mt-2">
          We use collected information to respond to inquiries, deliver
          services you request, improve our website, and — if you opt in —
          send occasional updates. We do not sell your personal information.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          3. Cookies
        </h2>
        <p className="mt-2">
          We use essential cookies to keep the site functioning correctly,
          and may use analytics cookies to understand how visitors use the
          site. You can control or disable cookies through your browser
          settings at any time.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          4. Data sharing
        </h2>
        <p className="mt-2">
          We may share data with service providers who help us operate this
          site (hosting, email delivery, analytics), bound by confidentiality
          obligations. We do not share data with third parties for their own
          marketing purposes.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          5. Security
        </h2>
        <p className="mt-2">
          We use reasonable technical and organizational measures to protect
          the data you share with us. No method of transmission or storage
          is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          6. Your rights
        </h2>
        <p className="mt-2">
          You can request access to, correction of, or deletion of your
          personal data at any time by contacting us at the email address
          listed on our Contact page.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-ink">
          7. Contact
        </h2>
        <p className="mt-2">
          Questions about this policy can be sent to treviotechnologies@outlook.com.
        </p>
      </section>
    </LegalShell>
  );
}
