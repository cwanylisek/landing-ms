import type { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/pl/", "/en/"],
      disallow: ["/api/"],
    },
    sitemap: "https://www.trener-personalny.pl/sitemap.xml",
  };
}
