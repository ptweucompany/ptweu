'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScrollIntentCTAProps {
  lang?: 'id' | 'en';
}

const CONTENT = {
  id: {
    text: 'Butuh bantuan teknis atau penawaran harga?',
    cta: 'Hubungi Ahli Kami',
    href: '/kontak',
  },
  en: {
    text: 'Need technical assistance or a price quote?',
    cta: 'Consult Our Experts',
    href: '/en/contact',
  },
};

export default function ScrollIntentCTA({ lang = 'id' }: ScrollIntentCTAProps) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const c = CONTENT[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      
      if (height > 0 && scroll / height > 0.5) {
        setShow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 z-50 md:max-w-md w-auto"
        >
          <div className="bg-[#0A1628] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl p-5 md:p-6 text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C8A84B] opacity-10 rounded-full blur-3xl -mr-12 -mt-12" />
            
            <button 
              onClick={() => { setShow(false); setDismissed(true); }}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
              aria-label="Tutup"
            >
              <X size={20} />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#C8A84B] text-[#0A1628] rounded-xl flex items-center justify-center shrink-0">
                <Send size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-1 italic">
                  Direct Response
                </p>
                <h3 className="text-lg font-bold leading-tight mb-4">
                  {c.text}
                </h3>
                <Link 
                  href={c.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A84B] text-[#0A1628] font-bold rounded-xl hover:bg-[#b8933b] transition-all text-sm group"
                >
                  {c.cta}
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
