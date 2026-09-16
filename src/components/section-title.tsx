type SectionTitleProps = {
  as?: "h1" | "h2";
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  as: Heading = "h2",
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-800">{eyebrow}</p>
      <Heading className="text-3xl font-extrabold text-slate-900 md:text-4xl">{title}</Heading>
      {description ? <p className="mt-3 text-slate-600">{description}</p> : null}
    </div>
  );
}
