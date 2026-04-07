'use client';

import { motion } from 'motion/react';
import { Calendar, Tag, ArrowRight, Newspaper, TrendingUp, Shield, Leaf } from 'lucide-react';
import { Translation } from '../types';
import Link from 'next/link';

interface AdvancedBlogProps {
  t: Translation['advancedBlog'];
}

export default function AdvancedBlog({ t }: AdvancedBlogProps) {
  const featuredPost = t.posts[0];
  const otherPosts = t.posts.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/Hero_v3.webp')] bg-cover bg-center grayscale" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white mb-4 uppercase tracking-tighter"
          >
            {t.hero.title}
          </motion.h1>
          <div className="w-24 h-2 bg-brand-gold mb-8 rounded-full" />
          <p className="text-xl text-gray-300 font-bold uppercase tracking-[0.3em]">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row"
          >
            <div className="lg:w-3/5 h-[400px] lg:h-auto relative">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
              <div className="absolute top-8 left-8 bg-brand-gold text-brand-blue font-black px-6 py-2 rounded-full uppercase tracking-widest text-sm shadow-xl">
                Featured Article
              </div>
            </div>
            <div className="lg:w-2/5 p-12 md:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6">
                <span className="flex items-center text-gray-400 font-bold text-xs uppercase tracking-widest">
                  <Calendar size={14} className="mr-2 text-brand-gold" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center text-gray-400 font-bold text-xs uppercase tracking-widest">
                  <Tag size={14} className="mr-2 text-brand-gold" />
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-8 leading-tight group hover:text-brand-gold transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10">
                {featuredPost.excerpt}
              </p>
              <Link href={`/blog/${featuredPost.id}`} className="inline-flex items-center text-lg font-black text-brand-blue uppercase tracking-widest hover:translate-x-4 transition-transform group">
                Read Publication <ArrowRight size={20} className="ml-3 text-brand-gold group-hover:scale-125 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {otherPosts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden group border border-transparent hover:border-brand-gold/30 transition-all flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/3 aspect-square sm:aspect-auto relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-blue/10" />
                </div>
                <div className="sm:w-2/3 p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                       <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">{post.category}</span>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">•</span>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-black text-brand-blue mb-4 group-hover:text-brand-gold transition-colors leading-tight">{post.title}</h3>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
                  </div>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center text-xs font-black text-brand-blue uppercase tracking-[0.2em] group-hover:translate-x-2 transition-all">
                    View Details <ArrowRight size={14} className="ml-2 text-brand-gold" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Filter Floating (Visual) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center gap-6">
              {['Industry', 'Technology', 'Sustainability', 'Global Markets', 'Community'].map((cat, idx) => (
                <div key={idx} className="flex items-center space-x-3 px-8 py-4 bg-gray-50 rounded-full border border-gray-100 hover:border-brand-gold hover:bg-white hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-2 h-2 bg-brand-gold rounded-full" />
                  <span className="text-sm font-black text-brand-blue group-hover:text-brand-gold uppercase tracking-widest">{cat}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Newsletter / Publication Access */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Newspaper size={60} className="text-brand-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">Stay Updated on Industrial Minerals</h2>
          <p className="text-xl text-gray-300 font-medium mb-12">
            Subscribe to our corporate newsletter for exclusive quarterly reports and industry technical insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your professional email"
              className="flex-grow px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-4 focus:ring-brand-gold/20 focus:border-brand-gold transition-all"
            />
            <button className="bg-brand-gold text-brand-blue font-black px-10 py-4 rounded-2xl uppercase tracking-widest hover:bg-white transition-all shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
