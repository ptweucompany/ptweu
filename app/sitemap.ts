import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://ptweu.company';
const LAST_MODIFIED = new Date('2026-03-31');

const productSlugsEN = ['limestone', 'caco3', 'burn-lime', 'hydrated-lime', 'pcc'];
const productSlugsID = ['batu-kapur', 'kalsium-karbonat', 'kapur-bakar', 'kapur-padam', 'pcc'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 1.0 },
    // EN root
    { url: `${BASE_URL}/en`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.95 },
    // Products listing
    { url: `${BASE_URL}/produk`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/en/products`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${BASE_URL}/products`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.85 }, // legacy
    // Core pages
    { url: `${BASE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE_URL}/about`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/tentang-kami`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/company-profile`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${BASE_URL}/catalog`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${BASE_URL}/katalog`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${BASE_URL}/blog`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${BASE_URL}/governance-standards`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/governansi-standar`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/html-sitemap`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.50 },
    { url: `${BASE_URL}/privacy`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.30 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = [1, 2, 3].map((id) => ({
    url: `${BASE_URL}/blog/${id}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.70,
  }));

  // ID product pages (primary — high priority)
  const productRoutesID: MetadataRoute.Sitemap = productSlugsID.map((slug) => ({
    url: `${BASE_URL}/produk/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.90,
  }));

  // EN product pages under /en/products/
  const productRoutesENNew: MetadataRoute.Sitemap = productSlugsEN.map((slug) => ({
    url: `${BASE_URL}/en/products/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  }));

  // Legacy EN product pages under /products/ (keep for backlink equity)
  const productRoutesENLegacy: MetadataRoute.Sitemap = productSlugsEN.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...productRoutesID,
    ...productRoutesENNew,
    ...productRoutesENLegacy,
  ];
}
