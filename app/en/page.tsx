import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { allProducts } from '../../src/data/products';

// 🔧 PART 3 — PERFORMANCE: DYNAMIC IMPORTS
const TrustBar = dynamic(() => import('../../src/components/landing/TrustBar'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> 
});
const ProductPreview = dynamic(() => import('../../src/components/landing/ProductPreview'), { 
  ssr: true,
  loading: () => <div className="h-[600px] bg-white animate-pulse" />
});
const CTASection = dynamic(() => import('../../src/components/CTASection'), { 
  ssr: true 
});

export const metadata: Metadata = {
  title: 'PT Wira Energi Utama | Limestone & CaCO3 Industrial Supplier — North Sulawesi',
  description: 'Leading producer and supplier of Limestone, CaCO3, Quicklime, Hydrated Lime, and PCC in North Sulawesi, Indonesia. Production 150,000 MT/month. Distribution via Port Bitung.',
  alternates: {
    canonical: 'https://ptweu.company/en',
    languages: {
      en: 'https://ptweu.company/en',
      id: 'https://ptweu.company',
    },
  },
};

export default function EnHomePage() {
  const productSummaries = allProducts.map((p) => ({
    name: p.name_en,
    slug: p.slug_en,
    image: p.image,
    subtitle: p.hero_subtitle_en,
  }));

  return (
    <main>
      {/* ── HERO (PERFORMANCE OPTIMIZED) ─────────────────────────────────── */}
      <section className="relative h-[100svh] lg:h-[90vh] flex items-center overflow-hidden bg-[#0A1628]">
        <Image 
          src="/Hero.webp" 
          alt="PT Wira Energi Utama limestone quarry in Ratatotok, North Sulawesi" 
          fill 
          priority 
          loading="eager"
          quality={85} 
          sizes="100vw" 
          className="object-cover opacity-40 transition-opacity duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-transparent" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <p className="text-[#C8A84B] text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Mining, General Trading & Industrial Supplier
          </p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] max-w-4xl tracking-tight">
            PT <span className="text-[#C8A84B]">Wira Energi</span> Utama
          </h1>
          <div className="mt-6 flex flex-col gap-1.5 border-l-4 border-[#C8A84B] pl-6 py-1">
            <p className="text-white text-xl sm:text-2xl font-bold tracking-tight">
              Industrial Limestone & CaCO3 Supplier
            </p>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              150,000 MT Monthly Production &bull; Multi-Port Distribution (Bitung, Belang & Kotabunan) &bull; 250 TPH Crusher
            </p>
          </div>
          
          {/* 🔧 PART 4 — CONVERSION: REINFORCED CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center px-12 py-5 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-black rounded-xl text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(200,168,75,0.3)]"
            >
              Start Export Inquiry
            </Link>
            <Link
              href="/en/products"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/40 hover:border-[#C8A84B] text-white font-bold rounded-xl text-lg transition-all duration-300"
            >
              View Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR (LAZY LOADED) ──────────────────────────────────────── */}
      <TrustBar lang="en" />

      {/* 🔧 PART 1.2 — MID-CONTENT CONVERSION PRESSURE */}
      <section className="bg-gray-50 py-12 border-y border-gray-200 text-left">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-[#0A1628] text-2xl sm:text-3xl font-black mb-2 uppercase tracking-tight">Available Capacity of 150,000 MT/Month</h2>
            <p className="text-gray-600 font-medium italic border-l-4 border-[#C8A84B] pl-4">Ready to support large-scale industrial requirements with fully integrated logistics.</p>
          </div>
          <Link 
            href="/en/contact?inquiry=bulk-supply"
            className="w-full md:w-auto px-12 py-5 bg-[#C8A84B] text-[#0A1628] font-black rounded-2xl hover:bg-[#b8933b] transition-all shadow-xl text-center whitespace-nowrap uppercase tracking-widest text-sm"
          >
            Inquire Bulk Supply →
          </Link>
        </div>
      </section>

      {/* ── PRODUCT PREVIEW (LAZY LOADED) ─────────────────────────────────── */}
      <ProductPreview products={productSummaries} />

      {/* ── CTA SECTION (BOTTOM REINFORCEMENT) ───────────────────────────── */}
      <CTASection
        type="quote"
        lang="en"
        variant="dark"
        customHeading="Looking for a Reliable Mineral Partner?"
        customCTA="Contact Our Sales Engineer →"
      />
    </main>
  );
}
