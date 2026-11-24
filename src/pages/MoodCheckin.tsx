import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Heart, Sparkles, Copy, Check, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { MOODS_DATA } from '../data/moodData';
import { MOOD_QUOTES } from '../data/quotes';
import { ARTICLES_DATA } from '../data/articles';
import { VIDEOS_DATA } from '../data/videos';
import { ArticleCard } from '../components/cards/ArticleCard';
import { VideoCard } from '../components/cards/VideoCard';
import { BreathingWidget } from '../components/common/BreathingWidget';
import { MoodIcon } from '../components/illustrations/MoodEmots';
import { MoodType } from '../types';

export const MoodCheckin: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramMood = searchParams.get('mood') as MoodType | null;

  const [selectedMood, setSelectedMood] = useState<MoodType>(paramMood || 'biasa');
  const [subFeelings, setSubFeelings] = useState<string[]>([]);
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);
  const [copiedQuote, setCopiedQuote] = useState(false);

  useEffect(() => {
    if (paramMood && MOODS_DATA[paramMood]) {
      setSelectedMood(paramMood);
    }
  }, [paramMood]);

  const moodMeta = MOODS_DATA[selectedMood];
  const quotesData = MOOD_QUOTES[selectedMood] || MOOD_QUOTES['biasa'];
  const allQuotes = quotesData.quotes;

  const handleSelectMood = (mood: MoodType) => {
    setSelectedMood(mood);
    setSubFeelings([]);
    setActiveQuoteIdx(0);
    searchParams.set('mood', mood);
    setSearchParams(searchParams);
  };

  const getSubtags = (mood: MoodType) => {
    switch (mood) {
      case 'senang':
        return ['Bersyukur', 'Bersemangat', 'Puas dengan nilai', 'Habis ketawa bareng teman', 'Tenang & Bahagia'];
      case 'biasa':
        return ['Santai', 'Netral', 'Melamun', 'Tidak ada hal khusus', 'Mengalir saja'];
      case 'sedih':
        return ['Kecewa', 'Merasa diabaikan', 'Kangen seseorang', 'Lagi sensitif', 'Ingin menangis'];
      case 'cemas':
        return ['Takut nilai jelek', 'Overthinking pertemanan', 'Beban tugas banyak', 'Jantung berdebar', 'Takut salah'];
      case 'lelah':
        return ['Kurang tidur', 'Capek les & sekolah', 'Energi habis', 'Pusing', 'Butuh rebahan'];
    }
  };

  const toggleSubtag = (tag: string) => {
    setSubFeelings((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(`"${text}" — Ruang Tumbuh`);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  // Recommended articles & videos for this mood
  const recommendedArticles = ARTICLES_DATA.filter(
    (a) => a.category === moodMeta.recommendedCategory || a.category === 'Kenali Emosimu'
  ).slice(0, 2);

  const recommendedVideos = VIDEOS_DATA.filter(
    (v) => v.category === moodMeta.recommendedCategory || v.category === 'Kenali Emosimu'
  ).slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-peach-100 border border-peach-200 text-xs font-semibold text-forest-800">
          <Heart className="w-3.5 h-3.5 fill-peach-400 text-peach-400" />
          <span>Ruang Aman Perasaanmu</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-900 tracking-tight">
          Hari ini kamu lagi merasa apa?
        </h1>
        <p className="text-xs sm:text-sm text-forest-700/80">
          Setiap perasaan yang kamu miliki itu valid dan berharga. Klik salah satu ekspresi emosi di bawah untuk mendapatkan respon dan kata-kata penguat.
        </p>
      </div>

      {/* 5 Mood Selector Cards with Custom SVG Emots */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
        {(Object.keys(MOODS_DATA) as MoodType[]).map((moodKey) => {
          const item = MOODS_DATA[moodKey];
          const isSelected = selectedMood === moodKey;
          return (
            <button
              key={moodKey}
              onClick={() => handleSelectMood(moodKey)}
              className={`p-4 sm:p-5 rounded-3xl border transition-all text-center flex flex-col items-center justify-between cursor-pointer ${
                isSelected
                  ? 'border-forest-700 shadow-soft-lg scale-105 ring-2 ring-forest-700/10'
                  : 'border-[#E8E2D5] bg-white hover:border-forest-400 hover:bg-[#FAF8F1]'
              }`}
              style={{
                backgroundColor: isSelected ? item.bgColor : undefined,
                borderColor: isSelected ? item.borderColor : undefined,
              }}
            >
              <div className="mb-2">
                <MoodIcon mood={moodKey} className="w-12 h-12 sm:w-14 sm:h-14" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-forest-900">
                  {item.label}
                </h3>
                <p className="text-[11px] text-forest-700/70 mt-0.5 line-clamp-1">
                  {item.sublabel}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Emotion Response & 14 Quotes Carousel */}
      <div className="max-w-4xl mx-auto bg-white rounded-4xl border border-[#E8E2D5] p-6 sm:p-10 shadow-card space-y-8">
        {/* Affirmation Row */}
        <div className="flex items-start gap-4">
          <div
            className="w-16 h-16 rounded-3xl flex items-center justify-center p-2 shrink-0 shadow-sm border border-black/5"
            style={{ backgroundColor: moodMeta.bgColor }}
          >
            <MoodIcon mood={selectedMood} className="w-12 h-12" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-forest-700/60">
              Pesan Suportif untukmu
            </span>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-forest-900">
              {moodMeta.affirmation}
            </h2>
            <p className="text-xs sm:text-sm text-forest-700/80 leading-relaxed pt-1">
              {moodMeta.advice}
            </p>
          </div>
        </div>

        {/* 14 Curated Quotes Box for Selected Mood */}
        <div className="bg-[#FAF8F1] rounded-3xl p-5 sm:p-7 border border-[#E8E2D5] space-y-4">
          <div className="flex items-center justify-between text-xs text-forest-700/70 font-semibold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E2D5] text-forest-900">
              <Sparkles className="w-3.5 h-3.5 text-butter-400" />
              <span>14 Kata Penguat ({activeQuoteIdx + 1} dari {allQuotes.length})</span>
            </span>
            <span>Khusus Mood: {moodMeta.label}</span>
          </div>

          <p className="font-heading font-bold text-base sm:text-lg text-forest-900 leading-relaxed italic min-h-[4rem] flex items-center">
            "{allQuotes[activeQuoteIdx]}"
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-[#E8E2D5]/70">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActiveQuoteIdx((prev) => (prev - 1 + allQuotes.length) % allQuotes.length)}
                className="p-2 rounded-full bg-white hover:bg-forest-50 border border-[#E8E2D5] text-forest-800 transition-colors"
                title="Kutipan sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveQuoteIdx((prev) => (prev + 1) % allQuotes.length)}
                className="p-2 rounded-full bg-white hover:bg-forest-50 border border-[#E8E2D5] text-forest-800 transition-colors"
                title="Kutipan berikutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-forest-700/60 ml-2">
                Geser untuk membaca 14 kutipan
              </span>
            </div>

            <button
              onClick={() => handleCopy(allQuotes[activeQuoteIdx])}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#E8E2D5] text-forest-800 hover:bg-forest-50 transition-colors shadow-xs"
            >
              {copiedQuote ? (
                <>
                  <Check className="w-3.5 h-3.5 text-forest-700" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-forest-700" />
                  <span>Salin Kutipan</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Sub-feeling tags for deeper self-expression */}
        <div className="space-y-2 pt-2 border-t border-[#E8E2D5]/70">
          <p className="text-xs font-bold text-forest-800 uppercase tracking-wider">
            Lebih spesifiknya, apa yang sedang terasa di hatimu? (Pilih yang relevan):
          </p>
          <div className="flex flex-wrap gap-2">
            {getSubtags(selectedMood).map((tag) => {
              const active = subFeelings.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleSubtag(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    active
                      ? 'bg-forest-700 text-white border-forest-700 shadow-sm'
                      : 'bg-[#FAF8F1] border-[#E8E2D5] text-forest-800 hover:bg-forest-50'
                  }`}
                >
                  {active ? `✓ ${tag}` : tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Calming Breathing Tool for High-Stress or Fatigue Moods */}
        {moodMeta.breathingHelp && (
          <div className="pt-4 border-t border-[#E8E2D5]/70">
            <BreathingWidget />
          </div>
        )}
      </div>

      {/* Recommendations Matched to the Mood */}
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-xl text-forest-900">
              Rekomendasi yang Cocok untuk Perasaanmu Saat Ini
            </h3>
            <p className="text-xs text-forest-700/70 mt-0.5">
              Materi terpilih untuk mendampingi suasana hatimu.
            </p>
          </div>
          <Link
            to="/jelajahi"
            className="text-xs font-semibold text-forest-700 hover:text-forest-900 inline-flex items-center gap-1"
          >
            <span>Jelajahi semua</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recommendedArticles.map((art) => (
            <ArticleCard key={art.id} article={art} />
          ))}
          {recommendedVideos.map((vid) => (
            <VideoCard key={vid.id} video={vid} />
          ))}
        </div>
      </div>

      {/* Non-diagnostic Reassurance Note */}
      <div className="max-w-2xl mx-auto text-center pt-4">
        <p className="text-xs text-forest-700/60 leading-relaxed">
          Ruang Tumbuh menyediakan konten edukasi reflektif dan tidak melakukan diagnosis medis/psikologis. 
          Jika kamu merasa membutuhkan pertolongan serius, silakan kunjungi{' '}
          <Link to="/bantuan" className="font-semibold text-forest-800 underline underline-offset-2">
            Ruang Bantuan
          </Link>.
        </p>
      </div>
    </div>
  );
};
