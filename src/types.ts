export type Language = 'id' | 'en';

export interface Translation {
  nav: {
    about: string;
    products: string;
    catalog: string;
    blog: string;
    qa: string;
    governance: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    vision: string;
    visionText: string;
    mission: string;
    missionItems: string[];
  };
  products: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      desc: string;
    }[];
  };
  qa: {
    title: string;
    text: string;
    labs: string[];
  };
  legal: {
    title: string;
    subtitle: string;
    iup: string;
    validity: string;
    legalities: { title: string; desc: string }[];
  };
  location: {
    title: string;
    subtitle: string;
    area: string;
    coordinates: string;
  };
  infrastructure: {
    title: string;
    subtitle: string;
    jetty: string;
    crusher: string;
  };
  stats: {
    title: string;
    subtitle: string;
    unit: string;
  };
  fleet: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      brand: string;
    }[];
  };
  environment: {
    title: string;
    subtitle: string;
    text: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  profile: {
    link: string;
    download: string;
  };
  market: {
    title: string;
    subtitle: string;
    industries: { name: string; icon: string }[];
  };
  logistics: {
    title: string;
    subtitle: string;
    text: string;
  };
  safety: {
    title: string;
    subtitle: string;
    points: string[];
  };
  csr: {
    title: string;
    subtitle: string;
    text: string;
  };
  innovation: {
    title: string;
    subtitle: string;
    text: string;
  };
  partners: {
    title: string;
    subtitle: string;
  };
  vision: {
    title: string;
    subtitle: string;
    text: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  geology: {
    title: string;
    subtitle: string;
    text: string;
  };
  economic: {
    title: string;
    subtitle: string;
    points: { title: string; desc: string }[];
  };
  benefits: {
    title: string;
    subtitle: string;
    items: string[];
  };
  resources: {
    title: string;
    subtitle: string;
    text: string;
  };
  operational: {
    title: string;
    subtitle: string;
    stats: { label: string; value: string }[];
  };
  qc: {
    title: string;
    subtitle: string;
    text: string;
  };
  investment: {
    title: string;
    subtitle: string;
    text: string;
  };
  standards: {
    title: string;
    subtitle: string;
    text: string;
  };
  applications: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  qcWorkflow: {
    title: string;
    subtitle: string;
    text: string;
    steps: { title: string; desc: string }[];
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      send: string;
      success: string;
    };
  };
  aboutDetails: {
    history: { title: string; text: string };
    values: { title: string; desc: string }[];
    team: { title: string; text: string };
    visionMission: {
      vision: { title: string; text: string };
      mission: { title: string; items: string[] };
    };
    sustainability: { title: string; text: string };
    safety: { title: string; text: string; points: string[] };
    process: { title: string; steps: { title: string; desc: string }[] };
    infrastructure: { title: string; items: { name: string; desc: string }[] };
    community: { title: string; text: string };
    quality: { title: string; text: string };
    industrial: { title: string; text: string };
  };
  productExpansion: {
    supplyChain: { title: string; steps: { title: string; desc: string }[] };
    qcLifecycle: { title: string; items: string[] };
    capabilities: { title: string; text: string; stats: { label: string; value: string }[] };
    industries: { title: string; list: { name: string; icon: string }[] };
    customSolutions: { title: string; text: string };
    sustainability: { title: string; text: string };
    partnership: { title: string; steps: { title: string; desc: string }[] };
  };
  productDetails: {
    specsTitle: string;
    limestone: { title: string; fullDesc: string; specs: string[] };
    hydratedLime: { title: string; fullDesc: string; specs: string[] };
    burnLime: { title: string; fullDesc: string; specs: string[] };
  };
  productPages: {
    limestone: ProductPageData;
    caco3: ProductPageData;
    burnLime: ProductPageData;
    hydratedLime: ProductPageData;
    pcc: ProductPageData;
    agregat: ProductPageData;
  };
  advancedAbout: AdvancedAboutData;
  advancedCatalog: AdvancedCatalogData;
  advancedBlog: AdvancedBlogData;
  advancedContact: AdvancedContactData;
  advancedSustainability: AdvancedSustainabilityData;
  privacy: {
    title: string;
    lastUpdated: string;
    sections: { title: string; content: string }[];
  };
  footer: {
    rights: string;
    links: { label: string; href: string }[];
  };
  advancedGovernance: AdvancedGovernanceData;
  projectGallery: { title: string; subtitle: string; images: string[] };
}

