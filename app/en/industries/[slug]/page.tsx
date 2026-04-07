import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { industriesFull, industriesFullBySlugEN, industrySlugsEN } from '../../../../src/data/industryFull';
import { allProducts } from '../../../../src/data/products';
import { ports } from '../../../../src/data/logistics';
import { company } from '../../../../src/data/company';
import CTASection from '../../../../src/components/CTASection';
import { internalLinks } from '../../../../src/data/internalLinks';
import TrustMicroSection from '../../../../src/components/TrustMicroSection';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return industrySlugsEN.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = industriesFull.find(i => i.slug_en === slug || i.slug_id === slug);
  if (!ind) return {};

  const BASE = 'https://wiraenergiutama.com';

  return {
    title: `${ind.name_en} | Industrial Mineral Solutions | PT Wira Energi Utama`,
    description: ind.overview_en.slice(0, 160),
    keywords: [
      ind.name_en, 
      `limestone supplier for ${ind.name_en}`, 
      `${ind.name_en} industry mineral`, 
      'PT WEU global solutions', 
      'industrial calcium supplier Indonesia'
    ],
    alternates: {
      canonical: `${BASE}/en/industries/${ind.slug_en || ind.slug_id}`,
      languages: {
        'id-ID': `${BASE}/industri/${ind.slug_id}`,
        'en-US': `${BASE}/en/industries/${ind.slug_en || ind.slug_id}`,
      },
    },
    openGraph: {
      title: `${ind.name_en} | Official Industrial Minerals | PT WEU`,
      description: ind.overview_en.slice(0, 160),
      url: `${BASE}/en/industries/${ind.slug_en || ind.slug_id}`,
      siteName: 'PT Wira Energi Utama',
      images: [{ url: ind.hero_bg, width: 1200, height: 630, alt: ind.name_en }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${ind.name_en} | PT Wira Energi Utama`,
      description: ind.overview_en.slice(0, 160),
      images: [ind.hero_bg],
    }
  };
}

export default async function IndustriPage_EN({ params }: Props) {
  const { slug } = await params;
  const ind = industriesFull.find(i => i.slug_en === slug || i.slug_id === slug);
  if (!ind) notFound();

  const BASE = 'https://wiraenergiutama.com';
  
  // 🧭 SEO MAXIMIZE: BREADCRUMB SCHEMA (EN)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
      { '@type': 'ListItem', 'position': 2, 'name': 'Industries', 'item': `${BASE}/en/industries` },
      { '@type': 'ListItem', 'position': 3, 'name': ind.name_en, 'item': `${BASE}/en/industries/${slug}` }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: ind.name_en,
    description: ind.overview_en.slice(0, 200),
    provider: { '@id': `${BASE}/#organization` },
    areaServed: 'Indonesia',
    serviceType: ind.name_en,
  };
  const CheckIcon = () => (<svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* HERO */}
      <section className="relative bg-[#0A1628] min-h-[55vh] flex items-end overflow-hidden" aria-label={`Hero - ${ind.name_en}`}>
        <Image 
          src="/mining-bg.webp" 
          alt={ind.name_en} 
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
              <li><Link href="/en" className="hover:text-[#C8A84B]">Home</Link></li><li>/</li>
              <li><Link href="/en/industries" className="hover:text-[#C8A84B]">Industries</Link></li><li>/</li>
              <li className="text-[#C8A84B]" aria-current="page">{ind.name_en}</li>
            </ol>
          </nav>
          <div className="mb-3"><Link href={`/industri/${ind.slug_id}`} className="text-xs text-gray-400 border border-gray-600 px-3 py-1 rounded-full hover:border-[#C8A84B] hover:text-[#C8A84B] transition-colors">🇮🇩 Versi Bahasa Indonesia</Link></div>
          <span className="inline-block px-3 py-1 bg-[#C8A84B]/20 border border-[#C8A84B]/40 text-[#C8A84B] text-xs font-bold rounded-full mb-3">{ind.hero_tag}</span>
          <h1 className="text-white text-4xl sm:text-5xl font-bold max-w-3xl">{ind.name_en}</h1>
          <p className="text-gray-300 text-lg mt-3">Industrial mineral solutions — PT Wira Energi Utama, North Sulawesi</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={`/en/contact?industry=${slug}`}
              className="px-8 py-4 bg-[#C8A84B] text-[#0A1628] font-bold rounded-lg hover:bg-[#b8933b] transition-colors shadow-lg text-center"
            >
              Request Quote
            </Link>
            <a
              href={`https://wa.me/628114344168?text=${encodeURIComponent(`Hello PT WEU, I am interested in ${ind.name_en} mineral solutions. Can I get more information?\n\nIndustry: ${ind.name_en}\nURL: ${BASE}/en/industries/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-[#C8A84B] transition-colors text-center"
            >
              WhatsApp Sales
            </a>
          </div>
        </div>
      </section>

      {/* 🔧 PART 3 — TRUST REINFORCEMENT */}
      <TrustMicroSection lang="en" />

      {/* OVERVIEW */}
      <section className="bg-white py-16" aria-label="Industry Overview">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-4">{ind.name_en} Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{ind.overview_en}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-[#0A1628] font-bold mb-4">Products Used</h3>
            <div className="space-y-4">
              {ind.products_used.map((p) => (
                <div key={p.slug_en}>
                  <Link href={`/en/products/${p.slug_en}`} className="font-semibold text-[#0A1628] hover:text-[#C8A84B] transition-colors">{p.name_en}</Link>
                  <p className="text-gray-500 text-sm mt-1">{p.role_id}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* LIMESTONE ROLE */}
      <section className="bg-gray-50 py-16" aria-label="Mineral Role">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Role of Limestone / CaCO3 in {ind.name_en}</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{ind.limestone_role_en}</p>
        </div>
      </section>
      {/* SPECS TABLE */}
      <section className="bg-white py-16" aria-label="Technical Requirements">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Technical Requirements</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#0A1628] text-white"><th className="px-6 py-3 text-left font-semibold">Parameter</th><th className="px-6 py-3 text-left font-semibold">Value / Standard</th></tr></thead>
              <tbody>{ind.tech_requirements.map((r, i) => (<tr key={r.param} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}><td className="px-6 py-3 text-gray-700 font-medium">{r.param}</td><td className="px-6 py-3 text-[#0A1628] font-bold">{r.value}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>
      {/* PROCESS STEPS */}
      <section className="bg-gray-50 py-16" aria-label="Process Integration">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Process Integration</h2>
          <ol className="space-y-4">
            {ind.process_steps_id.map((step, i) => (
              <li key={i} className="flex gap-5 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <span className="flex-shrink-0 w-10 h-10 bg-[#0A1628] text-[#C8A84B] rounded-full flex items-center justify-center font-bold text-lg">{i + 1}</span>
                <div><h3 className="font-bold text-[#0A1628]">{step.title}</h3><p className="text-gray-600 text-sm mt-1">{step.desc}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      {/* PAIN POINTS */}
      <section className="bg-[#0A1628] py-16" aria-label="Industry Challenges">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-white text-2xl font-bold mb-8">Industry Pain Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ind.pain_points_id.map((p, i) => (<div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5"><p className="text-gray-300 text-sm">{p}</p></div>))}
          </div>
        </div>
      </section>
      {/* 🔧 CONVERSION: MID-CONTENT CTA */}
      <section className="bg-white py-12 border-y border-gray-100" aria-label="Quick Consultation">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-left">
            <h3 className="text-[#0A1628] text-2xl font-bold mb-2 uppercase tracking-tight">Optimize Your {ind.name_en} Supply Chain</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Consult your specific industrial technical and logistics requirements with PT WEU experts for maximum operational efficiency.
            </p>
          </div>
          <Link 
            href={`/en/contact?industry=${slug}&inquiry=consultation`}
            className="w-full md:w-auto px-10 py-5 bg-[#0A1628] text-white font-black rounded-2xl hover:bg-[#1a2b45] transition-all shadow-xl uppercase tracking-widest text-sm whitespace-nowrap"
          >
            Start Industry Consultation →
          </Link>
        </div>
      </section>

      {/* WEU VALUE */}
      <section className="bg-white py-16" aria-label="PT WEU Value Proposition">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">PT WEU Value Proposition</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{ind.weu_value_en}</p>
        </div>
      </section>
      {/* PRODUCTION */}
      <section className="bg-gray-50 py-16" aria-label="Production Capability">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Production Capability</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[{ dt: 'Crusher Capacity', dd: '250 TPH' }, { dt: 'Monthly Output', dd: '150,000 MT' }, { dt: 'Operations', dd: '24/7' }, { dt: 'IUP OP Area', dd: '97.05 Ha' }].map((s) => (
              <div key={s.dt} className="bg-white rounded-xl p-6 text-center border border-gray-100"><dt className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{s.dt}</dt><dd className="text-[#0A1628] text-3xl font-extrabold mt-2">{s.dd}</dd></div>
            ))}
          </dl>
        </div>
      </section>
      {/* CASE + FAQ */}
      <section className="bg-white py-16" aria-label="Use Case and FAQ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Use Case Simulation</h2>
          <div className="bg-gray-50 rounded-2xl border border-[#C8A84B]/30 p-8 mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">{ind.case_scenario_id}</p>
          </div>
          <h2 className="text-[#0A1628] text-2xl font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            {ind.faq_id.map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100">
                <summary className="flex justify-between p-6 cursor-pointer font-semibold text-[#0A1628] list-none">{item.q}<svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg></summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* ── 14. INTERNAL LINKS (SEO AUTHORITY ENGINE) ──────────── */}
      <section className="bg-gray-50 py-16 border-t border-gray-100" aria-label="Related pages">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Related Industrial Exploration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contextual Products */}
            <div>
              <h3 className="text-sm font-bold text-[#C8A84B] uppercase tracking-widest mb-4">Core Products</h3>
              <ul className="space-y-3">
                {(internalLinks as any)[slug]?.products.map((link: any) => (
                  <li key={link.href.en}>
                    <Link href={link.href.en} className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logistics & Location */}
            <div>
              <h3 className="text-sm font-bold text-[#C8A84B] uppercase tracking-widest mb-4">Logistics & Export</h3>
              <ul className="space-y-3">
                <li>
                  <Link href={(internalLinks as any)[slug]?.location.href.en} className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {(internalLinks as any)[slug]?.location.en}
                  </Link>
                </li>
                <li>
                  <Link href="/en/locations" className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Global Distribution Network
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-bold text-[#C8A84B] uppercase tracking-widest mb-4">Business Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/en/contact" className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Technical Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/en/about" className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    PT WEU Corporate Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        type="consult"
        industry={slug}
        lang="en"
        variant="dark"
        customHeading={`Ready to Scale Your ${ind.name_en} Operations?`}
        customCTA="Request Industrial Consultation →"
      />
    </>
  );
}
