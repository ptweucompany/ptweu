import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { industriesFull, industriesFullBySlug, industrySlugsID } from '../../../src/data/industryFull';
import { allProducts } from '../../../src/data/products';
import { ports } from '../../../src/data/logistics';
import { company } from '../../../src/data/company';
import CTASection from '../../../src/components/CTASection';
import { internalLinks } from '../../../src/data/internalLinks';
import TrustMicroSection from '../../../src/components/TrustMicroSection';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return industrySlugsID.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = industriesFull.find(i => i.slug_id === slug || i.slug_en === slug);
  if (!ind) return {};

  const BASE = 'https://wiraenergiutama.com';

  return {
    title: `${ind.name_id} | Solusi Mineral Industri | PT Wira Energi Utama`,
    description: ind.overview_id.slice(0, 160),
    keywords: [
      ind.name_id, 
      `supplier ${ind.name_id}`, 
      `batu kapur untuk ${ind.name_id}`, 
      'industrial limestone supplier Indonesia', 
      'PT WEU mineral solutions'
    ],
    alternates: {
      canonical: `${BASE}/industri/${ind.slug_id}`,
      languages: {
        'id-ID': `${BASE}/industri/${ind.slug_id}`,
        'en-US': `${BASE}/en/industries/${ind.slug_en || ind.slug_id}`,
      },
    },
    openGraph: {
      title: `${ind.name_id} | Industrial Mineral Solutions | PT WEU`,
      description: ind.overview_id.slice(0, 160),
      url: `${BASE}/industri/${ind.slug_id}`,
      siteName: 'PT Wira Energi Utama',
      images: [{ url: ind.hero_bg, width: 1200, height: 630, alt: ind.name_id }],
      locale: 'id_ID',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${ind.name_id} | PT Wira Energi Utama`,
      description: ind.overview_id.slice(0, 160),
      images: [ind.hero_bg],
    }
  };
}

export default async function IndustriPage({ params }: Props) {
  const { slug } = await params;
  const ind = industriesFull.find(i => i.slug_id === slug || i.slug_en === slug);
  if (!ind) notFound();

  const BASE = 'https://wiraenergiutama.com';
  
  // 🧭 SEO MAXIMIZE: BREADCRUMB SCHEMA
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
      { '@type': 'ListItem', 'position': 2, 'name': 'Industri', 'item': `${BASE}/industri` },
      { '@type': 'ListItem', 'position': 3, 'name': ind.name_id, 'item': `${BASE}/industri/${slug}` }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: ind.name_id,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* 1. HERO */}
      <section className="relative bg-[#0A1628] min-h-[60vh] flex items-end overflow-hidden" aria-label={`Hero - ${ind.name_id}`}>
        <Image 
          src={ind.hero_bg} 
          alt={`${ind.name_id} — PT Wira Energi Utama`} 
          fill 
          priority 
          loading="eager" 
          quality={80} 
          sizes="100vw" 
          className="object-cover opacity-35" 
        />
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
            <Link
              href={`/kontak?industry=${slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-bold rounded-lg transition-colors shadow-lg"
            >
              Request Penawaran Industri
            </Link>
            <a
              href={`https://wa.me/628114344168?text=${encodeURIComponent(`Halo PT WEU, saya tertarik konsultasi mineral untuk industri: ${ind.name_id}. Bisa minta info lebih lanjut?\n\nIndustri: ${ind.name_id}\nURL: ${BASE}/industri/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-[#C8A84B] transition-colors"
            >
              WhatsApp Sales
            </a>
          </div>
        </div>
      </section>

      {/* 🔧 PART 3 — TRUST REINFORCEMENT */}
      <TrustMicroSection lang="id" />

      {/* 2. INDUSTRY OVERVIEW */}
      <section className="bg-white py-16" aria-label="Ikhtisar Industri">
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
      <section className="bg-gray-50 py-16" aria-label="Peran Mineral">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Peran Batu Kapur / CaCO3 dalam {ind.name_id}</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{ind.limestone_role_id}</p>
        </div>
      </section>

      {/* 4. TECHNICAL REQUIREMENTS */}
      <section className="bg-white py-16" aria-label="Persyaratan Teknis">
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
      <section className="bg-gray-50 py-16" aria-label="Integrasi Proses">
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
      <section className="bg-[#0A1628] py-16" aria-label="Tantangan Industri">
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

      {/* 🔧 CONVERSION: MID-CONTENT CTA */}
      <section className="bg-white py-12 border-y border-gray-100" aria-label="Konsultasi Cepat">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-[#0A1628] text-2xl font-bold mb-2 uppercase tracking-tight">Optimalkan Rantai Pasok {ind.name_id} Anda</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Konsultasikan kebutuhan teknis dan logistik spesifik industri Anda dengan tim ahli PT WEU untuk efisiensi maksimal.
            </p>
          </div>
          <Link 
            href={`/kontak?industry=${slug}&inquiry=consultation`}
            className="w-full md:w-auto px-10 py-5 bg-[#0A1628] text-white font-black rounded-2xl hover:bg-[#1a2b45] transition-all shadow-xl uppercase tracking-widest text-sm"
          >
            Mulai Konsultasi Industri →
          </Link>
        </div>
      </section>

      {/* 7. WEU VALUE PROPOSITION */}
      <section className="bg-white py-16" aria-label="Solusi PT WEU">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Solusi PT Wira Energi Utama</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{ind.weu_value_id}</p>
        </div>
      </section>

      {/* 8. PRODUCTION CAPABILITY */}
      <section className="bg-gray-50 py-16" aria-label="Kapabilitas Produksi">
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
      <section className="bg-white py-16" aria-label="Rantai Pasok">
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
      <section className="bg-gray-50 py-16" aria-label="Logistik">
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
      <section className="bg-white py-16" aria-label="Kualitas dan Sertifikasi">
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
      <section className="bg-gray-50 py-16" aria-label="Simulasi Kasus">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Simulasi Kasus Nyata</h2>
          <div className="bg-white rounded-2xl border border-[#C8A84B]/30 p-8">
            <p className="text-gray-700 leading-relaxed text-lg">{ind.case_scenario_id}</p>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="bg-white py-16" aria-label="Pertanyaan Umum">
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

      {/* ── 14. INTERNAL LINKS (SEO AUTHORITY ENGINE) ──────────── */}
      <section className="bg-gray-50 py-16 border-t border-gray-100" aria-label="Halaman terkait">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Eksplorasi Industri Terkait</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contextual Products */}
            <div>
              <h3 className="text-sm font-bold text-[#C8A84B] uppercase tracking-widest mb-4">Produk Utama</h3>
              <ul className="space-y-3">
                {(internalLinks as any)[ind.slug_en]?.products.map((link: any) => (
                  <li key={link.href.id}>
                    <Link href={link.href.id} className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.id}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logistics & Location */}
            <div>
              <h3 className="text-sm font-bold text-[#C8A84B] uppercase tracking-widest mb-4">Logistik & Lokasi</h3>
              <ul className="space-y-3">
                <li>
                  <Link href={(internalLinks as any)[ind.slug_en]?.location.href.id} className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {(internalLinks as any)[ind.slug_en]?.location.id}
                  </Link>
                </li>
                <li>
                  <Link href="/lokasi" className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Jaringan Distribusi Nasional
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-bold text-[#C8A84B] uppercase tracking-widest mb-4">Dukungan Bisnis</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/kontak" className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Konsultasi Teknis Produk
                  </Link>
                </li>
                <li>
                  <Link href="/company-profile" className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Profil Perusahaan PT WEU
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 15. CTA */}
      <CTASection
        type="consult"
        industry={slug}
        lang="id"
        variant="dark"
        customHeading={`Butuh Konsultasi Teknis untuk Sektor ${ind.name_id}?`}
        customCTA="Jadwalkan Konsultasi Gratis →"
      />
    </>
  );
}
