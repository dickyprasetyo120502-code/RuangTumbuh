import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { SearchModal } from './components/common/SearchModal';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { ArticleDetail } from './pages/ArticleDetail';
import { Videos } from './pages/Videos';
import { Activities } from './pages/Activities';
import { MoodCheckin } from './pages/MoodCheckin';
import { Help } from './pages/Help';
import { CompanionChatbot } from './components/common/CompanionChatbot';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F1] text-forest-700 font-sans selection:bg-sage-300 selection:text-forest-900">
        <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jelajahi" element={<Explore />} />
            <Route path="/materi/:slug" element={<ArticleDetail />} />
            <Route path="/video" element={<Videos />} />
            <Route path="/aktivitas" element={<Activities />} />
            <Route path="/mood-checkin" element={<MoodCheckin />} />
            <Route path="/bantuan" element={<Help />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        <CompanionChatbot />

        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
