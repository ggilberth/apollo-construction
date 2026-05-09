import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionTitle } from "@/components/section-title";
import { todo } from "node:test";

export const metadata: Metadata = {
  title: "Contact | Apollo Construction & Groundworks",
  description: "Contact Apollo Construction & Groundworks to discuss your next construction or renovation project."
};

//@todo: add contact details here
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
              <strong>Phone:</strong> (555) 236-9184
            </p>
            <p>
              <strong>Email:</strong> hello@apolloconstruction.example
            </p>
            <p>
              <strong>Service area:</strong> Midlands and beyond
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
