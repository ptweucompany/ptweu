'use client';

import { useEffect, useMemo, useState } from 'react';
import { autoPublish, loadContentBlocks, saveContentBlocks } from '../../../src/lib/admin/cms';
import { CONTENT_GROUPS, DEFAULT_CONTENT_BLOCKS } from '../../../src/lib/content/defaults';
import type { ContentBlock } from '../../../src/lib/content/types';
import { Bilingual, Callout, SaveBar, Section } from '../../../src/components/admin/ui';

export const dynamic = 'force-static';

export default function AdminContentPage() {
  const [blocks, setBlocks] = useState<ContentBlock[] | null>(null);
  const [initial, setInitial] = useState<string>('');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    loadContentBlocks().then((rows) => {
      const byKey = new Map(rows.map((r) => [r.key, r]));
      // Start from the full default catalog so every editable string is present,
      // even if it hasn't been written to the DB yet.
      const merged: ContentBlock[] = DEFAULT_CONTENT_BLOCKS.map((d) => {
        const r = byKey.get(d.key);
        return r
          ? {
              key: r.key,
              group: r.group || d.group,
              label: r.label || d.label,
              type: (r.type as ContentBlock['type']) || d.type,
              value_id: r.value_id,
              value_en: r.value_en,
              sort_order: r.sort_order ?? d.sort_order,
            }
          : d;
      });
      setBlocks(merged);
      setInitial(JSON.stringify(merged));
    });
  }, []);

  const dirty = useMemo(
    () => blocks !== null && JSON.stringify(blocks) !== initial,
    [blocks, initial],
  );

  if (!blocks) return <p className="text-sm text-gray-400">Memuat…</p>;

  const update = (key: string, patch: Partial<Pick<ContentBlock, 'value_id' | 'value_en'>>) =>
    setBlocks(blocks.map((b) => (b.key === key ? { ...b, ...patch } : b)));

  async function onSave() {
    if (!blocks) return;
    setSaving(true);
    setStatus('');
    const { error } = await saveContentBlocks(
      blocks.map((b) => ({ key: b.key, value_id: b.value_id, value_en: b.value_en })),
    );
    if (error) {
      setSaving(false);
      setStatus('Gagal menyimpan: ' + error.message);
      return;
    }
    setInitial(JSON.stringify(blocks));
    setStatus('Tersimpan. Memicu update website…');
    const pub = await autoPublish();
    setSaving(false);
    setStatus(pub.message);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Teks Halaman</h1>
      <p className="text-sm text-gray-500 mb-6">
        Teks bagian utama landing page. Isi kolom Indonesia dan English.
      </p>

      {CONTENT_GROUPS.map((g) => {
        const items = blocks.filter((b) => b.group === g.key);
        if (!items.length) return null;
        return (
          <Section key={g.key} title={g.title}>
            {items.map((b) => (
              <Bilingual
                key={b.key}
                label={b.label}
                multiline={b.type === 'textarea'}
                valueId={b.value_id}
                valueEn={b.value_en}
                onId={(v) => update(b.key, { value_id: v })}
                onEn={(v) => update(b.key, { value_en: v })}
              />
            ))}
          </Section>
        );
      })}

      {status && <Callout tone="success">{status}</Callout>}
      <SaveBar dirty={dirty} saving={saving} onSave={onSave} />
    </div>
  );
}
