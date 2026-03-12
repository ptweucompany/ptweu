import { Zap, Building2, Droplets, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { Translation } from '../types';

interface IndustrialApplicationsProps {
  t: Translation['applications'];
}

export default function IndustrialApplications({ t }: IndustrialApplicationsProps) {
  const icons = [Zap, Building2, Droplets, Leaf];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
          <h3 className="text-4xl font-bold text-gray-900">{t.subtitle}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((app, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-8 p-10 bg-gray-50 rounded-[3rem] border border-gray-100"
              >
                <div className="w-20 h-20 bg-brand-blue text-white rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon size={40} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{app.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{app.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-16 rounded-[3rem] overflow-hidden h-[400px] relative">
          <img
            src="/Drone Webp/DJI_20260310144034_0308_D (1).webp"
            alt="Fasilitas operasional industri dan pengolahan batu kapur PT Wira Energi Utama"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue/20" />
        </div>
      </div>
    </section>
  );
}
