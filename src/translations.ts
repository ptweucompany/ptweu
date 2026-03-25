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
      subtitle: 'Mining, General Trading & Industrial Supplier.',
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
      title: 'Legalitas & Formasi Perusahaan',
      subtitle: 'Standar kepatuhan penuh dalam operasional dan perizinan.',
      iup: 'IUP Operasi Produksi: 91201019114410010',
      validity: 'Berlaku sejak April 2024',
      legalities: [
        {
          title: 'Akta Pendirian & Perubahan',
          desc: 'Akta Pendirian No. 1 (9 Sept 2019) oleh Notaris Salmiaty Hadjidjah Mutiara Mokoginta, SH. Akta Perubahan No. 01 (05 Juni 2023) oleh Notaris Moh. Rheza Awaluddin, S.H., M.Kn. Modal Ditempatkan: Rp 3.630.000.000.'
        },
        {
          title: 'SK Kemenkumham',
          desc: 'Pengesahan No. AHU-0046475.AH.01.01.TAHUN 2019 dan Perubahan No. AHU-0031214.AH.01.02.TAHUN 2023.'
        },
        {
          title: 'IUP Operasi Produksi',
          desc: 'Nomor Izin 91201019114410010, KBLI 08102 (Penggalian Batu Kapur/Gamping), Luas 97,05 Ha di Kab. Minahasa Tenggara.'
        },
        {
          title: 'Persetujuan Lingkungan (UKL-UPL)',
          desc: 'SK No. 503/DPMPTSPD/PPKPLH/880/X/2023 (Luas operasi & fasilitas 10,3 Ha).'
        },
        {
          title: 'PKKPR Laut',
          desc: 'Persetujuan Pembangunan Dermaga seluas 2,12 Ha di Laut Maluku (No: 03082310517100005).'
        },
        {
          title: 'Legalitas Administratif',
          desc: 'NPWP 92.853.784.4-821.000 dan Surat Keterangan Domisili di Desa Ratatotok Satu.'
        }
      ]
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
        { name: 'Smelter, Logam & Pembangkit Listrik', icon: 'Factory' },
        { name: 'Konstruksi & Infrastruktur', icon: 'Building' },
        { name: 'Pertanian & Pupuk', icon: 'Sprout' },
        { name: 'Industri Kimia', icon: 'FlaskConical' },
      ],
    },
    logistics: {
      title: 'Rantai Pasok Efisien',
      subtitle: 'Distribusi tepat waktu melalui jalur darat dan laut.',
      text: 'Dengan dukungan Pelabuhan Bitung dan armada logistik internal, kami menjamin kelancaran pengiriman produk ke lokasi pelanggan dengan efisiensi maksimal.',
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
    aboutDetails: {
      history: {
        title: 'Sejarah & Warisan Kami',
        text: 'Didirikan dengan komitmen untuk menjadi energi utama dalam pembangunan nasional, PT Wira Energi Utama telah berkembang dari sebuah visi untuk mengoptimalkan kekayaan alam Sulawesi Utara menjadi penyedia batu kapur terintegrasi tingkat global. Selama lebih dari satu dekade, kami telah membangun reputasi atas keandalan, kualitas, dan praktik penambangan yang bertanggung jawab di Ratatotok.',
      },
      values: [
        { title: 'Integritas', desc: 'Menjalankan bisnis dengan standar etika tertinggi dan transparansi penuh.' },
        { title: 'Inovasi', desc: 'Terus mengadopsi teknologi terbaru untuk meningkatkan efisiensi dan kelestarian.' },
        { title: 'Kemitraan', desc: 'Membangun hubungan jangka panjang yang saling menguntungkan dengan pelanggan dan masyarakat.' },
      ],
      team: {
        title: 'Kepemimpinan Kami',
        text: 'Dipimpin oleh para profesional berpengalaman di industri pertambangan yang berdedikasi pada keunggulan operasional dan keselamatan.',
      },
      visionMission: {
        vision: {
          title: 'Visi Kami',
          text: 'Menjadi perusahaan industri pertambangan kapur/gamping global terkemuka yang tumbuh berkelanjutan.'
        },
        mission: {
          title: 'Misi Kami',
          items: [
            'Memupuk budaya cepat, produktif, efektif, efisien.',
            'Mengutamakan kesehatan, keselamatan kerja, dan lingkungan dalam segala tindakan.',
            'Memelihara tata kelola perusahaan tambang dengan baik demi meningkatkan kepercayaan masyarakat sekitar terhadap perusahaan.',
            'Menyediakan lingkungan belajar untuk mencapai keunggulan dan meningkatkan kesejahteraan karyawan.',
            'Mengedepankan teknologi yang berwawasan lingkungan.',
            'Melakukan reklamasi penghijauan dengan baik sesuai aturan yang berlaku.'
          ]
        }
      },
      sustainability: {
        title: 'Komitmen Keberlanjutan',
        text: 'Kami percaya bahwa pertambangan harus berjalan selaras dengan alam. Program reklamasi lahan kami yang proaktif memastikan bahwa setiap area yang selesai ditambang akan dikembalikan ke kondisi hijau yang produktif.'
      },
      safety: {
        title: 'Keselamatan & Kesehatan Kerja (K3)',
        text: 'Zero Accident bukan sekadar target, tapi adalah budaya kami.',
        points: ['APD Lengkap & Standar', 'Pelatihan Rutin Staff', 'Sertifikasi Alat Berkala', 'Audit Keselamatan Eksternal']
      },
      process: {
        title: 'Perjalanan Mineral',
        steps: [
          { title: 'Ekstraksi', desc: 'Penambangan terbuka dengan metode blasting terkontrol.' },
          { title: 'Crushing', desc: 'Pengecilan ukuran mineral menggunakan teknologi crusher otomatis.' },
          { title: 'Quality Control', desc: 'Pengujian laboratorium untuk memastikan kemurnian mineral.' },
          { title: 'Distribusi', desc: 'Logistik efisien melalui dermaga khusus milik sendiri.' }
        ]
      },
      infrastructure: {
        title: 'Infrastruktur Canggih',
        items: [
          { name: 'Jetty Khusus', desc: 'Dermaga laut dalam yang mampu menampung tongkang kapasitas besar.' },
          { name: 'Crushing Plant', desc: 'Sistem pengolahan terintegrasi dengan kapasitas produksi harian tinggi.' },
          { name: 'Laboratorium QC', desc: 'Fasilitas teknis untuk analisis kimia mineral secara real-time.' }
        ]
      },
      community: {
        title: 'Membangun Bersama Ratatotok',
        text: 'PT WEU4 bukan sekadar perusahaan, kami adalah bagian dari masyarakat Sulawesi Utara. Melalui program CSR, kami mendukung pendidikan, kesehatan, dan infrastruktur desa sekitar.'
      },
      quality: {
        title: 'Standar Kualitas Global',
        text: 'Produk kami memenuhi standar internasional untuk penggunaan di industri baja, semen, dan kimia reaktif tinggi.'
      },
      industrial: {
        title: 'Pilar Industri Nasional',
        text: 'Kami bangga menjadi pemasok utama bagi proyek-proyek strategis nasional, mendukung kemandirian energi dan bahan baku industri Indonesia.'
      }
    },
    productExpansion: {
      supplyChain: {
        title: 'Alur Rantai Pasok',
        steps: [
          { title: 'Ekstraksi Tambang', desc: 'Pengambilan material mentah dari pit tambang Ratatotok.' },
          { title: 'Pengolahan Sesuai Pesanan', desc: 'Penghancuran dan penyaringan mineral sesuai spesifikasi teknis klien.' },
          { title: 'Logistik Terintegrasi', desc: 'Pemuatan ke tongkang melalui dermaga pribadi (Jetty).' },
          { title: 'Pengiriman Tepat Waktu', desc: 'Distribusi global ke pabrik pemakai akhir tanpa hambatan.' }
        ]
      },
      qcLifecycle: {
        title: 'Siklus Penjaminan Kualitas',
        items: [
          'Analisis Kimia di Pit Tambang',
          'Pengujian Sampel Harian di Laboratorium',
          'Sertifikasi Pihak Ketiga Independen',
          'Verifikasi Produk Sebelum Pemuatan'
        ]
      },
      capabilities: {
        title: 'Kapasitas Operasional',
        text: 'Dengan dukungan infrastruktur modern, kami mampu memenuhi permintaan skala besar secara konsisten.',
        stats: [
          { label: 'Kapasitas Produksi', value: '150.000 MT/Bulan' },
          { label: 'Luas Area Tambang', value: '100+ Hektar' },
          { label: 'Draft Jetty', value: '12 Meter' }
        ]
      },
      industries: {
        title: 'Industri yang Kami Layani',
        list: [
          { name: 'Industri Semen', icon: 'Construction' },
          { name: 'Sektor Baja', icon: 'Wrench' },
          { name: 'Pembangkit Listrik (PLTU)', icon: 'Zap' },
          { name: 'Industri Kimia', icon: 'Beaker' },
          { name: 'Pertanian & Pupuk', icon: 'Sprout' }
        ]
      },
      customSolutions: {
        title: 'Solusi Mineral Kustom',
        text: 'Kami memahami setiap industri memiliki kebutuhan unik. Tim teknis kami siap melakukan engineering pada ukuran butir (grit size) dan kemurnian kimia sesuai target proses produksi Anda.'
      },
      sustainability: {
        title: 'Produksi Ramah Lingkungan',
        text: 'Sistem crushing kami dilengkapi dengan filter debu canggih dan penggunaan air sirkulasi tertutup untuk meminimalkan dampak lingkungan selama proses produksi.'
      },
      partnership: {
        title: 'Cara Menjadi Mitra Kami',
        steps: [
          { title: 'Konsultasi Teknis', desc: 'Diskusikan spesifikasi material yang Anda butuhkan.' },
          { title: 'Uji Sampel', desc: 'Kami mengirimkan sampel material untuk pengujian di laboratorium Anda.' },
          { title: 'Kesepakatan Kontrak', desc: 'Finalisasi volume, jadwal pengiriman, dan harga.' },
          { title: 'Eksekusi & Suplai', desc: 'Suplai mineral berkelanjutan dimulai ke fasilitas Anda.' }
        ]
      }
    },
    productDetails: {
      specsTitle: 'Spesifikasi Teknis',
      limestone: {
        title: 'Batu Kapur (Limestone)',
        fullDesc: 'Batu kapur kami dikenal dengan kadar CaO yang tinggi dan reaktivitas yang luar biasa. Cocok untuk industri baja, kimia, dan semen.',
        specs: ['Kadar CaO: > 55%', 'MgO: < 1.5%', 'Silika (SiO2): < 0.5%', 'Kadar Air: < 3%']
      },
      hydratedLime: {
        title: 'Kapur Padam (Hydrated Lime)',
        fullDesc: 'Kalsium Hidroksida hasil pemrosesan canggih untuk pemurnian air, stabilisasi tanah, dan pemrosesan gas buang.',
        specs: ['Kandungan Ca(OH)2: > 92%', 'Kehalusan (passing 325 mesh): > 95%', 'Warna: Putih Bersih']
      },
      burnLime: {
        title: 'Kapur Bakar (CaO)',
        fullDesc: 'Diproduksi melalui proses kalsinasi terkontrol untuk menghasilkan kapur tohor dengan aktivitas termal tinggi.',
        specs: ['Available CaO: > 90%', 'Ukuran (Lumpy): 10-50mm', 'Suhu Reaksi: > 60°C']
      }
    },
    privacy: {
      title: 'Kebijakan Privasi',
      lastUpdated: 'Terakhir diperbarui: Maret 2024',
      sections: [
        {
          title: '1. Pengumpulan Informasi',
          content: 'Kami mengumpulkan informasi yang Anda berikan langsung kepada kami melalui formulir kontak, termasuk nama, alamat email, dan nama perusahaan untuk menanggapi pertanyaan bisnis Anda.'
        },
        {
          title: '2. Penggunaan Data',
          content: 'Data yang dikumpulkan hanya digunakan untuk kepentingan komunikasi bisnis resmi, peningkatan layanan, dan pemenuhan kewajiban sesuai hukum pertambangan Indonesia.'
        },
        {
          title: '3. Keamanan Informasi',
          content: 'Kami menerapkan langkah-langkah keamanan teknologi untuk melindungi data Anda dari akses yang tidak sah atau penyalahgunaan.'
        }
      ]
    },
    footer: {
      rights: 'Hak Cipta Terpelihara.',
      links: [
        { label: 'Tentang', href: '/about' },
        { label: 'Produk', href: '/products' },
        { label: 'Privasi', href: '/privacy' }
      ]
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
      title: 'Legality & Formation',
      subtitle: 'Full compliance standards in operations and licensing.',
      iup: 'Production Operation IUP: 91201019114410010',
      validity: 'Valid since April 2024',
      legalities: [
        {
          title: 'Deed of Establishment & Amendment',
          desc: 'Deed of Establishment No. 1 (Sept 9, 2019) by Notary Salmiaty Hadjidjah Mutiara Mokoginta, SH. Deed of Amendment No. 01 (June 5, 2023) by Notary Moh. Rheza Awaluddin, S.H., M.Kn. Issued Capital: Rp 3,630,000,000.'
        },
        {
          title: 'Ministry of Law and Human Rights Decree',
          desc: 'Ratification No. AHU-0046475.AH.01.01.TAHUN 2019 and Amendment No. AHU-0031214.AH.01.02.TAHUN 2023.'
        },
        {
          title: 'Production Operation Mining License (IUP)',
          desc: 'License Number 91201019114410010, KBLI 08102 (Limestone Excavation), Area 97.05 Ha in Southeast Minahasa Regency.'
        },
        {
          title: 'Environmental Approval (UKL-UPL)',
          desc: 'Decree No. 503/DPMPTSPD/PPKPLH/880/X/2023 (Operation & facility area 10.3 Ha).'
        },
        {
          title: 'Marine PKKPR',
          desc: 'Approval for Pier Construction covering 2.12 Ha in the Maluku Sea (No: 03082310517100005).'
        },
        {
          title: 'Administrative Legality',
          desc: 'NPWP 92.853.784.4-821.000 and Certificate of Domicile in Ratatotok Satu Village.'
        }
      ]
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
    aboutDetails: {
      history: {
        title: 'Our History & Heritage',
        text: 'Founded with a commitment to being the primary energy in national development, PT Wira Energi Utama has evolved from a vision to optimize North Sulawesi\'s natural wealth into a globally integrated limestone provider. For over a decade, we have built a reputation for reliability, quality, and responsible mining practices in Ratatotok.',
      },
      values: [
        { title: 'Integrity', desc: 'Conducting business with the highest ethical standards and full transparency.' },
        { title: 'Innovation', desc: 'Continuously adopting the latest technology to improve efficiency and sustainability.' },
        { title: 'Partnership', desc: 'Building long-term, mutually beneficial relationships with customers and the community.' },
      ],
      team: {
        title: 'Our Leadership',
        text: 'Led by experienced professionals in the mining industry dedicated to operational excellence and safety.',
      },
      visionMission: {
        vision: {
          title: 'Our Vision',
          text: 'To be a leading global limestone/lime mining industry company that grows sustainably.'
        },
        mission: {
          title: 'Our Mission',
          items: [
            'Cultivate a fast, productive, effective, and efficient culture.',
            'Prioritize occupational health, safety, and environment in all actions.',
            'Maintain good mining corporate governance to increase the trust of the surrounding community in the company.',
            'Provide a learning environment to achieve excellence and improve employee welfare.',
            'Prioritize environmentally friendly technology.',
            'Conduct proper greening reclamation in accordance with applicable regulations.'
          ]
        }
      },
      sustainability: {
        title: 'Sustainability Commitment',
        text: 'We believe that mining must run in harmony with nature. Our proactive land reclamation program ensures that every mined-out area is returned to a productive green state.'
      },
      safety: {
        title: 'Health & Safety (K3)',
        text: 'Zero Accident is not just a target, it is our culture.',
        points: ['Standard Safety Gear', 'Regular Staff Training', 'Periodic Equipment Certification', 'External Safety Audits']
      },
      process: {
        title: 'The Mineral Journey',
        steps: [
          { title: 'Extraction', desc: 'Open-pit mining with controlled blasting methods.' },
          { title: 'Crushing', desc: 'Mineral size reduction using automated crusher technology.' },
          { title: 'Quality Control', desc: 'Laboratory testing to ensure mineral purity.' },
          { title: 'Distribution', desc: 'Efficient logistics via our own specialized jetty.' }
        ]
      },
      infrastructure: {
        title: 'Advanced Infrastructure',
        items: [
          { name: 'Private Jetty', desc: 'Deep-water port capable of accommodating large-capacity barges.' },
          { name: 'Crushing Plant', desc: 'Integrated processing system with high daily production capacity.' },
          { name: 'QC Laboratory', desc: 'Technical facilities for real-time mineral chemical analysis.' }
        ]
      },
      community: {
        title: 'Building with Ratatotok',
        text: 'PT WEU4 is not just a company; we are part of the North Sulawesi community. Through CSR programs, we support education, health, and local village infrastructure.'
      },
      quality: {
        title: 'Global Quality Standards',
        text: 'Our products meet international standards for use in the steel, cement, and high-reactivity chemical industries.'
      },
      industrial: {
        title: 'Pillar of National Industry',
        text: 'We are proud to be a major supplier for national strategic projects, supporting Indonesia\'s energy independence and industrial raw materials.'
      }
    },
    productExpansion: {
      supplyChain: {
        title: 'Supply Chain Flow',
        steps: [
          { title: 'Mine Extraction', desc: 'Raw material collection from the Ratatotok mining pit.' },
          { title: 'Custom Processing', desc: 'Mineral crushing and screening according to client technical specifications.' },
          { title: 'Integrated Logistics', desc: 'Loading onto barges via our private deep-water jetty.' },
          { title: 'On-Time Delivery', desc: 'Seamless global distribution to end-user factories.' }
        ]
      },
      qcLifecycle: {
        title: 'Quality Assurance Lifecycle',
        items: [
          'In-Pit Chemical Analysis',
          'Daily Laboratory Sample Testing',
          'Independent Third-Party Certification',
          'Pre-Loading Product Verification'
        ]
      },
      capabilities: {
        title: 'Operational Capabilities',
        text: 'Supported by modern infrastructure, we are able to meet large-scale demands consistently.',
        stats: [
          { label: 'Production Capacity', value: '150,000 MT/Month' },
          { label: 'Mining Area', value: '100+ Hectares' },
          { label: 'Jetty Draft', value: '12 Meters' }
        ]
      },
      industries: {
        title: 'Industries We Serve',
        list: [
          { name: 'Cement Industry', icon: 'Construction' },
          { name: 'Steel Sector', icon: 'Wrench' },
          { name: 'Power Plants (PLTU)', icon: 'Zap' },
          { name: 'Chemical Industry', icon: 'Beaker' },
          { name: 'Agriculture & Fertilizer', icon: 'Sprout' }
        ]
      },
      customSolutions: {
        title: 'Custom Mineral Solutions',
        text: 'We understand that every industry has unique requirements. Our technical team is ready to engineer grit size and chemical purity to meet your production targets.'
      },
      sustainability: {
        title: 'Eco-Friendly Production',
        text: 'Our crushing systems are equipped with advanced dust filters and closed-circuit water systems to minimize environmental impact during production.'
      },
      partnership: {
        title: 'How to Become Our Partner',
        steps: [
          { title: 'Technical Consultation', desc: 'Discuss the material specifications you need.' },
          { title: 'Sample Testing', desc: 'We send material samples for testing in your laboratory.' },
          { title: 'Contract Agreement', desc: 'Finalize volume, delivery schedule, and pricing.' },
          { title: 'Execution & Supply', desc: 'Sustainable mineral supply begins to your facility.' }
        ]
      }
    },
    productDetails: {
      specsTitle: 'Technical Specifications',
      limestone: {
        title: 'Limestone',
        fullDesc: 'Our limestone is known for its high CaO content and extraordinary reactivity. Suitable for the steel, chemical, and cement industries.',
        specs: ['CaO Content: > 55%', 'MgO: < 1.5%', 'Silica (SiO2): < 0.5%', 'Moisture: < 3%']
      },
      hydratedLime: {
        title: 'Hydrated Lime',
        fullDesc: 'Calcium Hydroxide from advanced processing for water purification, soil stabilization, and flue gas processing.',
        specs: ['Ca(OH)2 Content: > 92%', 'Fineness (passing 325 mesh): > 95%', 'Color: Pure White']
      },
      burnLime: {
        title: 'Burn Lime (CaO)',
        fullDesc: 'Produced through controlled calcination processes to produce quicklime with high thermal activity.',
        specs: ['Available CaO: > 90%', 'Size (Lumpy): 10-50mm', 'Reaction Temperature: > 60°C']
      }
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: March 2024',
      sections: [
        {
          title: '1. Information Collection',
          content: 'We collect information you provide directly to us through contact forms, including name, email address, and company name to respond to your business inquiries.'
        },
        {
          title: '2. Data Usage',
          content: 'The collected data is only used for official business communication, service improvement, and fulfillment of obligations according to Indonesian mining law.'
        },
        {
          title: '3. Information Security',
          content: 'We implement technological security measures to protect your data from unauthorized access or misuse.'
        }
      ]
    },
    footer: {
      rights: 'All Rights Reserved.',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Products', href: '/products' },
        { label: 'Privacy', href: '/privacy' }
      ]
    },
  },
};