export interface AdvancedAboutData {
  hero: { title: string; subtitle: string; description: string; image: string };
  history: { title: string; content: string; image: string; stats: { label: string; value: string }[] };
  values: { title: string; subtitle: string; items: { title: string; desc: string; icon: string }[] };
  leadership: { title: string; content: string; image: string };
  sustainability: { title: string; content: string; initiatives: string[] };
  safety: { title: string; content: string; certifications: string[] };
  assets: { title: string; items: { name: string; value: string; icon: string }[] };
  future: { title: string; content: string; targets: string[] };
  gallery: { title: string; subtitle: string; images: string[] };
}

export interface AdvancedCatalogData {
  hero: { title: string; description: string; image: string };
  categories: { 
    title: string; 
    description: string; 
    items: { 
      id?: string;
      name: string; 
      specs: string; 
      tags: string[];
      image?: string;
      details?: string[];
    }[] 
  }[];
  download: { 
    title: string; 
    description: string; 
    button: string;
    fileSize?: string;
    version?: string;
  };
  industrial: { title: string; items: { name: string; usage: string; icon: string }[] };
  documentation: { title: string; subtitle: string; images: string[] };
}

export interface AdvancedBlogData {
  hero: { title: string; subtitle: string };
  posts: { id: string; title: string; excerpt: string; date: string; category: string; image: string }[];
}

export interface AdvancedContactData {
  hero: { title: string; subtitle: string };
  offices: { title: string; address: string; mapUrl: string; image: string; email: string; phone: string }[];
  faq: { title: string; items: { q: string; a: string }[] };
}

export interface ProductPageData {
  id: string;
  category: 'raw' | 'processed' | 'advanced';
  description: string;
  parent?: string;
  size_variants?: string[];
  derivatives?: string[];
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  stats: { label: string; value: string; icon: string }[];
  overview: {
    title: string;
    content: string;
    features: string[];
  };
  specifications: {
    title: string;
    table: { label: string; value: string }[];
    chartData: { name: string; value: number; color: string }[];
  };
  applications: {
    title: string;
    items: { title: string; desc: string; icon: string }[];
  };
  process: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  quality: {
    title: string;
    content: string;
    certs: string[];
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    whatsapp: string;
  };
}

export interface AdvancedGovernanceData {
  hero: { title: string; subtitle: string; description: string; image: string };
  roadmap: { title: string; subtitle: string; steps: { title: string; desc: string; status: 'completed' | 'in-progress' | 'planned' }[] };
  standards: { title: string; subtitle: string; items: { id: string; title: string; desc: string; status: string }[] };
  policies: { title: string; items: { title: string; content: string; icon: string }[] };
  legal: { title: string; subtitle: string; items: { label: string; value: string }[] };
  safety: { title: string; content: string; kpis: { label: string; value: string }[] };
  environmental: { title: string; content: string; metrics: { label: string; value: string }[] };
}

export interface AdvancedSustainabilityData {
  hero: { title: string; subtitle: string; description: string; image: string };
  environment: {
    title: string;
    description: string;
    image: string;
    metrics: { label: string; value: string; icon: string }[];
  };
  reclamation: {
    title: string;
    subtitle: string;
    content: string;
    steps: { title: string; desc: string; icon: string }[];
  };
  community: {
    title: string;
    subtitle: string;
    content: string;
    highlights: { title: string; desc: string; icon: string }[];
  };
  esg: {
    title: string;
    subtitle: string;
    metrics: { label: string; value: string; trend: 'up' | 'down' | 'stable' }[];
  };
  certifications: {
    title: string;
    items: { name: string; issuer: string; year: string }[];
  };
}
