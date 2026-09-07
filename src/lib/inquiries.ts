// Public form submission -> Supabase `inquiries` table (RLS: anon can INSERT only).
// Used by the public contact / inquiry forms.

import { supabase, supabaseConfigured } from './supabase/client';

export interface InquiryPayload {
  form?: 'inquiry' | 'contact';
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  product?: string;
  industry?: string;
  volume?: string;
  packaging?: string;
  delivery?: string;
  message?: string;
  source?: string;
}

export async function submitInquiry(
  payload: InquiryPayload,
): Promise<{ ok: boolean; error?: string }> {
  if (!supabaseConfigured) return { ok: false, error: 'not-configured' };
  const row = {
    form: payload.form ?? 'inquiry',
    name: payload.name ?? '',
    company: payload.company ?? '',
    email: payload.email ?? '',
    phone: payload.phone ?? '',
    country: payload.country ?? '',
    product: payload.product ?? '',
    industry: payload.industry ?? '',
    volume: payload.volume ?? '',
    packaging: payload.packaging ?? '',
    delivery: payload.delivery ?? '',
    message: payload.message ?? '',
    source:
      payload.source ?? (typeof window !== 'undefined' ? window.location.href : ''),
  };
  try {
    const { error } = await supabase.from('inquiries').insert(row);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}
