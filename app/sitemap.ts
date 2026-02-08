import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sbw.one", lastModified: new Date(), priority: 1 },
    { url: "https://sbw.one/legal", lastModified: new Date(), priority: 0.3 },
  ];
}
