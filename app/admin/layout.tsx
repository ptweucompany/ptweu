'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { Session } from '@supabase/supabase-js';
import { supabase, supabaseConfigured } from '../../src/lib/supabase/client';
import { loadLastPublish, publish, signOut } from '../../src/lib/admin/cms';
import { countNewInquiries } from '../../src/lib/admin/inbox';
import { Button } from '../../src/components/admin/ui';

const NAV = [
  { href: '/admin', label: 'Overview', exact: true },
  { href: '/admin/inquiries', label: 'Inbox', badge: true },
  { href: '/admin/company', label: 'Data Perusahaan' },
  { href: '/admin/products', label: 'Produk & Harga' },
  { href: '/admin/product-pages', label: 'Halaman Produk' },
  { href: '/admin/content', label: 'Teks Landing' },
  { href: '/admin/pages', label: 'Teks Halaman Lain' },
  { href: '/admin/logs', label: 'Riwayat' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === '/admin/login';

  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishMsg, setPublishMsg] = useState<string>('');
  const [lastPublish, setLastPublish] = useState<string | null>(null);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!ready || isLogin) return;
    if (!session) router.replace('/admin/login');
  }, [ready, session, isLogin, router]);

  useEffect(() => {
    if (session && !isLogin) {
      loadLastPublish().then((r) => setLastPublish(r?.created_at ?? null)).catch(() => {});
      countNewInquiries().then(setNewCount).catch(() => {});
    }
  }, [session, isLogin, pathname]);

  const onPublish = useCallback(async () => {
    if (!confirm('Perbarui website sekarang? Butuh ~1–2 menit sampai perubahan tampil.')) return;
    setPublishing(true);
    setPublishMsg('');
    try {
      const res = await publish('Perbarui manual dari dashboard');
      const data = (res?.data ?? {}) as { deployed?: boolean };
      if (res?.error) {
        setPublishMsg('Perubahan tersimpan, tapi update website gagal dipicu: ' + res.error.message);
      } else if (data.deployed === false) {
        setPublishMsg('Link Cloudflare Deploy Hook belum diatur, jadi website belum bisa update otomatis.');
      } else {
        setPublishMsg('Website sedang diperbarui. Cek wiraenergiutama.com dalam 1–2 menit.');
        setLastPublish(new Date().toISOString());
      }
    } catch (e) {
      setPublishMsg('Gagal: ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setPublishing(false);
    }
  }, []);

  const onSignOut = useCallback(async () => {
    await signOut();
    router.replace('/admin/login');
  }, [router]);

  if (isLogin) return <>{children}</>;

  if (!supabaseConfigured) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-50 p-6">
        <div className="max-w-md text-center">
          <h1 className="text-lg font-bold text-gray-900">Supabase belum dikonfigurasi</h1>
          <p className="text-sm text-gray-500 mt-2">
            Variabel <code>NEXT_PUBLIC_SUPABASE_URL</code> dan{' '}
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> tidak ditemukan saat build.
          </p>
        </div>
      </div>
    );
  }

  if (!ready || !session) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-50">
        <p className="text-sm text-gray-400">Memuat…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-30 bg-brand-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-tight">PT WEU · Admin</span>
          </div>
          <div className="flex items-center gap-2">
            {lastPublish && (
              <span className="hidden sm:inline text-[11px] text-white/60">
                Terbit terakhir: {new Date(lastPublish).toLocaleString('id-ID')}
              </span>
            )}
            <Button variant="gold" size="sm" onClick={onPublish} disabled={publishing}>
              {publishing ? 'Memproses…' : 'Perbarui Website'}
            </Button>
            <button
              onClick={onSignOut}
              className="text-xs text-white/70 hover:text-white px-2 py-1"
            >
              Keluar
            </button>
          </div>
        </div>
        {publishMsg && (
          <div className="bg-brand-gold/15 text-white text-xs px-4 sm:px-6 py-2 max-w-6xl mx-auto">
            {publishMsg}
          </div>
        )}
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        <nav className="md:sticky md:top-20 md:self-start">
          <ul className="flex md:flex-col gap-1 overflow-x-auto">
            {NAV.map((n) => {
              const active = n.exact ? pathname === n.href : pathname.startsWith(n.href);
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap ${
                      active
                        ? 'bg-brand-blue text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {n.label}
                    {n.badge && newCount > 0 && (
                      <span
                        className={`inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[11px] font-bold ${
                          active ? 'bg-white text-brand-blue' : 'bg-amber-500 text-white'
                        }`}
                      >
                        {newCount}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
