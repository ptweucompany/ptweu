// Content resolver: overlays Supabase-managed content on top of the hardcoded
// defaults. Safe to call from Server Components at build time and from client
// components at runtime. Every path falls back to defaults on any failure, so a
// missing / paused / unreachable Supabase never breaks the build or the page.

import { supabase, supabaseConfigured } from '../supabase/client';
import type { ProductData } from '../../data/products';
import {
  DEFAULT_CONTENT_BLOCKS,
  DEFAULT_CONTENT_MAP,
  DEFAULT_PRODUCTS,
  DEFAULT_SITE_SETTINGS,
  blocksToMap,
} from './defaults';
import type {
  ContentMap,
  Lang,
  ResolvedSiteContent,
  SiteSettings,
} from './types';

const CACHE_TTL_MS = 60_000;

type CacheEntry<T> = { at: number; value: T };
const _cache = new Map<string, CacheEntry<unknown>>();

async function memo<T>(key: string, fn: () => Promise<T>): Promise<T> {
  const hit = _cache.get(key) as CacheEntry<T> | undefined;
  if (hit && Date.now() - hit.at < CACHE_TTL_MS) return hit.value;
  const value = await fn();
  _cache.set(key, { at: Date.now(), value });
  return value;
}

/** Force the next resolver call to re-fetch (used by the admin after saving). */
export function invalidateContentCache() {
  _cache.clear();
}

// ─────────────────────────────────────────────────────────────────────────────
// Site settings
// ─────────────────────────────────────────────────────────────────────────────

