import { Anchor, Factory } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface InfrastructureProps {
  t: Translation['infrastructure'];
}

export default function Infrastructure({ t }: InfrastructureProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
          <h3 className="text-4xl font-bold text-gray-900">{t.subtitle}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=1000"
              alt="Jetty Facility"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                <Anchor size={32} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Strategic Jetty</h4>
              <p className="text-gray-300 leading-relaxed">{t.jetty}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=1000"
              alt="Crushing Plant"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                <Factory size={32} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Crushing Plant</h4>
              <p className="text-gray-300 leading-relaxed">{t.crusher}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
