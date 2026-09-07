// Edge Function: publish
//
// Called by the admin dashboard (supabase.functions.invoke('publish')) to trigger
// a Cloudflare Pages rebuild. Keeps the deploy-hook URL server-side as a secret.
//
// Required secret:  CF_DEPLOY_HOOK_URL  (Cloudflare Pages → Settings → Deploy hooks)
// Set with:  supabase secrets set CF_DEPLOY_HOOK_URL="https://api.cloudflare.com/client/v4/pages/webhooks/deploy/..."

import { createClient } from 'jsr:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });

  try {
    const authHeader = req.headers.get('Authorization') ?? '';
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } },
    );

    // Only a signed-in user (the admin) may trigger a deploy.
    const { data: userData, error: userErr } = await supabase.auth.getUser();
    if (userErr || !userData.user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    const hook = Deno.env.get('CF_DEPLOY_HOOK_URL');
    if (!hook) {
      return new Response(
        JSON.stringify({
          error: 'CF_DEPLOY_HOOK_URL belum diset. Snapshot tetap tersimpan.',
          deployed: false,
        }),
        { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } },
      );
    }

    const cfRes = await fetch(hook, { method: 'POST' });
    const ok = cfRes.ok;
    const body = await cfRes.text();

    return new Response(
      JSON.stringify({ deployed: ok, status: cfRes.status, cf: body.slice(0, 500) }),
      {
        status: ok ? 200 : 502,
        headers: { ...cors, 'Content-Type': 'application/json' },
      },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e), deployed: false }), {
      status: 500,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }
});
