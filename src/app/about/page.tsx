import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ClipboardCheck,
  Hammer,
  MapPin,
  PawPrint,
  ShieldCheck,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { imageBlurDataURL } from "@/config/images";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Apollo Construction & Groundworks Ltd, our team values, and our approach to safe, dependable construction.",
  path: "/about",
});

const values: readonly {
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Accountability",
    copy: "We provide clear estimates, milestone updates, and transparent change orders.",
    icon: ClipboardCheck,
  },
  {
    title: "Safety",
    copy: "Jobsite safety standards are integrated into planning, execution, and final turnover.",
    icon: ShieldCheck,
  },
  {
    title: "Craftsmanship",
    copy: "Our crews are detail-focused and quality-checked before every handoff.",
    icon: Hammer,
  },
  {
    title: "Flexibility",
    copy: "Although we're based in and around Market Bosworth, we're happy to travel to you and have completed projects much further afield.",
    icon: MapPin,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          as="h1"
          eyebrow="About us"
          title="A local construction partner built on trust."
          description="Backed by over 17 years of industry experience, Apollo Construction & Groundworks Ltd helps homeowners and businesses complete projects with a reliable, practical approach."
        />

        <div className="grid overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm lg:grid-cols-[1.6fr_0.8fr]">
          <div className="p-7 md:p-10">
            <h2 className="text-2xl font-black text-slate-950">Our story</h2>
            <div className="mt-5 space-y-4 leading-7 text-slate-700">
              <p>
                Apollo Construction &amp; Groundworks Ltd was founded by Vinnie,
                who brings over 17 years of experience in groundworks, site
                development and housing construction. Having worked on a wide
                range of residential projects throughout his career, Vinnie
                built extensive industry knowledge and a reputation for
                reliable, high-quality workmanship.
              </p>
              <p>
                After nearly two decades in the trade, Vinnie decided to
                establish his own business, creating a company built on hard
                work, honesty and attention to detail.
              </p>
              <p>
                Today, Apollo Construction &amp; Groundworks Ltd offers site
                works, groundworks, construction and landscaping services for
                residential and commercial projects.
              </p>
            </div>
          </div>

          <aside className="bg-brand-900 text-white">
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-800">
              <Image
                alt="Apollo, the Golden Retriever who inspired the company name"
                className="object-cover"
                fill
                blurDataURL={imageBlurDataURL}
                placeholder="blur"
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                src="/apollo.webp"
              />
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 text-accent-gold">
                <PawPrint aria-hidden="true" size={24} />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-100">
                  The name behind the business
                </p>
              </div>
              <h2 className="mt-3 text-3xl font-black">Meet Apollo</h2>
              <p className="mt-4 leading-7 text-brand-100">
                The company takes its name from Vinnie’s loyal red Golden
                Retriever, Apollo—a personal connection at the heart of the
                story behind the brand.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {values.map(({ title, copy, icon: Icon }) => (
            <article
              className="flex gap-5 rounded-xl border border-brand-100 bg-white p-6 shadow-sm"
              key={title}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                <Icon aria-hidden="true" size={24} />
              </div>
              <div>
                <h2 className="text-lg font-black text-slate-950">{title}</h2>
                <p className="mt-2 leading-6 text-slate-600">{copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand-900 p-8 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black">See the work behind the story</h2>
            <p className="mt-2 max-w-2xl text-brand-100">
              Explore recent groundwork, landscaping and outdoor construction
              projects from preparation through to the finished result.
            </p>
          </div>
          <Link
            className="inline-flex shrink-0 items-center gap-2 rounded bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-brand-900 hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            href="/projects"
          >
            View projects <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
