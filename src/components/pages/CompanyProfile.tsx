'use client';

import { useState, useRef } from 'react';
import { FileDown, ChevronLeft, Loader2, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import LegalStanding from '../LegalStanding';
import ProductionStats from '../ProductionStats';
import FleetEquipment from '../FleetEquipment';
import LaboratoryDetail from '../LaboratoryDetail';
import CorporateGovernance from '../CorporateGovernance';
import EnvironmentCommitment from '../EnvironmentCommitment';
import PhotoSlider from '../PhotoSlider';
import MiningProcess from '../MiningProcess';
import GeologicalAdvantage from '../GeologicalAdvantage';
import EconomicBenefits from '../EconomicBenefits';
import OperationalExcellence from '../OperationalExcellence';
import ComplianceQuality from '../ComplianceQuality';
import IndustrialApplications from '../IndustrialApplications';
import QualityControlWorkflow from '../QualityControlWorkflow';
import { Translation } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import PDFCompanyProfile from '../PDFCompanyProfile';

interface CompanyProfileProps {
  t: Translation;
}

export default function CompanyProfile({ t }: CompanyProfileProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!pdfRef.current || isGenerating) return;
    setIsGenerating(true);
    
    try {
      const rootElement = pdfRef.current;
      const pages = rootElement.querySelectorAll('.pdf-page');
      
      if (pages.length === 0) {
        throw new Error('No profile pages found to export. Possible rendering delay.');
      }

      // Professional delay for font/asset readiness
      await new Promise(r => setTimeout(r, 2000));
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = 210;
      const pdfHeight = 297;

      for (let i = 0; i < pages.length; i++) {
        const pageElement = pages[i] as HTMLElement;
        
        try {
          const canvas = await html2canvas(pageElement, { 
            scale: 2, 
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            width: 1200,
            height: 1697,
            onclone: (clonedDoc) => {
              // Ultra-Aggressive CSS Sanitization for Modern Colors (lab, oklch, lch, etc.)
              clonedDoc.querySelectorAll('*').forEach((el) => {
                const htmlEl = el as HTMLElement;
                if (!htmlEl.style || !window.getComputedStyle) return;
                
                const computedStyle = window.getComputedStyle(htmlEl);
                const criticalProps = ['color', 'backgroundColor', 'borderColor', 'fill', 'stroke', 'outlineColor'];
                
                criticalProps.forEach(prop => {
                  const val = (computedStyle as any)[prop];
                  if (val && (val.includes('oklch') || val.includes('lab') || val.includes('oklab') || val.includes('lch'))) {
                    if (prop === 'backgroundColor') {
                      if (htmlEl.classList.contains('bg-brand-blue')) htmlEl.style.setProperty(prop, '#0A2463', 'important');
                      else if (htmlEl.classList.contains('bg-brand-gold')) htmlEl.style.setProperty(prop, '#FFD700', 'important');
                      else if (htmlEl.classList.contains('bg-gray-900')) htmlEl.style.setProperty(prop, '#111827', 'important');
                      else htmlEl.style.setProperty(prop, '#ffffff', 'important');
                    } else if (prop === 'color') {
                      if (htmlEl.classList.contains('text-brand-gold')) htmlEl.style.setProperty(prop, '#FFD700', 'important');
                      else if (htmlEl.classList.contains('text-white')) htmlEl.style.setProperty(prop, '#ffffff', 'important');
                      else htmlEl.style.setProperty(prop, '#111827', 'important');
                    } else {
                      htmlEl.style.setProperty(prop, 'inherit', 'important');
                    }
                  }
                });

                if (htmlEl.getAttribute('style')?.match(/(lab|oklch|oklab|lch)\(/)) {
                   const cleanStyle = htmlEl.getAttribute('style')?.replace(/(lab|oklch|oklab|lch)\([^)]*\)/g, '#888888');
                   if (cleanStyle) htmlEl.setAttribute('style', cleanStyle);
                }
              });
            }
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
        } catch (canvasErr: any) {
          console.error(`Page ${i} rendering failed:`, canvasErr);
          throw new Error(`Failed to render page ${i + 1}: ${canvasErr.message}`);
        }
      }
      
      const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long' });
      pdf.save(`PT_WEU_Company_Profile_${date.replace(/ /g, '_')}.pdf`);
      
    } catch (error: any) {
      console.error('PDF Generation Error:', error);
      alert(`Download Error: ${error.message || 'Technical rendering timeout'}. Please check your internet connection and try again.`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" data-html2canvas-ignore="true" className="inline-flex items-center text-brand-gold hover:text-brand-gold-light mb-8 transition-colors">
            <ChevronLeft size={20} className="mr-1" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.profile.link}</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Comprehensive overview of PT Wira Energi Utama's operations, governance, and sustainability commitments.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              disabled={isGenerating}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-black py-5 px-10 rounded-2xl flex items-center shadow-2xl transition-all disabled:opacity-75 disabled:cursor-not-allowed uppercase tracking-tight"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={24} className="mr-3 animate-spin" />
                  Preparing Profile...
                </>
              ) : (
                <>
                  <FileDown size={24} className="mr-3" />
                  {t.profile.download}
                </>
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-3xl rounded-full -mr-32 -mt-32" />
      </section>

      <LegalStanding t={t.legal} />
      <MiningProcess t={t.process} />
      <GeologicalAdvantage t={t.geology} />
      <ProductionStats t={t.stats} />
      <EconomicBenefits t={t.economic} benefitsT={t.benefits} />
      <FleetEquipment t={t.fleet} />
      <OperationalExcellence t={t.operational} resourcesT={t.resources} />
      <LaboratoryDetail t={t.qa} />
      <QualityControlWorkflow t={t.qcWorkflow} />
      <IndustrialApplications t={t.applications} />
      <CorporateGovernance t={t.about} />
      <ComplianceQuality qcT={t.qc} investmentT={t.investment} standardsT={t.standards} />
      <EnvironmentCommitment t={t.environment} />
      
      <PhotoSlider 
        images={t.advancedAbout.gallery.images} 
        title={t.advancedAbout.gallery.title} 
        subtitle={t.advancedAbout.gallery.subtitle} 
      />

      <PhotoSlider 
        images={t.projectGallery.images} 
        title={t.projectGallery.title} 
        subtitle={t.projectGallery.subtitle} 
      />

      {/* Bottom CTA */}
      <section className="py-24 bg-gray-50 text-center relative overflow-hidden border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-8 uppercase tracking-tight">Technical Assets & <span className="text-brand-gold">Compliance</span></h2>
          <p className="text-xl text-gray-400 font-medium mb-12 italic max-w-xl mx-auto">
            Ready for a high-resolution, print-optimized document of our operations and legal standing?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            disabled={isGenerating}
            className="inline-flex items-center bg-brand-blue text-white font-black py-5 px-12 rounded-2xl transition-all shadow-xl shadow-brand-blue/20 uppercase tracking-widest disabled:opacity-75"
          >
            {isGenerating ? (
              <>
                <Loader2 size={24} className="mr-3 animate-spin" />
                Processing PDF...
              </>
            ) : (
              <>
                <FileDown size={24} className="mr-3" />
                {t.profile.download}
              </>
            )}
          </motion.button>
        </div>
      </section>

      {/* Hidden Advanced PDF Content - Zero Overlap Architecture */}
      <div 
        style={{ 
          position: 'fixed', 
          left: '-9999px', 
          top: 0, 
          pointerEvents: 'none', 
          zIndex: -100,
          opacity: 0
        }}
        aria-hidden="true"
      >
        <PDFCompanyProfile 
          ref={pdfRef} 
          t={t} 
          contactT={t.contact}
        />
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
            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Synthesizing Corporate Profile</h2>
            <p className="text-xl text-gray-400 max-w-md font-medium">
              We are generating your 9-page high-resolution technical document. Please wait...
            </p>
            <div className="mt-12 flex gap-1 items-center">
               <span className="w-2 h-2 bg-brand-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
               <span className="w-2 h-2 bg-brand-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
               <span className="w-2 h-2 bg-brand-gold rounded-full animate-bounce" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
