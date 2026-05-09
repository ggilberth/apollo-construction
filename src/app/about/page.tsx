import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "About | Apollo Construction & Groundworks",
  description: "Learn about Apollo Construction & Groundworks, our team values, and our approach to safe, dependable construction."
};

const values = [
  {
    title: "Accountability",
    copy: "We provide clear estimates, milestone updates, and transparent change orders."
  },
  {
    title: "Safety",
    copy: "Jobsite safety standards are integrated into planning, execution, and final turnover."
  },
  {
    title: "Craftsmanship",
    copy: "Our crews are detail-focused and quality-checked before every handoff."
  }
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl bg-slate-50 px-6 py-16">
      <SectionTitle
        eyebrow="About us"
        title="A local construction partner built on trust."
        description="For over a decade, Apollo Construction & Groundworks has helped homeowners and business owners complete projects safely, on schedule, and to spec."
      />

      <div className="rounded border border-brand-100 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900">Licensed, insured, and process-driven</h3>
        <p className="mt-4 text-slate-600">
          We combine practical field expertise with disciplined project management. That means accurate timelines, clear communication, and clean job sites from start to finish.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="rounded border border-brand-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
            <p className="mt-3 text-slate-600">{value.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
