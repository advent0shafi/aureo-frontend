
import { MetadataRoute } from 'next'
import FRONTEND_BASE_URL from './lib/FrontendEndPoint'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${FRONTEND_BASE_URL}/sitemap.xml`,
  }
}

