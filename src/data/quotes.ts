export interface DailyMessage {
  dayNumber: number;
  quote: string;
  subquote: string;
  theme: string;
}

// 14 pesan harian yang berganti otomatis setiap hari
export const DAILY_MESSAGES_14: DailyMessage[] = [
  {
    dayNumber: 1,
    quote: 'Pelan-pelan juga tetap maju. Kamu nggak harus punya semua jawabannya hari ini.',
    subquote: 'Setiap langkah kecil yang kamu ambil hari ini adalah kemenangan bagi dirimu yang sedang bertumbuh.',
    theme: 'Kesabaran Diri'
  },
  {
    dayNumber: 2,
    quote: 'Bunga tidak bersaing dengan bunga di sebelahnya. Ia hanya mekar dengan warnanya sendiri.',
    subquote: 'Kamu punya keunikan dan garis start yang berbeda dari teman-temanmu. Hargai prosesmu sendiri.',
    theme: 'Keunikan Diri'
  },
  {
    dayNumber: 3,
    quote: 'Menangis bukan tanda kamu lemah, itu bukti bahwa hatimu jujur dan manusiawi.',
    subquote: 'Keluarkan rasa sesakmu. Setelah awan mendung menurunkan hujan, langit selalu tampak lebih cerah.',
    theme: 'Menerima Emosi'
  },
  {
    dayNumber: 4,
    quote: 'Berani bilang "tidak" pada hal yang bikin kamu nggak nyaman bukan berarti kamu jahat.',
    subquote: 'Menetapkan batasan yang sehat adalah bentuk cinta dan rasa hormat tertinggi pada dirimu sendiri.',
    theme: 'Batasan Pertemanan'
  },
  {
    dayNumber: 5,
    quote: 'Nilai ujianmu penting, tapi nilai kebaikan dan usahamu jauh lebih berharga dari sekadar angka.',
    subquote: 'Kegagalan di satu ulangan bukan akhir dari segalanya. Itu hanya catatan kecil untuk belajar lebih baik.',
    theme: 'Semangat Belajar'
  },
  {
    dayNumber: 6,
    quote: 'Kamu berhak istirahat saat lelah. Bernapas sejenak bukanlah tanda menyerah.',
    subquote: 'Rebahkan tubuhmu, jauhkan layar ponsel sejenak, dan beri kesempatan energimu terisi kembali.',
    theme: 'Menjaga Energi'
  },
  {
    dayNumber: 7,
    quote: 'Jangan bandingkan dapur kehidupanmu dengan panggung terbaik orang lain di media sosial.',
    subquote: 'Orang lain hanya memamerkan momen bahagianya. Fokuslah merawat apa yang nyata di depan matamu.',
    theme: 'Kesehatan Digital'
  },
  {
    dayNumber: 8,
    quote: 'Sahabat yang baik akan membuatmu merasa nyaman menjadi dirimu sendiri, bukan memaksamu berubah.',
    subquote: 'Kamu tidak perlu menjadi orang lain hanya demi diterima dalam lingkaran pertemanan sekolah.',
    theme: 'Sahabat Sejati'
  },
  {
    dayNumber: 9,
    quote: 'Wajar banget merasa bingung dengan perubahan tubuh dan perasaan di masa pubertas ini.',
    subquote: 'Semua teman seusiamu juga merasakan gejolak yang sama. Kamu tidak aneh dan kamu tidak sendirian.',
    theme: 'Pubertas & Diri'
  },
  {
    dayNumber: 10,
    quote: 'Satu kesalahan kecil hari ini tidak menghapus ratusan kebaikan yang sudah pernah kamu lakukan.',
    subquote: 'Jadilah teman yang baik bagi dirimu sendiri. Maafkan kesalahanmu dan coba lagi esok hari.',
    theme: 'Memaafkan Diri'
  },
  {
    dayNumber: 11,
    quote: 'Keberanian bukan berarti tidak punya rasa takut, tapi tetap melangkah maju meski tangan sedikit gemetar.',
    subquote: 'Saat disuruh presentasi di depan kelas, tarik napas dalam. Kamu jauh lebih mampu daripada pikiran cemasmu.',
    theme: 'Percaya Diri'
  },
  {
    dayNumber: 12,
    quote: 'Bicara jujur ke orang tua memang bikin deg-degan, tapi kejujuran selalu membuka pintu pengertian.',
    subquote: 'Mulai dengan kalimat sederhana: "Pah/Mah, aku cuma mau cerita santai tanpa dihakimi ya."',
    theme: 'Komunikasi Keluarga'
  },
  {
    dayNumber: 13,
    quote: 'Tumpukan tugas yang menggunung bisa diselesaikan jika kamu mulai dari 1 hal kecil selama 15 menit.',
    subquote: 'Jangan biarkan rasa malas menipumu. Mulai saja dulu, langkah berikutnya akan terasa lebih ringan.',
    theme: 'Mengatasi Malas'
  },
  {
    dayNumber: 14,
    quote: 'Hari ini adalah lembaran baru. Apapun yang terjadi kemarin, hari ini kamu boleh bertumbuh lagi.',
    subquote: 'Tersenyumlah pada cermin. Kamu sudah berjuang sangat hebat sampai hari ini!',
    theme: 'Awal yang Baru'
  }
];

