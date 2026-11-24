export interface HelpTopic {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  points: string[];
  tips: string;
}

export const HELP_TOPICS: HelpTopic[] = [
  {
    id: 'cerita-ke-guru-bk',
    title: 'Cerita ke Guru BK',
    iconName: 'HeartHandshake',
    tagline: 'Cara memulai percakapan dengan guru BK di sekolah',
    description: 'Banyak siswa merasa canggung atau takut memulai obrolan. Padahal, guru BK bertugas menjadi tempat aman untuk mendengarkan ceritamu tanpa menghakimi.',
    points: [
      'Kamu bisa datang langsung saat jam istirahat atau sepulang sekolah.',
      'Bisa juga mengirim pesan singkat atau surat kecil jika malu bicara langsung.',
      'Katakan di awal: "Ibu/Bapak, saya sedang butuh teman cerita tentang sesuatu yang membuat saya cemas."',
      'Guru BK terikat kode etik kerahasiaan untuk menjaga ceritamu tetap aman.'
    ],
    tips: 'Kamu tidak harus punya masalah besar untuk datang ke ruang BK. Bingung memilih jurusan atau lagi cemas pertemanan pun boleh banget diceritakan!'
  },
  {
    id: 'apa-yang-terjadi-saat-konseling',
    title: 'Apa yang Terjadi Saat Konseling?',
    iconName: 'ShieldCheck',
    tagline: 'Penjelasan tentang proses konseling sekolah yang ramah',
    description: 'Konseling bukan sesi interogasi atau tempat orang bersalah dimarahi. Konseling adalah obrolan hangat dua arah untuk membantumu menemukan jalan keluar terbaik.',
    points: [
      'Sesi biasanya berlangsung santai sekitar 30–45 menit di ruangan yang nyaman.',
      'Kamu bebas menceritakan apa yang kamu rasakan tanpa dipaksa membuka hal yang belum siap diceritakan.',
      'Guru BK akan membantumu mengurai benang kusut di kepalamu secara bertahap.',
      'Tidak ada hukuman, nilai jelek, atau catatan kriminal hanya karena kamu konseling.'
    ],
    tips: 'Anggap konseling seperti membersihkan ransel yang terlalu berat; guru BK membantumu memilah barang mana yang perlu disimpan dan mana yang bisa dilepaskan.'
  },
  {
    id: 'mitos-dan-fakta-bk',
    title: 'Mitos & Fakta Mengenai BK',
    iconName: 'HelpCircle',
    tagline: 'Yuk, kenali mitos dan fakta tentang konseling sekolah',
    description: 'Mari kita luruskan anggapan lama yang sering keliru tentang Bimbingan dan Konseling.',
    points: [
      'MITOS: "Ruang BK itu tempat menghukum anak nakal dan tukang bolos." -> FAKTA: BK adalah ruang pengembangan diri untuk SEMUA siswa, baik prestasi maupun emosi.',
      'MITOS: "Guru BK bakal membocorkan rahasiaku ke semua guru di ruang guru." -> FAKTA: Guru BK wajib memegang rahasia privasi siswa sesuai etika konseling.',
      'MITOS: "Kalau ke BK berarti aku sakit jiwa atau lemah." -> FAKTA: Meminta bantuan saat kewalahan justru tanda kedewasaan dan keberanian yang tinggi.',
      'MITOS: "Guru BK hanya mengurusi siswa yang nilainya anjlok." -> FAKTA: Guru BK juga mendampingi minat bakat dan rencana masa depan.'
    ],
    tips: 'Jangan biarkan rumor teman membuatmu ragu mendapatkan pertolongan yang kamu butuhkan.'
  },
  {
    id: 'siapa-yang-bisa-dipercaya',
    title: 'Siapa yang Bisa Dipercaya?',
    iconName: 'Users',
    tagline: 'Panduan mengenali orang dewasa terpercaya di sekitarmu',
    description: 'Ketika kamu merasa dunia terlalu berat, penting untuk tahu siapa sosok yang aman untuk diajak bicara.',
    points: [
      'Orang tua, wali, atau anggota keluarga yang mendengarkan tanpa langsung membentak.',
      'Wali kelas atau guru mata pelajaran yang selama ini kamu rasa ramah dan perhatian.',
      'Guru BK sekolah yang memiliki pelatihan profesional konseling remaja.',
      'Konselor profesional, psikolog anak, atau layanan bantuan anak terdaftar resmi.'
    ],
    tips: 'Ciri orang dewasa yang aman: mereka mendengarkan dengan sabar, tidak menyalahkanmu, tidak meminta imbalan aneh, dan membuatmu merasa tenang.'
  }
];

export interface EmergencyContact {
  name: string;
  phone: string;
  whatsapp: string;
  description: string;
  agency: string;
  waLink?: string;
}

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    name: 'SAPA 129 (KemenPPPA)',
    phone: '129',
    whatsapp: '08111-129-129',
    agency: 'Kementerian Pemberdayaan Perempuan & Perlindungan Anak',
    description: 'Hotline resmi 24 jam untuk pengaduan kekerasan, perundungan, dan perlindungan perempuan & anak di seluruh Indonesia.',
    waLink: 'https://wa.me/628111129129?text=Halo%20SAPA%20129,%20saya%20siswa%20SMP%20butuh%20bantuan%20konseling%20dan%20perlindungan'
  },
  {
    name: 'SEJIWA - 119 Ext. 8 (Kemenkes)',
    phone: '119 (ext 8)',
    whatsapp: '0811-10-500-567',
    agency: 'Kementerian Kesehatan RI & HIMPSI',
    description: 'Layanan konsultasi psikologis, pendampingan kesehatan jiwa, dan pertolongan pertama krisis emosional bebas pulsa.',
    waLink: 'https://wa.me/6281110500567?text=Halo%20Halo%20Kemenkes%20SEJIWA,%20saya%20ingin%20konsultasi%20mengenai%20kesehatan%20mental'
  },
  {
    name: 'KPAI (Pengaduan Anak)',
    phone: '(021) 31901556',
    whatsapp: '0811-1002-7727',
    agency: 'Komisi Perlindungan Anak Indonesia',
    description: 'Layanan pengaduan hak anak, perlindungan dari perundungan di sekolah, dan kekerasan anak berbasis WhatsApp resmi.',
    waLink: 'https://wa.me/6281110027727?text=Halo%20KPAI,%20saya%20ingin%20melaporkan%20atau%20berkonsultasi%20terkait%20masalah%20di%20sekolah'
  },
  {
    name: 'Call Center Polisi 110',
    phone: '110',
    whatsapp: '-',
    agency: 'Kepolisian Negara Republik Indonesia (Polri)',
    description: 'Layanan darurat bebas pulsa 24 jam saat kamu atau temanmu menghadapi ancaman bahaya fisik mendesak.',
    waLink: ''
  },
  {
    name: 'Panggilan Darurat Terpadu 112',
    phone: '112',
    whatsapp: '-',
    agency: 'Kemenkominfo & Pemda',
    description: 'Layanan darurat terpadu (bebas pulsa tanpa kartu SIM) untuk kondisi krisis keselamatan di kotamu.',
    waLink: ''
  }
];
