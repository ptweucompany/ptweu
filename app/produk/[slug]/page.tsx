import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { productsBySlugID, productSlugsID, allProducts } from '../../../src/data/products';
import { quarry } from '../../../src/data/company';
import { ports, shippingMethods, leadTimes, exportData } from '../../../src/data/logistics';
import CTASection from '../../../src/components/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productSlugsID.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsBySlugID[slug];
  if (!product) return {};
  const BASE = 'https://ptweu.company';
  return {
    title: `${product.name_id} | PT Wira Energi Utama — Sulawesi Utara`,
    description: `${product.description_id.slice(0, 155)}`,
    keywords: [product.name_id, product.name_en, 'PT Wira Energi Utama', 'Sulawesi Utara', 'supplier mineral industri'],
    alternates: {
      canonical: `${BASE}/produk/${slug}`,
      languages: {
        id: `${BASE}/produk/${slug}`,
        en: `${BASE}/en/products/${product.slug_en}`,
      },
    },
    openGraph: {
      title: `${product.name_id} | PT Wira Energi Utama`,
      description: product.description_id.slice(0, 155),
      url: `${BASE}/produk/${slug}`,
      images: [{ url: product.image, width: 1200, height: 630, alt: product.name_id }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name_id} | PT Wira Energi Utama`,
      description: product.description_id.slice(0, 155),
      images: [product.image],
    },
  };
}

export default async function ProdukDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = productsBySlugID[slug];
  if (!product) notFound();

  const BASE = 'https://ptweu.company';
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name_id,
    description: product.description_id,
    image: `${BASE}${product.image}`,
    brand: { '@type': 'Organization', name: 'PT Wira Energi Utama' },
    manufacturer: { '@type': 'Organization', name: 'PT Wira Energi Utama', address: { '@type': 'PostalAddress', addressLocality: 'Manado', addressRegion: 'Sulawesi Utara', addressCountry: 'ID' } },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      areaServed: 'ID',
      seller: { '@type': 'Organization', name: 'PT Wira Energi Utama' },
    },
  };

  return (
    <>
      {/* JSON-LD Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] min-h-[70vh] flex items-end overflow-hidden" aria-label={`Hero ${product.name_id}`}>
        <Image
          src={product.image}
          alt={`${product.name_id} — PT Wira Energi Utama, Sulawesi Utara`}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/50 to-transparent" aria-hidden="true" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-[#C8A84B]">Beranda</Link></li>
              <li>/</li>
              <li><Link href="/produk" className="hover:text-[#C8A84B]">Produk</Link></li>
              <li>/</li>
              <li className="text-[#C8A84B]" aria-current="page">{product.name_id}</li>
            </ol>
          </nav>
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight max-w-3xl">{product.name_id}</h1>
          <p className="text-[#C8A84B] text-xl mt-3 font-medium">{product.hero_subtitle_id}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={`/kontak?product=${product.slug_id}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-bold rounded-lg transition-colors duration-200"
            >
              Request Quote / Penawaran
            </Link>
            <a
              href={`https://wa.me/628114344168?text=Halo%20PT%20WEU%2C%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(product.name_id)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-[#C8A84B] transition-colors duration-200"
            >
              WhatsApp Sales
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. OVERVIEW ─────────────────────────────────────────── */}
      <section className="bg-white py-16" aria-label={`Ikhtisar ${product.name_id}`}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-4">Ikhtisar Produk</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description_id}</p>
          </div>
          <ul className="space-y-3 pt-2">
            {product.key_features_id.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. TECHNICAL SPECIFICATIONS ─────────────────────────── */}
      <section className="bg-gray-50 py-16" aria-label="Spesifikasi teknis">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Spesifikasi Teknis / Analisis Kimia</h2>
          <p className="text-gray-500 mb-8">Data uji laboratorium per batch produksi. Tersedia Certificate of Analysis (COA) per pesanan.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="px-6 py-3 text-left font-semibold">Parameter</th>
                  <th className="px-6 py-3 text-left font-semibold">Nilai / Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-3 text-gray-700 font-medium">{spec.label}</td>
                    <td className="px-6 py-3 text-[#0A1628] font-bold">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. SIZE / MESH VARIANTS ─────────────────────────────── */}
      <section className="bg-white py-16" aria-label="Varian ukuran produk">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-6">Varian Ukuran yang Tersedia</h2>
          <div className="flex flex-wrap gap-3">
            {product.size_variants.map((size) => (
              <span key={size} className="px-5 py-2.5 bg-[#0A1628] text-white text-sm font-semibold rounded-full">
                {size}
              </span>
            ))}
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            Butuh ukuran khusus? Crushing plant kami dapat dikonfigurasi sesuai spesifikasi teknis Anda.{' '}
            <Link href="/contact" className="text-[#C8A84B] hover:underline font-medium">Hubungi tim teknis kami.</Link>
          </p>
        </div>
      </section>

      {/* ── 5. INDUSTRIAL APPLICATIONS ──────────────────────────── */}
      <section className="bg-gray-50 py-16" aria-label="Aplikasi industri">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Aplikasi Industri</h2>
          <p className="text-gray-500 mb-10">Penggunaan {product.name_id} di berbagai sektor industri strategis.</p>
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

      {/* ── 6. PRODUCTION SOURCE ────────────────────────────────── */}
      <section className="bg-[#0A1628] py-16" aria-label="Sumber produksi Ratatotok">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Sumber Produksi — Ratatotok, Sulawesi Utara</h2>
            <p className="text-gray-300 leading-relaxed mb-6">{quarry.geology}</p>
            <p className="text-gray-300 leading-relaxed">{quarry.reserves}</p>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[
                { dt: 'Luas IUP OP', dd: `${quarry.area_ha} Ha` },
                { dt: 'Area Operasional', dd: `${quarry.operational_area_ha} Ha` },
                { dt: 'Kabupaten', dd: 'Minahasa Tenggara' },
                { dt: 'Provinsi', dd: 'Sulawesi Utara' },
              ].map((item) => (
                <div key={item.dt}>
                  <dt className="text-[#C8A84B] text-xs font-bold uppercase tracking-wider">{item.dt}</dt>
                  <dd className="text-white text-lg font-semibold mt-1">{item.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative h-72 lg:h-full min-h-64 rounded-2xl overflow-hidden">
            <Image
              src="/mining-bg.webp"
              alt="Tambang batu kapur Ratatotok — PT Wira Energi Utama, Minahasa Tenggara"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 7. PRODUCTION CAPACITY ──────────────────────────────── */}
      <section className="bg-white py-16" aria-label="Kapasitas produksi">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-10">Kapasitas Produksi &amp; Operasional</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { dt: 'Kapasitas Crusher', dd: '250 TPH' },
              { dt: 'Produksi / Bulan', dd: '150.000 MT' },
              { dt: 'Jam Operasional', dd: '24/7' },
              { dt: 'Machine Uptime', dd: '98%' },
            ].map((stat) => (
              <div key={stat.dt} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <dt className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{stat.dt}</dt>
                <dd className="text-[#0A1628] text-3xl font-extrabold mt-2">{stat.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 8. QUALITY CONTROL ──────────────────────────────────── */}
      <section className="bg-gray-50 py-16" aria-label="Quality control dan laboratorium">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Kontrol Kualitas &amp; Laboratorium</h2>
          <p className="text-gray-500 mb-10">Setiap batch produksi melalui verifikasi ketat sebelum pengiriman.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#0A1628] mb-4">Alur Kerja QC</h3>
              <ol className="space-y-3">
                {[
                  'Analisis kimia in-pit di lokasi ekstraksi',
                  'Pengujian XRF per 100 MT produksi',
                  'Verifikasi silang terhadap spesifikasi klien',
                  'Sertifikasi pihak ketiga (Sucofindo / Intertek) atas permintaan',
                  'Certificate of Analysis (COA) diterbitkan sebelum pemuatan',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#C8A84B] text-[#0A1628] rounded-full flex items-center justify-center font-bold text-xs">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#0A1628] mb-4">Laboratorium Mitra</h3>
              <ul className="space-y-3">
                {['Minertech (Lab Internal)', 'Intertek', 'Sucofindo', 'Dinas PU & Tata Ruang'].map((lab) => (
                  <li key={lab} className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#C8A84B]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {lab}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-[#0A1628] text-sm mb-3">Sertifikasi &amp; Dokumen</h4>
                <ul className="space-y-2">
                  {product.certs.map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#C8A84B] rounded-full flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. LOGISTICS & DELIVERY ─────────────────────────────── */}
      <section className="bg-white py-16" aria-label="Logistik dan pengiriman">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Logistik &amp; Distribusi</h2>
          <p className="text-gray-500 mb-10">Distribusi via dermaga khusus ke 3 pelabuhan utama.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {ports.map((port) => (
              <div key={port.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-[#0A1628] font-bold text-base">{port.name}</h3>
                <p className="text-[#C8A84B] text-xs font-semibold mt-1">{port.type}</p>
                <p className="text-gray-500 text-sm mt-2">{port.role}</p>
                <p className="text-gray-400 text-xs mt-1">{port.note}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shippingMethods.map((method) => (
              <div key={method.mode} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0A1628] mb-2">{method.mode}</h3>
                {'capacity' in method && <p className="text-sm text-gray-600">Kapasitas: <strong>{method.capacity}</strong></p>}
                {'fleet' in method && <p className="text-sm text-gray-600">Armada: <strong>{method.fleet}</strong></p>}
                <p className="text-sm text-gray-500 mt-1">{method.coverage}</p>
                <p className="text-xs text-gray-400 mt-1">{method.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. PACKAGING ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-16" aria-label="Pilihan kemasan">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Pilihan Kemasan</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {product.packaging.map((pack) => (
              <div key={pack} className="bg-white rounded-xl p-5 border border-gray-100 text-center shadow-sm">
                <div className="w-10 h-10 bg-[#0A1628] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-[#C8A84B]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                </div>
                <p className="text-[#0A1628] font-semibold text-sm">{pack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. MOQ & LEAD TIME ─────────────────────────────────── */}
      <section className="bg-white py-16" aria-label="MOQ dan lead time">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h2 className="text-[#0A1628] text-xl font-bold mb-4">Minimum Order Quantity (MOQ)</h2>
            <p className="text-gray-700 text-lg font-semibold">{product.moq}</p>
            <p className="text-gray-500 text-sm mt-3">
              Volume di bawah MOQ dapat didiskusikan untuk pengiriman pertama atau uji sampel skala produksi.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h2 className="text-[#0A1628] text-xl font-bold mb-4">Estimasi Lead Time</h2>
            <dl className="space-y-3">
              {[
                { dt: 'Sulawesi & sekitarnya', dd: leadTimes.domestic_sulawesi },
                { dt: 'Luar pulau (antar isla)', dd: leadTimes.domestic_other_islands },
                { dt: 'Ekspor', dd: leadTimes.export },
              ].map((item) => (
                <div key={item.dt} className="flex justify-between">
                  <dt className="text-gray-500 text-sm">{item.dt}</dt>
                  <dd className="text-[#0A1628] font-bold text-sm">{item.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── 12. CERTIFICATIONS & EXPORT DOCS ────────────────────── */}
      <section className="bg-gray-50 py-16" aria-label="Sertifikasi dan dokumen ekspor">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Sertifikasi &amp; Dokumen Ekspor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#0A1628] mb-4">Dokumen Standar per Pesanan</h3>
              <ul className="space-y-2">
                {['Certificate of Analysis (COA)', 'Material Safety Data Sheet (MSDS)', 'Technical Data Sheet (TDS)', 'Packing List', 'Commercial Invoice'].map((doc) => (
                  <li key={doc} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#C8A84B] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#0A1628] mb-4">Dokumen Tambahan untuk Ekspor</h3>
              <ul className="space-y-2">
                {['Certificate of Origin (COO) — via KADIN', 'Bill of Lading (B/L)', 'Phytosanitary / Health Certificate (jika diperlukan)'].map((doc) => (
                  <li key={doc} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#C8A84B] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {doc}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Incoterms: {exportData.incoterms.join(' · ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. FAQ ─────────────────────────────────────────────── */}
      <section className="bg-white py-16" aria-label="Pertanyaan umum">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-8">Pertanyaan Umum (FAQ)</h2>
          <div className="space-y-4">
            {product.faq_id.map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#0A1628] list-none">
                  {item.q}
                  <svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. INTERNAL LINKS (SEO CLUSTER FOUNDATION) ──────────── */}
      <section className="bg-gray-50 py-12" aria-label="Halaman terkait">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-lg font-bold mb-4">Halaman Terkait</h2>
          <div className="flex flex-wrap gap-3">
            {product.internal_links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8A84B] hover:text-[#0A1628] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            {allProducts
              .filter((p) => p.id !== product.id)
              .map((p) => (
                <Link
                  key={p.slug_id}
                  href={`/produk/${p.slug_id}`}
                  className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8A84B] hover:text-[#0A1628] transition-colors duration-150"
                >
                  {p.name_id}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── 15. CTA ─────────────────────────────────────────────── */}
      <CTASection
        type="quote"
        product={product.slug_id}
        lang="id"
        variant="dark"
      />

      {/* ── 16. STICKY MOBILE CTA ───────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 lg:hidden flex items-center justify-between shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <div>
          <p className="text-[#0A1628] font-bold text-sm leading-tight">{product.name_id}</p>
          <p className="text-gray-500 text-[10px] uppercase font-semibold">Ready for Supply</p>
        </div>
        <Link
          href={`/kontak?product=${product.slug_id}`}
          className="px-6 py-2.5 bg-[#C8A84B] text-[#0A1628] font-bold text-sm rounded-lg shadow-sm"
        >
          Minta Harga
        </Link>
      </div>
    </>
  );
}
