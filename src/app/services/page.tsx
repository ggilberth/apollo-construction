import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Services | Apollo Construction & Groundworks",
  description: "Explore renovation, fit-out, and exterior construction services from Apollo Construction & Groundworks."
};

const services = [
  {
    title: "Residential Renovations",
    bullets: ["Kitchen and bathroom remodels", "Basement finishing", "Structural modifications and framing"]
  },
  {
    title: "Light Commercial Work",
    bullets: ["Office and retail fit-outs", "Code compliance upgrades", "Phased scheduling for occupied spaces"]
  },
  {
    title: "Exterior Construction",
    bullets: ["Deck and porch construction", "Siding and weatherproofing repairs", "Concrete and masonry touch-ups"]
  }
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl bg-slate-50 px-6 py-16">
      <SectionTitle
        eyebrow="Services"
        title="From renovation to rebuild, we cover the critical work."
        description="Every project starts with a clear scope and ends with a signed-off finish."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded border border-brand-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {service.bullets.map((bullet) => (
                <li key={bullet}>- {bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
