'use client';

import { ChevronRight } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface HeroProps {
  t: Translation['hero'];
  onContactClick: () => void;
}

export default function Hero({ t, onContactClick }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero.webp"
          alt="Mining Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-gold/20 border border-brand-gold/30 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Mining & Industrial Supplier</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            {t.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onContactClick}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold py-4 px-8 rounded-full flex items-center justify-center transition-all transform hover:scale-105 shadow-xl"
            >
              {t.cta}
              <ChevronRight className="ml-2" size={20} />
            </button>
            <a
              href="#about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-8 rounded-full flex items-center justify-center transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-gold/10 blur-3xl rounded-full -mb-32 -mr-32" />
    </section>
  );
}
