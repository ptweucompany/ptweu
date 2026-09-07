'use client';

import { useLanguage } from '../src/context/LanguageContext';
import Navbar from '../src/components/Navbar';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import ContactModal from '../src/components/ContactModal';

export default function NavbarWrapper() {
  const { lang, setLang, t, tc } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  // The admin dashboard has its own chrome.
  if (pathname?.startsWith('/admin')) return null;

  // CMS-editable nav labels, falling back to the static translations.
  const nav = {
    ...t.nav,
    products: tc('nav.products', t.nav.products),
    about: tc('nav.about', t.nav.about),
    catalog: tc('nav.catalog', t.nav.catalog),
    contact: tc('nav.contact', t.nav.contact),
  };

  return (
    <>
      <Navbar
        lang={lang}
        setLang={setLang}
        t={nav}
        homeLabel={tc('nav.home', 'Home')}
        onContactClick={() => setIsModalOpen(true)}
      />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        t={t.contact}
      />
    </>
  );
}
