import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { industriesFullBySlugEN, industrySlugsEN } from '../../../../src/data/industryFull';
import { allProducts } from '../../../../src/data/products';
import { ports } from '../../../../src/data/logistics';
import CTASection from '../../../../src/components/CTASection';

interface Props { params: Promise<{ slug: string }>; }
export async function generateStaticParams() { return industrySlugsEN.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = industriesFullBySlugEN[slug];
  if (!ind) return {};
  const BASE = 'https://ptweu.company';
  return {
    title: `${ind.name_en} | Industrial Mineral Supplier — PT Wira Energi Utama`,
    description: ind.overview_en.slice(0, 155),
    alternates: {
      canonical: `${BASE}/en/industries/${slug}`,
      languages: { en: `${BASE}/en/industries/${slug}`, id: `${BASE}/industri/${ind.slug_id}` },
    },
    openGraph: { title: `${ind.name_en} | PT Wira Energi Utama`, description: ind.overview_en.slice(0, 155), url: `${BASE}/en/industries/${slug}` },
  };
}

export default async function EnIndustriesPage({ params }: Props) {
  const { slug } = await params;
  const ind = industriesFullBySlugEN[slug];
  if (!ind) notFound();
  const BASE = 'https://ptweu.company';
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: ind.name_en, description: ind.overview_en.slice(0, 200),
    provider: { '@type': 'Organization', name: 'PT Wira Energi Utama', url: BASE },
    areaServed: 'Indonesia', serviceType: ind.name_en,
  };
  const CheckIcon = () => (<svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* HERO */}
      <section className="relative bg-[#0A1628] min-h-[55vh] flex items-end overflow-hidden">
        <Image src="/mining-bg.webp" alt={ind.name_en} fill priority quality={80} sizes="100vw" className="object-cover opacity-35" />
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
              href={`https://wa.me/628114344168?text=Hello%20PT%20WEU%2C%20I%20would%20like%20to%20consult%20regarding%20minerals%20for%20${encodeURIComponent(ind.name_en)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-[#C8A84B] transition-colors text-center"
            >
              WhatsApp Sales
            </a>
          </div>
        </div>
      </section>
      {/* OVERVIEW */}
      <section className="bg-white py-16">
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
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Role of Limestone / CaCO3 in {ind.name_en}</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{ind.limestone_role_en}</p>
        </div>
      </section>
      {/* SPECS TABLE */}
      <section className="bg-white py-16">
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
      <section className="bg-gray-50 py-16">
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
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-white text-2xl font-bold mb-8">Industry Pain Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ind.pain_points_id.map((p, i) => (<div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5"><p className="text-gray-300 text-sm">{p}</p></div>))}
          </div>
        </div>
      </section>
      {/* WEU VALUE */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">PT WEU Value Proposition</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{ind.weu_value_en}</p>
        </div>
      </section>
      {/* PRODUCTION */}
      <section className="bg-gray-50 py-16">
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
      <section className="bg-white py-16">
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
      {/* INTERNAL LINKS + CTA */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-lg font-bold mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {ind.products_used.map((p) => (<Link key={p.slug_en} href={`/en/products/${p.slug_en}`} className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8A84B] transition-colors">{p.name_en}</Link>))}
            {[{ href: '/en/locations/singapore', label: 'Singapore Distribution' }, { href: '/en/locations/australia', label: 'Australia Export' }].map((l) => (<Link key={l.href} href={l.href} className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8A84B] transition-colors">{l.label}</Link>))}
          </div>
        </div>
      </section>
      <CTASection
        type="consult"
        industry={slug}
        lang="en"
        variant="dark"
      />
    </>
  );
}
