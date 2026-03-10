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
  footer: {
    rights: string;
  };
}
