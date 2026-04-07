import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ChevronRight, Factory, Zap, ShieldCheck, Star, Package, ArrowRight, Filter, Beaker } from 'lucide-react';
import { productSlugsID } from '../../../src/data/products';
import { translations as fullT } from '../../../src/translations';
import CTASection from '../../../src/components/CTASection';
import { internalLinks } from '../../../src/data/internalLinks';
import TrustMicroSection from '../../../src/components/TrustMicroSection';

interface Props {
  params: Promise<{ slug: string }>;
}

const idT = fullT.id;

const slugToId: Record<string, string> = {
  'batu-kapur': 'limestone',
  'kalsium-karbonat': 'caco3',
  'kapur-bakar': 'burnLime',
  'kapur-padam': 'hydratedLime',
  'pcc': 'pcc',
  'agregat': 'agregat',
};

export async function generateStaticParams() {
  return productSlugsID.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const productId = slugToId[slug];
  const product = (idT.productPages as any)[productId];
  if (!product) return {};
  
  const BASE = 'https://ptweu.company';
  return {
    title: `${product.hero.title} | PT Wira Energi Utama — Sulawesi Utara`,
    description: product.description.slice(0, 155),
    alternates: {
      canonical: `${BASE}/produk/${slug}`,
    },
    openGraph: {
      title: `${product.hero.title} | PT Wira Energi Utama`,
      description: product.description.slice(0, 155),
      url: `${BASE}/produk/${slug}`,
      images: [{ url: product.hero.image, width: 1200, height: 630, alt: product.hero.title }],
    },
  };
}

