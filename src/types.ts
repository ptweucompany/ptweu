export type Language = 'id' | 'en';

export interface Translation {
  nav: {
    about: string;
    products: string;
    qa: string;
    contact: string;
  };
  hero: {
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
  privacy: {
    title: string;
    lastUpdated: string;
    sections: { title: string; content: string }[];
  };
  footer: {
    rights: string;
    links: { label: string; href: string }[];
  };
}
