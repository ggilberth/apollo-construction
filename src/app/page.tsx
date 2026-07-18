import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Fence,
  FileText,
  Hammer,
  HardHat,
  MapPin,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { businessDetails } from "@/config/business";
import { imageBlurDataURL } from "@/config/images";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const trustSignals = [
  { label: "Over 17 years of industry experience", icon: CheckCircle2 },
  { label: "Clear scopes and project updates", icon: FileText },
  { label: "Realistic project scheduling", icon: Clock },
  { label: "Leicester, the Midlands and beyond", icon: MapPin },
];

const serviceIcons: Record<string, LucideIcon> = {
  "groundworks-site-development": HardHat,
  "driveways-patios-paths": Hammer,
  "landscaping-garden-transformations": CheckCircle2,
  "fencing-outdoor-structures": Fence,
};

const featuredProjects = projects.filter((_, index) =>
  [0, 4, 5].includes(index),
);

export default function HomePage() {
  return (
    <div>
      <section className="bg-brand-900 text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.08fr_0.92fr]">
          <div className="order-2 flex items-center px-6 py-10 sm:px-10 lg:order-1 lg:px-16 lg:py-16">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-accent-gold">
                Built on reliability
              </p>

              <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Construction and groundworks delivered with care, clarity and
                quality.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-brand-100 md:mt-6 md:text-lg md:leading-8">
                {businessDetails.name} provides reliable groundworks, site
                development, landscaping, paving and outdoor construction for
                homes and businesses.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4">
                <Link
                  className="inline-flex items-center gap-3 rounded-md bg-white px-6 py-3 text-sm font-black uppercase tracking-wide text-brand-900 shadow-md transition hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                  href="/contact"
                >
                  Request a quote <ArrowRight aria-hidden="true" size={18} />
                </Link>

                <Link
                  className="inline-flex items-center gap-3 rounded-md border border-white px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                  href="/services"
                >
                  View services <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative order-1 aspect-[2/1] overflow-hidden bg-slate-200 sm:aspect-[16/10] lg:order-2 lg:aspect-auto lg:min-h-[560px]">
            <Image
              alt="Completed new-build garden with a curved gravel path and landscaped lawn"
              blurDataURL={imageBlurDataURL}
              className="object-cover"
              fill
              placeholder="blur"
              priority
              quality={80}
              sizes="(min-width: 1024px) 46vw, 100vw"
              src="/projects/new-build-garden-makeover/new-build-garden-path-after.webp"
              style={{ objectPosition: "center 55%" }}
            />
          </div>
        </div>
      </section>

      <section
        aria-label="Why choose Apollo"
        className="border-y border-brand-100 bg-white"
      >
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map(({ label, icon: Icon }) => (
            <div className="flex items-center gap-3" key={label}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-200 text-brand-800">
                <Icon aria-hidden="true" size={20} />
              </div>
              <p className="text-sm font-bold leading-snug text-slate-800">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          description="Clear communication, realistic timelines and durable workmanship across every project."
          eyebrow="Core offerings"
          title="Practical services from site preparation to finished outdoor spaces."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] ?? HardHat;

            return (
              <article
                className="group rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                key={service.slug}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-100 bg-brand-100 text-brand-800 transition group-hover:bg-brand-800 group-hover:text-white">
                  <Icon aria-hidden="true" size={36} strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.summary}
                </p>

                <Link
                  className="mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-black uppercase tracking-wide text-brand-800 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
                  href={`/services#${service.slug}`}
                >
                  Learn more
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              description="A selection of recent groundwork, landscaping and outdoor construction projects."
              eyebrow="Recent projects"
              title="See the work from preparation to final finish."
            />
            <Link
              className="mb-8 inline-flex items-center gap-2 rounded-sm text-sm font-black uppercase tracking-wide text-brand-800 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
              href="/projects"
            >
              View all projects <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
                href={`/projects#${project.slug}`}
                key={project.slug}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-brand-900/90 px-3 py-1 text-xs font-black uppercase tracking-wide text-white shadow-sm backdrop-blur-sm">
                    {project.tags[0]}
                  </span>
                  <Image
                    alt={project.cover.alt}
                    className="object-cover brightness-[0.96] contrast-[1.04] saturate-[0.92] transition duration-300 group-hover:scale-[1.02]"
                    fill
                    blurDataURL={imageBlurDataURL}
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={project.cover.src}
                    style={{ objectPosition: project.cover.position }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-black text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-brand-800">
                    View project <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
