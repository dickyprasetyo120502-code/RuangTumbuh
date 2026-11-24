import React, { useState } from 'react';
import { X, Sparkles, Share2, Check, Calendar } from 'lucide-react';
import { getTodayMessage } from '../../data/quotes';
import { PottedPlantIllustration } from '../illustrations/Illustrations';

interface DailyMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DailyMessageModal: React.FC<DailyMessageModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const currentMessage = getTodayMessage();

  if (!isOpen) return null;

  const handleCopy = () => {
    const text = `"${currentMessage.quote}" - Ruang Tumbuh (${currentMessage.subquote})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#FAF8F1] w-full max-w-lg rounded-4xl border border-[#E8E2D5] shadow-2xl p-6 sm:p-8 text-center relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-forest-700/60 hover:text-forest-900 hover:bg-forest-50 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cute plant icon */}
        <div className="flex justify-center mb-4">
          <PottedPlantIllustration className="w-24 h-24" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-50 border border-forest-100 text-forest-700 text-xs font-bold mb-4">
          <Calendar className="w-3.5 h-3.5 text-forest-700" />
          <span>Pesan Hari ke-{currentMessage.dayNumber} dari 14 Hari ({currentMessage.theme})</span>
        </div>

        {/* Quote Content */}
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-forest-900 leading-snug mb-3">
          "{currentMessage.quote}"
        </h3>

        <p className="text-sm text-forest-700/80 leading-relaxed max-w-md mx-auto mb-6">
          {currentMessage.subquote}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 pt-4 border-t border-[#E8E2D5]">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#E8E2D5] text-forest-800 hover:bg-forest-50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-forest-700" />
                <span>Tersalin ke Clipboard!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-forest-700" />
                <span>Salin Kutipan</span>
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-colors"
          >
            Terima Kasih 🌱
          </button>
        </div>
      </div>
    </div>
  );
};
