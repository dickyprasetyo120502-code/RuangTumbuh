import { MoodMeta } from '../types';

export const MOODS_DATA: Record<string, MoodMeta> = {
  senang: {
    type: 'senang',
    label: 'Senang',
    sublabel: 'Lagi bersemangat & bersyukur',
    emoji: '🌸',
    color: '#D4A318',
    bgColor: '#FAF4D2',
    borderColor: '#F5E8A8',
    affirmation: 'Senang melihatmu berbunga hari ini! Nikmati energi positifmu dan sebarkan senyuman kepada teman-teman di sekitarmu.',
    recommendedCategory: 'Belajar',
    advice: 'Saat energimu sedang tinggi adalah momen terbaik untuk mempelajari hal baru atau menyelesaikan tugas yang sempat tertunda.',
    breathingHelp: false
  },
  biasa: {
    type: 'biasa',
    label: 'Biasa aja',
    sublabel: 'Tenang, santai, & netral',
    emoji: '⛅',
    color: '#294C3A',
    bgColor: '#E2EEFA',
    borderColor: '#DCEBFA',
    affirmation: 'Hari yang biasa adalah hari yang damai. Tidak setiap hari harus luar biasa untuk tetap berarti dan disyukuri.',
    recommendedCategory: 'Pertemanan',
    advice: 'Manfaatkan harimu yang santai ini untuk menyapa teman lama atau membaca artikel yang menarik minatmu.',
    breathingHelp: false
  },
  sedih: {
    type: 'sedih',
    label: 'Sedih',
    sublabel: 'Lagi mendung & terluka',
    emoji: '🌧️',
    color: '#3B6B8C',
    bgColor: '#FDEDE6',
    borderColor: '#F5D6C7',
    affirmation: 'Peluk hangat untukmu. Menangis dan merasa sedih bukan tanda lemah, itu bukti bahwa hatimu jujur dan manusiawi.',
    recommendedCategory: 'Kenali Emosimu',
    advice: 'Beri waktu untuk dirimu sendiri. Minum secangkir teh hangat, dengarkan musik yang menenangkan, dan jangan paksakan tersenyum jika belum siap.',
    breathingHelp: true
  },
  cemas: {
    type: 'cemas',
    label: 'Cemas',
    sublabel: 'Banyak pikiran & gelisah',
    emoji: '🌪️',
    color: '#C05621',
    bgColor: '#FDEFE6',
    borderColor: '#F5D6C7',
    affirmation: 'Tarik napas panjang... kamu aman saat ini. Pikiranmu mungkin sedang berlari terlalu cepat, tapi kamu bisa melangkah satu per satu.',
    recommendedCategory: 'Kenali Emosimu',
    advice: 'Coba rasakan kedua kakimu menapak kuat di lantai. Pikiran cemas seringkali memikirkan hal di masa depan yang belum tentu terjadi.',
    breathingHelp: true
  },
  lelah: {
    type: 'lelah',
    label: 'Lelah',
    sublabel: 'Energi habis & butuh jeda',
    emoji: '🔋',
    color: '#3D6C53',
    bgColor: '#EDF5EF',
    borderColor: '#B9D6C2',
    affirmation: 'Bateraimu mungkin hampir merah. Beristirahat bukanlah kemalasan, melainkan kebutuhan agar kamu bisa kembali mekar besok.',
    recommendedCategory: 'Kenali Dirimu',
    advice: 'Tutup layarmu 30 menit lebih awal malam ini. Berikan tubuh dan matamu istirahat yang sangat layak mereka dapatkan.',
    breathingHelp: true
  }
};
