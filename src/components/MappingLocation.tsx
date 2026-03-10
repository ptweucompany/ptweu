import { MapPin, Navigation } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface MappingLocationProps {
  t: Translation['location'];
}

export default function MappingLocation({ t }: MappingLocationProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">{t.subtitle}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">{t.area}</h4>
                  <p className="text-gray-600">Ratatotok, Southeast Minahasa, North Sulawesi</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Navigation size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">{t.coordinates}</h4>
                  <p className="text-gray-600">Strategic access to maritime and land distribution routes.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gray-200"
          >
            {/* Using the map image from PDF page 8 concept */}
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
              alt="Geographic Map"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-blue/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gold animate-ping rounded-full" />
                <div className="relative w-6 h-6 bg-brand-gold rounded-full border-4 border-white shadow-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
