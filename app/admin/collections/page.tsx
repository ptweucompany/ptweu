'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  COLLECTION_META,
  collectionDefault,
  importMissingCollections,
  loadCollection,
  saveCollection,
  type CollectionArray,
} from '../../../src/lib/admin/collections';
import { autoPublish } from '../../../src/lib/admin/cms';
import { JsonNode } from '../../../src/components/admin/JsonEditor';
import { Button, Callout, SaveBar } from '../../../src/components/admin/ui';

export const dynamic = 'force-static';

export default function AdminCollectionsPage() {
  const [sel, setSel] = useState(COLLECTION_META[0].key);
  const [rows, setRows] = useState<Record<string, CollectionArray | null>>({});
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<CollectionArray | null>(null);
  const [initial, setInitial] = useState('');
  const [saving, setSaving] = useState(false);
  const [importing, setImporting] = useState(false);
  const [status, setStatus] = useState('');

  async function refresh() {
    setLoading(true);
    const entries = await Promise.all(
      COLLECTION_META.map(async (m) => [m.key, await loadCollection(m.key)] as const),
    );
    setRows(Object.fromEntries(entries));
    setLoading(false);
  }
  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    const d = rows[sel];
    if (d === undefined) return;
    const val = d ?? null;
    setForm(val ? structuredClone(val) : null);
    setInitial(val ? JSON.stringify(val) : '');
  }, [sel, rows]);

  const dirty = useMemo(
    () => form !== null && JSON.stringify(form) !== initial,
    [form, initial],
  );
  const meta = COLLECTION_META.find((m) => m.key === sel)!;
  const notImported = !loading && rows[sel] === null;

  async function onImport() {
    setImporting(true);
    setStatus('');
    try {
      const seeded = await importMissingCollections();
      setStatus(
        seeded.length
          ? `Berhasil impor: ${seeded.join(', ')}. Sekarang bisa diedit.`
          : 'Semua data sudah terimpor.',
      );
      await refresh();
    } catch (e) {
      setStatus('Gagal impor: ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setImporting(false);
    }
  }

  async function onSave() {
    if (!form) return;
    setSaving(true);
    setStatus('');
    const { error } = await saveCollection(sel, form);
    if (error) {
      setSaving(false);
      setStatus('Gagal menyimpan: ' + error.message);
      return;
    }
    setInitial(JSON.stringify(form));
    setStatus('Tersimpan. Memicu update website…');
    const pub = await autoPublish(`Data "${meta.label}" diperbarui`);
    setSaving(false);
    setStatus(pub.message);
    await refresh();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Data Halaman Industri & Lokasi</h1>
      <p className="text-sm text-gray-500 mb-6">
        Isi halaman <code>/industri/&lt;nama&gt;</code> dan <code>/lokasi/&lt;nama&gt;</code>.
        Teks ID &amp; English ada di dalam tiap kartu (field berakhiran <code>_id</code> /{' '}
        <code>_en</code>).
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
        <aside className="space-y-1">
          {COLLECTION_META.map((m) => (
            <button
              key={m.key}
              onClick={() => setSel(m.key)}
              className={`block w-full text-left rounded-lg border px-3 py-2 text-sm font-medium ${
                sel === m.key
                  ? 'border-brand-blue bg-blue-50 text-gray-900'
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              {m.label}
              <span className="block text-[11px] text-gray-400">
                {rows[m.key] ? `${rows[m.key]!.length} item` : `${collectionDefault(m.key).length} item (belum diimpor)`}
              </span>
            </button>
          ))}
        </aside>

        <div className="min-w-0">
          {loading ? (
            <p className="text-sm text-gray-400">Memuat…</p>
          ) : notImported ? (
            <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
              <p className="text-sm text-gray-600">
                Data <strong>{meta.label}</strong> belum bisa diedit. Impor sekali dari data
                yang ada di website sekarang (aman, tidak mengubah tampilan).
              </p>
              <Button variant="gold" onClick={onImport} disabled={importing}>
                {importing ? 'Mengimpor…' : 'Impor dari data website'}
              </Button>
              {status && <Callout tone="info">{status}</Callout>}
            </div>
          ) : form ? (
            <>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <JsonNode value={form} onChange={(v) => setForm(v as CollectionArray)} />
              </div>
              {status && (
                <div className="mt-4">
                  <Callout tone="success">{status}</Callout>
                </div>
              )}
              <SaveBar dirty={dirty} saving={saving} onSave={onSave} />
            </>
          ) : (
            <p className="text-sm text-gray-400">Tidak ada data.</p>
          )}
        </div>
      </div>
    </div>
  );
}
