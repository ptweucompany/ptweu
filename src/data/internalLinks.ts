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
