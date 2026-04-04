import { ArrowRight, Settings, Pickaxe, Truck, Factory, Search } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface MiningProcessProps {
  t: Translation['process'];
}

const iconMap: Record<number, any> = {
  0: Search,
  1: Settings,
  2: Pickaxe,
  3: Truck,
  4: Factory,
};

export default function MiningProcess({ t }: MiningProcessProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
          <h3 className="text-4xl font-bold text-gray-900">{t.subtitle}</h3>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {t.steps.map((step, index) => {
              const Icon = iconMap[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-brand-blue text-white rounded-full flex items-center justify-center mb-8 shadow-xl relative border-4 border-white">
                    <Icon size={32} />
                    <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-8 h-8 bg-brand-gold text-brand-blue rounded-full flex items-center justify-center font-bold text-sm border-2 border-brand-blue shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
