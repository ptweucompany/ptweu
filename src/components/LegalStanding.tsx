import { FileCheck, ShieldCheck } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface LegalStandingProps {
  t: Translation['legal'];
}

export default function LegalStanding({ t }: LegalStandingProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full -mr-20 -mt-20" />
          
          <div className="relative z-10 w-full">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center space-x-2 text-brand-gold mb-6">
                <ShieldCheck size={28} />
                <span className="font-bold uppercase tracking-widest text-sm">{t.title}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white max-w-4xl mx-auto">
                {t.subtitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.legalities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <FileCheck className="text-brand-gold mt-1 shrink-0" size={28} />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
