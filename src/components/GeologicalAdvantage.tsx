import { Gem, Layers, Mountain } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface GeologicalAdvantageProps {
  t: Translation['geology'];
}

export default function GeologicalAdvantage({ t }: GeologicalAdvantageProps) {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                alt="Geological Formations"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/20" />
            </div>
            <div className="absolute -bottom-10 -right-10 p-10 bg-white rounded-[2rem] shadow-xl border border-gray-100 max-w-xs">
              <Gem size={40} className="text-brand-gold mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">High Purity</h4>
              <p className="text-sm text-gray-500">Exceptional CaO levels exceeding industrial standards.</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">{t.subtitle}</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {t.text}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Layers size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Stratigraphic Quality</h4>
                  <p className="text-gray-600">Consistent quality across all geological layers of the deposit.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Mountain size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Mineral Richness</h4>
                  <p className="text-gray-600">Low impurities ensure high reactivity for smelting and chemical use.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
