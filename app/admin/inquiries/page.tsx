'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  deleteInquiry,
  loadInquiries,
  updateInquiry,
  type Inquiry,
  type InquiryStatus,
} from '../../../src/lib/admin/inbox';
import { Button, Callout } from '../../../src/components/admin/ui';

export const dynamic = 'force-static';

const STATUS_LABEL: Record<InquiryStatus, string> = {
  new: 'Baru',
  contacted: 'Dihubungi',
  closed: 'Selesai',
};
const STATUS_TONE: Record<InquiryStatus, string> = {
  new: 'bg-amber-100 text-amber-800',
  contacted: 'bg-blue-100 text-blue-800',
  closed: 'bg-gray-100 text-gray-500',
};

const digits = (s: string) => (s || '').replace(/\D/g, '');

export default function AdminInquiriesPage() {
  const [all, setAll] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | InquiryStatus>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState('');
  const [savingNote, setSavingNote] = useState(false);
  const [msg, setMsg] = useState('');

  async function refresh() {
    setLoading(true);
    setAll(await loadInquiries());
    setLoading(false);
  }
  useEffect(() => {
    refresh();
  }, []);

  const list = useMemo(
    () => (filter === 'all' ? all : all.filter((i) => i.status === filter)),
    [all, filter],
  );
  const selected = all.find((i) => i.id === selectedId) ?? null;
  const counts = useMemo(() => {
    const c = { all: all.length, new: 0, contacted: 0, closed: 0 };
    for (const i of all) c[i.status]++;
    return c;
  }, [all]);

  useEffect(() => {
    setNoteDraft(selected?.admin_notes ?? '');
  }, [selectedId]); // eslint-disable-line react-hooks/exhaustive-deps

  async function setStatus(id: string, status: InquiryStatus) {
    setAll((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
    await updateInquiry(id, { status });
  }
  async function saveNote() {
    if (!selected) return;
    setSavingNote(true);
    await updateInquiry(selected.id, { admin_notes: noteDraft });
    setAll((prev) =>
      prev.map((i) => (i.id === selected.id ? { ...i, admin_notes: noteDraft } : i)),
    );
    setSavingNote(false);
    setMsg('Catatan tersimpan.');
    setTimeout(() => setMsg(''), 2500);
  }
  async function remove(id: string) {
    if (!confirm('Hapus permanen inquiry ini?')) return;
    await deleteInquiry(id);
    setSelectedId(null);
    setAll((prev) => prev.filter((i) => i.id !== id));
  }

  const waHref = selected
    ? `https://wa.me/${digits(selected.phone)}?text=${encodeURIComponent(
        `Halo ${selected.name}, terima kasih atas inquiry Anda ke PT Wira Energi Utama.`,
      )}`
    : '#';
  const mailHref = selected
    ? `mailto:${selected.email}?subject=${encodeURIComponent(
        'Balasan inquiry Anda — PT Wira Energi Utama',
      )}`
    : '#';

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Inbox Inquiry</h1>
      <p className="text-sm text-gray-500 mb-5">Semua pesan dari form kontak & inquiry website.</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {(['all', 'new', 'contacted', 'closed'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${
              filter === f ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {f === 'all' ? 'Semua' : STATUS_LABEL[f]} ({counts[f]})
          </button>
        ))}
      </div>

      {msg && (
        <div className="mb-4">
          <Callout tone="success">{msg}</Callout>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-6">
        {/* list */}
        <div className="rounded-xl border border-gray-200 bg-white divide-y divide-gray-100 max-h-[70vh] overflow-y-auto">
          {loading ? (
            <p className="p-4 text-sm text-gray-400">Memuat…</p>
          ) : list.length === 0 ? (
            <p className="p-4 text-sm text-gray-400">Tidak ada pesan.</p>
          ) : (
            list.map((i) => (
              <button
                key={i.id}
                onClick={() => setSelectedId(i.id)}
                className={`block w-full text-left p-4 hover:bg-gray-50 ${
                  selectedId === i.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm text-gray-900 truncate">
                    {i.name || '(tanpa nama)'}
                    {i.company ? ` · ${i.company}` : ''}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full flex-shrink-0 ${STATUS_TONE[i.status]}`}
                  >
                    {STATUS_LABEL[i.status]}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                  {i.product ? `[${i.product}] ` : ''}
                  {i.message || i.email}
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  {new Date(i.created_at).toLocaleString('id-ID', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}
                </p>
              </button>
            ))
          )}
        </div>

        {/* detail */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          {!selected ? (
            <p className="text-sm text-gray-400">Pilih pesan di kiri untuk melihat detail.</p>
          ) : (
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{selected.name || '(tanpa nama)'}</h2>
                  <p className="text-sm text-gray-500">
                    {selected.company}
                    {selected.country ? ` · ${selected.country}` : ''}
                  </p>
                </div>
                <span className="text-xs text-gray-400">
                  {selected.form === 'contact' ? 'Form Kontak' : 'Form Inquiry'}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {(['new', 'contacted', 'closed'] as InquiryStatus[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(selected.id, s)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                      selected.status === s
                        ? 'bg-brand-blue text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {STATUS_LABEL[s]}
                  </button>
                ))}
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <Row label="Email" value={selected.email} href={`mailto:${selected.email}`} />
                <Row label="Telepon / WA" value={selected.phone} href={`tel:${digits(selected.phone)}`} />
                <Row label="Produk" value={selected.product} />
                <Row label="Industri" value={selected.industry} />
                <Row label="Volume" value={selected.volume} />
                <Row label="Packaging" value={selected.packaging} />
                <Row label="Lokasi kirim" value={selected.delivery} />
                <Row label="Diterima" value={new Date(selected.created_at).toLocaleString('id-ID')} />
              </dl>

              {selected.message && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Pesan</p>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap bg-gray-50 rounded-lg p-3 border border-gray-100">
                    {selected.message}
                  </p>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                  Catatan internal
                </p>
                <textarea
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none min-h-[72px]"
                  value={noteDraft}
                  onChange={(e) => setNoteDraft(e.target.value)}
                  placeholder="cth: sudah ditelepon 8 Sep, minta sample 5 MT"
                />
                <div className="mt-2">
                  <Button size="sm" onClick={saveNote} disabled={savingNote || noteDraft === selected.admin_notes}>
                    {savingNote ? 'Menyimpan…' : 'Simpan catatan'}
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                {digits(selected.phone) && (
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-[#25D366] text-white text-sm font-semibold px-4 py-2 hover:bg-[#1ebe5d]"
                  >
                    Balas via WhatsApp
                  </a>
                )}
                {selected.email && (
                  <a
                    href={mailHref}
                    className="inline-flex items-center rounded-lg bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 hover:bg-gray-200"
                  >
                    Balas via Email
                  </a>
                )}
                <button
                  onClick={() => remove(selected.id)}
                  className="inline-flex items-center rounded-lg text-red-600 text-sm font-semibold px-4 py-2 hover:bg-red-50 ml-auto"
                >
                  Hapus
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</dt>
      <dd className="text-gray-800">
        {href ? (
          <a href={href} className="hover:text-brand-blue break-words">
            {value}
          </a>
        ) : (
          <span className="break-words">{value}</span>
        )}
      </dd>
    </div>
  );
}
