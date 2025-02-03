
import { MetadataRoute } from "next";
import FRONTEND_BASE_URL from "./lib/FrontendEndPoint";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: FRONTEND_BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${FRONTEND_BASE_URL}/about`,
      lastModified: new Date(),
    },

    {
      url: `${FRONTEND_BASE_URL}/contact`,
      lastModified: new Date(),
    },
    
    {
        url: `${FRONTEND_BASE_URL}/products`,
        lastModified: new Date(),
      },
  ];
}