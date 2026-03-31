import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { allProducts } from '../../../src/data/products';

export const metadata: Metadata = {
  title: 'Industrial Mineral Products | PT Wira Energi Utama — North Sulawesi',
  description: 'Explore our complete range: Limestone, CaCO3 (all mesh), Quicklime (CaO), Hydrated Lime (Ca(OH)2), and PCC. High-purity industrial minerals from North Sulawesi, Indonesia.',
  alternates: {
    canonical: 'https://ptweu.company/en/products',
    languages: {
      en: 'https://ptweu.company/en/products',
      id: 'https://ptweu.company/produk',
    },
  },
};

export default function EnProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C8A84B] text-xs font-bold tracking-widest uppercase mb-2">5 Product Lines</p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold">Industrial Mineral Products</h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">High-purity limestone derivatives produced at 150,000 MT/month from Ratatotok, North Sulawesi.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((p) => (
            <Link key={p.slug_en} href={`/en/products/${p.slug_en}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#C8A84B]/40 transition-all duration-300">
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image src={p.image} alt={`${p.name_en} — PT Wira Energi Utama Indonesia`} fill loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h2 className="text-[#0A1628] font-bold text-lg">{p.name_en}</h2>
                <p className="text-[#C8A84B] text-sm font-medium mt-1">{p.hero_subtitle_en}</p>
                <p className="text-gray-500 text-sm mt-3 line-clamp-3">{p.description_en}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.specs.slice(0, 2).map((s) => (
                    <span key={s.label} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">
                      {s.label}: {s.value}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center text-[#C8A84B] font-semibold text-sm">
                  View Full Specifications →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
