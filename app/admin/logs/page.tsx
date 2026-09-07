'use client';

import { useEffect, useState } from 'react';
import {
  getSession,
  loadRevisions,
  restoreRevision,
  type RevisionRow,
} from '../../../src/lib/admin/cms';
import { Button, Callout, Section } from '../../../src/components/admin/ui';

export const dynamic = 'force-static';

export default function AdminLogsPage() {
  const [rows, setRows] = useState<RevisionRow[] | null>(null);
  const [myId, setMyId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [msg, setMsg] = useState('');

  async function refresh() {
    const [revs, session] = await Promise.all([loadRevisions(), getSession()]);
    setRows(revs);
    setMyId(session?.user.id ?? null);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function onRestore(r: RevisionRow) {
    if (
      !confirm(
        `Kembalikan semua konten ke versi "${r.note}" (${new Date(r.created_at).toLocaleString('id-ID')})? ` +
          'Perubahan setelah versi ini akan tertimpa.',
      )
    )
      return;
    setBusyId(r.id);
    setMsg('');
    try {
      await restoreRevision(r.id);
      setMsg(`Dikembalikan ke versi ${new Date(r.created_at).toLocaleString('id-ID')}. Website sedang diperbarui.`);
      await refresh();
    } catch (e) {
      setMsg('Gagal mengembalikan: ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Riwayat Perubahan</h1>
      <p className="text-sm text-gray-500 mb-6">
        Setiap kali kamu menyimpan, satu versi tersimpan di sini. Kamu bisa mengembalikan
        seluruh konten ke versi mana pun.
      </p>

      {msg && (
        <div className="mb-4">
          <Callout tone="success">{msg}</Callout>
        </div>
      )}

      <Section title="Aktivitas terbaru">
        {!rows ? (
          <p className="text-sm text-gray-400">Memuat…</p>
        ) : rows.length === 0 ? (
          <p className="text-sm text-gray-400">Belum ada riwayat.</p>
        ) : (
          <ol className="divide-y divide-gray-100">
            {rows.map((r, i) => (
              <li key={r.id} className="flex items-center justify-between gap-4 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{r.note || 'Perubahan'}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(r.created_at).toLocaleString('id-ID', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                    {r.created_by && r.created_by === myId ? ' · oleh kamu' : ''}
                    {i === 0 ? ' · versi terbaru' : ''}
                  </p>
                </div>
                {i !== 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRestore(r)}
                    disabled={busyId !== null}
                  >
                    {busyId === r.id ? 'Mengembalikan…' : 'Kembalikan'}
                  </Button>
                )}
              </li>
            ))}
          </ol>
        )}
      </Section>
    </div>
  );
}
