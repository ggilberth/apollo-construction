import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { SectionTitle } from "@/components/section-title";
import { projects, type ProjectImage } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Apollo Construction & Groundworks",
  description:
    "Explore completed landscaping, paving, groundworks, paths, pergolas and garden transformations by Apollo Construction & Groundworks.",
};

export default function ProjectsPage() {
  return (
    <div id="projects-page-top" tabIndex={-1}>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16">
        <SectionTitle
          as="h1"
          description="Explore recent garden transformations, paths, paving, groundworks and outdoor structures from initial preparation through to the finished result."
          eyebrow="Our work"
          title="Practical groundwork. Thoughtful finishes. Lasting results."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
              href={`#${project.slug}`}
              key={project.slug}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  alt={project.cover.alt}
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={project.cover.src}
                />
              </div>
              <div className="p-5">
                <p className="text-lg font-black text-slate-950">
                  {project.title}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-800">
                  View project <ArrowRight aria-hidden="true" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <nav
        aria-label="Project index"
        className="sticky top-0 z-30 border-y border-brand-100 bg-white/95 shadow-sm backdrop-blur"
        id="project-list"
      >
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-3">
          {projects.map((project, index) => (
            <Link
              className="shrink-0 rounded-full border border-brand-200 bg-brand-100 px-4 py-2 text-sm font-bold text-brand-900 hover:border-brand-700 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
              href={`#${project.slug}`}
              key={project.slug}
            >
              {index + 1}. {project.title}
            </Link>
          ))}
        </div>
      </nav>

      <div className="bg-slate-50">
        <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
          {projects.map((project, projectIndex) => (
            <article
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
              id={project.slug}
              key={project.slug}
            >
              <header className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-800">
                  Project {projectIndex + 1}
                </p>
                <h2 className="mt-2 text-3xl font-black text-slate-950">
                  {project.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-700">
                  {project.description}
                </p>
                <ul
                  aria-label="Services featured"
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.tags.map((tag) => (
                    <li
                      className="rounded-full bg-brand-100 px-3 py-1 text-sm font-bold text-brand-900"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </header>

              {project.comparisons?.map((comparison, comparisonIndex) => (
                <figure className="mt-8" key={comparison.before.src}>
                  <figcaption className="mb-4 text-lg font-bold text-slate-900">
                    {project.comparisons && project.comparisons.length > 1
                      ? `Before and after ${comparisonIndex + 1}`
                      : "Before and after"}
                  </figcaption>
                  <div className="grid gap-5 md:grid-cols-2">
                    <ProjectImagePanel
                      image={comparison.before}
                      label="Before"
                    />
                    <ProjectImagePanel
                      image={comparison.after}
                      label="After"
                    />
                  </div>
                </figure>
              ))}

              {project.gallery.length > 0 ? (
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-slate-900">
                    Project details
                  </h3>
                  <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {project.gallery.map((image) => (
                      <ProjectImagePanel image={image} key={image.src} />
                    ))}
                  </div>
                </div>
              ) : null}

              {!project.comparisons && project.gallery.length === 0 ? (
                <div className="mt-8 max-w-4xl">
                  <ProjectImagePanel image={project.cover} />
                </div>
              ) : null}

              <Link
                className="mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-bold uppercase tracking-wide text-brand-800 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
                href="#project-list"
              >
                <ArrowUp aria-hidden="true" size={16} /> Back to project list
              </Link>
            </article>
          ))}
        </div>
      </div>

      <section className="bg-brand-900 px-6 py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">Planning a similar project?</h2>
            <p className="mt-3 max-w-2xl text-brand-100">
              Tell us about your space, priorities and timeline, and we’ll get
              back to you to discuss the next steps.
            </p>
          </div>
          <Link
            className="inline-flex shrink-0 items-center gap-2 rounded bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-brand-900 hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            href="/contact"
          >
            Request a quote <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>

      <BackToTop targetId="projects-page-top" />
    </div>
  );
}

function ProjectImagePanel({
  image,
  label,
}: {
  image: ProjectImage;
  label?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
      {label ? (
        <p className="bg-brand-900 px-4 py-2 text-sm font-black uppercase tracking-wide text-white">
          {label}
        </p>
      ) : null}
      <div className="relative aspect-[4/3]">
        <Image
          alt={image.alt}
          className="object-contain"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={image.src}
        />
      </div>
    </div>
  );
}
