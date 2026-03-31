import type { Metadata } from 'next';
import Link from 'next/link';
import InquiryForm from '../../../src/components/InquiryForm';
import LeadScrollButton from '../../../src/components/LeadScrollButton';
import { offices, legal, company } from '../../../src/data/company';

export const metadata: Metadata = {
  title: 'Contact Us | Industrial Mineral Inquiry — PT Wira Energi Utama',
  description: 'Submit an inquiry for limestone, CaCO3, burn lime, hydrated lime, and PCC. PT WEU technical team is ready to assist your industrial mineral needs with fast response.',
  alternates: {
    canonical: 'https://ptweu.company/en/contact',
    languages: { id: 'https://ptweu.company/kontak', en: 'https://ptweu.company/en/contact' },
  },
  openGraph: {
    title: 'Contact PT Wira Energi Utama | Industrial Mineral Inquiry',
    description: 'Submit an inquiry and get a quote for industrial minerals from a trusted North Sulawesi source.',
    url: 'https://ptweu.company/en/contact',
  },
};

const BASE = 'https://ptweu.company';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact PT Wira Energi Utama',
  description: 'Contact and inquiry page for industrial minerals',
  url: `${BASE}/en/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: company.legal_name,
    telephone: '+62-0434-260-3008',
    email: 'contact@ptweu.company',
    url: BASE,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-811-4344-168',
      contactType: 'sales',
      availableLanguage: ['Indonesian', 'English'],
      contactOption: 'TollFree',
    },
  },
};

const faqData = [
  { q: 'What is the Minimum Order Quantity (MOQ) for purchase?', a: 'Our MOQ is flexible: for local delivery starting from 20 MT, inter-island minimum 500 MT via barge, and export minimum 7,500 MT through Bitung Port. We are open to trial shipments for new customers.' },
  { q: 'How long is the response time after sending an inquiry?', a: 'Our team will respond within 1 business day. For urgent needs, contact us directly via WhatsApp +62 811 4344 168 for an instant response.' },
  { q: 'Can PT WEU ship outside Sulawesi?', a: 'Yes. We have a dedicated jetty with a 12-meter draft and use Bitung Port (SEZ) for inter-island shipping and exports to Australia, China, Singapore, and the Asia Pacific region.' },
  { q: 'Is a Certificate of Analysis (COA) available?', a: 'Yes. Every production batch is accompanied by a standard COA. For commercial volumes, independent certification from Sucofindo or Intertek is available upon customer request.' },
  { q: 'What is the ordering process?', a: '1) Send inquiry via this form or WhatsApp → 2) Technical team contacts you to confirm specifications → 3) Price proposal & terms are sent → 4) PO & supply contract → 5) Production & delivery according to schedule.' },
  { q: 'Is price information available on the website?', a: 'Industrial mineral prices are dynamic depending on specifications, volume, packaging, and delivery location. Please submit an inquiry to get a customized quote.' },
];

export default function ContactPage() {
  const headOffice = offices[0];
  const regionalOffice = offices[1];

  const CheckIcon = () => (
    <svg className="w-4 h-4 text-[#C8A84B] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* 1. HERO */}
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex gap-2 text-sm text-gray-400">
              <li><Link href="/en" className="hover:text-[#C8A84B]">Home</Link></li>
              <li>/</li>
              <li className="text-[#C8A84B]" aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-[#C8A84B]/20 border border-[#C8A84B]/40 text-[#C8A84B] text-xs font-bold rounded-full mb-4">
                B2B Inquiry System
              </span>
              <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Start Your Industrial<br />Mineral Procurement
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Limestone, CaCO3, burn lime and PCC supplier from North Sulawesi. 150,000 MT/month capacity, IUP certified, export ready.
              </p>
              <ul className="space-y-3">
                {[
                  'Response within 1 business day',
                  'Technical team ready for spec consultation',
                  'COA & certification available per batch',
                  'Local, inter-island & export shipping',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 gap-4">
              <a href={`https://wa.me/628114344168?text=${encodeURIComponent('Hello PT WEU, I would like to know more about your industrial mineral products.')}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-5 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-5 hover:bg-[#25D366]/15 transition-colors">
                <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">WhatsApp (Fast Response)</p>
                  <p className="text-[#25D366] text-lg font-bold">+62 811 4344 168</p>
                  <p className="text-gray-400 text-xs">Mon–Sat, 08:00–17:00 WITA</p>
                </div>
              </a>

              <a href="mailto:contact@ptweu.company"
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#C8A84B]/30 transition-colors">
                <div className="w-14 h-14 bg-[#C8A84B] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-[#0A1628]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Email</p>
                  <p className="text-[#C8A84B] font-semibold">contact@ptweu.company</p>
                  <p className="text-gray-400 text-xs">Response within 1 business day</p>
                </div>
              </a>

              <a href="tel:+6204342603008"
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#C8A84B]/30 transition-colors">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Office Phone</p>
                  <p className="text-gray-300 font-semibold">(0434) 260 3008</p>
                  <p className="text-gray-400 text-xs">Manado, North Sulawesi</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORM SECTION (MAIN) */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Product Inquiry Form</h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form below. Once finished, we will automatically open WhatsApp with a ready-to-send message, and contact you within 1 business day.
              </p>
              <InquiryForm lang="en" />
            </div>
          </div>

          {/* Right — Trust & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Why PT WEU */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-[#0A1628] font-bold mb-5">Why Choose PT WEU?</h3>
              <div className="space-y-4">
                {[
                  { stat: '150,000 MT', desc: 'Production capacity per month' },
                  { stat: '250 TPH', desc: 'Crusher plant capacity' },
                  { stat: 'Legal IUP OP', desc: `No. ${legal.iup_number}` },
                  { stat: '97.05 Ha', desc: 'Total mining area' },
                  { stat: '12 m Draft', desc: 'Special Jetty for PT WEU' },
                  { stat: 'Zero Fatality', desc: 'Operational safety track record' },
                ].map(item => (
                  <div key={item.stat} className="flex items-start gap-3">
                    <CheckIcon />
                    <div>
                      <p className="text-[#0A1628] font-bold text-sm">{item.stat}</p>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-[#0A1628] rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Legality & Certification</h3>
              <div className="space-y-3">
                {[
                  { label: 'IUP Production Operation', value: 'Active since April 2024' },
                  { label: 'SMK3', value: 'Active Certificate' },
                  { label: 'ISO 9001:2015', value: 'In Progress' },
                  { label: 'ISO 14001:2015', value: 'In Progress' },
                  { label: 'Sucofindo / Intertek', value: 'Available on request' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-gray-400 text-xs">{item.label}</span>
                    <span className="text-[#C8A84B] text-xs font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Quick Links */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-[#0A1628] font-bold mb-4">Our Products</h3>
              <div className="space-y-2">
                {[
                  { href: '/en/products/limestone', label: 'Limestone', slug: 'limestone' },
                  { href: '/en/products/caco3', label: 'Calcium Carbonate / CaCO3', slug: 'caco3' },
                  { href: '/en/products/burn-lime', label: 'Burn Lime / Quick Lime', slug: 'burn-lime' },
                  { href: '/en/products/hydrated-lime', label: 'Hydrated Lime', slug: 'hydrated-lime' },
                  { href: '/en/products/pcc', label: 'PCC — Precipitated CaCO3', slug: 'pcc' },
                ].map(p => (
                  <div key={p.href} className="flex items-center justify-between gap-2">
                    <Link href={p.href} className="text-sm text-gray-600 hover:text-[#0A1628] hover:font-semibold transition-colors">{p.label}</Link>
                    <Link href={`/en/contact?product=${p.slug}`}
                      className="text-xs text-[#C8A84B] hover:underline flex-shrink-0">Inquiry →</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OFFICE LOCATIONS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Office Locations</h2>
          <p className="text-gray-500 mb-8">Two operational offices in North Sulawesi.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.type} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-wider mb-3">{office.type}</p>
                <h3 className="text-[#0A1628] font-bold text-lg mb-3">{office.city}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{office.address_id}</p>
                <div className="space-y-2 text-sm">
                  {office.phone && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:+620434260300`} className="text-gray-700 hover:text-[#C8A84B] transition-colors">{office.phone}</a>
                    </div>
                  )}
                  {office.whatsapp_url && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <a href={office.whatsapp_url} target="_blank" rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#25D366] transition-colors">{office.whatsapp}</a>
                    </div>
                  )}
                  {office.email && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-[#C8A84B] transition-colors">{office.email}</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAP EMBED */}
      <section className="bg-gray-50">
        <div className="h-80 w-full relative overflow-hidden">
          <iframe
            src={`https://maps.google.com/maps?q=${headOffice.geo.lat},${headOffice.geo.lng}&z=14&output=embed`}
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="PT Wira Energi Utama Location, Manado"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
          <div className="absolute inset-0 pointer-events-none border-b-4 border-[#C8A84B]" />
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#0A1628] text-2xl font-bold mb-2">FAQ — Inquiry Process</h2>
          <p className="text-gray-500 mb-8">Common questions regarding mineral procurement from PT WEU.</p>
          <div className="space-y-3">
            {faqData.map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100">
                <summary className="flex justify-between items-start p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[#0A1628] pr-4">{item.q}</span>
                  <svg className="w-5 h-5 text-[#C8A84B] flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BOTTOM */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-2xl font-bold mb-4">Ready to Start Procurement?</h2>
          <p className="text-gray-300 mb-8">Contact our sales team now or scroll up to fill out the complete Inquiry Form.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/628114344168" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1ebe5d] transition-colors">
              WhatsApp: +62 811 4344 168
            </a>
            <LeadScrollButton label="↑ Fill Inquiry Form" />
          </div>
        </div>
      </section>
    </>
  );
}
