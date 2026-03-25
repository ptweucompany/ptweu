import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface SafetyStandardsProps {
  t: Translation['safety'];
}

export default function SafetyStandards({ t }: SafetyStandardsProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center mb-8">
              <ShieldAlert size={40} />
            </div>
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">{t.subtitle}</h3>
            
            <div className="space-y-4">
              {t.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
              <img src="/WebpPTWEU4/Безопасность на горнодобывающем предприятии….webp" alt="Inspeksi standar keselamatan dan kesehatan kerja (K3) di area tambang PT WEU" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg mt-12">
              <img src="/WebpPTWEU4/Mine work.webp" alt="Penerapan Zero Accident policy dalam operasional pertambangan gamping Ratatotok" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
