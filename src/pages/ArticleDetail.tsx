import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  Bookmark,
  Share2,
  ChevronRight,
  Check,
  Send,
  MessageCircle,
  Copy,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';
import { useBookmarks } from '../hooks/useBookmarks';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const [copied, setCopied] = useState(false);
  const [reflectionAnswers, setReflectionAnswers] = useState<Record<number, string>>({});
  const [savedNote, setSavedNote] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const article = ARTICLES_DATA.find((a) => a.slug === slug) || ARTICLES_DATA[0];
  const bookmarked = isBookmarked(article.slug);

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Related articles
  const relatedArticles = ARTICLES_DATA.filter((a) =>
    article.relatedArticleSlugs.includes(a.slug) || (a.category === article.category && a.slug !== article.slug)
  ).slice(0, 3);

  const handleShare = (platform: 'wa' | 'twitter' | 'copy') => {
    const url = window.location.href;
    const title = article.title;

    if (platform === 'wa') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' - ' + url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSaveReflection = () => {
    setSavedNote(true);
    setTimeout(() => setSavedNote(false), 2500);
  };

  return (
    <div className="pb-20">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
        <div
          className="h-full bg-forest-700 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        {/* Breadcrumb Navigation (Mockup #3) */}
        <nav className="flex items-center space-x-1.5 text-xs text-forest-700/60 mb-6 flex-wrap">
          <Link to="/" className="hover:text-forest-900 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-forest-700/40" />
          <Link
            to={`/jelajahi?kategori=${encodeURIComponent(article.category)}`}
            className="hover:text-forest-900 transition-colors"
          >
            {article.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-forest-700/40" />
          <span className="text-forest-900 font-semibold line-clamp-1 max-w-xs">
            {article.title}
          </span>
        </nav>

        {/* Article Title & Header */}
        <div className="max-w-3xl mb-8 space-y-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-900 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-forest-50 text-forest-800 border border-forest-100">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-medium text-forest-700/70">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
            <span className="text-xs text-forest-700/40">•</span>
            <span className="text-xs text-forest-700/70">{article.date}</span>
          </div>
        </div>

        {/* Two-Column Grid: Left Content (70%), Right Sidebar (30%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Hero Image */}
            <div className="rounded-4xl overflow-hidden border border-[#E8E2D5] shadow-card bg-forest-50 relative aspect-[16/9]">
              <img
                src={article.heroImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleBookmark(article.slug)}
                className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all shadow-sm ${
                  bookmarked
                    ? 'bg-forest-700 text-white'
                    : 'bg-white/90 text-forest-800 hover:bg-white'
                }`}
                title={bookmarked ? 'Hapus dari bookmark' : 'Simpan bookmark'}
                aria-label="Bookmark artikel"
              >
                <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-white' : ''}`} />
              </button>
            </div>

            {/* Author Attribution Card */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8E2D5]">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-full object-cover border border-forest-100"
              />
              <div>
                <p className="text-xs font-bold text-forest-900">{article.author.name}</p>
                <p className="text-[11px] text-forest-700/70">{article.author.role}</p>
              </div>
            </div>

            {/* Intro Lead */}
            <p className="text-base sm:text-lg font-medium text-forest-800 leading-relaxed italic border-l-4 border-forest-700 pl-4 py-1">
              {article.content.intro}
            </p>

            {/* Article Sections */}
            <div className="space-y-8 text-forest-800 leading-relaxed text-sm sm:text-base">
              {article.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  {section.heading && (
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-forest-900 pt-2">
                      {section.heading}
                    </h2>
                  )}

                  {section.body.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Highlight Callout Box (Mockup #3 "Ingat! ...") */}
                  {section.callout && (
                    <div className="bg-[#FAF4D2] border border-[#F5E8A8] rounded-3xl p-5 sm:p-6 my-6 shadow-sm flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-forest-700 shrink-0 shadow-sm">
                        <Sparkles className="w-5 h-5 text-butter-400" />
                      </div>
                      <div className="space-y-1">
                        {section.callout.title && (
                          <h4 className="font-heading font-bold text-sm text-forest-900 uppercase tracking-wider">
                            {section.callout.title}
                          </h4>
                        )}
                        <p className="text-sm font-semibold text-forest-800 leading-relaxed">
                          {section.callout.text}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Reflection Box (Mockup #3 "Coba pikirkan:") */}
            <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 sm:p-8 shadow-card space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-lg">💭</span>
                <h3 className="font-heading font-bold text-lg text-forest-900">
                  {article.content.reflection.title}
                </h3>
              </div>

              <div className="space-y-4">
                {article.content.reflection.questions.map((q, qIdx) => (
                  <div key={qIdx} className="space-y-2 bg-[#FAF8F1] p-4 rounded-2xl border border-[#E8E2D5]/70">
                    <p className="text-xs sm:text-sm font-semibold text-forest-800">
                      • {q}
                    </p>
                    <textarea
                      rows={2}
                      value={reflectionAnswers[qIdx] || ''}
                      onChange={(e) =>
                        setReflectionAnswers((prev) => ({ ...prev, [qIdx]: e.target.value }))
                      }
                      placeholder="Tuliskan refleksimu di sini (hanya tersimpan di tokomu)..."
                      className="w-full bg-white rounded-xl p-3 text-xs text-forest-900 border border-[#E8E2D5] outline-none focus:border-forest-700 transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-[11px] text-forest-700/60">
                  Catatan refleksimu bersifat privat dan aman di browsermu.
                </p>
                <button
                  onClick={handleSaveReflection}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-colors shadow-sm"
                >
                  {savedNote ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Tersimpan!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Simpan Refleksi</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Back Button */}
            <div className="pt-4">
              <Link
                to="/jelajahi"
                className="inline-flex items-center gap-2 text-xs font-semibold text-forest-700 hover:text-forest-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Jelajahi Materi</span>
              </Link>
            </div>
          </div>

          {/* Right Sidebar (Mockup #3: Bagikan & Artikel Terkait) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Share Widget */}
            <div className="bg-white rounded-3xl p-5 border border-[#E8E2D5] shadow-card space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-forest-700/70">
                Bagikan Artikel
              </h4>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare('wa')}
                  className="flex-1 py-2 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  title="Bagikan ke WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex-1 py-2 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  title="Bagikan ke X"
                >
                  <Share2 className="w-4 h-4 text-sky-600" />
                  <span>X (Twitter)</span>
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="p-2 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-800 transition-colors"
                  title="Salin tautan"
                >
                  {copied ? <Check className="w-4 h-4 text-forest-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] text-center text-forest-700 font-semibold animate-fadeIn">
                  ✓ Tautan berhasil disalin ke clipboard!
                </p>
              )}
            </div>

            {/* Related Articles Widget (Mockup #3: Artikel Terkait) */}
            <div className="bg-white rounded-3xl p-5 border border-[#E8E2D5] shadow-card space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-forest-700/70">
                  Artikel Terkait
                </h4>
                <Link
                  to="/jelajahi"
                  className="text-[11px] font-semibold text-forest-700 hover:text-forest-900"
                >
                  Lihat semua
                </Link>
              </div>

              <div className="space-y-3">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/materi/${rel.slug}`}
                    className="group flex items-center gap-3 p-2 rounded-2xl hover:bg-forest-50/60 transition-colors"
                  >
                    <img
                      src={rel.thumbnail}
                      alt={rel.title}
                      className="w-16 h-14 rounded-xl object-cover shrink-0 border border-[#E8E2D5]"
                    />
                    <div className="min-w-0">
                      <span className="text-[10px] font-semibold text-forest-700/60 uppercase">
                        {rel.category}
                      </span>
                      <h5 className="font-heading font-bold text-xs text-forest-900 group-hover:text-forest-700 line-clamp-2 leading-snug">
                        {rel.title}
                      </h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Mood Reminder Card */}
            <div className="bg-peach-100/70 rounded-3xl p-5 border border-peach-200 text-center space-y-3">
              <span className="text-2xl">🌱</span>
              <h5 className="font-heading font-bold text-sm text-forest-900">
                Lagi butuh tempat menenangkan pikiran?
              </h5>
              <p className="text-xs text-forest-700/80">
                Yuk cek perasaanmu atau coba latihan pernapasan santai.
              </p>
              <Link
                to="/mood-checkin"
                className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#E8E2D5] text-forest-800 hover:bg-forest-50 transition-colors shadow-sm"
              >
                Mood Check-in →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
