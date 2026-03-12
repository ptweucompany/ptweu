'use client';

import { motion } from 'motion/react';
import { LucideIcon, Plus } from 'lucide-react';

interface InteractiveCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  color?: 'gold' | 'blue';
}

export default function InteractiveCard({ title, description, icon: Icon, onClick, color = 'blue' }: InteractiveCardProps) {
  const iconBg = color === 'blue' ? 'bg-brand-blue text-white' : 'bg-brand-gold text-brand-blue';
  
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 cursor-pointer transition-all hover:border-brand-gold/30 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-brand-gold/5 transition-colors" />
      
      <div className={`${iconBg} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
        <Icon size={40} />
      </div>

      <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors">{title}</h4>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      <div className="flex items-center text-brand-blue font-bold text-sm tracking-wide group-hover:text-brand-gold transition-colors">
        <span>LEARN MORE</span>
        <div className="ml-3 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
          <Plus size={16} />
        </div>
      </div>
    </motion.div>
  );
}
