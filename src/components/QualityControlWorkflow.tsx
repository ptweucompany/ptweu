import { Microscope, ClipboardCheck, FlaskConical, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Translation } from '../types';

interface QualityControlWorkflowProps {
  t: Translation['qcWorkflow'];
}

export default function QualityControlWorkflow({ t }: QualityControlWorkflowProps) {
  const icons = [FlaskConical, Microscope, ClipboardCheck, CheckCircle];

  return (
    <section className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
            <h3 className="text-4xl font-bold mb-8">{t.subtitle}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.text}
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.steps.map((step, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10"
                >
                  <Icon size={32} className="text-brand-gold mb-6" />
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
