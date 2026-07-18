import type { Metadata } from "next";

export const siteName = "Apollo Construction & Groundworks";
export const siteDescription =
  "Groundworks, site development, landscaping, paving and outdoor construction services for residential and commercial projects.";

function normaliseUrl(value: string | undefined) {
  if (!value) return undefined;

  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
}

const configuredUrl =
  process.env.SITE_URL ??
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  process.env.VERCEL_URL;

export const siteUrl = new URL(
  normaliseUrl(configuredUrl) ?? "http://localhost:3000",
);

export const allowIndexing = process.env.SEO_ALLOW_INDEXING === "true";

type PageMetadata = {
  description: string;
  path: string;
  title?: string;
};

export function createPageMetadata({
  description,
  path,
  title,
}: PageMetadata): Metadata {
  const socialTitle = title ? `${title} | ${siteName}` : siteName;

  return {
    title: title ?? siteName,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: path,
      title: socialTitle,
      description,
      siteName,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteName} — construction and groundworks`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
