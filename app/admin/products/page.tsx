'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  autoPublish,
  loadPricing,
  loadProducts,
  savePricing,
  saveProduct,
  setProductPublished,
} from '../../../src/lib/admin/cms';
import { DEFAULT_PRODUCTS } from '../../../src/lib/content/defaults';
import type { ProductData, ProductApplication, ProductFAQ, ProductSpec } from '../../../src/data/products';
import type { ProductPricing } from '../../../src/lib/content/types';
import {
  Bilingual,
  Button,
  Callout,
  Field,
  NumberField,
  SaveBar,
  Section,
  StringList,
} from '../../../src/components/admin/ui';

export const dynamic = 'force-static';

type Row = Record<string, unknown>;

function toProduct(row: Row, fallback?: ProductData): ProductData {
  const base = fallback ?? ({} as ProductData);
  const arr = <T,>(k: string, f: T[]) => (Array.isArray(row[k]) ? (row[k] as T[]) : f);
  const s = (k: string, f: string) => (typeof row[k] === 'string' ? (row[k] as string) : f);
  return {
    id: s('id', base.id ?? ''),
    slug_id: s('slug_id', base.slug_id ?? ''),
    slug_en: s('slug_en', base.slug_en ?? ''),
    name_id: s('name_id', base.name_id ?? ''),
    name_en: s('name_en', base.name_en ?? ''),
    image: s('image', base.image ?? ''),
    hero_subtitle_id: s('hero_subtitle_id', base.hero_subtitle_id ?? ''),
    hero_subtitle_en: s('hero_subtitle_en', base.hero_subtitle_en ?? ''),
    description_id: s('description_id', base.description_id ?? ''),
    description_en: s('description_en', base.description_en ?? ''),
    specs: arr<ProductSpec>('specs', base.specs ?? []),
    size_variants: arr<string>('size_variants', base.size_variants ?? []),
    key_features_id: arr<string>('key_features_id', base.key_features_id ?? []),
    key_features_en: arr<string>('key_features_en', base.key_features_en ?? []),
    applications: arr<ProductApplication>('applications', base.applications ?? []),
    certs: arr<string>('certs', base.certs ?? []),
    faq_id: arr<ProductFAQ>('faq_id', base.faq_id ?? []),
    moq: s('moq', base.moq ?? ''),
    packaging: arr<string>('packaging', base.packaging ?? []),
    lead_time: s('lead_time', base.lead_time ?? ''),
    internal_links: arr('internal_links', base.internal_links ?? []),
  };
}

const emptyPricing = (id: string): ProductPricing => ({
  product_id: id,
  price_min: null,
  price_max: null,
  currency: 'IDR',
  unit: 'MT',
  note: '',
});

