'use client';

import Image from 'next/image';
import { useLanguage } from '../../src/context/LanguageContext';
import ContactForm from '../../src/components/ContactForm';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock, MessageSquare, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const offices = [
    {
      ...t.advancedContact.offices[0],
      icon: MapPin,
      color: 'blue'
    },
    {
      ...t.advancedContact.offices[1],
      icon: MapPin,
      color: 'gold'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/Hero_v3.webp"
            alt="Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            {t.advancedContact.hero.title}
          </motion.h1>
          <div className="w-24 h-2 bg-brand-gold mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            {t.advancedContact.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden group hover:translate-y-[-10px] transition-all duration-500"
              >
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={office.image || '/Hero_v3.webp'}
                    alt={office.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={`absolute top-6 left-6 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${idx === 0 ? 'bg-brand-blue text-white' : 'bg-brand-gold text-brand-blue'}`}>
                    {idx === 0 ? 'Main Office' : 'Regional Office'}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-black text-brand-blue mb-6">{office.title}</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:bg-brand-gold transition-colors">
                        <MapPin size={24} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:bg-brand-gold transition-colors">
                        <Phone size={24} />
                      </div>
                      <p className="text-gray-600 font-bold">{office.phone}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:bg-brand-gold transition-colors">
                        <Mail size={24} />
                      </div>
                      <p className="text-gray-600 font-bold">{office.email}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-brand-blue rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full -mr-20 -mt-20" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <MessageSquare size={60} className="text-brand-gold mb-8" />
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Mining Site Operations</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Globe size={30} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-2">Mining Location</p>
                      <p className="text-xl font-medium text-gray-200 leading-relaxed">
                        Ratatotok Morea Soyowan, Minahasa Tenggara, Sulawesi Utara
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={30} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-2">Working Hours</p>
                      <p className="text-xl font-medium text-gray-200">
                        Operational: 24/7 (Mining Area)<br/>
                        Office: Mon - Fri, 08:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Wrapper */}
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-3xl text-gray-900 leading-none">
                <h3 className="text-3xl font-black text-brand-blue mb-8">Send Inquiries</h3>
                <ContactForm t={t.contact} />
                
                {/* Direct Support CTAs */}
                <div className="mt-12 pt-10 border-t border-gray-100 italic">
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 font-sans">For Faster Response:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href="https://wa.me/628114344168" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-4 px-6 rounded-2xl transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
                    >
                      <MessageSquare size={20} fill="white" />
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href="tel:+624342603008" 
                      className="flex items-center justify-center space-x-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-black py-4 px-6 rounded-2xl transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
                    >
                      <Phone size={20} fill="white" />
                      <span>Official Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-blue mb-4 uppercase tracking-tight">{t.advancedContact.faq.title}</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto" />
          </div>
          <div className="space-y-4">
            {t.advancedContact.faq.items.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center group"
                >
                  <span className="text-lg font-bold text-gray-800 group-hover:text-brand-blue transition-colors">{item.q}</span>
                  <ChevronDown className={`text-brand-gold transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-8 pb-8 text-gray-600 leading-relaxed font-medium">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
