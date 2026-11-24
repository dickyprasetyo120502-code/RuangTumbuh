import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ArrowRight, Heart } from 'lucide-react';
import { SproutLogo } from '../illustrations/Illustrations';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Jelajahi', href: '/jelajahi' },
    { label: 'Video', href: '/video' },
    { label: 'Aktivitas', href: '/aktivitas' },
    { label: 'Mood Check-in', href: '/mood-checkin' },
    { label: 'Bantuan', href: '/bantuan' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F1]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D5]/70 py-3'
          : 'bg-[#FAF8F1] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-forest-100 flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-105">
              <img
                src="/logo.jpg"
                alt="Logo Ruang Tumbuh"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-forest-700">
              ruang tumbuh
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all relative ${
                    active
                      ? 'text-forest-700 font-semibold bg-forest-50/80'
                      : 'text-forest-700/80 hover:text-forest-900 hover:bg-black/5'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-forest-700 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-forest-700 hover:text-forest-900 hover:bg-forest-50 rounded-full transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Cari materi atau topik (Tekan /)"
              aria-label="Cari materi"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* CTA Button */}
            <Link
              to="/jelajahi"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-all shadow-sm hover:shadow"
            >
              <span>Mulai Jelajahi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu & Search Buttons */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={onOpenSearch}
              className="p-2 text-forest-700 hover:bg-forest-50 rounded-full transition-colors"
              aria-label="Cari"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-forest-700 hover:bg-forest-50 rounded-full transition-colors"
              aria-label="Buka navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F1] border-b border-[#E8E2D5] px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    active
                      ? 'bg-forest-50 text-forest-700 font-semibold'
                      : 'text-forest-800 hover:bg-black/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-forest-700" />}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E8E2D5]/70 flex flex-col gap-2.5">
            <Link
              to="/mood-checkin"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-peach-100 text-forest-800 border border-peach-200"
            >
              <Heart className="w-4 h-4 text-peach-400" />
              <span>Bagaimana perasaanmu hari ini?</span>
            </Link>
            <Link
              to="/jelajahi"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-forest-700 text-white shadow-sm"
            >
              <span>Mulai Jelajahi Materi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
