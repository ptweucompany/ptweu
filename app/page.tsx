import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import { allProducts } from '../src/data/products';

export const dynamic = 'force-static';
export const revalidate = 86400;

// 🔧 PART 3 — PERFORMANCE: DYNAMIC IMPORTS FOR BELOW-THE-FOLD SECTIONS
const TrustBar = nextDynamic(() => import('../src/components/landing/TrustBar'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> 
});
const ProductPreview = nextDynamic(() => import('../src/components/landing/ProductPreview'), { 
  ssr: true,
  loading: () => <div className="h-[600px] bg-white animate-pulse" />
});
const CTASection = nextDynamic(() => import('../src/components/CTASection'), { 
  ssr: true 
});

export const metadata: Metadata = {
  title: 'PT Wira Energi Utama | Supplier Batu Kapur & CaCO3 Industri — Sulawesi Utara',
  description: 'Produsen dan supplier batu kapur (limestone), CaCO3, kapur bakar, kapur padam, dan PCC berkualitas tinggi. Produksi 150.000 MT/bulan, distribusi via Pelabuhan Bitung. IUP OP resmi dari Sulawesi Utara.',
  alternates: {
    canonical: 'https://wiraenergiutama.com',
    languages: {
      id: 'https://wiraenergiutama.com',
      en: 'https://wiraenergiutama.com/en',
    },
  },
};

const productSummaries = allProducts.map((p) => ({
  name: p.name_id,
  slug: p.slug_id,
  image: p.image,
  subtitle: p.hero_subtitle_id,
}));

export default function HomePage() {
  return (
    <>
      {/* ── HERO (PERFORMANCE OPTIMIZED) ─────────────────────────────────── */}
      <section
        id="hero"
        className="relative h-[100svh] lg:h-[90vh] flex items-center overflow-hidden bg-[#0A1628]"
        aria-label="Hero — PT Wira Energi Utama"
      >
        <Image
          src="/Hero.webp"
          alt="Tambang batu kapur PT Wira Energi Utama di Ratatotok, Minahasa Tenggara, Sulawesi Utara"
          fill
          priority
          loading="eager"
          fetchPriority="high"
          decoding="async"
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover object-center opacity-40 transition-opacity duration-500"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <p className="text-[#C8A84B] text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Mining, General Trading & Industrial Supplier
          </p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] max-w-4xl tracking-tight">
            PT <span className="text-[#C8A84B]">Wira Energi</span> Utama
          </h1>
          <div className="mt-6 flex flex-col gap-1.5 border-l-4 border-[#C8A84B] pl-6 py-1">
            <p className="text-white text-xl sm:text-2xl font-bold tracking-tight">
              Supplier Batu Kapur & CaCO3 Industri
            </p>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Produksi <strong className="text-[#C8A84B]">150.000 MT/bulan</strong> &bull; Distribusi via Pelabuhan Bitung, Belang & Kotabunan &bull; Crusher 250 TPH
            </p>
          </div>
          
          {/* 🔧 PART 4 — CONVERSION: REINFORCED CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center px-12 py-5 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-black rounded-xl text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(200,168,75,0.3)] hover:translate-y-[-2px]"
            >
              Minta Penawaran Harga
            </Link>
            <Link
              href="/produk"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/40 hover:border-[#C8A84B] text-white font-bold rounded-xl text-lg transition-all duration-300 hover:bg-white/5"
            >
              Katalog Produk
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR (LAZY LOADED) ──────────────────────────────────────── */}
      <TrustBar />

      {/* 🔧 PART 1.2 — MID-CONTENT CONVERSION PRESSURE */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-[#0A1628] text-2xl sm:text-3xl font-black mb-2 uppercase tracking-tight">Ketersediaan Kapasitas 150.000 MT/Bulan</h2>
            <p className="text-gray-600 font-medium">Siap mensuplai kebutuhan industri skala besar dengan logistik terintegrasi.</p>
          </div>
          <Link 
            href="/kontak?inquiry=bulk-supply"
            className="w-full md:w-auto px-12 py-5 bg-[#0A1628] text-white font-black rounded-2xl hover:bg-[#1a2b45] transition-all shadow-xl text-center whitespace-nowrap"
          >
            Konsultasi Suplai Besar →
          </Link>
        </div>
      </section>

      {/* ── PRODUCT PREVIEW (LAZY LOADED) ─────────────────────────────────── */}
      <ProductPreview products={productSummaries} />

      {/* ── CTA SECTION (BOTTOM REINFORCEMENT) ───────────────────────────── */}
      <CTASection
        type="quote"
        lang="id"
        variant="dark"
        customHeading="Butuh Supplier Mineral Industri Terpercaya?"
        customCTA="Hubungi Sales Engineer Kami →"
      />
    </>
  );
}
