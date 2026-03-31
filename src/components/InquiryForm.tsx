'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

/* ─── CONSTANTS ─────────────────────────────────────────────────────────── */

export const PRODUCTS = [
  { value: 'limestone', label: 'Limestone (Batu Kapur)', label_en: 'Limestone', desc: 'CaCO₃ ≥ 90%, berbagai ukuran & mesh' },
  { value: 'caco3', label: 'Calcium Carbonate / CaCO3', label_en: 'Calcium Carbonate (CaCO3)', desc: 'Fine powder, mesh 100–400' },
  { value: 'burn-lime', label: 'Burn Lime / Kapur Bakar (CaO)', label_en: 'Burn Lime (CaO)', desc: 'CaO ≥ 88%, untuk smelter & industri' },
  { value: 'hydrated-lime', label: 'Hydrated Lime / Kapur Padam Ca(OH)₂', label_en: 'Hydrated Lime (Ca(OH)₂)', desc: 'Ca(OH)₂ ≥ 90%, fineness tinggi' },
  { value: 'pcc', label: 'PCC — Precipitated Calcium Carbonate', label_en: 'PCC (Precipitated Calcium Carbonate)', desc: 'Ultra-fine, kertas, cat & plastik' },
];

export const INDUSTRIES = [
  { value: 'semen', value_en: 'cement', label: 'Semen / Cement' },
  { value: 'baja', value_en: 'steel', label: 'Baja / Steel' },
  { value: 'pltu', value_en: 'power-plant', label: 'PLTU / Power Plant' },
  { value: 'kimia', value_en: 'chemical', label: 'Kimia / Chemical' },
  { value: 'pertanian', value_en: 'agriculture', label: 'Pertanian / Agriculture' },
  { value: 'konstruksi', value_en: 'construction', label: 'Konstruksi / Construction' },
];

const VOLUMES = [
  { value: 'lt100', label: '< 100 MT', desc: 'Trial / Sampel' },
  { value: '100-1000', label: '100 – 1.000 MT', desc: 'Order Kecil–Menengah' },
  { value: '1000-10000', label: '1.000 – 10.000 MT', desc: 'Order Skala Industri' },
  { value: 'gt10000', label: '> 10.000 MT', desc: 'Skala Industri / Ekspor' },
];

const PACKAGING_OPTS = [
  { value: 'bulk', label: 'Bulk / Curah', desc: 'Langsung ke truk / tongkang' },
  { value: 'jumbo-bag', label: 'Jumbo Bag (1 MT)', desc: 'FIBC bag 1 ton' },
  { value: 'small-bag', label: 'Small Bag', desc: '25 kg atau 50 kg per sak' },
];

const STEP_TITLES = ['Info Kontak', 'Produk & Industri', 'Kebutuhan Order', 'Pesan Tambahan'];

/* ─── TYPES ─────────────────────────────────────────────────────────────── */

export interface InquiryData {
  name: string; company: string; email: string; phone: string; country: string;
  product: string; industry: string;
  volume: string; packaging: string; delivery: string;
  message: string;
}

type Errors = Partial<Record<keyof InquiryData, string>>;

const INIT: InquiryData = {
  name: '', company: '', email: '', phone: '', country: '',
  product: '', industry: '',
  volume: '', packaging: '', delivery: '',
  message: '',
};

/* ─── HELPERS ────────────────────────────────────────────────────────────── */

function validate(step: number, d: InquiryData): Errors {
  const e: Errors = {};
  if (step === 0) {
    if (!d.name.trim()) e.name = 'Nama wajib diisi';
    if (!d.company.trim()) e.company = 'Nama perusahaan wajib diisi';
    if (!d.email.trim() || !/\S+@\S+\.\S+/.test(d.email)) e.email = 'Email tidak valid';
    if (!d.phone.trim()) e.phone = 'Nomor telepon/WhatsApp wajib diisi';
    if (!d.country.trim()) e.country = 'Negara / Kota asal wajib diisi';
  }
  if (step === 1) { if (!d.product) e.product = 'Pilih produk yang diminati'; }
  if (step === 2) { if (!d.volume) e.volume = 'Pilih estimasi volume'; }
  return e;
}

