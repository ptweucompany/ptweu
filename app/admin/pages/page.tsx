'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  loadPageContent,
  savePageContent,
  type PageContentRow,
  type PageTree,
} from '../../../src/lib/admin/pages';
import { autoPublish } from '../../../src/lib/admin/cms';
import { JsonEditor } from '../../../src/components/admin/JsonEditor';
import { Callout, SaveBar } from '../../../src/components/admin/ui';

export const dynamic = 'force-static';

export default function AdminPagesPage() {
  const [rows, setRows] = useState<PageContentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [sel, setSel] = useState('');
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [form, setForm] = useState<PageTree | null>(null);
  const [initial, setInitial] = useState('');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');

  async function refresh() {
    setLoading(true);
    const data = await loadPageContent();
    setRows(data);
    setSel((s) => s || data[0]?.key || '');
    setLoading(false);
  }
  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    const r = rows.find((x) => x.key === sel);
    if (!r) return;
    const d = lang === 'en' ? r.data_en : r.data_id;
    setForm(structuredClone(d));
    setInitial(JSON.stringify(d));
  }, [sel, lang, rows]);

  const dirty = useMemo(
    () => form !== null && JSON.stringify(form) !== initial,
    [form, initial],
  );
  const current = rows.find((r) => r.key === sel);

  async function onSave() {
    if (!form) return;
    setSaving(true);
    setStatus('');
    const { error } = await savePageContent(sel, lang, form);
    if (error) {
      setSaving(false);
      setStatus('Gagal menyimpan: ' + error.message);
      return;
    }
    setInitial(JSON.stringify(form));
    setStatus('Tersimpan. Memicu update website…');
    const pub = await autoPublish(`Halaman "${current?.label ?? sel}" (${lang.toUpperCase()}) diperbarui`);
    setSaving(false);
    setStatus(pub.message);
    await refresh();
  }

  if (loading) return <p className="text-sm text-gray-400">Memuat…</p>;

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Teks Halaman Lengkap</h1>
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
        Semua teks di halaman Tentang Kami, Katalog, Governansi, dan Keberlanjutan.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
        <aside className="space-y-1">
          {rows.map((r) => (
            <button
              key={r.key}
              onClick={() => setSel(r.key)}
              className={`block w-full text-left rounded-lg border px-3 py-2 text-sm font-medium ${
                sel === r.key
                  ? 'border-brand-blue bg-blue-50 text-gray-900'
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              {r.label || r.key}
            </button>
          ))}
        </aside>

        <div className="min-w-0">
          {!form ? (
            <p className="text-sm text-gray-400">Pilih halaman.</p>
          ) : (
            <>
              <JsonEditor value={form} onChange={setForm} />
              {status && (
                <div className="mt-4">
                  <Callout tone="success">{status}</Callout>
                </div>
              )}
              <SaveBar dirty={dirty} saving={saving} onSave={onSave} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
