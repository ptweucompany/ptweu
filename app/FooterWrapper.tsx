'use client';

import { useLanguage } from '../src/context/LanguageContext';
import Footer from '../src/components/Footer';

export default function FooterWrapper() {
  const { t } = useLanguage();

  return (
    <Footer 
      t={t.contact} 
      footerT={t.footer} 
      profileT={t.profile}
    />
  );
}
