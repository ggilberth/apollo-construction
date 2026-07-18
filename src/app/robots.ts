import type { MetadataRoute } from "next";
import { allowIndexing, siteUrl } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(allowIndexing ? { allow: "/" } : { disallow: "/" }),
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
    host: siteUrl.origin,
  };
}
