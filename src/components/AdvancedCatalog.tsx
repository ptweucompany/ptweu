import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, Factory, Droplets, Sprout, ChevronRight, ShieldCheck, Zap, Layers, Beaker, X, CheckCircle2, ChevronDown, Loader2, Flame, Construction, Microscope } from 'lucide-react';
import { Translation } from '../types';
import TechnicalDocumentationSection from './TechnicalDocumentationSection';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PDFProductCatalog from './PDFProductCatalog';
import { useLanguage } from '../context/LanguageContext';

interface AdvancedCatalogProps {
  t: Translation['advancedCatalog'];
}

export default function AdvancedCatalog({ t }: AdvancedCatalogProps) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const { t: fullT } = useLanguage();

  const handleDownload = async () => {
    if (!pdfRef.current || isGenerating) return;
    setIsGenerating(true);
    
    try {
      const rootElement = pdfRef.current;
      const pages = rootElement.querySelectorAll('.pdf-page');
      
      if (pages.length === 0) {
        throw new Error('No catalog pages found to export.');
      }

      // Professional delay for font/asset readiness
      await new Promise(r => setTimeout(r, 2000));
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = 210;
      const pdfHeight = 297;

      for (let i = 0; i < pages.length; i++) {
        const pageElement = pages[i] as HTMLElement;
        
        const canvas = await html2canvas(pageElement, { 
          scale: 2, 
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          width: 1200,
          height: 1697,
          onclone: (clonedDoc) => {
            // Aggressive CSS Sanitization for Modern Colors
            clonedDoc.querySelectorAll('*').forEach((el) => {
              const htmlEl = el as HTMLElement;
              if (!htmlEl.style) return;
              
              const style = window.getComputedStyle(htmlEl);
              const props = ['color', 'backgroundColor', 'borderColor', 'fill', 'stroke'];
              
              props.forEach(prop => {
                const val = (style as any)[prop];
                
                // If the color contains modern functions (lab, oklch, lch, etc.), html2canvas will crash.
                // We force these to safe Hex alternatives.
                if (val && (val.includes('oklch') || val.includes('lab') || val.includes('oklab') || val.includes('lch'))) {
                  if (prop === 'backgroundColor') {
                    if (htmlEl.classList.contains('bg-brand-blue')) htmlEl.style.backgroundColor = '#0A2463';
                    else if (htmlEl.classList.contains('bg-brand-gold')) htmlEl.style.backgroundColor = '#FFD700';
                    else if (htmlEl.classList.contains('bg-gray-900')) htmlEl.style.backgroundColor = '#111824';
                    else if (htmlEl.classList.contains('bg-white')) htmlEl.style.backgroundColor = '#ffffff';
                    else htmlEl.style.backgroundColor = 'transparent';
                  } else if (prop === 'color') {
                    if (htmlEl.classList.contains('text-brand-gold')) htmlEl.style.color = '#FFD700';
                    else if (htmlEl.classList.contains('text-white')) htmlEl.style.color = '#ffffff';
                    else if ((htmlEl.textContent?.trim().length ?? 0) > 0) htmlEl.style.color = '#0A2463';
                  } else {
                    htmlEl.style.setProperty(prop, 'inherit', 'important');
                  }
                }
              });
            });
          }
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
      }
      
      pdf.save(`PT_WEU_Product_Catalog_${new Date().getFullYear()}.pdf`);
      
    } catch (error) {
      console.error('Catalog Generation Error:', error);
      alert('Unable to generate professional PDF. Please contact support.');
    } finally {
      setIsGenerating(false);
    }
  };

  const iconMap: Record<string, any> = {
    Factory, Droplets, Sprout, ShieldCheck, Zap, Layers, Beaker, Flame, Construction, Microscope
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-brand-blue overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-full opacity-10">
          <img src="/mining-bg.webp" alt="Catalog BG" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-brand-gold text-brand-blue rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <FileText size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            {t.hero.title}
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {t.categories.map((category, catIdx) => (
            <div key={catIdx} className="mb-24 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-4 border-gray-100 pb-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-2 uppercase tracking-tight">{category.title}</h2>
                  <p className="text-xl text-gray-400 font-bold uppercase tracking-widest">{category.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-6xl font-black text-gray-100">0{catIdx + 1}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => item.id && setSelectedProductId(item.id)}
                    className={`bg-gray-50 p-10 rounded-[3rem] border border-transparent hover:border-brand-gold hover:bg-white hover:shadow-2xl transition-all group flex flex-col md:flex-row gap-8 ${item.id ? 'cursor-pointer' : ''}`}
                  >
                    {item.image && (
                      <div className="w-full md:w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl font-black text-brand-blue group-hover:text-brand-gold transition-colors">{item.name}</h3>
                        <div className="flex space-x-2">
                          {item.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="bg-brand-blue/5 text-brand-blue text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 font-bold mb-8 flex items-center">
                        <Layers size={18} className="mr-3 text-brand-gold" />
                        {item.specs}
                      </p>
                      <button 
                        className="flex items-center text-sm font-black text-brand-blue uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.id) setSelectedProductId(item.id);
                        }}
                      >
                        {item.id ? 'View Technical Sheet' : 'Specs Only'} <ChevronRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Page Modal - Industrial Intelligence Upgrade */}
      <AnimatePresence>
        {selectedProductId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProductId(null)}
              className="absolute inset-0 bg-brand-blue/80 backdrop-blur-md"
            />
            
            <motion.div
              key={selectedProductId} // Key ensures animation on product switch
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-white rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(10,22,40,0.5)] flex flex-col md:flex-row h-[90vh] md:h-[85vh]"
            >
              {(() => {
                const product = (fullT.productPages as any)[selectedProductId];
                if (!product) return null;

                const categoryStyles = {
                   raw: "bg-gray-100 text-gray-600 border-gray-200",
                   processed: "bg-brand-blue/5 text-brand-blue border-brand-blue/10",
                   advanced: "bg-brand-gold/10 text-brand-blue border-brand-gold/20"
                };

                return (
                  <>
                  <button 
                    onClick={() => setSelectedProductId(null)}
                    className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white md:text-brand-blue md:bg-gray-100 md:hover:bg-gray-200 rounded-full flex items-center justify-center transition-all shadow-lg"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>

                  <div className="w-full md:w-[45%] h-64 md:h-full bg-brand-blue relative flex-shrink-0 overflow-hidden">
                    <motion.img 
                      key={`${selectedProductId}-img`}
                      initial={{ scale: 1.1, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      src={product.hero.image} 
                      alt={product.hero.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/20 to-transparent" />
                    
                    <div className="absolute bottom-10 left-10 right-10">
                      <div className={`inline-flex items-center px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest mb-6 ${categoryStyles[product.category as keyof typeof categoryStyles]}`}>
                         {product.category} Material
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">
                        {product.hero.title}
                      </h3>
                      
                      {/* Flow Indicator */}
                       <div className="flex items-center gap-2 opacity-60 flex-wrap">
                          {product.parent && (fullT.productPages as any)[product.parent] && (
                            <>
                              {(fullT.productPages as any)[product.parent].parent && (fullT.productPages as any)[(fullT.productPages as any)[product.parent].parent] && (
                                <>
                                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                                    {(fullT.productPages as any)[(fullT.productPages as any)[product.parent].parent].hero.title}
                                  </span>
                                  <ChevronRight size={12} className="text-white/30" />
                                </>
                              )}
                              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                                {(fullT.productPages as any)[product.parent].hero.title}
                              </span>
                              <ChevronRight size={12} className="text-white/30" />
                            </>
                          )}
                          <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{product.hero.title}</span>
                       </div>
                    </div>
                  </div>

                  <div className="flex-1 p-8 md:p-14 overflow-y-auto custom-scrollbar">
                    {/* Header Details */}
                    <div className="mb-10">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Industrial Insight</h4>
                      <p className="text-lg text-gray-600 font-medium leading-relaxed italic border-l-4 border-brand-gold pl-6">
                        {product.description}
                      </p>
                    </div>

                    {/* Technical Specs Summary */}
                    <div className="mb-10">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Core Specifications</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {product.stats.slice(0, 4).map((stat: any, i: number) => {
                          const Icon = iconMap[stat.icon] || ShieldCheck;
                          return (
                            <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                               <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-blue shadow-sm">
                                  <Icon size={20} />
                               </div>
                               <div>
                                  <p className="text-[10px] font-black text-gray-400 uppercase leading-none mb-1">{stat.label}</p>
                                  <p className="text-sm font-bold text-brand-blue">{stat.value}</p>
                               </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Applications Section */}
                    <div className="mb-10">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Primary Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.items.map((app: any, i: number) => (
                           <div key={i} className="flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
                              <CheckCircle2 size={14} className="text-brand-gold" />
                              {app.title}
                           </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Advantages (Synchronized from Product Details) */}
                    <div className="mb-10">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Key Advantages</h4>
                      <div className="grid grid-cols-1 gap-3">
                         {product.overview.features.map((feature: string, i: number) => (
                           <div key={i} className="flex items-start gap-3">
                              <Zap size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                              <span className="text-sm font-medium text-gray-700">{feature}</span>
                           </div>
                         ))}
                      </div>
                    </div>

                    {/* Derivative Products (Critical Mapping) */}
                    {product.derivatives && product.derivatives.length > 0 && (
                      <div className="mb-12 p-6 bg-gray-900 rounded-3xl text-white">
                        <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">Downstream / Related Products</h4>
                        <div className="grid grid-cols-1 gap-3">
                           {product.derivatives.map((derId: string) => {
                             const derProduct = (fullT.productPages as any)[derId];
                             if (!derProduct) return null;
                             return (
                               <button 
                                 key={derId}
                                 onClick={() => setSelectedProductId(derId)}
                                 className="flex items-center justify-between group p-3 rounded-xl hover:bg-white/5 transition-all border border-white/5 hover:border-brand-gold/30"
                               >
                                 <div className="flex items-center gap-4">
                                   <div className="w-2 h-2 bg-brand-gold rounded-full group-hover:scale-150 transition-transform" />
                                   <span className="text-xs font-black uppercase tracking-widest">{derProduct.hero.title}</span>
                                 </div>
                                 <ChevronRight size={16} className="text-gray-600 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                               </button>
                             );
                           })}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                      <a 
                        href={`https://wa.me/628114344168?text=Halo%20PT%20WEU,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.hero.title)}.%20Mohon%20info%20lebih%20lanjut.`}
                        className="flex-1 py-5 bg-brand-blue text-white rounded-2xl font-black uppercase tracking-[0.1em] flex items-center justify-center hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20"
                      >
                        Request Quotation
                      </a>
                      <a 
                        href={`/produk/${selectedProductId}`}
                        className="px-8 py-5 bg-gray-100 text-brand-blue rounded-2xl font-black uppercase tracking-[0.1em] flex items-center justify-center hover:bg-gray-200 transition-all"
                      >
                        Full Details
                      </a>
                    </div>
                  </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Industrial Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-brand-blue mb-4 uppercase tracking-tight">{t.industrial.title}</h2>
            <div className="w-24 h-2 bg-brand-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.industrial.items.map((item, idx) => {
              const Icon = iconMap[item.icon] || Factory;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group text-center"
                >
                  <div className="w-24 h-24 bg-brand-blue rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 rotate-6 group-hover:rotate-0 transition-transform shadow-xl shadow-brand-blue/10">
                    <Icon size={48} className="text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-blue mb-4 uppercase tracking-tight">{item.name}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.usage}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Documentation Section */}
      <TechnicalDocumentationSection t={t.documentation} />

      {/* Decorative Focus Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="/Gemini_Generated_Image_z286q7z286q7z286.webp" 
          alt="Technical Excellence" 
          className="w-full h-full object-cover transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end justify-center pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 px-4 leading-tight">
              Kualitas Teruji di Setiap Butir Mineral
            </h3>
            <div className="w-20 h-2 bg-brand-gold mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 bg-gray-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight">{t.download.title}</h2>
          <p className="text-2xl text-gray-400 font-medium mb-12">
            {t.download.description}
          </p>
          <div className="flex flex-col items-center gap-6">
            <motion.button
              onClick={handleDownload}
              disabled={isGenerating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-brand-gold text-brand-blue font-black px-12 py-6 rounded-full text-xl uppercase tracking-tight shadow-2xl shadow-brand-gold/20 disabled:opacity-50 disabled:cursor-wait"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={28} className="mr-4 animate-spin" />
                  Preparing Catalog...
                </>
              ) : (
                <>
                  <Download size={28} className="mr-4" />
                  {t.download.button}
                </>
              )}
            </motion.button>
            {t.download.fileSize && (
              <div className="flex items-center gap-4 text-gray-500 font-bold uppercase tracking-widest text-sm">
                <span>{t.download.fileSize}</span>
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                <span>{t.download.version}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hidden PDF Content */}
      <div className="fixed left-[-9999px] top-[-9999px] pointer-events-none overflow-hidden">
        <div ref={pdfRef}>
           <PDFProductCatalog t={t} profileT={fullT.profile} contactT={fullT.contact} />
        </div>
      </div>

      {/* Preparing Overlay */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-brand-blue/95 flex flex-col items-center justify-center text-center p-6"
          >
            <div className="relative mb-12">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="w-40 h-40 border-4 border-brand-gold/20 border-t-brand-gold rounded-full"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <FileText size={48} className="text-brand-gold animate-pulse" />
               </div>
            </div>
            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Preparing Your Catalog</h2>
            <p className="text-xl text-gray-400 max-w-md font-medium">
              We are generating your high-quality product documentation. Please wait a moment...
            </p>
            <div className="mt-12 flex gap-1 items-center">
               <span className="w-2 h-2 bg-brand-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
               <span className="w-2 h-2 bg-brand-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
               <span className="w-2 h-2 bg-brand-gold rounded-full animate-bounce" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
