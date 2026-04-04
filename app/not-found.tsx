'use client';

import Link from 'next/link';
import { Home, Phone, ArrowLeft, Package } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-blue flex items-center justify-center p-6 text-white text-center">
      <div className="max-w-2xl w-full">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-brand-gold/20 leading-none">404</h1>
          <div className="relative -mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Halaman Tidak Ditemukan</h2>
            <p className="text-gray-300 text-lg md:text-xl font-medium mb-8">
              Maaf, tautan yang Anda cari sudah tidak aktif atau berpindah.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Link 
            href="/produk"
            className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group"
          >
            <Package className="text-brand-gold mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="font-bold text-lg mb-1">Katalog Produk</h3>
            <p className="text-sm text-gray-400 italic">Product Catalog</p>
          </Link>

          <Link 
            href="/kontak"
            className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group"
          >
            <Phone className="text-brand-gold mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="font-bold text-lg mb-1">Hubungi Kami</h3>
            <p className="text-sm text-gray-400 italic">Contact Sales</p>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/"
            className="flex items-center gap-2 text-brand-gold font-bold hover:underline"
          >
            <Home size={18} />
            Kembali ke Beranda
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            Halaman Sebelumnya
          </button>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase">PT Wira Energi Utama</p>
        </div>
      </div>
    </div>
  );
}
