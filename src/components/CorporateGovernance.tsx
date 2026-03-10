import { Briefcase, Gavel, Users } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface CorporateGovernanceProps {
  t: Translation['about'];
}

export default function CorporateGovernance({ t }: CorporateGovernanceProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">Governance</h2>
          <h3 className="text-4xl font-bold text-gray-900">Tata Kelola Perusahaan</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
            <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-6">
              <Gavel size={28} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Kepatuhan Hukum</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Menjalankan operasional sesuai dengan regulasi pemerintah dan standar industri pertambangan yang berlaku.
            </p>
          </div>

          <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
            <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-6">
              <Users size={28} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Kepercayaan Masyarakat</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Membangun hubungan yang harmonis dan transparan dengan masyarakat sekitar lokasi operasional tambang.
            </p>
          </div>

          <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
            <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-6">
              <Briefcase size={28} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Budaya Kerja</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Memupuk budaya kerja yang cepat, produktif, efektif, dan efisien untuk mencapai keunggulan operasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
