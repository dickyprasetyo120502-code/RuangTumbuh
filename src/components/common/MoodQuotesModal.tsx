import React, { useState } from 'react';
import { X, Sparkles, Copy, Check, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOOD_QUOTES } from '../../data/quotes';
import { MoodIcon } from '../illustrations/MoodEmots';

interface MoodQuotesModalProps {
  moodKey: string | null;
  onClose: () => void;
}

export const MoodQuotesModal: React.FC<MoodQuotesModalProps> = ({ moodKey, onClose }) => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  if (!moodKey || !MOOD_QUOTES[moodKey]) return null;

  const moodData = MOOD_QUOTES[moodKey];
  const quotesList = moodData.quotes;
  const currentQuote = quotesList[activeQuoteIndex];

  const handleNext = () => {
    setActiveQuoteIndex((prev) => (prev + 1) % quotesList.length);
  };

  const handlePrev = () => {
    setActiveQuoteIndex((prev) => (prev - 1 + quotesList.length) % quotesList.length);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(`"${text}" — Ruang Tumbuh`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#FAF8F1] w-full max-w-lg rounded-4xl border border-[#E8E2D5] shadow-2xl p-6 sm:p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-forest-700/60 hover:text-forest-900 hover:bg-forest-50 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Emotion Header with Custom SVG Emot */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-13 h-13 rounded-2xl bg-white border border-[#E8E2D5] flex items-center justify-center shadow-sm p-1.5 shrink-0">
            <MoodIcon mood={moodKey} className="w-10 h-10" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-forest-700/60">
              Kata Penguat Hari Ini ({quotesList.length} Kutipan)
            </span>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-forest-900 leading-snug">
              {moodData.title}
            </h3>
            <p className="text-xs text-forest-700/70">{moodData.subtitle}</p>
          </div>
        </div>

        {!showAllQuotes ? (
          <>
            {/* Active Quote Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E2D5] shadow-sm relative space-y-4 mb-4">
              <div className="flex items-center justify-between text-xs text-forest-700/60 font-semibold">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-forest-50 text-forest-700">
                  <Sparkles className="w-3 h-3 text-butter-400" />
                  Kutipan {activeQuoteIndex + 1} dari {quotesList.length}
                </span>
                <span>Untukmu Sahabat</span>
              </div>

              <p className="font-heading font-bold text-base sm:text-lg text-forest-900 leading-relaxed italic min-h-[4.5rem] flex items-center">
                "{currentQuote}"
              </p>

              {/* Navigation within quotes */}
              <div className="flex items-center justify-between pt-3 border-t border-[#E8E2D5]/70">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-[#FAF8F1] hover:bg-forest-50 text-forest-800 transition-colors"
                    title="Kutipan sebelumnya"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-[#FAF8F1] hover:bg-forest-50 text-forest-800 transition-colors"
                    title="Kutipan berikutnya"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => handleCopy(currentQuote)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF8F1] text-forest-800 hover:bg-forest-50 border border-[#E8E2D5] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-forest-700" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Kutipan</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => setShowAllQuotes(true)}
                className="text-xs font-semibold text-forest-700 hover:text-forest-900 underline underline-offset-2"
              >
                Lihat Semua 14 Kutipan →
              </button>
              <Link
                to={`/mood-checkin?mood=${moodKey}`}
                onClick={onClose}
                className="inline-flex items-center gap-1 text-xs font-semibold text-forest-700/80 hover:text-forest-900"
              >
                <span>Eksplor Mood Check-in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </>
        ) : (
          /* List of all 14 quotes */
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-forest-800">Semua 14 Kutipan Penguat:</span>
              <button
                onClick={() => setShowAllQuotes(false)}
                className="text-xs font-semibold text-forest-700 underline"
              >
                Kembali ke Mode Kartu
              </button>
            </div>
            <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
              {quotesList.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white border border-[#E8E2D5] text-xs text-forest-900 font-medium leading-relaxed flex items-start justify-between gap-3 group"
                >
                  <span>{idx + 1}. "{q}"</span>
                  <button
                    onClick={() => handleCopy(q)}
                    className="p-1.5 text-forest-700/50 hover:text-forest-900 rounded-md shrink-0"
                    title="Salin"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
