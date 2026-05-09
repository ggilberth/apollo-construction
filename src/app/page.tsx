import Link from "next/link";
import { SectionTitle } from "@/components/section-title";

const highlights = [
  "Licensed and insured crews",
  "On-time milestone scheduling",
  "Safety-first project execution"
];

const featuredServices = [
  { name: "Groundwork", copy: "Patios, levelings, and foundations." },
  { name: "Fencing", copy: "Fences, gates, and railings." },
  { name: "Driveways", copy: "Driveways, parking lots, and concrete work." }
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-brand-100 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-700">Built on reliability</p>
            <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Construction done right, from first quote to final walkthrough.
            </h1>
            <p className="mt-5 max-w-xl text-slate-700">
              Apollo Construction & Groundworks delivers dependable residential and light-commercial construction with clear communication and no surprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded bg-brand-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-700">
                Request a quote
              </Link>
              <Link href="/services" className="rounded border border-brand-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-800 hover:bg-brand-100">
                View services
              </Link>
            </div>
          </div>
          <div className="rounded border border-brand-100 bg-brand-100 p-8">
            <h2 className="text-xl font-bold text-slate-900">Why clients choose us</h2>
            <ul className="mt-5 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="text-slate-700">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="Core offerings"
          title="Construction services with zero hand-waving."
          description="Straightforward scopes, realistic timelines, and durable craftsmanship."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <article key={service.name} className="rounded border border-brand-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{service.name}</h3>
              <p className="mt-3 text-slate-600">{service.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
