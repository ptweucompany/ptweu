'use client';

import React, { forwardRef } from 'react';
import { Translation } from '../types';

interface PDFProductCatalogProps {
  t: Translation['advancedCatalog'];
  productPages: Translation['productPages'];
  profileT: Translation['profile'];
  contactT: Translation['contact'];
}

const PDFProductCatalog = forwardRef<HTMLDivElement, PDFProductCatalogProps>(({ t, productPages, profileT, contactT }, ref) => {
  // Hardcoded colors for crash-proof rendering
  const colors = {
    brandBlue: '#0A2463',
    brandGold: '#FFD700',
    gray900: '#111827',
    gray800: '#1F2937',
    gray700: '#374151',
    gray600: '#4B5563',
    gray500: '#6B7280',
    gray400: '#9CA3AF',
    gray300: '#D1D5DB',
    gray200: '#E5E7EB',
    gray100: '#F3F4F6',
    gray50: '#F9FAFB',
    white: '#FFFFFF',
    transparent: 'transparent'
  };

  // Helper to get product details
  const getProductDetail = (id: string) => (productPages as any)[id];

  return (
    <div 
      ref={ref}
      id="pdf-catalog-root" 
      className="font-sans" 
      style={{ width: '1200px', backgroundColor: colors.white, color: colors.gray900 }}
    >
      {/* FRONT COVER - PAGE 1 */}
      <div 
        className="pdf-page relative flex flex-col justify-between p-20 min-h-[1697px]"
        style={{ backgroundColor: colors.brandBlue, color: colors.white }}
      >
        <div className="absolute inset-0" style={{ opacity: 0.2 }}>
          <img src="/mining-bg.webp" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-20">
            <img src="/2.svg" alt="Logo" className="w-24 h-24" />
            <div className="h-20 w-1" style={{ backgroundColor: colors.brandGold }} />
            <div>
              <h1 className="text-4xl font-black tracking-tighter uppercase">PT WIRA ENERGI UTAMA</h1>
              <p style={{ color: colors.brandGold }} className="font-bold tracking-widest uppercase text-sm">Industrial Mining & Supplier</p>
            </div>
          </div>
          
          <div className="mt-40">
            <h2 className="text-[120px] font-black leading-[0.9] mb-10 uppercase tracking-tighter">
              OFFICIAL<br />
              <span style={{ color: colors.brandGold }}>PRODUCT</span><br />
              CATALOG
            </h2>
            <div className="h-4 w-32 mt-8" style={{ backgroundColor: colors.white }} />
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-end">
          <div className="max-w-md">
            <p className="text-xl font-medium leading-relaxed italic border-l-4 pl-6" style={{ color: colors.gray300, borderLeftColor: colors.brandGold }}>
              "Sustainable Quality in Every Mineral Grain. Delivering Excellence Across Industries."
            </p>
          </div>
          <div className="text-right">
            <p style={{ color: colors.brandGold }} className="text-sm font-black uppercase tracking-widest mb-2">Edition 2024</p>
            <p className="text-3xl font-black tracking-tight">PTWEU.COMPANY</p>
          </div>
        </div>
      </div>

      {/* INTRODUCTION PAGE - PAGE 2 */}
      <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.white }}>
        <div className="flex justify-between items-center mb-24 pb-8 border-b-2" style={{ borderBottomColor: colors.gray100 }}>
           <img src="/2.svg" alt="Logo" className="w-12 h-12" />
           <span className="text-xs font-black uppercase tracking-widest" style={{ color: colors.gray400 }}>Company Overview</span>
        </div>

        <div className="max-w-3xl">
          <h3 className="text-6xl font-black mb-10 uppercase tracking-tighter leading-tight" style={{ color: colors.brandBlue }}>
            Leading the way in <span style={{ color: colors.brandGold }}>Industrial Minerals</span>
          </h3>
          <p className="text-2xl leading-relaxed mb-12" style={{ color: colors.gray600 }}>
            PT Wira Energi Utama is a premier mining and general trading company based in North Sulawesi, Indonesia. 
            We specialize in high-purity limestone extraction and its high-value derivatives.
          </p>
          
          <div className="grid grid-cols-2 gap-12 mt-20">
            <div className="p-10 rounded-[3rem]" style={{ backgroundColor: colors.gray50 }}>
              <h4 className="text-5xl font-black mb-2" style={{ color: colors.brandBlue }}>150K</h4>
              <p className="font-bold uppercase tracking-widest text-sm" style={{ color: colors.gray500 }}>MT Monthly Capacity</p>
            </div>
            <div className="p-10 rounded-[3rem]" style={{ backgroundColor: colors.gray50 }}>
              <h4 className="text-5xl font-black mb-2" style={{ color: colors.brandBlue }}>97.05</h4>
              <p className="font-bold uppercase tracking-widest text-sm" style={{ color: colors.gray500 }}>Hectares Mining Area</p>
            </div>
            <div className="p-10 rounded-[3rem]" style={{ backgroundColor: colors.gray50 }}>
              <h4 className="text-5xl font-black mb-2" style={{ color: colors.brandBlue }}>250</h4>
              <p className="font-bold uppercase tracking-widest text-sm" style={{ color: colors.gray500 }}>TPH Crushing Power</p>
            </div>
            <div className="p-10 rounded-[3rem]" style={{ backgroundColor: colors.gray50 }}>
              <h4 className="text-5xl font-black mb-2" style={{ color: colors.brandBlue }}>JETTY</h4>
              <p className="font-bold uppercase tracking-widest text-sm" style={{ color: colors.gray500 }}>Private Deep Sea Port</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-20 border-t flex items-center justify-between" style={{ borderTopColor: colors.gray100 }}>
           <div className="flex items-center gap-10">
              <div className="text-center">
                 <p className="text-[10px] font-black uppercase mb-1" style={{ color: colors.gray400 }}>Purity</p>
                 <p className="text-xl font-black" style={{ color: colors.brandBlue }}>99.9%</p>
              </div>
              <div className="w-px h-10" style={{ backgroundColor: colors.gray200 }} />
              <div className="text-center">
                 <p className="text-[10px] font-black uppercase mb-1" style={{ color: colors.gray400 }}>Standards</p>
                 <p className="text-xl font-black" style={{ color: colors.brandBlue }}>SNI/ISO</p>
              </div>
           </div>
           <p className="text-xs font-black uppercase tracking-[0.5em]" style={{ color: colors.gray300 }}>Global Quality | Page 02</p>
        </div>
      </div>

      {/* DYNAMIC CATEGORY & PRODUCT PAGES */}
      {t.categories.map((category, catIdx) => (
        <React.Fragment key={catIdx}>
          {/* CATEGORY SUMMARY - PAGE X */}
          <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.gray50 }}>
            <div className="mb-20">
               <span style={{ color: colors.brandGold }} className="text-sm font-black uppercase tracking-[0.3em] mb-4 block underline">Section 0{catIdx + 1}</span>
               <h3 className="text-[110px] font-black uppercase tracking-tighter mb-4 leading-[0.8]" style={{ color: colors.brandBlue }}>{category.title}</h3>
               <p className="text-3xl font-bold uppercase tracking-[0.1em] mt-8 opacity-60" style={{ color: colors.gray700 }}>{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-12 mt-20">
              {category.items.map((item, idx) => (
                <div key={idx} className="p-12 rounded-[4rem] shadow-xl border flex gap-12 items-center" style={{ backgroundColor: colors.white, borderColor: colors.gray100 }}>
                  <div className="w-68 h-68 flex-shrink-0 rounded-[3.5rem] overflow-hidden border-8" style={{ borderColor: colors.gray50 }}>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                       <h4 className="text-5xl font-black tracking-tight" style={{ color: colors.brandBlue }}>{item.name}</h4>
                       <div className="flex gap-2">
                         {item.tags.map((tag, tIdx) => (
                           <span key={tIdx} style={{ backgroundColor: '#F0F4FF', color: colors.brandBlue }} className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">{tag}</span>
                         ))}
                       </div>
                    </div>
                    <p className="text-2xl font-bold mb-8 italic" style={{ color: colors.gray600 }}>"{item.specs}"</p>
                    
                    {item.details && (
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.brandGold }} />
                            <span className="text-sm font-bold uppercase tracking-tight" style={{ color: colors.gray700 }}>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-10 text-right">
              <p className="text-sm font-black uppercase tracking-[0.5em]" style={{ color: colors.gray300 }}>Section Summary | Page {catIdx + 3}</p>
            </div>
          </div>

          {/* INDIVIDUAL TECHNICAL DATASHEETS */}
          {category.items.map((item, idx) => {
            const product = getProductDetail(item.id);
            if (!product) return null;

            return (
              <div key={`detail-${item.id}`} className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.white }}>
                {/* Header Banner */}
                <div className="flex justify-between items-start mb-16 pb-8 border-b-4" style={{ borderBottomColor: colors.gray100 }}>
                   <div>
                      <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: colors.gray400 }}>TECHNICAL DATASHEET | {product.category.toUpperCase()}</span>
                      <h3 className="text-7xl font-black uppercase tracking-tighter" style={{ color: colors.brandBlue }}>{product.hero.title}</h3>
                   </div>
                   <img src="/2.svg" alt="Logo" className="w-16 h-16" />
                </div>

                {/* Hero / Specs Grid */}
                <div className="grid grid-cols-2 gap-16 mb-20">
                   <div className="rounded-[4rem] overflow-hidden border-8 shadow-2xl" style={{ borderColor: colors.gray50 }}>
                      <img src={product.hero.image} alt={product.hero.title} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex flex-col justify-center">
                       <h4 className="text-xs font-black uppercase tracking-[0.5em] mb-6" style={{ color: colors.brandGold }}>Mission & Insight</h4>
                       <p className="text-2xl font-medium leading-relaxed italic border-l-[10px] pl-10" style={{ color: colors.gray600, borderLeftColor: colors.brandGold }}>
                          {product.description}
                       </p>
                       <div className="grid grid-cols-2 gap-4 mt-12">
                          {product.stats.slice(0, 4).map((stat: any, sIdx: number) => (
                             <div key={sIdx} className="p-6 rounded-[2.5rem] border" style={{ borderColor: colors.gray100, backgroundColor: colors.gray50 }}>
                                <p className="text-[10px] font-black uppercase text-gray-400 mb-1 leading-none">{stat.label}</p>
                                <p className="text-xl font-bold" style={{ color: colors.brandBlue }}>{stat.value}</p>
                             </div>
                          ))}
                       </div>
                   </div>
                </div>

                {/* Detailed Analysis Tables */}
                <div className="grid grid-cols-2 gap-20">
                   <div>
                      <h4 className="text-2xl font-black uppercase mb-10 pb-4 border-b-2" style={{ color: colors.brandBlue, borderBottomColor: colors.gray100 }}>{product.specifications.title}</h4>
                      <div className="space-y-4">
                         {product.specifications.table.map((row: any, rIdx: number) => (
                            <div key={rIdx} className="flex justify-between items-center py-4 border-b border-dashed" style={{ borderBottomColor: colors.gray200 }}>
                               <span className="text-lg font-black uppercase text-gray-500">{row.label}</span>
                               <span className="text-xl font-bold" style={{ color: colors.brandBlue }}>{row.value}</span>
                            </div>
                         ))}
                      </div>
                   </div>
                   <div>
                      <h4 className="text-2xl font-black uppercase mb-10 pb-4 border-b-2" style={{ color: colors.brandBlue, borderBottomColor: colors.gray100 }}>{product.overview.title}</h4>
                      <div className="space-y-6">
                         <p className="text-lg font-medium leading-relaxed" style={{ color: colors.gray700 }}>{product.overview.content}</p>
                         <div className="grid grid-cols-1 gap-3 pt-6">
                            {product.overview.features.map((feature: string, fIdx: number) => (
                               <div key={fIdx} className="flex items-center gap-4">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.brandGold }} />
                                  <span className="text-sm font-bold uppercase tracking-tight" style={{ color: colors.gray900 }}>{feature}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                {/* Applications Grid */}
                <div className="mt-20">
                   <h4 className="text-2xl font-black uppercase mb-10 pb-4 border-b-2" style={{ color: colors.brandBlue, borderBottomColor: colors.gray100 }}>{product.applications.title}</h4>
                   <div className="grid grid-cols-2 gap-10">
                      {product.applications.items.slice(0, 4).map((app: any, aIdx: number) => (
                         <div key={aIdx} className="p-8 rounded-[3rem]" style={{ backgroundColor: colors.gray50 }}>
                            <h5 className="text-xl font-black uppercase mb-3" style={{ color: colors.brandBlue }}>{app.title}</h5>
                            <p className="text-sm font-medium leading-relaxed" style={{ color: colors.gray500 }}>{app.desc}</p>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Footer Signature */}
                <div className="mt-auto pt-10 border-t flex justify-between items-end" style={{ borderTopColor: colors.gray100 }}>
                   <div className="max-w-md">
                      <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: colors.brandGold }}>Quality Guarantee</p>
                      <p className="text-[10px] font-bold uppercase leading-relaxed" style={{ color: colors.gray500 }}>Every technical parameter is verified by our integrated laboratory system. Purity exceeding market standards for high-value industrial processes.</p>
                   </div>
                   <p className="text-sm font-black uppercase tracking-[0.5em]" style={{ color: colors.gray300 }}>Datasheet | {product.id.toUpperCase()}</p>
                </div>
              </div>
            );
          })}
        </React.Fragment>
      ))}

      {/* INDUSTRIAL APPLICATIONS */}
      <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.brandBlue, color: colors.white }}>
        <h3 className="text-7xl font-black text-center mb-24 uppercase tracking-tighter pt-12">Strategic Industrial <span style={{ color: colors.brandGold }}>Solutions</span></h3>
        
        <div className="grid grid-cols-2 gap-16">
          {t.industrial.items.map((item, idx) => (
            <div key={idx} className="p-12 rounded-[3.5rem] border text-center" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
               <div className="w-24 h-24 flex items-center justify-center mx-auto mb-10 shadow-xl rounded-[2rem]" style={{ backgroundColor: colors.brandGold }}>
                 <img src={idx % 2 === 0 ? "/2.svg" : "/favicon.svg"} alt="" className="w-12 h-12 grayscale brightness-0 invert opacity-40 shrink-0" />
               </div>
               <h4 className="text-4xl font-black mb-4 uppercase tracking-tight">{item.name}</h4>
               <p className="text-xl font-medium leading-relaxed italic" style={{ color: colors.gray400 }}>{item.usage}</p>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-20 border-t flex justify-between items-end" style={{ borderTopColor: 'rgba(255,255,255,0.1)' }}>
           <div className="max-w-lg">
              <h5 style={{ color: colors.brandGold }} className="font-black uppercase tracking-[0.2em] mb-4 text-xl">Technical Excellence Protocol</h5>
              <p className="text-lg font-medium leading-relaxed" style={{ color: colors.gray400 }}>Our minerals are specifically engineered to meet the strict chemical and physical requirements of global industries, ensuring consistency and reliability across every batch shipment.</p>
           </div>
           <p className="text-sm font-black uppercase tracking-[0.5em]" style={{ color: 'rgba(255,255,255,0.3)' }}>Official Catalog | End Section</p>
        </div>
      </div>

      {/* BACK COVER / CONTACT */}
      <div className="pdf-page p-24 min-h-[1697px] flex flex-col justify-center items-center text-center" style={{ backgroundColor: '#0A0E1A', color: colors.white }}>
        <div className="absolute inset-0" style={{ opacity: 0.1 }}>
          <img src="/office-manado.webp" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 w-full max-w-4xl">
           <img src="/2.svg" alt="Logo" className="w-48 h-48 mx-auto mb-16" />
           <h2 className="text-8xl font-black mb-10 uppercase tracking-tighter leading-[0.9]">Ready to <span style={{ color: colors.brandGold }}>Elevate</span> your production?</h2>
           <p className="text-3xl font-medium mb-32 max-w-2xl mx-auto italic" style={{ color: colors.gray400 }}>Contact our technical sales team for customized mineral solutions and precision industrial quotations.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div className="p-12 rounded-[4rem] border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                 <h4 style={{ color: colors.brandGold }} className="font-black uppercase tracking-widest text-sm mb-10">Global Headquarters</h4>
                 <p className="text-2xl font-bold leading-relaxed mb-8">{contactT.address}</p>
                 <p className="text-xl font-black opacity-60">ADMINISTRATION 24/7</p>
              </div>
              <div className="p-12 rounded-[4rem] border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                 <h4 style={{ color: colors.brandGold }} className="font-black uppercase tracking-widest text-sm mb-10">Contact Channels</h4>
                 <div className="space-y-6">
                    <p className="text-3xl font-black">{contactT.phone}</p>
                    <p className="text-2xl font-black">wiraenergiutama@yahoo.com</p>
                    <p className="text-4xl font-black mt-10" style={{ color: colors.brandGold }}>PTWEU.COMPANY</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="relative z-10 mt-40 pt-20 border-t w-full" style={{ borderTopColor: 'rgba(255,255,255,0.05)' }}>
           <p className="text-sm font-black uppercase tracking-[0.8em]" style={{ color: colors.gray500 }}>© 2024 PT WIRA ENERGI UTAMA. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

      <style jsx>{`
        .pdf-page {
          width: 1200px;
          height: 1697px; /* A4 Ratio */
          overflow: hidden;
          position: relative;
          page-break-after: always;
        }
      `}</style>
    </div>
  );
});

PDFProductCatalog.displayName = 'PDFProductCatalog';

export default PDFProductCatalog;
