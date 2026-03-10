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
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <div className="inline-flex items-center space-x-2 text-brand-gold mb-6">
                <ShieldCheck size={28} />
                <span className="font-bold uppercase tracking-widest text-sm">{t.title}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {t.subtitle}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <FileCheck className="text-brand-gold mt-1" size={24} />
                  <div>
                    <p className="text-xl font-bold text-white mb-1">{t.iup}</p>
                    <p className="text-gray-400">{t.validity}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-48 h-48 border-4 border-brand-gold/30 rounded-full flex items-center justify-center p-4"
              >
                <div className="w-full h-full border-2 border-brand-gold rounded-full flex items-center justify-center text-center">
                  <p className="text-brand-gold font-bold text-xs uppercase tracking-tighter">Certified<br/>Compliance</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
