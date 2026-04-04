import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { exportDestBySlug, exportSlugs } from '../../../../src/data/locations';
import { allProducts } from '../../../../src/data/products';
import CTASection from '../../../../src/components/CTASection';
import TrustMicroSection from '../../../../src/components/TrustMicroSection';

interface Props { params: Promise<{ slug: string }>; }
export async function generateStaticParams() { return exportSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = exportDestBySlug[slug];
  if (!dest) return {};
  const BASE = 'https://ptweu.company';
  return {
    title: `Export Limestone to ${dest.country_en} | PT Wira Energi Utama Indonesia`,
    description: dest.overview_en.slice(0, 155),
    alternates: { canonical: `${BASE}/en/locations/${slug}`, languages: { en: `${BASE}/en/locations/${slug}` } },
    openGraph: { title: `Export to ${dest.country_en} | PT Wira Energi Utama`, description: dest.overview_en.slice(0, 155), url: `${BASE}/en/locations/${slug}` },
  };
}

export default async function EnLocationsPage({ params }: Props) {
  const { slug } = await params;
  const dest = exportDestBySlug[slug];
  if (!dest) notFound();
  const BASE = 'https://ptweu.company';
  const schema = {
    '@context': 'https://schema.org', '@type': 'Organization',
    name: 'PT Wira Energi Utama', url: BASE,
    offers: { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Limestone & Calcium Minerals' }, areaServed: dest.country_en, priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  };
  const CheckIcon = () => (<svg className="w-4 h-4 text-[#C8A84B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* 1. HERO */}
      <section className="relative bg-[#0A1628] min-h-[55vh] flex items-end overflow-hidden">
        <Image src="/mining-bg.webp" alt={`Export limestone to ${dest.country_en}`} fill priority quality={80} sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap gap-2 text-sm text-gray-400">
              <li><Link href="/en" className="hover:text-[#C8A84B]">Home</Link></li><li>/</li>
              <li><Link href="/en/locations" className="hover:text-[#C8A84B]">Locations</Link></li><li>/</li>
              <li className="text-[#C8A84B]" aria-current="page">{dest.country_en}</li>
            </ol>
          </nav>
          <p className="text-[#C8A84B] text-sm font-bold uppercase tracking-widest mb-2">{dest.region_en} · Export Market</p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold max-w-3xl">Export Limestone &amp; Minerals to {dest.country_en}</h1>
          <p className="text-gray-300 text-lg mt-3">From Port Bitung, North Sulawesi — PT Wira Energi Utama</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={`/en/contact?delivery=${dest.country_en}`}
              className="px-8 py-4 bg-[#C8A84B] text-[#0A1628] font-bold rounded-lg hover:bg-[#b8933b] transition-colors shadow-lg text-center"
            >
              Request Export Quote to {dest.country_en}
            </Link>
            <a
              href={`https://wa.me/628114344168?text=Hello%20PT%20WEU%2C%20I%20would%20like%20to%20inquire%20export%20logistics%20to%20${encodeURIComponent(dest.country_en)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-[#C8A84B] transition-colors text-center"
            >
              WhatsApp Export Team
            </a>
          </div>
        </div>
      </section>

      {/* 🔧 CONVERSION: TRUST REINFORCEMENT */}
      <TrustMicroSection lang="en" />

      {/* 2. EXPORT OVERVIEW */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Export Overview — {dest.country_en}</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{dest.overview_en}</p>
        </div>
      </section>

      {/* 🔧 CONVERSION: MID-CONTENT CTA */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-left">
            <h3 className="text-[#0A1628] text-2xl font-bold mb-2 uppercase tracking-tight">Export Logistics to {dest.country_en}</h3>
            <p className="text-gray-500 font-medium">
              Get detailed shipping estimates, transit times, and required documentation for the {dest.country_en} market.
            </p>
          </div>
          <Link 
            href={`/en/contact?delivery=${dest.country_en}&inquiry=export-logistics`}
            className="w-full md:w-auto px-10 py-5 bg-[#0A1628] text-white font-black rounded-2xl hover:bg-[#1a2b45] transition-all shadow-xl text-center whitespace-nowrap uppercase tracking-widest text-sm"
          >
            Get Export Estimate →
          </Link>
        </div>
      </section>

      {/* 3. TRADE ROUTE */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Trade Route — Indonesia to {dest.country_en}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[
              { label: 'Port of Loading', value: dest.port_of_loading },
              { label: 'Port of Discharge', value: dest.port_of_discharge },
              { label: 'Distance', value: `≈${dest.distance_nm.toLocaleString()} nautical miles` },
              { label: 'Transit Time', value: `≈${dest.vessel_days} days` },
              { label: 'MOQ per Shipment', value: dest.moq_mt },
              { label: 'Incoterms', value: dest.incoterms.join(' | ') },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-wider">{item.label}</p>
                <p className="text-[#0A1628] font-semibold mt-1">{item.value}</p>
              </div>
            ))}
          </div>
          <h3 className="text-[#0A1628] font-bold text-lg mb-4">Export Workflow (7 Steps)</h3>
          <ol className="space-y-3">
            {dest.trade_route_steps.map((step, i) => (
              <li key={i} className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0A1628] text-[#C8A84B] rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <p className="text-gray-700 text-sm">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. PRODUCTS IN DEMAND */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Products in Demand — {dest.country_en}</h2>
          <div className="space-y-6">
            {dest.products_in_demand.map((p) => (
              <div key={p.name_en} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-[#0A1628] font-bold text-lg">{p.name_en}</h3>
                    <p className="text-[#C8A84B] text-sm font-medium mt-1">Spec: {p.spec}</p>
                    <p className="text-gray-600 text-sm mt-2">{p.demand_reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY DEMAND */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Industry Demand in {dest.country_en}</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{dest.industry_demand_en}</p>
        </div>
      </section>

      {/* 6. EXPORT DOCUMENTS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-6">Required Export Documents</h2>
            <ul className="space-y-3">
              {dest.export_docs.map((doc) => (<li key={doc} className="flex items-start gap-3"><CheckIcon /><span className="text-gray-700 text-sm">{doc}</span></li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-6">Compliance Notes</h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed">{dest.compliance_notes}</p>
            </div>
            <div className="mt-6 bg-[#0A1628] rounded-xl p-6">
              <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-wider mb-2">Incoterms Available</p>
              <div className="flex flex-wrap gap-2">
                {dest.incoterms.map((term) => (<span key={term} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">{term}</span>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">FAQ — Exporting to {dest.country_en}</h2>
          <div className="space-y-4">
            {dest.faq_en.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100">
                <summary className="flex justify-between p-6 cursor-pointer font-semibold text-[#0A1628] list-none">{item.q}<svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg></summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERNAL LINKS */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-lg font-bold mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            {allProducts.slice(0, 4).map((p) => (<Link key={p.slug_en} href={`/en/products/${p.slug_en}`} className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8A84B] transition-colors">{p.name_en}</Link>))}
            {exportSlugs.filter((s) => s !== dest.slug).map((s) => (<Link key={s} href={`/en/locations/${s}`} className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8A84B] transition-colors capitalize">{s}</Link>))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <CTASection
        type="availability"
        delivery={dest.country_en}
        lang="en"
        variant="dark"
        customHeading={`Check Stock for ${dest.country_en} Export`}
        customCTA="Check Delivery Schedule Now →"
      />
    </>
  );
}
