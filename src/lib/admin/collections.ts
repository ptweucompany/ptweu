// Admin-side editing of structured data collections (data_collections table).

import { supabase } from '../supabase/client';
import { industriesFull } from '../../data/industryFull';
import { locations, exportDestinations } from '../../data/locations';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CollectionArray = any[];

export const COLLECTION_META: { key: string; label: string }[] = [
  { key: 'industries', label: 'Halaman Industri' },
  { key: 'locations', label: 'Halaman Lokasi (Domestik)' },
  { key: 'export_destinations', label: 'Halaman Lokasi (Ekspor)' },
];

const DEFAULTS: Record<string, CollectionArray> = {
  industries: industriesFull as unknown as CollectionArray,
  locations: locations as unknown as CollectionArray,
  export_destinations: exportDestinations as unknown as CollectionArray,
};

export function collectionDefault(key: string): CollectionArray {
  return DEFAULTS[key] ?? [];
}

export async function loadCollection(key: string): Promise<CollectionArray | null> {
  const { data } = await supabase
    .from('data_collections')
    .select('data')
    .eq('key', key)
    .maybeSingle();
  return data && Array.isArray(data.data) ? (data.data as CollectionArray) : null;
}

export async function saveCollection(key: string, data: CollectionArray) {
  return supabase
    .from('data_collections')
    .upsert({ key, data: data as never }, { onConflict: 'key' });
}

/** Seed any missing collection from the hardcoded website data. Idempotent. */
export async function importMissingCollections(): Promise<string[]> {
  const seeded: string[] = [];
  for (const { key } of COLLECTION_META) {
    const existing = await loadCollection(key);
    if (existing && existing.length) continue;
    const { error } = await saveCollection(key, collectionDefault(key));
    if (error) throw error;
    seeded.push(key);
  }
  return seeded;
}
