'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Globe, MapPin, Package, Info, FileText, Newspaper, Heart, Shield, Award } from 'lucide-react';

export default function HTMLSitemap() {
  const { lang, t } = useLanguage();

  const sections = [
    {
      title: 'Company Architecture',
      icon: Globe,
      links: [
        { label: 'Official Home', href: '/' },
        { label: `Corporate: ${t.nav.about}`, href: lang === 'id' ? '/tentang-kami' : '/about' },
        { label: `Portfolio: ${t.nav.products}`, href: lang === 'id' ? '/produk' : '/products' },
        { label: `Digital ${t.nav.catalog}`, href: lang === 'id' ? '/katalog' : '/catalog' },
        { label: `Industrial ${t.nav.blog}`, href: '/blog' },
        { label: `Direct ${t.nav.contact}`, href: '/contact' },
      ]
    },
    {
      title: 'Product Portfolio',
      icon: Package,
      links: [
        { label: 'Batu Kapur (Limestone Lumpy)', href: '/produk/batu-kapur' },
        { label: 'Kalsium Karbonat (CaCO3 Powder)', href: '/produk/kalsium-karbonat' },
        { label: 'Kapur Bakar (Quicklime CaO)', href: '/produk/kapur-bakar' },
        { label: 'Kapur Padam (Hydrated Ca(OH)2)', href: '/produk/kapur-padam' },
        { label: 'PCC (Precipitated CaCO3)', href: '/produk/pcc' },
        { label: 'Agregat Beton (SNI Standard)', href: '/produk/agregat' },
      ]
    },
    {
      title: 'Industrial Solutions Ecosystem',
      icon: Award,
      links: [
        { label: 'Semen & Manufaktur Klinker', href: '/industri/semen' },
        { label: 'Smelter & Pengolahan Baja', href: '/industri/baja' },
        { label: 'Pembangkit Listrik (FGD)', href: '/industri/pltu' },
        { label: 'Sintesis Industri Kimia', href: '/industri/kimia' },
        { label: 'Pertanian & Akuakultur', href: '/industri/pertanian' },
        { label: 'Konstruksi & Infrastruktur', href: '/industri/konstruksi' },
        { label: 'Pemurnian Air & Limbah', href: '/industri/pengolahan-air' },
        { label: 'Pabrik Kertas & Plastik', href: '/industri/kertas-plastik' },
        { label: 'Rafinasi Gula & Makanan', href: '/industri/gula' },
        { label: 'Industri Gelas & Kaca', href: '/industri/kaca' },
        { label: 'Pemrosesan Kulit Industri', href: '/industri/kulit' },
        { label: 'Produksi Pakan Ternak', href: '/industri/pakan-ternak' },
        { label: 'Formulasi Cat & Pelapis', href: '/industri/cat-coating' },
        { label: 'Ekstraksi Emas (Sianidasi)', href: '/industri/emas' },
        { label: 'Keramik & Porselen Halus', href: '/industri/keramik' },
      ]
    },
    {
      title: 'Strategic Regional Hubs',
      icon: MapPin,
      links: [
        { label: 'Manado - Headquarters', href: '/lokasi/manado' },
        { label: 'Jakarta - Business Center', href: '/lokasi/jakarta' },
        { label: 'Surabaya - Maritime Hub', href: '/lokasi/surabaya' },
        { label: 'Makassar - Logistics Center', href: '/lokasi/makassar' },
        { label: 'Cilegon - Heavy Industry', href: '/lokasi/cilegon' },
        { label: 'Karawang - Industrial Estate', href: '/lokasi/karawang' },
        { label: 'Bekasi - Manufacturing Hub', href: '/lokasi/bekasi' },
        { label: 'KEK Bitung - Special Zone', href: '/lokasi/kek-bitung' },
        { label: 'Maluku - Eastern Expansion', href: '/lokasi/maluku' },
        { label: 'Serang - Banten Corridor', href: '/lokasi/serang' },
        { label: 'Kotamobagu - Regional Depot', href: '/lokasi/kotamobagu' },
        { label: 'Tangerang - Distribution Point', href: '/lokasi/tangerang' },
        { label: 'Kudus - Central Java', href: '/lokasi/kudus' },
        { label: 'KEK Gresik - JIIPE Area', href: '/lokasi/kek-gresik' },
      ]
    },
    {
      title: 'Corporate',
      icon: Info,
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Quality Standards', href: '/quality' },
        { label: 'Investor Relations', href: '#' },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-brand-blue mb-6 uppercase tracking-tight"
        >
          HTML Sitemap
        </motion.h1>
        <div className="w-24 h-2 bg-brand-gold mx-auto mb-8 rounded-full" />
        <p className="text-xl text-gray-500 font-medium">Explore all sections of PT Wira Energi Utama official portal.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-brand-blue uppercase tracking-tight">{section.title}</h2>
                </div>
                <ul className="space-y-4 border-l-2 border-gray-100 pl-8 ml-6">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        href={link.href}
                        className="text-lg font-medium text-gray-500 hover:text-brand-gold hover:translate-x-2 transition-all block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer / Call to Action Overlay */}
      <section className="mt-32 border-t border-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
           <div>
              <h3 className="text-2xl font-black text-brand-blue uppercase tracking-tight mb-2">Can't find what you're looking for?</h3>
              <p className="text-gray-500 font-medium">Our support team is available 24/7 to assist with your technical inquiries.</p>
           </div>
           <Link href="/contact" className="bg-brand-blue text-white font-black px-12 py-5 rounded-full uppercase tracking-widest hover:bg-brand-gold hover:text-brand-blue transition-all shadow-xl">
              Contact Support
           </Link>
        </div>
      </section>
    </main>
  );
}
