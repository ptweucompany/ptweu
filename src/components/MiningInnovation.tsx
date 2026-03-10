import { Cpu, Monitor, Zap } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface MiningInnovationProps {
  t: Translation['innovation'];
}

export default function MiningInnovation({ t }: MiningInnovationProps) {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 blur-3xl bg-brand-gold rounded-full -mr-32 -mt-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{t.subtitle}</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.text}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-10 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 text-center"
          >
            <div className="w-16 h-16 bg-brand-gold text-brand-blue rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <Cpu size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4">Digital Monitoring</h4>
            <p className="text-gray-400">Real-time data analytics for operational efficiency.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-10 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 text-center"
          >
            <div className="w-16 h-16 bg-brand-gold text-brand-blue rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <Monitor size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4">Smart Crushing</h4>
            <p className="text-gray-400">Automated systems for consistent grain size control.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-10 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 text-center"
          >
            <div className="w-16 h-16 bg-brand-gold text-brand-blue rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <Zap size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4">Energy Efficient</h4>
            <p className="text-gray-400">Low-emission technologies for sustainable mining.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
