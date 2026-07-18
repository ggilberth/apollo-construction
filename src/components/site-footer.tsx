import Link from "next/link";
import { ArrowRight, Mail, PawPrint, Phone } from "lucide-react";
import { businessDetails } from "@/config/business";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-700 bg-brand-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_0.75fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-lg font-black uppercase tracking-wide">
            Apollo Construction &amp; Groundworks
            <PawPrint
              aria-hidden="true"
              className="shrink-0 text-accent-gold"
              size={19}
            />
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-brand-100">
            Reliable groundworks, landscaping, paving and outdoor construction
            for homes and businesses.
          </p>
          <p className="mt-3 text-sm text-brand-100">
            {businessDetails.serviceArea.short}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand-100">
            Explore
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="rounded-sm hover:text-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand-100">
            Get in touch
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <a
              className="flex items-center gap-2 rounded-sm hover:text-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              href={`tel:${businessDetails.phone.href}`}
            >
              <Phone aria-hidden="true" size={17} />
              {businessDetails.phone.display}
            </a>
            <a
              className="flex items-center gap-2 break-all rounded-sm hover:text-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              href={`mailto:${businessDetails.email}`}
            >
              <Mail aria-hidden="true" size={17} />
              {businessDetails.email}
            </a>
          </div>
          <Link
            className="mt-5 inline-flex items-center gap-2 rounded bg-white px-4 py-2.5 text-sm font-black uppercase tracking-wide text-brand-900 hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            href="/contact"
          >
            Request a quote <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>

      <div className="border-t border-brand-700">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-brand-100 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {businessDetails.name}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              className="rounded-sm underline decoration-brand-700 underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              href="/privacy"
            >
              Privacy notice
            </Link>
            <p>Website by GH Digital</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
