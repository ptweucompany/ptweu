// Hardcoded fallback content for the CMS.
//
// This is the single source of truth for "what the site says before anyone edits
// it in the dashboard". The content resolver overlays Supabase data on top of
// these values, and the admin "Import site content" action seeds Supabase FROM
// these values. Keep it faithful to what the components render.

import { company, legal as legalData, offices as officeData } from '../../data/company';
import { allProducts, type ProductData } from '../../data/products';
import type { ContentBlock, ContentMap, SiteSettings } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Site settings (company / contact / legal)
// ─────────────────────────────────────────────────────────────────────────────

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  legal_name: company.legal_name,
  short_name: company.short_name,
  tagline_id: company.tagline_id,
  tagline_en: company.tagline_en,
  founded: company.founded,
  employees_approx: company.employees_approx,
  email_primary: 'contact@wiraenergiutama.com',
  email_secondary: 'wiraenergiutama@yahoo.com',
  phone: '(0434) 260 3008',
  whatsapp: '0813 9956 7777',
  whatsapp_url: 'https://wa.me/6281399567777',
  instagram_url: 'https://www.instagram.com/pt_weu',
  facebook_url: 'https://www.facebook.com/share/r/1CDn2C1xCV/',
  linkedin_url: 'https://www.linkedin.com/in/pt-wira-energi-utama-company-b1941b401/',
  offices: officeData.map((o) => ({
    type: o.type,
    city: o.city,
    address_id: o.address_id,
    phone: o.phone ?? null,
    whatsapp: o.whatsapp ?? null,
    whatsapp_url: o.whatsapp_url ?? null,
    email: o.email ?? null,
    geo: o.geo ? { lat: o.geo.lat, lng: o.geo.lng } : null,
  })),
  legal: {
    iup_number: legalData.iup_number,
    iup_type: legalData.iup_type,
    iup_valid_since: legalData.iup_valid_since,
    iup_area_ha: legalData.iup_area_ha,
    ukl_upl_decree: legalData.ukl_upl_decree,
    ukl_upl_area_ha: legalData.ukl_upl_area_ha,
    pkkpr_laut_no: legalData.pkkpr_laut_no,
    pkkpr_laut_area_ha: legalData.pkkpr_laut_area_ha,
    npwp: legalData.npwp,
    kemenkumham: legalData.kemenkumham,
    certifications_current: [...legalData.certifications_current],
    certifications_in_progress: [...legalData.certifications_in_progress],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Products (public fields) — re-export of the existing hardcoded catalog
// ─────────────────────────────────────────────────────────────────────────────

export const DEFAULT_PRODUCTS: ProductData[] = allProducts;

// ─────────────────────────────────────────────────────────────────────────────
// Editable text blocks (Phase 1: landing page + shared chrome)
// key groups: home · trustbar · cta · footer · nav
// ─────────────────────────────────────────────────────────────────────────────

type BlockSeed = Omit<ContentBlock, 'sort_order'>;

const HOME: BlockSeed[] = [
  { key: 'home.hero.eyebrow', group: 'home', type: 'text', label: 'Hero — teks kecil di atas judul', value_id: 'Mining, General Trading & Industrial Supplier', value_en: 'Mining, General Trading & Industrial Supplier' },
  { key: 'home.hero.title', group: 'home', type: 'text', label: 'Hero — judul utama', value_id: 'PT Wira Energi Utama', value_en: 'PT Wira Energi Utama' },
  { key: 'home.hero.subtitle_bold', group: 'home', type: 'text', label: 'Hero — subjudul tebal', value_id: 'Supplier Batu Kapur & CaCO3 Industri', value_en: 'Industrial Limestone & CaCO3 Supplier' },
  { key: 'home.hero.subtitle_desc', group: 'home', type: 'textarea', label: 'Hero — deskripsi singkat', value_id: 'Produksi 150.000 MT/bulan • Distribusi via Pelabuhan Bitung, Belang & Kotabunan • Crusher 250 TPH', value_en: '150,000 MT Monthly Production • Multi-Port Distribution (Bitung, Belang & Kotabunan) • 250 TPH Crusher' },
  { key: 'home.hero.cta_primary', group: 'home', type: 'text', label: 'Hero — tombol utama', value_id: 'Minta Penawaran Harga', value_en: 'Start Export Inquiry' },
  { key: 'home.hero.cta_secondary', group: 'home', type: 'text', label: 'Hero — tombol kedua', value_id: 'Katalog Produk', value_en: 'Product Catalog' },
  { key: 'home.midcta.title', group: 'home', type: 'text', label: 'Banner tengah — judul', value_id: 'Ketersediaan Kapasitas 150.000 MT/Bulan', value_en: '150,000 MT/Month Capacity Available' },
  { key: 'home.midcta.desc', group: 'home', type: 'textarea', label: 'Banner tengah — deskripsi', value_id: 'Siap mensuplai kebutuhan industri skala besar dengan logistik terintegrasi.', value_en: 'Ready to supply large-scale industrial demand with integrated logistics.' },
  { key: 'home.midcta.button', group: 'home', type: 'text', label: 'Banner tengah — tombol', value_id: 'Konsultasi Suplai Besar →', value_en: 'Discuss Bulk Supply →' },
  { key: 'home.products.title', group: 'home', type: 'text', label: 'Preview produk — judul', value_id: 'Produk Mineral Industri Kami', value_en: 'Our Industrial Mineral Products' },
  { key: 'home.products.intro', group: 'home', type: 'textarea', label: 'Preview produk — paragraf pembuka', value_id: 'Produk turunan batu kapur berkualitas tinggi — tersedia dalam berbagai spesifikasi teknis sesuai kebutuhan industri Anda.', value_en: 'High-quality limestone-derived products — available in a range of technical specifications for your industrial needs.' },
  { key: 'home.products.button', group: 'home', type: 'text', label: 'Preview produk — tombol', value_id: 'Lihat Semua Produk & Spesifikasi Teknis', value_en: 'View All Products & Technical Specs' },
  { key: 'home.cta.heading', group: 'home', type: 'text', label: 'CTA bawah — judul', value_id: 'Butuh Supplier Mineral Industri Terpercaya?', value_en: 'Need a Trusted Industrial Mineral Supplier?' },
  { key: 'home.cta.button', group: 'home', type: 'text', label: 'CTA bawah — tombol', value_id: 'Hubungi Sales Engineer Kami →', value_en: 'Contact Our Sales Engineers →' },
];

const TRUSTBAR: BlockSeed[] = [
  { key: 'trustbar.tag', group: 'trustbar', type: 'text', label: 'Label kecil', value_id: 'Didukung Legalitas IUP OP Resmi · April 2024', value_en: 'Legal IUP OP License Certified · April 2024' },
  { key: 'trustbar.heading', group: 'trustbar', type: 'text', label: 'Judul', value_id: 'Kapasitas Produksi Skala Industri', value_en: 'Industrial Scale Production Capacity' },
  { key: 'trustbar.stat1_value', group: 'trustbar', type: 'text', label: 'Statistik 1 — angka', value_id: '150.000 MT', value_en: '150,000 MT' },
  { key: 'trustbar.stat1_label', group: 'trustbar', type: 'text', label: 'Statistik 1 — label', value_id: 'Kapasitas Produksi / Bulan', value_en: 'Production Capacity / Month' },
  { key: 'trustbar.stat1_desc', group: 'trustbar', type: 'text', label: 'Statistik 1 — keterangan', value_id: 'Didukung Crusher 250 TPH 24/7', value_en: 'Supported by 250 TPH Crusher 24/7' },
  { key: 'trustbar.stat2_value', group: 'trustbar', type: 'text', label: 'Statistik 2 — angka', value_id: '97 Ha', value_en: '97 Ha' },
  { key: 'trustbar.stat2_label', group: 'trustbar', type: 'text', label: 'Statistik 2 — label', value_id: 'Luas Area IUP OP', value_en: 'Official IUP OP Area' },
  { key: 'trustbar.stat2_desc', group: 'trustbar', type: 'text', label: 'Statistik 2 — keterangan', value_id: 'Deposit batu kapur Ratatotok, CaO > 55%', value_en: 'Limestone deposit in Ratatotok, CaO > 55%' },
  { key: 'trustbar.stat3_value', group: 'trustbar', type: 'text', label: 'Statistik 3 — angka', value_id: '3 Pelabuhan', value_en: '3 Ports' },
  { key: 'trustbar.stat3_label', group: 'trustbar', type: 'text', label: 'Statistik 3 — label', value_id: 'Jalur Distribusi Laut', value_en: 'Sea Distribution Network' },
  { key: 'trustbar.stat3_desc', group: 'trustbar', type: 'text', label: 'Statistik 3 — keterangan', value_id: 'Bitung · Kotabunan · Belang', value_en: 'Bitung · Kotabunan · Belang' },
  { key: 'trustbar.badges', group: 'trustbar', type: 'textarea', label: 'Badge lab (pisahkan dengan koma)', value_id: 'Sucofindo, Intertek, Minertech, SMK3 Certified', value_en: 'Sucofindo, Intertek, Minertech, SMK3 Certified' },
];

const CTA: BlockSeed[] = [
  { key: 'cta.quote.heading', group: 'cta', type: 'text', label: 'CTA "Penawaran" — judul', value_id: 'Butuh Penawaran Harga?', value_en: 'Need a Price Quote?' },
  { key: 'cta.quote.sub', group: 'cta', type: 'textarea', label: 'CTA "Penawaran" — deskripsi', value_id: 'Dapatkan harga kompetitif dan spesifikasi teknis yang sesuai kebutuhan industri Anda.', value_en: 'Get competitive pricing and technical specifications tailored to your industrial needs.' },
  { key: 'cta.quote.button', group: 'cta', type: 'text', label: 'CTA "Penawaran" — tombol', value_id: 'Request Penawaran →', value_en: 'Request Quotation →' },
  { key: 'cta.consult.heading', group: 'cta', type: 'text', label: 'CTA "Konsultasi" — judul', value_id: 'Konsultasikan Proyek Anda', value_en: 'Consult Your Project' },
  { key: 'cta.consult.sub', group: 'cta', type: 'textarea', label: 'CTA "Konsultasi" — deskripsi', value_id: 'Tim teknis kami siap membantu menentukan spesifikasi mineral yang tepat untuk proses industri Anda.', value_en: 'Our technical team is ready to help you select the right mineral specification for your industrial process.' },
  { key: 'cta.consult.button', group: 'cta', type: 'text', label: 'CTA "Konsultasi" — tombol', value_id: 'Konsultasi Gratis →', value_en: 'Free Consultation →' },
  { key: 'cta.availability.heading', group: 'cta', type: 'text', label: 'CTA "Ketersediaan" — judul', value_id: 'Cek Ketersediaan Stok', value_en: 'Check Stock Availability' },
  { key: 'cta.availability.sub', group: 'cta', type: 'textarea', label: 'CTA "Ketersediaan" — deskripsi', value_id: 'Kapasitas produksi 150.000 MT/bulan. Cek ketersediaan dan jadwal pengiriman ke lokasi Anda.', value_en: '150,000 MT/month production capacity. Check availability and shipping schedule to your location.' },
  { key: 'cta.availability.button', group: 'cta', type: 'text', label: 'CTA "Ketersediaan" — tombol', value_id: 'Cek Ketersediaan →', value_en: 'Check Availability →' },
];

const FOOTER: BlockSeed[] = [
  { key: 'footer.description', group: 'footer', type: 'textarea', label: 'Paragraf deskripsi perusahaan', value_id: 'Industrial Batu Kapur/Gamping (General Trade, Mining & Supplier). Dedicated to sustainable growth and excellence in the mining industry.', value_en: 'Industrial Limestone (General Trade, Mining & Supplier). Dedicated to sustainable growth and excellence in the mining industry.' },
  { key: 'footer.contact_heading', group: 'footer', type: 'text', label: 'Judul kolom kontak', value_id: 'Contact Info', value_en: 'Contact Info' },
  { key: 'footer.quicklinks_heading', group: 'footer', type: 'text', label: 'Judul kolom tautan cepat', value_id: 'Quick Links', value_en: 'Quick Links' },
  { key: 'footer.rights', group: 'footer', type: 'text', label: 'Teks hak cipta', value_id: 'Seluruh Hak Cipta Dilindungi.', value_en: 'All Rights Reserved.' },
];

const NAV: BlockSeed[] = [
  { key: 'nav.home', group: 'nav', type: 'text', label: 'Menu — Beranda', value_id: 'Home', value_en: 'Home' },
  { key: 'nav.products', group: 'nav', type: 'text', label: 'Menu — Produk', value_id: 'Produk', value_en: 'Products' },
  { key: 'nav.about', group: 'nav', type: 'text', label: 'Menu — Tentang Kami', value_id: 'Tentang Kami', value_en: 'About Us' },
  { key: 'nav.catalog', group: 'nav', type: 'text', label: 'Menu — Katalog', value_id: 'Katalog', value_en: 'Catalog' },
  { key: 'nav.contact', group: 'nav', type: 'text', label: 'Menu — tombol Hubungi Kami', value_id: 'Hubungi Kami', value_en: 'Contact Us' },
];

export const DEFAULT_CONTENT_BLOCKS: ContentBlock[] = [
  ...HOME,
  ...TRUSTBAR,
  ...CTA,
  ...FOOTER,
  ...NAV,
].map((b, i) => ({ ...b, sort_order: i }));

/** Human-readable group order + titles for the dashboard. */
export const CONTENT_GROUPS: { key: string; title: string }[] = [
  { key: 'home', title: 'Beranda (Landing Page)' },
  { key: 'trustbar', title: 'Trust Bar / Kapasitas' },
  { key: 'cta', title: 'Blok Ajakan (CTA)' },
  { key: 'footer', title: 'Footer' },
  { key: 'nav', title: 'Menu Navigasi' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

export function blocksToMap(blocks: Pick<ContentBlock, 'key' | 'value_id' | 'value_en'>[]): ContentMap {
  const map: ContentMap = {};
  for (const b of blocks) map[b.key] = { id: b.value_id, en: b.value_en };
  return map;
}

/** The fallback ContentMap built from the defaults above. */
export const DEFAULT_CONTENT_MAP: ContentMap = blocksToMap(DEFAULT_CONTENT_BLOCKS);
