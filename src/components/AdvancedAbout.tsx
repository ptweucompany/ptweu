import { motion } from 'motion/react';
import { Shield, Zap, ShieldCheck, Ship, Settings, Truck, Leaf, Target, History, Users, Award, TrendingUp } from 'lucide-react';
import { Translation } from '../types';
import PhotoSlider from './PhotoSlider';

interface AdvancedAboutProps {
  t: Translation['advancedAbout'];
}

export default function AdvancedAbout({ t }: AdvancedAboutProps) {
  const iconMap: Record<string, any> = {
    Shield, Zap, ShieldCheck, Ship, Settings, Truck, Leaf, Target, History, Users, Award, TrendingUp
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-brand-blue">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-40"
        >
          <img src={t.hero.image} alt="Company Hero" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-transparent to-white" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold font-black uppercase tracking-[0.4em] mb-4 block"
          >
            {t.hero.subtitle}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium"
          >
            {t.hero.description}
          </motion.p>
        </div>
      </section>

      {/* History & Stats */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl" />
              <h2 className="text-4xl md:text-6xl font-black text-brand-blue mb-8 leading-tight">
                {t.history.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium">
                {t.history.content}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {t.history.stats.map((stat, idx) => (
                  <div key={idx} className="border-l-4 border-brand-gold pl-6">
                    <p className="text-4xl font-black text-brand-blue mb-2">{stat.value}</p>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <img src={t.history.image} alt="Mining History" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-blue/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 bg-brand-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">{t.values.title}</h2>
            <p className="text-brand-gold font-bold text-xl uppercase tracking-widest">{t.values.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.values.items.map((item, idx) => {
              const Icon = iconMap[item.icon] || Shield;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] hover:bg-white/10 transition-all group"
                >
                  <div className="w-20 h-20 bg-brand-gold text-brand-blue rounded-[2rem] flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform shadow-xl">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <img src={t.leadership.image} alt="Leadership" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-8 uppercase tracking-tight">
                {t.leadership.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-black border-l-8 border-brand-gold pl-8">
                {t.leadership.content}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assets Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.assets.items.map((asset, idx) => {
              const Icon = iconMap[asset.icon] || Settings;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 flex items-center space-x-8 group hover:border-brand-gold transition-all"
                >
                  <div className="w-16 h-16 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">{asset.name}</h4>
                    <p className="text-2xl font-black text-brand-blue">{asset.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability & Safety */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 p-16 rounded-[4rem] border border-green-100"
            >
              <Leaf className="text-green-600 mb-8" size={60} />
              <h3 className="text-4xl font-black text-green-900 mb-8 uppercase tracking-tight">{t.sustainability.title}</h3>
              <p className="text-green-800 font-medium text-lg leading-relaxed mb-10">
                {t.sustainability.content}
              </p>
              <div className="space-y-4">
                {t.sustainability.initiatives.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 bg-white/50 p-4 rounded-2xl">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="font-bold text-green-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-16 rounded-[4rem] border border-blue-100 flex flex-col justify-between"
            >
              <div>
                <ShieldCheck className="text-brand-blue mb-8" size={60} />
                <h3 className="text-4xl font-black text-brand-blue mb-8 uppercase tracking-tight">{t.safety.title}</h3>
                <p className="text-brand-blue/80 font-medium text-lg leading-relaxed mb-10">
                  {t.safety.content}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.safety.certifications.map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-3xl shadow-sm flex items-center space-x-4">
                    <Award className="text-brand-gold" size={24} />
                    <span className="font-black text-brand-blue text-sm uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Collage Slider */}
      <PhotoSlider 
        images={t.gallery.images} 
        title={t.gallery.title} 
        subtitle={t.gallery.subtitle} 
      />

      {/* CTA / Vision */}
      <section className="py-32 bg-gray-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <img src="/mining-bg.webp" alt="Vision BG" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Target className="text-brand-gold mx-auto mb-10" size={80} />
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter">
            {t.future.title}
          </h2>
          <p className="text-2xl text-gray-300 font-medium leading-relaxed mb-16 italic">
            "{t.future.content}"
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.future.targets.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                <TrendingUp className="text-brand-gold mx-auto mb-4" size={32} />
                <p className="text-white font-black uppercase tracking-widest text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
