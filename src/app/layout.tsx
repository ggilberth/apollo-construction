import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Apollo Construction & Groundworks',
  description:
    'Reliable construction and renovation experts for residential and light commercial projects.',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icon-180.png', sizes: '180x180', type: 'image/png' }],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Apollo Construction & Groundworks',
  url: 'https://www.apolloconstruction.co.uk',
  telephone: 'YOUR_PHONE_NUMBER',
  description:
    'Professional groundworks, drainage, foundations, patios and driveways in midlands and surrounding areas.',
  areaServed: ['Leicestershire', 'Midlands'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: '',
    addressRegion: 'Leicestershire',
    addressCountry: 'GB',
  },
  sameAs: [
    // Add social profile URLs here if available
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
