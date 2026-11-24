import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare } from 'lucide-react';

interface DraftMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DraftMessageModal: React.FC<DraftMessageModalProps> = ({ isOpen, onClose }) => {
  const [recipient, setRecipient] = useState<'bk' | 'orangtua' | 'teman'>('bk');
  const [topic, setTopic] = useState<'cemas' | 'pertemanan' | 'belajar' | 'lelah'>('cemas');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateDraft = () => {
    if (recipient === 'bk') {
      switch (topic) {
        case 'cemas':
          return 'Selamat siang Bapak/Ibu Guru BK, mohon maaf mengganggu waktunya. Saya ingin berkonsultasi sebentar jika Bapak/Ibu ada waktu senggang. Akhir-akhir ini saya merasa cemas dan overthinking dengan tugas sekolah. Kira-kira kapan saya bisa menemui Bapak/Ibu di ruang BK? Terima kasih banyak.';
        case 'pertemanan':
          return 'Selamat siang Bapak/Ibu Guru BK. Saya ingin bercerita dan meminta saran mengenai situasi pertemanan di kelas yang membuat saya kurang nyaman. Apakah saya boleh bertemu Bapak/Ibu saat jam istirahat atau sepulang sekolah? Terima kasih.';
        case 'belajar':
          return 'Selamat pagi Bapak/Ibu Guru BK. Saya merasa agak kesulitan berkonsentrasi belajar dan mengatur waktu belakangan ini. Bisakah saya berkonsultasi mengenai tips belajar yang cocok untuk saya? Terima kasih.';
        case 'lelah':
          return 'Selamat siang Bapak/Ibu Guru BK. Akhir-akhir ini saya merasa sangat lelah fisik dan emosi. Saya butuh tempat untuk mencurahkan isi hati dengan aman. Apakah saya boleh membuat janji konseling? Terima kasih.';
      }
    } else if (recipient === 'orangtua') {
      switch (topic) {
        case 'cemas':
          return 'Pah / Mah, nanti kalau lagi senggang aku mau ngobrol sebentar ya. Akhir-akhir ini kepalaku agak penuh dan pengen cerita santai tanpa diomelin dulu. Makasih ya Pah/Mah.';
        case 'pertemanan':
          return 'Mah / Pah, ada hal yang lagi bikin aku bingung tentang teman di sekolah. Nanti malam boleh temenin aku ngobrol sebentar ya?';
        case 'belajar':
          return 'Pah / Mah, aku merasa belakangan ini materi pelajaran di sekolah agak berat. Boleh nggak kita diskusi cari solusi bareng tanpa saling emosi? Makasih ya.';
        case 'lelah':
          return 'Pah / Mah, hari ini aku capek banget. Boleh ya malam ini aku tidur lebih cepat dan istirahat dulu?';
      }
    } else {
      switch (topic) {
        case 'cemas':
          return 'Hai! Kamu lagi sibuk nggak? Aku lagi agak overthinking nih, boleh nggak aku cerita sedikit biar hatiku agak lega?';
        case 'pertemanan':
          return 'Hai! Aku cuma mau ngomong jujur dengan santai, kemarin aku merasa agak kurang nyaman dengan candaannya. Tapi kita tetap temenan baik ya, cuma pengen saling ngerti aja.';
        case 'belajar':
          return 'Hai! Kamu udah paham materi yang tadi dijelasin guru belum? Kalau senggang, mau nggak kita belajar bareng pas jam istirahat?';
        case 'lelah':
          return 'Hai! Maaf banget hari ini aku belum bisa ikut main dulu ya, badanku lagi lelah banget dan butuh istirahat. Next time kita kumpul lagi ya!';
      }
    }
  };

  const draftText = generateDraft();

  const handleCopy = () => {
    navigator.clipboard.writeText(draftText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#FAF8F1] w-full max-w-xl rounded-4xl border border-[#E8E2D5] shadow-2xl p-6 sm:p-8 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-forest-700/60 hover:text-forest-900 hover:bg-forest-50"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-forest-700 mb-2">
          <MessageSquare className="w-5 h-5 text-forest-700" />
          <h3 className="font-heading font-bold text-lg text-forest-900">
            Draf Memulai Percakapan
          </h3>
        </div>
        <p className="text-xs text-forest-700/80 mb-6">
          Bingung harus mengetik apa saat ingin mulai curhat atau minta bantuan? Pilih tujuanmu di bawah ini:
        </p>

        {/* 1. Recipient Selection */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-2">
            Mau bicara kepada siapa?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'bk', label: 'Guru BK' },
              { id: 'orangtua', label: 'Orang Tua' },
              { id: 'teman', label: 'Teman Sebaya' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setRecipient(item.id as any)}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  recipient === item.id
                    ? 'bg-forest-700 text-white border-forest-700 shadow-sm'
                    : 'bg-white text-forest-800 border-[#E8E2D5] hover:bg-forest-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Topic Selection */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-2">
            Topik apa yang sedang kamu rasakan?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'cemas', label: 'Cemas / Stres' },
              { id: 'pertemanan', label: 'Pertemanan' },
              { id: 'belajar', label: 'Sulit Belajar' },
              { id: 'lelah', label: 'Lelah Emosi' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setTopic(item.id as any)}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  topic === item.id
                    ? 'bg-sage-300 text-forest-900 border-forest-700 font-bold'
                    : 'bg-white text-forest-800 border-[#E8E2D5] hover:bg-forest-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Output Box */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E2D5] shadow-inner mb-6 relative">
          <p className="text-xs font-medium text-forest-800 leading-relaxed italic">
            "{draftText}"
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-colors shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Tersalin! Siap dikirim</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Teks Draf</span>
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-forest-50 text-forest-800 hover:bg-forest-100"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};
