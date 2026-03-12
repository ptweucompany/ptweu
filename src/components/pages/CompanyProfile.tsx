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
      const canvas = await html2canvas(element, { 
        scale: 2, 
        useCORS: true,
        logging: false
      });
      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = pdfHeight;
      let position = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('Company_Profile_PT_Wira_Energi_Utama.pdf');
    } catch (error) {
      console.error('Failed to generate PDF', error);
      alert('Failed to generate PDF. Please try again.');
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
