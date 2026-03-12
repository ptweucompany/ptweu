'use client';

// REFRESH_MARKER_V3 - Forces Next.js to re-evaluate this file
import { useLanguage } from '../../src/context/LanguageContext';
import ContactModal from '../../src/components/ContactModal';
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  History, Shield, Lightbulb, Users, Target, Leaf,
  CheckCircle2, Workflow, Building2, Heart, Award, Factory
} from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/Hero.webp" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight"
          >
            {t.about.title}
          </motion.h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-gold/90 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            {t.about.visionText}
          </motion.p>
        </div>
      </section>

      {/* 1. Vision & Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-blue p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-[5rem] -mr-10 -mt-10" />
              <Target className="text-brand-gold mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-6">{t.aboutDetails.visionMission.vision.title}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.aboutDetails.visionMission.vision.text}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x:30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl"
            >
              <Award className="text-brand-blue mb-6" size={48} />
              <h2 className="text-3xl font-bold text-brand-blue mb-8">{t.aboutDetails.visionMission.mission.title}</h2>
              <ul className="space-y-6">
                {t.aboutDetails.visionMission.mission.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0 mt-1">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-gray-700 font-medium text-lg leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. History & Heritage */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
                  <History size={32} />
                </div>
                <h2 className="text-3xl font-bold text-brand-blue">{t.aboutDetails.history.title}</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                {t.aboutDetails.history.text}
              </p>
              <div className="h-1 w-20 bg-brand-blue" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[4rem] overflow-hidden shadow-2xl h-[500px] border-[12px] border-gray-50"
            >
              <img src="/Drone Webp/DJI_20260225093242_0291_D (1).webp" alt="Legacy" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Sustainability Section */}
      <section className="py-24 bg-brand-blue text-white relative">
        <div className="absolute inset-0 opacity-10">
          <img src="/Drone Webp/DJI_20260310143518_0298_D (1).webp" alt="Nature" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
              <Leaf size={20} className="text-brand-gold" />
              <span className="text-sm font-bold uppercase tracking-widest">{t.aboutDetails.sustainability.title}</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Preserving the Future of Sulawesi Utara</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              {t.aboutDetails.sustainability.text}
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-brand-gold text-3xl font-bold mb-1">80%</p>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Reclamation Success</p>
              </div>
              <div>
                <p className="text-brand-gold text-3xl font-bold mb-1">5000+</p>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Trees Planted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Operational Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Workflow className="text-brand-blue mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.aboutDetails.process.title}</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.aboutDetails.process.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-brand-blue hover:text-white transition-all group"
              >
                <div className="text-brand-gold text-4xl font-black mb-6 opacity-40 group-hover:opacity-100">0{idx + 1}</div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Infrastructure & Equipment */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 rounded-[4rem] overflow-hidden h-[600px] shadow-3xl"
            >
              <img src="/Foto webp/IMG_1156.webp" alt="Infrastructure" className="w-full h-full object-cover" />
            </motion.div>
            <div className="lg:w-1/2">
              <Building2 className="text-brand-blue mb-6" size={40} />
              <h2 className="text-4xl font-bold text-brand-blue mb-10">{t.aboutDetails.infrastructure.title}</h2>
              <div className="space-y-8">
                {t.aboutDetails.infrastructure.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Safety Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
             {/* Abstract Safety Accents */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 border-[40px] border-brand-gold/10 rounded-full" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <Shield className="text-brand-gold mb-8" size={60} />
                <h2 className="text-4xl font-bold text-white mb-6">{t.aboutDetails.safety.title}</h2>
                <p className="text-xl text-gray-300 mb-10 italic">
                  "{t.aboutDetails.safety.text}"
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.aboutDetails.safety.points.map((point, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl">
                      <CheckCircle2 className="text-brand-gold" size={20} />
                      <span className="text-white font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[3rem] overflow-hidden h-[400px]">
                <img src="/Foto webp/IMG_1221.webp" alt="Safety First" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Community & Global Standards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-8 rounded-[3rem] overflow-hidden h-72 shadow-lg">
                <img src="/Foto webp/IMG_1172.webp" alt="Community" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <Heart className="text-brand-blue mb-4" size={32} />
              <h3 className="text-2xl font-bold text-brand-blue mb-4">{t.aboutDetails.community.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{t.aboutDetails.community.text}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-8 rounded-[3rem] overflow-hidden h-72 shadow-lg">
                <img src="/Drone Webp/DJI_20260310144034_0308_D (1).webp" alt="Quality" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <Factory className="text-brand-blue mb-4" size={32} />
              <h3 className="text-2xl font-bold text-brand-blue mb-4">{t.aboutDetails.quality.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{t.aboutDetails.quality.text}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Industrial Impact (Final Section) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-extrabold text-brand-blue mb-10 leading-tight">
              {t.aboutDetails.industrial.title}
            </h2>
            <p className="text-2xl text-gray-500 font-medium mb-12 leading-relaxed">
               {t.aboutDetails.industrial.text}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-brand-blue text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-brand-blue-light transition-all shadow-2xl hover:-translate-y-1"
              >
                Let's Collaborate
              </button>
              <button className="border-4 border-brand-blue text-brand-blue px-12 py-5 rounded-full font-bold text-xl hover:bg-brand-blue hover:text-white transition-all">
                Download Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t.contact} />
    </main>
  );
}
