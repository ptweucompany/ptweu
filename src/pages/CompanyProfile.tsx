import { FileDown, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import LegalStanding from '../components/LegalStanding';
import ProductionStats from '../components/ProductionStats';
import FleetEquipment from '../components/FleetEquipment';
import LaboratoryDetail from '../components/LaboratoryDetail';
import CorporateGovernance from '../components/CorporateGovernance';
import EnvironmentCommitment from '../components/EnvironmentCommitment';
import ProjectGallery from '../components/ProjectGallery';
import MiningProcess from '../components/MiningProcess';
import GeologicalAdvantage from '../components/GeologicalAdvantage';
import EconomicBenefits from '../components/EconomicBenefits';
import OperationalExcellence from '../components/OperationalExcellence';
import ComplianceQuality from '../components/ComplianceQuality';
import IndustrialApplications from '../components/IndustrialApplications';
import QualityControlWorkflow from '../components/QualityControlWorkflow';
import { Translation } from '../types';
import { motion } from 'motion/react';

interface CompanyProfileProps {
  t: Translation;
}

export default function CompanyProfile({ t }: CompanyProfileProps) {
  const handleDownload = () => {
    // Placeholder for PDF download
    alert('Company Profile PDF download started...');
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-brand-gold hover:text-brand-gold-light mb-8 transition-colors">
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
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold py-4 px-8 rounded-2xl flex items-center shadow-xl transition-all"
            >
              <FileDown size={24} className="mr-2" />
              {t.profile.download}
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
            onClick={handleDownload}
            className="inline-flex items-center bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 px-10 rounded-2xl transition-all"
          >
            <FileDown size={24} className="mr-2" />
            {t.profile.download}
          </button>
        </div>
      </section>
    </div>
  );
}
