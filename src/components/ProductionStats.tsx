'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface ProductionStatsProps {
  t: Translation['stats'];
}

const data = [
  { name: 'Limestone', value: 1380096 },
  { name: 'Hydrated Lime', value: 1324800 },
  { name: 'Burn Lime', value: 34560 },
  { name: 'Burn/Limbah', value: 20736 },
];

const COLORS = ['#002B5B', '#D4AF37', '#004080', '#8E9299'];

export default function ProductionStats({ t }: ProductionStatsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[400px] w-full bg-gray-50 animate-pulse rounded-3xl" />;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.title}</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">{t.subtitle}</h3>
          <p className="text-gray-500 font-medium">Unit: {t.unit}</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#4B5563', fontSize: 12, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  cursor={{ fill: '#f9fafb' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number) => [new Intl.NumberFormat().format(value), 'Tons']}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={60}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-gray-100">
            {data.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">{item.name}</p>
                <p className="text-2xl font-bold text-brand-blue">{new Intl.NumberFormat().format(item.value)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
