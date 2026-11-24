import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';
import { VIDEOS_DATA } from '../data/videos';
import { getTodayMessage } from '../data/quotes';
import { ArticleCard } from '../components/cards/ArticleCard';
import { VideoCard } from '../components/cards/VideoCard';
import { TopicCard } from '../components/cards/TopicCard';
import { DailyMessageModal } from '../components/common/DailyMessageModal';
import { MoodQuotesModal } from '../components/common/MoodQuotesModal';
import { MoodIcon } from '../components/illustrations/MoodEmots';
import {
  PottedPlantIllustration,
} from '../components/illustrations/Illustrations';

export const Home: React.FC = () => {
  const [dailyModalOpen, setDailyModalOpen] = useState(false);
  const [selectedMoodForQuotes, setSelectedMoodForQuotes] = useState<string | null>(null);
  const [featuredCategory, setFeaturedCategory] = useState<string>('Semua');

  const todayMessage = getTodayMessage();

  // Filter or show more articles in "Mungkin cerita ini dekat denganmu"
  const articlesForFeatured = featuredCategory === 'Semua'
    ? ARTICLES_DATA.slice(0, 8)
    : ARTICLES_DATA.filter(a => a.category === featuredCategory).slice(0, 8);

  const featuredVideos = VIDEOS_DATA.slice(0, 5);

  const handleEmotClick = (mood: string) => {
    setSelectedMoodForQuotes(mood);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-50 border border-forest-100/80 text-xs font-semibold text-forest-700">
                <Sparkles className="w-3.5 h-3.5 text-forest-700" />
                <span>Sahabat Digital Siswa SMP Indonesia</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-forest-900 tracking-tight leading-[1.15]">
                Hai, kamu <br className="hidden sm:inline" />
                sedang bertumbuh.{' '}
                <span className="inline-block hover:rotate-12 transition-transform duration-300">
                  🌱
                </span>
              </h1>

              <p className="text-base sm:text-lg text-forest-700/85 max-w-xl leading-relaxed">
                Kenali dirimu, pahami perasaanmu, dan temukan cara menghadapi hal-hal yang kadang nggak mudah.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/jelajahi"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Jelajahi Materi</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/bantuan"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white border border-[#E8E2D5] text-forest-800 hover:bg-forest-50 transition-all shadow-sm hover:shadow"
                >
                  <span>Kenali Ruang Tumbuh</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-xl relative rounded-4xl overflow-hidden border border-[#E8E2D5] shadow-soft-lg group">
                <img
                  src="/beranda.jpg"
                  alt="Ruang Tumbuh — Tiga Remaja Bertumbuh"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                {/* Floating Quote Badge on Image */}
                <div className="absolute top-4 right-4 bg-[#FAF8F1]/95 backdrop-blur-md px-4 py-2 rounded-full border border-forest-700/20 shadow-sm text-xs font-bold text-forest-900 flex items-center gap-1.5">
                  <span>It's okay to grow slowly</span>
                  <span>🌱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOP TWO FEATURE CARDS: "Pesan Hari Ini" & "Hari ini kamu lagi merasa apa?" */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Pesan Hari Ini */}
            <div className="bg-[#FCF9E8] rounded-4xl p-6 sm:p-7 border border-[#F5E8A8] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="space-y-3 flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-butter-200 text-forest-800 text-xs font-bold">
                  <span>Pesan Hari Ini</span>
                  <span>🌱</span>
                </div>
                <p className="font-heading font-bold text-base sm:text-lg text-forest-900 leading-snug">
                  "{todayMessage.quote}"
                </p>
                <div>
                  <button
                    onClick={() => setDailyModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-colors shadow-sm"
                  >
                    <span>Baca pesan hari ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="shrink-0">
                <PottedPlantIllustration className="w-24 h-24 sm:w-28 sm:h-28" />
              </div>
            </div>

            {/* Card 2: Hari ini kamu lagi merasa apa? */}
            <div className="bg-[#FAF8F1] rounded-4xl p-6 sm:p-7 border border-[#E8E2D5] flex flex-col justify-between shadow-soft hover:shadow-soft-lg transition-all">
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-forest-900 mb-1">
                  Hari ini kamu lagi merasa apa?
                </h3>
                <p className="text-xs text-forest-700/80 mb-5">
                  Klik emosimu di bawah untuk membaca 8 kata penguat khusus untukmu:
                </p>

                {/* 5 Mood Interactive Buttons */}
                <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-4">
                  {[
                    { id: 'senang', label: 'Senang', bg: 'bg-[#FAF4D2]', border: 'border-[#F5E8A8]' },
                    { id: 'biasa', label: 'Biasa aja', bg: 'bg-[#E2EEFA]', border: 'border-[#DCEBFA]' },
                    { id: 'sedih', label: 'Sedih', bg: 'bg-[#FDEDE6]', border: 'border-[#F5D6C7]' },
                    { id: 'cemas', label: 'Cemas', bg: 'bg-[#FDEFE6]', border: 'border-[#F5D6C7]' },
                    { id: 'lelah', label: 'Lelah', bg: 'bg-[#EDF5EF]', border: 'border-[#B9D6C2]' },
                  ].map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => handleEmotClick(mood.id)}
                      className={`flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-2xl ${mood.bg} border ${mood.border} hover:scale-105 active:scale-95 transition-all text-center group cursor-pointer shadow-xs`}
                      title={`Klik untuk membaca 14 kutipan penguat saat ${mood.label}`}
                    >
                      <MoodIcon mood={mood.id} className="w-8 h-8 sm:w-9 sm:h-9 mb-1 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-semibold text-forest-900 leading-tight">
                        {mood.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-[#E8E2D5]/70">
                <span className="text-[11px] text-forest-700/60 font-medium">
                  💡 Klik emotikon untuk membuka kata penguat
                </span>
                <Link
                  to="/mood-checkin"
                  className="text-xs font-semibold text-forest-700 hover:text-forest-900 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Cek di Mood Check-in</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOPIC EXPLORATION ("Hal apa yang ingin kamu kenali hari ini?") */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-900 tracking-tight">
              Hal apa yang ingin kamu kenali hari ini?
            </h2>
            <p className="text-sm text-forest-700/80 mt-1">
              Belajar tentang diri sendiri juga bagian dari bertumbuh.
            </p>
          </div>

          {/* 6 Topic Cards with User Provided Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
            <TopicCard
              title="Kenali Dirimu"
              description="Kenali kelebihan, batasan, dan hal-hal yang membuatmu unik."
              bgColor="#EDF5EF"
              borderColor="border-[#D7E9DD]"
              imageUrl="/kenalidirimu.jpg"
              categoryName="Kenali Dirimu"
            />
            <TopicCard
              title="Kenali Emosimu"
              description="Belajar memahami perasaan dan menghadapi hari yang berat."
              bgColor="#FDEDE6"
              borderColor="border-[#FBE0D5]"
              imageUrl="/kenaliemosimu.jpg"
              categoryName="Kenali Emosimu"
            />
            <TopicCard
              title="Pertemanan"
              description="Membangun pertemanan sehat dan belajar menghargai orang lain."
              bgColor="#E2EEFA"
              borderColor="border-[#DCEBFA]"
              imageUrl="/pertemanan.jpg"
              categoryName="Pertemanan"
            />
            <TopicCard
              title="Belajar & Masa Depan"
              description="Temukan cara belajar, membangun kebiasaan, dan meraih cita-cita."
              bgColor="#FAF4D2"
              borderColor="border-[#F5E8A8]"
              imageUrl="/belajardanmasadepan.jpg"
              categoryName="Belajar"
            />
            <TopicCard
              title="Keluarga & Komunikasi"
              description="Belajar memahami, mendengarkan, dan menyampaikan perasaan."
              bgColor="#FDEFE6"
              borderColor="border-[#F5D6C7]"
              imageUrl="/keluargakomunikasi.jpg"
              categoryName="Keluarga"
            />
            <TopicCard
              title="Dunia Digital"
              description="Jelajahi internet dengan bijak, aman, dan bertanggung jawab."
              bgColor="#F4F2FC"
              borderColor="border-[#DDD7F5]"
              imageUrl="/duniadigital.jpg"
              categoryName="Dunia Digital"
            />
          </div>
        </div>
      </section>

      {/* 4. FEATURED ARTICLES ("Mungkin cerita ini dekat denganmu") */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-900 tracking-tight">
                Mungkin cerita ini dekat denganmu
              </h2>
              <p className="text-sm text-forest-700/80 mt-1">
                Kisah dan panduan nyata yang sering dialami teman-teman seusiamu.
              </p>
            </div>
            <Link
              to="/jelajahi"
              className="text-xs sm:text-sm font-semibold text-forest-700 hover:text-forest-900 inline-flex items-center gap-1 transition-colors self-start sm:self-auto"
            >
              <span>Lihat semua ({ARTICLES_DATA.length} materi)</span>
              <span>→</span>
            </Link>
          </div>

          {/* Category Filter Pills on Homepage */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
            {['Semua', 'Kenali Dirimu', 'Kenali Emosimu', 'Pertemanan', 'Belajar', 'Keluarga', 'Dunia Digital'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFeaturedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${featuredCategory === cat
                  ? 'bg-forest-700 text-white shadow-sm'
                  : 'bg-white border border-[#E8E2D5] text-forest-800 hover:bg-forest-50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Expanded 8 Article Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {articlesForFeatured.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED VIDEOS ("Edukasi dari Video") */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-900 tracking-tight">
                Edukasi dari Video
              </h2>
              <p className="text-sm text-forest-700/80 mt-1">
                Tonton video pendek berbahasa Indonesia yang seru dan bermanfaat.
              </p>
            </div>
            <Link
              to="/video"
              className="text-xs sm:text-sm font-semibold text-forest-700 hover:text-forest-900 inline-flex items-center gap-1 transition-colors"
            >
              <span>Lihat semua</span>
              <span>→</span>
            </Link>
          </div>

          {/* 5 Video Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. RUANG BANTUAN TEASER BANNER */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F1] rounded-4xl border border-[#E8E2D5] p-6 sm:p-10 shadow-soft overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-100 text-xs font-bold text-forest-700">
                  <Heart className="w-3.5 h-3.5 fill-peach-400 text-peach-400" />
                  <span>Ruang Bantuan Sahabat</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-900 leading-tight">
                  Kalau lagi punya masalah, kamu nggak harus menghadapinya sendirian.
                </h3>
                <p className="text-sm text-forest-700/85 leading-relaxed">
                  Kadang kita cuma butuh seseorang yang mau mendengarkan. Kamu boleh mencari bantuan dari orang dewasa yang kamu percaya, termasuk guru BK di sekolahmu.
                </p>
                <div className="pt-2">
                  <Link
                    to="/bantuan"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-all shadow-sm"
                  >
                    <span>Kenali cara mencari bantuan</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-card">
                  <img
                    src="/ruangbantusahabat.jpg"
                    alt="Ruang Bantuan Sahabat"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Message Modal */}
      <DailyMessageModal
        isOpen={dailyModalOpen}
        onClose={() => setDailyModalOpen(false)}
      />

      {/* Mood 8 Quotes Modal */}
      <MoodQuotesModal
        moodKey={selectedMoodForQuotes}
        onClose={() => setSelectedMoodForQuotes(null)}
      />
    </div>
  );
};
