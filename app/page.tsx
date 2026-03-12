'use client';

import { useLanguage } from '../src/context/LanguageContext';
import Home from '../src/components/pages/Home';
import { useState } from 'react';
import ContactModal from '../src/components/ContactModal';

export default function HomePage() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Home t={t} onContactClick={() => setIsModalOpen(true)} />
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        t={t.contact} 
      />
    </>
  );
}
