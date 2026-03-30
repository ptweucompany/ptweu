'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import AdvancedBlog from '../../src/components/AdvancedBlog';

export default function BlogPage() {
  const { t } = useLanguage();
  return <AdvancedBlog t={t.advancedBlog} />;
}
