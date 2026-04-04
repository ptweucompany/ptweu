'use client';

import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface PhotoSliderProps {
  images: string[];
  title: string;
  subtitle?: string;
}

export default function PhotoSlider({ images, title, subtitle }: PhotoSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, [images]);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{title}</h2>
          {subtitle && <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{subtitle}</h3>}
        </div>
      </div>

      <div className="relative cursor-grab active:cursor-grabbing">
        <motion.div
          ref={containerRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 px-[10vw]"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[450px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group"
            >
              <Image
                src={src}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 300px, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-medium">Dokumentasi Lapangan #{index + 1}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 flex justify-center gap-2">
        <div className="text-gray-400 text-sm flex items-center gap-2">
          <span className="w-8 h-[2px] bg-brand-blue"></span>
          Geser untuk melihat koleksi
        </div>
      </div>
    </section>
  );
}
