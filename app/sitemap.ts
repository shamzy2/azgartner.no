import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/tjenester`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/om-oss`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/kontakt`, changeFrequency: "yearly", priority: 0.8 },
  ];
}
