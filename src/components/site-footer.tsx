import { businessDetails } from "@/config/business";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-700 bg-brand-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p>{businessDetails.serviceArea.short}</p>
        <a
          className="font-semibold underline decoration-brand-500 underline-offset-4 hover:text-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
          href={`tel:${businessDetails.phone.href}`}
        >
          Call: {businessDetails.phone.display}
        </a>
      </div>
    </footer>
  );
}
