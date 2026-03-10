import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import QualityAssurance from '../components/QualityAssurance';
import MappingLocation from '../components/MappingLocation';
import Infrastructure from '../components/Infrastructure';
import MarketPresence from '../components/MarketPresence';
import SupplyChain from '../components/SupplyChain';
import SafetyStandards from '../components/SafetyStandards';
import CommunityImpact from '../components/CommunityImpact';
import MiningInnovation from '../components/MiningInnovation';
import FutureVision from '../components/FutureVision';
import { Translation } from '../types';

interface HomeProps {
  t: Translation;
  onContactClick: () => void;
}

export default function Home({ t, onContactClick }: HomeProps) {
  return (
    <>
      <Hero 
        t={t.hero} 
        onContactClick={onContactClick} 
      />
      
      <AboutUs t={t.about} />
      
      <MarketPresence t={t.market} />
      
      <SupplyChain t={t.logistics} />
      
      <MappingLocation t={t.location} />
      
      <Infrastructure t={t.infrastructure} />
      
      <Products t={t.products} />
      
      <SafetyStandards t={t.safety} />
      
      <CommunityImpact t={t.csr} />
      
      <MiningInnovation t={t.innovation} />
      
      <QualityAssurance t={t.qa} />
      
      <FutureVision t={t.vision} />
    </>
  );
}
