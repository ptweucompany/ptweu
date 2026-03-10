import { Globe, Menu, X, Home as HomeIcon } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language, Translation } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation['nav'];
  onContactClick: () => void;
}

export default function Navbar({ lang, setLang, t, onContactClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: t.about, href: isHome ? '#about' : '/#about' },
    { name: t.products, href: isHome ? '#products' : '/#products' },
    { name: t.qa, href: isHome ? '#qa' : '/#qa' },
  ];

  return (
    <nav className="fixed w-full z-40 bg-brand-blue/95 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-brand-blue text-xl transition-transform group-hover:scale-110">
              W
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">PT Wira Energi Utama</span>
            <span className="font-bold text-xl tracking-tight sm:hidden">WEU</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {!isHome && (
              <Link to="/" className="text-sm font-medium hover:text-brand-gold transition-colors flex items-center">
                <HomeIcon size={16} className="mr-1" />
                Home
              </Link>
            )}
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <div className="flex items-center space-x-2 border-l border-white/20 pl-6">
              <button
                onClick={() => setLang('id')}
                className={`text-xs font-bold px-2 py-1 rounded ${lang === 'id' ? 'bg-brand-gold text-brand-blue' : 'hover:text-brand-gold'}`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`text-xs font-bold px-2 py-1 rounded ${lang === 'en' ? 'bg-brand-gold text-brand-blue' : 'hover:text-brand-gold'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={onContactClick}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold py-2 px-5 rounded-full text-sm transition-all transform hover:scale-105"
            >
              {t.contact}
            </button>
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
          {!isHome && (
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium hover:text-brand-gold"
            >
              Home
            </Link>
          )}
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium hover:text-brand-gold"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium hover:text-brand-gold"
              >
                {link.name}
              </Link>
            )
          ))}
          <button
            onClick={() => {
              onContactClick();
              setIsMenuOpen(false);
            }}
            className="w-full bg-brand-gold text-brand-blue font-bold py-3 rounded-xl"
          >
            {t.contact}
          </button>
        </div>
      )}
    </nav>
  );
}
