import { Translation } from '../types';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

interface ProductsProps {
  t: Translation['products'];
}

const slugMapID: Record<string, string> = {
  'Batu Kapur (Limestone)': 'batu-kapur',
  'CaCO3 (Semua Ukuran)': 'kalsium-karbonat',
  'Kapur Bakar (Burn Lime / CaO)': 'kapur-bakar',
  'Kapur Padam (Hydrated Lime / Ca(OH)2)': 'kapur-padam',
  'PCC (Precipitated Calcium Carbonate)': 'pcc'
};

const slugMapEN: Record<string, string> = {
  'Limestone': 'limestone',
  'CaCO3 (All Sizes)': 'caco3',
  'Burn Lime (CaO)': 'burn-lime',
  'Hydrated Lime (Ca(OH)2)': 'hydrated-lime',
  'PCC (Precipitated Calcium Carbonate)': 'pcc'
};

export default function Products({ t }: ProductsProps) {
  const { lang } = useLanguage();
  
  const getSlug = (name: string) => {
    if (lang === 'id') return `/produk/${slugMapID[name] || ''}`;
    return `/products/${slugMapEN[name] || ''}`;
  };

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
          <p className="text-4xl font-bold text-gray-900 mb-6">{t.subtitle}</p>
          <div className="h-1.5 w-24 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((product, index) => (
            <Link key={index} href={getSlug(product.name)}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 h-full rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-brand-blue/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                  <span className="text-brand-blue font-bold text-xl group-hover:text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{product.desc}</p>
                <div className="text-brand-blue text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-brand-gold">
                  Explore Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7"></path></svg>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
