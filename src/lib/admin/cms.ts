// Authenticated CMS operations for the admin dashboard.
// Every function here assumes a signed-in Supabase session (RLS enforces it).

import { supabase } from '../supabase/client';
import type { Database } from '../supabase/db-types';
import {
  DEFAULT_CONTENT_BLOCKS,
  DEFAULT_PRODUCTS,
  DEFAULT_SITE_SETTINGS,
} from '../content/defaults';
import type { ProductPricing, SiteSettings } from '../content/types';

type SiteRow = Database['public']['Tables']['site_settings']['Row'];
type ProductRow = Database['public']['Tables']['products']['Row'];
type PricingRow = Database['public']['Tables']['product_pricing']['Row'];
type BlockRow = Database['public']['Tables']['content_blocks']['Row'];

// ── Auth ────────────────────────────────────────────────────────────────────

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

// ── Site settings ───────────────────────────────────────────────────────────

export async function loadSiteSettings(): Promise<SiteRow | null> {
  const { data } = await supabase.from('site_settings').select('*').eq('id', 1).maybeSingle();
  return data ?? null;
}

export async function saveSiteSettings(
  patch: Database['public']['Tables']['site_settings']['Update'],
) {
  return supabase.from('site_settings').upsert({ id: 1, ...patch }, { onConflict: 'id' });
}

// ── Products (public) ───────────────────────────────────────────────────────

export async function loadProducts(): Promise<ProductRow[]> {
  const { data } = await supabase.from('products').select('*').order('sort_order');
  return data ?? [];
}

export async function saveProduct(
  id: string,
  patch: Database['public']['Tables']['products']['Update'],
) {
  return supabase.from('products').upsert({ id, ...patch }, { onConflict: 'id' });
}

export async function setProductPublished(id: string, is_published: boolean) {
  return supabase.from('products').update({ is_published }).eq('id', id);
}

export async function setProductOrder(ids: string[]) {
  const updates = ids.map((id, i) => supabase.from('products').update({ sort_order: i }).eq('id', id));
  return Promise.all(updates);
}

// ── Product pricing (internal only) ─────────────────────────────────────────

export async function loadPricing(): Promise<PricingRow[]> {
  const { data } = await supabase.from('product_pricing').select('*');
  return data ?? [];
}

export async function savePricing(productId: string, patch: Partial<ProductPricing>) {
  const { data: user } = await supabase.auth.getUser();
  return supabase.from('product_pricing').upsert(
    {
      product_id: productId,
      price_min: patch.price_min ?? null,
      price_max: patch.price_max ?? null,
      currency: patch.currency ?? 'IDR',
      unit: patch.unit ?? 'MT',
      note: patch.note ?? '',
      updated_by: user.user?.id ?? null,
    },
    { onConflict: 'product_id' },
  );
}

// ── Content blocks ─────────────────────────────────────────────────────────

export async function loadContentBlocks(): Promise<BlockRow[]> {
  const { data } = await supabase.from('content_blocks').select('*').order('sort_order');
  return data ?? [];
}

export async function saveContentBlocks(
  rows: { key: string; value_id: string; value_en: string }[],
) {
  // Merge onto the seed metadata (group/label/type/sort_order) so upsert is complete.
  const meta = new Map(DEFAULT_CONTENT_BLOCKS.map((b) => [b.key, b]));
  const payload = rows.map((r) => {
    const m = meta.get(r.key);
    return {
      key: r.key,
      value_id: r.value_id,
      value_en: r.value_en,
      group: m?.group ?? 'misc',
      label: m?.label ?? r.key,
      type: m?.type ?? 'text',
      sort_order: m?.sort_order ?? 0,
    };
  });
  return supabase.from('content_blocks').upsert(payload, { onConflict: 'key' });
}

// ── Import defaults (first-run seed) ───────────────────────────────────────

