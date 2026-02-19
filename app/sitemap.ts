import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sugardegree.in",
      lastModified: new Date(),
    },
    {
      url: "https://sugardegree.in/upload",
      lastModified: new Date(),
    },
  ];
}
