import { Rocket, Globe2, TrendingUp } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface FutureVisionProps {
  t: Translation['vision'];
}

export default function FutureVision({ t }: FutureVisionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-5">
            <Globe2 size={800} className="absolute -right-40 -top-40" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-brand-gold mb-6">
                <Rocket size={28} />
                <span className="font-bold uppercase tracking-widest text-sm">{t.title}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                {t.subtitle}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                {t.text}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                  <TrendingUp size={24} />
                </div>
                <span className="font-bold text-lg">Scaling for Global Demand</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 rounded-3xl border border-white/10"
              >
                <h4 className="text-3xl font-bold text-brand-gold mb-2">2027</h4>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Regional Expansion</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 rounded-3xl border border-white/10 mt-12"
              >
                <h4 className="text-3xl font-bold text-brand-gold mb-2">2030</h4>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Global Leadership</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
