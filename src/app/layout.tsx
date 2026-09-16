import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { businessDetails } from "@/config/business";
import {
  allowIndexing,
  createPageMetadata,
  siteDescription,
  siteName,
  siteUrl,
} from "@/config/seo";

export const metadata: Metadata = {
  ...createPageMetadata({ description: siteDescription, path: "/" }),
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  manifest: "/manifest.webmanifest",
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: businessDetails.name,
    description: siteDescription,
    url: siteUrl.toString(),
    email: businessDetails.email,
    telephone: businessDetails.phone.href,
    areaServed: ["Market Bosworth", "The Midlands"],
    image: new URL("/opengraph-image", siteUrl).toString(),
  };

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
            </Script>
          </>
        ) : null}
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
