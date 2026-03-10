import { SearchCheck, Landmark, FileCheck2 } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface ComplianceQualityProps {
  qcT: Translation['qc'];
  investmentT: Translation['investment'];
  standardsT: Translation['standards'];
}

export default function ComplianceQuality({ qcT, investmentT, standardsT }: ComplianceQualityProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100"
          >
            <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-8">
              <SearchCheck size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{qcT.title}</h4>
            <p className="text-gray-600 leading-relaxed mb-6">{qcT.subtitle}</p>
            <p className="text-sm text-gray-500">{qcT.text}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-12 bg-brand-blue text-white rounded-[3rem] shadow-xl"
          >
            <div className="w-16 h-16 bg-brand-gold text-brand-blue rounded-2xl flex items-center justify-center mb-8">
              <Landmark size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4">{investmentT.title}</h4>
            <p className="text-gray-300 leading-relaxed mb-6">{investmentT.subtitle}</p>
            <p className="text-sm text-gray-400">{investmentT.text}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100"
          >
            <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-8">
              <FileCheck2 size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{standardsT.title}</h4>
            <p className="text-gray-600 leading-relaxed mb-6">{standardsT.subtitle}</p>
            <p className="text-sm text-gray-500">{standardsT.text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
