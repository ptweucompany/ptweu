'use client';

import { useEffect, useMemo, useState } from 'react';
import { autoPublish, loadSiteSettings, saveSiteSettings } from '../../../src/lib/admin/cms';
import { DEFAULT_SITE_SETTINGS } from '../../../src/lib/content/defaults';
import type { LegalInfo, OfficeInfo, SiteSettings } from '../../../src/lib/content/types';
import {
  Button,
  Callout,
  Field,
  NumberField,
  Section,
  SaveBar,
  StringList,
} from '../../../src/components/admin/ui';

export const dynamic = 'force-static';

function fromRow(row: Record<string, unknown> | null): SiteSettings {
  if (!row) return structuredClone(DEFAULT_SITE_SETTINGS);
  return {
    ...structuredClone(DEFAULT_SITE_SETTINGS),
    ...row,
    offices: Array.isArray(row.offices)
      ? (row.offices as OfficeInfo[])
      : DEFAULT_SITE_SETTINGS.offices,
    legal:
      row.legal && typeof row.legal === 'object'
        ? { ...DEFAULT_SITE_SETTINGS.legal, ...(row.legal as LegalInfo) }
        : DEFAULT_SITE_SETTINGS.legal,
  } as SiteSettings;
}

const emptyOffice: OfficeInfo = {
  type: '',
  city: '',
  address_id: '',
  phone: '',
  whatsapp: '',
  whatsapp_url: '',
  email: '',
  geo: null,
};

