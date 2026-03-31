// src/data/industries.ts
// Industry use-case data — load only on industry-related pages

export interface IndustryData {
  id: string;
  name_id: string;
  name_en: string;
  slug: string;
  products_used: string[];
  how_used_id: string;
  required_specs: string;
  pain_points_id: string[];
  weu_value_prop_id: string;
  demand_id: string;
}

export const industries: IndustryData[] = [
  {
    id: 'steel',
    name_id: 'Industri Baja & Smelter',
    name_en: 'Steel & Smelter Industry',
    slug: 'baja-smelter',
    products_used: ['Batu Kapur (Limestone)', 'Kapur Bakar (CaO)'],
    how_used_id: 'Batu kapur dan kapur bakar digunakan sebagai flux agent dalam blast furnace dan EAF untuk menghilangkan pengotor SiO2, Al2O3, dan S dari logam cair — menghasilkan terak (slag) dan logam murni.',
    required_specs: 'CaO > 55%, SiO2 < 0.5%, MgO < 1.5%, ukuran lumpy 30–80 mm',
    pain_points_id: [
      'Inkonsistensi kemurnian menyebabkan inefisiensi terak dan pemborosan energi',
      'Gangguan pasokan menyebabkan downtime tungku yang sangat mahal',
      'Kadar air tinggi meningkatkan konsumsi energi termal secara signifikan',
    ],
    weu_value_prop_id: 'Kemurnian CaO tinggi dan konsisten, ukuran lumpy presisi, pengiriman andal via jetty pribadi ke smelter berbasis Sulawesi',
    demand_id: 'Volume tinggi, bulk, kontrak berkelanjutan',
  },
  {
    id: 'cement',
    name_id: 'Industri Semen',
    name_en: 'Cement Industry',
    slug: 'semen',
    products_used: ['Batu Kapur (Limestone)', 'CaCO3'],
    how_used_id: 'Batu kapur adalah bahan baku utama (60–70%) yang diumpankan ke kiln putar untuk memproduksi klinker — basis semua semen Portland. CaCO3 halus digunakan sebagai filler untuk menyesuaikan sifat semen.',
    required_specs: 'CaO > 50%, SiO2 dan Al2O3 rendah, ukuran umpan kiln konsisten',
    pain_points_id: [
      'Variasi kualitas mineral mengganggu kimia kiln dan konsistensi produk',
      'Biaya logistik jarak jauh meningkatkan harga pokok produksi',
    ],
    weu_value_prop_id: 'Limestone CaO tinggi yang konsisten, harga kompetitif, akses angkutan laut mengurangi biaya logistik secara signifikan',
    demand_id: 'Volume sangat tinggi, kontrak tahunan',
  },
  {
    id: 'power-plant',
    name_id: 'Pembangkit Listrik (PLTU)',
    name_en: 'Coal Power Plant (PLTU)',
    slug: 'pembangkit-listrik',
    products_used: ['Kapur Padam (Ca(OH)2)', 'Batu Kapur'],
    how_used_id: 'Kapur padam diinjeksikan ke sistem FGD (Flue Gas Desulfurization) untuk menyerap SO2 yang diemisikan dari pembakaran batu bara. Batu kapur digunakan dalam sistem wet-scrubber FGD.',
    required_specs: 'Ca(OH)2 > 90%, kehalusan 325 mesh passing > 95%, moisture < 1%',
    pain_points_id: [
      'Deadline kepatuhan emisi SO2 yang ketat dengan konsekuensi hukum besar',
      'Tingkat konsumsi tinggi memerlukan pasokan lokal yang andal tanpa keterlambatan',
    ],
    weu_value_prop_id: 'Kapur padam halus memenuhi spesifikasi FGD, pasokan berbasis Sulawesi dekat dengan PLTU Indonesia Timur',
    demand_id: 'Kontinu, kontrak bulanan, regularitas tinggi',
  },
  {
    id: 'chemical',
    name_id: 'Industri Kimia',
    name_en: 'Chemical Industry',
    slug: 'kimia',
    products_used: ['Kapur Bakar (CaO)', 'PCC', 'CaCO3'],
    how_used_id: 'CaO sebagai prekursor kalsium karbida, hipoklorit, dan soda lime. CaCO3 sebagai filler kimia dan agen penetral. PCC sebagai input kimia khusus berkemurnian tinggi.',
    required_specs: 'CaO Aktif > 90%, kemurnian PCC > 99.9%, logam berat < 1 ppm',
    pain_points_id: [
      'Kebutuhan traceability kemurnian untuk formulasi sensitif',
      'Konsistensi bentuk kristal untuk aplikasi specialty',
    ],
    weu_value_prop_id: 'PCC dengan bentuk kristal yang dapat dikustomisasi, kemurnian terverifikasi ketat di lab, dokumentasi MSDS per batch',
    demand_id: 'Volume menengah, spesifikasi tinggi, pembelian berbasis kualitas',
  },
  {
    id: 'agriculture',
    name_id: 'Pertanian & Pupuk',
    name_en: 'Agriculture & Fertilizer',
    slug: 'pertanian',
    products_used: ['Batu Kapur Pertanian (Aglime)', 'Kapur Padam'],
    how_used_id: 'Diaplikasikan ke tanah asam untuk menaikkan pH (soil liming), memperbaiki struktur tanah, meningkatkan ketersediaan kalsium, dan meningkatkan efisiensi penyerapan pupuk.',
    required_specs: 'CaCO3 > 85%, logam berat rendah, penggilingan halus untuk reaksi tanah cepat',
    pain_points_id: [
      'Tanah asam tersebar luas di Indonesia Timur menekan hasil panen',
      'Pembeli sensitif harga membutuhkan pasokan terjangkau dengan kualitas cukup',
    ],
    weu_value_prop_id: 'Batu kapur hemat biaya dengan CaO memadai, tersedia dalam jumlah besar, dekat dengan zona pertanian Sulawesi',
    demand_id: 'Lonjakan musiman (pra-tanam), volume menengah',
  },
  {
    id: 'construction',
    name_id: 'Konstruksi & Infrastruktur',
    name_en: 'Construction & Infrastructure',
    slug: 'konstruksi',
    products_used: ['Agregat Batu Kapur', 'CaCO3', 'Kapur Padam'],
    how_used_id: 'Batu kapur sebagai base jalan dan agregat beton. CaCO3 sebagai filler aspal dan campuran beton. Kapur padam untuk stabilisasi tanah subgrade.',
    required_specs: 'Agregat 10–80 mm sesuai SNI; CaCO3 200–325 mesh untuk filler',
    pain_points_id: [
      'Boom infrastruktur nasional mendorong permintaan tinggi dengan timeline ketat',
      'Dibutuhkan supplier lokal Indonesia Timur untuk menekan biaya angkut',
    ],
    weu_value_prop_id: 'Pasokan volume besar tersedia segera, jetty sendiri memungkinkan pengiriman laut cepat, sizing sesuai SNI',
    demand_id: 'Berbasis proyek, lonjakan volume tinggi, pengadaan strategis',
  },
];

export const industriesBySlug = Object.fromEntries(
  industries.map((ind) => [ind.slug, ind])
);
