'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Globe, MapPin, Package, Info, FileText, Newspaper, Heart, Shield, Award } from 'lucide-react';

export default function HTMLSitemap() {
  const { lang, t } = useLanguage();

  const sections = [
    {
      title: 'Main Pages',
      icon: Globe,
      links: [
        { label: 'Home', href: '/' },
        { label: t.nav.about, href: lang === 'id' ? '/tentang-kami' : '/about' },
        { label: t.nav.products, href: lang === 'id' ? '/produk' : '/products' },
        { label: t.nav.catalog, href: lang === 'id' ? '/katalog' : '/catalog' },
        { label: t.nav.blog, href: '/blog' },
        { label: t.nav.contact, href: '/contact' },
      ]
    },
    {
      title: 'Products (ID)',
      icon: Package,
      links: [
        { label: 'Batu Kapur', href: '/produk/batu-kapur' },
        { label: 'Kalsium Karbonat', href: '/produk/kalsium-karbonat' },
        { label: 'Kapur Bakar', href: '/produk/kapur-bakar' },
        { label: 'Kapur Padam', href: '/produk/kapur-padam' },
        { label: 'PCC', href: '/produk/pcc' },
      ]
    },
    {
      title: 'Products (EN)',
      icon: Package,
      links: [
        { label: 'Limestone', href: '/products/limestone' },
        { label: 'CaCO3', href: '/products/caco3' },
        { label: 'Burn Lime', href: '/products/burn-lime' },
        { label: 'Hydrated Lime', href: '/products/hydrated-lime' },
        { label: 'PCC', href: '/products/pcc' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
