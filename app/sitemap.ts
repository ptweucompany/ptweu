import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://ptweu.company';
const MOD = new Date('2026-04-04T00:00:00Z');

// 🔧 PART 1 — SITEMAP OPTIMIZATION (CONTROLLED SLUGS)
const productSlugs = ['batu-kapur', 'kalsium-karbonat', 'kapur-bakar', 'kapur-padam', 'pcc'];
const productSlugsEN = ['limestone', 'caco3', 'burn-lime', 'hydrated-lime', 'pcc'];
const industrySlugs = ['semen', 'baja', 'pltu', 'kimia', 'pertanian', 'konstruksi'];
const industrySlugsEN = ['cement', 'steel', 'power-plant', 'chemical', 'agriculture', 'construction'];
const locationSlugs = ['manado', 'sulawesi-utara', 'bitung', 'indonesia'];
const exportSlugs    = ['australia', 'china', 'singapore', 'asia'];

const u = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly') => ({
  url: `${BASE}${path}`,
  lastModified: MOD,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // 1.0 → Homepage Authority
    u('/', 1.0, 'weekly'),
    u('/en', 1.0, 'weekly'),

    // 0.9 → Core Business Pillars
    u('/produk', 0.9, 'weekly'),
    u('/en/products', 0.9, 'weekly'),
    u('/company-profile', 0.9),
    u('/about', 0.9),
    u('/tentang-kami', 0.9),
    u('/katalog', 0.9),
    u('/catalog', 0.9),

    // 0.8 → High-Intent Product & Industry Details
    ...productSlugs.map((s) => u(`/produk/${s}`, 0.8, 'weekly')),
    ...productSlugsEN.map((s) => u(`/en/products/${s}`, 0.8, 'weekly')),
    ...industrySlugs.map((s) => u(`/industri/${s}`, 0.8, 'weekly')),
    ...industrySlugsEN.map((s) => u(`/en/industries/${s}`, 0.8, 'weekly')),

    // 0.7 → Operational & Logistics / Contact
    u('/contact', 0.7),
    u('/kontak', 0.7),
    u('/lokasi', 0.7),
    u('/en/locations', 0.7),
    ...locationSlugs.map((s) => u(`/lokasi/${s}`, 0.7)),
    ...exportSlugs.map((s) => u(`/en/locations/${s}`, 0.7)),
    u('/governance-standards', 0.7),
    u('/governansi-standar', 0.7),

    // 0.6 → Blog Content (Supporting Authority)
    u('/blog', 0.6, 'weekly'),
    ...[1, 2, 3, 4, 5, 6, 7].map((id) => u(`/blog/${id}`, 0.6)),

    // 0.5 → Utility & Legal
    u('/privacy', 0.5),
    u('/site-map', 0.5),
  ];
}
