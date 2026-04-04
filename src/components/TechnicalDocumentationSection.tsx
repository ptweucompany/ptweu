'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface TechnicalDocumentationSectionProps {
  t: {
    title: string;
    subtitle: string;
    images: string[];
  };
}

export default function TechnicalDocumentationSection({ t }: TechnicalDocumentationSectionProps) {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {t.subtitle}
            </h3>
          </div>
          <div className="flex gap-2">
            <div className="px-4 py-2 bg-brand-blue/5 rounded-full text-brand-blue text-xs font-bold border border-brand-blue/10">
              LAB CERTIFIED
            </div>
            <div className="px-4 py-2 bg-brand-blue/5 rounded-full text-brand-blue text-xs font-bold border border-brand-blue/10">
              QC APPROVED
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden shadow-md group cursor-zoom-in relative"
            >
              <Image
                src={src}
                alt={`Technical Doc ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
              <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