function buildWAMessage(d: InquiryData): string {
  const pLabel = PRODUCTS.find(p => p.value === d.product)?.label || d.product;
  const indLabel = INDUSTRIES.find(i => i.value === d.industry || i.value_en === d.industry)?.label || d.industry;
  const volLabel = VOLUMES.find(v => v.value === d.volume)?.label || d.volume;
  const pkgLabel = PACKAGING_OPTS.find(p => p.value === d.packaging)?.label || d.packaging;

  const lines = [
    '*🔔 INQUIRY BARU — PT Wira Energi Utama*',
    '━━━━━━━━━━━━━━━━━━━━━━━',
    '*📋 INFORMASI KONTAK*',
    `*Nama:* ${d.name}`,
    `*Perusahaan:* ${d.company}`,
    `*Email:* ${d.email}`,
    `*Telepon/WA:* ${d.phone}`,
    `*Negara/Kota:* ${d.country}`,
    '━━━━━━━━━━━━━━━━━━━━━━━',
    '*📦 DETAIL PRODUK*',
    `*Produk:* ${pLabel || '-'}`,
    `*Industri:* ${indLabel || '-'}`,
    '━━━━━━━━━━━━━━━━━━━━━━━',
    '*🚚 KEBUTUHAN ORDER*',
    `*Estimasi Volume:* ${volLabel || '-'}`,
    `*Packaging:* ${pkgLabel || '-'}`,
    `*Lokasi Pengiriman:* ${d.delivery || '-'}`,
    '━━━━━━━━━━━━━━━━━━━━━━━',
    '*💬 PESAN*',
    d.message || '(tidak ada pesan tambahan)',
    '━━━━━━━━━━━━━━━━━━━━━━━',
    `_Dikirim: ${new Date().toLocaleString('id-ID')}_`,
  ];
  return encodeURIComponent(lines.join('\n'));
}

/* ─── FIELD STYLES ───────────────────────────────────────────────────────── */

function inputClass(err?: string) {
  return `w-full px-4 py-3 border rounded-xl text-sm text-gray-700 transition-colors focus:outline-none ${
    err ? 'border-red-400 bg-red-50 focus:border-red-400' : 'border-gray-200 focus:border-[#C8A84B]'
  }`;
}

/* ─── INNER FORM ─────────────────────────────────────────────────────────── */

