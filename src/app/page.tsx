import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Fence,
  HardHat,
  Home,
} from 'lucide-react';
import { SectionTitle } from '@/components/section-title';

const trustSignals = [
  { label: 'Licensed and insured crews', icon: CheckCircle2 },
  { label: 'On-time milestone scheduling', icon: FileText },
  { label: 'Safety-first project execution', icon: Clock },
];

const featuredServices = [
  {
    name: 'Groundwork',
    copy: 'Patios, levelings, drainage, excavations and foundations.',
    icon: HardHat,
  },
  { name: 'Fencing', copy: 'Fences, gates, and railings.', icon: Fence },
  {
    name: 'Driveways',
    copy: 'Driveways, parking lots, and concrete work.',
    icon: Home,
  },
];

export default function HomePage() {
  return (
    <div>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm md:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-700">
              Built on reliability
            </p>

            <h1 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Construction and groundworks delivered with care, clarity and
              quality.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Apollo Construction & Groundworks Ltd provides reliable
              groundworks, landscaping, fencing, driveways and general
              construction services for homes and businesses across England.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-brand-800 px-6 py-3 text-sm font-black uppercase tracking-wide text-white shadow-md transition hover:bg-brand-700"
              >
                Request a quote <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-md border border-brand-800 bg-white px-6 py-3 text-sm font-black uppercase tracking-wide text-brand-800 transition hover:bg-brand-50"
              >
                View services <ArrowRight size={18} />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
              {trustSignals.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 text-brand-800">
                    <Icon size={22} />
                  </div>
                  <p className="text-sm font-bold leading-snug text-slate-800">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="Core offerings"
          title="Reliable construction services from groundwork to completion."
          description="Clear communication, realistic timelines and durable workmanship across every project."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {featuredServices.map(({ name, copy, icon: Icon }) => (
            <article
              key={name}
              className="group rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-brand-100 bg-brand-50 text-brand-800 transition group-hover:bg-brand-800 group-hover:text-white">
                <Icon size={50} strokeWidth={1.75} />
              </div>

              <h3 className="mt-6 text-xl font-black text-slate-950">{name}</h3>

              <p className="mt-3 text-slate-600">{copy}</p>

              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-brand-800 hover:text-brand-700"
              >
                Learn more
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
