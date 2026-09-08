// Shared shapes for CMS-managed content, independent of the DB row types.
// The resolver returns these; components consume these.

import type { ProductData } from '../../data/products';

export interface OfficeInfo {
  type: string;
  city: string;
  address_id: string;
  phone: string | null;
  whatsapp: string | null;
  whatsapp_url: string | null;
  email: string | null;
  geo: { lat: number; lng: number } | null;
}

export interface LegalInfo {
  iup_number: string;
  iup_type: string;
  iup_valid_since: string;
  iup_area_ha: number;
  ukl_upl_decree: string;
  ukl_upl_area_ha: number;
  pkkpr_laut_no: string;
  pkkpr_laut_area_ha: number;
  npwp: string;
  kemenkumham: string;
  certifications_current: string[];
  certifications_in_progress: string[];
}

export interface SiteSettings {
  legal_name: string;
  short_name: string;
  tagline_id: string;
  tagline_en: string;
  founded: string;
  employees_approx: number;
  email_primary: string;
  email_secondary: string;
  phone: string;
  whatsapp: string;
  whatsapp_url: string;
  whatsapp_2: string;
  whatsapp_2_url: string;
  instagram_url: string;
  facebook_url: string;
  linkedin_url: string;
  offices: OfficeInfo[];
  legal: LegalInfo;
}

/** Public product = the existing hardcoded shape (never carries pricing). */
export type PublicProduct = ProductData;

export interface ProductPricing {
  product_id: string;
  price_min: number | null;
  price_max: number | null;
  currency: string;
  unit: string;
  note: string;
  updated_at?: string;
}

export type BlockType = 'text' | 'textarea';

/** One editable string, bilingual. */
export interface ContentBlock {
  key: string;
  group: string;
  label: string;
  type: BlockType;
  value_id: string;
  value_en: string;
  sort_order: number;
}

export type Lang = 'id' | 'en';

/** Resolved key -> { id, en } map for fast lookup in components. */
export type ContentMap = Record<string, { id: string; en: string }>;

/** key -> { id, en } for whole nested page-content trees (translations overlay). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PageContentMap = Record<string, { id: any; en: any }>;

/** Everything a Server Component needs to render CMS-aware chrome (layout). */
export interface ResolvedSiteContent {
  settings: SiteSettings;
  blocks: ContentMap;
  pageContent: PageContentMap;
}
