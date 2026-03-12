'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import ContactModal from '../../src/components/ContactModal';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Eye } from 'lucide-react';

export default function PrivacyPage() {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const icons = [Eye, Lock, ShieldCheck];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-brand-blue mb-4"
          >
            {t.privacy.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium"
          >
            {t.privacy.lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {t.privacy.sections.map((section, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 items-start"
                >
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 p-12 bg-brand-blue rounded-[3rem] text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Questions?</h3>
            <p className="text-gray-300 mb-8">
              If you have any questions about our privacy policy, please contact us.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-brand-gold text-brand-blue px-10 py-4 rounded-full font-bold hover:bg-brand-gold-light transition-all shadow-xl"
            >
              Contact Legal Team
            </button>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t.contact} />
    </main>
  );
}
