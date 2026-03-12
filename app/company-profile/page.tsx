'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import CompanyProfile from '../../src/components/pages/CompanyProfile';

export default function CompanyProfilePage() {
  const { t } = useLanguage();

  return <CompanyProfile t={t} />;
}
