import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/seo";

const routes = [
  "/",
  "/services",
  "/projects",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : route === "/contact" ? 0.8 : 0.7,
  }));
}
