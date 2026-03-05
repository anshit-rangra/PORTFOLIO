import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anshit-portfolio-pi.vercel.app";
  
  // Standardizing the date format for Google's XML parser
  const lastModifiedDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 1.0, // Homepage gets highest priority
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.8, // slightly lower than homepage and projects
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.9, // Projects update often, keep priority high
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModifiedDate,
      changeFrequency: "yearly", // Contact details rarely change
      priority: 0.5,
    },
  ];
}