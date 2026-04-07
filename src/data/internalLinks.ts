export interface InternalLinkEntry {
  products?: { id: string; en: string; href: { id: string; en: string } }[];
  industries?: { id: string; en: string; href: { id: string; en: string } }[];
  location: { id: string; en: string; href: { id: string; en: string } };
  blog: { id: string; en: string; href: { id: string; en: string } };
}

export const internalLinks: Record<string, InternalLinkEntry> = {
  // --- INDUSTRIES ---
  'cement': {
    products: [
      { id: 'Batu Kapur (Limestone)', en: 'Limestone Lumpy', href: { id: '/produk/batu-kapur', en: '/en/products/limestone' } },
      { id: 'Tepung CaCO3', en: 'CaCO3 Powder', href: { id: '/produk/kalsium-karbonat', en: '/en/products/caco3' } }
    ],
    location: { id: 'Lokasi Tambang Ratatotok', en: 'Ratatotok Mining Site', href: { id: '/about', en: '/en/about' } },
    blog: { id: 'Optimasi Bahan Baku Semen', en: 'Cement Raw Material Optimization', href: { id: '/blog/optimasi-semen', en: '/en/blog/cement-optimization' } }
  },
  'steel': {
    products: [
      { id: 'Batu Kapur Lumpy', en: 'Lumpy Limestone', href: { id: '/produk/batu-kapur', en: '/en/products/limestone' } },
      { id: 'Kapur Tohor (CaO)', en: 'Quicklime (CaO)', href: { id: '/produk/kapur-bakar', en: '/en/products/burn-lime' } }
    ],
    location: { id: 'Dermaga Khusus (12m)', en: 'Specialized Jetty (12m)', href: { id: '/governansi-standar', en: '/en/about' } },
    blog: { id: 'Peran Flux dalam Smelter', en: 'Role of Flux in Smelting', href: { id: '/blog/flux-smelter', en: '/en/blog/smelter-flux' } }
  },
  'power-plant': {
    products: [
      { id: 'Kapur Padam', en: 'Hydrated Lime', href: { id: '/produk/kapur-padam', en: '/en/products/hydrated-lime' } },
      { id: 'Agregat Batu Kapur', en: 'Limestone Aggregate', href: { id: '/produk/batu-kapur', en: '/en/products/limestone' } }
    ],
    location: { id: 'Jaringan Distribusi Nasional', en: 'National Distribution Network', href: { id: '/lokasi', en: '/en/locations' } },
    blog: { id: 'Solusi FGD untuk PLTU', en: 'FGD Solutions for Power Plants', href: { id: '/blog/fgd-pltu', en: '/en/blog/power-plant-fgd' } }
  },
  'chemical': {
    products: [
      { id: 'Kapur Tohor (CaO)', en: 'Quicklime (CaO)', href: { id: '/produk/kapur-bakar', en: '/en/products/burn-lime' } },
      { id: 'PCC (Precipitated CaCO3)', en: 'PCC (Precipitated CaCO3)', href: { id: '/produk/pcc', en: '/en/products/pcc' } }
    ],
    location: { id: 'Laboratorium QC', en: 'QC Laboratory', href: { id: '/governansi-standar', en: '/en/about' } },
    blog: { id: 'Kemurnian Kalsium Industri', en: 'Industrial Calcium Purity', href: { id: '/blog/kemurnian-kalsium', en: '/en/blog/calcium-purity' } }
  },
  'agriculture': {
    products: [
      { id: 'Kapur Pertanian', en: 'Agricultural Limestone', href: { id: '/produk/batu-kapur', en: '/en/products/limestone' } },
      { id: 'Kapur Padam', en: 'Hydrated Lime', href: { id: '/produk/kapur-padam', en: '/en/products/hydrated-lime' } }
    ],
    location: { id: 'Distribusi Regional (Sulawesi)', en: 'Regional Distribution (Sulawesi)', href: { id: '/lokasi', en: '/en/locations' } },
    blog: { id: 'Meningkatkan pH Tanah', en: 'Increasing Soil pH', href: { id: '/blog/ph-tanah', en: '/en/blog/soil-ph' } }
  },
  'construction': {
    products: [
      { id: 'Agregat Batu Kapur', en: 'Limestone Aggregate', href: { id: '/produk/batu-kapur', en: '/en/products/limestone' } },
      { id: 'Tepung CaCO3 (Filler)', en: 'Fine CaCO3 (Filler)', href: { id: '/produk/kalsium-karbonat', en: '/en/products/caco3' } }
    ],
    location: { id: 'Rantai Pasok Infrastruktur', en: 'Infrastructure Supply Chain', href: { id: '/governansi-standar', en: '/en/about' } },
    blog: { id: 'Material Agregat SNI', en: 'SNI Aggregate Materials', href: { id: '/blog/agregat-sni', en: '/en/blog/sni-aggregate' } }
  },
  'water-treatment': {
    products: [
      { id: 'Kapur Padam (Ca(OH)2)', en: 'Hydrated Lime', href: { id: '/produk/kapur-padam', en: '/en/products/hydrated-lime' } },
      { id: 'PCC Specialty', en: 'PCC Specialty', href: { id: '/produk/pcc', en: '/en/products/pcc' } }
    ],
    location: { id: 'Unit Hidrasi Ratatotok', en: 'Ratatotok Hydration Unit', href: { id: '/about', en: '/en/about' } },
    blog: { id: 'Pemurnian Air Industri', en: 'Industrial Water Purification', href: { id: '/blog/water-purification', en: '/en/blog/water-purification' } }
  },
  'paper-plastic': {
    products: [
      { id: 'Tepung CaCO3 Halus', en: 'Fine CaCO3 Powder', href: { id: '/produk/kalsium-karbonat', en: '/en/products/caco3' } },
      { id: 'PCC Nano', en: 'Nano PCC', href: { id: '/produk/pcc', en: '/en/products/pcc' } }
    ],
    location: { id: 'Grinding Plant Factory', en: 'Grinding Plant Factory', href: { id: '/about', en: '/en/about' } },
    blog: { id: 'Filler untuk Kertas', en: 'Fillers for Paper Industry', href: { id: '/blog/paper-filler', en: '/en/blog/paper-filler' } }
  },
  'sugar-refinery': {
    products: [
      { id: 'Kapur Tohor (CaO)', en: 'Quicklime (CaO)', href: { id: '/produk/kapur-bakar', en: '/en/products/burn-lime' } },
      { id: 'Kalsium Karbonat', en: 'Calcium Carbonate', href: { id: '/produk/kalsium-karbonat', en: '/en/products/caco3' } }
    ],
    location: { id: 'Dermaga Bitung', en: 'Bitung Port Access', href: { id: '/lokasi/bitung', en: '/en/locations/bitung' } },
    blog: { id: 'Proses Dekarbonasi Gula', en: 'Sugar Decarbonation Process', href: { id: '/blog/sugar-process', en: '/en/blog/sugar-process' } }
  },
  'glass-industry': {
    products: [
      { id: 'Batu Kapur (Limestone)', en: 'Limestone Lumpy', href: { id: '/produk/batu-kapur', en: '/en/products/limestone' } },
      { id: 'CaCO3 Low-Iron', en: 'Low-Iron CaCO3', href: { id: '/produk/kalsium-karbonat', en: '/en/products/caco3' } }
    ],
    location: { id: 'Tambang Ratatotok', en: 'Ratatotok Mining Site', href: { id: '/about', en: '/en/about' } },
    blog: { id: 'Bahan Baku Kaca Murni', en: 'Pure Glass Raw Materials', href: { id: '/blog/glass-raw', en: '/en/blog/glass-raw' } }
  },
  'leather-tanning': {
    products: [
      { id: 'Kapur Padam (Hydrate)', en: 'Hydrated Lime', href: { id: '/produk/kapur-padam', en: '/en/products/hydrated-lime' } },
      { id: 'Tungku Kalsinasi', en: 'Calcination Facility', href: { id: '/about', en: '/en/about' } }
    ],
    location: { id: 'Logistik Terintegrasi', en: 'Integrated Logistics', href: { id: '/lokasi', en: '/en/locations' } },
    blog: { id: 'Kimia Penyamakan Kulit', en: 'Leather Tanning Chemistry', href: { id: '/blog/leather-tech', en: '/en/blog/leather-tech' } }
  },
  'animal-feed': {
    products: [
      { id: 'CaCO3 Feed Grade', en: 'Feed Grade CaCO3', href: { id: '/produk/kalsium-karbonat', en: '/en/products/caco3' } },
      { id: 'Grit Kalsium', en: 'Calcium Grit', href: { id: '/produk/batu-kapur', en: '/en/products/limestone' } }
    ],
    location: { id: 'Distribusi Regional', en: 'Regional Distribution', href: { id: '/lokasi', en: '/en/locations' } },
    blog: { id: 'Nutrisi Kalsium Ternak', en: 'Livestock Calcium Nutrition', href: { id: '/blog/feed-nutrition', en: '/en/blog/feed-nutrition' } }
  },
  'paint-coating': {
    products: [
      { id: 'CaCO3 Ultrafine', en: 'Ultrafine CaCO3', href: { id: '/produk/kalsium-karbonat', en: '/en/products/caco3' } },
      { id: 'PCC Coating Grade', en: 'Coating Grade PCC', href: { id: '/produk/pcc', en: '/en/products/pcc' } }
    ],
    location: { id: 'QC Excellence Lab', en: 'QC Excellence Lab', href: { id: '/governansi-standar', en: '/en/about' } },
    blog: { id: 'Opasitas Cat & CaCO3', en: 'Paint Opacity & CaCO3', href: { id: '/blog/paint-opacity', en: '/en/blog/paint-opacity' } }
  },
  'gold-cyanidation': {
    products: [
      { id: 'Kapur Tohor High-Active', en: 'High-Active Quicklime', href: { id: '/produk/kapur-bakar', en: '/en/products/burn-lime' } },
      { id: 'Kapur Padam', en: 'Hydrated Lime', href: { id: '/produk/kapur-padam', en: '/en/products/hydrated-lime' } }
    ],
    location: { id: 'Site Operasional Sulut', en: 'North Sulawesi Operation', href: { id: '/about', en: '/en/about' } },
    blog: { id: 'Kontrol pH Tambang Emas', en: 'Gold Mine pH Control', href: { id: '/blog/gold-ph', en: '/en/blog/gold-ph' } }
  },
  'ceramics': {
    products: [
      { id: 'Kalsium Karbonat', en: 'Calcium Carbonate', href: { id: '/produk/kalsium-karbonat', en: '/en/products/caco3' } },
      { id: 'Batu Kapur Putih', en: 'White Limestone', href: { id: '/produk/batu-kapur', en: '/en/products/limestone' } }
    ],
    location: { id: 'Pusat Distribusi Nasional', en: 'National Distribution Center', href: { id: '/lokasi', en: '/en/locations' } },
    blog: { id: 'Flux Keramik & Glasir', en: 'Ceramic Flux & Glazes', href: { id: '/blog/ceramic-flux', en: '/en/blog/ceramic-flux' } }
  },

  // --- PRODUCTS ---
  'limestone': {
    industries: [
      { id: 'Industri Semen', en: 'Cement Industry', href: { id: '/industri/semen', en: '/en/industries/cement' } },
      { id: 'Industri Baja', en: 'Steel Industry', href: { id: '/industri/baja-smelter', en: '/en/industries/steel' } }
    ],
    location: { id: 'Lokasi Tambang Ratatotok', en: 'Ratatotok Mining Site', href: { id: '/about', en: '/en/about' } },
    blog: { id: 'Panduan Produk Batu Kapur', en: 'Limestone Product Guide', href: { id: '/blog/batu-kapur', en: '/en/blog/limestone-guide' } }
  },
  'caco3': {
    industries: [
      { id: 'Industri Plastik', en: 'Plastic Industry', href: { id: '/industri/plastik-karet', en: '/en/industries/plastic' } },
      { id: 'Industri Cat', en: 'Paint Industry', href: { id: '/industri/cat-coating', en: '/en/industries/paint' } }
    ],
    location: { id: 'Pabrik Grinding Plant', en: 'Grinding Plant Factory', href: { id: '/governansi-standar', en: '/en/about' } },
    blog: { id: 'Aplikasi CaCO3 Halus', en: 'Fine CaCO3 Applications', href: { id: '/blog/caco3', en: '/en/blog/caco3-applications' } }
  },
  'burn-lime': {
    industries: [
      { id: 'Industri Smelter', en: 'Smelter Industry', href: { id: '/industri/smelter-nikel', en: '/en/industries/smelter' } },
      { id: 'Industri Gula', en: 'Sugar Industry', href: { id: '/industri/gula', en: '/en/industries/sugar' } }
    ],
    location: { id: 'Fasilitas Shaft Kiln', en: 'Shaft Kiln Facility', href: { id: '/governansi-standar', en: '/en/about' } },
    blog: { id: 'Kualitas Kapur Tohor', en: 'Quicklime Quality Standards', href: { id: '/blog/kapur-bakar', en: '/en/blog/quicklime-quality' } }
  },
  'hydrated-lime': {
    industries: [
      { id: 'PLTU (FGD)', en: 'Power Plant (FGD)', href: { id: '/industri/pembangkit-listrik', en: '/en/industries/power-plant' } },
      { id: 'Neutralisasi Air', en: 'Water Neutralization', href: { id: '/industri/pengolahan-air', en: '/en/industries/water' } }
    ],
    location: { id: 'Unit Hidrasi', en: 'Hydration Unit', href: { id: '/governansi-standar', en: '/en/about' } },
    blog: { id: 'Sistem FGD Modern', en: 'Modern FGD Systems', href: { id: '/blog/kapur-padam', en: '/en/blog/modern-fgd' } }
  },
  'pcc': {
    industries: [
      { id: 'Farmasi & Kosmetik', en: 'Pharma & Cosmetics', href: { id: '/industri/farmasi-kosmetik', en: '/en/industries/pharma' } },
      { id: 'Kertas Premium', en: 'Premium Paper', href: { id: '/industri/kertas', en: '/en/industries/paper' } }
    ],
    location: { id: 'Laboratorium Khusus PCC', en: 'PCC Specialty Lab', href: { id: '/governansi-standar', en: '/en/about' } },
    blog: { id: 'Teknologi Presipitasi Kalsium', en: 'Calcium Precipitation Tech', href: { id: '/blog/pcc', en: '/en/blog/pcc-technology' } }
  },
  'agregat': {
    industries: [
      { id: 'Industri Konstruksi', en: 'Construction Industry', href: { id: '/industri/konstruksi', en: '/en/industries/construction' } },
      { id: 'Infrastruktur Jalan', en: 'Road Infrastructure', href: { id: '/industri/konstruksi', en: '/en/industries/construction' } }
    ],
    location: { id: 'Crushing Plant 250 TPH', en: '250 TPH Crushing Plant', href: { id: '/governansi-standar', en: '/en/about' } },
    blog: { id: 'Kualitas Agregat Beton', en: 'Concrete Aggregate Quality', href: { id: '/blog/agregat-sni', en: '/en/blog/sni-aggregate' } }
  }
};
