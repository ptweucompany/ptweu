// src/data/company.ts
// Company, legal, and contact data — import only what each page needs

export const company = {
  legal_name: 'PT Wira Energi Utama',
  short_name: 'PT WEU',
  tagline_id: 'General Trade, Mining & Supplier.',
  tagline_en: 'Leading Global Limestone & Lime Mining Industry.',
  founded: '2019',
  kbli: '08102 — Penggalian Batu Kapur/Gamping',
  issued_capital_idr: 'Rp 3.630.000.000',
  employees_approx: 50,
  vision_id: 'Menjadi perusahaan industri pertambangan kapur/gamping global terkemuka yang tumbuh berkelanjutan.',
  vision_en: 'To be a leading global limestone/lime mining industry company that grows sustainably.',
  mission_id: [
    'Memupuk budaya cepat, produktif, efektif, efisien.',
    'Mengutamakan kesehatan, keselamatan kerja, dan lingkungan dalam segala tindakan.',
    'Memelihara tata kelola perusahaan tambang dengan baik.',
    'Menyediakan lingkungan belajar untuk mencapai keunggulan.',
    'Mengedepankan teknologi yang berwawasan lingkungan.',
    'Melakukan reklamasi penghijauan dengan baik sesuai aturan yang berlaku.',
  ],
  mission_en: [
    'Cultivate a fast, productive, effective, and efficient culture.',
    'Prioritize occupational health, safety, and environment in all actions.',
    'Maintain good mining corporate governance.',
    'Provide a learning environment to achieve excellence and improve employee welfare.',
    'Prioritize environmentally friendly technology.',
    'Conduct proper greening reclamation in accordance with applicable regulations.',
  ],
  core_values: [
    { id: 'Integritas', en: 'Integrity', desc_id: 'Menjalankan bisnis dengan standar etika tertinggi dan transparansi penuh.', desc_en: 'Conducting business with the highest ethical standards and full transparency.' },
    { id: 'Inovasi', en: 'Innovation', desc_id: 'Terus mengadopsi teknologi terbaru untuk efisiensi dan keamanan maksimal.', desc_en: 'Continuously adopting the latest technology to improve efficiency and sustainability.' },
    { id: 'Kemitraan', en: 'Partnership', desc_id: 'Membangun hubungan jangka panjang yang saling menguntungkan.', desc_en: 'Building long-term, mutually beneficial relationships with customers and the community.' },
  ],
} as const;

export const legal = {
  iup_number: '91201019114410010',
  iup_type: 'IUP Operasi Produksi',
  iup_valid_since: 'April 2024',
  iup_area_ha: 97.05,
  ukl_upl_decree: 'SK No. 503/DPMPTSPD/PPKPLH/880/X/2023',
  ukl_upl_area_ha: 10.3,
  pkkpr_laut_no: '03082310517100005',
  pkkpr_laut_area_ha: 2.12,
  npwp: '92.853.784.4-821.000',
  kemenkumham: 'AHU-0046475.AH.01.01.TAHUN 2019',
  certifications_current: ['SMK3 (Sistem Manajemen K3)'],
  certifications_in_progress: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'],
  iso_roadmap: [
    { phase: 'Gap Analysis & Persiapan', status: 'completed' as const },
    { phase: 'Implementasi Sistem Manajemen', status: 'in-progress' as const },
    { phase: 'Audit Internal & Review', status: 'planned' as const },
    { phase: 'Sertifikasi Final', status: 'planned' as const },
  ],
} as const;

export const offices = [
  {
    type: 'Kantor Utama / Head Office',
    city: 'Manado',
    address_id: 'Taman Sari Cluster Lihaga, Blok H3-3, Kelurahan Paniki Bawah, Manado, Sulawesi Utara 95256',
    phone: '(0434) 260 3008',
    whatsapp: '0811 4344 168',
    whatsapp_url: 'https://wa.me/628114344168',
    email: 'contact@ptweu.company',
    geo: { lat: 1.4748, lng: 124.8421 },
  },
  {
    type: 'Kantor Regional',
    city: 'Kotamobagu',
    address_id: 'Jl. S. Parman No. 741B, Kotamobagu, Sulawesi Utara 95711',
    phone: '(0434) 260 3008',
    whatsapp: '0811 4344 168',
    whatsapp_url: 'https://wa.me/628114344168',
    email: 'wiraenergiutama@yahoo.com',
    geo: null,
  },
  {
    type: 'Lokasi Tambang',
    city: 'Ratatotok',
    address_id: 'Jalan Ratatotok Morea Soyowan, Desa Ratatotok Satu, Kec. Ratatotok, Kab. Minahasa Tenggara, Sulawesi Utara',
    phone: null,
    whatsapp: null,
    whatsapp_url: null,
    email: null,
    geo: null,
  },
] as const;

export const quarry = {
  location: 'Desa Ratatotok Satu, Kecamatan Ratatotok, Kabupaten Minahasa Tenggara, Sulawesi Utara',
  area_ha: 97.05,
  operational_area_ha: 10.3,
  geology: 'Deposit batu kapur dengan kadar CaO > 55%, kandungan pengotor sangat rendah, formasi karst Ratatotok yang proven.',
  reserves: 'Berdasarkan survei geologi terbaru, wilayah IUP seluas 97.05 Ha menyimpan jutaan ton cadangan batu kapur berkualitas tinggi.',
} as const;

export const safety = {
  fatality_rate: '0%',
  lti: 0,
  safety_induction: '100%',
  target: 'Zero Accident di setiap area operasional',
  certifications: ['SMK3'],
  measures: [
    'APD lengkap dan standar di seluruh area tambang',
    'Pelatihan K3 rutin bagi seluruh staf dan operator',
    'Audit keselamatan internal dan eksternal berkala',
    'Pemantauan kesehatan berkala bagi pekerja tambang',
  ],
} as const;
