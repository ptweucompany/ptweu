'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import AdvancedAbout from '../../src/components/AdvancedAbout';

export default function TentangKamiPage() {
  const { t } = useLanguage();
  return <AdvancedAbout t={t.advancedAbout} />;
}
