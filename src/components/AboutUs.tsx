import { CheckCircle2, Target } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface AboutUsProps {
  t: Translation['about'];
}

export default function AboutUs({ t }: AboutUsProps) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621686417748-038234661bc5?auto=format&fit=crop&q=80&w=1000"
                alt="Fasilitas operasional pertambangan batu kapur dan limestone darat PT Wira Energi Utama yang berkelanjutan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-blue p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-brand-gold text-4xl font-bold mb-1">10+</p>
              <p className="text-white text-sm font-medium uppercase tracking-wider">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
            
            {/* Vision */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="text-brand-gold" size={32} />
                <h3 className="text-3xl font-bold text-gray-900">{t.vision}</h3>
              </div>
              <p className="text-xl text-gray-600 italic leading-relaxed border-l-4 border-brand-gold pl-6">
                "{t.visionText}"
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.mission}</h3>
              <div className="space-y-4">
                {t.missionItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="text-brand-gold mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
