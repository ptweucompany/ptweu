// Admin-side inbox operations (RLS: authenticated only).

import { supabase } from '../supabase/client';

export type InquiryStatus = 'new' | 'contacted' | 'closed';

export interface Inquiry {
  id: string;
  created_at: string;
  updated_at: string;
  form: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  industry: string;
  volume: string;
  packaging: string;
  delivery: string;
  message: string;
  source: string;
  status: InquiryStatus;
  admin_notes: string;
}

export async function loadInquiries(status?: InquiryStatus): Promise<Inquiry[]> {
  let q = supabase.from('inquiries').select('*').order('created_at', { ascending: false });
  if (status) q = q.eq('status', status);
  const { data } = await q;
  return (data as Inquiry[]) ?? [];
}

export async function countNewInquiries(): Promise<number> {
  const { count } = await supabase
    .from('inquiries')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'new');
  return count ?? 0;
}

export async function updateInquiry(
  id: string,
  patch: Partial<Pick<Inquiry, 'status' | 'admin_notes'>>,
) {
  return supabase.from('inquiries').update(patch).eq('id', id);
}

export async function deleteInquiry(id: string) {
  return supabase.from('inquiries').delete().eq('id', id);
}
