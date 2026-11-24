import { VideoItem } from '../types';

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'vid-1',
    slug: 'cara-mengelola-stres-di-sekolah',
    title: 'Cara Mengelola Stres di Sekolah',
    description: 'Video ini membahas penyebab stres di sekolah dan cara mengelolanya agar kamu tetap semangat, fokus, dan tidak kewalahan menghadapi ujian atau tugas bertubi-tubi.',
    duration: '06:40',
    category: 'Kenali Emosimu',
    youtubeId: 'd3st1aMmmiU',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://img.youtube.com/vi/d3st1aMmmiU/hqdefault.jpg',
    featured: true,
    summary: {
      points: [
        'Mengenali tanda-tanda stres fisik (bahu tegang, pusing, susah tidur) dan emosional (mudah tersinggung, cemas berlebihan).',
        'Teknik pernapasan 4-7-8 untuk meredakan ketegangan sistem saraf otonom seketika saat panik.',
        'Membagi tugas menjadi checklist harian yang realistis tanpa memaksakan diri harus sempurna hari ini.',
        'Pentingnya tidur 7–8 jam dan tidak mengorbankan waktu istirahat demi bermain game atau medsos sampai larut malam.'
      ],
      keyTakeaway: 'Stres adalah respon alami tubuh terhadap tantangan. Kamu tidak perlu menghilangkannya sama sekali, tapi melatih caramu meresponnya dengan tenang dan penuh kendali diri.'
    },
    transcript: [
      { timestamp: '00:00', speaker: 'Narator', text: 'Halo teman-teman! Pernah merasa kepalamu mau pecah saat melihat tumpukan PR di meja?' },
      { timestamp: '01:15', speaker: 'Konselor Remaja', text: 'Stres di usia SMP biasanya bersumber dari ujian, ekspektasi orang tua, atau dinamika pertemanan di kelas.' },
      { timestamp: '02:45', speaker: 'Konselor Remaja', text: 'Langkah pertama yang bisa kamu lakukan adalah mengambil jeda. Tarik napas perlahan dan minum air putih hangat.' },
      { timestamp: '04:20', speaker: 'Narator', text: 'Jangan ragu bercerita kepada guru BK atau orang tua jika beban tugas terasa terlalu berat.' },
      { timestamp: '06:00', speaker: 'Narator', text: 'Ingat, nilaimu tidak menentukan seluruh nilai kemanusiaanmu. Bertumbuhlah dengan caramu!' }
    ],
    reflection: {
      questions: [
        'Pelajaran atau situasi sekolah apa yang paling sering membuatmu merasa tertekan belakangan ini?',
        'Apa satu kebiasaan rileks yang bisa kamu coba lakukan malam ini sebelum tidur?'
      ]
    },
    quiz: [
      {
        id: 1,
        question: 'Apa langkah pertama yang disarankan saat mulai merasa overwhelmed dengan tugas sekolah?',
        options: [
          'Langsung bergadang semalaman sampai selesai',
          'Berhenti sejenak, ambil jeda napas, dan bagi tugas jadi bagian kecil',
          'Mengabaikan semua tugas dan bermain game',
          'Memarahi teman sebangku'
        ],
        correctIndex: 1,
        explanation: 'Mengambil jeda sejenak membantu menenangkan sistem saraf dan menjernihkan pikiran sebelum menyusun skala prioritas.'
      },
      {
        id: 2,
        question: 'Berapa durasi tidur ideal untuk remaja usia SMP agar fungsi otak tetap optimal?',
        options: ['3–4 jam', '5–6 jam', '7–9 jam', '12 jam'],
        correctIndex: 2,
        explanation: 'Remaja membutuhkan 7–9 jam tidur untuk konsolidasi memori dan pemulihan energi fisik serta emosional.'
      }
    ]
  },
  {
    id: 'vid-2',
    slug: 'komunikasi-sehat-dengan-teman',
    title: 'Komunikasi Sehat dengan Teman',
    description: 'Belajar cara mengungkapkan perasaan dan pendapat secara asertif tanpa menyakiti perasaan teman atau merasa bersalah.',
    duration: '05:10',
    category: 'Pertemanan',
    youtubeId: '9FnYwciRPxE',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnail: 'https://img.youtube.com/vi/9FnYwciRPxE/hqdefault.jpg',
    featured: true,
    summary: {
      points: [
        'Perbedaan antara komunikasi pasif (memendam rasa kesal), agresif (menyerang), dan asertif (jujur dan sopan).',
        'Menggunakan metode "I-statement" saat ada kesalahpahaman: "Aku merasa kurang nyaman saat..." daripada "Kamu selalu salah!".',
        'Menjadi pendengar aktif: mendengarkan untuk memahami maksud teman, bukan sekadar menunggu giliran bicara.'
      ],
      keyTakeaway: 'Komunikasi yang sehat adalah fondasi persahabatan yang kuat, langgeng, dan tidak dipenuhi gosip di belakang layar.'
    },
    transcript: [
      { timestamp: '00:00', speaker: 'Narator', text: 'Pernah nggak kamu kesal sama teman, tapi cuma kamu pendam sampai akhirnya hubungan kalian jadi canggung?' },
      { timestamp: '01:30', speaker: 'Konselor', text: 'Asertif berarti jujur pada apa yang kamu rasakan dengan tetap menjaga kesopanan dan empati.' },
      { timestamp: '03:10', speaker: 'Konselor', text: 'Katakan fakta perilaku yang membuatmu tidak nyaman, bukan menyerang kepribadian temanmu.' }
    ],
    reflection: {
      questions: [
        'Kapan terakhir kali kamu merasa sungkan bicara jujur kepada sahabatmu?',
        'Bagaimana kamu bisa mengubah kalimatmu agar terdengar lebih asertif dan hangat?'
      ]
    },
    quiz: [
      {
        id: 1,
        question: 'Manakah contoh kalimat komunikasi asertif yang paling tepat?',
        options: [
          '"Kamu egois banget sih selalu mau menang sendiri!"',
          '"Terserah kamu deh, aku pasrah aja."',
          '"Aku merasa kurang nyaman kalau tugasku dicoret tanpa konfirmasi dulu ya."',
          '"Aku nggak mau temenan lagi sama kamu!"'
        ],
        correctIndex: 2,
        explanation: 'Kalimat asertif fokus pada apa yang dirasakan ("Aku merasa...") tanpa memberikan cap buruk atau menyerang kepribadian orang lain.'
      }
    ]
  },
  {
    id: 'vid-3',
    slug: 'percaya-diri-itu-bisa-dilatih',
    title: 'Percaya Diri itu Bisa Dilatih',
    description: 'Percaya diri bukan bakat bawaan sejak lahir! Temukan langkah-langkah praktis melatih keberanian tampil di depan kelas.',
    duration: '06:30',
    category: 'Kenali Dirimu',
    youtubeId: '-B8pabVDVJ0',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnail: 'https://img.youtube.com/vi/-B8pabVDVJ0/hqdefault.jpg',
    featured: true,
    summary: {
      points: [
        'Mitos bahwa orang percaya diri tidak pernah merasa takut atau grogi sama sekali.',
        'Kekuatan postur tubuh tegak, senyuman, dan kontak mata saat berbicara.',
        'Membiasakan diri dengan kegagalan kecil sebagai bagian yang tak terpisahkan dari proses belajar normal.'
      ],
      keyTakeaway: 'Percaya diri bukan tentang ketiadaan rasa takut, melainkan tekad untuk melangkah maju meskipun ada rasa ragu.'
    },
    transcript: [
      { timestamp: '00:00', speaker: 'Narator', text: 'Tangan gemetaran dan suara bergetar saat disuruh maju ke depan kelas?' },
      { timestamp: '02:00', speaker: 'Mentor Remaja', text: 'Hampir semua orang mengalaminya! Otak mengira presentasi adalah situasi bahaya.' },
      { timestamp: '04:15', speaker: 'Mentor Remaja', text: 'Latihan di depan cermin dan menyiapkan catatan poin kunci bisa melipatgandakan keyakinanmu.' }
    ],
    reflection: {
      questions: [
        'Situasi apa di sekolah yang paling membuatmu merasa percaya diri berkurang?',
        'Hal apa yang bisa kamu katakan pada dirimu sendiri saat merasa grogi?'
      ]
    },
    quiz: [
      {
        id: 1,
        question: 'Apa definisi sejati dari percaya diri?',
        options: [
          'Merasa diri lebih hebat daripada teman-teman lain',
          'Tidak pernah gagal sama sekali dalam setiap ujian',
          'Menerima kekurangan diri dan berani mencoba walau ada rasa ragu',
          'Selalu ingin menjadi pusat perhatian'
        ],
        correctIndex: 2,
        explanation: 'Percaya diri yang sehat berakar pada penerimaan diri dan kemauan untuk mencoba hal baru.'
      }
    ]
  },
  {
    id: 'vid-4',
    slug: 'bijak-bermedia-sosial',
    title: 'Bijak Bermedia Sosial',
    description: 'Menjaga privasi data diri, menghindari cyberbullying, dan mengendalikan waktu layar agar kehidupan nyatamu tetap seru.',
    duration: '05:32',
    category: 'Dunia Digital',
    youtubeId: 'm2VAO1r7s1g',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    thumbnail: 'https://img.youtube.com/vi/m2VAO1r7s1g/hqdefault.jpg',
    featured: true,
    summary: {
      points: [
        'Bahaya oversharing data pribadi seperti alamat rumah, nomor HP, atau foto seragam berlogo sekolah.',
        'Jejak digital (digital footprint) yang bertahan selamanya di internet dan bisa mempengaruhi masa depanmu.',
        'Cara melaporkan dan memblokir akun atau konten yang membuatmu merasa tidak nyaman atau dirundung.'
      ],
      keyTakeaway: 'Gunakan media sosial sebagai alat berkarya, belajar, dan terhubung, bukan tolok ukur harga dirimu.'
    },
    transcript: [
      { timestamp: '00:00', speaker: 'Narator', text: 'Internet itu seru banget, tapi ada hal-hal penting yang wajib kamu lindungi.' },
      { timestamp: '01:45', speaker: 'Pakar Keamanan Digital', text: 'Jangan pernah membagikan password atau lokasi rumahmu kepada siapapun di internet.' }
    ],
    reflection: {
      questions: [
        'Apakah akun media sosialmu sudah diatur ke mode privat?',
        'Pernahkah kamu memposting sesuatu yang kemudian kamu sesali?'
      ]
    },
    quiz: [
      {
        id: 1,
        question: 'Informasi apa yang paling berbahaya jika dibagikan secara publik di media sosial?',
        options: [
          'Foto makanan favoritmu',
          'Rekomendasi lagu kesukaanmu',
          'Lokasi realtime rumah dan kartu identitas siswa',
          'Gambar pemandangan taman'
        ],
        correctIndex: 2,
        explanation: 'Membagikan lokasi rumah dan identitas dapat mengundang risiko kejahatan dunia nyata.'
      }
    ]
  },
  {
    id: 'vid-5',
    slug: 'mengenali-dan-mengelola-emosi',
    title: 'Mengenali & Mengelola Emosi',
    description: 'Memahami bahwa setiap emosi punya pesan penting. Belajar menamai apa yang kamu rasakan sebelum bertindak.',
    duration: '07:12',
    category: 'Kenali Emosimu',
    youtubeId: 'gcLkD9EfHXs',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    thumbnail: 'https://img.youtube.com/vi/gcLkD9EfHXs/hqdefault.jpg',
    featured: true,
    summary: {
      points: [
        'Mengapa tidak ada emosi yang "jahat" atau "dilarang": emosi adalah sinyal kebutuhan hatimu.',
        'Roda emosi: membedakan antara marah, kecewa, sedih, dan cemburu.',
        'Memberi nama pada emosi (Name it to tame it) membantu meredakan intensitasnya di otak rasional.'
      ],
      keyTakeaway: 'Emosi adalah tamu yang datang dan pergi. Kamu adalah tuan rumah yang tenang dan bijak.'
    },
    transcript: [
      { timestamp: '00:00', speaker: 'Narator', text: 'Kadang kita cuma bilang "lagi kesel", tapi di dalamnya ada rasa sedih yang dalam.' },
      { timestamp: '03:10', speaker: 'Psikolog', text: 'Ketika kita bisa menyebutkan nama emosi secara spesifik, otak bagian logika kita kembali aktif.' }
    ],
    reflection: {
      questions: [
        'Emosi apa yang paling sering kamu rasakan minggu ini di sekolah?',
        'Bagaimana caramu memperlakukan dirimu sendiri saat merasa sedih?'
      ]
    },
    quiz: [
      {
        id: 1,
        question: 'Apa manfaat dari menamai emosi yang sedang kita rasakan (Name it to tame it)?',
        options: [
          'Membuat emosi itu langsung hilang dalam 1 detik',
          'Membantu menenangkan amigdala dan mengaktifkan bagian otak pemecah masalah',
          'Membuat kita bisa memarahi orang lain dengan tepat',
          'Agar kita bisa pamer di status media sosial'
        ],
        correctIndex: 1,
        explanation: 'Penelitian neurosains membuktikan bahwa mengenali dan menamai emosi membantu otak mengatur intensitas perasaan tersebut.'
      }
    ]
  }
];
