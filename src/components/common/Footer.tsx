import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, PhoneCall } from 'lucide-react';
import { SproutLogo } from '../illustrations/Illustrations';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F1] border-t border-[#E8E2D5] pt-14 pb-10 text-forest-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Safety & Crisis Helpline Banner */}
        <div className="bg-peach-100/70 border border-peach-200/80 rounded-2xl p-4 sm:p-5 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-peach-400 shrink-0 shadow-sm">
              <Heart className="w-5 h-5 fill-peach-400 text-peach-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-forest-800">
                Kamu tidak sendirian. Butuh teman bicara darurat?
              </h4>
              <p className="text-xs text-forest-700/80 mt-0.5">
                Hubungi Layanan SAPA 129 (Bebas Pulsa 24 Jam) atau Sejiwa di 119 ext 8.
              </p>
            </div>
          </div>
          <Link
            to="/bantuan"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-forest-200 text-forest-700 hover:bg-forest-50 transition-colors shrink-0 shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5 text-forest-700" />
            <span>Lihat Kontak Bantuan Lengkap</span>
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-forest-100 flex items-center justify-center bg-white shadow-sm">
                <img
                  src="/logo.jpg"
                  alt="Logo Ruang Tumbuh"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading font-bold text-xl text-forest-700">
                ruang tumbuh
              </span>
            </div>
            <p className="text-sm text-forest-700/80 max-w-md leading-relaxed">
              Platform edukasi digital yang ramah dan aman untuk siswa SMP usia 12–15 tahun. 
              Membantu memahami emosi, membangun pertemanan sehat, dan belajar dengan gembira.
            </p>
            <div className="inline-block bg-white/80 border border-forest-100 px-3 py-1.5 rounded-full text-xs text-forest-700/90 font-medium">
              🌱 "Kenali Dirimu. Pahami Duniamu. Bertumbuh dengan Caramu."
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="font-heading font-bold text-sm text-forest-800 mb-3 tracking-wide uppercase">
              Halaman
            </h5>
            <ul className="space-y-2 text-sm text-forest-700/80">
              <li>
                <Link to="/" className="hover:text-forest-900 transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/jelajahi" className="hover:text-forest-900 transition-colors">Jelajahi Materi</Link>
              </li>
              <li>
                <Link to="/video" className="hover:text-forest-900 transition-colors">Video Edukasi</Link>
              </li>
              <li>
                <Link to="/aktivitas" className="hover:text-forest-900 transition-colors">Aktivitas Interaktif</Link>
              </li>
              <li>
                <Link to="/mood-checkin" className="hover:text-forest-900 transition-colors">Mood Check-in</Link>
              </li>
              <li>
                <Link to="/bantuan" className="hover:text-forest-900 transition-colors">Ruang Bantuan</Link>
              </li>
            </ul>
          </div>

          {/* Privacy & Safety Pledge */}
          <div>
            <h5 className="font-heading font-bold text-sm text-forest-800 mb-3 tracking-wide uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-forest-700" />
              <span>Privasi & Keamanan</span>
            </h5>
            <p className="text-xs text-forest-700/80 leading-relaxed mb-3">
              Ruang Tumbuh tidak mengumpulkan data identitas pribadi atau informasi sensitif siswa. 
              Catatan jurnal dan bookmark tersimpan aman secara lokal di perangkatmu sendiri.
            </p>
            <div className="text-xs text-forest-700/70">
              Dirancang dengan cinta untuk remaja Indonesia.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between text-xs text-forest-700/70 gap-3">
          <p>© 2026 Ruang Tumbuh. Semua hak dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan semangat mendampingi masa remaja</span>
            <span className="text-peach-400">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
