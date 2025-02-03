import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1', // Removed trailing slash and port
        port: '8000', // Added port
        pathname: '**',
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
        
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "**",
        
      }
    ],
  },

  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
};


export default nextConfig;