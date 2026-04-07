'use client';

import React, { forwardRef } from 'react';
import { Translation } from '../types';

interface PDFCompanyProfileProps {
  t: Translation;
  contactT: Translation['contact'];
}

const PDFCompanyProfile = forwardRef<HTMLDivElement, PDFCompanyProfileProps>(({ t, contactT }, ref) => {
  // Professional Grayscale & Brand Palette to bypass html2canvas modern color parsing issues
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
    white: '#FFFFFF'
  };

  return (
    <div 
      ref={ref}
      id="pdf-profile-root" 
      className="font-sans" 
      style={{ width: '1200px', backgroundColor: colors.white, color: colors.gray900 }}
    >
      {/* PAGE 1: FRONT COVER */}
      <div 
        className="pdf-page relative flex flex-col justify-between p-24 min-h-[1697px]"
        style={{ backgroundColor: colors.brandBlue, color: colors.white }}
      >
        <div className="absolute inset-0" style={{ opacity: 0.15 }}>
          <img src="/mining-bg.webp" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-10 mb-32">
            <img src="/2.svg" alt="Logo" className="w-32 h-32" />
            <div className="h-24 w-1.5" style={{ backgroundColor: colors.brandGold }} />
            <div>
              <h1 className="text-5xl font-black tracking-tighter uppercase">PT WIRA ENERGI UTAMA</h1>
              <p style={{ color: colors.brandGold }} className="font-bold tracking-[0.3em] uppercase text-lg mt-2">Executive Company Profile</p>
            </div>
          </div>
          
          <div className="mt-48 border-l-[12px] pl-16 py-12" style={{ borderLeftColor: colors.brandGold }}>
            <h2 className="text-[140px] font-black leading-[0.8] uppercase tracking-tighter">
              MINING<br />
              <span style={{ color: colors.brandGold }}>EXCELLENCE</span><br />
              PORTFOLIO
            </h2>
            <div className="h-2 w-48 mt-12" style={{ backgroundColor: colors.white }} />
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-end pb-12">
          <div className="max-w-xl">
             <p className="text-2xl font-medium leading-relaxed italic" style={{ color: colors.gray300 }}>
               "Sustainable Industrial Minerals. Powering Indonesia's Infrastructure and Metallurgy."
             </p>
          </div>
          <div className="text-right">
             <p style={{ color: colors.brandGold }} className="text-xl font-black uppercase tracking-[0.2em] mb-4">ESTABLISHED 2019</p>
             <p className="text-4xl font-black tracking-tighter">WWW.PTWEU.COMPANY</p>
          </div>
        </div>
      </div>

      {/* PAGE 2: CORPORATE LEGALITY & NIB */}
      <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.white }}>
        <div className="flex justify-between items-center mb-16 pb-6 border-b-4" style={{ borderBottomColor: colors.brandBlue }}>
           <h3 className="text-3xl font-black uppercase text-brand-blue" style={{ color: colors.brandBlue }}>Legal Standing & Compliance</h3>
           <img src="/2.svg" alt="Logo" className="w-16 h-16" />
        </div>

        <div className="grid grid-cols-1 gap-12">
           <div className="p-12 rounded-[3.5rem] border-2" style={{ borderColor: colors.gray100, backgroundColor: colors.gray50 }}>
              <h4 className="text-3xl font-black uppercase mb-6" style={{ color: colors.brandBlue }}>{t.legal.iup}</h4>
              <p className="text-xl font-bold uppercase tracking-widest text-brand-gold mb-10" style={{ color: colors.brandGold }}>{t.legal.validity}</p>
              
              <div className="grid grid-cols-1 gap-8">
                 {t.legal.legalities.map((item, idx) => (
                   <div key={idx} className="pb-8 border-b" style={{ borderBottomColor: colors.gray200 }}>
                      <h5 className="text-lg font-black uppercase mb-3" style={{ color: colors.gray800 }}>{item.title}</h5>
                      <p className="text-lg font-medium leading-relaxed" style={{ color: colors.gray600 }}>{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="mt-auto pt-10 flex justify-between items-center">
           <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.gray300 }}>Corporate Registry | North Sulawesi, Indonesia</p>
           <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.gray300 }}>Page 02</p>
        </div>
      </div>

      {/* PAGE 3: MINING PROCESS & GEOLOGY */}
      <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.gray50 }}>
        <div className="mb-16">
           <span className="text-lg font-bold uppercase tracking-[0.4em] mb-4 block" style={{ color: colors.brandGold }}>Technical Section 01</span>
           <h3 className="text-7xl font-black uppercase tracking-tighter" style={{ color: colors.brandBlue }}>{t.process.title}</h3>
           <p className="text-2xl font-bold uppercase tracking-widest mt-2" style={{ color: colors.gray400 }}>{t.process.subtitle}</p>
        </div>

        <div className="space-y-8">
           {t.process.steps.map((step, idx) => (
             <div key={idx} className="flex gap-10 items-center p-8 rounded-[3rem] border" style={{ backgroundColor: colors.white, borderColor: colors.gray100 }}>
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-black flex-shrink-0" style={{ backgroundColor: colors.brandBlue, color: colors.white }}>
                   {idx + 1}
                </div>
                <div>
                   <h4 className="text-2xl font-black uppercase mb-2" style={{ color: colors.brandBlue }}>{step.title}</h4>
                   <p className="text-xl font-medium" style={{ color: colors.gray600 }}>{step.desc}</p>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-20 p-12 rounded-[4rem] border-4 border-dashed" style={{ borderColor: colors.brandGold }}>
           <h3 className="text-4xl font-black uppercase mb-6" style={{ color: colors.brandBlue }}>{t.geology.title}</h3>
           <p className="text-2xl font-medium leading-relaxed" style={{ color: colors.gray700 }}>{t.geology.subtitle}</p>
        </div>

        <div className="mt-auto pt-10 text-right">
           <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.gray300 }}>Page 03</p>
        </div>
      </div>

      {/* PAGE 4: PRODUCTION & OPERATIONAL CAPACITY */}
      <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.white }}>
        <div className="grid grid-cols-2 gap-12 h-1/2">
           <div className="flex flex-col justify-center">
              <h3 className="text-7xl font-black uppercase tracking-tighter leading-none mb-8" style={{ color: colors.brandBlue }}>
                 Production<br />
                 Capacity<br />
                 <span style={{ color: colors.brandGold }}>Metrics</span>
              </h3>
              <p className="text-2xl font-bold uppercase tracking-widest" style={{ color: colors.gray400 }}>Operational Excellence</p>
           </div>
           <div className="grid grid-cols-1 gap-6">
              <div className="p-10 rounded-[3rem] text-center" style={{ backgroundColor: colors.gray50 }}>
                 <h4 className="text-7xl font-black mb-2" style={{ color: colors.brandBlue }}>150K</h4>
                 <p className="text-xl font-black uppercase tracking-widest" style={{ color: colors.gray400 }}>Tons / Month</p>
              </div>
              <div className="p-10 rounded-[3rem] text-center" style={{ backgroundColor: colors.gray900, color: colors.white }}>
                 <h3 className="text-4xl font-black uppercase mb-4" style={{ color: colors.brandGold }}>97.05 Ha</h3>
                 <p className="text-lg font-bold uppercase tracking-widest">Mining Concession</p>
              </div>
           </div>
        </div>

        <div className="mt-16 h-1/2">
           <h4 className="text-3xl font-black uppercase mb-10 pb-4 border-b-2" style={{ color: colors.brandBlue, borderBottomColor: colors.gray100 }}>Operational Stats Overview</h4>
           <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-[3rem] border" style={{ borderColor: colors.gray100 }}>
                 <h5 className="text-xl font-black uppercase mb-2" style={{ color: colors.gray500 }}>Crushing Power</h5>
                 <p className="text-5xl font-black" style={{ color: colors.brandBlue }}>250 TPH</p>
                 <p className="text-sm font-bold mt-2" style={{ color: colors.gray400 }}>Automated PLC System</p>
              </div>
              <div className="p-8 rounded-[3rem] border" style={{ borderColor: colors.gray100 }}>
                 <h5 className="text-xl font-black uppercase mb-2" style={{ color: colors.gray500 }}>Jetty Capacity</h5>
                 <p className="text-5xl font-black" style={{ color: colors.brandBlue }}>5000 DWT</p>
                 <p className="text-sm font-bold mt-2" style={{ color: colors.gray400 }}>Integrated Marine Port</p>
              </div>
           </div>
           
           <div className="mt-12 p-10 rounded-[3rem]" style={{ backgroundColor: colors.brandBlue, color: colors.white }}>
              <h5 className="text-3xl font-black uppercase mb-4" style={{ color: colors.brandGold }}>{t.operational.title}</h5>
              <p className="text-xl font-medium leading-relaxed">{t.operational.subtitle}</p>
           </div>
        </div>

        <div className="mt-auto pt-10 text-right">
           <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.gray300 }}>Page 04</p>
        </div>
      </div>

      {/* PAGE 5: FLEET & ASSETS */}
      <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.gray900, color: colors.white }}>
        <h3 className="text-7xl font-black uppercase text-center mb-24 tracking-tighter leading-none pt-20">
           Tier-1 Industrial<br />
           <span style={{ color: colors.brandGold }}>Fleet & Assets</span>
        </h3>
        
        <div className="grid grid-cols-1 gap-10">
           {t.fleet.items.map((fleet, idx) => (
             <div key={idx} className="p-12 rounded-[4rem] border flex justify-between items-center" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div>
                   <h4 className="text-4xl font-black uppercase" style={{ color: colors.brandGold }}>{fleet.name}</h4>
                   <p className="text-2xl font-bold uppercase tracking-widest opacity-60">OEM: {fleet.brand}</p>
                </div>
                <div className="text-right">
                   <p className="text-sm font-black uppercase opacity-40">Operational Status</p>
                   <p className="text-xl font-black uppercase" style={{ color: colors.brandGold }}>OPTIMIZED</p>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-auto pb-12">
            <div className="p-12 rounded-[4rem]" style={{ backgroundColor: colors.brandGold, color: colors.brandBlue }}>
               <h4 className="text-3xl font-black uppercase mb-4">Infrastructure Advantage</h4>
               <p className="text-xl font-bold leading-relaxed">{t.infrastructure.jetty}</p>
            </div>
        </div>

        <div className="pt-10 flex justify-between">
           <p className="text-sm font-black uppercase tracking-widest opacity-30">PT WEU Mobile & Static Asset Inventory</p>
           <p className="text-sm font-black uppercase tracking-widest opacity-30">Page 05</p>
        </div>
      </div>

      {/* PAGE 6: LABORATORY & QC WORFLOW */}
      <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.white }}>
        <div className="flex gap-10 items-end mb-20 pb-10 border-b-4" style={{ borderBottomColor: colors.gray100 }}>
           <h3 className="text-7xl font-black uppercase tracking-tighter" style={{ color: colors.brandBlue }}>{t.qa.title}</h3>
           <p className="text-3xl font-bold uppercase tracking-widest flex-1 text-right pb-4" style={{ color: colors.brandGold }}>QC PROTOCOL</p>
        </div>

        <p className="text-2xl font-medium leading-relaxed mb-16" style={{ color: colors.gray600 }}>{t.qa.text}</p>
        
        <div className="grid grid-cols-2 gap-10">
           {t.qa.labs.map((lab, idx) => (
             <div key={idx} className="p-8 rounded-[3rem] border flex items-center gap-6" style={{ borderColor: colors.gray100 }}>
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.brandGold }} />
                <span className="text-xl font-black uppercase" style={{ color: colors.brandBlue }}>{lab}</span>
             </div>
           ))}
        </div>

        <div className="mt-20">
           <h4 className="text-4xl font-black uppercase mb-12" style={{ color: colors.brandBlue }}>{t.qcWorkflow.title}</h4>
           <div className="space-y-4">
              {t.qcWorkflow.steps.map((step, idx) => (
                <div key={idx} className="flex justify-between items-center p-6 border-l-8" style={{ backgroundColor: colors.gray50, borderLeftColor: colors.brandGold }}>
                   <span className="text-xl font-black uppercase" style={{ color: colors.gray800 }}>{step.title}</span>
                   <span className="text-xs font-black uppercase opacity-40">Phase 0{idx + 1}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="mt-auto pt-10 text-right">
           <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.gray300 }}>Page 06</p>
        </div>
      </div>

      {/* PAGE 7: GOVERNANCE & SUSTAINABILITY */}
      <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.gray50 }}>
        <div className="grid grid-cols-2 gap-20">
           <div>
              <h3 className="text-5xl font-black uppercase mb-10 tracking-tighter" style={{ color: colors.brandBlue }}>{t.about.title}</h3>
              <p className="text-xl font-medium leading-relaxed italic border-l-4 pl-6" style={{ color: colors.gray600, borderLeftColor: colors.brandGold }}>
                 {t.about.visionText}
              </p>
           </div>
           <div>
              <h3 className="text-3xl font-black uppercase mb-10" style={{ color: colors.brandBlue }}>Excellence Standards</h3>
              <div className="grid grid-cols-3 gap-4">
                 {['ISO 9001', 'ISO 14001', 'ISO 45001'].map((iso, idx) => (
                   <div key={idx} className="p-4 rounded-2xl flex items-center justify-center text-xs font-black" style={{ backgroundColor: colors.brandBlue, color: colors.white }}>
                      {iso}
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="mt-24">
           <h3 className="text-4xl font-black uppercase mb-12" style={{ color: colors.brandBlue }}>Environmental & Social Commitment</h3>
           <div className="grid grid-cols-1 gap-8">
              <div className="p-10 rounded-[3rem] border" style={{ backgroundColor: colors.white, borderColor: colors.gray200 }}>
                 <h4 className="text-2xl font-black uppercase mb-4" style={{ color: colors.brandGold }}>{t.environment.title}</h4>
                 <p className="text-xl font-medium" style={{ color: colors.gray600 }}>{t.environment.text}</p>
              </div>
              <div className="p-10 rounded-[3rem] border" style={{ backgroundColor: colors.white, borderColor: colors.gray200 }}>
                 <h4 className="text-2xl font-black uppercase mb-4" style={{ color: colors.brandGold }}>{t.csr.title}</h4>
                 <p className="text-xl font-medium" style={{ color: colors.gray600 }}>{t.csr.text}</p>
              </div>
           </div>
        </div>

        <div className="mt-auto pt-10 text-right">
           <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.gray300 }}>Page 07</p>
        </div>
      </div>

      {/* PAGE 8: TECHNICAL PHOTOS */}
      <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.white }}>
        <h3 className="text-6xl font-black uppercase text-center mb-16 tracking-tighter" style={{ color: colors.brandBlue }}>Technical Documentation</h3>
        
        <div className="grid grid-cols-2 gap-8 flex-1">
           {t.advancedAbout.gallery.images.slice(0, 4).map((img, idx) => (
             <div key={idx} className="rounded-[3rem] overflow-hidden border-8" style={{ borderColor: colors.gray50 }}>
                <img src={img} alt="" className="w-full h-full object-cover" />
             </div>
           ))}
        </div>

        <p className="mt-10 text-center text-xl font-black uppercase tracking-widest" style={{ color: colors.gray300 }}>Visual evidence of operational excellence and field facilities</p>

        <div className="mt-auto pt-10 text-right">
           <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.gray300 }}>Page 08</p>
        </div>
      </div>

      {/* PAGE 9: BACK COVER */}
      <div 
        className="pdf-page p-24 min-h-[1697px] flex flex-col justify-center items-center text-center"
        style={{ backgroundColor: colors.gray900, color: colors.white }}
      >
        <div className="absolute inset-0" style={{ opacity: 0.1 }}>
          <img src="/office-manado.webp" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 w-full max-w-4xl">
           <img src="/2.svg" alt="Logo" className="w-48 h-48 mx-auto mb-16" />
           <h2 className="text-8xl font-black mb-10 uppercase tracking-tighter leading-none">Your <span style={{ color: colors.brandGold }}>Strategic</span> Mineral Partner</h2>
           <p className="text-3xl text-gray-400 font-medium mb-32 max-w-2xl mx-auto italic">Delivering industrial-grade limestone with precision and integrity.</p>
           
           <div className="grid grid-cols-1 gap-12 text-left">
              <div className="p-12 rounded-[4rem] border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                 <h4 style={{ color: colors.brandGold }} className="font-black uppercase tracking-[0.4em] text-xs mb-8">GLOBAL HEADQUARTERS</h4>
                 <div className="space-y-6">
                    <p className="text-3xl font-black">{contactT.phone}</p>
                    <p className="text-2xl font-medium">{contactT.address}</p>
                    <p className="text-2xl font-bold" style={{ color: colors.brandGold }}>wiraenergiutama@yahoo.com</p>
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
          height: 1697px;
          overflow: hidden;
          position: relative;
          page-break-after: always;
        }
      `}</style>
    </div>
  );
});

PDFCompanyProfile.displayName = 'PDFCompanyProfile';

export default PDFCompanyProfile;
