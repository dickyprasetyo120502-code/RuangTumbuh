import React, { useState } from 'react';
import {
  Heart,
  ShieldCheck,
  HeartHandshake,
  HelpCircle,
  Users,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Check,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { HELP_TOPICS, EMERGENCY_CONTACTS } from '../data/bantuanData';
import { CounselorSupportIllustration } from '../components/illustrations/Illustrations';
import { DraftMessageModal } from '../components/common/DraftMessageModal';

export const Help: React.FC = () => {
  const [draftModalOpen, setDraftModalOpen] = useState(false);
  const [expandedTopic, setExpandedTopic] = useState<string | null>('cerita-ke-guru-bk');
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const toggleTopic = (id: string) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  const handleCopyPhone = (name: string, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedContact(name);
    setTimeout(() => setCopiedContact(null), 2000);
  };

  const getTopicIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-forest-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-forest-700" />;
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5 text-forest-700" />;
      case 'Users':
        return <Users className="w-5 h-5 text-forest-700" />;
      default:
        return <Heart className="w-5 h-5 text-forest-700" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* 1. HERO SECTION (Mockup #7 Layout) */}
      <section className="bg-white rounded-4xl border border-[#E8E2D5] p-6 sm:p-10 shadow-card overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-peach-100 border border-peach-200 text-xs font-semibold text-forest-800">
              <Heart className="w-3.5 h-3.5 fill-peach-400 text-peach-400" />
              <span>Ruang Bantuan & Konseling Ramah Remaja</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-900 leading-tight">
              Kalau lagi punya masalah, kamu nggak harus menghadapinya sendirian.
            </h1>

            <p className="text-sm sm:text-base text-forest-700/85 leading-relaxed">
              Kadang kita cuma butuh seseorang yang mau mendengarkan. Kamu boleh mencari bantuan dari orang dewasa yang kamu percaya, termasuk guru BK di sekolahmu.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setDraftModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-all shadow-sm hover:shadow"
              >
                <span>Buat Draf Obrolan untuk Guru BK</span>
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-card">
              <img
                src="/ruangbantusahabat.jpg"
                alt="Ruang Bantuan Sahabat"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 INFORMATION CARDS (Mockup #7) */}
      <section className="space-y-6">
        <div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-900 tracking-tight">
            Panduan Mendapatkan Bantuan
          </h2>
          <p className="text-sm text-forest-700/80 mt-1">
            Klik kartu di bawah untuk membaca panduan lengkap dan tips praktis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {HELP_TOPICS.map((topic) => {
            const isExpanded = expandedTopic === topic.id;
            return (
              <div
                key={topic.id}
                className={`bg-white rounded-3xl border transition-all duration-300 p-6 ${
                  isExpanded
                    ? 'border-forest-700 shadow-soft-lg ring-1 ring-forest-100'
                    : 'border-[#E8E2D5] hover:border-forest-400 shadow-card'
                }`}
              >
                {/* Header */}
                <div
                  onClick={() => toggleTopic(topic.id)}
                  className="flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center shrink-0">
                      {getTopicIcon(topic.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-forest-900 leading-snug">
                        {topic.title}
                      </h3>
                      <p className="text-xs text-forest-700/70 mt-0.5">
                        {topic.tagline}
                      </p>
                    </div>
                  </div>

                  <button className="p-1 rounded-full text-forest-700/60 hover:bg-forest-50 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-5 pt-4 border-t border-[#E8E2D5]/70 space-y-4 animate-fadeIn text-xs sm:text-sm text-forest-800 leading-relaxed">
                    <p>{topic.description}</p>

                    <div className="space-y-2 bg-[#FAF8F1] p-4 rounded-2xl border border-[#E8E2D5]">
                      <h4 className="font-bold text-forest-900 text-xs uppercase tracking-wider">
                        Poin Kunci:
                      </h4>
                      <ul className="space-y-1.5">
                        {topic.points.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-forest-700 font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-peach-100/70 border border-peach-200 text-xs">
                      <span className="font-bold text-forest-900">Tips Sahabat: </span>
                      {topic.tips}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ANTI-BULLYING PROTOCOL: STOP, WALK, TALK */}
      <section className="bg-white rounded-4xl border border-[#E8E2D5] p-6 sm:p-8 shadow-card space-y-6">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-6 h-6 text-forest-700" />
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-forest-900">
            Panduan Menghadapi Perundungan (Bullying)
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-forest-700/80 leading-relaxed">
          Jika kamu atau temanmu mengalami perundungan di sekolah atau di media sosial, ingat formula 3 langkah:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-peach-100/60 border border-peach-200 space-y-2">
            <span className="text-2xl">🛑</span>
            <h4 className="font-heading font-bold text-base text-forest-900">1. STOP (Tegas)</h4>
            <p className="text-xs text-forest-800 leading-relaxed">
              Katakan dengan suara tenang dan kontak mata tegas: "Hentikan, aku nggak suka candaan itu." Jangan membalas dengan kekerasan fisik.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-sky-100/60 border border-sky-200 space-y-2">
            <span className="text-2xl">🚶</span>
            <h4 className="font-heading font-bold text-base text-forest-900">2. WALK (Menjauh)</h4>
            <p className="text-xs text-forest-800 leading-relaxed">
              Tinggalkan lokasi situasi tersebut dan bergabunglah dengan kelompok teman lain atau mendekat ke ruang guru/petugas sekolah.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-sage-100/60 border border-sage-200 space-y-2">
            <span className="text-2xl">🗣️</span>
            <h4 className="font-heading font-bold text-base text-forest-900">3. TALK (Lapor)</h4>
            <p className="text-xs text-forest-800 leading-relaxed">
              Segera laporkan kejadian kepada guru BK, wali kelas, atau orang tua. Melapor untuk perlindungan DIRI BUKAN mengadu (cepu)!
            </p>
          </div>
        </div>
      </section>

      {/* 4. EMERGENCY HOTLINE CONTACTS IN INDONESIA */}
      <section className="space-y-6">
        <div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-900 tracking-tight">
            Kontak Bantuan Resmi di Indonesia
          </h2>
          <p className="text-sm text-forest-700/80 mt-1">
            Layanan gratis dan rahasia yang siap mendengarkan kapan pun kamu membutuhkan perlindungan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EMERGENCY_CONTACTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8E2D5] shadow-card flex flex-col justify-between space-y-4 hover:border-forest-300 transition-all"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-forest-700/60 uppercase tracking-wide">
                  {item.agency}
                </span>
                <h4 className="font-heading font-bold text-base sm:text-lg text-forest-900">
                  {item.name}
                </h4>
                <p className="text-xs text-forest-700/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8E2D5] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-forest-700/70">Telepon / Hotline:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${item.phone.replace(/[^0-9]/g, '')}`}
                      className="font-mono font-bold text-xs sm:text-sm text-forest-900 hover:text-forest-700 bg-forest-50 px-2 py-0.5 rounded-lg border border-forest-100"
                    >
                      {item.phone}
                    </a>
                    <button
                      onClick={() => handleCopyPhone(item.name, item.phone)}
                      className="p-1 text-forest-700/60 hover:text-forest-900 rounded-md"
                      title="Salin nomor"
                    >
                      {copiedContact === item.name ? (
                        <Check className="w-3.5 h-3.5 text-forest-700" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {item.whatsapp !== '-' && item.waLink ? (
                  <a
                    href={item.waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Hubungi via WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between text-xs text-forest-700/60 pt-1">
                    <span>Layanan Saluran:</span>
                    <span className="font-medium">Telepon Langsung 24 Jam</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SAFETY FOOTNOTE BANNER (Mockup #7 Bottom Banner) */}
      <section className="bg-[#FCF9E8] rounded-3xl p-5 sm:p-6 border border-[#F5E8A8] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-butter-400 shrink-0">
            <Heart className="w-5 h-5 fill-peach-400 text-peach-400" />
          </div>
          <p className="text-xs sm:text-sm font-semibold text-forest-900">
            Jika kamu merasa tidak aman atau sedang menghadapi masalah serius di rumah atau sekolah, segera cari orang dewasa yang kamu percaya.
          </p>
        </div>
      </section>

      {/* Draft Conversation Modal */}
      <DraftMessageModal
        isOpen={draftModalOpen}
        onClose={() => setDraftModalOpen(false)}
      />
    </div>
  );
};
