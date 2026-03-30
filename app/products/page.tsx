'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import ContactModal from '../../src/components/ContactModal';
import InteractiveCard from '../../src/components/InteractiveCard';
import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Box, Layers, Thermometer, Filter, Microscope, 
  Truck, Ship, ShieldCheck, Factory, Zap, 
  Construction, Wrench, Beaker, Sprout, Settings,
  Globe, Leaf, Users
} from 'lucide-react';

export default function ProductsPage() {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const productIcons = [Box, Layers, Thermometer, Filter, Microscope];
  
  const industryIconMap: Record<string, any> = {
    'Construction': Construction,
    'Wrench': Wrench,
    'Zap': Zap,
    'Beaker': Beaker,
    'Sprout': Sprout
  };

  const getProductDetail = (name: string) => {
    if (name.includes('Limestone')) return t.productDetails.limestone;
    if (name.includes('Hydrated')) return t.productDetails.hydratedLime;
    if (name.includes('Burn')) return t.productDetails.burnLime;
    return t.productDetails.limestone;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-blue overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute inset-0 opacity-10">
          <img src="/Hero.webp" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight"
          >
            {t.products.title}
          </motion.h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-medium"
          >
            {t.products.subtitle}
          </motion.p>
        </div>
      </section>

      {/* 1. Operational Capabilities Stats */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.productExpansion.capabilities.stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <p className="text-brand-blue text-4xl font-black mb-2 group-hover:text-brand-gold transition-colors">{stat.value}</p>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core Products Display */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-blue mb-4 uppercase tracking-tight">Industrial Grade Minerals</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {t.products.items.map((product, index) => {
              const langPrefix = t.nav.products === 'Produk' ? '/produk' : '/products';
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
              
              const slug = t.nav.products === 'Produk' 
                ? slugMapID[product.name] 
                : slugMapEN[product.name];

              return (
                <Link key={index} href={`${langPrefix}/${slug}`}>
                  <InteractiveCard
                    title={product.name}
                    description={product.desc}
                    icon={productIcons[index % productIcons.length]}
                    onClick={() => {}} // Navigation handled by Link
                    color={index % 2 === 0 ? 'blue' : 'gold'}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Supply Chain Flow (Visual Journey) */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Globe className="text-brand-blue mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold text-brand-blue mb-4">{t.productExpansion.supplyChain.title}</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Ensuring seamless material movement from our mine to your plant.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-brand-gold/20" />
            
            {t.productExpansion.supplyChain.steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl group hover:bg-brand-blue transition-all"
              >
                <div className="w-20 h-20 bg-brand-gold text-brand-blue rounded-3xl flex items-center justify-center mb-8 font-black text-2xl group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-4 group-hover:text-white">{step.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deep-Sea Logistics (Infrastructure Highlight) */}
      <section className="py-24 bg-brand-blue text-white relative">
        <div className="absolute inset-0 opacity-15">
          <img src="/Drone Webp/DJI_20260310143758_0302_D (1).webp" alt="Logistics" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <Ship size={60} className="text-brand-gold mb-8" />
              <h2 className="text-5xl font-extrabold mb-8 leading-tight">Private Deep-Water Access</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 italic border-l-4 border-brand-gold pl-8">
                With a 12-meter draft jetty, we handle large-capacity barges (300ft), reducing loading time and logistics costs for our global partners.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-white/10 rounded-full text-sm font-bold tracking-widest uppercase">Self-Owned Jetty</div>
                <div className="px-6 py-3 bg-white/10 rounded-full text-sm font-bold tracking-widest uppercase">Fast Loading</div>
              </div>
            </div>
            <div className="rounded-[4rem] overflow-hidden shadow-3xl h-[450px] border-[10px] border-white/10">
              <img src="/Drone Webp/DJI_20260310144034_0308_D (1).webp" alt="Jetty Drone View" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve (Grid of Icons) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-blue mb-4">{t.productExpansion.industries.title}</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.productExpansion.industries.list.map((industry, idx) => {
              const Icon = industryIconMap[industry.icon] || Factory;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 border border-gray-100 p-10 rounded-[3rem] text-center hover:shadow-2xl hover:border-brand-gold transition-all"
                >
                  <Icon size={48} className="text-brand-blue mx-auto mb-6" />
                  <p className="font-bold text-gray-900 leading-tight">{industry.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Quality Assurance & Sustainability (Split) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-gray-100 shadow-brand-blue/5">
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck size={40} className="text-brand-blue" />
                <h3 className="text-3xl font-bold text-brand-blue">{t.productExpansion.qcLifecycle.title}</h3>
              </div>
              <ul className="space-y-6">
                {t.productExpansion.qcLifecycle.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-brand-gold flex-shrink-0" />
                    <span className="text-lg text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-brand-blue p-12 rounded-[4rem] shadow-xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[4rem] group-hover:scale-110 transition-transform" />
              <Leaf size={40} className="text-brand-gold mb-8" />
              <h3 className="text-3xl font-bold mb-6">{t.productExpansion.sustainability.title}</h3>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                {t.productExpansion.sustainability.text}
              </p>
              <div className="mt-8 flex gap-6">
                <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-center">
                   <p className="text-sm font-bold text-brand-gold">Dust-Free Tech</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-center">
                   <p className="text-sm font-bold text-brand-gold">Eco Cert.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Precision & Custom Mineral Engineering */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-[5rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
            <div className="lg:w-1/2">
              <Settings size={60} className="text-brand-blue mb-8 animate-spin-slow" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-8">{t.productExpansion.customSolutions.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
                {t.productExpansion.customSolutions.text}
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-2 bg-brand-blue text-white rounded-xl text-sm font-bold uppercase tracking-widest">Custom Mesh</span>
                <span className="px-6 py-2 bg-brand-gold text-brand-blue rounded-xl text-sm font-bold uppercase tracking-widest">Chemical Tuning</span>
              </div>
            </div>
            <div className="lg:w-1/2 rounded-[4rem] overflow-hidden h-[500px] shadow-2xl">
              <img src="/Foto webp/IMG_1154.webp" alt="Precision Mining" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. The Partnership Roadmap (Roadmap to Customer) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Users size={48} className="text-brand-blue mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-brand-blue mb-4">{t.productExpansion.partnership.title}</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto" />
          </div>

          <div className="relative">
            {/* Vertical/Horizontal Line */}
            <div className="absolute top-0 bottom-0 lg:top-[60px] lg:bottom-auto left-[39px] lg:left-[5%] lg:right-[5%] w-1 lg:w-auto lg:h-1 bg-brand-gold/20" />
            
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
              {t.productExpansion.partnership.steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 lg:pl-0 lg:pt-16"
                >
                  <div className="absolute left-0 lg:left-0 lg:top-0 w-20 h-20 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-2xl z-10 border-8 border-white shadow-xl">
                    {idx + 1}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-brand-blue text-white px-16 py-6 rounded-full font-black text-2xl hover:bg-brand-blue-light transition-all shadow-[0_20px_50px_rgba(52,86,163,0.3)] hover:-translate-y-2 uppercase tracking-tight"
            >
              Start Partnership
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t.contact} />
    </main>
  );
}
