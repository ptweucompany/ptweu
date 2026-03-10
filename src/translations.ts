import { Translation } from './types';

export const translations: Record<'id' | 'en', Translation> = {
  id: {
    nav: {
      about: 'Tentang Kami',
      products: 'Produk',
      qa: 'Kualitas',
      contact: 'Hubungi Kami',
    },
    hero: {
      title: 'PT Wira Energi Utama',
      subtitle: 'Industri Pertambangan Kapur & Gamping Global Terkemuka.',
      cta: 'Hubungi Kami',
    },
    about: {
      title: 'Tentang Kami',
      vision: 'Visi',
      visionText: 'Menjadi perusahaan industri pertambangan kapur/gamping global terkemuka yang tumbuh berkelanjutan.',
      mission: 'Misi',
      missionItems: [
        'Memupuk budaya cepat, produktif, efektif, efisien.',
        'Mengutamakan kesehatan, keselamatan kerja, dan lingkungan dalam segala tindakan.',
        'Memelihara tata kelola perusahaan tambang dengan baik demi meningkatkan kepercayaan masyarakat sekitar terhadap perusahaan.',
        'Menyediakan lingkungan belajar untuk mencapai keunggulan dan meningkatkan kesejahteraan karyawan.',
        'Mengedepankan teknologi yang berwawasan lingkungan.',
        'Melakukan reklamasi penghijauan dengan baik sesuai aturan yang berlaku.',
      ],
    },
    products: {
      title: 'Produk Unggulan Kami',
      subtitle: 'Menyediakan berbagai jenis produk turunan batu kapur berkualitas tinggi.',
      items: [
        { name: 'Batu Kapur (Limestone)', desc: 'Bahan baku utama untuk berbagai industri.' },
        { name: 'CaCO3 (Semua Ukuran)', desc: 'Kalsium Karbonat dengan berbagai spesifikasi ukuran.' },
        { name: 'Kapur Bakar (Burn Lime / CaO)', desc: 'Kapur tohor hasil pembakaran batu kapur.' },
        { name: 'Kapur Padam (Hydrated Lime / Ca(OH)2)', desc: 'Kalsium Hidroksida untuk aplikasi industri dan pengolahan air.' },
        { name: 'PCC (Precipitated Calcium Carbonate)', desc: 'Kalsium Karbonat presipitasi dengan kemurnian tinggi.' },
      ],
    },
    qa: {
      title: 'Jaminan Kualitas',
      text: 'Produk kami telah melalui pengujian ketat di laboratorium terakreditasi untuk memastikan standar kualitas tertinggi.',
      labs: ['Minertech', 'Intertek', 'Sucofindo', 'Dinas Pekerjaan Umum & Tata Ruang'],
    },
    legal: {
      title: 'Legalitas & Perizinan',
      subtitle: 'Kami beroperasi dengan kepatuhan penuh terhadap regulasi pertambangan Indonesia.',
      iup: 'IUP Operasi Produksi: 91201019114410010',
      validity: 'Berlaku sejak April 2024',
    },
    location: {
      title: 'Lokasi Strategis',
      subtitle: 'Terletak di jantung sumber daya batu kapur Sulawesi Utara.',
      area: 'Luas Wilayah: 97.05 Hektar',
      coordinates: 'Kecamatan Ratatotok, Minahasa Tenggara',
    },
    infrastructure: {
      title: 'Infrastruktur & Fasilitas',
      subtitle: 'Didukung oleh fasilitas pengolahan dan logistik yang modern.',
      jetty: 'Dermaga Khusus (Jetty) untuk distribusi laut yang efisien.',
      crusher: 'Crushing Plant dengan kapasitas 250 Ton Per Jam (TPH).',
    },
    stats: {
      title: 'Kapasitas Produksi',
      subtitle: 'Target produksi tahunan berdasarkan rencana kerja perusahaan.',
      unit: 'Ton / Tahun',
    },
    fleet: {
      title: 'Armada & Alat Berat',
      subtitle: 'Menggunakan peralatan industri kelas dunia untuk efisiensi maksimal.',
      items: [
        { name: 'Excavator', brand: 'Komatsu' },
        { name: 'Dump Truck', brand: 'Isuzu' },
        { name: 'Wheel Loader', brand: 'Komatsu' },
        { name: 'Crushing Plant', brand: 'Custom 250 TPH' },
      ],
    },
    environment: {
      title: 'Komitmen Lingkungan',
      subtitle: 'Pertambangan yang bertanggung jawab dan berkelanjutan.',
      text: 'Kami berkomitmen melakukan reklamasi penghijauan dan reboisasi pasca tambang sesuai dengan aturan lingkungan yang berlaku.',
    },
    gallery: {
      title: 'Galeri Proyek',
      subtitle: 'Dokumentasi operasional dan fasilitas di lokasi tambang.',
    },
    profile: {
      link: 'Profil Perusahaan',
      download: 'Unduh Profil (PDF)',
    },
    market: {
      title: 'Kehadiran Pasar',
      subtitle: 'Melayani berbagai industri strategis di seluruh Indonesia.',
      industries: [
        { name: 'Smelter & Logam', icon: 'Factory' },
        { name: 'Konstruksi & Infrastruktur', icon: 'Building' },
        { name: 'Pertanian & Pupuk', icon: 'Sprout' },
        { name: 'Industri Kimia', icon: 'FlaskConical' },
      ],
    },
    logistics: {
      title: 'Rantai Pasok Efisien',
      subtitle: 'Distribusi tepat waktu melalui jalur darat dan laut.',
      text: 'Dengan dukungan dermaga khusus (Jetty) dan armada logistik internal, kami menjamin kelancaran pengiriman produk ke lokasi pelanggan dengan efisiensi maksimal.',
    },
    safety: {
      title: 'Keselamatan Kerja (K3)',
      subtitle: 'Komitmen tanpa kompromi terhadap keselamatan karyawan.',
      points: [
        'Target Zero Accident di setiap area operasional.',
        'Pelatihan K3 rutin bagi seluruh staf dan operator.',
        'Standar APD lengkap dan prosedur kerja aman.',
        'Pemantauan kesehatan berkala bagi pekerja tambang.',
      ],
    },
    csr: {
      title: 'Dampak Sosial & CSR',
      subtitle: 'Tumbuh bersama masyarakat lokal Ratatotok.',
      text: 'Kami memprioritaskan penyerapan tenaga kerja lokal dan berkontribusi aktif dalam pembangunan infrastruktur serta pemberdayaan ekonomi desa sekitar tambang.',
    },
    innovation: {
      title: 'Inovasi Pertambangan',
      subtitle: 'Mengadopsi teknologi modern untuk efisiensi tinggi.',
      text: 'Penggunaan sistem monitoring digital dan teknologi crushing plant terbaru memastikan kualitas produk yang konsisten dan operasional yang ramah lingkungan.',
    },
    partners: {
      title: 'Mitra Strategis',
      subtitle: 'Dipercaya oleh perusahaan industri terkemuka.',
    },
    vision: {
      title: 'Visi Masa Depan',
      subtitle: 'Menjadi pemimpin industri batu kapur di Asia Tenggara.',
      text: 'Kami terus melakukan ekspansi kapasitas dan peningkatan standar kualitas untuk memenuhi kebutuhan pasar global yang terus berkembang.',
    },
    process: {
      title: 'Proses Penambangan',
      subtitle: 'Alur kerja sistematis untuk hasil yang optimal.',
      steps: [
        { title: 'Eksplorasi', desc: 'Pemetaan geologi dan pengeboran sampel untuk menentukan kualitas cadangan.' },
        { title: 'Pembersihan Lahan', desc: 'Pembersihan vegetasi dan tanah pucuk secara bertanggung jawab.' },
        { title: 'Pengeboran & Peledakan', desc: 'Teknik peledakan presisi untuk meminimalkan dampak lingkungan.' },
        { title: 'Pemuatan & Pengangkutan', desc: 'Pemindahan material menggunakan alat berat modern ke area pengolahan.' },
        { title: 'Penggilingan (Crushing)', desc: 'Proses pengecilan ukuran sesuai spesifikasi permintaan pelanggan.' },
      ],
    },
    geology: {
      title: 'Keunggulan Geologis',
      subtitle: 'Sumber daya batu kapur dengan kemurnian tinggi.',
      text: 'Deposit batu kapur di wilayah operasional kami memiliki kadar Kalsium Oksida (CaO) yang sangat tinggi (>55%) dengan kandungan pengotor yang sangat rendah.',
    },
    economic: {
      title: 'Keuntungan Ekonomi',
      subtitle: 'Nilai tambah yang signifikan bagi mitra bisnis kami.',
      points: [
        { title: 'Efisiensi Biaya', desc: 'Harga kompetitif dengan kualitas premium meningkatkan margin keuntungan pelanggan.' },
        { title: 'Pasokan Stabil', desc: 'Cadangan yang melimpah menjamin keberlanjutan pasokan jangka panjang.' },
        { title: 'Logistik Terintegrasi', desc: 'Akses langsung ke laut mengurangi biaya distribusi secara signifikan.' },
      ],
    },
    benefits: {
      title: 'Manfaat Produk Kami',
      subtitle: 'Mengapa memilih batu gamping PT WEU?',
      items: [
        'Reaktivitas kimia yang sangat tinggi.',
        'Ukuran butir yang konsisten dan presisi.',
        'Kandungan magnesium dan silika yang sangat rendah.',
        'Ketahanan fisik yang optimal untuk konstruksi.',
      ],
    },
    resources: {
      title: 'Estimasi Sumber Daya',
      subtitle: 'Potensi cadangan yang besar dan berkelanjutan.',
      text: 'Berdasarkan survei geologi terbaru, wilayah IUP kami seluas 97.05 Ha menyimpan jutaan ton cadangan batu kapur berkualitas tinggi yang siap ditambang.',
    },
    operational: {
      title: 'Keunggulan Operasional',
      subtitle: 'Kapasitas produksi besar dengan kontrol kualitas ketat.',
      stats: [
        { label: 'Kapasitas Crusher', value: '250 TPH' },
        { label: 'Jam Operasional', value: '24/7' },
        { label: 'Uptime Mesin', value: '98%' },
        { label: 'Kontrol Kualitas', value: 'Setiap Jam' },
      ],
    },
    qc: {
      title: 'Kontrol Kualitas Ketat',
      subtitle: 'Memastikan setiap butir memenuhi standar.',
      text: 'Laboratorium internal kami melakukan pengujian sampel setiap jam operasional untuk memastikan konsistensi kadar kimia dan ukuran produk.',
    },
    investment: {
      title: 'Nilai Investasi',
      subtitle: 'Kepastian hukum dan operasional bagi investor.',
      text: 'Dengan IUP OP yang lengkap dan manajemen yang profesional, kami menawarkan peluang kemitraan yang aman dan menguntungkan.',
    },
    standards: {
      title: 'Kepatuhan Standar',
      subtitle: 'Memenuhi standar nasional dan internasional.',
      text: 'Seluruh proses operasional dan produk kami telah memenuhi standar SNI dan regulasi pertambangan Indonesia yang ketat.',
    },
    applications: {
      title: 'Aplikasi Industri',
      subtitle: 'Penggunaan batu kapur yang serbaguna.',
      items: [
        { title: 'Peleburan Baja', desc: 'Digunakan sebagai fluks untuk menghilangkan pengotor dalam proses pembuatan besi dan baja.' },
        { title: 'Konstruksi', desc: 'Bahan utama dalam semen, mortar, dan stabilisasi jalan.' },
        { title: 'Pengolahan Air', desc: 'Menyesuaikan tingkat pH dan menghilangkan logam berat dari limbah cair industri.' },
        { title: 'Pertanian', desc: 'Menetralkan keasaman tanah dan menyediakan kalsium penting untuk pertumbuhan tanaman.' },
      ],
    },
    qcWorkflow: {
      title: 'Alur Kerja QC',
      subtitle: 'Presisi di setiap batch produksi.',
      text: 'Sistem kontrol kualitas kami terintegrasi di setiap tahap alur kerja penambangan dan pengolahan, memastikan kami hanya memberikan batu kapur kelas tertinggi kepada mitra kami.',
      steps: [
        { title: 'Pengambilan Sampel', desc: 'Sampel representatif diambil dari setiap 100 ton produksi.' },
        { title: 'Analisis Kimia', desc: 'Pengujian komposisi menggunakan teknologi XRF di laboratorium kami.' },
        { title: 'Verifikasi', desc: 'Pemeriksaan silang hasil terhadap spesifikasi pelanggan.' },
        { title: 'Sertifikasi', desc: 'Laporan kualitas akhir diterbitkan sebelum pengiriman produk.' },
      ],
    },
    contact: {
      title: 'Hubungi Kami',
      address: 'Jalan Ratatotok Morea Soyowan, Desa Ratatotok Satu, Kec. Ratatotok, Kab. Minahasa Tenggara, Sulawesi Utara - Indonesia.',
      phone: '0811-4344-168',
      email: 'wiraenergiutama@yahoo.com',
      form: {
        name: 'Nama Lengkap',
        email: 'Alamat Email',
        company: 'Nama Perusahaan',
        message: 'Pesan Anda',
        send: 'Kirim Pesan',
        success: 'Pesan Anda telah terkirim. Terima kasih!',
      },
    },
    footer: {
      rights: 'Hak Cipta Terpelihara.',
    },
  },
  en: {
    nav: {
      about: 'About Us',
      products: 'Products',
      qa: 'Quality',
      contact: 'Contact Us',
    },
    hero: {
      title: 'PT Wira Energi Utama',
      subtitle: 'Leading Global Limestone & Lime Mining Industry.',
      cta: 'Contact Us',
    },
    about: {
      title: 'About Us',
      vision: 'Vision',
      visionText: 'To be a leading global limestone/lime mining industry company that grows sustainably.',
      mission: 'Mission',
      missionItems: [
        'Cultivate a fast, productive, effective, and efficient culture.',
        'Prioritize health, safety, and environment in all actions.',
        'Maintain good mining corporate governance to increase local community trust.',
        'Provide a learning environment to achieve excellence and improve employee welfare.',
        'Prioritize environmentally friendly technology.',
        'Conduct proper greening reclamation in accordance with applicable regulations.',
      ],
    },
    products: {
      title: 'Our Featured Products',
      subtitle: 'Providing various types of high-quality limestone derivative products.',
      items: [
        { name: 'Limestone', desc: 'Main raw material for various industries.' },
        { name: 'CaCO3 (All Sizes)', desc: 'Calcium Carbonate with various size specifications.' },
        { name: 'Burn Lime (CaO)', desc: 'Quicklime produced from limestone calcination.' },
        { name: 'Hydrated Lime (Ca(OH)2)', desc: 'Calcium Hydroxide for industrial and water treatment applications.' },
        { name: 'PCC (Precipitated Calcium Carbonate)', desc: 'High purity precipitated calcium carbonate.' },
      ],
    },
    qa: {
      title: 'Quality Assurance',
      text: 'Our products have undergone rigorous testing in accredited laboratories to ensure the highest quality standards.',
      labs: ['Minertech', 'Intertek', 'Sucofindo', 'Public Works & Spatial Planning Department'],
    },
    legal: {
      title: 'Legality & Licensing',
      subtitle: 'We operate in full compliance with Indonesian mining regulations.',
      iup: 'Production Operation IUP: 91201019114410010',
      validity: 'Valid since April 2024',
    },
    location: {
      title: 'Strategic Location',
      subtitle: 'Located in the heart of North Sulawesi\'s limestone resources.',
      area: 'Total Area: 97.05 Hectares',
      coordinates: 'Ratatotok District, Southeast Minahasa',
    },
    infrastructure: {
      title: 'Infrastructure & Facilities',
      subtitle: 'Supported by modern processing and logistics facilities.',
      jetty: 'Specialized Jetty for efficient maritime distribution.',
      crusher: 'Crushing Plant with a capacity of 250 Tons Per Hour (TPH).',
    },
    stats: {
      title: 'Production Capacity',
      subtitle: 'Annual production targets based on the company\'s work plan.',
      unit: 'Tons / Year',
    },
    fleet: {
      title: 'Fleet & Heavy Equipment',
      subtitle: 'Utilizing world-class industrial equipment for maximum efficiency.',
      items: [
        { name: 'Excavator', brand: 'Komatsu' },
        { name: 'Dump Truck', brand: 'Isuzu' },
        { name: 'Wheel Loader', brand: 'Komatsu' },
        { name: 'Crushing Plant', brand: 'Custom 250 TPH' },
      ],
    },
    environment: {
      title: 'Environmental Commitment',
      subtitle: 'Responsible and sustainable mining.',
      text: 'We are committed to post-mining greening reclamation and reforestation in accordance with applicable environmental regulations.',
    },
    gallery: {
      title: 'Project Gallery',
      subtitle: 'Operational documentation and facilities at the mining site.',
    },
    profile: {
      link: 'Company Profile',
      download: 'Download Profile (PDF)',
    },
    market: {
      title: 'Market Presence',
      subtitle: 'Serving various strategic industries across Indonesia.',
      industries: [
        { name: 'Smelter & Metals', icon: 'Factory' },
        { name: 'Construction & Infrastructure', icon: 'Building' },
        { name: 'Agriculture & Fertilizer', icon: 'Sprout' },
        { name: 'Chemical Industry', icon: 'FlaskConical' },
      ],
    },
    logistics: {
      title: 'Efficient Supply Chain',
      subtitle: 'Timely distribution through land and sea routes.',
      text: 'With the support of a specialized jetty and internal logistics fleet, we guarantee smooth product delivery to customer locations with maximum efficiency.',
    },
    safety: {
      title: 'Occupational Safety (HSE)',
      subtitle: 'Uncompromising commitment to employee safety.',
      points: [
        'Zero Accident target in every operational area.',
        'Routine HSE training for all staff and operators.',
        'Complete PPE standards and safe work procedures.',
        'Periodic health monitoring for mining workers.',
      ],
    },
    csr: {
      title: 'Social Impact & CSR',
      subtitle: 'Growing together with the local Ratatotok community.',
      text: 'We prioritize local labor absorption and actively contribute to infrastructure development and economic empowerment of villages around the mine.',
    },
    innovation: {
      title: 'Mining Innovation',
      subtitle: 'Adopting modern technology for high efficiency.',
      text: 'The use of digital monitoring systems and the latest crushing plant technology ensures consistent product quality and environmentally friendly operations.',
    },
    partners: {
      title: 'Strategic Partners',
      subtitle: 'Trusted by leading industrial companies.',
    },
    vision: {
      title: 'Future Vision',
      subtitle: 'Becoming the leading limestone industry leader in Southeast Asia.',
      text: 'We continue to expand capacity and improve quality standards to meet the ever-evolving needs of the global market.',
    },
    process: {
      title: 'Mining Process',
      subtitle: 'Systematic workflow for optimal results.',
      steps: [
        { title: 'Exploration', desc: 'Geological mapping and sample drilling to determine reserve quality.' },
        { title: 'Land Clearing', desc: 'Responsible clearing of vegetation and topsoil.' },
        { title: 'Drilling & Blasting', desc: 'Precision blasting techniques to minimize environmental impact.' },
        { title: 'Loading & Hauling', desc: 'Moving material using modern heavy equipment to the processing area.' },
        { title: 'Crushing', desc: 'Size reduction process according to customer request specifications.' },
      ],
    },
    geology: {
      title: 'Geological Advantage',
      subtitle: 'High-purity limestone resources.',
      text: 'The limestone deposits in our operational area have very high Calcium Oxide (CaO) content (>55%) with very low impurity content.',
    },
    economic: {
      title: 'Economic Benefits',
      subtitle: 'Significant added value for our business partners.',
      points: [
        { title: 'Cost Efficiency', desc: 'Competitive prices with premium quality increase customer profit margins.' },
        { title: 'Stable Supply', desc: 'Abundant reserves guarantee long-term supply sustainability.' },
        { title: 'Integrated Logistics', desc: 'Direct access to the sea significantly reduces distribution costs.' },
      ],
    },
    benefits: {
      title: 'Benefits of Our Products',
      subtitle: 'Why choose PT WEU limestone?',
      items: [
        'Very high chemical reactivity.',
        'Consistent and precise grain size.',
        'Very low magnesium and silica content.',
        'Optimal physical durability for construction.',
      ],
    },
    resources: {
      title: 'Resource Estimation',
      subtitle: 'Large and sustainable reserve potential.',
      text: 'Based on the latest geological survey, our 97.05 Ha IUP area holds millions of tons of high-quality limestone reserves ready for mining.',
    },
    operational: {
      title: 'Operational Excellence',
      subtitle: 'Large production capacity with strict quality control.',
      stats: [
        { label: 'Crusher Capacity', value: '250 TPH' },
        { label: 'Operational Hours', value: '24/7' },
        { label: 'Machine Uptime', value: '98%' },
        { label: 'Quality Control', value: 'Every Hour' },
      ],
    },
    qc: {
      title: 'Strict Quality Control',
      subtitle: 'Ensuring every grain meets the standard.',
      text: 'Our internal laboratory performs sample testing every operational hour to ensure consistency in chemical content and product size.',
    },
    investment: {
      title: 'Investment Value',
      subtitle: 'Legal and operational certainty for investors.',
      text: 'With complete IUP OP and professional management, we offer secure and profitable partnership opportunities.',
    },
    standards: {
      title: 'Standard Compliance',
      subtitle: 'Meeting national and international standards.',
      text: 'All our operational processes and products meet SNI standards and strict Indonesian mining regulations.',
    },
    applications: {
      title: 'Industrial Applications',
      subtitle: 'Versatile use of limestone.',
      items: [
        { title: 'Steel Smelting', desc: 'Used as a flux to remove impurities during the iron and steel making process.' },
        { title: 'Construction', desc: 'Key ingredient in cement, mortar, and road base stabilization.' },
        { title: 'Water Treatment', desc: 'Adjusts pH levels and removes heavy metals from industrial wastewater.' },
        { title: 'Agriculture', desc: 'Neutralizes soil acidity and provides essential calcium for crop growth.' },
      ],
    },
    qcWorkflow: {
      title: 'QC Workflow',
      subtitle: 'Precision in every production batch.',
      text: 'Our quality control system is integrated into every stage of the mining and processing workflow, ensuring that we deliver only the highest grade limestone to our partners.',
      steps: [
        { title: 'Sampling', desc: 'Representative samples collected from every 100 tons of production.' },
        { title: 'Chemical Analysis', desc: 'Chemical composition testing using XRF technology in our lab.' },
        { title: 'Verification', desc: 'Cross-checking results against customer specifications.' },
        { title: 'Certification', desc: 'Final quality report issued before product dispatch.' },
      ],
    },
    contact: {
      title: 'Contact Us',
      address: 'Ratatotok Morea Soyowan Street, Ratatotok Satu Village, Ratatotok District, Southeast Minahasa Regency, North Sulawesi - Indonesia.',
      phone: '0811-4344-168',
      email: 'wiraenergiutama@yahoo.com',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Your Message',
        send: 'Send Message',
        success: 'Your message has been sent. Thank you!',
      },
    },
    footer: {
      rights: 'All Rights Reserved.',
    },
  },
};
