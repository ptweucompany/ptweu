'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, Translation } from '../types';
import { translations } from '../translations';
import { supabase, supabaseConfigured } from '../lib/supabase/client';
import {
  DEFAULT_CONTENT_MAP,
  DEFAULT_SITE_SETTINGS,
  blocksToMap,
} from '../lib/content/defaults';
import type { ContentMap, PageContentMap, SiteSettings } from '../lib/content/types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
  /** CMS-managed company/contact/legal data (never null; falls back to defaults). */
  settings: SiteSettings;
  /** CMS-managed editable text blocks, key -> { id, en }. */
  blocks: ContentMap;
  /** Resolve a content block for the current language, with fallback. */
  tc: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Which translations.<key> sub-trees the CMS is allowed to override.
const PAGE_KEYS = [
  'advancedAbout',
  'advancedCatalog',
  'advancedGovernance',
  'advancedSustainability',
  'productExpansion',
  'products',
  'aboutDetails',
];

export function LanguageProvider({
  children,
  initialSettings,
  initialBlocks,
  initialPageContent,
}: {
  children: React.ReactNode;
  initialSettings?: SiteSettings;
  initialBlocks?: ContentMap;
  initialPageContent?: PageContentMap;
}) {
  const [lang, setLang] = useState<Language>('id');
  const [settings, setSettings] = useState<SiteSettings>(initialSettings ?? DEFAULT_SITE_SETTINGS);
  const [blocks, setBlocks] = useState<ContentMap>(initialBlocks ?? DEFAULT_CONTENT_MAP);
  const [pageContent, setPageContent] = useState<PageContentMap>(initialPageContent ?? {});

  // Runtime overlay: pick up dashboard edits without waiting for a rebuild.
  useEffect(() => {
    if (!supabaseConfigured) return;
    let cancelled = false;
    (async () => {
      try {
        const [s, b, pc] = await Promise.all([
          supabase.from('site_settings').select('*').eq('id', 1).maybeSingle(),
          supabase.from('content_blocks').select('key,value_id,value_en'),
          supabase.from('page_content').select('key,data_id,data_en'),
        ]);
        if (cancelled) return;
        if (s.data) {
          const row = s.data as Record<string, unknown>;
          setSettings((prev) => ({
            ...prev,
            ...(row as unknown as Partial<SiteSettings>),
            offices: Array.isArray(row.offices)
              ? (row.offices as unknown as SiteSettings['offices'])
              : prev.offices,
            legal:
              row.legal && typeof row.legal === 'object'
                ? { ...prev.legal, ...(row.legal as unknown as SiteSettings['legal']) }
                : prev.legal,
          }));
        }
        if (b.data && b.data.length) {
          setBlocks({ ...DEFAULT_CONTENT_MAP, ...blocksToMap(b.data) });
        }
        if (pc.data && pc.data.length) {
          const map: PageContentMap = {};
          for (const r of pc.data) map[r.key] = { id: r.data_id, en: r.data_en };
          setPageContent(map);
        }
      } catch {
        /* keep defaults / SSR values */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const t = useMemo(() => {
    const base = (lang === 'en'
      ? { ...translations.id, ...translations.en }
      : { ...translations.id }) as Record<string, unknown>;
    for (const key of PAGE_KEYS) {
      const entry = pageContent[key];
      if (!entry) continue;
      const val = lang === 'en' ? entry.en ?? entry.id : entry.id;
      if (val && typeof val === 'object') base[key] = val;
    }
    return base as unknown as Translation;
  }, [lang, pageContent]);

  const tc = (key: string, fallback = '') => {
    const entry = blocks[key] ?? DEFAULT_CONTENT_MAP[key];
    if (!entry) return fallback;
    const primary = lang === 'en' ? entry.en : entry.id;
    return primary || entry.id || entry.en || fallback;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, settings, blocks, tc }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
