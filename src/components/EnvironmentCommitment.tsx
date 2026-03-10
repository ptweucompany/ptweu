import { Leaf, Recycle } from 'lucide-react';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface EnvironmentCommitmentProps {
  t: Translation['environment'];
}

export default function EnvironmentCommitment({ t }: EnvironmentCommitmentProps) {
  return (
    <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute top-0 right-0 opacity-10 -mr-20 -mt-20">
        <Leaf size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-emerald-400 mb-6">
            <Recycle size={28} />
            <span className="font-bold uppercase tracking-widest text-sm">{t.title}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {t.subtitle}
          </h2>
          <p className="text-xl text-emerald-100/80 leading-relaxed mb-12">
            {t.text}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h4 className="font-bold text-xl mb-4 text-emerald-400">Reclamation Plan</h4>
              <p className="text-sm text-emerald-50/70">Systematic greening of post-mining areas to restore local biodiversity.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h4 className="font-bold text-xl mb-4 text-emerald-400">Eco-Technology</h4>
              <p className="text-sm text-emerald-50/70">Implementing low-emission processing methods and efficient waste management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
