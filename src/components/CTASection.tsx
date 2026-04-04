import Link from 'next/link';

interface CTASectionProps {
  type?: 'quote' | 'consult' | 'availability';
  product?: string;
  industry?: string;
  delivery?: string;
  lang?: 'id' | 'en';
  variant?: 'dark' | 'light';
  customHeading?: string;
  customCTA?: string;
}

const CONTENT = {
  quote: {
    id: { heading: 'Butuh Penawaran Harga?', sub: 'Dapatkan harga kompetitif dan spesifikasi teknis yang sesuai kebutuhan industri Anda.', cta: 'Request Penawaran →', wa: 'Halo PT WEU, saya ingin request penawaran harga' },
    en: { heading: 'Need a Price Quote?', sub: 'Get competitive pricing and technical specifications tailored to your industrial needs.', cta: 'Request Quotation →', wa: 'Hello PT WEU, I would like to request a price quotation' },
  },
  consult: {
    id: { heading: 'Konsultasikan Proyek Anda', sub: 'Tim teknis kami siap membantu menentukan spesifikasi mineral yang tepat untuk proses industri Anda.', cta: 'Konsultasi Gratis →', wa: 'Halo PT WEU, saya ingin konsultasi mengenai kebutuhan mineral industri' },
    en: { heading: 'Consult Your Project', sub: 'Our technical team is ready to help you select the right mineral specification for your industrial process.', cta: 'Free Consultation →', wa: 'Hello PT WEU, I would like a free consultation about industrial minerals' },
  },
  availability: {
    id: { heading: 'Cek Ketersediaan Stok', sub: 'Kapasitas produksi 150.000 MT/bulan. Cek ketersediaan dan jadwal pengiriman ke lokasi Anda.', cta: 'Cek Ketersediaan →', wa: 'Halo PT WEU, saya ingin cek ketersediaan stok dan jadwal pengiriman' },
    en: { heading: 'Check Stock Availability', sub: '150,000 MT/month production capacity. Check availability and shipping schedule to your location.', cta: 'Check Availability →', wa: 'Hello PT WEU, I would like to check stock availability and delivery schedule' },
  },
};

export default function CTASection({ 
  type = 'quote', 
  product, 
  industry, 
  delivery, 
  lang = 'id', 
  variant = 'dark',
  customHeading,
  customCTA
}: CTASectionProps) {
  const c = CONTENT[type][lang];

  const inquiryHref = lang === 'en'
    ? `/en/contact?${product ? `product=${product}` : ''}${industry ? `&industry=${industry}` : ''}${delivery ? `&delivery=${delivery}` : ''}`
    : `/kontak?${product ? `product=${product}` : ''}${industry ? `&industry=${industry}` : ''}${delivery ? `&delivery=${delivery}` : ''}`;

  const waText = encodeURIComponent(
    `Halo PT Wira Energi Utama, saya ingin meminta penawaran harga:

Produk: ${product || '-'}
Industri: ${industry || '-'}
Estimasi Volume: 
Lokasi Pengiriman: 
`
  );

  return (
    <section className={`py-16 ${variant === 'dark' ? 'bg-[#0A1628]' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${variant === 'dark' ? 'text-white' : 'text-[#0A1628]'}`}>
          {customHeading || c.heading}
        </h2>
        <p className={`mb-8 max-w-2xl mx-auto ${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {c.sub}
        </p>

        {/* TRUST STATS */}
        <div className={`grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto`}>
          {[
            { stat: '150K MT', label: lang === 'en' ? '/month capacity' : '/bulan kapasitas' },
            { stat: '250 TPH', label: lang === 'en' ? 'Crusher Plant' : 'Crusher Plant' },
            { stat: lang === 'en' ? 'Export' : 'Ekspor', label: lang === 'en' ? 'Ready Port Bitung' : 'Siap Port Bitung' },
          ].map(s => (
            <div key={s.stat} className={`rounded-xl p-3 ${variant === 'dark' ? 'bg-white/8 border border-white/12' : 'bg-white border border-gray-100'}`}>
              <p className={`text-xl font-extrabold ${variant === 'dark' ? 'text-[#C8A84B]' : 'text-[#0A1628]'}`}>{s.stat}</p>
              <p className={`text-xs mt-0.5 ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={inquiryHref}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#C8A84B] hover:bg-[#b8933b] text-[#0A1628] font-black rounded-xl transition-colors">
            {customCTA || c.cta}
          </Link>
          <a href={`https://wa.me/628114344168?text=${waText}`} target="_blank" rel="noopener noreferrer"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-colors ${
              variant === 'dark'
                ? 'bg-[#25D366] hover:bg-[#1ebe5d] text-white'
                : 'border border-gray-200 hover:border-[#C8A84B] text-gray-700'
            }`}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp: +62 811 4344 168
          </a>
        </div>
      </div>
    </section>
  );
}
