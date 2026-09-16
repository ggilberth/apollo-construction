import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { imageBlurDataURL } from "@/config/images";
import { createPageMetadata } from "@/config/seo";
import { services } from "@/data/services";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore groundworks, site development, driveways, paving, landscaping, fencing and outdoor construction services from Apollo Construction & Groundworks Ltd.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          as="h1"
          description="From early site preparation to finished outdoor spaces, every project starts with a clear scope and practical advice."
          eyebrow="Services"
          title="Groundworks and outdoor construction, built around your project."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              className="group flex scroll-mt-24 flex-col overflow-hidden rounded-xl border border-brand-100 border-t-4 border-t-brand-800 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              id={service.slug}
              key={service.slug}
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                <Image
                  alt={service.image.alt}
                  className="object-cover brightness-[0.96] contrast-[1.04] saturate-[0.92] transition duration-300 group-hover:scale-[1.02]"
                  fill
                  blurDataURL={imageBlurDataURL}
                  placeholder="blur"
                  priority={index < 2}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={service.image.src}
                  style={{ objectPosition: service.image.position }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-700">
                  Service {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">
                  {service.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-700">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-3 border-t border-slate-200 pt-5 text-slate-700">
                  {service.bullets.map((bullet) => (
                    <li className="flex items-start gap-3" key={bullet}>
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-brand-800"
                        size={19}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl bg-brand-900 p-8 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black">Not sure where to start?</h2>
            <p className="mt-2 max-w-2xl text-brand-100">
              Tell us what you’re planning and we’ll help define the practical
              next steps for your site or outdoor space.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-brand-900 hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              href="/contact"
            >
              Request a quote <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded border border-white px-5 py-3 text-sm font-black uppercase tracking-wide text-white hover:bg-white hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              href="/projects"
            >
              View projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
