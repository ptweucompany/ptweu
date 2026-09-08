// Admin-side editing of whole-page content trees (page_content table).

import { supabase } from '../supabase/client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PageTree = Record<string, any>;

export interface PageContentRow {
  key: string;
  label: string;
  data_id: PageTree;
  data_en: PageTree;
  sort_order: number;
}

export async function loadPageContent(): Promise<PageContentRow[]> {
  const { data } = await supabase
    .from('page_content')
    .select('key,label,data_id,data_en,sort_order')
    .order('sort_order');
  return (data as PageContentRow[]) ?? [];
}

export async function savePageContent(key: string, lang: 'id' | 'en', data: PageTree) {
  const patch = lang === 'en' ? { data_en: data } : { data_id: data };
  return supabase.from('page_content').update(patch).eq('key', key);
}
