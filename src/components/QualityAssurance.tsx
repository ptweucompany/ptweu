import { Award, ShieldCheck } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface QualityAssuranceProps {
  t: Translation['qa'];
}

export default function QualityAssurance({ t }: QualityAssuranceProps) {
  return (
    <section id="qa" className="py-24 bg-brand-blue text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 text-brand-gold mb-6">
              <ShieldCheck size={28} />
              <span className="font-bold uppercase tracking-widest text-sm">{t.title}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Tested & Certified for <span className="text-brand-gold">Global Standards</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              {t.text}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {t.labs.map((lab, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-white/5 border border-white/10 p-4 rounded-xl"
                >
                  <Award className="text-brand-gold" size={24} />
                  <span className="font-bold text-sm">{lab}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                alt="Laboratory Testing"
                className="rounded-3xl shadow-2xl border-8 border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
