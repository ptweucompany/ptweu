import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ptweu.company';

  const routes = [
    '',
    '/about',
    '/tentang-kami',
    '/products',
    '/produk',
    '/catalog',
    '/katalog',
    '/blog',
    '/contact',
    '/html-sitemap',
    '/privacy',
    '/company-profile'
  ];

  const productSlugsID = ['batu-kapur', 'kalsium-karbonat', 'kapur-bakar', 'kapur-padam', 'pcc'];
  const productSlugsEN = ['limestone', 'caco3', 'burn-lime', 'hydrated-lime', 'pcc'];

  const staticMaps = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as any,
    priority: route === '' ? 1 : 0.8,
  }));

  const productMapsID = productSlugsID.map((slug) => ({
    url: `${baseUrl}/produk/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as any,
    priority: 0.7,
  }));

  const productMapsEN = productSlugsEN.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as any,
    priority: 0.7,
  }));

  return [...staticMaps, ...productMapsID, ...productMapsEN];
}
