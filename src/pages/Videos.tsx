import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Play,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Search,
  ExternalLink,
  BookOpen,
  MonitorPlay,
  Lightbulb,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VIDEOS_DATA } from '../data/videos';
import { VideoItem } from '../types';

export const Videos: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoSlug = searchParams.get('v');

  const [activeVideo, setActiveVideo] = useState<VideoItem>(() => {
    return VIDEOS_DATA.find((v) => v.slug === videoSlug) || VIDEOS_DATA[0];
  });

  const [activeTab, setActiveTab] = useState<'rangkuman' | 'transkrip' | 'refleksi' | 'kuis'>('rangkuman');
  const [playerMode, setPlayerMode] = useState<'youtube' | 'direct' | 'interactive'>('youtube');
  const [searchQuery, setSearchQuery] = useState('');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [reflectionNotes, setReflectionNotes] = useState<Record<number, string>>({});

  // Sync active video if URL param changes
  useEffect(() => {
    if (videoSlug) {
      const found = VIDEOS_DATA.find((v) => v.slug === videoSlug);
      if (found) {
        setActiveVideo(found);
        setQuizAnswers({});
        setQuizSubmitted(false);
      }
    }
  }, [videoSlug]);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setQuizAnswers({});
    setQuizSubmitted(false);
    searchParams.set('v', video.slug);
    setSearchParams(searchParams);
  };

  // Next video in playlist
  const currentIndex = VIDEOS_DATA.findIndex((v) => v.id === activeVideo.id);
  const nextVideo = VIDEOS_DATA[(currentIndex + 1) % VIDEOS_DATA.length];

  // Filtered playlist
  const filteredPlaylist = VIDEOS_DATA.filter((v) =>
    v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQuizOption = (questionId: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
    const allCorrect = activeVideo.quiz.every(
      (q) => quizAnswers[q.id] === q.correctIndex
    );
    if (allCorrect) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-900 tracking-tight">
            Video Pembelajaran & Edukasi
          </h1>
          <p className="text-sm text-forest-700/80 mt-1">
            Tonton video interaktif, rangkum materi intinya, dan uji pemahamanmu dengan kuis seru.
          </p>
        </div>

        {/* Player Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white border border-[#E8E2D5] rounded-2xl shadow-card self-start sm:self-auto overflow-x-auto">
          <button
            onClick={() => setPlayerMode('direct')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
              playerMode === 'direct'
                ? 'bg-forest-700 text-white shadow-sm'
                : 'text-forest-700/80 hover:text-forest-900'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Pemutar Langsung</span>
          </button>
          <button
            onClick={() => setPlayerMode('youtube')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
              playerMode === 'youtube'
                ? 'bg-forest-700 text-white shadow-sm'
                : 'text-forest-700/80 hover:text-forest-900'
            }`}
          >
            <MonitorPlay className="w-3.5 h-3.5" />
            <span>Mode YouTube</span>
          </button>
          <button
            onClick={() => setPlayerMode('interactive')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
              playerMode === 'interactive'
                ? 'bg-forest-700 text-white shadow-sm'
                : 'text-forest-700/80 hover:text-forest-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ringkasan Cepat</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left Video Player (8 cols) + Right Playlist (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Player & Tabs */}
        <div className="lg:col-span-8 space-y-6">
          {/* Video Player Display */}
          {playerMode === 'direct' && (
            <div className="bg-black rounded-4xl overflow-hidden aspect-[16/9] shadow-soft-lg relative border border-[#E8E2D5]">
              <video
                key={activeVideo.id}
                controls
                playsInline
                poster={activeVideo.thumbnail}
                className="w-full h-full object-cover"
              >
                {activeVideo.videoUrl && <source src={activeVideo.videoUrl} type="video/mp4" />}
                Browser kamu tidak mendukung pemutar video HTML5.
              </video>
            </div>
          )}

          {playerMode === 'youtube' && (
            <div className="bg-black rounded-4xl overflow-hidden aspect-[16/9] shadow-soft-lg relative border border-[#E8E2D5]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {playerMode === 'interactive' && (
            /* Interactive Presentation View */
            <div className="bg-gradient-to-br from-forest-800 to-forest-900 text-white rounded-4xl p-6 sm:p-10 aspect-[16/9] shadow-soft-lg flex flex-col justify-between relative overflow-hidden border border-[#E8E2D5]">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-butter-300">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Mode Ringkasan Interaktif Siswa</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl leading-snug">
                  {activeVideo.title}
                </h3>
              </div>

              {/* Key Highlights Inside Player */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 my-2">
                <p className="text-xs sm:text-sm text-forest-100 font-medium leading-relaxed">
                  💡 {activeVideo.summary.keyTakeaway}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-forest-200">
                <span>Durasi Pembelajaran: {activeVideo.duration}</span>
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-forest-900 font-bold hover:bg-butter-100 transition-colors shadow-sm"
                >
                  <span>Buka Langsung di YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Quick Notice & Direct YouTube Link */}
          <div className="flex items-center justify-between px-2 text-xs text-forest-700/70">
            <span>
              Kendala pemutaran di jaringan sekolah? Kamu bisa klik tombol di sebelah kanan.
            </span>
            <a
              href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-forest-900 hover:text-forest-700 inline-flex items-center gap-1 underline underline-offset-2 shrink-0 ml-2"
            >
              <span>Tonton di YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Video Title & Meta */}
          <div className="bg-white rounded-3xl p-6 border border-[#E8E2D5] shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-forest-50 text-forest-800 border border-forest-100">
                {activeVideo.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-medium text-forest-700/70">
                <Clock className="w-3.5 h-3.5" />
                <span>Durasi: {activeVideo.duration}</span>
              </div>
            </div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-forest-900 leading-snug">
              {activeVideo.title}
            </h2>
            <p className="text-xs sm:text-sm text-forest-700/80 mt-2 leading-relaxed">
              {activeVideo.description}
            </p>
          </div>

          {/* Interactive Tabs Under Player (Rangkuman, Transkrip, Refleksi, Kuis) */}
          <div className="bg-white rounded-3xl border border-[#E8E2D5] shadow-card overflow-hidden">
            {/* Tabs Header */}
            <div className="flex items-center border-b border-[#E8E2D5] bg-[#FAF8F1] px-4 pt-3 overflow-x-auto">
              {[
                { id: 'rangkuman', label: 'Rangkuman' },
                { id: 'transkrip', label: 'Transkrip' },
                { id: 'refleksi', label: 'Refleksi' },
                { id: 'kuis', label: 'Kuis Singkat' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-t-2xl transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-white text-forest-900 border-t border-l border-r border-[#E8E2D5] shadow-sm'
                    : 'text-forest-700/70 hover:text-forest-900'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="p-6">
              {/* Tab 1: Rangkuman */}
              {activeTab === 'rangkuman' && (
                <div className="space-y-4">
                  <h4 className="font-heading font-bold text-sm text-forest-900 uppercase tracking-wider">
                    Poin Penting Video
                  </h4>
                  <ul className="space-y-2.5">
                    {activeVideo.summary.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest-800">
                        <CheckCircle className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 p-4 rounded-2xl bg-forest-50/70 border border-forest-100">
                    <p className="text-xs font-bold text-forest-900 mb-1">
                      💡 Intisari Utama:
                    </p>
                    <p className="text-xs text-forest-800 leading-relaxed">
                      {activeVideo.summary.keyTakeaway}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Transkrip */}
              {activeTab === 'transkrip' && (
                <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
                  {activeVideo.transcript.map((line, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-[#FAF8F1] border border-[#E8E2D5]/70 flex items-start gap-3 text-xs"
                    >
                      <span className="font-mono text-forest-700/60 font-semibold px-2 py-0.5 bg-white rounded-md shrink-0">
                        {line.timestamp}
                      </span>
                      <div>
                        <span className="font-bold text-forest-900 mr-1.5">
                          {line.speaker}:
                        </span>
                        <span className="text-forest-800">{line.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Refleksi */}
              {activeTab === 'refleksi' && (
                <div className="space-y-4">
                  <h4 className="font-heading font-bold text-sm text-forest-900">
                    Pertanyaan Refleksi Pribadi
                  </h4>
                  <div className="space-y-4">
                    {activeVideo.reflection.questions.map((q, idx) => (
                      <div key={idx} className="space-y-2 bg-[#FAF8F1] p-4 rounded-2xl border border-[#E8E2D5]">
                        <p className="text-xs font-semibold text-forest-800">
                          {idx + 1}. {q}
                        </p>
                        <textarea
                          rows={2}
                          value={reflectionNotes[idx] || ''}
                          onChange={(e) =>
                            setReflectionNotes((prev) => ({ ...prev, [idx]: e.target.value }))
                          }
                          placeholder="Ketik catatan refleksimu..."
                          className="w-full bg-white rounded-xl p-3 text-xs text-forest-900 border border-[#E8E2D5] outline-none focus:border-forest-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Kuis Singkat */}
              {activeTab === 'kuis' && (
                <div className="space-y-6">
                  {activeVideo.quiz.map((q, qIdx) => (
                    <div key={q.id} className="space-y-3 bg-[#FAF8F1] p-4 sm:p-5 rounded-2xl border border-[#E8E2D5]">
                      <p className="font-heading font-bold text-xs sm:text-sm text-forest-900">
                        {qIdx + 1}. {q.question}
                      </p>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = quizAnswers[q.id] === optIdx;
                          const isCorrect = q.correctIndex === optIdx;

                          let btnStyle = 'bg-white border-[#E8E2D5] text-forest-800 hover:border-forest-700';
                          if (isSelected) {
                            btnStyle = 'bg-forest-50 border-forest-700 font-bold text-forest-900';
                          }
                          if (quizSubmitted) {
                            if (isCorrect) {
                              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                            } else if (isSelected && !isCorrect) {
                              btnStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleQuizOption(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && isCorrect && (
                                <span className="text-emerald-600 font-bold">✓ Benar</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="p-3 bg-white rounded-xl border border-forest-100 text-xs text-forest-800">
                          <span className="font-bold text-forest-900">Penjelasan: </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => {
                        setQuizAnswers({});
                        setQuizSubmitted(false);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#E8E2D5] text-forest-800 hover:bg-forest-50"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Ulangi Kuis</span>
                    </button>

                    <button
                      onClick={submitQuiz}
                      disabled={Object.keys(quizAnswers).length < activeVideo.quiz.length}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 disabled:opacity-50 transition-colors shadow-sm"
                    >
                      <span>Periksa Jawaban</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Next Video Banner */}
          <div className="bg-[#FAF8F1] rounded-3xl p-5 border border-[#E8E2D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest-700/60">
                Video Selanjutnya
              </span>
              <h4 className="font-heading font-bold text-sm sm:text-base text-forest-900">
                {nextVideo.title}
              </h4>
            </div>
            <button
              onClick={() => handleSelectVideo(nextVideo)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-colors shadow-sm shrink-0"
            >
              <span>Tonton Selanjutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Video Playlist */}
        <div className="lg:col-span-4 bg-white rounded-4xl border border-[#E8E2D5] p-5 sm:p-6 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-base text-forest-900">
              Daftar Video Edukasi
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-forest-50 text-forest-700">
              {filteredPlaylist.length} Video
            </span>
          </div>

          {/* Search in Playlist */}
          <div className="relative">
            <Search className="w-4 h-4 text-forest-700/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari dalam daftar video..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FAF8F1] border border-[#E8E2D5] text-forest-900 placeholder-forest-700/40 outline-none focus:border-forest-700"
            />
          </div>

          {/* Playlist items */}
          <div className="space-y-2.5 max-h-[620px] overflow-y-auto pr-1">
            {filteredPlaylist.map((video) => {
              const isActive = video.id === activeVideo.id;
              return (
                <div
                  key={video.id}
                  onClick={() => handleSelectVideo(video)}
                  className={`p-3 rounded-2xl cursor-pointer transition-all flex items-center gap-3 border ${isActive
                    ? 'bg-forest-50/80 border-forest-700 shadow-sm'
                    : 'bg-white border-[#E8E2D5] hover:border-forest-400 hover:bg-[#FAF8F1]'
                    }`}
                >
                  {/* Thumbnail Preview */}
                  <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-forest-100">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="w-4 h-4 fill-white text-white" />
                    </div>
                  </div>

                  {/* Title and duration */}
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-semibold text-forest-700/70 uppercase">
                      {video.category}
                    </span>
                    <h5 className="font-heading font-bold text-xs text-forest-900 line-clamp-2 leading-snug">
                      {video.title}
                    </h5>
                    <div className="flex items-center gap-1 text-[11px] text-forest-700/60 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
