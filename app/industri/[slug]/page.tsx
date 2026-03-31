import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { industriesFullBySlug, industrySlugsID } from '../../../src/data/industryFull';
import { allProducts } from '../../../src/data/products';
import { ports } from '../../../src/data/logistics';
import { company } from '../../../src/data/company';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return industrySlugsID.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = industriesFullBySlug[slug];
  if (!ind) return {};
  const BASE = 'https://ptweu.company';
  return {
    title: `${ind.name_id} | Supplier Mineral Industri PT Wira Energi Utama`,
    description: ind.overview_id.slice(0, 155),
    keywords: [ind.name_id, 'batu kapur industri', 'PT Wira Energi Utama', 'Sulawesi Utara', ind.products_used[0]?.name_id],
    alternates: {
      canonical: `${BASE}/industri/${slug}`,
      languages: { id: `${BASE}/industri/${slug}`, en: `${BASE}/en/industries/${ind.slug_en}` },
    },
    openGraph: { title: `${ind.name_id} | PT Wira Energi Utama`, description: ind.overview_id.slice(0, 155), url: `${BASE}/industri/${slug}` },
    twitter: { card: 'summary_large_image', title: `${ind.name_id} | PT Wira Energi Utama` },
  };
}

export default async function IndustriPage({ params }: Props) {
  const { slug } = await params;
  const ind = industriesFullBySlug[slug];
  if (!ind) notFound();
  const BASE = 'https://ptweu.company';

  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: ind.schema_service_id,
    description: ind.overview_id.slice(0, 200),
    provider: { '@type': 'Organization', name: company.legal_name, url: BASE },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    serviceType: ind.name_id,
  };

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* 1. HERO */}
      <section className="relative bg-[#0A1628] min-h-[60vh] flex items-end overflow-hidden">
        <Image src={ind.hero_bg} alt={`${ind.name_id} — PT Wira Energi Utama`} fill priority quality={80} sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-[#C8A84B]">Beranda</Link></li>
              <li>/</li>
              <li><Link href="/industri" className="hover:text-[#C8A84B]">Industri</Link></li>
              <li>/</li>
              <li className="text-[#C8A84B]" aria-current="page">{ind.name_id}</li>
            </ol>
          </nav>
          <span className="inline-block px-3 py-1 bg-[#C8A84B]/20 border border-[#C8A84B]/40 text-[#C8A84B] text-xs font-bold rounded-full mb-3">{ind.hero_tag}</span>
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight max-w-3xl">{ind.name_id}</h1>
          <p className="text-gray-300 text-lg mt-3 max-w-2xl">Solusi mineral industri dari PT Wira Energi Utama — Ratatotok, Sulawesi Utara</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href={`https://wa.me/628114344168?text=Halo%20PT%20WEU%2C%20saya%20dari%20${encodeURIComponent(ind.name_id)}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-bold rounded-lg transition-colors">
              Request Penawaran
            </a>
            <Link href="/catalog" className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-lg hover:border-[#C8A84B] transition-colors">
              Unduh Katalog
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY OVERVIEW */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Ikhtisar {ind.name_id}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{ind.overview_id}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-[#0A1628] font-bold mb-4">Produk Yang Digunakan</h3>
            <div className="space-y-4">
              {ind.products_used.map((p) => (
                <div key={p.slug_id} className="flex gap-4">
                  <div className="flex-1">
                    <Link href={`/produk/${p.slug_id}`} className="font-semibold text-[#0A1628] hover:text-[#C8A84B] transition-colors">{p.name_id}</Link>
                    <p className="text-gray-500 text-sm mt-1">{p.role_id}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ROLE OF LIMESTONE */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Peran Batu Kapur / CaCO3 dalam {ind.name_id}</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{ind.limestone_role_id}</p>
        </div>
      </section>

      {/* 4. TECHNICAL REQUIREMENTS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Persyaratan Teknis Mineral</h2>
          <p className="text-gray-500 mb-8">Spesifikasi minimum yang diperlukan industri ini — semua terpenuhi oleh produk PT WEU.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#0A1628] text-white"><th className="px-6 py-3 text-left font-semibold">Parameter</th><th className="px-6 py-3 text-left font-semibold">Nilai / Standar</th></tr></thead>
              <tbody>
                {ind.tech_requirements.map((r, i) => (
                  <tr key={r.param} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-3 text-gray-700 font-medium">{r.param}</td>
                    <td className="px-6 py-3 text-[#0A1628] font-bold">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. PROCESS INTEGRATION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Integrasi dalam Proses Industri</h2>
          <ol className="space-y-4">
            {ind.process_steps_id.map((step, i) => (
              <li key={i} className="flex gap-5 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <span className="flex-shrink-0 w-10 h-10 bg-[#0A1628] text-[#C8A84B] rounded-full flex items-center justify-center font-bold text-lg">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-[#0A1628]">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. PAIN POINTS */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-white text-2xl font-bold mb-2">Tantangan Utama Industri</h2>
          <p className="text-gray-400 mb-8">Masalah yang sering dihadapi dan bagaimana PT WEU mengatasinya.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ind.pain_points_id.map((pain, i) => (
              <div key={i} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <p className="text-gray-300 text-sm">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WEU VALUE PROPOSITION */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Solusi PT Wira Energi Utama</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{ind.weu_value_id}</p>
        </div>
      </section>

      {/* 8. PRODUCTION CAPABILITY */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Kapabilitas Produksi</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { dt: 'Kapasitas Crusher', dd: '250 TPH' },
              { dt: 'Produksi Bulanan', dd: '150.000 MT' },
              { dt: 'Operasional', dd: '24/7' },
              { dt: 'Luas IUP OP', dd: '97.05 Ha' },
            ].map((s) => (
              <div key={s.dt} className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm">
                <dt className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{s.dt}</dt>
                <dd className="text-[#0A1628] text-3xl font-extrabold mt-2">{s.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 9. SUPPLY CHAIN FLOW */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Alur Rantai Pasokan</h2>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {['Tambang Ratatotok', 'Crusher 250 TPH', 'QC Lab', 'Jetty Khusus (12m)', 'Port Bitung/Kotabunan', 'Klien Industri'].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="bg-[#0A1628] text-white px-4 py-3 rounded-lg text-sm font-semibold text-center">{step}</div>
                {i < arr.length - 1 && <svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. LOGISTICS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Logistik &amp; Distribusi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ports.map((port) => (
              <div key={port.name} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-[#0A1628]">{port.name}</h3>
                <p className="text-[#C8A84B] text-xs font-semibold mt-1">{port.type}</p>
                <p className="text-gray-500 text-sm mt-2">{port.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. QUALITY CONTROL */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-6">Quality Control &amp; Laboratorium</h2>
            <ul className="space-y-3">
              {['Analisis XRF per 100 MT produksi', 'Verifikasi spesifikasi sebelum loading', 'COA diterbitkan per pesanan', 'Sucofindo / Intertek atas permintaan', 'Slaking test (kapur bakar) per batch', 'Grain size analysis untuk produk halus'].map((item) => (
                <li key={item} className="flex items-start gap-3"><CheckIcon /><span className="text-gray-700 text-sm">{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-6">Sertifikasi &amp; Kepatuhan</h2>
            <ul className="space-y-3">
              {['IUP OP No. 91201019114410010 — aktif', 'SMK3 Certified', 'ISO 9001:2015 — dalam proses', 'ISO 14001:2015 — dalam proses', 'ISO 45001:2018 — dalam proses', 'UKL-UPL (SK No. 503/DPMPTSPD/880/X/2023)'].map((item) => (
                <li key={item} className="flex items-start gap-3"><CheckIcon /><span className="text-gray-700 text-sm">{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 12. CASE SIMULATION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Simulasi Kasus Nyata</h2>
          <div className="bg-white rounded-2xl border border-[#C8A84B]/30 p-8">
            <p className="text-gray-700 leading-relaxed text-lg">{ind.case_scenario_id}</p>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">FAQ — {ind.name_id}</h2>
          <div className="space-y-4">
            {ind.faq_id.map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#0A1628] list-none">
                  {item.q}
                  <svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 14. INTERNAL LINKS */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-lg font-bold mb-6">Halaman Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Produk Relevan</h3>
              <div className="flex flex-wrap gap-2">
                {ind.products_used.map((p) => (
                  <Link key={p.slug_id} href={`/produk/${p.slug_id}`} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#C8A84B] hover:text-[#0A1628] transition-colors">{p.name_id}</Link>
                ))}
                {allProducts.filter((p) => !ind.products_used.find((u) => u.slug_id === p.slug_id)).slice(0, 2).map((p) => (
                  <Link key={p.slug_id} href={`/produk/${p.slug_id}`} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8A84B] transition-colors">{p.name_id}</Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Lokasi Distribusi</h3>
              <div className="flex flex-wrap gap-2">
                {[{ href: '/lokasi/bitung', label: 'Distribusi via Bitung' }, { href: '/lokasi/sulawesi-utara', label: 'Sulawesi Utara' }, { href: '/lokasi/indonesia', label: 'Nasional Indonesia' }].map((link) => (
                  <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8A84B] hover:text-[#0A1628] transition-colors">{link.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. CTA */}
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">Butuh Mineral Industri untuk {ind.name_id}?</h2>
          <p className="text-gray-300 mt-4">Tim teknis kami siap membantu menentukan spesifikasi dan memberikan penawaran kompetitif.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/628114344168?text=Halo%20PT%20WEU%2C%20saya%20dari%20${encodeURIComponent(ind.name_id)}%20dan%20membutuhkan%20penawaran`} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-lg transition-colors">
              WhatsApp: 0811 4344 168
            </a>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-[#C8A84B] transition-colors">
              Formulir Penawaran
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
