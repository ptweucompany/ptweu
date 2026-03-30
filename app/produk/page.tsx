'use client';

import { useLanguage } from '../../src/context/LanguageContext';
import { useEffect } from 'react';
import ProductsPage from '../products/page';

export default function IndonesianProductsPage() {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang('id');
  }, [setLang]);

  return <ProductsPage />;
}
