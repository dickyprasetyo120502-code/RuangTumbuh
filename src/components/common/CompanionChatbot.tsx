import React, { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Heart,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: string[];
  recommendation?: {
    title: string;
    link: string;
    type: 'materi' | 'aktivitas' | 'bantuan';
  };
}

const INITIAL_GREETING: ChatMessage = {
  id: 'msg-init',
  sender: 'bot',
  text: 'Halo! Aku Teman Tumbuh 🌱 Tempat aman buat kamu cerita apa pun yang lagi kamu rasain di sekolah atau di rumah.\n\nKira-kira apa yang paling menggambarkan keadaanmu hari ini?',
  timestamp: 'Baru saja',
  options: [
    'Lagi overthinking & cemas',
    'Capek & banyak tugas sekolah',
    'Lagi sedih atau merasa sendirian',
    'Ada masalah sama teman sekelas',
    'Nggak tahu kenapa, hampa aja'
  ]
};

export const CompanionChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateBotReply = (userQuery: string): ChatMessage => {
    const query = userQuery.toLowerCase();
    const time = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    // 1. Cemas / Overthinking
    if (query.includes('cemas') || query.includes('overthinking') || query.includes('takut') || query.includes('khawatir') || query.includes('panik')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Wajar banget kalau pikiranmu lagi terasa penuh dan ramai. Otakmu lagi berusaha melindungi dirimu, cuma kadang reaksinya agak berlebihan.\n\nCoba tarik napas 4 detik, tahan 4 detik, lalu hembuskan pelan-pelan lewat mulut 6 detik. Lakukan 3 kali ya.',
        timestamp: time,
        options: ['Gimana cara menenangkan diri?', 'Mau baca tips kelola cemas', 'Cek latihan pernapasan'],
        recommendation: {
          title: 'Materi: Mengapa Kita Sering Overthinking & Solusinya',
          link: '/materi/kenapa-aku-sering-membandingkan-diriku-dengan-orang-lain',
          type: 'materi'
        }
      };
    }

    // 2. Lelah / Capek / Tugas / Stres Sekolah
    if (query.includes('capek') || query.includes('tugas') || query.includes('lelah') || query.includes('stres') || query.includes('sekolah') || query.includes('ujian')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Hari ini pasti menguras banyak energimu ya? Kamu sudah berusaha sebaik mungkin, dan itu sudah sangat berharga.\n\nIngat, istirahat itu bukan membuang waktu, melainkan mengisi ulang baterai tubuhmu agar bisa melangkah lagi besok.',
        timestamp: time,
        options: ['Bagi tugas jadi kecil', 'Tonton video kelola stres', 'Tips tidur nyenyak'],
        recommendation: {
          title: 'Video Edukasi: Cara Mengelola Stres di Sekolah',
          link: '/video?v=cara-mengelola-stres-di-sekolah',
          type: 'aktivitas'
        }
      };
    }

    // 3. Sedih / Sendirian / Hampa / Menangis
    if (query.includes('sedih') || query.includes('sendirian') || query.includes('nangis') || query.includes('kecewa') || query.includes('hampa')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Boleh banget kalau mau bersedih atau bahkan menangis hari ini. Air mata bukan tanda kelemahan, itu cara tubuh melepaskan beban yang terlalu lama dipendam.\n\nKamu berharga, dan perasaanmu ini valid untuk dirasakan.',
        timestamp: time,
        options: ['Mau tulis di jurnal harian', 'Lihat quotes penguat hati', 'Bicara ke orang terpercaya'],
        recommendation: {
          title: 'Aktivitas: My Little Journal (Tumpahkan Perasaanmu)',
          link: '/aktivitas',
          type: 'aktivitas'
        }
      };
    }

    // 4. Masalah Teman / Bullying / Bertengkar
    if (query.includes('teman') || query.includes('sahabat') || query.includes('bully') || query.includes('musuhan') || query.includes('diejek') || query.includes('dijauhi')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Dinamika pertemanan di masa SMP memang bisa sangat rumit dan kadang menyakitkan hati. Tapi ingat ya, perlakuan orang lain tidak mendefinisikan seberapa berharganya dirimu.\n\nKalau kamu merasa diperlakukan tidak adil, kamu berhak bersuara atau menjaga jarak yang sehat.',
        timestamp: time,
        options: ['Cara bicara asertif ke teman', 'Lapor perundungan / bullying', 'Cek teman yang sehat'],
        recommendation: {
          title: 'Materi: Teman yang Baik Nggak Membuatmu Kehilangan Diri Sendiri',
          link: '/materi/teman-yang-baik-nggak-membuatmu-kehilangan-diri-sendiri',
          type: 'materi'
        }
      };
    }

    // 5. Masalah Keluarga / Rumah / Orang Tua
    if (query.includes('keluarga') || query.includes('orang tua') || query.includes('ayah') || query.includes('ibu') || query.includes('mama') || query.includes('papa')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Berkomunikasi dengan orang tua terkadang butuh waktu dan momentum yang tenang. Perbedaan sudut pandang antara remaja dan orang tua adalah hal yang wajar terjadi.\n\nKamu bisa coba ungkapkan apa yang kamu rasakan tanpa nada meninggi, atau tuliskan lewat surat kecil.',
        timestamp: time,
        options: ['Cara bicara tanpa dimarahi', 'Buat draf pesan obrolan', 'Lihat kontak bantuan'],
        recommendation: {
          title: 'Materi: Cara Bicara dengan Orang Tua Tanpa Takut Dihakimi',
          link: '/materi/cara-bicara-dengan-orang-tua-tanpa-takut-dihakimi',
          type: 'materi'
        }
      };
    }

    // 6. Butuh Bantuan / Bahaya / Putus Asa
    if (query.includes('bantuan') || query.includes('darurat') || query.includes('takut') || query.includes('tolong') || query.includes('bk')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Kamu sangat berani karena mau mencari pertolongan! Ada orang-orang dewasa terpercaya seperti Guru BK di sekolahmu, atau layanan hotline resmi pemerintah SAPA 129 dan KPAI yang siap mendampingimu secara gratis dan rahasia.',
        timestamp: time,
        options: ['Hubungi SAPA 129 via WhatsApp', 'Hubungi KPAI via WhatsApp', 'Tips ke Ruang BK'],
        recommendation: {
          title: 'Ruang Bantuan: Kontak Darurat & Guru BK',
          link: '/bantuan',
          type: 'bantuan'
        }
      };
    }

    // Fallback ramah reflektif
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: `Terima kasih sudah mau cerita tentang hal itu ke aku. Mendengarkan suara hatimu sendiri adalah langkah pertama yang hebat untuk bertumbuh.\n\nIngat, kamu tidak sendirian. Semua perasaan itu wajar, dan kamu bisa menghadapinya langkah demi langkah.`,
      timestamp: time,
      options: ['Aku mau cek mood hari ini', 'Mau baca artikel edukasi', 'Cari aktivitas seru'],
      recommendation: {
        title: 'Mood Check-in: Kenali Suasana Hatimu Sekarang',
        link: '/mood-checkin',
        type: 'aktivitas'
      }
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText.trim();
    if (!query) return;

    const time = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: time
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = generateBotReply(query);
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleReset = () => {
    setMessages([INITIAL_GREETING]);
    setInputText('');
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-forest-800 text-white shadow-2xl hover:bg-forest-900 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-forest-600/30 group"
          aria-label="Buka Chat Teman Tumbuh"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-butter-300 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-forest-900 animate-pulse" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-bold leading-tight">Teman Tumbuh</p>
            <p className="text-[10px] text-butter-200/90 leading-tight">Cerita dirimu lagi kenapa</p>
          </div>
          <Sparkles className="w-4 h-4 text-butter-300 ml-0.5 sm:block hidden" />
        </button>
      )}

      {/* Chat Window Popup */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[410px] h-[580px] max-h-[85vh] bg-[#FAF8F1] rounded-3xl border border-[#E8E2D5] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-forest-800 to-forest-900 text-white px-5 py-4 flex items-center justify-between border-b border-forest-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Bot className="w-5 h-5 text-butter-300" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-bold text-sm text-white">Teman Tumbuh</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[11px] text-forest-200">Sahabat Refleksi & Teman Cerita Remaja</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Mulai percakapan baru"
                className="p-1.5 text-forest-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-forest-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Privacy Note Badge */}
          <div className="bg-butter-100/70 border-b border-butter-200/60 px-4 py-1.5 flex items-center gap-2 text-[11px] text-forest-800">
            <Heart className="w-3.5 h-3.5 fill-peach-400 text-peach-400 shrink-0" />
            <span className="truncate">Ruang aman & rahasia. Tidak ada data pribadi yang disimpan.</span>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-forest-100 border border-forest-200 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-forest-800" />
                  </div>
                )}

                <div className={`max-w-[82%] space-y-2`}>
                  <div
                    className={`rounded-2xl p-3.5 text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-forest-700 text-white rounded-tr-none font-medium'
                        : 'bg-white border border-[#E8E2D5] text-forest-900 rounded-tl-none whitespace-pre-line'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Recommendation Card if available */}
                  {msg.recommendation && (
                    <Link
                      to={msg.recommendation.link}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 rounded-2xl bg-white border border-forest-200 hover:border-forest-600 shadow-sm transition-all hover:shadow group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-forest-700 shrink-0" />
                          <span className="text-xs font-bold text-forest-900 group-hover:text-forest-700">
                            {msg.recommendation.title}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-forest-600 group-hover:translate-x-1 transition-transform shrink-0" />
                      </div>
                    </Link>
                  )}

                  {/* Quick Options Pills */}
                  {msg.options && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleSendMessage(opt)}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white border border-[#E8E2D5] text-forest-800 hover:bg-forest-50 hover:border-forest-400 transition-all text-left shadow-xs"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className={`block text-[10px] text-forest-700/50 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-forest-700 flex items-center justify-center shrink-0 mt-1 text-white">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-forest-700/60 pl-9">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-forest-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-forest-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-forest-400 animate-bounce [animation-delay:0.4s]" />
                </div>
                <span>Teman Tumbuh sedang mengetik...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#E8E2D5] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ceritakan apa yang lagi kamu rasakan..."
              className="flex-1 bg-[#FAF8F1] border border-[#E8E2D5] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm text-forest-900 placeholder:text-forest-700/40 focus:outline-none focus:ring-2 focus:ring-forest-600/30 focus:border-forest-600"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-2xl bg-forest-800 text-white hover:bg-forest-900 disabled:opacity-40 disabled:hover:bg-forest-800 transition-all shrink-0"
              title="Kirim pesan"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};