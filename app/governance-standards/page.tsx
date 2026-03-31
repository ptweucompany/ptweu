'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import AdvancedGovernance from '../../src/components/AdvancedGovernance';

export default function EnglishGovernancePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <AdvancedGovernance data={t.advancedGovernance} />
    </main>
  );
}
