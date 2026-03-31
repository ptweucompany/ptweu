import Link from 'next/link';
import type { Metadata } from 'next';
import { locations } from '../../src/data/locations';

export const metadata: Metadata = {
  title: 'Cakupan Distribusi | PT Wira Energi Utama — Sulawesi Utara',
  description: 'Distribusi mineral industri PT WEU: Manado, Sulawesi Utara, Bitung, dan seluruh Indonesia. Via jetty khusus dan Pelabuhan Bitung internasional.',
  alternates: { canonical: 'https://ptweu.company/lokasi', languages: { id: 'https://ptweu.company/lokasi', en: 'https://ptweu.company/en/locations' } },
};

export default function LokasiListPage() {
  return (
    <main>
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-widest mb-2">Distribusi Nasional</p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold">Cakupan Distribusi</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">Dari Ratatotok via Pelabuhan Bitung — menjangkau seluruh Indonesia dan pasar ekspor Asia.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {locations.map((loc) => (
            <Link key={loc.slug} href={`/lokasi/${loc.slug}`} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C8A84B]/50 hover:shadow-lg transition-all duration-300">
              <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-wider mb-2">{loc.region_id}</p>
              <h2 className="text-[#0A1628] text-xl font-bold mb-2">{loc.name_id}</h2>
              <p className="text-gray-500 text-sm line-clamp-3">{loc.overview_id.slice(0, 130)}...</p>
              <div className="mt-4 flex flex-wrap gap-1">
                {loc.key_ports.slice(0, 2).map((p) => (<span key={p} className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600">{p.split('—')[0].trim()}</span>))}
              </div>
              <span className="mt-4 inline-flex items-center text-[#C8A84B] font-semibold text-sm">Lihat Detail →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
