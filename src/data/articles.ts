import { Article } from '../types';

export const ARTICLES_DATA: Article[] = [
  // ==========================================
  // 1. KENALI DIRIMU (8 Materi)
  // ==========================================
  {
    id: 'kd-1',
    slug: 'kenapa-aku-sering-membandingkan-diriku-dengan-orang-lain',
    title: 'Kenapa aku sering membandingkan diriku dengan orang lain?',
    excerpt: 'Melihat teman yang lebih pintar, lebih populer, atau lebih keren di media sosial bisa bikin minder. Yuk pelajari cara melepaskan beban perbandingan.',
    category: 'Kenali Dirimu',
    readTime: '4 menit membaca',
    date: '22 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Scroll feed Instagram atau TikTok, lalu melihat teman sekelas liburan seru atau punya banyak prestasi, tiba-tiba timbul rasa: "Kok hidupku biasa-biasa aja ya? Kok aku nggak sekeren dia?"',
      sections: [
        {
          heading: 'Membandingkan Dapurmu dengan Panggung Orang Lain',
          body: [
            'Orang lain hanya mengunggah momen terbaik dalam hidup mereka. Kamu tidak pernah melihat saat mereka gagal, menangis di kamar, atau merasa cemas.',
            'Ketika kamu membandingkan dirimu, kamu sedang membandingkan seluruh kelemahan di balik layarmu dengan momen terbaik orang lain yang sudah disaring.'
          ],
          callout: {
            type: 'quote',
            title: 'Kutipan Reflektif',
            text: 'Bunga tidak bersaing dengan bunga di sebelahnya untuk mekar. Ia hanya mekar dengan warnanya sendiri.'
          }
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: [
          'Keahlian atau kebaikan apa dalam dirimu yang sering kamu lupakan?',
          'Bagaimana caramu mengingatkan diri saat mulai terjebak membandingkan diri di media sosial?'
        ]
      }
    },
    relatedArticleSlugs: ['kd-2', 'kd-4']
  },
  {
    id: 'kd-2',
    slug: 'menemukan-bakat-terpendam-kamu-nggak-harus-pintar-di-semua-hal',
    title: 'Menemukan bakat terpendam: Kamu nggak harus pintar di semua hal',
    excerpt: 'Merasa biasa saja karena nilaimu rata-rata? Kecerdasan itu luas, bukan cuma tentang rumus Matematika atau hafalan Sejarah.',
    category: 'Kenali Dirimu',
    readTime: '5 menit membaca',
    date: '20 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Banyak anak SMP merasa "tidak punya bakat" hanya karena tidak jago main futsal atau tidak masuk peringkat 3 besar kelas. Padahal kecerdasan manusia sangat majemuk.',
      sections: [
        {
          heading: 'Ragam Kecerdasan yang Sering Terabaikan',
          body: [
            '1. Kecerdasan Interpersonal: Kamu mudah berempati dan jadi pendengar yang menenangkan bagi teman.',
            '2. Kecerdasan Spasial & Kreatif: Kamu terampil menggambar, fotografi, atau merancang konten visual.',
            '3. Kecerdasan Kinestetik: Kamu cepat meniru gerakan olahraga atau terampil merakit barang.'
          ]
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Hal apa yang membuatmu lupa waktu saat melakukannya dan merasa puas setelahnya?']
      }
    },
    relatedArticleSlugs: ['kd-1', 'kd-3']
  },
  {
    id: 'kd-3',
    slug: 'perubahan-tubuh-di-masa-pubertas-normal-kok-merasa-canggung',
    title: 'Perubahan tubuh di masa pubertas: Normal kok merasa canggung',
    excerpt: 'Suara yang pecah, tinggi badan yang melesat, atau jerawat yang tiba-tiba muncul. Semua proses adaptasi fisik ini wajar terjadi.',
    category: 'Kenali Dirimu',
    readTime: '5 menit membaca',
    date: '18 Nov 2026',
    grade: 'Kelas 7',
    thumbnail: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'dr. Farah, Sp.A',
      role: 'Dokter Remaja & Konsultan Kesehatan',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Usia 12–15 tahun adalah masa tubuhmu mengalami lonjakan hormon besar-besaran. Jangan termakan standar foto filter di media sosial.',
      sections: [
        {
          heading: 'Tubuhmu Sedang Berproses',
          body: ['Jerawat dan perubahan bau badan adalah tanda alami kelenjar minyak yang sedang aktif. Mandi teratur dan rawat kulit dengan sabun lembut.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Bagaimana caramu memperlakukan tubuhmu dengan lebih ramah hari ini?']
      }
    },
    relatedArticleSlugs: ['kd-4']
  },
  {
    id: 'kd-4',
    slug: 'membangun-self-love-menjadi-sahabat-terbaik-untuk-dirimu-sendiri',
    title: 'Membangun self-love: Menjadi sahabat terbaik untuk dirimu sendiri',
    excerpt: 'Sering mengkritik diri dengan kata-kata kasar? Belajar berbicara pada diri sendiri dengan kehangatan seperti saat menghibur sahabat.',
    category: 'Kenali Dirimu',
    readTime: '4 menit membaca',
    date: '16 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Self-compassion (belas kasih pada diri sendiri) terbukti meningkatkan daya tahan mental remaja menghadapi ujian dan pertemanan.',
      sections: [
        {
          heading: 'Ubah Suara Hatimu Menjadi Lebih Hangat',
          body: ['Setiap kali kamu melakukan kesalahan kecil, tarik napas dan katakan: "Aku masih belajar, dan salah itu bagian dari bertumbuh."']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Kalimat penguat apa yang ingin kamu dengar saat sedang merasa terpuruk?']
      }
    },
    relatedArticleSlugs: ['kd-1', 'kd-5']
  },
  {
    id: 'kd-5',
    slug: 'mengenal-batasan-diri-kapan-harus-maju-dan-kapan-harus-menepi',
    title: 'Mengenal batasan diri: Kapan harus maju dan kapan harus menepi',
    excerpt: 'Mengetahui batas fisik dan mentalmu adalah kunci agar tidak gampang burnout dan kewalahan di tengah padatnya tugas SMP.',
    category: 'Kenali Dirimu',
    readTime: '4 menit membaca',
    date: '14 Nov 2026',
    grade: 'Kelas 8',
    thumbnail: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Sering merasa tubuhmu menjerit minta tolong karena terlalu banyak komitmen ekstrakurikuler dan tugas?',
      sections: [
        {
          heading: 'Kapasitas Diri Bukan Kelemahan',
          body: ['Pilihlah 1–2 kegiatan yang paling bermakna untukmu. Kualitas keterlibatanmu jauh lebih penting daripada kelelahan fisik.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Kegiatan apa yang saat ini paling menguras energimu tanpa memberi rasa senang?']
      }
    },
    relatedArticleSlugs: ['kd-6']
  },
  {
    id: 'kd-6',
    slug: 'mengatasi-rasa-minder-dan-rasa-takut-salah-saat-di-depan-kelas',
    title: 'Mengatasi rasa minder dan rasa takut salah saat di depan kelas',
    excerpt: 'Jantung berdegup kencang saat nama dipanggil guru untuk membaca? Temukan teknik sederhana menaklukkan rasa grogi.',
    category: 'Kenali Dirimu',
    readTime: '5 menit membaca',
    date: '11 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Rasa grogi adalah tanda bahwa kamu peduli. Teman-teman sekelasmu sebenarnya lebih sibuk memikirkan diri mereka sendiri dibanding kesalahan kecilmu.',
      sections: [
        {
          heading: 'Aturan Spotlight Effect',
          body: ['Jangan biarkan rasa takut membuatmu mundur dari kesempatan mencoba hal baru di depan kelas.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apa hal terburuk yang kamu takutkan saat maju di depan kelas?']
      }
    },
    relatedArticleSlugs: ['kd-1', 'kd-7']
  },
  {
    id: 'kd-7',
    slug: 'kekuatan-introver-vs-ekstrover-kenapa-dua-duanya-sama-kerennya',
    title: 'Kekuatan introver vs ekstrover: Kenapa dua-duanya sama kerennya',
    excerpt: 'Lebih suka menyendiri di pojok perpustakaan atau heboh di tengah lapangan? Kenali tipe kepribadianmu tanpa merasa aneh.',
    category: 'Kenali Dirimu',
    readTime: '4 menit membaca',
    date: '08 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Introver mengisi energi saat sendirian, sedangkan ekstrover mengisi energi saat berinteraksi. Dua-duanya punya kekuatan luar biasa di sekolah.',
      sections: [
        {
          heading: 'Saling Melengkapi dalam Tim',
          body: ['Introver hebat dalam analisis mendalam dan menyimak, sedangkan ekstrover piawai membangun suasana semangat.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Aktivitas apa yang paling cepat memulihkan tenagamu saat lelah?']
      }
    },
    relatedArticleSlugs: ['kd-8']
  },
  {
    id: 'kd-8',
    slug: 'menulis-impian-masa-depan-tanpa-takut-ditertawakan-orang-lain',
    title: 'Menulis impian masa depan tanpa takut ditertawakan orang lain',
    excerpt: 'Punya cita-cita unik yang beda dari teman sekelas? Beranikan diri bermimpi dan mulai melangkah dari sekarang.',
    category: 'Kenali Dirimu',
    readTime: '5 menit membaca',
    date: '05 Nov 2026',
    grade: 'Kelas 9',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Tuliskan cita-citamu di buku rahasia. Impian yang dituliskan punya peluang jauh lebih besar untuk diwujudkan.',
      sections: [
        {
          heading: 'Langkah Awal Mewujudkan Mimpi',
          body: ['Pecah mimpimu menjadi target mingguan yang bisa kamu lakukan sejak usia SMP.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Keahlian apa yang ingin kamu kuasai 3 tahun dari sekarang?']
      }
    },
    relatedArticleSlugs: ['kd-2']
  },

  // ==========================================
  // 2. KENALI EMOSIMU (8 Materi)
  // ==========================================
  {
    id: 'em-1',
    slug: 'kamu-nggak-harus-selalu-baik-baik-saja',
    title: 'Kamu nggak harus selalu baik-baik saja',
    excerpt: 'Sedih, kecewa, dan lelah adalah bagian alami dari menjadi manusia. Izinkan dirimu beristirahat tanpa merasa bersalah.',
    category: 'Kenali Emosimu',
    readTime: '4 menit membaca',
    date: '18 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Di sekolah, mungkin kamu terbiasa tersenyum dan menjawab "Aku nggak apa-apa kok!" padahal di hati ingin menangis.',
      sections: [
        {
          heading: 'Menghindari Toxic Positivity',
          body: ['Menekan emosi sedih tidak akan membuatnya hilang. Air mata adalah cara alami hati melepaskan beban ketegangan.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Kapan terakhir kali kamu mengizinkan dirimu beristirahat tanpa rasa bersalah?']
      }
    },
    relatedArticleSlugs: ['em-2', 'em-3']
  },
  {
    id: 'em-2',
    slug: 'cara-mengelola-emosi-ketika-sedang-marah',
    title: 'Cara mengelola emosi ketika sedang marah',
    excerpt: 'Marah itu manusiawi dan wajar. Yang penting adalah bagaimana kita menyalurkannya tanpa melukai diri sendiri atau orang lain.',
    category: 'Kenali Emosimu',
    readTime: '6 menit membaca',
    date: '12 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Marah adalah sinyal bahwa ada batasanmu yang dilanggar. Tapi bertindak saat amarah memuncak sering berujung penyesalan.',
      sections: [
        {
          heading: 'Teknik Jeda 10 Detik',
          body: ['Tarik napas panjang, basuh muka dengan air dingin, dan tunggu hingga detak jantungmu kembali tenang sebelum membalas perkataan.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Tanda fisik apa yang muncul di tubuhmu saat mulai merasa kesal?']
      }
    },
    relatedArticleSlugs: ['em-1', 'em-4']
  },
  {
    id: 'em-3',
    slug: 'mengatasi-overthinking-yang-bikin-susah-tidur',
    title: 'Mengatasi overthinking yang bikin susah tidur di malam hari',
    excerpt: 'Lampu kamar sudah padam tapi pikiranmu masih berputar memikirkan hari esok? Cara ampuh mengistirahatkan pikiran yang lelah.',
    category: 'Kenali Emosimu',
    readTime: '5 menit membaca',
    date: '10 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Pikiran berputar tentang "gimana kalau nanti salah?" adalah jebakan overthinking yang menguras energi.',
      sections: [
        {
          heading: 'Metode Brain Dump',
          body: ['Tuliskan semua kekhawatiranmu di secarik kertas sebelum tidur. Memindahkan pikiran ke kertas memberi sinyal pada otak bahwa masalahnya sudah tercatat.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Pikiran apa yang paling sering muncul saat kamu hendak tidur?']
      }
    },
    relatedArticleSlugs: ['em-1', 'em-5']
  },
  {
    id: 'em-4',
    slug: 'mengenal-rasa-iri-dan-mengubahnya-jadi-energi-positif',
    title: 'Mengenal rasa iri dan mengubahnya jadi energi positif',
    excerpt: 'Melihat teman dibelikan barang baru atau nilainya selalu bagus? Rasa iri adalah kompas yang memberitahu apa yang kamu inginkan.',
    category: 'Kenali Emosimu',
    readTime: '4 menit membaca',
    date: '08 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Rasa iri seringkali membuat kita merasa bersalah. Padahal rasa iri menandakan ada harapan diri yang belum terwujud.',
      sections: [
        {
          heading: 'Ubah Iri Menjadi Inspirasi',
          body: ['Daripada membenci temanmu, tanyakan: "Langkah apa yang dia lakukan yang bisa kupelajari?"']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Kualitas apa dari orang lain yang paling kamu kagumi dan ingin kamu miliki?']
      }
    },
    relatedArticleSlugs: ['em-2', 'kd-1']
  },
  {
    id: 'em-5',
    slug: 'ketika-kecewa-dengan-hasil-ujian-cara-bangkit-kembali',
    title: 'Ketika kecewa dengan hasil ujian: Cara bangkit dan kembali percaya diri',
    excerpt: 'Sudah belajar siang malam tapi nilainya jeblok? Jangan biarkan kertas ujian meredupkan masa depanmu.',
    category: 'Kenali Emosimu',
    readTime: '5 menit membaca',
    date: '06 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Nilai ujian adalah evaluasi metode belajar pada materi tertentu, bukan ukuran harga dirimu sebagai anak.',
      sections: [
        {
          heading: 'Evaluasi Tanpa Menghakimi Diri',
          body: ['Buka kembali soal yang salah, diskusikan dengan teman atau guru, dan perbaiki cara menghafal atau pemahaman konsepmu.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Bagian materi mana yang kemarin terasa paling sulit bagimu?']
      }
    },
    relatedArticleSlugs: ['em-1', 'bl-1']
  },
  {
    id: 'em-6',
    slug: 'sensitif-dan-gampang-tersinggung-kenapa-mood-remaja-bisa-naik-turun',
    title: 'Sensitif dan gampang tersinggung? Kenapa mood remaja bisa naik turun',
    excerpt: 'Pagi ceria, siang mendadak bete hanya karena perkataan kecil? Pahami cara kerja hormon dan otak emosionalmu.',
    category: 'Kenali Emosimu',
    readTime: '4 menit membaca',
    date: '04 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'dr. Farah, Sp.A',
      role: 'Dokter Remaja & Konsultan Kesehatan',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Amigdala (pusat emosi otak) berkembang lebih cepat di usia remaja dibanding prefrontal cortex (pusat kendali logika).',
      sections: [
        {
          heading: 'Wajar Jika Perasaan Terasa Lebih Kuat',
          body: ['Jangan merasa dirimu "aneh". Sadari saat mood sedang turun dan beri jeda sebelum bereaksi pada orang lain.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apa hal kecil yang biasanya bisa langsung mengembalikan suasana hatimu?']
      }
    },
    relatedArticleSlugs: ['em-2', 'kd-3']
  },
  {
    id: 'em-7',
    slug: 'mengenal-rasa-kesepian-di-tengah-ramainya-sekolah',
    title: 'Mengenal rasa kesepian di tengah ramainya suasana sekolah',
    excerpt: 'Dikelilingi puluhan teman di kelas tapi tetap merasa tidak ada yang benar-benar memahamimu? Kamu tidak sendirian.',
    category: 'Kenali Emosimu',
    readTime: '5 menit membaca',
    date: '02 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Kesepian bukan berarti tidak punya teman sama sekali, melainkan rindu akan obrolan yang mendalam dan tulus.',
      sections: [
        {
          heading: 'Mencari Koneksi yang Nyata',
          body: ['Coba mulai obrolan dari hal kecil dengan satu orang teman yang punya hobi atau minat serupa denganmu.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Siapa satu orang di sekolah yang menurutmu paling ramah dan nyaman diajak ngobrol?']
      }
    },
    relatedArticleSlugs: ['em-1', 'pt-1']
  },
  {
    id: 'em-8',
    slug: 'mengatasi-ketakutan-akan-masa-depan-dan-pilihan-sekolah',
    title: 'Mengatasi ketakutan akan masa depan dan pilihan sekolah lanjutan',
    excerpt: 'Bingung memilih SMA atau SMK? Cara menenangkan rasa cemas dan memetakan minatmu tanpa tekanan berlebihan.',
    category: 'Kenali Emosimu',
    readTime: '5 menit membaca',
    date: '30 Okt 2026',
    grade: 'Kelas 9',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Menjelang kelulusan SMP, wajar merasa bimbang. Ingatlah bahwa setiap jalur pendidikan punya jalan suksesnya masing-masing.',
      sections: [
        {
          heading: 'Diskusi dengan Guru BK',
          body: ['Manfaatkan tes minat bakat di sekolah untuk membantumu melihat kecenderungan bidang yang cocok.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apa yang lebih kamu sukai: belajar teori mendalam (SMA) atau praktik keterampilan langsung (SMK)?']
      }
    },
    relatedArticleSlugs: ['bl-1', 'kd-8']
  },

  // ==========================================
  // 3. PERTEMANAN (8 Materi)
  // ==========================================
  {
    id: 'pt-1',
    slug: 'teman-yang-baik-nggak-membuatmu-kehilangan-diri-sendiri',
    title: 'Teman yang baik nggak membuatmu kehilangan diri sendiri',
    excerpt: 'Pertemanan yang sehat itu bukan tentang selalu sama, tapi saling menerima apa adanya. Kamu berhak punya pendapat, kesukaan, dan batasanmu sendiri.',
    category: 'Pertemanan',
    readTime: '5 menit membaca',
    date: '20 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Pernah merasa harus pura-pura suka sesuatu hanya agar diterima dalam satu geng di sekolah?',
      sections: [
        {
          heading: 'Ciri Pertemanan yang Menghargai Batasanmu',
          body: ['Teman sejati menghargai perbedaan pendapat dan tidak memaksamu melanggar aturan hanya demi kekompakan semu.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Bagaimana perasaanmu ketika bisa menjadi diri sendiri seutuhnya di depan sahabatmu?']
      }
    },
    relatedArticleSlugs: ['pt-2', 'pt-3']
  },
  {
    id: 'pt-2',
    slug: 'berani-bilang-tidak-bukan-berarti-kamu-jahat',
    title: 'Berani bilang tidak bukan berarti kamu jahat',
    excerpt: 'Belajar menetapkan batas dengan sopan dan tegas tanpa rasa bersalah. Lindungi energimu untuk hal-hal yang benar-benar penting.',
    category: 'Pertemanan',
    readTime: '3 menit membaca',
    date: '15 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Menolak ajakan yang tidak nyaman adalah hakmu sebagai manusia merdeka.',
      sections: [
        {
          heading: 'Contoh Menolak yang Sopan',
          body: ['"Makasih udah ngajak, tapi hari ini aku mau langsung pulang istirahat ya." Sahabat yang tulus pasti menghormatinya.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Kapan terakhir kali kamu berani menolak ajakan yang kurang nyaman bagimu?']
      }
    },
    relatedArticleSlugs: ['pt-1', 'pt-4']
  },
  {
    id: 'pt-3',
    slug: 'menghadapi-teman-yang-toxic-dan-suka-memanipulasi',
    title: 'Menghadapi teman yang manipulatif: Kenali sinyal bahayanya',
    excerpt: 'Teman yang baik membuatmu berdaya, bukan membuatmu merasa bersalah terus-menerus. Kenali tanda "red flag" dalam pertemanan.',
    category: 'Pertemanan',
    readTime: '5 menit membaca',
    date: '13 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Apakah ada teman yang hanya mencarimu saat butuh contekan atau sering mendiamkanmu jika tidak menuruti kemauannya?',
      sections: [
        {
          heading: 'Menjaga Jarak Aman',
          body: ['Kamu berhak membatasi waktu interaksi dengan orang yang terus-menerus menguras energi mentalmu.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apakah pertemananmu saat ini membuatmu merasa tenang atau justru sering cemas?']
      }
    },
    relatedArticleSlugs: ['pt-1', 'pt-2']
  },
  {
    id: 'pt-4',
    slug: 'mengatasi-fomo-fear-of-missing-out-saat-tidak-diajak-kumpul',
    title: 'Mengatasi FOMO saat melihat teman-teman nongkrong tanpamu',
    excerpt: 'Melihat story teman kumpul tanpa mengajakmu bisa menusuk hati. Begini cara meredakan rasa cemas dan tersingkir.',
    category: 'Pertemanan',
    readTime: '4 menit membaca',
    date: '11 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Tidak diajak bukan berarti kamu tidak disukai; seringkali itu hanya rencana spontan yang tidak disengaja.',
      sections: [
        {
          heading: 'Alihkan Fokus pada Kegiatan Pribadi',
          body: ['Gunakan waktu luangmu untuk hobi favoritmu daripada terus menerus memantau linimasa media sosial.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apa hal menyenangkan yang bisa kamu lakukan sendiri malam ini?']
      }
    },
    relatedArticleSlugs: ['pt-1', 'dg-1']
  },
  {
    id: 'pt-5',
    slug: 'cara-minta-maaf-yang-tulus-saat-kamu-berbuat-salah-ke-sahabat',
    title: 'Cara minta maaf yang tulus saat kamu berbuat salah ke sahabat',
    excerpt: 'Menurunkan ego dan mengakui kesalahan memang tidak mudah. Tapi permintaan maaf yang tulus bisa mempererat persahabatan.',
    category: 'Pertemanan',
    readTime: '4 menit membaca',
    date: '09 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Hindari kata "Maaf ya kalau kamu baper". Mintalah maaf secara tulus atas tindakan spesifikmu.',
      sections: [
        {
          heading: '3 Rumus Maaf Tulus',
          body: ['1. Akui kesalahan, 2. Nyatakan penyesalan, 3. Tawarkan perbaikan perilaku ke depan.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apakah ada permintaan maaf yang sedang tertunda untuk kamu sampaikan?']
      }
    },
    relatedArticleSlugs: ['pt-1', 'pt-6']
  },
  {
    id: 'pt-6',
    slug: 'cara-beradaptasi-di-kelas-baru-tanpa-merasa-canggung',
    title: 'Cara beradaptasi di kelas baru atau lingkungan baru',
    excerpt: 'Baru masuk SMP atau terpisah dari teman SD? Tips memulai obrolan ringan pertama tanpa rasa takut ditolak.',
    category: 'Pertemanan',
    readTime: '5 menit membaca',
    date: '07 Nov 2026',
    grade: 'Kelas 7',
    thumbnail: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Semua anak baru merasakan kegugupan yang sama saat pertama kali menginjakkan kaki di kelas baru.',
      sections: [
        {
          heading: 'Trik Pembuka Obrolan Sederhana',
          body: ['Mulai dari bertanya tentang jadwal pelajaran, memuji kotak pensilnya, atau menawarkan berbagi camilan.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Siapa teman sebangkumu saat ini dan hal apa yang sudah kalian obrolkan?']
      }
    },
    relatedArticleSlugs: ['pt-1', 'kd-6']
  },
  {
    id: 'pt-7',
    slug: 'ketika-sahabatmu-punya-sahabat-baru-mengatasi-rasa-cemburu',
    title: 'Ketika sahabatmu punya sahabat baru: Mengatasi rasa cemburu sosial',
    excerpt: 'Merasa tersisihkan saat teman akrabmu mulai dekat dengan orang lain? Pahami bahwa pertemanan bisa terus bertumbuh luas.',
    category: 'Pertemanan',
    readTime: '4 menit membaca',
    date: '04 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Pertemanan bukan kepemilikan tunggal. Sahabatmu berhak berteman dengan yang lain, begitu juga kamu.',
      sections: [
        {
          heading: 'Memperluas Lingkaran Pertemanan',
          body: ['Cobalah membuka diri untuk berkenalan juga dengan teman barunya. Lingkaran yang lebih luas membuat hari sekolah lebih berwarna.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Bagaimana caramu tetap menjaga kedekatan tanpa bersikap mengekang?']
      }
    },
    relatedArticleSlugs: ['pt-1', 'pt-3']
  },
  {
    id: 'pt-8',
    slug: 'menjaga-rahasia-teman-menjadi-sosok-yang-bisa-dipercaya',
    title: 'Menjaga rahasia teman: Menjadi sosok yang bisa dipercaya di kelas',
    excerpt: 'Kepercayaan adalah mata uang paling berharga dalam persahabatan. Sekali bocor, butuh waktu lama untuk memulihkannya.',
    category: 'Pertemanan',
    readTime: '4 menit membaca',
    date: '01 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Menahan diri untuk tidak ikut bergosip atau membocorkan curhatan teman menunjukkan integritas karaktermu.',
      sections: [
        {
          heading: 'Kecuali Menyangkut Keselamatan',
          body: ['Jika rahasia tersebut membahayakan nyawa atau keselamatan fisik temanmu (misal kasus bullying berat), kamu wajib melapor ke guru BK.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Siapa sosok teman yang paling kamu percayai saat ini dan mengapa?']
      }
    },
    relatedArticleSlugs: ['pt-1', 'pt-2']
  },

  // ==========================================
  // 4. BELAJAR & MASA DEPAN (8 Materi)
  // ==========================================
  {
    id: 'bl-1',
    slug: 'cara-membangun-kebiasaan-belajar-yang-konsisten',
    title: 'Cara membangun kebiasaan belajar yang konsisten',
    excerpt: 'Belajar 20 menit setiap hari jauh lebih berdampak daripada sistem kebut semalam yang bikin kepala pusing dan cepat lupa.',
    category: 'Belajar',
    readTime: '6 menit membaca',
    date: '19 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Otak manusia menyerap informasi lebih baik dengan teknik pengulangan berjeda (spaced repetition).',
      sections: [
        {
          heading: 'Gunakan Teknik Pomodoro',
          body: ['Fokus penuh 25 menit, istirahat 5 menit. Lakukan 2-3 siklus setiap sore hari.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Jam berapa di rumah saat energimu terasa paling segar untuk belajar?']
      }
    },
    relatedArticleSlugs: ['bl-2', 'bl-3']
  },
  {
    id: 'bl-2',
    slug: 'sedikit-demi-sedikit-tugas-juga-bisa-selesai',
    title: 'Sedikit demi sedikit, tugas juga bisa selesai',
    excerpt: 'Tumpukan PR yang menggunung terasa menakutkan? Trik memecah tugas besar menjadi potongan kecil yang mudah dikerjakan.',
    category: 'Belajar',
    readTime: '5 menit membaca',
    date: '10 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Ketika tugas tampak terlalu raksasa, otak menganggapnya sebagai ancaman. Pecah tugas menjadi bagian yang bisa selesai dalam 15 menit.',
      sections: [
        {
          heading: 'Rayakan Setiap Checkmark',
          body: ['Mencoret daftar tugas melepaskan dopamin yang memicu semangat mengerjakan nomor selanjutnya.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Tugas apa yang paling sering kamu tunda minggu ini?']
      }
    },
    relatedArticleSlugs: ['bl-1', 'bl-4']
  },
  {
    id: 'bl-3',
    slug: 'cara-membuat-catatan-yang-rapi-dan-menyenangkan-dibaca',
    title: 'Cara membuat catatan yang rapi dan menyenangkan dibaca',
    excerpt: 'Bosan melihat tulisan hitam putih yang bikin ngantuk? Gunakan teknik mind mapping dan visual note taking.',
    category: 'Belajar',
    readTime: '4 menit membaca',
    date: '08 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Catatan bukan menyalin seluruh buku, melainkan merangkum kata kunci dan alur konsep.',
      sections: [
        {
          heading: 'Kode Warna Stabilo',
          body: ['Kuning untuk istilah baru, hijau untuk rumus penting, dan oranye untuk contoh soal.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Pelajaran apa yang paling butuh rangkuman visual agar lebih mudah dipahami?']
      }
    },
    relatedArticleSlugs: ['bl-1', 'bl-5']
  },
  {
    id: 'bl-4',
    slug: 'tips-menjaga-fokus-saat-belajar-dan-menjauhkan-distraksi-hp',
    title: 'Tips menjaga fokus saat belajar dan menjauhkan distraksi gadget',
    excerpt: 'Baru buka buku 5 menit sudah gatal ingin membuka Instagram atau game? Lindungi konsentrasimu dengan trik sederhana.',
    category: 'Belajar',
    readTime: '4 menit membaca',
    date: '06 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Jauhkan ponsel dari jangkauan tangan saat sesi belajar 25 menit pertama. Meletakkannya di ruangan lain terbukti meningkatkan fokus hingga 40%.',
      sections: [
        {
          heading: 'Satu Tugas pada Satu Waktu',
          body: ['Hindari multitasking. Menyelesaikan satu PR Matematika sebelum beralih ke IPA jauh lebih cepat tuntas.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apa distraksi terbesar di mejamu saat sedang belajar?']
      }
    },
    relatedArticleSlugs: ['bl-1', 'dg-1']
  },
  {
    id: 'bl-5',
    slug: 'belajar-kelompok-yang-efektif-bukan-cuma-nongkrong-dan-ngerumpi',
    title: 'Belajar kelompok yang efektif tanpa berakhir sekadar nongkrong',
    excerpt: 'Niatnya ngerjain tugas bareng tapi malah berjam-jam pesan makanan dan main game? Begini cara membaginya.',
    category: 'Belajar',
    readTime: '5 menit membaca',
    date: '04 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Tentukan target pengerjaan sebelum memulai obrolan santai, misalnya: selesaikan 10 soal dulu baru boleh istirahat makan.',
      sections: [
        {
          heading: 'Bagi Peran yang Jelas',
          body: ['Ada yang mencari materi, ada yang merangkum poin, dan ada yang menyusun tampilan presentasi.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Dengan siapa biasanya kamu merasa paling produktif saat belajar bersama?']
      }
    },
    relatedArticleSlugs: ['bl-1', 'pt-1']
  },
  {
    id: 'bl-6',
    slug: 'cara-bertanya-ke-guru-di-kelas-tanpa-takut-dianggap-bodoh',
    title: 'Cara bertanya ke guru di kelas tanpa takut dianggap tidak mengerti',
    excerpt: 'Malu angkat tangan saat materi belum jelas? Ingat: bertanya adalah tanda orang cerdas yang ingin memastikan.',
    category: 'Belajar',
    readTime: '4 menit membaca',
    date: '02 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Ketika kamu berani bertanya di kelas, biasanya ada 10 teman lain yang sebenarnya punya pertanyaan yang sama tapi tidak berani bersuara.',
      sections: [
        {
          heading: 'Format Bertanya yang Santun',
          body: ['"Permisi Pak/Bu, di langkah kedua tadi saya belum menangkap konsepnya, bolehkah diulang sedikit?"']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Materi apa minggu ini yang masih terasa membingungkan di kepalamu?']
      }
    },
    relatedArticleSlugs: ['bl-1', 'kd-6']
  },
  {
    id: 'bl-7',
    slug: 'persiapan-mental-menghadapi-ujian-akhir-semester',
    title: 'Persiapan mental dan fisik menghadapi Ujian Akhir Semester (UAS)',
    excerpt: 'Bukan cuma belajar materi, menjaga fisik agar tidak drop saat hari ujian adalah setengah dari kemenangan.',
    category: 'Belajar',
    readTime: '5 menit membaca',
    date: '31 Okt 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Tidur minimal 7 jam sebelum hari H ujian. Kurang tidur menurunkan daya ingat hingga 30% saat di depan lembar soal.',
      sections: [
        {
          heading: 'Sarapan dan Air Putih',
          body: ['Otak butuh glukosa dan hidrasi untuk berpikir jernih. Jangan berangkat ujian dengan perut kosong.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Bagaimana jadwal tidurmu menjelang pekan ujian sekolah?']
      }
    },
    relatedArticleSlugs: ['bl-1', 'em-1']
  },
  {
    id: 'bl-8',
    slug: 'menumbuhkan-rasa-ingin-tahu-belajar-karena-penasaran-bukan-terpaksa',
    title: 'Menumbuhkan rasa ingin tahu: Belajar karena penasaran, bukan terpaksa',
    excerpt: 'Ketika belajar terasa seperti beban, cari tahu hubungan ilmu tersebut dengan hal-hal menarik di dunia nyata.',
    category: 'Belajar',
    readTime: '4 menit membaca',
    date: '28 Okt 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Fisika menjelaskan kenapa skateboard bisa meluncur, biologi menjelaskan kenapa kita bisa jatuh cinta. Ilmu pengetahuan itu seru jika dikaitkan dengan kehidupan nyata.',
      sections: [
        {
          heading: 'Eksplorasi Video Sains dan Dokumenter',
          body: ['Tonton kanal edukasi sains populer untuk melihat aplikasi nyata dari rumus yang diajarkan di kelas.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Topik apa di sekolah yang paling membuatmu penasaran untuk mencari tahu lebih banyak di YouTube?']
      }
    },
    relatedArticleSlugs: ['bl-1', 'kd-2']
  },

  // ==========================================
  // 5. KELUARGA & KOMUNIKASI (8 Materi)
  // ==========================================
  {
    id: 'kl-1',
    slug: 'cara-bicara-dengan-orang-tua-tanpa-takut-dihakimi',
    title: 'Cara bicara dengan orang tua tanpa takut dihakimi',
    excerpt: 'Membuka obrolan jujur dengan ayah atau ibu memang bikin deg-degan. Tapi ada cara agar suasananya tetap hangat dan saling mengerti.',
    category: 'Keluarga',
    readTime: '6 menit membaca',
    date: '17 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Sering merasa orang tua "nggak paham jamanku"? Mau cerita tentang masalah di sekolah tapi takut malah diomeli?',
      sections: [
        {
          heading: 'Beri Tahu Kebutuhanmu di Awal',
          body: ['Katakan di awal dengan santai: "Pah/Mah, aku cuma mau cerita dan didengarkan dulu ya, belum butuh solusi kok."']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Kapan biasanya orang tuamu terlihat paling santai diajak ngobrol santai?']
      }
    },
    relatedArticleSlugs: ['kl-2', 'kl-3']
  },
  {
    id: 'kl-2',
    slug: 'menghadapi-ekspektasi-tinggi-orang-tua-terhadap-nilai-sekolah',
    title: 'Menghadapi ekspektasi tinggi orang tua terhadap nilai sekolah',
    excerpt: 'Takut mengecewakan orang tua saat ulangan tidak sesuai harapan? Cara mengomunikasikan batas kemampuanmu secara sopan.',
    category: 'Keluarga',
    readTime: '5 menit membaca',
    date: '14 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Sebagian besar orang tua menuntut nilai tinggi karena rasa cemas akan masa depanmu, meski kadang caranya terasa menekan.',
      sections: [
        {
          heading: 'Tunjukkan Usaha, Bukan Hanya Hasil',
          body: ['Perlihatkan buku catatanmu dan usahamu belajar. Orang tua yang melihat proses usahamu biasanya akan lebih mengerti.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Bagaimana caramu menjelaskan usahamu pada orang tua saat nilai kurang maksimal?']
      }
    },
    relatedArticleSlugs: ['kl-1', 'em-5']
  },
  {
    id: 'kl-3',
    slug: 'ketika-orang-tua-sering-bertengkar-di-rumah-apa-yang-bisa-kamu-lakukan',
    title: 'Ketika orang tua bertengkar di rumah: Cara melindungi kesehatan mentalmu',
    excerpt: 'Suasana rumah terasa tegang dan bising karena konflik orang dewasa? Ingatlah bahwa pertengkaran mereka BUKAN salahmu.',
    category: 'Keluarga',
    readTime: '5 menit membaca',
    date: '12 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Kamu adalah anak, bukan penengah masalah rumah tangga orang dewasa. Lindungi dirimu jika suasana mulai tidak nyaman.',
      sections: [
        {
          heading: 'Cari Ruang Aman',
          body: ['Masuk ke kamar, gunakan headphone mendengarkan musik menenangkan, atau hubungi guru BK jika merasa tidak aman.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Siapa sosok orang dewasa terpercaya yang bisa kamu hubungi saat butuh tempat berlindung?']
      }
    },
    relatedArticleSlugs: ['kl-1', 'kl-4']
  },
  {
    id: 'kl-4',
    slug: 'mengatasi-konflik-dengan-saudara-kandung-kakak-atau-adik',
    title: 'Mengatasi konflik dengan saudara kandung: Kapan harus mengalah dan tegas',
    excerpt: 'Sering ribut soal barang pinjaman, giliran cuci piring, atau remote TV? Tips menjaga hubungan rukun dengan kakak/adik.',
    category: 'Keluarga',
    readTime: '4 menit membaca',
    date: '10 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Perselisihan dengan saudara kandung adalah tempat pertama kita belajar negosiasi dan diplomasi sosial.',
      sections: [
        {
          heading: 'Buat Aturan Bersama',
          body: ['Sepakati aturan sederhana: izin sebelum meminjam barang dan kembalikan ke tempat semula.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apa hal yang paling sering memicu perdebatan dengan saudaramu di rumah?']
      }
    },
    relatedArticleSlugs: ['kl-1', 'em-2']
  },
  {
    id: 'kl-5',
    slug: 'menjelaskan-privasi-kamar-dan-ruang-pribadi-ke-orang-tua',
    title: 'Menjelaskan kebutuhan privasi ke orang tua secara santun',
    excerpt: 'Mulai ingin punya ruang sendiri untuk belajar dan merenung tanpa diganggu? Cara bicara agar orang tua tidak tersinggung.',
    category: 'Keluarga',
    readTime: '4 menit membaca',
    date: '08 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Di usia SMP, kebutuhan akan privasi meningkat. Orang tua kadang mengira kamu menyembunyikan rahasia besar jika menutup pintu.',
      sections: [
        {
          heading: 'Beri Penjelasan Terbuka',
          body: ['"Mah/Pah, aku tutup pintu kamar sebentar ya untuk fokus ngerjain PR dan istirahat. Nanti pas makan malam aku keluar ngobrol bareng."']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Bagaimana caramu menjaga kepercayaan orang tua di rumah?']
      }
    },
    relatedArticleSlugs: ['kl-1', 'kl-6']
  },
  {
    id: 'kl-6',
    slug: 'ketika-keluarga-mengalami-kesulitan-finansial-cara-menyikapinya',
    title: 'Ketika keluarga mengalami kesulitan keuangan: Sikap bijak remaja',
    excerpt: 'Mendengar orang tua cemas soal biaya sekolah dan kebutuhan rumah tangga? Begini cara mendukung tanpa membebani pikiranmu berlebih.',
    category: 'Keluarga',
    readTime: '5 menit membaca',
    date: '05 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Tugas utamamu adalah belajar dengan giat dan merawat barang yang kamu punya agar tahan lama.',
      sections: [
        {
          heading: 'Dukungan Moral Sederhana',
          body: ['Membuatkan teh hangat atau mengucapkan terima kasih atas kerja keras ayah dan ibu adalah kehangatan terbesar bagi mereka.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apa hal sederhana yang bisa kamu lakukan hari ini untuk meringankan senyum orang tuamu?']
      }
    },
    relatedArticleSlugs: ['kl-1', 'kd-4']
  },
  {
    id: 'kl-7',
    slug: 'menghadapi-kehilangan-anggota-keluarga-atau-hewan-peliharaan',
    title: 'Menghadapi duka dan rasa kehilangan di dalam keluarga',
    excerpt: 'Kehilangan kakek, nenek, atau hewan peliharaan tersayang terasa sangat menyakitkan. Memahami tahapan duka (grief).',
    category: 'Keluarga',
    readTime: '5 menit membaca',
    date: '03 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Rasa rindu dan sedih saat kehilangan adalah wajar. Berikan waktu bagi hatimu untuk memproses kenangan indah bersamanya.',
      sections: [
        {
          heading: 'Bicarakan Kenangan Manis',
          body: ['Menceritakan hal-hal lucu dan berkesan tentang sosok tersebut membantu mengobati rasa hampa di dada.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Kenangan terindah apa yang paling kamu syukuri pernah kamu lalui bersama sosok tersebut?']
      }
    },
    relatedArticleSlugs: ['em-1', 'kl-1']
  },
  {
    id: 'kl-8',
    slug: 'menciptakan-waktu-kumpul-keluarga-yang-hangat-tanpa-main-hp',
    title: 'Menciptakan waktu kumpul keluarga yang hangat tanpa distraksi layar',
    excerpt: 'Semua orang duduk di ruang tamu tapi sibuk menunduk menatap layar masing-masing? Tips mengembalikan kehangatan obrolan meja makan.',
    category: 'Keluarga',
    readTime: '4 menit membaca',
    date: '01 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Coba ajak keluarga bermain board game sederhana, memasak martabak bersama di akhir pekan, atau saling berbagi cerita lucu di sekolah.',
      sections: [
        {
          heading: 'Aturan No Gadget di Meja Makan',
          body: ['Menaruh HP di keranjang selama 30 menit santap malam membuka ruang saling bertanya kabar hari ini.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Kapan terakhir kali kamu tertawa bersama seluruh anggota keluarga di rumah?']
      }
    },
    relatedArticleSlugs: ['kl-1', 'dg-1']
  },

  // ==========================================
  // 6. DUNIA DIGITAL (8 Materi)
  // ==========================================
  {
    id: 'dg-1',
    slug: 'bijak-menggunakan-media-sosial-agar-tidak-kecanduan',
    title: 'Bijak menggunakan media sosial agar tidak kecanduan',
    excerpt: 'Media sosial itu seru untuk hiburan, tapi kalau bikin kamu lupa waktu tidur dan cemas berlebihan, saatnya pasang batasan digital.',
    category: 'Dunia Digital',
    readTime: '4 menit membaca',
    date: '14 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Aplikasi dirancang memicu dopamin agar kita terus scroll. Pasang batas waktu aplikasi dan matikan notifikasi yang tidak penting.',
      sections: [
        {
          heading: 'Detoks Digital Sederhana',
          body: ['"No Screen 30 Menit Sebelum Tidur" terbukti meningkatkan kualitas tidur dan konsentrasi belajar paginya.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Berapa jam biasanya screen time harianmu di HP?']
      }
    },
    relatedArticleSlugs: ['dg-2', 'dg-3']
  },
  {
    id: 'dg-2',
    slug: 'mencegah-dan-menghadapi-cyberbullying-di-media-sosial',
    title: 'Mencegah dan menghadapi perundungan siber (cyberbullying)',
    excerpt: 'Komentar jahat di kolom chat atau akun anonim yang menyebarkan fitnah? Lindungi dirimu dengan langkah hukum dan keamanan digital.',
    category: 'Dunia Digital',
    readTime: '5 menit membaca',
    date: '12 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Nabila, S.Psi',
      role: 'Konselor Sahabat Remaja',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Jangan membalas komentar jahat dengan kata-kata kasar. Ambil tangkapan layar (screenshot) sebagai barang bukti dan langsung blokir akunnya.',
      sections: [
        {
          heading: 'Laporkan ke Pihak Terpercaya',
          body: ['Tunjukkan bukti tersebut kepada orang tua atau guru BK agar mendapatkan perlindungan dan penanganan yang tepat.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apakah kamu tahu cara memblokir dan melaporkan akun pelecehan di Instagram atau TikTok?']
      }
    },
    relatedArticleSlugs: ['dg-1', 'dg-4']
  },
  {
    id: 'dg-3',
    slug: 'menjaga-jejak-digital-digital-footprint-agar-tidak-merugikan-masa-depan',
    title: 'Menjaga jejak digital: Apa yang kamu unggah hari ini bisa dilihat selamanya',
    excerpt: 'Posting foto aib atau curhatan emosional yang bisa bikin menyesal di kemudian hari? Pahami konsep digital footprint.',
    category: 'Dunia Digital',
    readTime: '4 menit membaca',
    date: '10 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Meskipun sebuah postingan atau story sudah dihapus, orang lain bisa saja sudah mengambil tangkapan layarnya.',
      sections: [
        {
          heading: 'Uji Saring Sebelum Posting',
          body: ['Tanyakan: "Apakah aku akan bangga jika orang tua atau calon guru SMA melihat postingan ini 3 tahun lagi?"']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Pernahkah kamu menghapus postingan lama karena merasa malu?']
      }
    },
    relatedArticleSlugs: ['dg-1', 'dg-5']
  },
  {
    id: 'dg-4',
    slug: 'keamanan-data-pribadi-jangan-pernah-bagikan-informasi-ini-di-internet',
    title: 'Keamanan data pribadi: Informasi sensitif yang haram dibagikan online',
    excerpt: 'Tren membagikan kartu tanda pelajar, alamat rumah, atau nomor telepon di media sosial? Hati-hati bahaya doxxing.',
    category: 'Dunia Digital',
    readTime: '5 menit membaca',
    date: '08 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Jangan pernah membagikan boarding pass, tiket konser, atau kartu identitas dengan barcode yang terlihat jelas.',
      sections: [
        {
          heading: 'Password yang Kuat dan 2FA',
          body: ['Aktifkan verifikasi dua langkah (2FA) di akun Google dan media sosialmu agar tidak mudah diretas.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apakah password akunmu masih menggunakan tanggal lahir yang mudah ditebak?']
      }
    },
    relatedArticleSlugs: ['dg-2', 'dg-3']
  },
  {
    id: 'dg-5',
    slug: 'waspada-terhadap-orang-asing-di-game-online-dan-media-sosial',
    title: 'Waspada terhadap orang asing di game online (Grooming Awareness)',
    excerpt: 'Teman mabar di game online yang tiba-tiba meminta foto pribadi atau mengajak ketemuan diam-diam? Kenali sinyal bahaya.',
    category: 'Dunia Digital',
    readTime: '5 menit membaca',
    date: '05 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Orang dewasa yang berniat jahat sering menyamar sebagai sesama remaja di game online dengan iming-iming skin atau diamond gratis.',
      sections: [
        {
          heading: 'Jangan Pernah Kirim Foto Pribadi',
          body: ['Jika ada yang meminta foto tubuh atau mengancam menyebarkan percakapan, segera lapor ke orang tua atau guru BK. Kamu dilindungi hukum!']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Apakah kamu pernah merasa tidak nyaman dengan percakapan seseorang saat bermain game online?']
      }
    },
    relatedArticleSlugs: ['dg-2', 'dg-4']
  },
  {
    id: 'dg-6',
    slug: 'membedakan-berita-hoaks-dan-fakta-di-grup-whatsapp',
    title: 'Membedakan berita hoaks dan fakta di linimasa internet',
    excerpt: 'Informasi viral yang heboh dan bikin panik? Latih kemampuan berpikir kritis (critical thinking) sebelum menekan tombol share.',
    category: 'Dunia Digital',
    readTime: '4 menit membaca',
    date: '03 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Judul berita bombastis (clickbait) seringkali memutarbalikkan fakta demi mendapatkan traffic iklan.',
      sections: [
        {
          heading: 'Periksa Sumber Resmi',
          body: ['Cek apakah portal berita nasional resmi memuat kabar tersebut sebelum mempercayainya mentah-mentah.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Pernahkah kamu tertipu oleh berita palsu yang ternyata hanya candaan?']
      }
    },
    relatedArticleSlugs: ['dg-1', 'dg-7']
  },
  {
    id: 'dg-7',
    slug: 'menggunakan-gadget-untuk-karya-bukan-cuma-konsumen-konten',
    title: 'Menggunakan gadget untuk berkarya: Menjadi kreator, bukan cuma penonton',
    excerpt: 'Smartphone di tanganmu punya kamera canggih dan aplikasi edit gratis. Jadikan ia studio berkaryamu.',
    category: 'Dunia Digital',
    readTime: '5 menit membaca',
    date: '01 Nov 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Dimas, M.Pd',
      role: 'Pendidik & Mentor Belajar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Belajar desain grafis di Canva, membuat animasi sederhana, atau menulis cerpen di Wattpad jauh lebih memuaskan dibanding scroll tanpa henti.',
      sections: [
        {
          heading: 'Mulai dari Proyek Kecil',
          body: ['Buat poster edukasi untuk kelas atau edit video kenangan bersama teman-teman sekolahmu.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Karya apa yang paling ingin kamu buat menggunakan ponselmu tahun ini?']
      }
    },
    relatedArticleSlugs: ['dg-1', 'kd-2']
  },
  {
    id: 'dg-8',
    slug: 'etika-berkomentar-di-internet-menjadi-warganet-yang-berempati',
    title: 'Etika berkomentar di internet: Menjadi warganet yang beradab',
    excerpt: 'Di balik setiap akun media sosial ada manusia asli yang punya perasaan. Mengapa kata-kata kita di internet tetap harus sopan.',
    category: 'Dunia Digital',
    readTime: '4 menit membaca',
    date: '29 Okt 2026',
    grade: 'Semua Kelas',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: 'Kak Sarah, M.Psi',
      role: 'Psikolog Perkembangan Remaja',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    },
    content: {
      intro: 'Aturan emas berkomunikasi digital: Jangan mengetikkan apa pun di internet yang tidak berani kamu katakan langsung di depan wajah orang tersebut.',
      sections: [
        {
          heading: 'Sebarkan Semangat, Bukan Kebencian',
          body: ['Tinggalkan komentar apresiasi pada karya teman. Satu kalimat positif bisa menyelamatkan hari seseorang yang sedang bersedih.']
        }
      ],
      reflection: {
        title: 'Coba pikirkan:',
        questions: ['Pernahkah sebuah komentar baik di internet membuatmu merasa sangat bahagia?']
      }
    },
    relatedArticleSlugs: ['dg-1', 'dg-2']
  }
];
