import { Database, Activity, Zap, SearchCheck } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface OperationalExcellenceProps {
  t: Translation['operational'];
  resourcesT: Translation['resources'];
}

export default function OperationalExcellence({ t, resourcesT }: OperationalExcellenceProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{resourcesT.title}</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">{resourcesT.subtitle}</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              {resourcesT.text}
            </p>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-6">
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                <Database size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-brand-blue">97.05 Hectares</h4>
                <p className="text-gray-500">Total Mining Concession Area</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {t.stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100 text-center"
              >
                <p className="text-brand-gold font-bold text-3xl mb-2">{stat.value}</p>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Activity size={400} className="absolute -left-20 -bottom-20" />
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-brand-gold text-brand-blue rounded-3xl flex items-center justify-center mb-8 mx-auto">
              <Zap size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.title}</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t.subtitle} Our operations are powered by a commitment to maximum uptime and precision engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
