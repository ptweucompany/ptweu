import Link from 'next/link';
import type { Metadata } from 'next';
import { industriesFull } from '../../src/data/industryFull';

export const metadata: Metadata = {
  title: 'Industri yang Kami Layani | PT Wira Energi Utama — Sulawesi Utara',
  description: '6 sektor industri utama yang dilayani PT WEU: Semen, Baja, PLTU, Kimia, Pertanian, dan Konstruksi. Supplier mineral industri dari Ratatotok, Sulawesi Utara.',
  alternates: { canonical: 'https://ptweu.company/industri', languages: { id: 'https://ptweu.company/industri', en: 'https://ptweu.company/en/industries' } },
};

export default function IndustriPage() {
  return (
    <main>
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-widest mb-2">6 Sektor Industri</p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold">Industri yang Kami Layani</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">Solusi mineral industri dari batu kapur Ratatotok untuk 6 sektor strategis nasional.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesFull.map((ind) => (
            <Link key={ind.slug_id} href={`/industri/${ind.slug_id}`} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C8A84B]/50 hover:shadow-lg transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-[#0A1628]/5 text-[#0A1628] text-xs font-bold rounded-full mb-3">{ind.hero_tag}</span>
              <h2 className="text-[#0A1628] text-xl font-bold mb-2">{ind.name_id}</h2>
              <p className="text-gray-500 text-sm line-clamp-3">{ind.overview_id.slice(0, 120)}...</p>
              <div className="mt-4 flex flex-wrap gap-1">
                {ind.products_used.map((p) => (<span key={p.slug_id} className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600">{p.name_id}</span>))}
              </div>
              <span className="mt-4 inline-flex items-center text-[#C8A84B] font-semibold text-sm">Lihat Detail →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
