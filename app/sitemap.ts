import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sbw.one",
      lastModified: "2026-02-08",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://sbw.one/legal",
      lastModified: "2026-02-08",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
