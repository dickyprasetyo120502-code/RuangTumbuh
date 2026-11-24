import { ScenarioQuestion, CommunicationQuestion } from '../types';

export const SCENARIO_QUESTIONS: ScenarioQuestion[] = [
  {
    id: 1,
    situation: 'Temanmu mendapat nilai bagus di ulangan Matematika, sedangkan kamu merasa nilaimu kurang memuaskan. Kamu jadi merasa minder dan sedikit iri.',
    question: 'Apa yang sebaiknya kamu lakukan?',
    options: [
      {
        id: 'A',
        text: 'Merasa iri dan sengaja menghindari dia sepanjang hari.',
        isRecommended: false,
        feedback: 'Menghindari teman hanya akan membuat jarak dalam pertemanan dan tidak membantu meningkatkan nilaimu.'
      },
      {
        id: 'B',
        text: 'Menyalahkan diri sendiri terus-menerus dan menganggap diri bodoh.',
        isRecommended: false,
        feedback: 'Kritik diri yang kasar hanya memicu stres dan menurunkan motivasi belajarmu.'
      },
      {
        id: 'C',
        text: 'Mengucapkan selamat dengan tulus dan bertanya apakah dia mau belajar bersama di materi yang belum kamu pahami.',
        isRecommended: true,
        feedback: 'Jawabanmu sangat tepat & bijak! Mendukung teman dan tetap fokus pada perkembangan diri sendiri adalah sikap yang sangat sehat.'
      },
      {
        id: 'D',
        text: 'Mengabaikannya dan pura-pura tidak peduli sama sekali dengan nilai.',
        isRecommended: false,
        feedback: 'Berpura-pura cuek seringkali menutupi rasa kecewa yang belum kamu akui secara jujur.'
      }
    ]
  },
  {
    id: 2,
    situation: 'Ada teman satu geng yang mengajakmu meledek anak baru yang pendiam di kelas. Mereka bilang "Ayo ikutan, seru-seruan doang kok!"',
    question: 'Bagaimana respon terbaikmu?',
    options: [
      {
        id: 'A',
        text: 'Ikut meledek agar tidak dianggap cemen atau dijauhi oleh geng.',
        isRecommended: false,
        feedback: 'Mengorbankan orang lain demi diterima kelompok justru membuatmu merasa bersalah di kemudian hari.'
      },
      {
        id: 'B',
        text: 'Tersenyum canggung dan diam saja sambil melihat anak itu diledek.',
        isRecommended: false,
        feedback: 'Menjadi penonton pasif (bystander) secara tidak langsung membiarkan perundungan terus terjadi.'
      },
      {
        id: 'C',
        text: 'Menolak dengan tegas tapi santai: "Nggak ah guys, kasihan dia. Mending kita ajak ngobrol biasa aja."',
        isRecommended: true,
        feedback: 'Luar biasa! Berani menyuarakan kebenaran dengan tenang (upstander) menunjukkan kematangan karakter yang tinggi.'
      },
      {
        id: 'D',
        text: 'Langsung memaki teman-temanmu dengan kata-kata kasar.',
        isRecommended: false,
        feedback: 'Merespon dengan agresi bisa memicu keributan baru daripada menyelesaikan masalah.'
      }
    ]
  },
  {
    id: 3,
    situation: 'Kamu merasa sangat capek setelah seharian sekolah dan les, tapi ada tugas kelompok yang harus dikerjakan malam ini.',
    question: 'Langkah apa yang paling bijak?',
    options: [
      {
        id: 'A',
        text: 'Menghilang tanpa kabar dari grup tugas kelompok dan langsung tidur.',
        isRecommended: false,
        feedback: 'Menghilang tanpa kabar membuat teman sekelompokmu cemas dan kerepotan.'
      },
      {
        id: 'B',
        text: 'Memberi kabar di grup: "Guys, malam ini aku istirahat dulu ya karena badan lagi drop. Besok pagi-pagi jam 6 aku kerjain bagianku."',
        isRecommended: true,
        feedback: 'Tepat sekali! Komunikasi transparan dan komitmen waktu membuat teman kelompok tetap percaya padamu.'
      },
      {
        id: 'C',
        text: 'Memaksakan diri begadang sambil marah-marah di kamar.',
        isRecommended: false,
        feedback: 'Memaksakan fisik saat kelelahan berat berisiko membuatmu jatuh sakit saat hari ujian.'
      },
      {
        id: 'D',
        text: 'Menyuruh teman lain mengerjakan seluruh bagian tugasmu.',
        isRecommended: false,
        feedback: 'Ini tidak adil bagi teman sekelompokmu dan bisa merusak kerja sama tim.'
      }
    ]
  },
  {
    id: 4,
    situation: 'Kamu sedang marah besar pada adikmu karena dia merusak barang kesayanganmu.',
    question: 'Apa yang sebaiknya kamu lakukan sebelum bicara padanya?',
    options: [
      {
        id: 'A',
        text: 'Langsung membalas dengan merusak barang kesukaannya juga.',
        isRecommended: false,
        feedback: 'Dendam tidak akan memperbaiki barangmu dan hanya memicu pertengkaran hebat di rumah.'
      },
      {
        id: 'B',
        text: 'Tarik napas dalam 5 kali, cuci muka dengan air dingin, lalu sampaikan rasa kecewamu dengan jelas tanpa memukul.',
        isRecommended: true,
        feedback: 'Keren! Memberi jeda fisik membantu menurunkan amarah agar obrolan bisa mencari solusi tanpa kekerasan.'
      },
      {
        id: 'C',
        text: 'Membanting pintu kamar sekeras-kerasnya.',
        isRecommended: false,
        feedback: 'Membanting barang bisa membahayakan diri sendiri dan membuat suasana rumah jadi menegangkan.'
      },
      {
        id: 'D',
        text: 'Mendiamkannya selama satu bulan penuh.',
        isRecommended: false,
        feedback: 'Silent treatment tidak menyelesaikan masalah dan hanya memupuk rasa benci.'
      }
    ]
  },
  {
    id: 5,
    situation: 'Kamu ingin bercerita ke guru BK tentang masalah di rumah, tapi takut dicap sebagai "anak bermasalah" oleh teman sekelas.',
    question: 'Apa sudut pandang yang tepat untukmu?',
    options: [
      {
        id: 'A',
        text: 'Memendam masalah itu sendiri sampai merasa tertekan.',
        isRecommended: false,
        feedback: 'Memendam beban berat sendirian bisa memicu kecemasan dan mengganggu belajarmu.'
      },
      {
        id: 'B',
        text: 'Mengingat bahwa guru BK adalah sahabat siswa yang menjaga kerahasiaan, dan mencari bantuan adalah tindakan berani.',
        isRecommended: true,
        feedback: 'Sangat benar! Guru BK ada untuk mendukung perkembangan mental dan emosi siswa, bukan untuk menghukum.'
      },
      {
        id: 'C',
        text: 'Curhat ke media sosial publik dengan kata-kata sindiran.',
        isRecommended: false,
        feedback: 'Curhat di medsos publik bisa disalahgunakan orang lain dan memicu drama baru.'
      },
      {
        id: 'D',
        text: 'Bolos sekolah agar tidak perlu menghadapi situasi tersebut.',
        isRecommended: false,
        feedback: 'Bolos sekolah justru menambah masalah baru di bidang akademik dan presensi.'
      }
    ]
  },
  {
    id: 6,
    situation: 'Di media sosial, ada foto aib salah satu teman sekelas yang disebarkan di grup chat dan dijadikan bahan tertawaan.',
    question: 'Tindakan apa yang paling berani dan bermoral?',
    options: [
      {
        id: 'A',
        text: 'Meneruskan (forward) foto itu ke grup lain biar makin ramai.',
        isRecommended: false,
        feedback: 'Meneruskan foto aib adalah bentuk cyberbullying dan melanggar hukum serta etika privasi.'
      },
      {
        id: 'B',
        text: 'Menegur di grup: "Guys, jangan disebar ya, kasihan temen kita. Stop di sini aja."',
        isRecommended: true,
        feedback: 'Hebat sekali! Berani menghentikan rantai perundungan digital menyelamatkan mental temanmu dari rasa malu berkepanjangan.'
      },
      {
        id: 'C',
        text: 'Ikut menertawakan dengan stiker lucu.',
        isRecommended: false,
        feedback: 'Ini memperparah rasa sakit hati korban yang fotonya disebarkan.'
      },
      {
        id: 'D',
        text: 'Langsung keluar grup tanpa berbuat apa-apa.',
        isRecommended: false,
        feedback: 'Keluar grup tidak menghentikan peredaran foto tersebut.'
      }
    ]
  },
  {
    id: 7,
    situation: 'Sahabat dekatmu tiba-tiba sering membatalkan janji secara mendadak dan terlihat murung serta jarang makan saat jam istirahat.',
    question: 'Bagaimana caramu menunjukkan kepedulian yang hangat?',
    options: [
      {
        id: 'A',
        text: 'Marah-marah dan menuduh dia sudah punya teman baru yang lebih asyik.',
        isRecommended: false,
        feedback: 'Tuduhan emosional hanya akan membuat sahabatmu makin menutup diri saat sedang punya masalah.'
      },
      {
        id: 'B',
        text: 'Mengajaknya duduk berdua di tempat tenang dan berkata: "Aku perhatiin kamu lagi murung akhir-akhir ini. Kalau butuh temen cerita, aku ada di sini ya."',
        isRecommended: true,
        feedback: 'Pilihan yang sangat berempati! Kehadiran tanpa menghakimi memberikan rasa aman bagi sahabat yang sedang terpuruk.'
      },
      {
        id: 'C',
        text: 'Membicarakan kebiasaannya ke teman-teman lain di kelas.',
        isRecommended: false,
        feedback: 'Menceritakan kondisi teman ke orang lain tanpa izin merusak rasa percaya persahabatan.'
      },
      {
        id: 'D',
        text: 'Memaksa dia bercerita detik itu juga.',
        isRecommended: false,
        feedback: 'Memaksa seseorang saat belum siap hanya menambah beban mentalnya.'
      }
    ]
  },
  {
    id: 8,
    situation: 'Kamu terpilih mewakili kelas untuk lomba pidato Bahasa Inggris, tapi kamu merasa sangat tidak percaya diri dan takut mempermalukan kelas.',
    question: 'Apa langkah mental terbaik untuk mengatasi rasa minder ini?',
    options: [
      {
        id: 'A',
        text: 'Mundur dari lomba dan pura-pura sakit di hari pemilihan.',
        isRecommended: false,
        feedback: 'Melarikan diri hanya memperkuat keyakinan bahwa kamu tidak mampu.'
      },
      {
        id: 'B',
        text: 'Menerima kesempatan ini sebagai sarana belajar, latihan rutin di depan cermin, dan meminta masukan guru.',
        isRecommended: true,
        feedback: 'Tepat sekali! Fokus pada proses dan peningkatan kemampuan diri, bukan semata-mata hasil menang atau kalah.'
      },
      {
        id: 'C',
        text: 'Mengeluh terus-menerus di status WhatsApp.',
        isRecommended: false,
        feedback: 'Mengeluh tidak meningkatkan kemampuan pidatomu dan hanya menguras energimu.'
      },
      {
        id: 'D',
        text: 'Berharap lomba tersebut tiba-tiba dibatalkan.',
        isRecommended: false,
        feedback: 'Harapan pasif tidak membantumu berkembang menjadi pribadi yang lebih tangguh.'
      }
    ]
  },
  {
    id: 9,
    situation: 'Orang tuamu membandingkan nilai rapormu dengan nilai sepupumu yang selalu juara kelas saat acara kumpul keluarga.',
    question: 'Respon apa yang paling sehat untuk menjaga harga dirimu?',
    options: [
      {
        id: 'A',
        text: 'Membanting piring dan berteriak di depan semua keluarga besar.',
        isRecommended: false,
        feedback: 'Reaksi agresif memperkeruh suasana dan membuat obrolan tidak produktif.'
      },
      {
        id: 'B',
        text: 'Tersenyum tenang di depan keluarga, lalu saat suasana santai bicara berdua dengan orang tua mengenai perasaanmu secara jujur dan sopan.',
        isRecommended: true,
        feedback: 'Sangat dewasa! Menjaga ketenangan di ruang publik dan menyampaikan perasaan secara asertif di waktu privat adalah respon kelas atas.'
      },
      {
        id: 'C',
        text: 'Merasa dirimu adalah anak yang gagal selamanya.',
        isRecommended: false,
        feedback: 'Setiap anak punya kelebihan unik di bidang yang berbeda. Nilai satu mata pelajaran tidak menentukan masa depanmu.'
      },
      {
        id: 'D',
        text: 'Membenci sepupumu dan tidak mau menyapanya lagi.',
        isRecommended: false,
        feedback: 'Sepupumu tidak bersalah atas perbandingan yang dibuat orang dewasa.'
      }
    ]
  },
  {
    id: 10,
    situation: 'Kamu meminjamkan buku catatanmu ke teman, tapi saat dikembalikan kondisinya kotor tercoret dan robek.',
    question: 'Bagaimana cara menyampaikan rasa kecewamu dengan tegas tanpa merusak pertemanan?',
    options: [
      {
        id: 'A',
        text: 'Diam saja tapi dendam seumur hidup dan tidak meminjamkan lagi apa-apa.',
        isRecommended: false,
        feedback: 'Komunikasi pasif membuat temanmu tidak sadar atas kesalahannya dan memendam racun di hatimu.'
      },
      {
        id: 'B',
        text: 'Katakan jujur: "Aku senang bisa bantu pinjamin bukuku, tapi aku sedih melihatnya robek. Tolong bantu rapikan ya, agar lain kali aku tetap nyaman meminjamkan."',
        isRecommended: true,
        feedback: 'Sempurna! Kamu menyampaikan batasan secara jelas, menghargai barang milikmu, dan memberi kesempatan teman untuk bertanggung jawab.'
      },
      {
        id: 'C',
        text: 'Membalas merobek buku miliknya di depan teman-teman kelas.',
        isRecommended: false,
        feedback: 'Tindakan balas dendam hanya memicu perkelahian dan membuatmu sama salahnya dengan dia.'
      },
      {
        id: 'D',
        text: 'Memposting nama temanmu di Twitter/X dan menjelek-jelekkannya.',
        isRecommended: false,
        feedback: 'Mengumbar masalah kecil ke media sosial hanya menimbulkan drama yang tak perlu.'
      }
    ]
  }
];

