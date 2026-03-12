'use client';

import { useLanguage } from '../src/context/LanguageContext';
import Navbar from '../src/components/Navbar';
import { useState } from 'react';
import ContactModal from '../src/components/ContactModal';

export default function NavbarWrapper() {
  const { lang, setLang, t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t.nav} 
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
