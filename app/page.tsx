import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { allProducts } from '../src/data/products';
import CTASection from '../src/components/CTASection';

export const metadata: Metadata = {
  title: 'PT Wira Energi Utama | Supplier Batu Kapur & CaCO3 Industri — Sulawesi Utara',
  description: 'Produsen dan supplier batu kapur (limestone), CaCO3, kapur bakar, kapur padam, dan PCC berkualitas tinggi. Produksi 150.000 MT/bulan, distribusi via Pelabuhan Bitung. IUP OP resmi dari Sulawesi Utara.',
  alternates: {
    canonical: 'https://ptweu.company',
    languages: {
      id: 'https://ptweu.company',
      en: 'https://ptweu.company/en',
    },
  },
};

// Static product summaries — no full data import
const productSummaries = allProducts.map((p) => ({
  name: p.name_id,
  slug: p.slug_id,
  image: p.image,
  subtitle: p.hero_subtitle_id,
}));

const trustStats = [
  { value: '150.000 MT', label: 'Kapasitas Produksi / Bulan', desc: 'Didukung Crusher 250 TPH 24/7' },
  { value: '97 Ha', label: 'Luas Area IUP OP', desc: 'Deposit batu kapur Ratatotok, CaO > 55%' },
  { value: '3 Pelabuhan', label: 'Jalur Distribusi Laut', desc: 'Bitung · Kotabunan · Belang' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0A1628]"
        aria-label="Hero — PT Wira Energi Utama"
      >
        <Image
          src="/Hero.webp"
          alt="Tambang batu kapur PT Wira Energi Utama di Ratatotok, Minahasa Tenggara, Sulawesi Utara"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <p className="text-[#C8A84B] text-sm font-semibold tracking-widest uppercase mb-4">
            IUP OP No. 91201019114410010 · Ratatotok, Sulawesi Utara
          </p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Supplier Batu Kapur &amp; CaCO3 Industri
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
            Produksi <strong className="text-[#C8A84B]">150.000 MT/bulan</strong> &bull;{' '}
            Distribusi via Pelabuhan Bitung &bull; Crusher 250 TPH
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-bold rounded-xl text-base transition-all duration-200 shadow-xl hover:scale-105"
            >
              Mulai Penawaran Harga
            </Link>
            <Link
              href="/produk"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/30 hover:border-[#C8A84B] text-white font-semibold rounded-xl text-base transition-all duration-200"
            >
              Lihat Katalog Produk
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <section
        id="trust"
        className="bg-white border-b border-gray-100"
        aria-label="Kapasitas dan kemampuan produksi PT WEU"
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-center text-[#C8A84B] text-xs font-bold tracking-widest uppercase mb-2">
            Didukung Legalitas IUP OP Resmi · April 2024
          </p>
          <h2 className="text-center text-[#0A1628] text-2xl sm:text-3xl font-bold mb-12">
            Kapasitas Produksi Skala Industri
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {trustStats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <dt className="text-4xl font-extrabold text-[#0A1628]">{stat.value}</dt>
                <dd className="mt-2 text-base font-semibold text-[#C8A84B]">{stat.label}</dd>
                <p className="mt-1 text-sm text-gray-500">{stat.desc}</p>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {['Sucofindo', 'Intertek', 'Minertech', 'SMK3 Certified'].map((lab) => (
              <span key={lab} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#C8A84B]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {lab}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT PREVIEW ──────────────────────────────────────────────── */}
      <section
        id="produk"
        className="bg-gray-50 py-20"
        aria-label="Preview produk unggulan PT Wira Energi Utama"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl sm:text-3xl font-bold mb-2">
            Produk Mineral Industri Kami
          </h2>
          <p className="text-gray-500 mb-10">
            5 produk turunan batu kapur berkualitas tinggi — tersedia dalam berbagai spesifikasi teknis sesuai kebutuhan industri Anda.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productSummaries.map((product) => (
              <Link
                key={product.slug}
                href={`/produk/${product.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#C8A84B]/40 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={`${product.name} — PT Wira Energi Utama`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[#0A1628] font-bold text-lg leading-snug">{product.name}</h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.subtitle}</p>
                  <span className="mt-4 inline-flex items-center text-[#C8A84B] font-semibold text-sm">
                    Lihat Spesifikasi
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/produk"
              className="inline-flex items-center px-8 py-3 border-2 border-[#0A1628] text-[#0A1628] font-bold rounded-lg hover:bg-[#0A1628] hover:text-white transition-colors duration-200"
            >
              Lihat Semua Produk &amp; Spesifikasi Teknis
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────────────── */}
      <CTASection
        type="quote"
        lang="id"
        variant="dark"
      />
    </>
  );
}
