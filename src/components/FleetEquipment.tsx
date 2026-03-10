import { Truck, HardHat } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface FleetEquipmentProps {
  t: Translation['fleet'];
}

export default function FleetEquipment({ t }: FleetEquipmentProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
            <h3 className="text-4xl font-bold text-gray-900">{t.subtitle}</h3>
          </div>
          <div className="flex items-center space-x-4 bg-brand-gold/10 px-6 py-3 rounded-2xl border border-brand-gold/20">
            <HardHat className="text-brand-gold" size={24} />
            <span className="text-brand-blue font-bold text-sm">Industrial Grade Fleet</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-blue mb-6">
                <Truck size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h4>
              <p className="text-brand-gold font-bold text-sm uppercase tracking-widest">{item.brand}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-[3rem] overflow-hidden h-[400px] relative">
          <img
            src="https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&q=80&w=2000"
            alt="Fleet on Site"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue/30" />
        </div>
      </div>
    </section>
  );
}
