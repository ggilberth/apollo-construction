"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type ProjectIndexProps = {
  projects: readonly {
    slug: string;
    title: string;
  }[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Project index"
      className="sticky top-0 z-30 border-y border-brand-100 bg-white/95 shadow-sm backdrop-blur"
      id="project-list"
    >
      <div className="relative mx-auto max-w-6xl lg:hidden">
        <button
          aria-controls="mobile-project-index"
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-black text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-700"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span>
            <span className="block text-xs uppercase tracking-[0.18em] text-brand-700">
              Project index
            </span>
            <span className="mt-0.5 block">Jump to a project</span>
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`shrink-0 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            size={22}
          />
        </button>

        {isOpen ? (
          <div
            className="absolute left-0 right-0 top-full border-y border-brand-100 bg-white p-3 shadow-xl"
            id="mobile-project-index"
          >
            {projects.map((project, index) => (
              <Link
                className="block rounded px-4 py-3 text-sm font-bold text-slate-800 hover:bg-brand-100 hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                href={`#${project.slug}`}
                key={project.slug}
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2 text-brand-700">{index + 1}.</span>
                {project.title}
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mx-auto hidden max-w-6xl grid-cols-3 gap-2 px-6 py-3 lg:grid">
        {projects.map((project, index) => (
          <Link
            className="rounded-lg border border-brand-200 bg-brand-100 px-4 py-2.5 text-sm font-bold text-brand-900 transition hover:border-brand-700 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
            href={`#${project.slug}`}
            key={project.slug}
          >
            <span className="mr-2 text-brand-700">{index + 1}.</span>
            {project.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
