// Admin-side editing of the rich product detail pages (product_pages table).

import { supabase } from '../supabase/client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ProductPageData = Record<string, any>;

export interface ProductPageRow {
  id: string;
  data_id: ProductPageData;
  data_en: ProductPageData;
}

export async function loadProductPages(): Promise<ProductPageRow[]> {
  const { data } = await supabase
    .from('product_pages')
    .select('id,data_id,data_en')
    .order('id');
  return (data as ProductPageRow[]) ?? [];
}

export async function saveProductPage(
  id: string,
  lang: 'id' | 'en',
  data: ProductPageData,
) {
  const patch = lang === 'en' ? { data_en: data } : { data_id: data };
  return supabase.from('product_pages').update(patch).eq('id', id);
}
