import { Translation } from '../types';

interface PDFProductCatalogProps {
  t: Translation['advancedCatalog'];
  profileT: Translation['profile'];
  contactT: Translation['contact'];
}

export default function PDFProductCatalog({ t, profileT, contactT }: PDFProductCatalogProps) {
  // Hardcoded colors to bypass modern CSS parsing issues in html2canvas
  const colors = {
    brandBlue: '#0A2463',
    brandGold: '#FFD700',
    gray900: '#111824',
    gray50: '#F9FAFB',
    white: '#FFFFFF'
  };

  return (
    <div id="pdf-catalog-root" className="bg-white text-gray-900 font-sans" style={{ width: '1200px' }}>
      {/* FRONT COVER */}
      <div 
        className="pdf-page text-white relative flex flex-col justify-between p-20 min-h-[1697px]"
        style={{ backgroundColor: colors.brandBlue }}
      >
        <div className="absolute inset-0 opacity-20">
          <img src="/mining-bg.webp" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-20">
            <img src="/2.svg" alt="Logo" className="w-24 h-24" />
            <div className="h-20 w-1" style={{ backgroundColor: colors.brandGold }} />
            <div>
              <h1 className="text-4xl font-black tracking-tighter">PT WIRA ENERGI UTAMA</h1>
              <p style={{ color: colors.brandGold }} className="font-bold tracking-widest uppercase text-sm">Industrial Mining & Supplier</p>
            </div>
          </div>
          
          <div className="mt-40">
            <h2 className="text-[120px] font-black leading-[0.9] mb-10 uppercase tracking-tighter">
              OFFICIAL<br />
              <span style={{ color: colors.brandGold }}>PRODUCT</span><br />
              CATALOG
            </h2>
            <div className="h-4 w-32 bg-white mt-8" />
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-end">
          <div className="max-w-md">
            <p className="text-xl font-medium text-gray-300 leading-relaxed italic border-l-4 pl-6" style={{ borderLeftColor: colors.brandGold }}>
              "Sustainable Quality in Every Mineral Grain. Delivering Excellence Across Industries."
            </p>
          </div>
          <div className="text-right">
            <p style={{ color: colors.brandGold }} className="text-sm font-black uppercase tracking-widest mb-2">Edition 2024</p>
            <p className="text-3xl font-black">PTWEU.COMPANY</p>
          </div>
        </div>
      </div>

      {/* INTRODUCTION PAGE */}
      <div className="pdf-page bg-white p-24 min-h-[1697px] flex flex-col">
        <div className="flex justify-between items-center mb-24 pb-8 border-b-2 border-gray-100">
           <img src="/2.svg" alt="Logo" className="w-12 h-12" />
           <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Company Overview</span>
        </div>

        <div className="max-w-3xl">
          <h3 className="text-6xl font-black mb-10 uppercase tracking-tighter leading-tight" style={{ color: colors.brandBlue }}>
            Leading the way in <span style={{ color: colors.brandGold }}>Industrial Minerals</span>
          </h3>
          <p className="text-2xl text-gray-600 leading-relaxed mb-12">
            PT Wira Energi Utama is a premier mining and general trading company based in North Sulawesi, Indonesia. 
            We specialize in high-purity limestone extraction and its high-value derivatives.
          </p>
          
          <div className="grid grid-cols-2 gap-12 mt-20">
            <div className="p-10 rounded-[3rem]" style={{ backgroundColor: colors.gray50 }}>
              <h4 className="text-5xl font-black mb-2" style={{ color: colors.brandBlue }}>150K</h4>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">MT Monthly Capacity</p>
            </div>
            <div className="p-10 rounded-[3rem]" style={{ backgroundColor: colors.gray50 }}>
              <h4 className="text-5xl font-black mb-2" style={{ color: colors.brandBlue }}>97.05</h4>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Hectares Mining Area</p>
            </div>
            <div className="p-10 rounded-[3rem]" style={{ backgroundColor: colors.gray50 }}>
              <h4 className="text-5xl font-black mb-2" style={{ color: colors.brandBlue }}>250</h4>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">TPH Crushing Power</p>
            </div>
            <div className="p-10 rounded-[3rem]" style={{ backgroundColor: colors.gray50 }}>
              <h4 className="text-5xl font-black mb-2" style={{ color: colors.brandBlue }}>JETTY</h4>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Private Deep Sea Port</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-20 border-t border-gray-100 flex items-center justify-between">
           <div className="flex items-center gap-10">
              <div className="text-center">
                 <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Purity</p>
                 <p className="text-xl font-black" style={{ color: colors.brandBlue }}>99.9%</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                 <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Standards</p>
                 <p className="text-xl font-black" style={{ color: colors.brandBlue }}>SNI/ISO</p>
              </div>
           </div>
           <p className="text-xs font-black text-gray-300 uppercase tracking-[0.5em]">Product Catalog | Page 02</p>
        </div>
      </div>

      {/* PRODUCT CATEGORIES - DETAILED PAGES */}
      {t.categories.map((category, catIdx) => (
        <div key={catIdx}>
          <div className="pdf-page p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.gray50 }}>
            <div className="mb-20">
               <span style={{ color: colors.brandGold }} className="text-sm font-black uppercase tracking-[0.3em] mb-4 block">Section 0{catIdx + 1}</span>
               <h3 className="text-8xl font-black uppercase tracking-tighter mb-4" style={{ color: colors.brandBlue }}>{category.title}</h3>
               <p className="text-3xl text-gray-400 font-bold uppercase tracking-widest">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-12 mt-20">
              {category.items.map((item, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[4rem] shadow-xl border border-gray-100 flex gap-12 items-center">
                  <div className="w-64 h-64 flex-shrink-0 rounded-[2.5rem] overflow-hidden border-8 border-gray-50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                       <h4 className="text-5xl font-black" style={{ color: colors.brandBlue }}>{item.name}</h4>
                       <div className="flex gap-2">
                         {item.tags.map((tag, tIdx) => (
                           <span key={tIdx} style={{ backgroundColor: 'rgba(10, 36, 99, 0.05)', color: colors.brandBlue }} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{tag}</span>
                         ))}
                       </div>
                    </div>
                    <p className="text-2xl text-gray-600 font-bold mb-8 italic">"{item.specs}"</p>
                    
                    {item.details && (
                      <div className="grid grid-cols-2 gap-4">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.brandGold }} />
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-tight">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-10 text-right">
              <p className="text-xs font-black text-gray-300 uppercase tracking-[0.5em]">Product Catalog | Page 0{catIdx + 3}</p>
            </div>
          </div>
        </div>
      ))}

      {/* INDUSTRIAL APPLICATIONS */}
      <div className="pdf-page text-white p-24 min-h-[1697px] flex flex-col" style={{ backgroundColor: colors.brandBlue }}>
        <h3 className="text-6xl font-black text-center mb-24 uppercase tracking-tighter">Strategic Industrial <span style={{ color: colors.brandGold }}>Solutions</span></h3>
        
        <div className="grid grid-cols-2 gap-16">
          {t.industrial.items.map((item, idx) => (
            <div key={idx} className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 text-center">
               <div className="w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-xl rounded-3xl" style={{ backgroundColor: colors.brandGold }}>
                 <img src={idx % 2 === 0 ? "/2.svg" : "/favicon.svg"} alt="" className="w-12 h-12 grayscale brightness-0 invert opacity-40 shrink-0" />
               </div>
               <h4 className="text-3xl font-black mb-4 uppercase tracking-tight">{item.name}</h4>
               <p className="text-gray-400 font-medium leading-relaxed italic">{item.usage}</p>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-20 border-t border-white/10 flex justify-between items-end">
           <div className="max-w-md">
              <h5 style={{ color: colors.brandGold }} className="font-black uppercase tracking-[0.2em] mb-4">Technical Excellence</h5>
              <p className="text-sm text-gray-400 font-medium">Our minerals are engineered to meet the specific chemical and physical requirements of global industries, ensuring consistency and reliability in every batch.</p>
           </div>
           <p className="text-xs font-black text-white/30 uppercase tracking-[0.5em]">Product Catalog | Page 07</p>
        </div>
      </div>

      {/* BACK COVER / CONTACT */}
      <div className="pdf-page text-white p-24 min-h-[1697px] flex flex-col justify-center items-center text-center" style={{ backgroundColor: '#0A0E1A' }}>
        <div className="absolute inset-0 opacity-10">
          <img src="/office-manado.webp" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 w-full max-w-4xl">
           <img src="/2.svg" alt="Logo" className="w-40 h-40 mx-auto mb-16" />
           <h2 className="text-7xl font-black mb-8 uppercase tracking-tighter">Ready to <span style={{ color: colors.brandGold }}>Elevate</span> Your Production?</h2>
           <p className="text-2xl text-gray-400 font-medium mb-24 max-w-2xl mx-auto">Contact our technical sales team for customized mineral solutions and competitive quotations.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10">
                 <h4 style={{ color: colors.brandGold }} className="font-black uppercase tracking-widest text-xs mb-6">Head Office</h4>
                 <p className="text-xl font-bold leading-relaxed">{contactT.address}</p>
              </div>
              <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10">
                 <h4 style={{ color: colors.brandGold }} className="font-black uppercase tracking-widest text-xs mb-6">Contact Channels</h4>
                 <div className="space-y-4">
                    <p className="text-2xl font-black">{contactT.phone}</p>
                    <p className="text-2xl font-black">wiraenergiutama@yahoo.com</p>
                    <p className="text-2xl font-black" style={{ color: colors.brandGold }}>PTWEU.COMPANY</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="relative z-10 mt-32 pt-20 border-t border-white/5 w-full">
           <p className="text-sm font-black text-gray-500 uppercase tracking-[0.8em]">© 2024 PT WIRA ENERGI UTAMA. ALL RIGHTS RESERVED.</p>
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
}
