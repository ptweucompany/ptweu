import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://ptweu.company';
const MOD = new Date('2026-03-31');

const productSlugsID = ['batu-kapur','kalsium-karbonat','kapur-bakar','kapur-padam','pcc'];
const productSlugsEN = ['limestone','caco3','burn-lime','hydrated-lime','pcc'];
const industrySlugsID = ['semen','baja','pltu','kimia','pertanian','konstruksi'];
const industrySlugsEN = ['cement','steel','power-plant','chemical','agriculture','construction'];
const locationSlugsID = ['manado','sulawesi-utara','bitung','indonesia'];
const exportSlugs    = ['australia','china','singapore','asia'];

const u = (path: string, pri: number, freq: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly') =>
  ({ url: `${BASE}${path}`, lastModified: MOD, changeFrequency: freq, priority: pri });

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    u('/', 1.0, 'weekly'),
    u('/en', 0.95, 'weekly'),
    u('/produk', 0.95, 'weekly'),
    u('/en/products', 0.92, 'weekly'),
    u('/products', 0.75),
    ...productSlugsID.map((s) => u(`/produk/${s}`, 0.90)),
    ...productSlugsEN.map((s) => u(`/en/products/${s}`, 0.88)),
    ...productSlugsEN.map((s) => u(`/products/${s}`, 0.70)),
    u('/industri', 0.90, 'weekly'),
    u('/en/industries', 0.88, 'weekly'),
    ...industrySlugsID.map((s) => u(`/industri/${s}`, 0.88)),
    ...industrySlugsEN.map((s) => u(`/en/industries/${s}`, 0.86)),
    u('/lokasi', 0.85, 'weekly'),
    u('/en/locations', 0.85, 'weekly'),
    ...locationSlugsID.map((s) => u(`/lokasi/${s}`, 0.85)),
    ...exportSlugs.map((s) => u(`/en/locations/${s}`, 0.83)),
    u('/contact', 0.90),
    u('/about', 0.85),
    u('/tentang-kami', 0.85),
    u('/company-profile', 0.82),
    u('/catalog', 0.80),
    u('/katalog', 0.80),
    u('/blog', 0.80, 'weekly'),
    u('/governance-standards', 0.75),
    u('/governansi-standar', 0.75),
    u('/html-sitemap', 0.50),
    u('/privacy', 0.30, 'yearly'),
    ...[1,2,3].map((id) => u(`/blog/${id}`, 0.70)),
  ];
}
