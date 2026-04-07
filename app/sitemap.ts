import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = process.env.APP_URL || 'https://wiraenergiutama.com';
const MOD = new Date('2026-04-07T00:00:00Z');

// 🔧 PART 1 — SITEMAP OPTIMIZATION (CONTROLLED SLUGS)
const productSlugs = ['batu-kapur', 'kalsium-karbonat', 'kapur-bakar', 'kapur-padam', 'pcc', 'agregat'];
const productSlugsEN = ['limestone', 'caco3', 'burn-lime', 'hydrated-lime', 'pcc', 'aggregate'];

const industrySlugs = [
  'semen', 'baja', 'pltu', 'kimia', 'pertanian', 'konstruksi',
  'pengolahan-air', 'kertas-plastik', 'gula', 'kaca', 'kulit',
  'pakan-ternak', 'cat-coating', 'emas', 'keramik'
];
const industrySlugsEN = [
  'cement', 'steel', 'power-plant', 'chemical', 'agriculture', 'construction',
  'water-treatment', 'paper-plastic', 'sugar-refinery', 'glass-industry', 'leather-tanning',
  'animal-feed', 'paint-coating', 'gold-cyanidation', 'ceramics'
];

const locationSlugs = [
  'manado', 'jakarta', 'surabaya', 'makassar', 'cilegon', 'karawang', 'bekasi',
  'kek-bitung', 'maluku', 'serang', 'kotamobagu', 'tangerang', 'kudus', 'kek-gresik'
];
const exportSlugs    = ['australia', 'china', 'singapore', 'asia'];

const u = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly') => ({
  url: `${BASE}${path}`,
  lastModified: MOD,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // 1.0 → Homepage Authority (Highest Level)
    u('/', 1.0, 'daily'),
    u('/en', 1.0, 'daily'),

    // 0.9 → Core Business Pillars (Products & Industries)
    u('/produk', 0.9, 'daily'),
    u('/en/products', 0.9, 'daily'),
    u('/industri', 0.9, 'daily'),
    u('/en/industries', 0.9, 'daily'),
    u('/company-profile', 0.9, 'weekly'),
    u('/katalog', 0.9, 'weekly'),
    u('/catalog', 0.9, 'weekly'),

    // 0.8 → Specific Industrial Applications (B2B Landing Pages)
    ...productSlugs.map((s) => u(`/produk/${s}`, 0.8, 'weekly')),
    ...productSlugsEN.map((s) => u(`/en/products/${s}`, 0.8, 'weekly')),
    ...industrySlugs.map((s) => u(`/industri/${s}`, 0.8, 'weekly')),
    ...industrySlugsEN.map((s) => u(`/en/industries/${s}`, 0.8, 'weekly')),

    // 0.7 → Geographic Distribution Hubs & Locations
    u('/lokasi', 0.7, 'weekly'),
    u('/en/locations', 0.7, 'weekly'),
    ...locationSlugs.map((s) => u(`/lokasi/${s}`, 0.7, 'monthly')),
    ...exportSlugs.map((s) => u(`/en/locations/${s}`, 0.7, 'monthly')),
    u('/about', 0.7, 'monthly'),
    u('/tentang-kami', 0.7, 'monthly'),

    // 0.6 → Knowledge Base & Trust Signals
    u('/blog', 0.6, 'daily'),
    ...[1, 2, 3, 4, 5, 6, 7].map((id) => u(`/blog/${id}`, 0.6, 'monthly')),
    u('/governance-standards', 0.6, 'monthly'),
    u('/governansi-standar', 0.6, 'monthly'),

    // 0.5 → Utility & Support
    u('/kontak', 0.5, 'monthly'),
    u('/en/contact', 0.5, 'monthly'),
    u('/contact', 0.5, 'monthly'),
    u('/privacy', 0.5, 'yearly'),
    u('/site-map', 0.5, 'monthly'),
  ];
}
