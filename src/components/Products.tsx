import { Translation } from '../types';
import { motion } from 'motion/react';

interface ProductsProps {
  t: Translation['products'];
}

export default function Products({ t }: ProductsProps) {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
          <p className="text-4xl font-bold text-gray-900 mb-6">{t.subtitle}</p>
          <div className="h-1.5 w-24 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-brand-blue/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <span className="text-brand-blue font-bold text-xl group-hover:text-white">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-600 leading-relaxed">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
