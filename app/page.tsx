import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { allProducts } from '../src/data/products';

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
              href="/produk"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-bold rounded-lg text-base transition-colors duration-200"
            >
              Lihat Produk Kami
            </Link>
            <a
              href="https://wa.me/628114344168?text=Halo%20PT%20WEU%2C%20saya%20ingin%20menanyakan%20produk%20batu%20kapur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 hover:border-[#C8A84B] text-white font-semibold rounded-lg text-base transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Langsung
            </a>
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
      <section
        id="cta"
        className="bg-[#0A1628] py-20"
        aria-label="Hubungi PT Wira Energi Utama"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
            Butuh Batu Kapur atau Mineral Industri?
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Tim teknis kami siap membantu menentukan spesifikasi yang tepat dan memberikan penawaran harga kompetitif untuk kebutuhan industri Anda.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/628114344168?text=Halo%20PT%20WEU%2C%20saya%20ingin%20mendapatkan%20penawaran%20batu%20kapur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-lg text-base transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp: 0811 4344 168
            </a>
            <a
              href="tel:+6243426030008"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 hover:border-[#C8A84B] text-white font-semibold rounded-lg text-base transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/>
              </svg>
              Telepon: (0434) 260 3008
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:border-[#C8A84B] text-white font-semibold rounded-lg text-base transition-colors duration-200"
            >
              Form Penawaran
            </Link>
          </div>
          <p className="mt-8 text-gray-500 text-sm">
            Kantor Utama: Taman Sari Cluster Lihaga, Blok H3-3, Manado, Sulawesi Utara 95256
          </p>
        </div>
      </section>
    </>
  );
}