export default async function ProdukDetailPage({ params }: Props) {
  const { slug } = await params;
  const productId = slugToId[slug];
  const product = (idT.productPages as any)[productId];
  if (!product) notFound();

  const BASE = 'https://ptweu.company';

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.hero.title,
    description: product.description,
    image: `${BASE}${product.hero.image}`,
    brand: { '@type': 'Organization', name: 'PT Wira Energi Utama' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'PT Wira Energi Utama' },
    },
  };
  
  // Breadcrumb Path Logic
  const getPath = (id: string): any[] => {
    const p = (idT.productPages as any)[id];
    if (!p) return [];
    if (p.parent) {
      return [...getPath(p.parent), p];
    }
    return [p];
  };
  const path = getPath(productId);

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] min-h-[60vh] flex items-end overflow-hidden pt-32">
        <Image
          src={product.hero.image}
          alt={product.hero.title}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <nav className="mb-8 overflow-x-auto">
            <ol className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50 whitespace-nowrap">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Beranda</Link></li>
              <li><ChevronRight size={10} /></li>
              <li><Link href="/katalog" className="hover:text-brand-gold transition-colors">Katalog</Link></li>
              {path.map((step, i) => (
                <li key={step.id} className="flex items-center gap-2">
                  <li><ChevronRight size={10} /></li>
                  <li className={i === path.length - 1 ? 'text-brand-gold font-black' : ''}>
                    {i === path.length - 1 ? step.hero.title : (
                      <Link href={`/produk/${Object.keys(slugToId).find(key => slugToId[key] === step.id)}`} className="hover:text-brand-gold transition-colors">
                        {step.hero.title}
                      </Link>
                    )}
                  </li>
                </li>
              ))}
            </ol>
          </nav>
          
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-black uppercase tracking-widest mb-6">
            {product.category} Material
          </div>
          
          <h1 className="text-white text-5xl md:text-7xl font-black leading-[0.9] mb-6 uppercase tracking-tighter max-w-4xl">
            {product.hero.title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-medium leading-relaxed mb-10">
            {product.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/kontak?product=${slug}`}
              className="px-10 py-5 bg-brand-gold text-brand-blue font-black rounded-xl hover:bg-white transition-all duration-300 uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl shadow-brand-gold/20"
            >
              Dapatkan Penawaran <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/628114344168`}
              target="_blank"
              className="px-10 py-5 border border-white/20 text-white font-black rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs"
            >
              Hubungi Sales
            </a>
          </div>
        </div>
      </section>

      <TrustMicroSection lang="id" />

      {/* ── 2. QUICK STATS ────────────────────────────────────────── */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {product.stats.map((stat: any, i: number) => (
              <div key={i} className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="text-2xl font-black text-brand-blue uppercase">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MAIN CONTENT ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7">
              <div className="mb-16">
                <h2 className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-6">Ikhtisar Produk</h2>
                <p className="text-2xl text-gray-800 font-medium leading-relaxed mb-10">
                  {product.overview.content}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.overview.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                        <ShieldCheck size={18} />
                      </div>
                      <span className="text-sm font-bold text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-8">Spesifikasi Teknis</h2>
                <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Parameter Analisis</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Nilai Rata-rata</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {product.specifications.table.map((row: any, i: number) => (
                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-8 py-5 text-sm font-bold text-gray-600">{row.label}</td>
                          <td className="px-8 py-5 text-sm font-black text-brand-blue uppercase">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {product.size_variants && (
                <div className="mb-16">
                  <h2 className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-6">Varian Ukuran</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.size_variants.map((v: string) => (
                      <span key={v} className="px-5 py-2.5 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                {/* Derivatives Card */}
                {product.derivatives && product.derivatives.length > 0 && (
                  <div className="p-8 bg-gray-900 rounded-[2rem] text-white overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                      <Zap size={80} />
                    </div>
                    <h3 className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-8 relative">Produk Turunan</h3>
                    <div className="space-y-3 relative">
                      {product.derivatives.map((derId: string) => {
                        const derProduct = (idT.productPages as any)[derId];
                        return (
                          <Link 
                            key={derId}
                            href={`/produk/${Object.keys(slugToId).find(k => slugToId[k] === derId)}`}
                            className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/30 hover:bg-white/10 transition-all group/item"
                          >
                            <span className="text-xs font-black uppercase tracking-widest">{derProduct?.hero.title}</span>
                            <ChevronRight size={16} className="text-gray-500 group-hover/item:text-brand-gold transition-colors" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Industrial Applications Card */}
                <div className="p-8 border border-gray-100 rounded-[2rem] bg-gray-50/50">
                  <h3 className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-8">Aplikasi Industri</h3>
                  <div className="space-y-6">
                    {product.applications.items.map((app: any, i: number) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-blue shadow-sm border border-gray-100 flex-shrink-0">
                          <Factory size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-brand-blue uppercase tracking-tight mb-1">{app.title}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed font-medium">{app.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCTION PROCESS ────────────────────────────────── */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-8">Alur Produksi Modern</h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
                Bagaimana Kami <br /> Menjamin Kualitas
              </h3>
              <div className="space-y-8">
                {product.process.steps.map((step: any, i: number) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-4xl font-black text-white/10 group-hover:text-brand-gold/20 transition-colors leading-none">{i + 1}</div>
                    <div>
                      <h4 className="text-lg font-black uppercase tracking-widest text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10">
                <Image
                  src="/Foto webp/IMG_1135.webp"
                  alt="Quality Control"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. QUALITY ASSURANCE ────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 md:p-20 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3">
              <h2 className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-8">Standar Kualitas Mutlak</h2>
              <p className="text-3xl font-medium text-gray-800 leading-tight mb-10">
                {product.quality.content}
              </p>
              <div className="flex flex-wrap gap-3">
                {product.quality.certs.map((cert: string) => (
                  <div key={cert} className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-xs font-black text-brand-blue uppercase tracking-widest flex items-center gap-3">
                    <ShieldCheck size={14} className="text-brand-gold" /> {cert}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full border-8 border-brand-gold/10 flex items-center justify-center relative">
                <Star size={40} className="text-brand-gold" />
                <div className="absolute inset-0 border-2 border-dashed border-brand-gold rounded-full animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-12 text-center">Informasi Tambahan</h2>
          <div className="space-y-4">
            {product.faq.items.map((item: any, i: number) => (
              <details key={i} className="group overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50">
                <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
                  <span className="text-sm font-black text-brand-blue uppercase tracking-tight">{item.q}</span>
                  <ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-sm text-gray-600 font-medium leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        type="quote"
        product={slug}
        lang="id"
        variant="dark"
        customHeading={`Perkuat Produksi Anda dengan ${product.hero.title}`}
        customCTA="Ajukan Penawaran Sekarang"
      />
    </div>
  );
}
