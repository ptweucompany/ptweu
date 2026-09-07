'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  loadProductPages,
  saveProductPage,
  type ProductPageData,
  type ProductPageRow,
} from '../../../src/lib/admin/product-pages';
import { autoPublish } from '../../../src/lib/admin/cms';
import {
  Callout,
  Field,
  SaveBar,
  Section,
  StringList,
} from '../../../src/components/admin/ui';

export const dynamic = 'force-static';

// deep get/set on a plain object via dot path
function dget(obj: ProductPageData, path: string): unknown {
  return path.split('.').reduce<unknown>((o, k) => (o == null ? o : (o as Record<string, unknown>)[k]), obj);
}
function dset(obj: ProductPageData, path: string, value: unknown): ProductPageData {
  const keys = path.split('.');
  const next = structuredClone(obj);
  let cur: Record<string, unknown> = next;
  for (let i = 0; i < keys.length - 1; i++) {
    cur[keys[i]] = cur[keys[i]] ?? {};
    cur = cur[keys[i]] as Record<string, unknown>;
  }
  cur[keys[keys.length - 1]] = value;
  return next;
}

export default function AdminProductPagesPage() {
  const [rows, setRows] = useState<ProductPageRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [sel, setSel] = useState('');
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [form, setForm] = useState<ProductPageData | null>(null);
  const [initial, setInitial] = useState('');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');

  async function refresh() {
    setLoading(true);
    const data = await loadProductPages();
    setRows(data);
    setSel((s) => s || data[0]?.id || '');
    setLoading(false);
  }
  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    const r = rows.find((x) => x.id === sel);
    if (!r) return;
    const d = lang === 'en' ? r.data_en : r.data_id;
    setForm(structuredClone(d));
    setInitial(JSON.stringify(d));
  }, [sel, lang, rows]);

  const dirty = useMemo(
    () => form !== null && JSON.stringify(form) !== initial,
    [form, initial],
  );

  if (loading) return <p className="text-sm text-gray-400">Memuat…</p>;

  const set = (path: string, value: unknown) => setForm((f) => (f ? dset(f, path, value) : f));
  const get = (path: string): string => {
    const v = dget(form ?? {}, path);
    return typeof v === 'string' ? v : '';
  };
  const getArr = <T,>(path: string): T[] => {
    const v = dget(form ?? {}, path);
    return Array.isArray(v) ? (v as T[]) : [];
  };

  async function onSave() {
    if (!form) return;
    setSaving(true);
    setStatus('');
    const { error } = await saveProductPage(sel, lang, form);
    if (error) {
      setSaving(false);
      setStatus('Gagal menyimpan: ' + error.message);
      return;
    }
    setInitial(JSON.stringify(form));
    setStatus('Tersimpan. Memicu update website…');
    const pub = await autoPublish(`Halaman detail produk "${sel}" (${lang.toUpperCase()}) diperbarui`);
    setSaving(false);
    setStatus(pub.message);
    await refresh();
  }

  const objRepeater = (path: string, cols: [string, string][]) => {
    const list = getArr<Record<string, string>>(path);
    return (
      <div className="space-y-3">
        {list.map((row, i) => (
          <div key={i} className="rounded-lg border border-gray-200 p-3">
            <div className="flex justify-end">
              <button
                type="button"
                className="text-xs text-red-600 hover:underline"
                onClick={() => set(path, list.filter((_, j) => j !== i))}
              >
                Hapus
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cols.map(([k, label]) => (
                <label key={k} className="block">
                  <span className="block text-xs font-medium text-gray-600 mb-1">{label}</span>
                  <input
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
                    value={row[k] ?? ''}
                    onChange={(e) =>
                      set(path, list.map((r, j) => (j === i ? { ...r, [k]: e.target.value } : r)))
                    }
                  />
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          type="button"
          className="text-sm font-medium text-brand-blue hover:underline"
          onClick={() => set(path, [...list, Object.fromEntries(cols.map(([k]) => [k, '']))])}
        >
          + Tambah baris
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Halaman Detail Produk</h1>
        <div className="flex rounded-lg border border-gray-300 overflow-hidden text-sm">
          {(['id', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 font-semibold ${
                lang === l ? 'bg-brand-blue text-white' : 'bg-white text-gray-600'
              }`}
            >
              {l === 'id' ? 'Indonesia' : 'English'}
            </button>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Teks lengkap di halaman <code>/produk/&lt;nama&gt;</code>. Pilih produk dan bahasa,
        lalu edit.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
        <aside className="space-y-1">
          {rows.map((r) => (
            <button
              key={r.id}
              onClick={() => setSel(r.id)}
              className={`block w-full text-left rounded-lg border px-3 py-2 text-sm font-medium ${
                sel === r.id ? 'border-brand-blue bg-blue-50 text-gray-900' : 'border-gray-200 text-gray-600'
              }`}
            >
              {(r.data_id?.hero?.title as string) || r.id}
            </button>
          ))}
        </aside>

        <div className="min-w-0">
          {!form ? (
            <p className="text-sm text-gray-400">Pilih produk.</p>
          ) : (
            <>
              <Section title="Hero (bagian atas halaman)">
                <Field label="Judul" value={get('hero.title')} onChange={(v) => set('hero.title', v)} />
                <Field label="Subjudul" value={get('hero.subtitle')} onChange={(v) => set('hero.subtitle', v)} />
                <Field label="Deskripsi hero" multiline value={get('hero.description')} onChange={(v) => set('hero.description', v)} />
                <Field label="Gambar (path)" value={get('hero.image')} onChange={(v) => set('hero.image', v)} hint="cth: /products/limestone.webp" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Kategori (label)" value={get('category')} onChange={(v) => set('category', v)} hint="cth: raw / processed / advanced" />
                  <Field label="Deskripsi ringkas (SEO)" value={get('description')} onChange={(v) => set('description', v)} />
                </div>
              </Section>

              <Section title="Statistik cepat (4 kotak)">
                {objRepeater('stats', [
                  ['label', 'Label'],
                  ['value', 'Nilai'],
                  ['icon', 'Ikon (opsional)'],
                ])}
              </Section>

              <Section title="Ikhtisar Produk">
                <Field label="Judul bagian" value={get('overview.title')} onChange={(v) => set('overview.title', v)} />
                <Field label="Isi paragraf" multiline value={get('overview.content')} onChange={(v) => set('overview.content', v)} />
                <StringList label="Poin keunggulan" items={getArr<string>('overview.features')} onChange={(v) => set('overview.features', v)} />
              </Section>

              <Section title="Spesifikasi Teknis">
                <Field label="Judul bagian" value={get('specifications.title')} onChange={(v) => set('specifications.title', v)} />
                {objRepeater('specifications.table', [
                  ['label', 'Parameter'],
                  ['value', 'Nilai'],
                ])}
              </Section>

              <Section title="Aplikasi Industri">
                <Field label="Judul bagian" value={get('applications.title')} onChange={(v) => set('applications.title', v)} />
                {objRepeater('applications.items', [
                  ['title', 'Industri'],
                  ['desc', 'Keterangan'],
                  ['icon', 'Ikon (opsional)'],
                ])}
              </Section>

              <Section title="Alur Produksi">
                <Field label="Judul bagian" value={get('process.title')} onChange={(v) => set('process.title', v)} />
                {objRepeater('process.steps', [
                  ['title', 'Langkah'],
                  ['desc', 'Keterangan'],
                ])}
              </Section>

              <Section title="Jaminan Kualitas">
                <Field label="Judul bagian" value={get('quality.title')} onChange={(v) => set('quality.title', v)} />
                <Field label="Isi paragraf" multiline value={get('quality.content')} onChange={(v) => set('quality.content', v)} />
                <StringList label="Sertifikat / standar" items={getArr<string>('quality.certs')} onChange={(v) => set('quality.certs', v)} />
              </Section>

              <Section title="FAQ">
                <Field label="Judul bagian" value={get('faq.title')} onChange={(v) => set('faq.title', v)} />
                {objRepeater('faq.items', [
                  ['q', 'Pertanyaan'],
                  ['a', 'Jawaban'],
                ])}
              </Section>

              <Section title="Ajakan (CTA) bawah halaman">
                <Field label="Judul" value={get('cta.title')} onChange={(v) => set('cta.title', v)} />
                <Field label="Subjudul" multiline value={get('cta.subtitle')} onChange={(v) => set('cta.subtitle', v)} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Tombol utama" value={get('cta.button')} onChange={(v) => set('cta.button', v)} />
                  <Field label="Tombol WhatsApp" value={get('cta.whatsapp')} onChange={(v) => set('cta.whatsapp', v)} />
                </div>
              </Section>

              <Section title="Varian ukuran">
                <StringList label="Ukuran tersedia" items={getArr<string>('size_variants')} onChange={(v) => set('size_variants', v)} />
              </Section>

              {status && <Callout tone="success">{status}</Callout>}
              <SaveBar dirty={dirty} saving={saving} onSave={onSave} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
