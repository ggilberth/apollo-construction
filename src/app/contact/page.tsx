import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionTitle } from "@/components/section-title";
import { businessDetails } from "@/config/business";

export const metadata: Metadata = {
  title: "Contact | Apollo Construction & Groundworks",
  description: "Contact Apollo Construction & Groundworks to discuss your next construction or renovation project."
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl bg-slate-50 px-6 py-16">
      <SectionTitle
        eyebrow="Contact"
        title="Request a call back"
        description="Tell us what you are building, your timeline, and your priorities. We will follow up with a detailed estimate."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded border border-brand-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Contact details</h3>
          <div className="mt-4 space-y-3 text-slate-600">
            <p>
              <strong>Phone:</strong>{" "}
              <a
                className="font-medium text-brand-800 underline decoration-brand-200 underline-offset-4 hover:text-brand-700"
                href={`tel:${businessDetails.phone.href}`}
              >
                {businessDetails.phone.display}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                className="font-medium text-brand-800 underline decoration-brand-200 underline-offset-4 hover:text-brand-700"
                href={`mailto:${businessDetails.email}`}
              >
                {businessDetails.email}
              </a>
            </p>
            <p>
              <strong>Service area:</strong> {businessDetails.serviceArea.full}
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
