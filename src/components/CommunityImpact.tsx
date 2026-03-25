import { Users, Heart, Sprout } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface CommunityImpactProps {
  t: Translation['csr'];
}

export default function CommunityImpact({ t }: CommunityImpactProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative rounded-[3rem] overflow-hidden h-[600px] shadow-2xl"
          >
            <img
              src="/WebpPTWEU4/My management approach covers everything from….webp"
              alt="Karyawan tambang batu kapur berinteraksi dalam program pemberdayaan masyarakat dan CSR di wilayah operasional"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-blue/20" />
            <div className="absolute bottom-10 left-10 p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-white max-w-sm">
              <Users size={40} className="text-brand-gold mb-4" />
              <h4 className="text-2xl font-bold mb-2">Local Empowerment</h4>
              <p className="text-sm text-gray-200">Prioritizing local talent and community-led development projects.</p>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">{t.subtitle}</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {t.text}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <Heart className="text-red-500 mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Social Welfare</h4>
                <p className="text-sm text-gray-500">Regular health clinics and educational support for local families.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <Sprout className="text-emerald-500 mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Economic Growth</h4>
                <p className="text-sm text-gray-500">Supporting local SMEs and creating a sustainable ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
