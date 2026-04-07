'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Star, Zap, Package, Sun, Layers, Shield, 
  Palette, FileText, Thermometer, Flame, Truck, 
  Mountain, FlaskConical, Droplets, Wind, Recycle, 
  Microscope, Award, Stethoscope, Sparkles, Printer,
  ChevronRight, CheckCircle2, Factory, Building, 
  Construction, Droplet, Globe, Info, HelpCircle, 
  MessageCircle, ArrowRight, ExternalLink
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend 
} from 'recharts';
import { ProductPageData } from '../types';
import ContactModal from './ContactModal';

const iconMap: Record<string, any> = {
  ShieldCheck, Star, Zap, Package, Sun, Layers, Shield, 
  Palette, FileText, Thermometer, Flame, Truck, 
  Mountain, FlaskConical, Droplets, Wind, Recycle, 
  Microscope, Award, Stethoscope, Sparkles, Printer,
  Factory, Building, Construction, Droplet, Globe
};

interface ProductDetailProps {
  data: ProductPageData;
  contactT: any;
}

export default function ProductDetail({ data, contactT }: ProductDetailProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.hero.image} 
            alt={data.hero.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-brand-gold text-brand-blue font-bold text-sm tracking-widest uppercase rounded-full mb-6">
              {data.hero.subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight uppercase">
              {data.hero.title}
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium italic border-l-4 border-brand-gold pl-6">
              {data.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="px-10 py-5 bg-brand-gold text-brand-blue font-black rounded-2xl hover:bg-white transition-all shadow-xl hover:-translate-y-1 uppercase tracking-tighter text-lg"
              >
                {data.cta.button}
              </button>
              <a 
                href={`https://wa.me/628114344168`}
                target="_blank"
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl hover:bg-white/20 transition-all flex items-center gap-3"
              >
                <MessageCircle size={24} />
                WhatsApp Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Quick Stats Grid */}
      <section className="-mt-16 relative z-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {data.stats.map((stat, idx) => {
              const Icon = iconMap[stat.icon] || Info;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center group hover:bg-brand-blue transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold transition-colors">
                    <Icon className="text-brand-blue transition-colors" size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-brand-blue mb-1 group-hover:text-white transition-colors">{stat.value}</h3>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs group-hover:text-gray-300 transition-colors">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Overview & Features */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-brand-gold" />
                <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tight">{data.overview.title}</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed font-medium mb-12">
                {data.overview.content}
              </p>
              <div className="space-y-6">
                {data.overview.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={20} className="text-brand-gold" />
                    </div>
                    <span className="text-lg font-bold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-brand-blue/5 rounded-[5rem] rotate-3 -z-10" />
              <div className="bg-gray-100 rounded-[4rem] overflow-hidden shadow-3xl h-[600px] border-[12px] border-white">
                <img src={data.hero.image} alt="Feature" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Specifications & Chart */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tight mb-4">{data.specifications.title}</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-brand-blue p-8 text-white">
                <h3 className="text-xl font-bold uppercase tracking-widest">Chemical Parameters</h3>
              </div>
              <div className="p-8 space-y-4">
                {data.specifications.table.map((row, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-4 rounded-xl transition-colors">
                    <span className="font-bold text-gray-500 uppercase text-sm tracking-widest">{row.label}</span>
                    <span className="font-black text-brand-blue text-lg">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 p-10 h-[550px] flex flex-col items-center">
              <h3 className="text-xl font-black text-brand-blue mb-8 uppercase tracking-widest">Composition Ratio</h3>
              <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data.specifications.chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={140}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {data.specifications.chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', padding: '1rem' }} 
                    />
                    <Legend verticalAlign="bottom" iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industrial Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tight mb-4">{data.applications.title}</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.applications.items.map((item, idx) => {
              const Icon = iconMap[item.icon] || Globe;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-gray-50 border border-gray-100 rounded-[3rem] hover:bg-brand-blue group transition-all duration-500"
                >
                  <Icon className="text-brand-blue mb-8 group-hover:text-brand-gold transition-colors" size={48} />
                  <h3 className="text-xl font-bold text-brand-blue mb-4 group-hover:text-white transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Production Process */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <img src="/Hero_v3.webp" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase tracking-widest mb-4">{data.process.title}</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto" />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[100px] left-[10%] right-[10%] h-1 bg-white/20" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {data.process.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative space-y-6"
                >
                  <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-brand-blue font-black text-3xl shadow-2xl border-8 border-brand-blue">
                    0{idx + 1}
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight leading-none pt-4">{step.title}</h4>
                  <p className="text-gray-300 font-medium leading-relaxed italic">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Quality Assurance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-[5rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck size={48} className="text-brand-blue" />
                <h2 className="text-3xl font-black text-brand-blue uppercase tracking-tight">{data.quality.title}</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed font-medium mb-12 italic border-l-4 border-brand-gold pl-8">
                {data.quality.content}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.quality.certs.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
                    <Award size={24} className="text-brand-gold" />
                    <span className="font-bold text-gray-800 text-sm tracking-tight">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-8 h-[450px]">
               <div className="bg-brand-blue rounded-[3.5rem] p-10 flex flex-col items-center justify-center text-center shadow-3xl hover:-translate-y-2 transition-transform">
                 <Microscope size={60} className="text-brand-gold mb-6" />
                 <p className="text-white font-black text-2xl uppercase tracking-tighter">Advanced Lab</p>
               </div>
               <div className="bg-brand-gold rounded-[3.5rem] p-10 flex flex-col items-center justify-center text-center shadow-3xl mt-16 hover:-translate-y-2 transition-transform">
                 <ShieldCheck size={60} className="text-brand-blue mb-6" />
                 <p className="text-brand-blue font-black text-2xl uppercase tracking-tighter">ISO Standard</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle size={60} className="text-brand-blue mx-auto mb-6" />
            <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tight mb-4">{data.faq.title}</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto" />
          </div>

          <div className="space-y-6">
            {data.faq.items.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-10 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-black text-brand-blue uppercase tracking-tight leading-tight">{item.q}</span>
                  <div className={`w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center transition-transform duration-500 ${activeFaq === idx ? 'rotate-180 bg-brand-gold text-white' : 'text-brand-gold'}`}>
                    <ChevronRight size={24} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-50"
                    >
                      <div className="p-10 text-lg text-gray-600 font-medium leading-relaxed bg-brand-blue/5">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-brand-blue mb-10 leading-none uppercase tracking-tighter">
              {data.cta.title}
            </h2>
            <p className="text-2xl text-gray-400 font-medium max-w-3xl mx-auto mb-20 leading-relaxed italic">
              "{data.cta.subtitle}"
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="px-20 py-10 bg-brand-blue text-white font-black text-3xl rounded-[3rem] shadow-3xl hover:bg-brand-blue-light hover:scale-110 transition-all duration-500 uppercase tracking-tighter"
              >
                {data.cta.button}
              </button>
              <a 
                href={`https://wa.me/628114344168`}
                target="_blank"
                className="flex items-center gap-6 text-brand-blue font-black text-2xl hover:text-brand-gold transition-all group"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-[2rem] flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-all shadow-xl">
                   <MessageCircle size={40} />
                </div>
                <div className="text-left">
                  <span className="block text-sm text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">Direct WA</span>
                  <span className="block">{data.cta.whatsapp}</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={contactT} />
    </div>
  );
}
