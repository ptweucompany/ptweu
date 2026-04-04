'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, Factory, Droplets, Sprout, ChevronRight, ShieldCheck, Zap, Layers, Beaker, X, CheckCircle2, ChevronDown } from 'lucide-react';
import { Translation } from '../types';

interface AdvancedCatalogProps {
  t: Translation['advancedCatalog'];
}

export default function AdvancedCatalog({ t }: AdvancedCatalogProps) {
  const [selectedItem, setSelectedItem] = useState<any>(null);

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
                    onClick={() => item.details && setSelectedItem(item)}
                    className={`bg-gray-50 p-10 rounded-[3rem] border border-transparent hover:border-brand-gold hover:bg-white hover:shadow-2xl transition-all group flex flex-col md:flex-row gap-8 ${item.details ? 'cursor-pointer' : ''}`}
                  >
                    {item.image && (
                      <div className="w-full md:w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="flex-1">
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
                      <button 
                        className="flex items-center text-sm font-black text-brand-blue uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.details) setSelectedItem(item);
                        }}
                      >
                        {item.details ? 'View Technical Sheet' : 'Specs Only'} <ChevronRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Page Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-brand-blue/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white md:text-brand-blue md:bg-gray-100 md:hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto bg-brand-blue relative">
                <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h4 className="text-sm font-black uppercase tracking-[0.3em] text-brand-gold mb-2">Technical Info</h4>
                  <h3 className="text-4xl font-black">{selectedItem.name}</h3>
                </div>
              </div>

              <div className="flex-1 p-10 md:p-14 overflow-y-auto max-h-[70vh] md:max-h-none">
                <div className="mb-10">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Core Specifications</h4>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <p className="text-xl font-bold text-brand-blue mb-2">{selectedItem.specs}</p>
                    <div className="flex flex-wrap gap-2">
                       {selectedItem.tags.map((tag: string, i: number) => (
                         <span key={i} className="text-[10px] font-black text-brand-gold uppercase tracking-tighter border border-brand-gold/30 px-2 py-0.5 rounded">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Product Details</h4>
                  <ul className="space-y-4">
                    {selectedItem.details?.map((detail: string, i: number) => (
                      <li key={i} className="flex items-start gap-4 text-gray-700 font-medium">
                        <CheckCircle2 size={20} className="text-brand-gold flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/628114344168?text=Halo%20PT%20WEU,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(selectedItem.name)}.%20Mohon%20info%20lebih%20lanjut.`}
                  className="w-full py-5 bg-brand-blue text-white rounded-2xl font-black uppercase tracking-[0.1em] flex items-center justify-center hover:bg-brand-blue/90 transition-colors"
                >
                  Request Quotation
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Download CTA */}
      <section className="py-24 bg-gray-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight">{t.download.title}</h2>
          <p className="text-2xl text-gray-400 font-medium mb-12">
            {t.download.description}
          </p>
          <div className="flex flex-col items-center gap-6">
            <motion.a
              href="/company-profile.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-brand-gold text-brand-blue font-black px-12 py-6 rounded-full text-xl uppercase tracking-tight shadow-2xl shadow-brand-gold/20"
            >
              <Download size={28} className="mr-4" />
              {t.download.button}
            </motion.a>
            {t.download.fileSize && (
              <div className="flex items-center gap-4 text-gray-500 font-bold uppercase tracking-widest text-sm">
                <span>{t.download.fileSize}</span>
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                <span>{t.download.version}</span>
              </div>
            )}
          </div>
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