export default function AdminCompanyPage() {
  const [initial, setInitial] = useState<SiteSettings | null>(null);
  const [form, setForm] = useState<SiteSettings | null>(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    loadSiteSettings().then((row) => {
      const v = fromRow(row as Record<string, unknown> | null);
      setInitial(v);
      setForm(structuredClone(v));
    });
  }, []);

  const dirty = useMemo(
    () => JSON.stringify(initial) !== JSON.stringify(form),
    [initial, form],
  );

  if (!form) return <p className="text-sm text-gray-400">Memuat…</p>;

  const set = <K extends keyof SiteSettings>(k: K, v: SiteSettings[K]) =>
    setForm({ ...form, [k]: v });
  const setLegal = <K extends keyof LegalInfo>(k: K, v: LegalInfo[K]) =>
    setForm({ ...form, legal: { ...form.legal, [k]: v } });
  const setOffice = (i: number, patch: Partial<OfficeInfo>) => {
    const offices = form.offices.map((o, j) => (j === i ? { ...o, ...patch } : o));
    setForm({ ...form, offices });
  };

  async function onSave() {
    if (!form) return;
    setSaving(true);
    setStatus('');
    const { error } = await saveSiteSettings({
      legal_name: form.legal_name,
      short_name: form.short_name,
      tagline_id: form.tagline_id,
      tagline_en: form.tagline_en,
      founded: form.founded,
      employees_approx: form.employees_approx,
      email_primary: form.email_primary,
      email_secondary: form.email_secondary,
      phone: form.phone,
      whatsapp: form.whatsapp,
      whatsapp_url: form.whatsapp_url,
      instagram_url: form.instagram_url,
      facebook_url: form.facebook_url,
      linkedin_url: form.linkedin_url,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      offices: form.offices as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      legal: form.legal as any,
    });
    if (error) {
      setSaving(false);
      setStatus('Gagal menyimpan: ' + error.message);
      return;
    }
    setInitial(structuredClone(form));
    setStatus('Tersimpan. Memicu update website…');
    const pub = await autoPublish();
    setSaving(false);
    setStatus(pub.message);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Data Perusahaan</h1>

      <Section title="Identitas & Tagline">
        <Field label="Nama legal" value={form.legal_name} onChange={(v) => set('legal_name', v)} />
        <Field label="Nama singkat" value={form.short_name} onChange={(v) => set('short_name', v)} />
        <Field label="Tagline (ID)" value={form.tagline_id} onChange={(v) => set('tagline_id', v)} />
        <Field label="Tagline (EN)" value={form.tagline_en} onChange={(v) => set('tagline_en', v)} />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Tahun berdiri" value={form.founded} onChange={(v) => set('founded', v)} />
          <NumberField
            label="Perkiraan jumlah karyawan"
            value={form.employees_approx}
            onChange={(v) => set('employees_approx', v ?? 0)}
          />
        </div>
      </Section>

      <Section title="Kontak Utama" description="Dipakai di footer, header, dan data SEO (JSON-LD).">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Email utama" type="email" value={form.email_primary} onChange={(v) => set('email_primary', v)} />
          <Field label="Email kedua" type="email" value={form.email_secondary} onChange={(v) => set('email_secondary', v)} />
          <Field label="Telepon kantor" type="tel" value={form.phone} onChange={(v) => set('phone', v)} />
          <Field label="Nomor WhatsApp (tampilan)" value={form.whatsapp} onChange={(v) => set('whatsapp', v)} hint="Contoh: 0813 9956 7777" />
        </div>
        <Field
          label="Link WhatsApp"
          type="url"
          value={form.whatsapp_url}
          onChange={(v) => set('whatsapp_url', v)}
          hint="Contoh: https://wa.me/6281399567777"
        />
      </Section>

      <Section title="Sosial Media">
        <Field label="Instagram URL" type="url" value={form.instagram_url} onChange={(v) => set('instagram_url', v)} />
        <Field label="Facebook URL" type="url" value={form.facebook_url} onChange={(v) => set('facebook_url', v)} />
        <Field label="LinkedIn URL" type="url" value={form.linkedin_url} onChange={(v) => set('linkedin_url', v)} />
      </Section>

      <Section title="Kantor & Lokasi">
        {form.offices.map((o, i) => (
          <div key={i} className="rounded-lg border border-gray-200 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Lokasi #{i + 1}
              </span>
              <button
                type="button"
                onClick={() => set('offices', form.offices.filter((_, j) => j !== i))}
                className="text-xs text-red-600 hover:underline"
              >
                Hapus
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Jenis" value={o.type} onChange={(v) => setOffice(i, { type: v })} hint="cth: Kantor Utama / Head Office" />
              <Field label="Kota" value={o.city} onChange={(v) => setOffice(i, { city: v })} />
            </div>
            <Field label="Alamat" multiline value={o.address_id} onChange={(v) => setOffice(i, { address_id: v })} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Telepon" value={o.phone ?? ''} onChange={(v) => setOffice(i, { phone: v || null })} />
              <Field label="Email" value={o.email ?? ''} onChange={(v) => setOffice(i, { email: v || null })} />
              <Field label="WhatsApp" value={o.whatsapp ?? ''} onChange={(v) => setOffice(i, { whatsapp: v || null })} />
              <Field label="Link WhatsApp" value={o.whatsapp_url ?? ''} onChange={(v) => setOffice(i, { whatsapp_url: v || null })} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <NumberField
                label="Latitude"
                value={o.geo?.lat ?? null}
                onChange={(v) =>
                  setOffice(i, {
                    geo: v === null && !o.geo?.lng ? null : { lat: v ?? 0, lng: o.geo?.lng ?? 0 },
                  })
                }
              />
              <NumberField
                label="Longitude"
                value={o.geo?.lng ?? null}
                onChange={(v) =>
                  setOffice(i, {
                    geo: v === null && !o.geo?.lat ? null : { lat: o.geo?.lat ?? 0, lng: v ?? 0 },
                  })
                }
              />
            </div>
          </div>
        ))}
        <Button variant="ghost" onClick={() => set('offices', [...form.offices, { ...emptyOffice }])}>
          + Tambah lokasi
        </Button>
      </Section>

      <Section title="Legalitas & Perizinan">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Nomor IUP" value={form.legal.iup_number} onChange={(v) => setLegal('iup_number', v)} />
          <Field label="Jenis IUP" value={form.legal.iup_type} onChange={(v) => setLegal('iup_type', v)} />
          <Field label="IUP berlaku sejak" value={form.legal.iup_valid_since} onChange={(v) => setLegal('iup_valid_since', v)} />
          <NumberField label="Luas IUP (Ha)" value={form.legal.iup_area_ha} onChange={(v) => setLegal('iup_area_ha', v ?? 0)} />
          <Field label="SK UKL-UPL" value={form.legal.ukl_upl_decree} onChange={(v) => setLegal('ukl_upl_decree', v)} />
          <NumberField label="Luas UKL-UPL (Ha)" value={form.legal.ukl_upl_area_ha} onChange={(v) => setLegal('ukl_upl_area_ha', v ?? 0)} />
          <Field label="PKKPR Laut No." value={form.legal.pkkpr_laut_no} onChange={(v) => setLegal('pkkpr_laut_no', v)} />
          <NumberField label="Luas PKKPR Laut (Ha)" value={form.legal.pkkpr_laut_area_ha} onChange={(v) => setLegal('pkkpr_laut_area_ha', v ?? 0)} />
          <Field label="NPWP" value={form.legal.npwp} onChange={(v) => setLegal('npwp', v)} />
          <Field label="SK Kemenkumham" value={form.legal.kemenkumham} onChange={(v) => setLegal('kemenkumham', v)} />
        </div>
        <StringList
          label="Sertifikasi (dimiliki)"
          items={form.legal.certifications_current}
          onChange={(v) => setLegal('certifications_current', v)}
        />
        <StringList
          label="Sertifikasi (dalam proses)"
          items={form.legal.certifications_in_progress}
          onChange={(v) => setLegal('certifications_in_progress', v)}
        />
      </Section>

      {status && <Callout tone="success">{status}</Callout>}
      <SaveBar dirty={dirty} saving={saving} onSave={onSave} />
    </div>
  );
}
