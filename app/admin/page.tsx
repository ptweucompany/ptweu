'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  importDefaults,
  loadContentBlocks,
  loadLastPublish,
  loadProducts,
  loadSiteSettings,
} from '../../src/lib/admin/cms';
import { Button, Callout, Section } from '../../src/components/admin/ui';

export const dynamic = 'force-static';

export default function AdminOverviewPage() {
  const [loading, setLoading] = useState(true);
  const [productCount, setProductCount] = useState(0);
  const [blockCount, setBlockCount] = useState(0);
  const [hasSettings, setHasSettings] = useState(false);
  const [lastPublish, setLastPublish] = useState<string | null>(null);
  const [importing, setImporting] = useState(false);
  const [msg, setMsg] = useState('');

  async function refresh() {
    setLoading(true);
    const [products, blocks, settings, lp] = await Promise.all([
      loadProducts(),
      loadContentBlocks(),
      loadSiteSettings(),
      loadLastPublish(),
    ]);
    setProductCount(products.length);
    setBlockCount(blocks.length);
    setHasSettings(Boolean(settings));
    setLastPublish(lp?.created_at ?? null);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  const empty = !loading && productCount === 0 && blockCount === 0 && !hasSettings;

  async function onImport() {
    setImporting(true);
    setMsg('');
    try {
      const r = await importDefaults();
      setMsg(`Berhasil mengimpor ${r.products} produk dan ${r.blocks} blok teks dari website.`);
      await refresh();
    } catch (e) {
      setMsg('Gagal impor: ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setImporting(false);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Overview</h1>

      {empty && (
        <Section
          title="Mulai: impor konten website saat ini"
          description="Database masih kosong. Impor sekali untuk menyalin semua teks & produk yang sekarang ada di website supaya bisa diedit di sini. Aman diulang."
        >
          <Button onClick={onImport} disabled={importing} variant="gold">
            {importing ? 'Mengimpor…' : 'Impor konten website'}
          </Button>
          {msg && <Callout tone="info">{msg}</Callout>}
        </Section>
      )}

      {!empty && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Stat label="Produk" value={loading ? '…' : String(productCount)} href="/admin/products" />
          <Stat label="Blok teks" value={loading ? '…' : String(blockCount)} href="/admin/content" />
          <Stat
            label="Terbit terakhir"
            value={
              loading
                ? '…'
                : lastPublish
                  ? new Date(lastPublish).toLocaleDateString('id-ID')
                  : 'Belum pernah'
            }
          />
        </div>
      )}

      <Section title="Kelola konten">
        <ul className="divide-y divide-gray-100">
          <Row href="/admin/company" title="Data Perusahaan" desc="Telepon, email, alamat kantor, sosial media, legalitas." />
          <Row href="/admin/products" title="Produk & Harga" desc="Spesifikasi produk (publik) dan harga internal (tidak tampil di website)." />
          <Row href="/admin/content" title="Teks Halaman" desc="Teks landing page: hero, trust bar, CTA, footer, menu." />
        </ul>
      </Section>

      {!empty && (
        <Section
          title="Impor ulang dari default"
          description="Menimpa nilai di database dengan teks bawaan kode. Gunakan hanya jika ingin reset."
        >
          <Button onClick={onImport} disabled={importing} variant="ghost">
            {importing ? 'Mengimpor…' : 'Impor ulang'}
          </Button>
          {msg && <Callout tone="info">{msg}</Callout>}
        </Section>
      )}

      <Callout tone="info">
        Setiap kali kamu klik <strong>Simpan</strong>, website otomatis ikut diperbarui —
        perubahan tampil di wiraenergiutama.com dalam ~1–2 menit. Tombol{' '}
        <strong>Perbarui Website</strong> di kanan atas hanya perlu dipakai kalau ingin memaksa
        update ulang.
      </Callout>
    </div>
  );
}

function Stat({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">{label}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}

function Row({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <li>
      <Link href={href} className="flex items-center justify-between py-3 group">
        <div>
          <p className="font-medium text-gray-900 group-hover:text-brand-blue">{title}</p>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
        <span className="text-gray-300 group-hover:text-brand-blue">→</span>
      </Link>
    </li>
  );
}
