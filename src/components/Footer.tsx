import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin,Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Translation } from '../types';

interface FooterProps {
  t: Translation['contact'];
  footerT: Translation['footer'];
  profileT: Translation['profile'];
}

export default function Footer({ t, footerT, profileT }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <Link href="/" className="flex items-center space-x-2 group" aria-label="PT Wira Energi Utama Home">
                <div className="relative w-14 h-14 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Image 
                    src="/2.svg" 
                    alt="PT Wira Energi Utama Logo" 
                    fill 
                    className="object-contain"
                    sizes="56px"
                  />
                </div>
                <span className="font-bold text-2xl tracking-tight text-white group-hover:text-brand-gold transition-colors">PT Wira Energi Utama</span>
              </Link>
            </div>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Industrial Batu Kapur/Gamping (General Trade, Mining & Supplier). 
              Dedicated to sustainable growth and excellence in the mining industry.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/pt_weu?igsh=cjZvMTA1NTFremNq" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Instagram"
                className="w-10 h-10 bg-white/5 hover:bg-brand-gold hover:text-brand-blue transition-all rounded-full flex items-center justify-center cursor-pointer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/r/1CDn2C1xCV/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Facebook"
                className="w-10 h-10 bg-white/5 hover:bg-brand-gold hover:text-brand-blue transition-all rounded-full flex items-center justify-center cursor-pointer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pt-wira-energi-utama-company-b1941b401/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on LinkedIn"
                className="w-10 h-10 bg-white/5 hover:bg-brand-gold hover:text-brand-blue transition-all rounded-full flex items-center justify-center cursor-pointer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="text-brand-gold flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm leading-relaxed">Taman Sari Cluster Lihaga, Blok H3-3 Kelurahan Paniki Bawah, Manado - Sulawesi Utara 95256 Indonesia</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone className="text-brand-gold flex-shrink-0" size={20} />
                  <span className="text-sm">{t.phone}</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 text-break">
                  <Mail className="text-brand-gold flex-shrink-0" size={20} />
                  <div className="flex flex-col text-sm">
                    <span>wiraenergiutama@yahoo.com</span>
                    <span>contact@wiraenergiutama.com</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerT.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Blog & News
                  </Link>
                </li>
                <li>
                  <Link href="/site-map" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                    <Globe size={14} className="mr-2" />
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link href="/company-profile" className="text-brand-gold hover:text-brand-gold-light transition-colors text-sm font-bold">
                    {profileT.link}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} PT Wira Energi Utama. {footerT.rights}</p>
        </div>
      </div>
    </footer>
  );
}
