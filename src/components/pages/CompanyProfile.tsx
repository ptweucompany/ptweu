import { useState, useRef } from 'react';
import { FileDown, ChevronLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import LegalStanding from '../LegalStanding';
import ProductionStats from '../ProductionStats';
import FleetEquipment from '../FleetEquipment';
import LaboratoryDetail from '../LaboratoryDetail';
import CorporateGovernance from '../CorporateGovernance';
import EnvironmentCommitment from '../EnvironmentCommitment';
import ProjectGallery from '../ProjectGallery';
import MiningProcess from '../MiningProcess';
import GeologicalAdvantage from '../GeologicalAdvantage';
import EconomicBenefits from '../EconomicBenefits';
import OperationalExcellence from '../OperationalExcellence';
import ComplianceQuality from '../ComplianceQuality';
import IndustrialApplications from '../IndustrialApplications';
import QualityControlWorkflow from '../QualityControlWorkflow';
import { Translation } from '../../types';
import { motion } from 'motion/react';

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
      const element = pdfRef.current;
      
      // Professional delay for font/asset readiness
      await new Promise(r => setTimeout(r, 500));
      
      const canvas = await html2canvas(element, { 
        scale: 2, 
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200, // Balanced width for A4 proportion
        onclone: (clonedDoc) => {
          const container = clonedDoc.body;
          
          // 1. Hide unwanted elements
          clonedDoc.querySelectorAll('[data-html2canvas-ignore="true"]').forEach(el => {
            (el as HTMLElement).style.display = 'none';
          });

          // 2. Comprehensive CSS Sanitization for Tailwind 4 / Modern Colors
          // This is critical to prevent the "lab()" parsing crash
          const allElements = clonedDoc.querySelectorAll('*');
          allElements.forEach((el) => {
            const htmlEl = el as HTMLElement;
            if (!htmlEl.style) return;

            // Map of common Tailwind 4 colors used in PT WEU to safe HEX
            const style = window.getComputedStyle(htmlEl);
            
            // Fix text colors
            if (style.color.includes('oklch') || style.color.includes('lab')) {
              // Default to brand blue if text is dark, brand gold if light
              htmlEl.style.setProperty('color', '#0A1628', 'important');
            }
            
            // Fix background colors
            if (style.backgroundColor.includes('oklch') || style.backgroundColor.includes('lab')) {
                if (htmlEl.classList.contains('bg-brand-blue')) htmlEl.style.backgroundColor = '#0A1628';
                else if (htmlEl.classList.contains('bg-brand-gold')) htmlEl.style.backgroundColor = '#C8A84B';
                else htmlEl.style.backgroundColor = 'transparent';
            }

            // Fix border colors
            if (style.borderColor.includes('oklch') || style.borderColor.includes('lab')) {
              htmlEl.style.borderColor = '#e5e7eb';
            }
          });

          // 3. Inject print-specific styles
          const styleSheet = clonedDoc.createElement('style');
          styleSheet.innerHTML = `
            * { 
              color-adjust: exact !important; 
              -webkit-print-color-adjust: exact !important;
              font-family: sans-serif !important; 
            }
            .bg-brand-blue { background-color: #0A1628 !important; color: white !important; }
            .bg-brand-gold { background-color: #C8A84B !important; color: #0A1628 !important; }
            .text-brand-gold { color: #C8A84B !important; }
            .text-brand-blue { color: #0A1628 !important; }
            section { page-break-inside: avoid !important; }
            h1, h2, h3 { page-break-after: avoid !important; }
          `;
          clonedDoc.head.appendChild(styleSheet);
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgProps = pdf.getImageProperties(imgData);
      const ratio = pdfWidth / imgProps.width;
      const totalPdfHeight = imgProps.height * ratio;
      
      let heightLeft = totalPdfHeight;
      let position = 0;
      let pageNumber = 1;

      // Render First Page
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, totalPdfHeight, undefined, 'FAST');
      
      // Professional Footer
      pdf.setFontSize(8);
      pdf.setTextColor(150);
      pdf.text(`PT WIRA ENERGI UTAMA - OFFICIAL COMPANY PROFILE | Page ${pageNumber}`, pdfWidth / 2, pdfHeight - 10, { align: 'center' });

      heightLeft -= pdfHeight;

      // Subsequent Pages
      while (heightLeft > 0) {
        position = heightLeft - totalPdfHeight;
        pdf.addPage();
        pageNumber++;
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, totalPdfHeight, undefined, 'FAST');
        
        pdf.setFontSize(8);
        pdf.setTextColor(150);
        pdf.text(`PT WIRA ENERGI UTAMA - OFFICIAL COMPANY PROFILE | Page ${pageNumber}`, pdfWidth / 2, pdfHeight - 10, { align: 'center' });
        
        heightLeft -= pdfHeight;
      }
      
      const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long' });
      pdf.save(`PT_Wira_Energi_Utama_Profile_${date.replace(/ /g, '_')}.pdf`);
      
    } catch (error) {
      console.error('PDF Generation Error:', error);
      alert('Unable to generate professional PDF due to browser limitations. Please use the Print (Ctrl+P) option.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pt-20" ref={pdfRef}>

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
              data-html2canvas-ignore="true"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              disabled={isGenerating}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold py-4 px-8 rounded-2xl flex items-center shadow-xl transition-all disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={24} className="mr-2 animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <FileDown size={24} className="mr-2" />
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
      
      <ProjectGallery t={t.gallery} />

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Need a physical copy?</h2>
          <button
            data-html2canvas-ignore="true"
            onClick={handleDownload}
            disabled={isGenerating}
            className="inline-flex items-center bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 px-10 rounded-2xl transition-all disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <Loader2 size={24} className="mr-2 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <FileDown size={24} className="mr-2" />
                {t.profile.download}
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
}
