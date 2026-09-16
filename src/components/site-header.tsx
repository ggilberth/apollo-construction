"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClassName = (isActive: boolean) =>
    `rounded-sm border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 ${
      isActive
        ? "border-accent-gold text-brand-900"
        : "border-transparent hover:text-brand-700"
    }`;

  return (
    <header className="border-b border-brand-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          aria-label="Apollo Construction & Groundworks Ltd home"
          href="/"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
        >
          <Image
            alt=""
            className="h-auto w-40 object-contain sm:w-44"
            height={260}
            priority
            src="/apollo-wordmark-blue.png"
            width={891}
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 text-sm font-semibold uppercase tracking-wide text-brand-900 lg:flex"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                key={link.href}
                href={link.href}
                className={linkClassName(isActive)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="rounded p-2 text-brand-900 hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-brand-100 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-brand-900 lg:hidden"
          id="mobile-navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`${linkClassName(isActive)} px-3 py-3`}
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
