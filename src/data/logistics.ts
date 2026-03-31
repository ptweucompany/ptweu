// src/data/logistics.ts
// Logistics, ports, packaging, lead times — load only on logistics-relevant pages

export const jetty = {
  type: 'Dermaga Khusus (Private Jetty)',
  draft_m: 12,
  barge_capacity_ft: 300,
  location: 'Ratatotok, Minahasa Tenggara',
  permit: 'PKKPR Laut No. 03082310517100005',
  area_ha: 2.12,
  note: 'Dermaga milik sendiri — tidak bergantung pada jadwal pelabuhan umum',
} as const;

export const ports = [
  {
    name: 'Pelabuhan Bitung',
    type: 'Pelabuhan Internasional Utama',
    role: 'Hub ekspor dan distribusi antar pulau utama',
    note: 'Jarak dari Manado ±60 km — akses jalan tol tersedia',
  },
  {
    name: 'Kotabunan',
    type: 'Pelabuhan Regional',
    role: 'Distribusi regional sekunder — access terdekat dari tambang',
    note: 'Kapasitas barge medium',
  },
  {
    name: 'Belang',
    type: 'Pelabuhan Regional',
    role: 'Pengiriman pesisir lokal',
    note: 'Untuk distribusi area Minahasa Tenggara dan sekitarnya',
  },
] as const;

export const shippingMethods = [
  {
    mode: 'Sea Freight (Tongkang/Barge)',
    capacity: '7.500 – 10.000 MT per tongkang',
    coverage: 'Seluruh Indonesia, kapabel untuk ekspor',
    notes: 'Melalui Jetty Ratatotok → Pelabuhan Bitung',
  },
  {
    mode: 'Transportasi Darat (Truk)',
    fleet: 'Armada Dump Truck Isuzu Giga Series',
    coverage: 'Regional Sulawesi Utara dan antar kota',
    notes: 'Untuk pengiriman volume medium dan distribusi lokal',
  },
] as const;

export const packaging = [
  { type: 'Bulk / Curah (Loose)', products: ['Batu Kapur', 'Kapur Bakar'], desc: 'Untuk buyer industri bervolume besar tanpa kebutuhan pengemasan' },
  { type: 'Jumbo Bag 1.000 kg', products: ['CaCO3', 'Kapur Padam', 'PCC', 'Kapur Bakar'], desc: 'Kemasan standar untuk pengiriman semi-bulk — mudah ditangani forklift' },
  { type: 'Bag 50 kg', products: ['CaCO3', 'Kapur Padam', 'PCC'], desc: 'Kemasan industri standar untuk distribusi menengah' },
  { type: 'Bag 25 kg', products: ['CaCO3', 'Kapur Padam', 'PCC'], desc: 'Kemasan kecil untuk trial, sampling, dan distribusi ritel industri' },
] as const;

export const leadTimes = {
  domestic_sulawesi: '3 – 7 hari',
  domestic_other_islands: '7 – 21 hari (tergantung jadwal tongkang)',
  export: '14 – 30 hari (tergantung tujuan)',
} as const;

export const moq = {
  sea_barge: '7.500 – 10.000 MT (1 tongkang)',
  land_truck: 'Negotiable (min 1 truckload)',
  bags: '10 MT minimum (kecuali PCC: 5 MT)',
} as const;

export const exportData = {
  incoterms: ['FOB (Port Bitung atau Jetty Ratatotok)', 'CIF (negotiable)'],
  required_documents: [
    'Certificate of Origin (COO) — via KADIN atau Disperindag',
    'Material Safety Data Sheet (MSDS) per produk',
    'Technical Data Sheet (TDS) / Certificate of Analysis (COA)',
    'Packing List',
    'Commercial Invoice',
    'Bill of Lading (B/L)',
  ],
  workflow: [
    'Buyer inquiry dan permintaan sampel',
    'Pengiriman sampel beserta COA dan MSDS',
    'Persetujuan teknis oleh lab buyer',
    'Penandatanganan kontrak (volume, harga, Incoterm, jadwal)',
    'Produksi dan verifikasi QC',
    'Pemuatan di Jetty Ratatotok → Pelabuhan Bitung',
    'Persiapan dokumen dan pengiriman',
  ],
  lead_time_regional: '14 – 21 hari',
  lead_time_long_haul: '21 – 45 hari',
} as const;
