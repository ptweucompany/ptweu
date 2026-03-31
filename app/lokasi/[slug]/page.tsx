import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locationsBySlug, locationSlugs } from '../../../src/data/locations';
import { allProducts } from '../../../src/data/products';
import { industriesFull } from '../../../src/data/industryFull';
import { legal } from '../../../src/data/company';
import { ports, leadTimes } from '../../../src/data/logistics';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationsBySlug[slug];
  if (!loc) return {};
  const BASE = 'https://ptweu.company';
  return {
    title: `${loc.name_id} | Distribusi Mineral Industri PT Wira Energi Utama`,
    description: loc.overview_id.slice(0, 155),
    alternates: {
      canonical: `${BASE}/lokasi/${slug}`,
      languages: { id: `${BASE}/lokasi/${slug}`, en: `${BASE}/en/locations/${slug}` },
    },
    openGraph: { title: `${loc.name_id} | PT Wira Energi Utama`, description: loc.overview_id.slice(0, 155), url: `${BASE}/lokasi/${slug}` },
  };
}

export default async function LokasiPage({ params }: Props) {
  const { slug } = await params;
  const loc = locationsBySlug[slug];
  if (!loc) notFound();
  const BASE = 'https://ptweu.company';

  const localBusinessSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'PT Wira Energi Utama',
    description: loc.overview_id.slice(0, 200),
    url: BASE,
    telephone: '+62-0434-260-3008',
    address: { '@type': 'PostalAddress', addressLocality: 'Manado', addressRegion: 'Sulawesi Utara', addressCountry: 'ID' },
    ...(loc.geo ? { geo: { '@type': 'GeoCoordinates', latitude: loc.geo.lat, longitude: loc.geo.lng } } : {}),
    areaServed: loc.name_id,
  };

  const CheckIcon = () => (
    <svg className="w-4 h-4 text-[#C8A84B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* 1. HERO */}
      <section className="relative bg-[#0A1628] min-h-[55vh] flex items-end overflow-hidden">
        <Image src="/mining-bg.webp" alt={`${loc.name_id} — Distribusi PT Wira Energi Utama`} fill priority quality={80} sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-[#C8A84B]">Beranda</Link></li>
              <li>/</li>
              <li><Link href="/lokasi" className="hover:text-[#C8A84B]">Lokasi</Link></li>
              <li>/</li>
              <li className="text-[#C8A84B]" aria-current="page">{loc.name_id}</li>
            </ol>
          </nav>
          <p className="text-[#C8A84B] text-sm font-bold tracking-widest uppercase mb-2">{loc.region_id}</p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold max-w-3xl">{loc.name_id}</h1>
          <p className="text-gray-300 text-lg mt-3">Distribusi Mineral Industri — PT Wira Energi Utama</p>
          <div className="mt-8">
            <a href="https://wa.me/628114344168" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-bold rounded-lg transition-colors">
              Tanya Distribusi ke {loc.name_id}
            </a>
          </div>
        </div>
      </section>

      {/* 2. REGIONAL OVERVIEW */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Ikhtisar Regional</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{loc.overview_id}</p>
        </div>
      </section>

      {/* 3. GEOLOGICAL ADVANTAGE */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Keunggulan Geologis</h2>
            <p className="text-gray-600 leading-relaxed">{loc.geological_advantage_id}</p>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden">
            <Image src="/mining-bg.webp" alt="Tambang Ratatotok — PT Wira Energi Utama" fill loading="lazy" sizes="50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION CAPACITY */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Kapasitas Produksi</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { dt: 'Produksi / Bulan', dd: `${(loc.production_mt_month / 1000).toFixed(0)}.000 MT` },
              { dt: 'Luas IUP OP', dd: `${loc.iup_area_ha} Ha` },
              { dt: 'Kapasitas Crusher', dd: '250 TPH' },
              { dt: 'Draft Jetty', dd: '12 Meter' },
            ].map((s) => (
              <div key={s.dt} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <dt className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{s.dt}</dt>
                <dd className="text-[#0A1628] text-3xl font-extrabold mt-2">{s.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5. PORT ACCESS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Akses Pelabuhan</h2>
          <p className="text-gray-500 mb-8">3 pelabuhan distribusi melayani kebutuhan industri dari skala regional hingga internasional.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ports.map((port) => (
              <div key={port.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-[#0A1628] font-bold">{port.name}</h3>
                <p className="text-[#C8A84B] text-xs font-semibold mt-1">{port.type}</p>
                <p className="text-gray-500 text-sm mt-2">{port.role}</p>
                <p className="text-gray-400 text-xs mt-1">{port.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DISTRIBUTION & LEAD TIME */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-6">Cakupan Distribusi</h2>
            <ul className="space-y-2">
              {loc.key_ports.map((port) => (
                <li key={port} className="flex items-start gap-3"><CheckIcon /><span className="text-gray-700 text-sm">{port}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-6">Estimasi Lead Time</h2>
            <dl className="space-y-4">
              {[
                { dt: 'Lokal / Regional', dd: loc.lead_time_local },
                { dt: 'Antar Pulau', dd: loc.lead_time_regional },
                { dt: 'Ekspor Internasional', dd: leadTimes.export },
              ].map((item) => (
                <div key={item.dt} className="flex justify-between py-3 border-b border-gray-100">
                  <dt className="text-gray-500 text-sm">{item.dt}</dt>
                  <dd className="text-[#0A1628] font-bold text-sm">{item.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES SERVED */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Industri yang Dilayani</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {loc.industries_served.map((ind) => (
              <div key={ind} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                <p className="text-[#0A1628] font-semibold text-sm">{ind}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEGAL & COMPLIANCE */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-white text-2xl font-bold mb-8">Legalitas &amp; Kepatuhan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'IUP Operasi Produksi', value: `No. ${legal.iup_number}`, sub: `Aktif sejak ${legal.iup_valid_since}` },
              { label: 'Luas IUP OP', value: `${legal.iup_area_ha} Ha`, sub: 'Ratatotok, Minahasa Tenggara' },
              { label: 'Dokumen UKL-UPL', value: 'SK No. 503/DPMPTSPD/880/X/2023', sub: 'Area 10.3 Ha' },
              { label: 'PKKPR Laut', value: legal.pkkpr_laut_no, sub: `Area perairan ${legal.pkkpr_laut_area_ha} Ha` },
              { label: 'Sertifikasi K3', value: 'SMK3 Active', sub: 'Zero fatality record' },
              { label: 'ISO Roadmap', value: '9001 · 14001 · 45001', sub: 'Dalam proses sertifikasi' },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-wider">{item.label}</p>
                <p className="text-white font-semibold mt-1">{item.value}</p>
                <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. COMPETITIVE ADVANTAGE */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Keunggulan Kompetitif Geografis</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{loc.competitive_advantage_id}</p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">FAQ — {loc.name_id}</h2>
          <div className="space-y-4">
            {loc.faq_id.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100">
                <summary className="flex justify-between p-6 cursor-pointer font-semibold text-[#0A1628] list-none">
                  {item.q}
                  <svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. INTERNAL LINKS */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-[#0A1628] text-lg font-bold mb-4">Produk Tersedia</h2>
            <div className="flex flex-wrap gap-2">
              {loc.related_products.map((p) => (
                <Link key={p.slug_id} href={`/produk/${p.slug_id}`} className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8A84B] hover:text-[#0A1628] transition-colors">{p.name_id}</Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[#0A1628] text-lg font-bold mb-4">Industri yang Dilayani</h2>
            <div className="flex flex-wrap gap-2">
              {loc.related_industries.map((ind) => (
                <Link key={ind.slug_id} href={`/industri/${ind.slug_id}`} className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8A84B] hover:text-[#0A1628] transition-colors">{ind.name_id}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">Distribusi ke {loc.name_id}</h2>
          <p className="text-gray-300 mt-4">Hubungi kami untuk informasi pengiriman, jadwal tongkang, dan penawaran harga ke wilayah Anda.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/628114344168" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-lg">
              WhatsApp: 0811 4344 168
            </a>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-[#C8A84B] transition-colors">Form Penawaran</Link>
          </div>
        </div>
      </section>
    </>
  );
}
