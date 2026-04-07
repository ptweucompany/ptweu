import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = process.env.APP_URL || 'https://wiraenergiutama.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/2.webp',
          '/icon.png',
          '/Hero.webp',
          '/Drone%20Webp/',
          '/Foto%20webp/',
          '/*.png',
          '/*.jpg',
          '/*.webp',
          '/*.svg'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
          '/company-profile/pdf-export',
          '/*?*', // Disallow URL parameters to avoid duplicate content
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/static/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
