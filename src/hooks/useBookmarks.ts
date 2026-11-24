import { useState, useEffect } from 'react';

const STORAGE_KEY = 'ruang_tumbuh_bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (e) {
      console.error('Failed to save bookmarks to localStorage', e);
    }
  }, [bookmarks]);

  const toggleBookmark = (slug: string) => {
    setBookmarks(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const isBookmarked = (slug: string) => bookmarks.includes(slug);

  return { bookmarks, toggleBookmark, isBookmarked };
}