export default function AdminProductsPage() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [published, setPublished] = useState<Record<string, boolean>>({});
  const [pricing, setPricing] = useState<Record<string, ProductPricing>>({});
  const [selected, setSelected] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const [pForm, setPForm] = useState<ProductData | null>(null);
  const [priceForm, setPriceForm] = useState<ProductPricing | null>(null);
  const [pInitial, setPInitial] = useState<string>('');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');

  async function refresh() {
    setLoading(true);
    const [rows, prices] = await Promise.all([loadProducts(), loadPricing()]);
    const defById = new Map(DEFAULT_PRODUCTS.map((p) => [p.id, p]));
    const list =
      rows.length > 0
        ? rows.map((r) => toProduct(r as Row, defById.get(String((r as Row).id))))
        : DEFAULT_PRODUCTS;
    setProducts(list);
    setPublished(
      Object.fromEntries(
        rows.length
          ? rows.map((r) => [String((r as Row).id), (r as Row).is_published !== false])
          : DEFAULT_PRODUCTS.map((p) => [p.id, true]),
      ),
    );
    setPricing(
      Object.fromEntries(
        prices.map((pr) => [pr.product_id, { ...emptyPricing(pr.product_id), ...pr }]),
      ),
    );
    setSelected((cur) => cur || list[0]?.id || '');
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    if (!selected) return;
    const p = products.find((x) => x.id === selected);
    if (!p) return;
    setPForm(structuredClone(p));
    const pr = pricing[selected] ?? emptyPricing(selected);
    setPriceForm(structuredClone(pr));
    setPInitial(JSON.stringify({ p, pr }));
  }, [selected, products, pricing]);

  const dirty = useMemo(
    () => pForm !== null && priceForm !== null && JSON.stringify({ p: pForm, pr: priceForm }) !== pInitial,
    [pForm, priceForm, pInitial],
  );

  async function togglePublished(id: string) {
    const next = !(published[id] ?? true);
    setPublished({ ...published, [id]: next });
    await setProductPublished(id, next);
  }

  async function onSave() {
    if (!pForm || !priceForm) return;
    setSaving(true);
    setStatus('');
    const { error: e1 } = await saveProduct(pForm.id, {
      slug_id: pForm.slug_id,
      slug_en: pForm.slug_en,
      name_id: pForm.name_id,
      name_en: pForm.name_en,
      image: pForm.image,
      hero_subtitle_id: pForm.hero_subtitle_id,
      hero_subtitle_en: pForm.hero_subtitle_en,
      description_id: pForm.description_id,
      description_en: pForm.description_en,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      specs: pForm.specs as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      size_variants: pForm.size_variants as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      key_features_id: pForm.key_features_id as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      key_features_en: pForm.key_features_en as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      applications: pForm.applications as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      certs: pForm.certs as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      faq_id: pForm.faq_id as any,
      moq: pForm.moq,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      packaging: pForm.packaging as any,
      lead_time: pForm.lead_time,
    });
    const { error: e2 } = await savePricing(pForm.id, priceForm);
    if (e1 || e2) {
      setSaving(false);
      setStatus('Gagal menyimpan: ' + (e1?.message || e2?.message));
      return;
    }
    setStatus('Tersimpan. Memicu update website…');
    const pub = await autoPublish();
    setSaving(false);
    setStatus(pub.message);
    await refresh();
  }

  if (loading) return <p className="text-sm text-gray-400">Memuat…</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Produk & Harga</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
        <aside className="space-y-1">
          {products.map((p) => (
            <div
              key={p.id}
              className={`rounded-lg border px-3 py-2 ${
                selected === p.id ? 'border-brand-blue bg-blue-50' : 'border-gray-200'
              }`}
            >
              <button className="block w-full text-left" onClick={() => setSelected(p.id)}>
                <span className="text-sm font-medium text-gray-900">{p.name_id}</span>
              </button>
              <label className="mt-1 flex items-center gap-1.5 text-[11px] text-gray-500">
                <input
                  type="checkbox"
                  checked={published[p.id] ?? true}
                  onChange={() => togglePublished(p.id)}
                />
                Tampil di website
              </label>
            </div>
          ))}
        </aside>

        <div className="min-w-0">
          {pForm && priceForm ? (
            <>
              <Section title="Info Publik" description="Tampil di halaman produk & katalog website.">
                <Bilingual
                  label="Nama produk"
                  valueId={pForm.name_id}
                  valueEn={pForm.name_en}
                  onId={(v) => setPForm({ ...pForm, name_id: v })}
                  onEn={(v) => setPForm({ ...pForm, name_en: v })}
                />
                <Bilingual
                  label="Subjudul hero"
                  valueId={pForm.hero_subtitle_id}
                  valueEn={pForm.hero_subtitle_en}
                  onId={(v) => setPForm({ ...pForm, hero_subtitle_id: v })}
                  onEn={(v) => setPForm({ ...pForm, hero_subtitle_en: v })}
                />
                <Bilingual
                  label="Deskripsi"
                  multiline
                  valueId={pForm.description_id}
                  valueEn={pForm.description_en}
                  onId={(v) => setPForm({ ...pForm, description_id: v })}
                  onEn={(v) => setPForm({ ...pForm, description_en: v })}
                />
                <Field
                  label="Gambar (path)"
                  value={pForm.image}
                  onChange={(v) => setPForm({ ...pForm, image: v })}
                  hint="cth: /products/limestone.webp"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="MOQ" value={pForm.moq} onChange={(v) => setPForm({ ...pForm, moq: v })} />
                  <Field label="Lead time" value={pForm.lead_time} onChange={(v) => setPForm({ ...pForm, lead_time: v })} />
                </div>
              </Section>

              <Section title="Spesifikasi Teknis">
                <ObjRepeater
                  rows={pForm.specs as unknown as Record<string, string>[]}
                  cols={[
                    ['label', 'Parameter'],
                    ['value', 'Nilai'],
                  ]}
                  onChange={(specs) =>
                    setPForm({ ...pForm, specs: specs as unknown as ProductSpec[] })
                  }
                />
              </Section>

              <Section title="Daftar Poin">
                <StringList label="Varian ukuran" items={pForm.size_variants} onChange={(v) => setPForm({ ...pForm, size_variants: v })} />
                <StringList label="Keunggulan (ID)" items={pForm.key_features_id} onChange={(v) => setPForm({ ...pForm, key_features_id: v })} />
                <StringList label="Keunggulan (EN)" items={pForm.key_features_en} onChange={(v) => setPForm({ ...pForm, key_features_en: v })} />
                <StringList label="Kemasan" items={pForm.packaging} onChange={(v) => setPForm({ ...pForm, packaging: v })} />
                <StringList label="Sertifikat / dokumen" items={pForm.certs} onChange={(v) => setPForm({ ...pForm, certs: v })} />
              </Section>

              <Section title="Aplikasi Industri">
                <ObjRepeater
                  rows={pForm.applications as unknown as Record<string, string>[]}
                  cols={[
                    ['industry', 'Industri'],
                    ['use', 'Penggunaan'],
                    ['icon', 'Ikon (opsional)'],
                  ]}
                  onChange={(applications) =>
                    setPForm({
                      ...pForm,
                      applications: applications as unknown as ProductApplication[],
                    })
                  }
                />
              </Section>

              <Section title="FAQ (Bahasa Indonesia)">
                <ObjRepeater
                  rows={pForm.faq_id as unknown as Record<string, string>[]}
                  cols={[
                    ['q', 'Pertanyaan'],
                    ['a', 'Jawaban'],
                  ]}
                  onChange={(faq_id) =>
                    setPForm({ ...pForm, faq_id: faq_id as unknown as ProductFAQ[] })
                  }
                />
              </Section>

              <Section
                title="Harga Internal"
                description="⚠️ Hanya untuk tim internal / sales. TIDAK ditampilkan di website — pengunjung tetap diarahkan ke form penawaran."
              >
                <Callout tone="warn">
                  Data harga di bawah tidak pernah dikirim ke halaman publik. Hanya bisa dilihat
                  setelah login ke dashboard ini.
                </Callout>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <NumberField
                    label="Harga min"
                    value={priceForm.price_min}
                    onChange={(v) => setPriceForm({ ...priceForm, price_min: v })}
                  />
                  <NumberField
                    label="Harga max"
                    value={priceForm.price_max}
                    onChange={(v) => setPriceForm({ ...priceForm, price_max: v })}
                  />
                  <Field
                    label="Mata uang"
                    value={priceForm.currency}
                    onChange={(v) => setPriceForm({ ...priceForm, currency: v })}
                  />
                  <Field
                    label="Satuan"
                    value={priceForm.unit}
                    onChange={(v) => setPriceForm({ ...priceForm, unit: v })}
                  />
                </div>
                <Field
                  label="Catatan internal"
                  multiline
                  value={priceForm.note}
                  onChange={(v) => setPriceForm({ ...priceForm, note: v })}
                  hint="cth: harga FOB Bitung, belum termasuk PPN, update tiap kuartal"
                />
              </Section>

              {status && <Callout tone="success">{status}</Callout>}
              <SaveBar dirty={dirty} saving={saving} onSave={onSave} />
            </>
          ) : (
            <p className="text-sm text-gray-400">Pilih produk di kiri.</p>
          )}
        </div>
      </div>
    </div>
  );
}

/** Repeater for arrays of flat string-record objects. */
function ObjRepeater({
  rows,
  cols,
  onChange,
}: {
  rows: Record<string, string>[];
  cols: [string, string][];
  onChange: (rows: Record<string, string>[]) => void;
}) {
  return (
    <div className="space-y-3">
      {rows.map((row, i) => (
        <div key={i} className="rounded-lg border border-gray-200 p-3">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => onChange(rows.filter((_, j) => j !== i))}
              className="text-xs text-red-600 hover:underline"
            >
              Hapus
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cols.map(([key, label]) => (
              <label key={key} className="block">
                <span className="block text-xs font-medium text-gray-600 mb-1">{label}</span>
                <input
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
                  value={row[key] ?? ''}
                  onChange={(e) => {
                    const next = rows.map((r, j) => (j === i ? { ...r, [key]: e.target.value } : r));
                    onChange(next);
                  }}
                />
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...rows, Object.fromEntries(cols.map(([k]) => [k, '']))])}
        className="text-sm font-medium text-brand-blue hover:underline"
      >
        + Tambah baris
      </button>
    </div>
  );
}
