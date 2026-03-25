import { Ship, Truck, Clock } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface SupplyChainProps {
  t: Translation['logistics'];
}

export default function SupplyChain({ t }: SupplyChainProps) {
  return (
    <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <Ship size={600} className="absolute -right-20 -top-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{t.subtitle}</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              {t.text}
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3 bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
                <Truck className="text-brand-gold" size={24} />
                <span className="font-bold">Land Transport</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
                <Ship className="text-brand-gold" size={24} />
                <span className="font-bold">Sea Freight</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
                <Clock className="text-brand-gold" size={24} />
                <span className="font-bold">On-Time Delivery</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]"
          >
            <img
              src="/WebpPTWEU4/Дорогие подписчики!  Цены на нефть….webp"
              alt="Armada logistik dumptruck dan jaringan distribusi batu gamping PT Wira Energi Utama"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-blue/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