export function getTodayMessage(): DailyMessage {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = Math.abs(dayOfYear) % DAILY_MESSAGES_14.length;
  return DAILY_MESSAGES_14[index];
}

// 14 Quotes lengkap untuk setiap 5 emotikon emosi
export const MOOD_QUOTES: Record<string, { title: string; subtitle: string; quotes: string[] }> = {
  senang: {
    title: 'Kamu Sedang Berbunga! 🌸',
    subtitle: 'Simpan kebahagiaanmu hari ini dan sebarkan kebaikan ke sekitarmu.',
    quotes: [
      'Senyummu hari ini adalah hal indah yang menularkan kebahagiaan ke orang-orang di sekitarmu.',
      'Simpan rasa syukur dan rasa senang ini di hatimu, jadikan ia bahan bakar semangat untuk belajar.',
      'Saat energimu penuh, bagikan canda tawa dan kebaikan kecil kepada teman yang mungkin sedang murung.',
      'Hari yang menyenangkan adalah bukti bahwa hal-hal baik selalu ada di tengah rutinitas sekolah.',
      'Rayakan keberhasilan kecilmu hari ini, sekecil apapun itu. Kamu layak merasa bangga!',
      'Gunakan suasana hati positifmu hari ini untuk mencoba hal baru yang biasanya kamu ragukan.',
      'Tertawalah lepas bersama sahabatmu. Momen seperti inilah yang akan jadi kenangan manis masa SMP.',
      'Kamu berhak merasakan bahagia seutuhnya hari ini tanpa perlu merasa bersalah.',
      'Kebahagiaanmu hari ini adalah hasil dari hatimu yang pandai bersyukur atas hal-hal sederhana.',
      'Saat merasa senang, tubuhmu melepaskan hormon endorfin yang membuat belajarmu jadi jauh lebih mudah.',
      'Tuliskan momen bahagiamu hari ini di buku catatan agar bisa kamu baca kembali saat hari sedang mendung.',
      'Energi positifmu bisa menjadi penerang bagi teman sebangkumu yang sedang kesulitan memahami pelajaran.',
      'Jangan lupa ucapkan terima kasih kepada orang-orang tersayang yang membuat harimu berbunga.',
      'Teruslah mekar dengan caramu sendiri. Dunia menjadi lebih indah karena kehadiran senyumanmu.'
    ]
  },
  biasa: {
    title: 'Hari yang Tenang dan Damai ⛅',
    subtitle: 'Tidak setiap hari harus luar biasa. Hari yang biasa adalah hari yang damai.',
    quotes: [
      'Hari yang biasa saja adalah hari yang aman. Tidak setiap hari harus penuh drama untuk tetap bermakna.',
      'Ketenangan hari ini adalah kesempatan bagus untuk menikmati waktu santai tanpa terburu-buru.',
      'Kadang mengalir saja seperti air adalah cara terbaik menjaga pikiran tetap jernih.',
      'Hari tanpa masalah besar adalah berkah kecil yang seringkali lupa kita syukuri.',
      'Manfaatkan suasana santaimu hari ini untuk mendengarkan lagu favorit atau membaca buku yang kamu suka.',
      'Biasa saja itu normal dan sehat. Tidak ada tekanan untuk selalu tampak luar biasa setiap saat.',
      'Coba sapa teman sebangkumu dengan senyum hangat, obrolan santai bisa bikin hari biasa jadi istimewa.',
      'Nikmati ritme tenangmu hari ini sebelum kembali menghadapi hari-hari ujian yang padat.',
      'Pikiran yang tenang adalah tanah subur tempat ide-ide kreatif dan inspirasi baru lahir.',
      'Berjalan santai saat jam istirahat sambil menghirup udara segar bisa menyegarkan kembali konsentrasimu.',
      'Kamu tidak harus selalu memiliki target besar setiap hari. Berhasil menjalani hari dengan baik sudah cukup.',
      'Hargai waktu heningmu. Di saat heninglah kita bisa lebih mendengar apa yang sebenarnya kita inginkan.',
      'Hari yang netral adalah fondasi yang kokoh untuk menyusun rencana belajar esok hari.',
      'Syukuri kesehatan tubuhmu hari ini. Berjalan dengan santai dan nikmati setiap detik masa remajamu.'
    ]
  },
  sedih: {
    title: 'Peluk Hangat untuk Hatimu yang Lagi Mendung 🌧️',
    subtitle: 'Menangis bukan tanda lemah. Hatimu hanya sedang jujur dan butuh didengarkan.',
    quotes: [
      'Sedih itu manusiawi. Kamu tidak harus pura-pura tersenyum kuat di depan semua orang hari ini.',
      'Menangislah jika memang dadamu terasa sesak. Air mata adalah cara hati membersihkan lukanya.',
      'Perasaan sedih ini tidak akan menetap selamanya. Seperti hujan, badai ini pasti akan reda.',
      'Kamu tidak sendirian. Ada orang-orang yang peduli padamu, bahkan saat kamu merasa dunia sedang sepi.',
      'Beri dirimu waktu untuk beristirahat. Hari ini kamu hanya perlu bernapas dan bertahan.',
      'Peluk gulingmu, minum air hangat, dan dengarkan lagu yang menenangkan. Besok kita coba lagi pelan-pelan.',
      'Satu hari yang buruk tidak berarti masa depanmu buruk. Kamu jauh lebih kuat dari rasa sedihmu.',
      'Ingatlah bahwa kamu sangat berharga, terlepas dari apapun yang membuat hatimu terluka hari ini.',
      'Rasa sakit hari ini sedang mengajarimu menjadi pribadi yang lebih berempati pada orang lain.',
      'Tidak apa-apa jika hari ini kamu belum menemukan solusi atas masalahmu. Istirahatkan pikiranmu dulu.',
      'Jangan kurung dirimu dalam kesendirian terlalu lama. Bicaralah pada sahabat atau guru BK yang kamu percaya.',
      'Kamu berhak diperlakukan dengan penuh kasih sayang, terutama oleh dirimu sendiri di saat terpuruk.',
      'Lihatlah ke luar jendela malam ini; bintang-bintang hanya bersinar terang saat langit benar-benar gelap.',
      'Pelan-pelan ya. Kami di Ruang Tumbuh bangga padamu karena kamu terus bertahan melangkah hingga hari ini.'
    ]
  },
  cemas: {
    title: 'Tarik Napas... Kamu Aman Saat Ini 🌪️',
    subtitle: 'Pikiranmu sedang berlari cepat, mari perlahan bawa kembali kendali ke tanganmu.',
    quotes: [
      'Tarik napas panjang... hembuskan perlahan. 90% hal yang kamu cemaskan belum tentu akan terjadi.',
      'Pikiranmu sedang berlari terlalu cepat. Bawa kembali fokusmu ke kedua kakimu yang menapak di lantai.',
      'Kamu tidak harus menyelesaikan masalah seminggu ke depan hari ini. Cukup selesaikan satu jam ini.',
      'Rasa cemas adalah sinyal tubuhmu yang ingin melindungimu, katakan padanya: "Terima kasih, aku aman."',
      'Jangan biarkan ketakutan akan kegagalan menghentikanmu untuk sekadar mencoba melangkah.',
      'Ujian atau tugas sekolah adalah hal yang bisa dipelajari, itu bukan vonis siapa dirimu.',
      'Bicarakan cemasmu pada orang terpercaya. Membagi beban di kepala akan membuat pundakmu jauh lebih ringan.',
      'Pelan-pelan ya. Kamu sudah pernah melewati masa-masa sulit sebelumnya, dan kali ini kamu juga pasti bisa.',
      'Kecemasan adalah cerita masa depan yang belum ditulis. Kembalilah ke momen saat ini di mana kamu aman.',
      'Rasakan detak jantungmu dan embusan napasmu. Tubuhmu sangat hebat bekerja menjagamu setiap detik.',
      'Pecah tugas besarmu menjadi langkah kecil 5 menit. Kerjakan satu hal kecil untuk mematahkan rasa takut.',
      'Kamu lebih kuat daripada overthinking di kepalamu. Tarik napas 4 detik, tahan 7 detik, buang 8 detik.',
      'Teman-temanmu di kelas juga merasakan cemas yang sama. Kamu tidak sendirian dalam perjuangan ini.',
      'Ingatlah bahwa apapun hasil ujian atau presentasimu nanti, nilaimu sebagai manusia tetap utuh dan berharga.'
    ]
  },
  lelah: {
    title: 'Bateraimu Lagi Lemah, Waktunya Isi Ulang 🔋',
    subtitle: 'Istirahat adalah hak mutlak tubuhmu. Rebahkan diri dan lepaskan beban sejenak.',
    quotes: [
      'Istirahat adalah kebutuhan biologis, bukan kemalasan. Tubuh dan pikiranmu sudah bekerja sangat keras.',
      'Tutup layarmu lebih awal malam ini. Berikan matamu istirahat dari cahaya biru ponsel.',
      'Kamu tidak harus menjadi robot yang selalu produktif 24 jam. Rebahan sejenak sangat diperbolehkan.',
      'Lepaskan beban ekspektasi orang lain malam ini. Tarik selimutmu dan tidurlah dengan nyenyak.',
      'Ketika lelah, belajarlah untuk berhenti sejenak, bukan untuk menyerah selamanya.',
      'Mandi air hangat, minum susu atau teh, dan nikmati waktu hening tanpa memikirkan tugas.',
      'Besok pagi matahari akan terbit lagi dengan energi yang baru untukmu.',
      'Terima kasih ya sudah bertahan dan melangkah sampai sejauh ini meski rasanya berat sekali.',
      'Kelelahan emosional butuh waktu tenang untuk pulih. Jangan paksa dirimu ceria jika belum siap.',
      'Pilih satu hal yang bisa kamu tunda tanpa masalah, dan beri dirimu izin untuk tidak memikirkannya malam ini.',
      'Tubuhmu adalah rumahmu satu-satunya seumur hidup. Rawatlah dia dengan tidur cukup dan makanan bergizi.',
      'Bernapaslah pelan-pelan di atas kasurmu. Rasakan otot bahu dan lehermu yang akhirnya bisa rileks.',
      'Tidak ada yang salah dengan tidur siang 20 menit saat pulang sekolah untuk menyegarkan otakmu.',
      'Malam ini adalah waktu untuk menyembuhkan lelahmu. Tidurlah dengan tenang, esok adalah hari yang baru.'
    ]
  }
};
