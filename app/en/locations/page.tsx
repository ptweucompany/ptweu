import Link from 'next/link';
import type { Metadata } from 'next';
import { exportDestinations } from '../../../src/data/locations';

export const metadata: Metadata = {
  title: 'Export Markets | PT Wira Energi Utama — Limestone Export from Indonesia',
  description: 'Export limestone, quicklime, and CaCO3 from Indonesia to Australia, China, Singapore, and Asia. FOB Port Bitung. MOQ 7,500–10,000 MT.',
  alternates: { canonical: 'https://ptweu.company/en/locations', languages: { en: 'https://ptweu.company/en/locations', id: 'https://ptweu.company/lokasi' } },
};

export default function EnLocationsListPage() {
  return (
    <main>
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-widest mb-2">4 Export Markets</p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold">Export Markets &amp; Locations</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">FOB Port Bitung (KEK North Sulawesi) — supplying Asia Pacific industrial mineral demand.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {exportDestinations.map((dest) => (
            <Link key={dest.slug} href={`/en/locations/${dest.slug}`} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C8A84B]/50 hover:shadow-lg transition-all duration-300">
              <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-wider mb-2">{dest.region_en}</p>
              <h2 className="text-[#0A1628] text-xl font-bold mb-1">Export to {dest.country_en}</h2>
              <p className="text-gray-400 text-xs mb-3">≈{dest.distance_nm.toLocaleString()} NM · ≈{dest.vessel_days} days transit · MOQ: {dest.moq_mt}</p>
              <p className="text-gray-500 text-sm line-clamp-3">{dest.overview_en.slice(0, 130)}...</p>
              <div className="mt-4 flex flex-wrap gap-1">
                {dest.products_in_demand.slice(0, 2).map((p) => (<span key={p.name_en} className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600">{p.name_en}</span>))}
              </div>
              <span className="mt-4 inline-flex items-center text-[#C8A84B] font-semibold text-sm">View Export Details →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
