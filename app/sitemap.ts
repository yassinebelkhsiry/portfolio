import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-yassine-bel-khsiry.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
