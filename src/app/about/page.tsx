import type { Metadata } from 'next';
import { SectionTitle } from '@/components/section-title';

export const metadata: Metadata = {
  title: 'About | Apollo Construction & Groundworks',
  description:
    'Learn about Apollo Construction & Groundworks, our team values, and our approach to safe, dependable construction.',
};

const values = [
  {
    title: 'Accountability',
    copy: 'We provide clear estimates, milestone updates, and transparent change orders.',
  },
  {
    title: 'Safety',
    copy: 'Jobsite safety standards are integrated into planning, execution, and final turnover.',
  },
  {
    title: 'Craftsmanship',
    copy: 'Our crews are detail-focused and quality-checked before every handoff.',
  },
  {
    title: 'Flexibility',
    copy: "Although we're based in and around Leicester, we're happy to travel to you and have completed projects much further afield. ",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl bg-slate-50 px-6 py-16">
      <SectionTitle
        as="h1"
        eyebrow="About us"
        title="A local construction partner built on trust."
        description="For over a decade, Apollo Construction & Groundworks has helped homeowners and business owners complete projects safely, on schedule, and to spec."
      />

      <div className="rounded border border-brand-100 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
        <p className="mt-4 text-slate-600">
          Apollo Construction & Groundworks Ltd was founded by Vinnie, who
          brings over 17 years of experience in groundworks, site development,
          and housing construction. Having worked on a wide range of residential
          projects throughout his career, Vinnie built extensive knowledge of
          the industry and a reputation for delivering high-quality workmanship
          with a reliable, professional approach.
        </p>
        <p className="mt-4 text-slate-600">
          After nearly two decades in the trade, Vinnie decided to take the leap
          and establish his own business, creating a company built on the values
          of hard work, honesty, and attention to detail. The company’s name,
          Apollo, was inspired by his loyal red Golden Retriever, Apollo.
        </p>
        <p className="mt-4 text-slate-600">
          Today, Apollo Construction & Groundworks Ltd offers a complete range
          of site works, groundworks, construction, and landscaping services.
          Whether undertaking residential or commercial projects, the team is
          committed to delivering quality results, building strong client
          relationships, and creating foundations that stand the test of time.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.title}
            className="rounded border border-brand-100 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-bold text-slate-900">{value.title}</h2>
            <p className="mt-3 text-slate-600">{value.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
