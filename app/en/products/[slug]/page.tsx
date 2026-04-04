import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { productsBySlugEN, productSlugsEN, allProducts } from '../../../../src/data/products';
import { quarry } from '../../../../src/data/company';
import { ports, leadTimes, exportData } from '../../../../src/data/logistics';
import CTASection from '../../../../src/components/CTASection';
import { internalLinks } from '../../../../src/data/internalLinks';
import TrustMicroSection from '../../../../src/components/TrustMicroSection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productSlugsEN.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsBySlugEN[slug];
  if (!product) return {};
  const BASE = 'https://ptweu.company';
  return {
    title: `${product.name_en} | PT Wira Energi Utama — North Sulawesi, Indonesia`,
    description: product.description_en.slice(0, 155),
    alternates: {
      canonical: `${BASE}/en/products/${slug}`,
      languages: {
        en: `${BASE}/en/products/${slug}`,
        id: `${BASE}/produk/${product.slug_id}`,
      },
    },
    openGraph: {
      title: `${product.name_en} | PT Wira Energi Utama`,
      description: product.description_en.slice(0, 155),
      url: `${BASE}/en/products/${slug}`,
      images: [{ url: product.image, width: 1200, height: 630, alt: product.name_en }],
    },
    twitter: { card: 'summary_large_image', title: `${product.name_en} | PT Wira Energi Utama`, images: [product.image] },
  };
}

