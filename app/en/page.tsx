import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { allProducts } from '../../src/data/products';

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
  return (
    <main>
      <section className="relative bg-[#0A1628] min-h-[80vh] flex items-center overflow-hidden">
        <Image src="/Hero.webp" alt="PT Wira Energi Utama limestone quarry in Ratatotok, North Sulawesi" fill priority quality={80} sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <p className="text-[#C8A84B] text-sm font-semibold tracking-widest uppercase mb-4">IUP OP No. 91201019114410010 · Ratatotok, North Sulawesi</p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">Industrial Limestone &amp; Mineral Supplier</h1>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl leading-relaxed">
            Production <strong className="text-[#C8A84B]">150,000 MT/month</strong> · Distribution via Port Bitung · 250 TPH Crusher
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/en/products" className="inline-flex items-center justify-center px-8 py-4 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-bold rounded-lg transition-colors duration-200">
              View Our Products
            </Link>
            <a href="https://wa.me/628114344168" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-[#C8A84B] transition-colors duration-200">
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-10 text-center">Our Mineral Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((p) => (
              <Link key={p.slug_en} href={`/en/products/${p.slug_en}`} className="group overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#C8A84B]/40 hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={p.image} alt={`${p.name_en} — PT Wira Energi Utama`} fill loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-[#0A1628] font-bold">{p.name_en}</h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{p.hero_subtitle_en}</p>
                  <span className="mt-3 inline-flex items-center text-[#C8A84B] font-semibold text-sm">View Specs →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
