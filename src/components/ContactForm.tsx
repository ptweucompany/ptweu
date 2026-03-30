'use client';

import React, { useState } from 'react';
import { Translation } from '../types';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  t: Translation['contact'];
}

export default function ContactForm({ t }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xykbeevg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-100 p-12 rounded-[3rem] text-center"
      >
        <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-black text-green-900 mb-4">{t.form.success}</h3>
        <p className="text-green-700 font-medium">Our team will get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-green-600 font-bold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">{t.form.name}</label>
          <input
            required
            name="name"
            type="text"
            placeholder="John Doe"
            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all font-medium"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">{t.form.email}</label>
          <input
            required
            name="email"
            type="email"
            placeholder="john@example.com"
            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all font-medium"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">{t.form.company}</label>
        <input
          required
          name="company"
          type="text"
          placeholder="Acme Corp"
          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all font-medium"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">{t.form.message}</label>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="How can we help you?"
          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all font-medium resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full group relative overflow-hidden bg-brand-blue text-white font-black py-5 px-8 rounded-2xl transition-all shadow-xl shadow-brand-blue/20 hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        <span className="relative z-10 text-xl uppercase tracking-tight">{status === 'submitting' ? 'Sending...' : t.form.send}</span>
        <Send className={`w-6 h-6 relative z-10 transition-transform ${status === 'submitting' ? 'translate-x-12 opacity-0' : 'group-hover:translate-x-1'}`} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-center font-bold">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  );
}
