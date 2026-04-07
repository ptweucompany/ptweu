'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import AdvancedSustainability from '../../src/components/AdvancedSustainability';

export default function BerkelanjutanPage() {
  const { t } = useLanguage();
  return <AdvancedSustainability data={t.advancedSustainability} />;
}
