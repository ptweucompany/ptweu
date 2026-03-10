import { Translation } from '../types';
import { motion } from 'motion/react';

interface ProjectGalleryProps {
  t: Translation['gallery'];
}

const images = [
  'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800',
];

export default function ProjectGallery({ t }: ProjectGalleryProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
          <h3 className="text-4xl font-bold text-gray-900">{t.subtitle}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="aspect-video rounded-3xl overflow-hidden shadow-lg cursor-pointer group relative"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
