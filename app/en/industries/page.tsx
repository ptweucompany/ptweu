import Link from 'next/link';
import type { Metadata } from 'next';
import { industriesFull } from '../../../src/data/industryFull';

export const metadata: Metadata = {
  title: 'Industries Served | PT Wira Energi Utama — North Sulawesi',
  description: 'Industrial mineral solutions for 6 key sectors: Cement, Steel, Power Plant, Chemical, Agriculture, and Construction. Limestone supplier from North Sulawesi, Indonesia.',
  alternates: { canonical: 'https://ptweu.company/en/industries', languages: { en: 'https://ptweu.company/en/industries', id: 'https://ptweu.company/industri' } },
};

export default function EnIndustriesListPage() {
  return (
    <main>
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-widest mb-2">6 Industry Sectors</p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold">Industries We Serve</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">Data-driven mineral solutions from Ratatotok limestone — serving 6 key industrial sectors.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesFull.map((ind) => (
            <Link key={ind.slug_en} href={`/en/industries/${ind.slug_en}`} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C8A84B]/50 hover:shadow-lg transition-all duration-300">
              <h2 className="text-[#0A1628] text-xl font-bold mb-2">{ind.name_en}</h2>
              <p className="text-gray-500 text-sm line-clamp-3">{ind.overview_en.slice(0, 120)}...</p>
              <div className="mt-4 flex flex-wrap gap-1">
                {ind.products_used.map((p) => (<span key={p.slug_en} className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600">{p.name_en}</span>))}
              </div>
              <span className="mt-4 inline-flex items-center text-[#C8A84B] font-semibold text-sm">View Details →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
