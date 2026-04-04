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

const productImageMap: Record<string, string> = {
  'batu-kapur': '/products/limestone.png',
  'limestone': '/products/limestone.png',
  'kalsium-karbonat': '/products/caco3.png',
  'caco3': '/products/caco3.png',
  'kapur-bakar': '/products/burn-lime.png',
  'burn-lime': '/products/burn-lime.png',
  'kapur-padam': '/products/hydrated-lime.png',
  'hydrated-lime': '/products/hydrated-lime.png',
  'pcc': '/products/pcc.png'
};

export default function Products({ t }: ProductsProps) {
  const { lang } = useLanguage();
  
  const getSlugValue = (name: string) => {
    if (lang === 'id') return slugMapID[name] || '';
    return slugMapEN[name] || '';
  };

  const getSlugPath = (name: string) => {
    const slug = getSlugValue(name);
    if (lang === 'id') return `/produk/${slug}`;
    return `/products/${slug}`;
  };

  const getImageUrl = (name: string) => {
    const slug = getSlugValue(name);
    return productImageMap[slug] || '';
  };

  return (
    <section id="products" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
          <p className="text-4xl font-bold text-gray-900 mb-6">{t.subtitle}</p>
          <div className="h-1.5 w-24 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((product, index) => (
            <Link key={index} href={getSlugPath(product.name)} className="group h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white h-full rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Product Image Section */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={getImageUrl(product.name)} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-brand-blue/60 backdrop-blur-md text-white border border-brand-gold/30 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-xl z-10 transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">{product.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{product.desc}</p>
                  </div>
                  
                  <div className="text-brand-blue text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                    Explore Details
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
