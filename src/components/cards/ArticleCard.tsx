import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Bookmark } from 'lucide-react';
import { Article } from '../../types';
import { useBookmarks } from '../../hooks/useBookmarks';

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, className = "" }) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(article.slug);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Kenali Dirimu':
        return 'bg-sage-100 text-forest-800 border-sage-300';
      case 'Kenali Emosimu':
        return 'bg-peach-100 text-forest-800 border-peach-300';
      case 'Pertemanan':
        return 'bg-sky-100 text-forest-800 border-sky-300';
      case 'Belajar':
        return 'bg-butter-100 text-forest-800 border-butter-300';
      case 'Keluarga':
        return 'bg-peach-100 text-forest-800 border-peach-300';
      case 'Dunia Digital':
        return 'bg-lavender-100 text-forest-800 border-lavender-300';
      default:
        return 'bg-forest-50 text-forest-800 border-forest-100';
    }
  };

  return (
    <div
      className={`group bg-white rounded-3xl border border-[#E8E2D5] overflow-hidden hover:border-forest-500/50 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Thumbnail Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-forest-50">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Bookmark Toggle Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleBookmark(article.slug);
            }}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow-sm ${
              bookmarked
                ? 'bg-forest-700 text-white'
                : 'bg-white/85 text-forest-700 hover:bg-white hover:text-forest-900'
            }`}
            title={bookmarked ? 'Hapus bookmark' : 'Simpan bookmark'}
            aria-label="Simpan ke favorit"
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Metadata Row */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getCategoryColor(
                article.category
              )}`}
            >
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] text-forest-700/60 font-medium">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <Link to={`/materi/${article.slug}`}>
            <h3 className="font-heading font-bold text-base text-forest-900 group-hover:text-forest-700 transition-colors line-clamp-2 leading-snug mb-2">
              {article.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-xs text-forest-700/75 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 pb-5 pt-0">
        <Link
          to={`/materi/${article.slug}`}
          className="text-xs font-semibold text-forest-700 hover:text-forest-900 inline-flex items-center gap-1 transition-colors"
        >
          <span>Baca selengkapnya</span>
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </div>
  );
};
