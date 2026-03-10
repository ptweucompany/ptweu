import { Factory, Building, Sprout, FlaskConical } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface MarketPresenceProps {
  t: Translation['market'];
}

const iconMap: Record<string, any> = {
  Factory,
  Building,
  Sprout,
  FlaskConical,
};

export default function MarketPresence({ t }: MarketPresenceProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
          <h3 className="text-4xl font-bold text-gray-900">{t.subtitle}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 text-center group transition-all hover:bg-brand-blue hover:text-white"
              >
                <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                  <Icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">{industry.name}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
