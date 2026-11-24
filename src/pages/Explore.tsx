import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Bookmark, RotateCcw, BookOpen, Heart, Users, Sparkles, Home, Smartphone, Compass } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';
import { ArticleCard } from '../components/cards/ArticleCard';
import { useBookmarks } from '../hooks/useBookmarks';

export const Explore: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('kategori') || 'Semua';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedGrade, setSelectedGrade] = useState<string>('Semua Kelas');
  const [sortBy, setSortBy] = useState<'terbaru' | 'terlama' | 'durasi'>('terbaru');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [displayCount, setDisplayCount] = useState(12);

  const { bookmarks } = useBookmarks();

  // Sync category param with URL
  useEffect(() => {
    const cat = searchParams.get('kategori');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories = [
    { label: 'Semua', icon: Compass },
    { label: 'Kenali Dirimu', icon: Sparkles },
    { label: 'Kenali Emosimu', icon: Heart },
    { label: 'Pertemanan', icon: Users },
    { label: 'Belajar', icon: BookOpen },
    { label: 'Keluarga', icon: Home },
    { label: 'Dunia Digital', icon: Smartphone },
  ];

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'Semua') {
      searchParams.delete('kategori');
    } else {
      searchParams.set('kategori', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQuery =
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }

      // Category filter
      if (selectedCategory !== 'Semua') {
        if (article.category !== selectedCategory) return false;
      }

      // Grade filter
      if (selectedGrade !== 'Semua Kelas') {
        if (article.grade !== selectedGrade && article.grade !== 'Semua Kelas') return false;
      }

      // Bookmarks only
      if (onlyBookmarks) {
        if (!bookmarks.includes(article.slug)) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'terlama') {
        return a.id.localeCompare(b.id);
      }
      if (sortBy === 'durasi') {
        const durA = parseInt(a.readTime);
        const durB = parseInt(b.readTime);
        return durA - durB;
      }
      return b.id.localeCompare(a.id); // default terbaru
    });
  }, [searchQuery, selectedCategory, selectedGrade, sortBy, onlyBookmarks, bookmarks]);

  const displayedArticles = filteredArticles.slice(0, displayCount);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Semua');
    setSelectedGrade('Semua Kelas');
    setSortBy('terbaru');
    setOnlyBookmarks(false);
    searchParams.delete('kategori');
    setSearchParams(searchParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-900 tracking-tight">
          Jelajahi Materi Edukasi
        </h1>
        <p className="text-sm text-forest-700/80">
          Temukan artikel, panduan praktis, dan jawaban atas pertanyaan yang sering ada di benakmu.
        </p>
      </div>

      {/* Search Input Bar (Matching Mockup #2) */}
      <div className="max-w-3xl mx-auto">
        <div className="relative bg-white rounded-2xl border border-[#E8E2D5] shadow-card flex items-center px-4 py-3 focus-within:border-forest-700 focus-within:ring-2 focus-within:ring-forest-100 transition-all">
          <Search className="w-5 h-5 text-forest-700/50 mr-3 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari materi, topik, atau perasaanmu..."
            className="w-full bg-transparent text-sm sm:text-base text-forest-900 placeholder-forest-700/40 outline-none font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 text-forest-700/50 hover:text-forest-900 rounded-full"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Filter Row: Dropdowns & Bookmark Filter */}
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => handleCategorySelect(e.target.value)}
            className="text-xs font-semibold px-3 py-2 rounded-xl bg-white border border-[#E8E2D5] text-forest-800 outline-none hover:border-forest-700 transition-colors cursor-pointer"
          >
            <option value="Semua">Semua Kategori</option>
            <option value="Kenali Dirimu">Kenali Dirimu</option>
            <option value="Kenali Emosimu">Kenali Emosimu</option>
            <option value="Pertemanan">Pertemanan</option>
            <option value="Belajar">Belajar</option>
            <option value="Keluarga">Keluarga</option>
            <option value="Dunia Digital">Dunia Digital</option>
            <option value="Pengembangan Diri">Pengembangan Diri</option>
          </select>

          {/* Grade Dropdown */}
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="text-xs font-semibold px-3 py-2 rounded-xl bg-white border border-[#E8E2D5] text-forest-800 outline-none hover:border-forest-700 transition-colors cursor-pointer"
          >
            <option value="Semua Kelas">Semua Kelas</option>
            <option value="Kelas 7">Kelas 7</option>
            <option value="Kelas 8">Kelas 8</option>
            <option value="Kelas 9">Kelas 9</option>
          </select>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs font-semibold px-3 py-2 rounded-xl bg-white border border-[#E8E2D5] text-forest-800 outline-none hover:border-forest-700 transition-colors cursor-pointer"
          >
            <option value="terbaru">Terbaru</option>
            <option value="terlama">Terlama</option>
            <option value="durasi">Durasi Baca Cepat</option>
          </select>
        </div>

        {/* Favorite / Bookmarks Toggle Button */}
        <button
          onClick={() => setOnlyBookmarks(!onlyBookmarks)}
          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
            onlyBookmarks
              ? 'bg-forest-700 text-white border-forest-700 shadow-sm'
              : 'bg-white text-forest-800 border-[#E8E2D5] hover:bg-forest-50'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarks ? 'fill-white' : ''}`} />
          <span>Favoritku ({bookmarks.length})</span>
        </button>
      </div>

      {/* Category Pills with Icons (Mockup #2 category bar) */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.label;
          return (
            <button
              key={cat.label}
              onClick={() => handleCategorySelect(cat.label)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-forest-700 text-white shadow-sm scale-105'
                  : 'bg-white border border-[#E8E2D5] text-forest-800 hover:border-forest-700 hover:bg-forest-50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      {displayedArticles.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#E8E2D5] p-10 text-center max-w-lg mx-auto space-y-4 my-8">
          <div className="w-16 h-16 rounded-full bg-peach-100 flex items-center justify-center text-forest-700 mx-auto">
            <BookOpen className="w-8 h-8 text-forest-700" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-forest-900">
              Tidak ada artikel yang cocok
            </h3>
            <p className="text-xs text-forest-700/70 mt-1">
              Coba sesuaikan kata kunci pencarian atau bersihkan filter yang aktif.
            </p>
          </div>
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Semua Filter</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {/* "Muat lebih banyak" Button (Mockup #2) */}
      {displayCount < filteredArticles.length && (
        <div className="text-center pt-6">
          <button
            onClick={() => setDisplayCount((prev) => prev + 4)}
            className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#E8E2D5] text-forest-800 hover:bg-forest-50 hover:border-forest-700 transition-all shadow-sm"
          >
            Muat lebih banyak ({filteredArticles.length - displayCount} lagi)
          </button>
        </div>
      )}
    </div>
  );
};
