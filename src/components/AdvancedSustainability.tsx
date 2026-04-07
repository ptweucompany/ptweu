'use client';

import { motion } from 'motion/react';
import { 
  Leaf, 
  Sprout, 
  Trees, 
  Activity, 
  Zap, 
  Sun, 
  Move, 
  CheckCircle, 
  GraduationCap, 
  HeartPulse, 
  TrendingUp, 
  Award,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { AdvancedSustainabilityData } from '../types';

interface SustainabilityProps {
  data: AdvancedSustainabilityData;
}

export default function AdvancedSustainability({ data }: SustainabilityProps) {
  const iconMap: Record<string, any> = {
    Leaf, Sprout, Trees, Activity, Zap, Sun, Move, CheckCircle, GraduationCap, HeartPulse, TrendingUp, Award, Globe, ShieldCheck
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return <TrendingUp className="text-green-500" size={16} />;
      case 'down': return <TrendingUp className="text-red-500 rotate-180" size={16} />;
      default: return <Activity className="text-brand-gold" size={16} />;
    }
  };

  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={data.hero.image} alt="Sustainability Hero" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 bg-green-500/10 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/20 mb-8"
            >
              <Leaf className="text-green-500" size={16} />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-green-400">{data.hero.subtitle}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white mb-8 leading-none tracking-tight uppercase"
            >
              {data.hero.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 font-medium leading-relaxed mb-10"
            >
              {data.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 2. ENVIRONMENTAL MANAGEMENT ────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <img src={data.environment.image} alt="Environment" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-green-900/20" />
            </motion.div>

            <div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-blue mb-8 uppercase tracking-tight leading-none">
                {data.environment.title}
              </h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">
                {data.environment.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.environment.metrics.map((metric, idx) => {
                  const Icon = iconMap[metric.icon] || Activity;
                  return (
                    <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 group hover:border-green-500 transition-colors">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-green-600 mb-4 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all">
                        <Icon size={24} />
                      </div>
                      <p className="text-2xl font-black text-brand-blue mb-1">{metric.value}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{metric.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. RECLAMATION STRATEGY ────────────────────────────────── */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">{data.reclamation.title}</h2>
            <div className="w-24 h-2 bg-green-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">{data.reclamation.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.reclamation.steps.map((step, idx) => {
              const Icon = iconMap[step.icon] || Sprout;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-green-500 text-brand-blue rounded-[2rem] flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform shadow-xl">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-20 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center max-w-4xl mx-auto">
            <p className="text-2xl font-medium leading-relaxed italic text-gray-300">
              "{data.reclamation.content}"
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. COMMUNITY EMPOWERMENT ─────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black text-brand-blue mb-8 uppercase tracking-tight leading-none">
                {data.community.title}
              </h2>
              <p className="text-brand-gold font-bold text-xl uppercase tracking-widest mb-10">{data.community.subtitle}</p>
              <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">
                {data.community.content}
              </p>
              <div className="space-y-6">
                {data.community.highlights.map((item, idx) => {
                  const Icon = iconMap[item.icon] || HeartPulse;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100"
                    >
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-blue shadow-sm border border-gray-100">
                        <Icon size={28} />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100">
                  <img src="/Foto webp/IMG_1142.webp" alt="Community 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden bg-gray-100">
                  <img src="/Foto webp/IMG_1144.webp" alt="Community 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-[3rem] overflow-hidden bg-gray-100">
                  <img src="/Foto webp/IMG_1146.webp" alt="Community 3" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100">
                  <img src="/Foto webp/IMG_1148.webp" alt="Community 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ESG PERFORMANCE ───────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-massive">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
              <div>
                <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">{data.esg.title}</h2>
                <p className="text-brand-gold font-bold text-lg uppercase tracking-widest">{data.esg.subtitle}</p>
              </div>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10 flex items-center space-x-3">
                  <Globe size={20} className="text-green-400" />
                  <span className="text-sm font-bold uppercase tracking-widest">Global ESG Score A+</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {data.esg.metrics.map((metric, idx) => (
                <div key={idx} className="relative group">
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">{metric.label}</p>
                  <div className="flex items-end gap-3 transition-transform group-hover:scale-105 duration-300">
                    <p className="text-6xl font-black text-white leading-none">{metric.value}</p>
                    <div className="mb-1">{getTrendIcon(metric.trend)}</div>
                  </div>
                  <div className="mt-6 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      className="h-full bg-green-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CERTIFICATIONS ────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-brand-blue mb-16 uppercase tracking-tight">{data.certifications.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.certifications.items.map((cert, idx) => (
              <div key={idx} className="p-10 rounded-[3rem] border border-gray-100 bg-white shadow-xl hover:border-brand-gold transition-colors flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-brand-gold mb-8">
                  <Award size={40} />
                </div>
                <h3 className="text-xl font-black text-brand-blue mb-2 uppercase tracking-tight">{cert.name}</h3>
                <p className="text-gray-500 font-bold text-sm mb-4">{cert.issuer}</p>
                <div className="px-4 py-1 bg-brand-gold/10 rounded-full text-brand-gold text-[10px] font-black uppercase tracking-widest">
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ShieldCheck className="text-brand-gold mx-auto mb-10" size={60} />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">Responsibility Beyond Extraction</h2>
          <p className="text-xl text-gray-400 font-medium leading-relaxed italic">
            "Sustainability for PT Wira Energi Utama is not a department, it's a fundamental principle. We extract minerals from the earth with a solemn promise to restore and uplift the land and people who host us."
          </p>
        </div>
      </section>
    </div>
  );
}
