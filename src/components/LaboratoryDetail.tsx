import { Beaker, Microscope, TestTube } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface LaboratoryDetailProps {
  t: Translation['qa'];
}

const parameters = [
  { name: 'CaO', value: '55.07%', desc: 'Calcium Oxide purity level' },
  { name: 'CaCO3', value: '98.26%', desc: 'Calcium Carbonate content' },
  { name: 'MgO', value: '0.32%', desc: 'Magnesium Oxide' },
  { name: 'SiO2', value: '0.74%', desc: 'Silicon Dioxide' },
];

export default function LaboratoryDetail({ t }: LaboratoryDetailProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {parameters.map((param, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                >
                  <p className="text-brand-gold font-bold text-3xl mb-2">{param.value}</p>
                  <h4 className="font-bold text-gray-900 mb-1">{param.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{param.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 text-brand-blue mb-6">
              <Microscope size={28} />
              <span className="font-bold uppercase tracking-widest text-sm">Technical Analysis</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Precise Chemical Composition</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Our limestone products are characterized by high purity and consistent chemical properties, 
              meeting the stringent requirements of various industrial applications from construction to chemical processing.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Expert" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500">Verified by certified laboratory experts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
