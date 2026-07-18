import type { Metadata } from "next";
import { Mail, MapPin, MessageSquareText, Phone, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionTitle } from "@/components/section-title";
import { businessDetails } from "@/config/business";

export const metadata: Metadata = {
  title: "Contact | Apollo Construction & Groundworks",
  description: "Contact Apollo Construction & Groundworks to discuss groundworks, site development, landscaping or outdoor construction."
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          as="h1"
          eyebrow="Contact"
          title="Request a call back"
          description="Tell us what you are building, your timeline and your priorities, and we’ll get in touch."
        />
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-xl border border-brand-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">
                Contact details
              </h2>
              <div className="mt-5 space-y-5">
                <a
                  className="group flex items-start gap-4 rounded-lg p-2 transition hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                  href={`tel:${businessDetails.phone.href}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800 group-hover:bg-white">
                    <Phone aria-hidden="true" size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.16em] text-slate-600">
                      Call
                    </span>
                    <span className="mt-1 block font-bold text-brand-800">
                      {businessDetails.phone.display}
                    </span>
                  </span>
                </a>
                <a
                  className="group flex items-start gap-4 rounded-lg p-2 transition hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                  href={`mailto:${businessDetails.email}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800 group-hover:bg-white">
                    <Mail aria-hidden="true" size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-black uppercase tracking-[0.16em] text-slate-600">
                      Email
                    </span>
                    <span className="mt-1 block break-all font-bold text-brand-800">
                      {businessDetails.email}
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-4 p-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                    <MapPin aria-hidden="true" size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.16em] text-slate-600">
                      Service area
                    </span>
                    <span className="mt-1 block leading-6 text-slate-700">
                      {businessDetails.serviceArea.full}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-brand-900 p-6 text-white shadow-sm">
              <h2 className="text-xl font-black">What happens next?</h2>
              <ol className="mt-5 space-y-4 text-sm text-brand-100">
                <li className="flex items-center gap-3">
                  <MessageSquareText aria-hidden="true" size={20} />
                  <span>Send us a few details about the project.</span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall aria-hidden="true" size={20} />
                  <span>We’ll get in touch to discuss what you need.</span>
                </li>
              </ol>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
