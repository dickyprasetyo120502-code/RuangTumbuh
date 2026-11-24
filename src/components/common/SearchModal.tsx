import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Video, Smile, ArrowRight } from 'lucide-react';
import { ARTICLES_DATA } from '../../data/articles';
import { VIDEOS_DATA } from '../../data/videos';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if (e.key === '/' && !isOpen && (e.target as HTMLElement).tagName !== 'INPUT' && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
        e.preventDefault();
        // Trigger open search
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredArticles = query.trim()
    ? ARTICLES_DATA.filter(
        a =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  const filteredVideos = query.trim()
    ? VIDEOS_DATA.filter(
        v =>
          v.title.toLowerCase().includes(query.toLowerCase()) ||
          v.category.toLowerCase().includes(query.toLowerCase()) ||
          v.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3)
    : [];

  const handleSelectArticle = (slug: string) => {
    navigate(`/materi/${slug}`);
    onClose();
  };

  const handleSelectVideo = (slug: string) => {
    navigate(`/video?v=${slug}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#FAF8F1] w-full max-w-2xl rounded-3xl border border-[#E8E2D5] shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8E2D5] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-forest-700/60 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Cari materi, topik, atau perasaanmu..."
            className="w-full bg-transparent text-forest-900 placeholder-forest-700/40 text-base outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-forest-50 text-forest-700/60 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-forest-700/70 bg-forest-50 rounded-lg hover:bg-forest-100"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
          {!query.trim() ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-forest-700/60 mb-3">
                Topik Populer untuk Remaja
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'Mengelola Stres',
                  'Pertemanan Sehat',
                  'Percaya Diri',
                  'Media Sosial',
                  'Cara Belajar',
                  'Bicara ke Guru BK'
                ].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-[#E8E2D5] text-forest-800 hover:border-forest-700 hover:bg-forest-50 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => { navigate('/jelajahi'); onClose(); }}
                  className="p-3.5 bg-white rounded-2xl border border-[#E8E2D5] text-left hover:border-forest-700 transition-colors flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center text-forest-700">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-forest-900">Jelajahi Artikel</div>
                    <div className="text-[11px] text-forest-700/70">Materi edukasi lengkap</div>
                  </div>
                </button>

                <button
                  onClick={() => { navigate('/video'); onClose(); }}
                  className="p-3.5 bg-white rounded-2xl border border-[#E8E2D5] text-left hover:border-forest-700 transition-colors flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-forest-700">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-forest-900">Video Pembelajaran</div>
                    <div className="text-[11px] text-forest-700/70">Video + kuis interaktif</div>
                  </div>
                </button>

                <button
                  onClick={() => { navigate('/mood-checkin'); onClose(); }}
                  className="p-3.5 bg-white rounded-2xl border border-[#E8E2D5] text-left hover:border-forest-700 transition-colors flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-peach-100 flex items-center justify-center text-forest-700">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-forest-900">Mood Check-in</div>
                    <div className="text-[11px] text-forest-700/70">Kenali perasaanmu</div>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {filteredArticles.length === 0 && filteredVideos.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-sm text-forest-700/70">
                    Tidak ditemukan hasil untuk "{query}".
                  </p>
                  <p className="text-xs text-forest-700/50 mt-1">
                    Coba gunakan kata kunci lain seperti "stres", "teman", atau "belajar".
                  </p>
                </div>
              ) : (
                <>
                  {filteredArticles.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-forest-700/60 mb-2">
                        Artikel Materi
                      </p>
                      <div className="space-y-1.5">
                        {filteredArticles.map(a => (
                          <div
                            key={a.id}
                            onClick={() => handleSelectArticle(a.slug)}
                            className="p-3 bg-white rounded-xl border border-[#E8E2D5] hover:border-forest-700 hover:bg-forest-50/50 cursor-pointer transition-colors flex items-center justify-between"
                          >
                            <div>
                              <span className="text-[11px] font-semibold text-forest-700/70 bg-forest-50 px-2 py-0.5 rounded-full mr-2">
                                {a.category}
                              </span>
                              <span className="text-sm font-semibold text-forest-900">
                                {a.title}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-forest-700/40 shrink-0 ml-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredVideos.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-forest-700/60 mb-2">
                        Video Edukasi
                      </p>
                      <div className="space-y-1.5">
                        {filteredVideos.map(v => (
                          <div
                            key={v.id}
                            onClick={() => handleSelectVideo(v.slug)}
                            className="p-3 bg-white rounded-xl border border-[#E8E2D5] hover:border-forest-700 hover:bg-forest-50/50 cursor-pointer transition-colors flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-semibold text-forest-700/70 bg-sky-50 px-2 py-0.5 rounded-full">
                                {v.duration}
                              </span>
                              <span className="text-sm font-semibold text-forest-900">
                                {v.title}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-forest-700/40 shrink-0 ml-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