export async function importDefaults() {
  // site_settings
  const s: SiteSettings = DEFAULT_SITE_SETTINGS;
  const site = await supabase.from('site_settings').upsert(
    {
      id: 1,
      legal_name: s.legal_name,
      short_name: s.short_name,
      tagline_id: s.tagline_id,
      tagline_en: s.tagline_en,
      founded: s.founded,
      employees_approx: s.employees_approx,
      email_primary: s.email_primary,
      email_secondary: s.email_secondary,
      phone: s.phone,
      whatsapp: s.whatsapp,
      whatsapp_url: s.whatsapp_url,
      instagram_url: s.instagram_url,
      facebook_url: s.facebook_url,
      linkedin_url: s.linkedin_url,
      offices: s.offices as unknown as Database['public']['Tables']['site_settings']['Insert']['offices'],
      legal: s.legal as unknown as Database['public']['Tables']['site_settings']['Insert']['legal'],
    },
    { onConflict: 'id' },
  );
  if (site.error) throw site.error;

  // products (public fields only)
  const productRows = DEFAULT_PRODUCTS.map((p, i) => ({
    id: p.id,
    slug_id: p.slug_id,
    slug_en: p.slug_en,
    name_id: p.name_id,
    name_en: p.name_en,
    image: p.image,
    hero_subtitle_id: p.hero_subtitle_id,
    hero_subtitle_en: p.hero_subtitle_en,
    description_id: p.description_id,
    description_en: p.description_en,
    specs: p.specs as unknown as Database['public']['Tables']['products']['Insert']['specs'],
    size_variants: p.size_variants as unknown as Database['public']['Tables']['products']['Insert']['size_variants'],
    key_features_id: p.key_features_id as unknown as Database['public']['Tables']['products']['Insert']['key_features_id'],
    key_features_en: p.key_features_en as unknown as Database['public']['Tables']['products']['Insert']['key_features_en'],
    applications: p.applications as unknown as Database['public']['Tables']['products']['Insert']['applications'],
    certs: p.certs as unknown as Database['public']['Tables']['products']['Insert']['certs'],
    faq_id: p.faq_id as unknown as Database['public']['Tables']['products']['Insert']['faq_id'],
    moq: p.moq,
    packaging: p.packaging as unknown as Database['public']['Tables']['products']['Insert']['packaging'],
    lead_time: p.lead_time,
    internal_links: p.internal_links as unknown as Database['public']['Tables']['products']['Insert']['internal_links'],
    sort_order: i,
    is_published: true,
  }));
  const prod = await supabase.from('products').upsert(productRows, { onConflict: 'id' });
  if (prod.error) throw prod.error;

  // empty pricing rows so the admin has something to edit
  const pricingRows = DEFAULT_PRODUCTS.map((p) => ({ product_id: p.id }));
  const pricing = await supabase
    .from('product_pricing')
    .upsert(pricingRows, { onConflict: 'product_id', ignoreDuplicates: true });
  if (pricing.error) throw pricing.error;

  // content blocks
  const blockRows = DEFAULT_CONTENT_BLOCKS.map((b) => ({
    key: b.key,
    group: b.group,
    label: b.label,
    type: b.type,
    value_id: b.value_id,
    value_en: b.value_en,
    sort_order: b.sort_order,
  }));
  const blocks = await supabase.from('content_blocks').upsert(blockRows, { onConflict: 'key' });
  if (blocks.error) throw blocks.error;

  return { products: productRows.length, blocks: blockRows.length };
}

// ── Publish (snapshot + trigger rebuild) ──────────────────────────────────

export async function loadLastPublish() {
  const { data } = await supabase
    .from('content_revisions')
    .select('id,created_at,note')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  return data ?? null;
}

export async function publish(note = 'Publish from dashboard') {
  const [{ data: user }, site, products, pricing, blocks] = await Promise.all([
    supabase.auth.getUser(),
    supabase.from('site_settings').select('*').eq('id', 1).maybeSingle(),
    supabase.from('products').select('*'),
    supabase.from('product_pricing').select('*'),
    supabase.from('content_blocks').select('*'),
  ]);

  const snapshot = {
    site_settings: site.data ?? null,
    products: products.data ?? [],
    product_pricing: pricing.data ?? [],
    content_blocks: blocks.data ?? [],
  };

  const rev = await supabase.from('content_revisions').insert({
    created_by: user.user?.id ?? null,
    note,
    snapshot: snapshot as unknown as Database['public']['Tables']['content_revisions']['Insert']['snapshot'],
  });
  if (rev.error) throw rev.error;

  // Trigger the Cloudflare rebuild via the Edge Function (keeps the hook secret).
  const fn = await supabase.functions.invoke('publish', { body: { note } });
  return fn;
}

// ── Auto-publish after save ──────────────────────────────────────────────────
// Called automatically by every "Simpan" so the owner never has to think about
// a separate publish step. A short cooldown collapses a burst of saves into one
// rebuild (the build always reads the latest DB state anyway).

let _lastAutoPublish = 0;
const AUTO_PUBLISH_COOLDOWN_MS = 40_000;

export type AutoPublishResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

export async function autoPublish(): Promise<AutoPublishResult> {
  const now = Date.now();
  if (now - _lastAutoPublish < AUTO_PUBLISH_COOLDOWN_MS) {
    return {
      ok: true,
      message: 'Tersimpan. Website sedang diperbarui — perubahan ini ikut terbawa.',
    };
  }
  _lastAutoPublish = now;
  try {
    const res = await publish('Auto-publish setelah simpan');
    const data = (res?.data ?? {}) as { deployed?: boolean; error?: string };
    if (res?.error) {
      _lastAutoPublish = 0;
      return { ok: false, message: 'Tersimpan, tapi gagal memicu update website: ' + res.error.message };
    }
    if (data.deployed === false) {
      return {
        ok: false,
        message:
          'Tersimpan. Website belum bisa update otomatis — link Cloudflare Deploy Hook belum diatur.',
      };
    }
    return { ok: true, message: 'Tersimpan. Website akan diperbarui dalam ~1–2 menit.' };
  } catch (e) {
    _lastAutoPublish = 0;
    return {
      ok: false,
      message: 'Tersimpan, tapi update website gagal dipicu: ' + (e instanceof Error ? e.message : String(e)),
    };
  }
}
