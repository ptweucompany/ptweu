'use client';

import { notFound } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import ProductDetail from './ProductDetail';
import { useEffect } from 'react';
import { Language } from '../types';

interface ProductPageClientProps {
  slug: string;
  langCode: Language;
  slugMap: Record<string, string>;
}

export default function ProductPageClient({ slug, langCode, slugMap }: ProductPageClientProps) {
  const { setLang, t, lang } = useLanguage();

  // Ensure language matches the route
  useEffect(() => {
    if (lang !== langCode) {
      setLang(langCode);
    }
  }, [lang, langCode, setLang]);

  const productKey = slugMap[slug];

  // If the slug is not in the map, or the product data is missing, show 404
  if (!productKey || !t.productPages[productKey as keyof typeof t.productPages]) {
    notFound();
  }

  const productData = t.productPages[productKey as keyof typeof t.productPages];

  return <ProductDetail data={productData} contactT={t.contact} />;
}
