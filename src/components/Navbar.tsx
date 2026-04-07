'use client';

import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Language, Translation } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation['nav'];
  onContactClick: () => void;
}

export default function Navbar({ lang, setLang, t, onContactClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/' || pathname === '/en';

  const handleLangChange = (newLang: Language) => {
    if (newLang === lang) return;
    setLang(newLang);

    if (newLang === 'en') {
      if (pathname === '/') {
        router.push('/en');
      } else if (!pathname.startsWith('/en')) {
        router.push(`/en${pathname}`);
      }
    } else {
      if (pathname === '/en') {
        router.push('/');
      } else if (pathname.startsWith('/en/')) {
        router.push(pathname.replace('/en/', '/'));
      }
    }
  };

  const navLinks = [
    { name: t.products, href: lang === 'id' ? '/produk' : '/products' },
    { name: t.about, href: lang === 'id' ? '/tentang-kami' : '/about' },
    { name: t.catalog, href: '/katalog' },
  ];

  return (
    <nav className="fixed w-full z-40 bg-brand-blue/95 backdrop-blur-md text-white shadow-lg" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href={lang === 'id' ? '/' : '/en'} className="flex items-center space-x-3 group" aria-label="PT Wira Energi Utama Home">
            <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
              <Image 
                src="/2.svg" 
                alt="PT Wira Energi Utama Logo" 
                fill 
                priority 
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-extrabold tracking-tight text-white leading-none group-hover:text-brand-gold transition-colors">PT.WEU</span>
              <span className="text-xs font-bold tracking-[0.2em] text-brand-gold/80 leading-tight">Wira Energi Utama</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={lang === 'id' ? '/' : '/en'} className={`text-sm font-medium hover:text-brand-gold transition-colors flex items-center ${isHome ? 'text-brand-gold' : ''}`}>
              Home
            </Link>
            
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium hover:text-brand-gold transition-colors ${pathname === link.href ? 'text-brand-gold border-b-2 border-brand-gold pb-1' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2 border-l border-white/20 pl-6">
              <button
                onClick={() => handleLangChange('id')}
                className={`text-xs font-bold px-2 py-1 rounded ${lang === 'id' ? 'bg-brand-gold text-brand-blue' : 'hover:text-brand-gold'}`}
              >
                ID
              </button>
              <button
                onClick={() => handleLangChange('en')}
                className={`text-xs font-bold px-2 py-1 rounded ${lang === 'en' ? 'bg-brand-gold text-brand-blue' : 'hover:text-brand-gold'}`}
              >
                EN
              </button>
            </div>

            <Link
              href={lang === 'id' ? '/kontak' : '/en/contact'}
              className="relative overflow-hidden bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold py-2.5 px-6 rounded-full text-sm transition-all transform hover:scale-105 shadow-lg group"
            >
              <span className="relative z-10">{t.contact}</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]" />
              <div className="absolute -inset-1 bg-brand-gold/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <div className="flex items-center space-x-1 bg-white/10 rounded-full px-2 py-1">
              <button onClick={() => setLang('id')} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${lang === 'id' ? 'bg-brand-gold text-brand-blue' : ''}`}>ID</button>
              <button onClick={() => setLang('en')} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${lang === 'en' ? 'bg-brand-gold text-brand-blue' : ''}`}>EN</button>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-blue border-t border-white/10 py-4 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-medium hover:text-brand-gold"
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium hover:text-brand-gold"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={lang === 'id' ? '/kontak' : '/en/contact'}
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center bg-brand-gold text-brand-blue font-bold py-3 rounded-xl shadow-lg"
          >
            {t.contact}
          </Link>
        </div>
      )}
    </nav>
  );
}
