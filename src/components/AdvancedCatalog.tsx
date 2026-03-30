'use client';

import { motion } from 'motion/react';
import { FileText, Download, Factory, Droplets, Sprout, ChevronRight, ShieldCheck, Zap, Layers, Beaker } from 'lucide-react';
import { Translation } from '../types';

interface AdvancedCatalogProps {
  t: Translation['advancedCatalog'];
}

export default function AdvancedCatalog({ t }: AdvancedCatalogProps) {
  const iconMap: Record<string, any> = {
    Factory, Droplets, Sprout, ShieldCheck, Zap, Layers, Beaker
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-brand-blue overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-full opacity-10">
          <img src="/mining-bg.webp" alt="Catalog BG" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-brand-gold text-brand-blue rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <FileText size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            {t.hero.title}
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {t.categories.map((category, catIdx) => (
            <div key={catIdx} className="mb-24 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-4 border-gray-100 pb-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-2 uppercase tracking-tight">{category.title}</h2>
                  <p className="text-xl text-gray-400 font-bold uppercase tracking-widest">{category.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-6xl font-black text-gray-100">0{catIdx + 1}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-50 p-10 rounded-[3rem] border border-transparent hover:border-brand-gold hover:bg-white hover:shadow-2xl transition-all group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-black text-brand-blue group-hover:text-brand-gold transition-colors">{item.name}</h3>
                      <div className="flex space-x-2">
                        {item.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="bg-brand-blue/5 text-brand-blue text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 font-bold mb-8 flex items-center">
                      <Layers size={18} className="mr-3 text-brand-gold" />
                      {item.specs}
                    </p>
                    <button className="flex items-center text-sm font-black text-brand-blue uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                      View Technical Sheet <ChevronRight size={16} className="ml-2" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 bg-gray-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight">{t.download.title}</h2>
          <p className="text-2xl text-gray-400 font-medium mb-12">
            {t.download.description}
          </p>
          <motion.a
            href="/company-profile.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-brand-gold text-brand-blue font-black px-12 py-6 rounded-full text-xl uppercase tracking-tight shadow-2xl shadow-brand-gold/20"
          >
            <Download size={28} className="mr-4" />
            {t.download.button}
          </motion.a>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-brand-blue mb-4 uppercase tracking-tight">{t.industrial.title}</h2>
            <div className="w-24 h-2 bg-brand-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.industrial.items.map((item, idx) => {
              const Icon = iconMap[item.icon] || Factory;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group text-center"
                >
                  <div className="w-24 h-24 bg-brand-blue rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 rotate-6 group-hover:rotate-0 transition-transform shadow-xl shadow-brand-blue/10">
                    <Icon size={48} className="text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-blue mb-4 uppercase tracking-tight">{item.name}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.usage}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
