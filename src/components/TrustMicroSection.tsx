import { ShieldCheck, Truck, Factory } from 'lucide-react';

interface TrustMicroSectionProps {
  lang?: 'id' | 'en';
}

const CONTENT = {
  id: [
    { icon: ShieldCheck, label: 'Lulus Uji Sucofindo / Intertek' },
    { icon: Truck, label: 'Logistik Siap Ekspor (Pelabuhan Bitung)' },
    { icon: Factory, label: 'Supplier Langsung (Tanpa Perantara)' },
  ],
  en: [
    { icon: ShieldCheck, label: 'Tested by Sucofindo / Intertek' },
    { icon: Truck, label: 'Export-Ready Logistics (Port Bitung)' },
    { icon: Factory, label: 'Direct Supplier (No Middleman)' },
  ],
};

export default function TrustMicroSection({ lang = 'id' }: TrustMicroSectionProps) {
  const items = CONTENT[lang];

  return (
    <div className="bg-white border-b border-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <item.icon className="w-5 h-5 text-[#C8A84B]" />
              <span className="text-xs font-bold text-[#0A1628] uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