function mergeSiteSettings(row: Record<string, unknown> | null): SiteSettings {
  if (!row) return DEFAULT_SITE_SETTINGS;
  const d = DEFAULT_SITE_SETTINGS;
  const str = (k: string, fallback: string) =>
    typeof row[k] === 'string' && (row[k] as string).length ? (row[k] as string) : fallback;
  return {
    legal_name: str('legal_name', d.legal_name),
    short_name: str('short_name', d.short_name),
    tagline_id: str('tagline_id', d.tagline_id),
    tagline_en: str('tagline_en', d.tagline_en),
    founded: str('founded', d.founded),
    employees_approx:
      typeof row.employees_approx === 'number' ? (row.employees_approx as number) : d.employees_approx,
    email_primary: str('email_primary', d.email_primary),
    email_secondary: str('email_secondary', d.email_secondary),
    phone: str('phone', d.phone),
    whatsapp: str('whatsapp', d.whatsapp),
    whatsapp_url: str('whatsapp_url', d.whatsapp_url),
    instagram_url: str('instagram_url', d.instagram_url),
    facebook_url: str('facebook_url', d.facebook_url),
    linkedin_url: str('linkedin_url', d.linkedin_url),
    offices: Array.isArray(row.offices) && (row.offices as unknown[]).length
      ? (row.offices as SiteSettings['offices'])
      : d.offices,
    legal:
      row.legal && typeof row.legal === 'object'
        ? { ...d.legal, ...(row.legal as object) }
        : d.legal,
  };
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!supabaseConfigured) return DEFAULT_SITE_SETTINGS;
  return memo('site_settings', async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .eq('id', 1)
        .maybeSingle();
      if (error || !data) return DEFAULT_SITE_SETTINGS;
      return mergeSiteSettings(data as Record<string, unknown>);
    } catch {
      return DEFAULT_SITE_SETTINGS;
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Content blocks
// ─────────────────────────────────────────────────────────────────────────────

export async function getContentMap(): Promise<ContentMap> {
  if (!supabaseConfigured) return DEFAULT_CONTENT_MAP;
  return memo('content_blocks', async () => {
    try {
      const { data, error } = await supabase
        .from('content_blocks')
        .select('key,value_id,value_en');
      if (error || !data || !data.length) return DEFAULT_CONTENT_MAP;
      // Start from defaults so any block not yet in the DB still resolves.
      return { ...DEFAULT_CONTENT_MAP, ...blocksToMap(data) };
    } catch {
      return DEFAULT_CONTENT_MAP;
    }
  });
}

/** Pick one block value for a language, falling back to the other language then ''. */
export function pick(map: ContentMap, key: string, lang: Lang): string {
  const b = map[key] ?? DEFAULT_CONTENT_MAP[key];
  if (!b) return '';
  const primary = lang === 'en' ? b.en : b.id;
  return primary || b.id || b.en || '';
}

// ─────────────────────────────────────────────────────────────────────────────
// Products (public fields only)
// ─────────────────────────────────────────────────────────────────────────────

function rowToProduct(row: Record<string, unknown>, fallback?: ProductData): ProductData {
  const base = fallback ?? ({} as ProductData);
  const arr = <T,>(k: string, f: T[]): T[] => (Array.isArray(row[k]) ? (row[k] as T[]) : f);
  const s = (k: string, f: string): string =>
    typeof row[k] === 'string' && (row[k] as string).length ? (row[k] as string) : f;
  return {
    id: s('id', base.id ?? ''),
    slug_id: s('slug_id', base.slug_id ?? ''),
    slug_en: s('slug_en', base.slug_en ?? ''),
    name_id: s('name_id', base.name_id ?? ''),
    name_en: s('name_en', base.name_en ?? ''),
    image: s('image', base.image ?? ''),
    hero_subtitle_id: s('hero_subtitle_id', base.hero_subtitle_id ?? ''),
    hero_subtitle_en: s('hero_subtitle_en', base.hero_subtitle_en ?? ''),
    description_id: s('description_id', base.description_id ?? ''),
    description_en: s('description_en', base.description_en ?? ''),
    specs: arr('specs', base.specs ?? []),
    size_variants: arr('size_variants', base.size_variants ?? []),
    key_features_id: arr('key_features_id', base.key_features_id ?? []),
    key_features_en: arr('key_features_en', base.key_features_en ?? []),
    applications: arr('applications', base.applications ?? []),
    certs: arr('certs', base.certs ?? []),
    faq_id: arr('faq_id', base.faq_id ?? []),
    moq: s('moq', base.moq ?? ''),
    packaging: arr('packaging', base.packaging ?? []),
    lead_time: s('lead_time', base.lead_time ?? ''),
    internal_links: arr('internal_links', base.internal_links ?? []),
  };
}

export async function getPublicProducts(): Promise<ProductData[]> {
  if (!supabaseConfigured) return DEFAULT_PRODUCTS;
  return memo('products', async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('sort_order', { ascending: true });
      if (error || !data || !data.length) return DEFAULT_PRODUCTS;

      const defaultsById = new Map(DEFAULT_PRODUCTS.map((p) => [p.id, p]));
      const rows = (data as Record<string, unknown>[]).filter(
        (r) => r.is_published !== false,
      );
      const resolved = rows.map((r) => rowToProduct(r, defaultsById.get(String(r.id))));

      // Keep any default product the DB doesn't have a row for yet.
      const seen = new Set(resolved.map((p) => p.id));
      for (const p of DEFAULT_PRODUCTS) if (!seen.has(p.id)) resolved.push(p);
      return resolved;
    } catch {
      return DEFAULT_PRODUCTS;
    }
  });
}

/** Resolve a single product by either language's slug, defaulting to hardcoded. */
export async function getProductBySlug(slug: string): Promise<ProductData | undefined> {
  const all = await getPublicProducts();
  return all.find((p) => p.slug_id === slug || p.slug_en === slug || p.id === slug);
}

// ─────────────────────────────────────────────────────────────────────────────
// Bundled resolve for the root layout
// ─────────────────────────────────────────────────────────────────────────────

export async function getResolvedSiteContent(): Promise<ResolvedSiteContent> {
  const [settings, blocks] = await Promise.all([getSiteSettings(), getContentMap()]);
  return { settings, blocks };
}

export { DEFAULT_CONTENT_BLOCKS, DEFAULT_SITE_SETTINGS };
