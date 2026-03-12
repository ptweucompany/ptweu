import Hero from '../Hero';
import AboutUs from '../AboutUs';
import Products from '../Products';
import QualityAssurance from '../QualityAssurance';
import MappingLocation from '../MappingLocation';
import Infrastructure from '../Infrastructure';
import MarketPresence from '../MarketPresence';
import SupplyChain from '../SupplyChain';
import SafetyStandards from '../SafetyStandards';
import CommunityImpact from '../CommunityImpact';
import MiningInnovation from '../MiningInnovation';
import FutureVision from '../FutureVision';
import { Translation } from '../../types';

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
