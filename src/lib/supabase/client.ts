// Single browser/runtime Supabase client for the PT WEU CMS.
//
// Used in three places:
//   1. Build time (Server Components during `next build`) — anonymous reads of
//      the public content tables via RLS "public read" policies.
//   2. Public site runtime — same anonymous reads (ContentSync overlay).
//   3. Admin dashboard — authenticated reads/writes after signInWithPassword.
//
// Importing this module never throws: if the env vars are missing the client is
// still constructed with placeholders and `supabaseConfigured` is false, so the
// content resolver can fall back to hardcoded defaults instead of crashing.

import { createClient } from '@supabase/supabase-js';
import type { Database } from './db-types';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

export const supabaseConfigured = Boolean(url && anonKey);

// NOTE: we deliberately do NOT pass a custom `fetch` with `cache: 'no-store'` here.
// Under `output: 'export'` that makes Next treat the route as dynamic and throw
// during the static export (the resolver then silently falls back to defaults).
// Build-time freshness is guaranteed instead by the `build` script wiping
// `.next` before every build; runtime freshness comes from the LanguageContext
// overlay re-fetching on mount.
export const supabase = createClient<Database>(
  url || 'https://placeholder.supabase.co',
  anonKey || 'placeholder-anon-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      storageKey: 'ptweu-admin-auth',
    },
  },
);