function InquiryFormInner({ lang = 'id' }: { lang?: 'id' | 'en' }) {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<InquiryData>(INIT);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // Pre-fill from URL params
  useEffect(() => {
    const product = searchParams.get('product');
    const industry = searchParams.get('industry');
    const location = searchParams.get('location');
    const delivery = searchParams.get('delivery');
    if (product || industry || location || delivery) {
      setData(prev => ({
        ...prev,
        ...(product ? { product } : {}),
        ...(industry ? { industry } : {}),
        ...(location || delivery ? { delivery: location || delivery || prev.delivery } : {}),
      }));
      if (product) setStep(1); // jump to step 2 if product pre-filled
      if (location || delivery) setStep(2); // jump to step 3 if delivery pre-filled
    }
  }, [searchParams]);

  function set(field: keyof InquiryData, value: string) {
    setData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  }

  function next() {
    const errs = validate(step, data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStep(s => s + 1);
  }

  function back() { setStep(s => Math.max(0, s - 1)); setErrors({}); }

  async function submit() {
    const errs = validate(step, data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);

    const payload = { ...data, timestamp: new Date().toISOString(), source: typeof window !== 'undefined' ? window.location.href : '' };

    // Try Formspree/custom endpoint if configured
    const endpoint = process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT;
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch { /* fail silently — WA is primary */ }
    }

    setSubmitting(false);
    setDone(true);
    // Open WhatsApp with pre-filled message
    const msg = buildWAMessage(data);
    setTimeout(() => { window.open(`https://wa.me/628114344168?text=${msg}`, '_blank'); }, 600);
  }

  /* SUCCESS STATE */
  if (done) {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[#0A1628] text-2xl font-bold mb-3">
          {lang === 'en' ? 'Inquiry Submitted!' : 'Inquiry Berhasil Dikirim!'}
        </h3>
        <p className="text-gray-600 mb-2">
          {lang === 'en' ? 'Thank you, ' : 'Terima kasih, '}<strong>{data.name}</strong>.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          {lang === 'en'
            ? 'Our team will contact you within 1 business day. A WhatsApp window has opened — please send the message to confirm.'
            : 'Tim kami akan menghubungi Anda dalam 1 hari kerja. WhatsApp telah terbuka — silakan kirim pesan untuk konfirmasi.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/628114344168?text=${buildWAMessage(data)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1ebe5d] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {lang === 'en' ? 'Send via WhatsApp' : 'Kirim via WhatsApp'}
          </a>
          <button onClick={() => { setDone(false); setStep(0); setData(INIT); }}
            className="px-8 py-4 border border-gray-300 text-gray-600 rounded-xl hover:border-[#C8A84B] hover:text-[#0A1628] transition-colors">
            {lang === 'en' ? 'New Inquiry' : 'Inquiry Baru'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* STEP PROGRESS */}
      <div className="flex items-center mb-10">
        {STEP_TITLES.map((title, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                i < step ? 'bg-[#0A1628] text-[#C8A84B]'
                  : i === step ? 'bg-[#C8A84B] text-[#0A1628]'
                  : 'bg-gray-100 text-gray-400'
              }`}>
                {i < step ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : i + 1}
              </div>
              <span className={`text-xs mt-1 hidden sm:block ${i === step ? 'text-[#C8A84B] font-semibold' : 'text-gray-400'}`}>
                {title}
              </span>
            </div>
            {i < STEP_TITLES.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 transition-colors ${i < step ? 'bg-[#C8A84B]' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* STEP CONTENT */}
      <div className="min-h-[340px]">

        {/* STEP 0 — Contact Info */}
        {step === 0 && (
          <div>
            <p className="text-[#0A1628] font-bold text-lg mb-6">
              {lang === 'en' ? 'Contact Information' : 'Informasi Kontak'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                  {lang === 'en' ? 'Full Name *' : 'Nama Lengkap *'}
                </label>
                <input type="text" value={data.name} onChange={e => set('name', e.target.value)}
                  placeholder="Budi Santoso" className={inputClass(errors.name)} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                  {lang === 'en' ? 'Company Name *' : 'Nama Perusahaan *'}
                </label>
                <input type="text" value={data.company} onChange={e => set('company', e.target.value)}
                  placeholder="PT Semen Indonesia" className={inputClass(errors.company)} />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                  Email *
                </label>
                <input type="email" value={data.email} onChange={e => set('email', e.target.value)}
                  placeholder="budi@perusahaan.com" className={inputClass(errors.email)} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                  {lang === 'en' ? 'Phone / WhatsApp *' : 'Telepon / WhatsApp *'}
                </label>
                <input type="tel" value={data.phone} onChange={e => set('phone', e.target.value)}
                  placeholder="+62 811 4344 168" className={inputClass(errors.phone)} />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                  {lang === 'en' ? 'Country / City *' : 'Negara / Kota *'}
                </label>
                <input type="text" value={data.country} onChange={e => set('country', e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. Australia, Darwin' : 'contoh: Indonesia, Makassar'}
                  className={inputClass(errors.country)} />
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 1 — Product & Industry */}
        {step === 1 && (
          <div>
            <p className="text-[#0A1628] font-bold text-lg mb-2">
              {lang === 'en' ? 'Product & Industry' : 'Produk & Industri'}
            </p>
            <p className="text-gray-500 text-sm mb-5">
              {lang === 'en' ? 'Select the product you need (required) and your industry (optional).'
                : 'Pilih produk yang Anda butuhkan (wajib) dan industri Anda (opsional).'}
            </p>

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {lang === 'en' ? 'Product Interested *' : 'Produk yang Diminati *'}
            </p>
            <div className="grid grid-cols-1 gap-3 mb-6">
              {PRODUCTS.map(p => (
                <button key={p.value} type="button" onClick={() => set('product', p.value)}
                  className={`text-left w-full px-4 py-3 rounded-xl border-2 transition-all ${
                    data.product === p.value
                      ? 'border-[#C8A84B] bg-[#C8A84B]/8'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                  <div className="flex items-start gap-3">
                    <span className={`w-5 h-5 flex-shrink-0 rounded-full border-2 mt-0.5 flex items-center justify-center ${
                      data.product === p.value ? 'border-[#C8A84B] bg-[#C8A84B]' : 'border-gray-300'
                    }`}>
                      {data.product === p.value && (
                        <span className="w-2 h-2 bg-[#0A1628] rounded-full" />
                      )}
                    </span>
                    <div>
                      <p className={`font-semibold text-sm ${data.product === p.value ? 'text-[#0A1628]' : 'text-gray-700'}`}>
                        {lang === 'en' ? p.label_en : p.label}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {errors.product && <p className="text-red-500 text-xs -mt-4 mb-4">{errors.product}</p>}

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {lang === 'en' ? 'Industry (optional)' : 'Industri (opsional)'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {INDUSTRIES.map(ind => (
                <button key={ind.value} type="button"
                  onClick={() => set('industry', data.industry === ind.value ? '' : ind.value)}
                  className={`px-3 py-2 rounded-lg border text-sm transition-all ${
                    data.industry === ind.value
                      ? 'border-[#C8A84B] bg-[#C8A84B]/8 text-[#0A1628] font-semibold'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}>
                  {ind.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 — Order Requirements */}
        {step === 2 && (
          <div>
            <p className="text-[#0A1628] font-bold text-lg mb-2">
              {lang === 'en' ? 'Order Requirements' : 'Kebutuhan Order'}
            </p>
            <p className="text-gray-500 text-sm mb-5">
              {lang === 'en' ? 'Help us understand your volume and logistics needs.'
                : 'Bantu kami memahami kebutuhan volume dan logistik Anda.'}
            </p>

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {lang === 'en' ? 'Estimated Volume *' : 'Estimasi Volume *'}
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {VOLUMES.map(v => (
                <button key={v.value} type="button" onClick={() => set('volume', v.value)}
                  className={`text-left px-4 py-3 rounded-xl border-2 transition-all ${
                    data.volume === v.value
                      ? 'border-[#C8A84B] bg-[#C8A84B]/8'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                  <p className={`font-bold text-sm ${data.volume === v.value ? 'text-[#0A1628]' : 'text-gray-700'}`}>
                    {v.label}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{v.desc}</p>
                </button>
              ))}
            </div>
            {errors.volume && <p className="text-red-500 text-xs -mt-4 mb-4">{errors.volume}</p>}

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {lang === 'en' ? 'Packaging (optional)' : 'Kemasan (opsional)'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {PACKAGING_OPTS.map(p => (
                <button key={p.value} type="button"
                  onClick={() => set('packaging', data.packaging === p.value ? '' : p.value)}
                  className={`text-left px-4 py-3 rounded-xl border-2 transition-all ${
                    data.packaging === p.value
                      ? 'border-[#C8A84B] bg-[#C8A84B]/8'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                  <p className={`font-bold text-sm ${data.packaging === p.value ? 'text-[#0A1628]' : 'text-gray-700'}`}>
                    {p.label}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{p.desc}</p>
                </button>
              ))}
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                {lang === 'en' ? 'Delivery Location (optional)' : 'Lokasi Pengiriman (opsional)'}
              </label>
              <input type="text" value={data.delivery} onChange={e => set('delivery', e.target.value)}
                placeholder={lang === 'en' ? 'e.g. Makassar Port, EX Darwin Australia' : 'contoh: Pelabuhan Makassar, atau Darwin Australia'}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 focus:border-[#C8A84B] focus:outline-none transition-colors" />
            </div>
          </div>
        )}

        {/* STEP 3 — Additional Info */}
        {step === 3 && (
          <div>
            <p className="text-[#0A1628] font-bold text-lg mb-2">
              {lang === 'en' ? 'Additional Information' : 'Informasi Tambahan'}
            </p>
            <p className="text-gray-500 text-sm mb-5">
              {lang === 'en'
                ? 'Any additional context, specs, or questions? (optional)'
                : 'Ada informasi tambahan, spesifikasi, atau pertanyaan khusus? (opsional)'}
            </p>

            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                {lang === 'en' ? 'Message / Notes' : 'Pesan / Catatan'}
              </label>
              <textarea value={data.message} onChange={e => set('message', e.target.value)}
                rows={5} placeholder={lang === 'en'
                  ? 'e.g. We need CaCO3 with mesh 200, for rubber industry. Please provide FOB Bitung price.'
                  : 'contoh: Kami membutuhkan CaCO3 mesh 200 untuk industri karet. Mohon berikan harga FOB Bitung.'}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 focus:border-[#C8A84B] focus:outline-none transition-colors resize-none" />
            </div>

            {/* Summary review */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-sm space-y-1">
              <p className="font-semibold text-[#0A1628] mb-2">
                {lang === 'en' ? '📋 Inquiry Summary' : '📋 Ringkasan Inquiry'}
              </p>
              {[
                [lang === 'en' ? 'Contact' : 'Kontak', `${data.name} · ${data.company}`],
                [lang === 'en' ? 'Product' : 'Produk', PRODUCTS.find(p => p.value === data.product)?.[lang === 'en' ? 'label_en' : 'label'] || '-'],
                [lang === 'en' ? 'Volume' : 'Volume', VOLUMES.find(v => v.value === data.volume)?.label || '-'],
                [lang === 'en' ? 'Delivery' : 'Pengiriman', data.delivery || '-'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-2">
                  <span className="text-gray-500 w-24 flex-shrink-0">{label}:</span>
                  <span className="text-gray-700 font-medium">{value}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-xs mt-4">
              {lang === 'en'
                ? '* After clicking Submit, a WhatsApp message will open pre-filled — please send it to confirm your inquiry.'
                : '* Setelah Submit, WhatsApp akan terbuka dengan pesan siap kirim — silakan kirim untuk konfirmasi inquiry Anda.'}
            </p>
          </div>
        )}
      </div>

      {/* NAV BUTTONS */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
        <button onClick={back} disabled={step === 0}
          className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl hover:border-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
          {lang === 'en' ? '← Back' : '← Kembali'}
        </button>

        <span className="text-gray-400 text-xs">{step + 1} / {STEP_TITLES.length}</span>

        {step < STEP_TITLES.length - 1 ? (
          <button onClick={next}
            className="px-8 py-3 bg-[#0A1628] text-white font-bold rounded-xl hover:bg-[#0d1d35] transition-colors">
            {lang === 'en' ? 'Next →' : 'Lanjut →'}
          </button>
        ) : (
          <button onClick={submit} disabled={submitting}
            className="px-8 py-3 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-bold rounded-xl transition-colors disabled:opacity-60">
            {submitting
              ? (lang === 'en' ? 'Sending…' : 'Mengirim…')
              : (lang === 'en' ? '✓ Submit Inquiry' : '✓ Kirim Inquiry')}
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── EXPORT (with Suspense boundary) ───────────────────────────────────── */

export default function InquiryForm({ lang }: { lang?: 'id' | 'en' }) {
  return (
    <Suspense fallback={
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-100 rounded-xl" />
        <div className="grid grid-cols-2 gap-4">
          <div className="h-12 bg-gray-100 rounded-xl" />
          <div className="h-12 bg-gray-100 rounded-xl" />
        </div>
        <div className="h-12 bg-gray-100 rounded-xl" />
        <div className="h-12 bg-gray-100 rounded-xl" />
      </div>
    }>
      <InquiryFormInner lang={lang} />
    </Suspense>
  );
}