export default async function EnProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = productsBySlugEN[slug];
  if (!product) notFound();

  const BASE = 'https://ptweu.company';
  const schema = {
    '@context': 'https://schema.org', '@type': 'Product',
    name: product.name_en, description: product.description_en,
    image: `${BASE}${product.image}`,
    brand: { '@type': 'Organization', name: 'PT Wira Energi Utama' },
    offers: { '@type': 'Offer', priceCurrency: 'IDR', availability: 'https://schema.org/InStock', areaServed: 'ID', seller: { '@type': 'Organization', name: 'PT Wira Energi Utama' } },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative bg-[#0A1628] min-h-[65vh] flex items-end overflow-hidden">
        <Image src={product.image} alt={`${product.name_en} — PT Wira Energi Utama`} fill priority quality={85} sizes="100vw" className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/50 to-transparent" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap gap-2 text-sm text-gray-400">
              <li><Link href="/en" className="hover:text-[#C8A84B]">Home</Link></li>
              <li>/</li>
              <li><Link href="/en/products" className="hover:text-[#C8A84B]">Products</Link></li>
              <li>/</li>
              <li className="text-[#C8A84B]" aria-current="page">{product.name_en}</li>
            </ol>
          </nav>
          <div className="mb-3">
            <Link href={`/produk/${product.slug_id}`} className="text-xs text-gray-400 border border-gray-600 px-3 py-1 rounded-full hover:border-[#C8A84B] hover:text-[#C8A84B] transition-colors">
              🇮🇩 Versi Bahasa Indonesia
            </Link>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight max-w-3xl">{product.name_en}</h1>
          <p className="text-[#C8A84B] text-xl mt-3 font-medium">{product.hero_subtitle_en}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={`/en/contact?product=${product.slug_id}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-bold rounded-lg transition-colors duration-200"
            >
              Request Quote
            </Link>
            <a
              href={`https://wa.me/628114344168?text=${encodeURIComponent(`Hello PT WEU, I am interested in ${product.name_en}. Can I get more information?\n\nUnit: ${product.name_en}\nURL: ${BASE}/en/products/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-[#C8A84B] transition-colors duration-200"
            >
              WhatsApp Sales
            </a>
          </div>
        </div>
      </section>
      
      {/* 🔧 PART 3 — TRUST REINFORCEMENT */}
      <TrustMicroSection lang="en" />

      {/* OVERVIEW */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Product Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description_en}</p>
          </div>
          <ul className="space-y-3 pt-2">
            {product.key_features_en.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span className="text-gray-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TECHNICAL SPECS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Technical Specifications</h2>
          <p className="text-gray-500 mb-8">Laboratory-verified data per production batch. Certificate of Analysis (COA) available per order.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#0A1628] text-white"><th className="px-6 py-3 text-left font-semibold">Parameter</th><th className="px-6 py-3 text-left font-semibold">Value</th></tr></thead>
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={s.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-3 text-gray-700 font-medium">{s.label}</td>
                    <td className="px-6 py-3 text-[#0A1628] font-bold">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 🔧 CONVERSION: MID-CONTENT CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 p-8 bg-[#0A1628] rounded-2xl text-white font-bold">
            <div className="grow">
              <h3 className="text-xl font-bold mb-1 uppercase tracking-tight">Need Full Technical Specifications?</h3>
              <p className="text-gray-400 text-sm">Download the latest COA and TDS for this production batch.</p>
            </div>
            <Link 
              href={`/en/contact?product=${product.slug_id}&inquiry=spec`}
              className="w-full sm:w-auto px-8 py-4 bg-[#C8A84B] text-[#0A1628] font-black rounded-xl hover:bg-[#b8933b] transition-all whitespace-nowrap uppercase tracking-widest text-xs"
            >
              Request Tech Docs →
            </Link>
          </div>
        </div>
      </section>

      {/* SIZE VARIANTS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-6">Available Size / Mesh Variants</h2>
          <div className="flex flex-wrap gap-3">
            {product.size_variants.map((s) => (
              <span key={s} className="px-5 py-2.5 bg-[#0A1628] text-white text-sm font-semibold rounded-full">{s}</span>
            ))}
          </div>
          <p className="mt-6 text-gray-500 text-sm">Need a custom size? Our crushing plant can be configured to your exact specification. <Link href="/contact" className="text-[#C8A84B] hover:underline font-medium">Contact our technical team.</Link></p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Industrial Applications</h2>
          <p className="text-gray-500 mb-10">How {product.name_en} is used across key industrial sectors.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.applications.map((app) => (
              <article key={app.industry} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-[#0A1628] font-bold text-base mb-2">{app.industry}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{app.use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION SOURCE */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Production Source — Ratatotok, North Sulawesi</h2>
            <p className="text-gray-300 leading-relaxed mb-6">{quarry.geology}</p>
            <p className="text-gray-300 leading-relaxed">Based on the latest geological survey, our 97.05 Ha IUP area holds millions of tons of high-quality limestone reserves ready for mining.</p>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[{ dt: 'IUP OP Area', dd: `${quarry.area_ha} Ha` }, { dt: 'Operational Area', dd: `${quarry.operational_area_ha} Ha` }, { dt: 'Regency', dd: 'Southeast Minahasa' }, { dt: 'Province', dd: 'North Sulawesi' }].map((item) => (
                <div key={item.dt}>
                  <dt className="text-[#C8A84B] text-xs font-bold uppercase tracking-wider">{item.dt}</dt>
                  <dd className="text-white text-lg font-semibold mt-1">{item.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden">
            <Image src="/mining-bg.webp" alt="Ratatotok limestone quarry — PT Wira Energi Utama" fill loading="lazy" sizes="50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* PRODUCTION CAPACITY */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-10">Production Capacity &amp; Operations</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[{ dt: 'Crusher Capacity', dd: '250 TPH' }, { dt: 'Monthly Production', dd: '150,000 MT' }, { dt: 'Operational Hours', dd: '24/7' }, { dt: 'Machine Uptime', dd: '98%' }].map((s) => (
              <div key={s.dt} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <dt className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{s.dt}</dt>
                <dd className="text-[#0A1628] text-3xl font-extrabold mt-2">{s.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* QC */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Quality Control &amp; Laboratory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#0A1628] mb-4">QC Workflow</h3>
              <ol className="space-y-3">
                {['In-pit chemical analysis at extraction point', 'XRF lab testing per 100 MT batch', 'Cross-verification against client specification', 'Third-party certification (Sucofindo / Intertek) on request', 'COA issued per order before loading'].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#C8A84B] text-[#0A1628] rounded-full flex items-center justify-center font-bold text-xs">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#0A1628] mb-4">Testing Laboratories</h3>
              <ul className="space-y-2">
                {['Minertech (Internal Lab)', 'Intertek', 'Sucofindo', 'Public Works Dept.'].map((lab) => (
                  <li key={lab} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#C8A84B]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {lab}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-[#0A1628] text-sm mb-2">Documents per Order</h4>
                <ul className="space-y-1">
                  {product.certs.map((c) => <li key={c} className="flex gap-2 text-xs text-gray-600"><span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full flex-shrink-0 mt-1.5" />{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Logistics &amp; Distribution</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {ports.map((port) => (
              <div key={port.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="text-[#0A1628] font-bold">{port.name}</h3>
                <p className="text-[#C8A84B] text-xs font-semibold mt-1">{port.type}</p>
                <p className="text-gray-500 text-sm mt-2">{port.role}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#0A1628] mb-4">MOQ &amp; Packaging</h3>
              <p className="text-gray-700 font-semibold mb-3">{product.moq}</p>
              <div className="flex flex-wrap gap-2">
                {product.packaging.map((p) => <span key={p} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600">{p}</span>)}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#0A1628] mb-4">Lead Time</h3>
              <dl className="space-y-2">
                {[{ dt: 'Sulawesi region', dd: leadTimes.domestic_sulawesi }, { dt: 'Other islands', dd: leadTimes.domestic_other_islands }, { dt: 'Export', dd: leadTimes.export }].map((item) => (
                  <div key={item.dt} className="flex justify-between text-sm">
                    <dt className="text-gray-500">{item.dt}</dt>
                    <dd className="text-[#0A1628] font-bold">{item.dd}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-gray-400">Incoterms: {exportData.incoterms.join(' · ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {product.faq_id.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100">
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
      <section className="bg-gray-50 py-16 border-t border-gray-100" aria-label="Related pages">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Related Exploration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Industry Relevance */}
            <div>
              <h3 className="text-sm font-bold text-[#C8A84B] uppercase tracking-widest mb-4">Industrial Applications</h3>
              <ul className="space-y-3">
                {(internalLinks as any)[slug]?.industries.map((link: any) => (
                  <li key={link.href.en}>
                    <Link href={link.href.en} className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Cluster */}
            <div>
              <h3 className="text-sm font-bold text-[#C8A84B] uppercase tracking-widest mb-4">Supporting Products</h3>
              <ul className="space-y-3">
                {allProducts
                  .filter((p) => p.slug_en !== slug)
                  .slice(0, 3)
                  .map((p) => (
                    <li key={p.slug_en}>
                      <Link href={`/en/products/${p.slug_en}`} className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                        <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {p.name_en}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Knowledge Base */}
            <div>
              <h3 className="text-sm font-bold text-[#C8A84B] uppercase tracking-widest mb-4">Technical Insights</h3>
              <ul className="space-y-3">
                <li>
                  <Link href={(internalLinks as any)[slug]?.blog.href.en} className="text-[#0A1628] hover:text-[#C8A84B] font-semibold transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {(internalLinks as any)[slug]?.blog.en}
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

      {/* CTA */}
      <CTASection
        type="quote"
        product={product.slug_id}
        lang="en"
        variant="dark"
        customHeading={`Ready for Bulk ${product.name_en} Supply?`}
        customCTA="Get Wholesale Quotation Now →"
      />

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 lg:hidden flex items-center justify-between shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <div>
          <p className="text-[#0A1628] font-bold text-sm leading-tight">{product.name_en}</p>
          <p className="text-gray-500 text-[10px] uppercase font-semibold">Industrial Grade</p>
        </div>
        <Link
          href={`/en/contact?product=${product.slug_id}`}
          className="px-6 py-2.5 bg-[#C8A84B] text-[#0A1628] font-bold text-sm rounded-lg shadow-sm"
        >
          Get Quote
        </Link>
      </div>
    </>
  );
}
