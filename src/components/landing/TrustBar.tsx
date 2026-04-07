import Link from 'next/link';

const CONTENT = {
  id: {
    tag: 'Didukung Legalitas IUP OP Resmi · April 2024',
    heading: 'Kapasitas Produksi Skala Industri',
    stats: [
      { value: '150.000 MT', label: 'Kapasitas Produksi / Bulan', desc: 'Didukung Crusher 250 TPH 24/7' },
      { value: '97 Ha', label: 'Luas Area IUP OP', desc: 'Deposit batu kapur Ratatotok, CaO > 55%' },
      { value: '3 Pelabuhan', label: 'Jalur Distribusi Laut', desc: 'Bitung · Kotabunan · Belang' },
    ]
  },
  en: {
    tag: 'Legal IUP OP License Certified · April 2024',
    heading: 'Industrial Scale Production Capacity',
    stats: [
      { value: '150,000 MT', label: 'Production Capacity / Month', desc: 'Supported by 250 TPH Crusher 24/7' },
      { value: '97 Ha', label: 'Official IUP OP Area', desc: 'Limestone deposit in Ratatotok, CaO > 55%' },
      { value: '3 Ports', label: 'Sea Distribution Network', desc: 'Bitung · Kotabunan · Belang' },
    ]
  }
};

export default function TrustBar({ lang = 'id' }: { lang?: 'id' | 'en' }) {
  const c = CONTENT[lang];
  return (
    <section
      id="trust"
      className="bg-white border-b border-gray-100"
      aria-label="Kapasitas dan kemampuan produksi PT WEU"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-center text-[#A68A3B] text-xs font-bold tracking-widest uppercase mb-2">
          {c.tag}
        </p>
        <h2 className="text-center text-[#0A1628] text-2xl sm:text-3xl font-bold mb-12">
          {c.heading}
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {c.stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <dt className="text-4xl font-extrabold text-[#0A1628]">{stat.value}</dt>
              <dd className="mt-2 text-base font-semibold text-[#A68A3B]">{stat.label}</dd>
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
  );
}