// 10 Pertanyaan Interaktif: Kenali Cara Bicaramu (Komunikasi Asertif)
export const COMMUNICATION_QUESTIONS: CommunicationQuestion[] = [
  {
    id: 1,
    situation: 'Temanmu memotong pembicaraanmu saat kamu sedang menceritakan pengalaman seru di depan kelompok.',
    question: 'Bagaimana caramu merespon secara asertif?',
    options: [
      {
        id: 'A',
        text: 'Langsung terdiam lesu dan tidak mau bicara lagi sampai pulang.',
        style: 'Pasif',
        isCorrect: false,
        feedback: 'Respon pasif membuat orang lain tidak tahu kebutuhanmu dan membuatmu merasa diabaikan.'
      },
      {
        id: 'B',
        text: 'Tunggu sejenak lalu katakan dengan senyum sopan: "Sebentar ya, izinkan aku menyelesaikan ceritaku dulu ya."',
        style: 'Asertif',
        isCorrect: true,
        feedback: 'Tepat sekali! Asertif menjaga hak bicaramu tanpa menyerang temanmu.'
      },
      {
        id: 'C',
        text: 'Membentak dengan keras: "Bisa diam nggak sih?! Nggak punya sopan santun banget!"',
        style: 'Agresif',
        isCorrect: false,
        feedback: 'Respon agresif menimbulkan rasa malu dan permusuhan di dalam kelompok.'
      }
    ]
  },
  {
    id: 2,
    situation: 'Teman sekelompokmu tidak mengerjakan bagian tugasnya dan santai mengandalkanmu.',
    question: 'Apa kalimat asertif yang paling tepat?',
    options: [
      {
        id: 'A',
        text: '"Bro, bagianmu belum selesai nih. Kita perlu kumpul jam 5 sore. Kalau ada kendala, kabar-kabari ya biar bisa selesai bareng."',
        style: 'Asertif',
        isCorrect: true,
        feedback: 'Bagus sekali! Kamu fokus pada tenggat waktu dan solusi tanpa memicu pertengkaran.'
      },
      {
        id: 'B',
        text: 'Mengerjakan seluruh bagiannya sendirian sambil menggerutu di kamar.',
        style: 'Pasif',
        isCorrect: false,
        feedback: 'Menjadi orang yang selalu menanggung beban orang lain membuatmu mudah lelah dan tidak adil.'
      },
      {
        id: 'C',
        text: '"Dasar pemalas! Aku coret ya namamu dari laporan biar kamu nggak dapat nilai!"',
        style: 'Agresif',
        isCorrect: false,
        feedback: 'Mengancam secara kasar biasanya membuat orang lain defensif dan tidak mau diajak kerja sama.'
      }
    ]
  },
  {
    id: 3,
    situation: 'Temanmu memesankan makanan pedas untukmu, padahal kamu punya penyakit maag dan tidak bisa makan pedas.',
    question: 'Bagaimana responmu?',
    options: [
      {
        id: 'A',
        text: 'Memaksakan diri memakannya sampai perut sakit demi tidak enak hati.',
        style: 'Pasif',
        isCorrect: false,
        feedback: 'Mengorbankan kesehatan fisik demi perasaan orang lain bukanlah pilihan bijak.'
      },
      {
        id: 'B',
        text: '"Makasih banyak udah dipesenin! Tapi maaf banget maag-ku lagi kambuh dan nggak bisa makan pedas. Boleh aku tukar atau sisihkan sambalnya ya?"',
        style: 'Asertif',
        isCorrect: true,
        feedback: 'Luar biasa! Menghargai niat baik teman sekaligus menjaga batasan fisikmu sendiri.'
      },
      {
        id: 'C',
        text: '"Kamu gimana sih! Kan tahu aku punya maag, sengaja ya mau bikin aku sakit?!"',
        style: 'Agresif',
        isCorrect: false,
        feedback: 'Temanmu mungkin hanya lupa atau tidak sengaja, tidak perlu menuduh berniat jahat.'
      }
    ]
  },
  {
    id: 4,
    situation: 'Teman sebangku meminjam pulpen kesayanganmu dan tidak sengaja mematahkan jepitannya.',
    question: 'Apa respon asertif yang baik?',
    options: [
      {
        id: 'A',
        text: '"Aduh, sayang banget ini pulpen hadiah dari ayahku. Lain kali lebih hati-hati saat pakai barang pinjaman ya."',
        style: 'Asertif',
        isCorrect: true,
        feedback: 'Tepat! Menyampaikan fakta dan perasaan tanpa mempermalukan temanmu.'
      },
      {
        id: 'B',
        text: 'Tersenyum dan bilang "Nggak apa-apa kok santai aja!" padahal di hati menangis kesal.',
        style: 'Pasif',
        isCorrect: false,
        feedback: 'Pura-pura tidak apa-apa membuat temanmu tidak belajar bertanggung jawab.'
      },
      {
        id: 'C',
        text: '"Ganti rugi sekarang juga! Kamu selalu ngerusak barang orang!"',
        style: 'Agresif',
        isCorrect: false,
        feedback: 'Kata-kata berlebihan merusak hubungan baik hanya karena sebuah pulpen.'
      }
    ]
  },
  {
    id: 5,
    situation: 'Guru memberikan nilai tugas yang menurutmu tertukar atau ada kesalahan hitung poin.',
    question: 'Bagaimana cara bertanya ke guru dengan sopan dan asertif?',
    options: [
      {
        id: 'A',
        text: 'Diam saja dan menerima nilai yang salah karena takut dimarahi guru.',
        style: 'Pasif',
        isCorrect: false,
        feedback: 'Guru adalah pendidik yang terbuka pada klarifikasi jika disampaikan secara santun.'
      },
      {
        id: 'B',
        text: '"Permisi Ibu/Bapak, mohon maaf mengganggu. Bolehkah saya mengonfirmasi penghitungan poin di nomor 3? Saya ingin belajar letak kesalahan saya."',
        style: 'Asertif',
        isCorrect: true,
        feedback: 'Sangat santun dan tepat! Menunjukkan kerendahan hati untuk belajar sekaligus memastikan keadilan nilai.'
      },
      {
        id: 'C',
        text: '"Ibu salah hitung nilai saya nih! Harusnya saya dapat 90, bukan 70!"',
        style: 'Agresif',
        isCorrect: false,
        feedback: 'Menegur guru dengan nada menuduh dianggap tidak sopan dalam etika sekolah.'
      }
    ]
  },
  {
    id: 6,
    situation: 'Kamu diajak nongkrong di kafe sepulang sekolah, tapi uang sakumu pas-pasan dan kamu harus berhemat.',
    question: 'Bagaimana caramu menolak ajakan tanpa minder?',
    options: [
      {
        id: 'A',
        text: '"Makasih udah ngajak guys! Tapi hari ini aku lagi harus berhemat dan langsung pulang. Next time kabari lagi ya!"',
        style: 'Asertif',
        isCorrect: true,
        feedback: 'Keren! Jujur dengan kondisi finansial menunjukkan rasa percaya diri yang tinggi tanpa gengsi.'
      },
      {
        id: 'B',
        text: 'Meminjam uang teman demi bisa ikut nongkrong dan terlihat keren.',
        style: 'Pasif',
        isCorrect: false,
        feedback: 'Berutang demi gengsi menciptakan beban finansial dan rasa cemas di kemudian hari.'
      },
      {
        id: 'C',
        text: '"Ngapain sih buang-buang duit nongkrong nggak jelas!"',
        style: 'Agresif',
        isCorrect: false,
        feedback: 'Menghakimi pilihan teman lain membuat suasana jadi tidak enak.'
      }
    ]
  },
  {
    id: 7,
    situation: 'Temanmu memanggilmu dengan nama julukan fisik yang tidak kamu sukai di depan orang lain.',
    question: 'Respon asertif apa yang bisa kamu ambil?',
    options: [
      {
        id: 'A',
        text: 'Tersenyum getir agar dianggap asyik dan tidak baperan.',
        style: 'Pasif',
        isCorrect: false,
        feedback: 'Membiarkan julukan yang menyakitkan membuat mereka terus mengulanginya.'
      },
      {
        id: 'B',
        text: 'Tatap matanya dan katakan tenang: "Panggil namaku biasa aja ya. Aku lebih nyaman dipanggil nama asliku."',
        style: 'Asertif',
        isCorrect: true,
        feedback: 'Sangat tegas dan tenang! Menetapkan batas nama panggilan adalah hak mutlakmu.'
      },
      {
        id: 'C',
        text: 'Membalas memanggil dia dengan julukan fisik yang jauh lebih kasar.',
        style: 'Agresif',
        isCorrect: false,
        feedback: 'Saling mengejek fisik hanya menciptakan lingkaran perundungan verbal di kelas.'
      }
    ]
  },
  {
    id: 8,
    situation: 'Kamu butuh waktu tenang untuk belajar ulangan besok, tapi temanmu menelepon terus-menerus untuk curhat masalah game.',
    question: 'Bagaimana caramu menyampaikan batas waktumu?',
    options: [
      {
        id: 'A',
        text: '"Bro, aku mau dengerin ceritamu, tapi malam ini aku harus fokus persiapan ulangan dulu ya. Besok jam istirahat kita ngobrol lagi ya."',
        style: 'Asertif',
        isCorrect: true,
        feedback: 'Bagus sekali! Kamu memberi kepastian kapan bisa mengobrol tanpa mengorbankan waktu belajarmu.'
      },
      {
        id: 'B',
        text: 'Mendengarkan sampai jam 1 pagi padahal besok pagi ulangan jam pertama.',
        style: 'Pasif',
        isCorrect: false,
        feedback: 'Mengorbankan ujian demi obrolan santai merugikan masa depan akademikmu.'
      },
      {
        id: 'C',
        text: 'Mematikan telepon secara sepihak dan langsung memblokir nomornya.',
        style: 'Agresif',
        isCorrect: false,
        feedback: 'Memutuskan komunikasi tanpa penjelasan membuat temanmu bingung dan sakit hati.'
      }
    ]
  },
  {
    id: 9,
    situation: 'Adikmu menyetel musik dengan volume kencang saat kamu sedang membaca buku di kamar.',
    question: 'Cara asertif memintanya mengecilkan volume:',
    options: [
      {
        id: 'A',
        text: 'Menghampirinya dan berkata: "Dek, kakak lagi butuh konsentrasi baca buku nih. Boleh tolong kecilkan volumenya atau pakai earphone sebentar ya? Makasih ya."',
        style: 'Asertif',
        isCorrect: true,
        feedback: 'Tepat! Pendekatan hangat dan solusi alternatif membuat adikmu senang membantu.'
      },
      {
        id: 'B',
        text: 'Menyumpal telinga dengan bantal sambil menahan emosi kesal.',
        style: 'Pasif',
        isCorrect: false,
        feedback: 'Memendam kekesalan tanpa bicara tidak membuat adikmu sadar suara musiknya mengganggu.'
      },
      {
        id: 'C',
        text: 'Masuk kamarnya dan langsung mencabut kabel speaker sambil berteriak.',
        style: 'Agresif',
        isCorrect: false,
        feedback: 'Tindakan kasar memicu pertengkaran fisik antar saudara di rumah.'
      }
    ]
  },
  {
    id: 10,
    situation: 'Kamu ingin memuji sahabatmu yang tampil sangat percaya diri saat membacakan puisi di panggung sekolah.',
    question: 'Apresiasi asertif yang tulus dan menguatkan:',
    options: [
      {
        id: 'A',
        text: '"Penampilanmu tadi keren banget! Intonasi suaramu dapet dan aku bangga banget liat kamu berani di panggung!"',
        style: 'Asertif',
        isCorrect: true,
        feedback: 'Sempurna! Asertif bukan hanya tentang menolak, tapi juga tentang mengekspresikan pujian tulus dengan percaya diri.'
      },
      {
        id: 'B',
        text: 'Gengsi memuji dan pura-pura tidak melihat penampilannya.',
        style: 'Pasif',
        isCorrect: false,
        feedback: 'Menahan kata-kata apresiasi membuat pertemanan terasa dingin dan berjarak.'
      },
      {
        id: 'C',
        text: '"Lumayanlah, tapi masih bagusan kalau aku yang maju tadi."',
        style: 'Agresif',
        isCorrect: false,
        feedback: 'Komentar sombong merusak kebahagiaan teman yang baru saja berani tampil.'
      }
    ]
  }
];

export const JOURNAL_PROMPTS = [
  'Apa 3 hal kecil yang bikin kamu tersenyum hari ini?',
  'Kalau perasaanmu hari ini diibaratkan cuaca, cuaca apa yang paling menggambarkan hatimu?',
  'Tulis satu kebaikan kecil yang sudah kamu lakukan untuk dirimu atau orang lain hari ini.',
  'Hal apa yang sedang membuatmu cemas, dan bagaimana kamu bisa lebih tenang menghadapinya?',
  'Tulis surat singkat penuh kasih sayang untuk dirimu yang sedang bertumbuh.',
  'Pelajaran hidup apa yang kamu dapatkan minggu ini dari sebuah kejadian di sekolah?'
];
