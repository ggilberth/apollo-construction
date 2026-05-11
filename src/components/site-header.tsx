"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-brand-700 bg-brand-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image
            src="/apollo-wordmark.svg"
            alt="Apollo Construction & Groundworks logo"
            width={300}
            height={80}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="text-xl font-black uppercase tracking-wide">Construction & Groundworks</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-semibold uppercase tracking-wide text-slate-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "text-accent-gold" : "hover:text-accent-gold"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
