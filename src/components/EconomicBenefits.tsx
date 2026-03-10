import { Coins, BarChart3, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface EconomicBenefitsProps {
  t: Translation['economic'];
  benefitsT: Translation['benefits'];
}

export default function EconomicBenefits({ t, benefitsT }: EconomicBenefitsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Economic Points */}
          <div>
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-12">{t.subtitle}</h3>
            
            <div className="space-y-8">
              {t.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 p-8 bg-gray-50 rounded-3xl border border-gray-100"
                >
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    {index === 0 ? <Coins size={28} /> : index === 1 ? <BarChart3 size={28} /> : <ShieldCheck size={28} />}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Benefits */}
          <div className="bg-brand-blue rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full -mr-20 -mt-20" />
            
            <div className="relative z-10">
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">{benefitsT.title}</h2>
              <h3 className="text-3xl font-bold mb-10">{benefitsT.subtitle}</h3>
              
              <div className="space-y-6">
                {benefitsT.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-lg text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-gray-400 italic">
                  "Our limestone is engineered by nature and refined by technology to provide the best industrial performance."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
