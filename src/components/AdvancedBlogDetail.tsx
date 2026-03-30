'use client';

import { motion } from 'motion/react';
import { Calendar, Tag, ArrowLeft, Share2, Printer, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { Translation } from '../types';
import Link from 'next/link';

interface AdvancedBlogDetailProps {
  post: Translation['advancedBlog']['posts'][0];
  heroT: Translation['advancedBlog']['hero'];
}

export default function AdvancedBlogDetail({ post, heroT }: AdvancedBlogDetailProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end overflow-hidden bg-brand-blue">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-60" />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-blue via-brand-blue/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-6"
          >
            <Link href="/blog" className="w-12 h-12 bg-white/10 hover:bg-brand-gold hover:text-brand-blue text-white rounded-full flex items-center justify-center transition-all">
              <ArrowLeft size={24} />
            </Link>
            <span className="bg-brand-gold text-brand-blue font-black px-4 py-1 rounded-full text-xs uppercase tracking-widest">
              {post.category}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-gray-300 font-bold text-sm uppercase tracking-widest"
          >
            <span className="flex items-center">
              <Calendar size={18} className="mr-2 text-brand-gold" />
              {post.date}
            </span>
            <span className="flex items-center">
              <MessageSquare size={18} className="mr-2 text-brand-gold" />
              PT WEU Corporate Communications
            </span>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-xl prose-brand max-w-none"
            >
              <p className="text-2xl font-medium text-gray-600 leading-relaxed mb-12 italic border-l-4 border-brand-gold pl-8">
                {post.excerpt}
              </p>
              
              <div className="text-gray-800 leading-loose space-y-8 text-xl font-medium">
                <p>
                  Industrial limestone mining in <strong>North Sulawesi</strong> has seen a significant shift towards sustainable and technology-driven operations. 
                  PT Wira Energi Utama is at the forefront of this transformation, ensuring that our mineral resources contribute effectively to the national supply chain while maintaining environmental integrity.
                </p>
                
                <h3 className="text-3xl font-black text-brand-blue pt-8 uppercase tracking-tight">Optimizing Quality & Operations</h3>
                <p>
                  Our commitment to excellence begins at the extraction stage. By utilizing advanced geological mapping and high-precision crushing technology, 
                  we produce a variety of grades tailored for sectors such as steel manufacturing, chemical production, and agriculture. 
                  The role of high-purity calcium carbonate cannot be understated in modern industrial processes.
                </p>
                
                <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 my-12">
                  <h4 className="text-xl font-black text-brand-blue mb-4 uppercase tracking-widest">Key Performance Indicators</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <ShieldCheck className="text-brand-gold flex-shrink-0 mt-1" size={24} />
                      <span><strong>98.5% Purity</strong> - Maintained through rigorous laboratory testing.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap className="text-brand-gold flex-shrink-0 mt-1" size={24} />
                      <span><strong>24/7 Operations</strong> - Continuous supply chain reliability for our partners.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  As we move towards 2025, our focus expands towards further automation and reducing our carbon footprint. 
                  Strategic reclamation programs in Ratatotok ensure that the ecosystem remains vibrant post-mining, 
                  providing local communities with restored natural landscapes and sustainable water resources.
                </p>
              </div>
            </motion.div>

            {/* Tags & Share */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-8">
              <div className="flex flex-wrap gap-3">
                {['Mining', 'Innovation', 'Sulawesi', 'Industry'].map((tag, idx) => (
                  <span key={idx} className="px-4 py-1 bg-gray-50 text-gray-400 font-bold text-xs rounded-full uppercase tracking-widest border border-gray-100">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-brand-blue font-black uppercase tracking-widest text-sm hover:text-brand-gold transition-colors">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 text-brand-blue font-black uppercase tracking-widest text-sm hover:text-brand-gold transition-all" onClick={() => window.print()}>
                  <Printer size={20} />
                  <span>Print</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-brand-blue p-10 rounded-[3rem] text-white overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight relative z-10">Corporate Publication</h3>
              <p className="text-gray-300 font-medium mb-8 relative z-10 leading-relaxed">
                Stay updated with our quarterly reports and technical whitepapers regarding the mineral industry.
              </p>
              <button className="w-full bg-brand-gold text-brand-blue font-black py-4 rounded-2xl uppercase tracking-widest hover:bg-white transition-all relative z-10 shadow-xl">
                Read Whitepapers
              </button>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-black text-brand-blue uppercase tracking-widest border-b-2 border-brand-gold pb-2 inline-block">Related News</h3>
              <div className="space-y-8">
                 {[1, 2].map((i) => (
                   <div key={i} className="group cursor-pointer">
                      <div className="aspect-video rounded-3xl overflow-hidden mb-4 bg-gray-100">
                        <img src={`/blog/${i === 1 ? 'reclamation' : 'tech'}.webp`} alt="Related" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h4 className="text-lg font-black text-brand-blue group-hover:text-brand-gold transition-colors leading-tight mb-2 uppercase tracking-tight">
                        {i === 1 ? 'Reklamasi Hijau di Ratatotok Satu' : 'Digitalisasi Manajemen Rantai Pasok'}
                      </h4>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">March 2024</p>
                   </div>
                 ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
