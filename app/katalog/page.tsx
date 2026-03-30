'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import AdvancedCatalog from '../../src/components/AdvancedCatalog';

export default function KatalogPage() {
  const { t } = useLanguage();
  return <AdvancedCatalog t={t.advancedCatalog} />;
}
