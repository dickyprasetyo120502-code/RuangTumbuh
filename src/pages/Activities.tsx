import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Plus,
  Trash2,
  Copy,
  Check,
  RotateCcw,
  MessageCircle,
  Lock,
  Unlock,
  CheckCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCENARIO_QUESTIONS, COMMUNICATION_QUESTIONS, JOURNAL_PROMPTS } from '../data/activities';
import { useJournal } from '../hooks/useJournal';
import { MoodType } from '../types';

export const Activities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'situasi' | 'journal' | 'bicara'>('situasi');

  // --- TAB 1: Situasi & Pilihan State (10 Situasi, Gated Next Button on Correct) ---
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([]);

  const scenario = SCENARIO_QUESTIONS[currentScenarioIndex];
  const chosenOpt = scenario.options.find((o) => o.id === selectedOption);
  const isCorrectChoice = chosenOpt?.isRecommended ?? false;

  const handleSelectOption = (optId: 'A' | 'B' | 'C' | 'D') => {
    setSelectedOption(optId);
    const chosen = scenario.options.find((o) => o.id === optId);
    if (chosen?.isRecommended) {
      if (!completedScenarios.includes(scenario.id)) {
        setCompletedScenarios((prev) => [...prev, scenario.id]);
      }
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    }
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < SCENARIO_QUESTIONS.length - 1) {
      setCurrentScenarioIndex((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevScenario = () => {
    if (currentScenarioIndex > 0) {
      setCurrentScenarioIndex((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  // --- TAB 2: My Little Journal State ---
  const { entries, addEntry, deleteEntry } = useJournal();
  const [journalContent, setJournalContent] = useState('');
  const [journalMood, setJournalMood] = useState<MoodType>('senang');
  const [journalPrompt, setJournalPrompt] = useState(JOURNAL_PROMPTS[0]);
  const [journalSaved, setJournalSaved] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleSaveJournal = () => {
    if (!journalContent.trim()) return;
    addEntry({
      mood: journalMood,
      prompt: journalPrompt,
      content: journalContent.trim(),
    });
    setJournalContent('');
    setJournalSaved(true);
    setTimeout(() => setJournalSaved(false), 2000);
  };

  const handleCopyJournal = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // --- TAB 3: Kenali Cara Bicaramu State (10 Pertanyaan Interaktif) ---
  const [commIdx, setCommIdx] = useState(0);
  const [commSelected, setCommSelected] = useState<'A' | 'B' | 'C' | null>(null);
  const [commCorrectCount, setCommCorrectCount] = useState(0);
  const [commCompleted, setCommCompleted] = useState(false);

  const commQuestion = COMMUNICATION_QUESTIONS[commIdx];
  const commChosen = commQuestion.options.find((o) => o.id === commSelected);
  const isCommCorrect = commChosen?.isCorrect ?? false;

  const handleSelectComm = (optId: 'A' | 'B' | 'C') => {
    setCommSelected(optId);
    const chosen = commQuestion.options.find((o) => o.id === optId);
    if (chosen?.isCorrect) {
      setCommCorrectCount((prev) => prev + 1);
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
    }
  };

  const handleNextComm = () => {
    if (commIdx < COMMUNICATION_QUESTIONS.length - 1) {
      setCommIdx((prev) => prev + 1);
      setCommSelected(null);
    } else {
      setCommCompleted(true);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-900 tracking-tight">
          Aktivitas Interaktif
        </h1>
        <p className="text-sm text-forest-700/80">
          Uji keputusan sosialmu, tulis jurnal pribadi yang aman, dan latih caramu berbicara secara asertif.
        </p>
      </div>

      {/* 3 Main Activity Tabs */}
      <div className="flex justify-center">
        <div className="bg-white p-1.5 rounded-full border border-[#E8E2D5] shadow-card flex items-center gap-1 overflow-x-auto max-w-full">
          {[
            { id: 'situasi', label: 'Situasi & Pilihan (10 Skenario)' },
            { id: 'journal', label: 'My Little Journal' },
            { id: 'bicara', label: 'Kenali Cara Bicaramu (10 Soal)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-forest-700 text-white shadow-sm'
                  : 'text-forest-700/80 hover:text-forest-900 hover:bg-forest-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: SITUASI & PILIHAN (Gambar public/situasipilihan.jpg) */}
      {/* ======================================================== */}
      {activeTab === 'situasi' && (
        <div className="max-w-5xl mx-auto bg-white rounded-4xl border border-[#E8E2D5] p-6 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Area: Scenario & Options */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-700/70 bg-forest-50 px-3 py-1 rounded-full border border-forest-100">
                  Situasi {currentScenarioIndex + 1} dari {SCENARIO_QUESTIONS.length}
                </span>
                <span className="text-xs font-semibold text-emerald-700">
                  ✓ Berhasil Diselesaikan: {completedScenarios.length}/{SCENARIO_QUESTIONS.length}
                </span>
              </div>

              {/* Situation Prompt */}
              <div className="bg-[#FAF8F1] p-5 rounded-3xl border border-[#E8E2D5]">
                <h3 className="font-heading font-bold text-base sm:text-lg text-forest-900 leading-snug">
                  "{scenario.situation}"
                </h3>
                <p className="text-xs font-semibold text-forest-700/80 mt-2">
                  {scenario.question}
                </p>
              </div>

              {/* Options A, B, C, D */}
              <div className="space-y-2.5">
                {scenario.options.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  let btnColor = 'bg-white border-[#E8E2D5] text-forest-800 hover:border-forest-700';

                  if (isSelected) {
                    btnColor = opt.isRecommended
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20'
                      : 'bg-peach-100 border-peach-400 text-forest-950 font-bold';
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${btnColor}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-forest-50 border border-forest-200 text-forest-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {opt.id}
                      </span>
                      <span className="leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback Badge & Lock/Unlock Next Button */}
              {selectedOption && (
                <div
                  className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed animate-fadeIn ${
                    isCorrectChoice
                      ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                      : 'bg-peach-100 border-peach-300 text-forest-900'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {isCorrectChoice ? (
                      <>
                        <Unlock className="w-4 h-4 text-emerald-600" />
                        <span>🌟 Jawabanmu Tepat & Bijak! Kunci Terbuka untuk Lanjut.</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-peach-600" />
                        <span>💡 Belum Tepat: Yuk Coba Pahami & Pilih Sikap yang Lebih Sehat:</span>
                      </>
                    )}
                  </div>
                  <p>{chosenOpt?.feedback}</p>
                </div>
              )}

              {/* Prev / Next Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D5]">
                <button
                  onClick={handlePrevScenario}
                  disabled={currentScenarioIndex === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#E8E2D5] text-forest-800 hover:bg-forest-50 disabled:opacity-40 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Sebelumnya</span>
                </button>

                {currentScenarioIndex < SCENARIO_QUESTIONS.length - 1 ? (
                  <button
                    onClick={handleNextScenario}
                    disabled={!isCorrectChoice && !completedScenarios.includes(scenario.id)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
                  >
                    <span>Lanjut ke Situasi Berikutnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>Semua 10 Situasi Tuntas!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Area: User-saved Image from public/situasipilihan.jpg */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-card">
                <img
                  src="/situasipilihan.jpg"
                  alt="Situasi dan Pilihan"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: MY LITTLE JOURNAL (Interactive Safe Diary) */}
      {/* ======================================================== */}
      {activeTab === 'journal' && (
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Privacy Note Banner */}
          <div className="bg-[#FAF8F1] rounded-3xl p-4 sm:p-5 border border-[#E8E2D5] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔒</span>
              <p className="text-xs text-forest-800">
                <strong>100% Privat:</strong> Catatan jurnalmu hanya disimpan di memori browsermu. Tidak ada orang lain atau server yang dapat membaca isi jurnal ini.
              </p>
            </div>
          </div>

          {/* New Journal Entry Form */}
          <div className="bg-white rounded-4xl border border-[#E8E2D5] p-6 sm:p-8 shadow-card space-y-5">
            <h3 className="font-heading font-bold text-lg text-forest-900">
              Tulis Refleksi Hari Ini
            </h3>

            {/* Prompt Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-forest-800 uppercase tracking-wider">
                Inspirasi Pertanyaan Hari Ini:
              </label>
              <select
                value={journalPrompt}
                onChange={(e) => setJournalPrompt(e.target.value)}
                className="w-full text-xs sm:text-sm p-3 rounded-2xl bg-[#FAF8F1] border border-[#E8E2D5] text-forest-900 outline-none focus:border-forest-700 cursor-pointer"
              >
                {JOURNAL_PROMPTS.map((p, idx) => (
                  <option key={idx} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Mood Selector for Journal */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-forest-800 uppercase tracking-wider">
                Mood saat menulis:
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'senang', label: 'Senang 🌸' },
                  { id: 'biasa', label: 'Biasa aja ⛅' },
                  { id: 'sedih', label: 'Sedih 🌧️' },
                  { id: 'cemas', label: 'Cemas 🌪️' },
                  { id: 'lelah', label: 'Lelah 🔋' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setJournalMood(m.id as MoodType)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                      journalMood === m.id
                        ? 'bg-forest-700 text-white border-forest-700 shadow-sm'
                        : 'bg-white border-[#E8E2D5] text-forest-800 hover:bg-forest-50'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div className="space-y-1">
              <textarea
                rows={4}
                value={journalContent}
                onChange={(e) => setJournalContent(e.target.value)}
                placeholder="Tuliskan apa pun yang ada di pikiranmu secara bebas tanpa takut salah..."
                className="w-full p-4 rounded-2xl bg-[#FAF8F1] border border-[#E8E2D5] text-sm text-forest-900 outline-none focus:border-forest-700 focus:bg-white transition-colors"
              />
              <div className="flex justify-between text-[11px] text-forest-700/60 px-1">
                <span>{journalContent.length} karakter</span>
                <span>Jangan ragu mengekspresikan perasaanmu</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleSaveJournal}
                disabled={!journalContent.trim()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 disabled:opacity-50 transition-colors shadow-sm"
              >
                {journalSaved ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Tersimpan di Browser!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Simpan Jurnal</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Past Journal Entries */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-forest-900">
              Catatan Terdahulu ({entries.length})
            </h4>

            {entries.length === 0 ? (
              <p className="text-xs text-forest-700/70 italic bg-white p-6 rounded-3xl border border-[#E8E2D5] text-center">
                Belum ada catatan jurnal. Mulailah menulis untuk mengenali dirimu lebih dalam!
              </p>
            ) : (
              <div className="space-y-3">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="bg-white p-5 rounded-3xl border border-[#E8E2D5] shadow-card space-y-2 relative"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-forest-700/60">{entry.date}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-forest-50 text-forest-800">
                          {entry.mood}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleCopyJournal(entry.id, entry.content)}
                          className="p-1.5 text-forest-700/60 hover:text-forest-900 rounded-lg hover:bg-forest-50"
                          title="Salin isi catatan"
                        >
                          {copiedId === entry.id ? <Check className="w-3.5 h-3.5 text-forest-700" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          className="p-1.5 text-forest-700/60 hover:text-rose-600 rounded-lg hover:bg-rose-50"
                          title="Hapus catatan"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-forest-900">"{entry.prompt}"</p>
                    <p className="text-xs sm:text-sm text-forest-800 leading-relaxed whitespace-pre-wrap">
                      {entry.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: KENALI CARA BICARAMU (10 Soal Komunikasi Asertif) */}
      {/* ======================================================== */}
      {activeTab === 'bicara' && (
        <div className="max-w-4xl mx-auto space-y-6">
          {!commCompleted ? (
            <div className="bg-white rounded-4xl border border-[#E8E2D5] p-6 sm:p-10 shadow-card space-y-6">
              <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-4">
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5 text-forest-700" />
                  <span className="font-heading font-bold text-sm text-forest-900">
                    Soal {commIdx + 1} dari {COMMUNICATION_QUESTIONS.length}
                  </span>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-forest-50 text-forest-700">
                  Benar: {commCorrectCount}/{COMMUNICATION_QUESTIONS.length}
                </span>
              </div>

              {/* Question Statement */}
              <div className="bg-[#FAF8F1] p-5 rounded-3xl border border-[#E8E2D5] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-700/60">
                  Situasi Percakapan:
                </span>
                <p className="font-heading font-bold text-base sm:text-lg text-forest-900 leading-snug">
                  "{commQuestion.situation}"
                </p>
                <p className="text-xs text-forest-700/80 font-medium">
                  {commQuestion.question}
                </p>
              </div>

              {/* Options A, B, C */}
              <div className="space-y-2.5">
                {commQuestion.options.map((opt) => {
                  const isSelected = commSelected === opt.id;
                  let styleClass = 'bg-white border-[#E8E2D5] text-forest-800 hover:border-forest-700';

                  if (isSelected) {
                    styleClass = opt.isCorrect
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20'
                      : 'bg-peach-100 border-peach-400 text-forest-950 font-bold';
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectComm(opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${styleClass}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-forest-50 border border-forest-200 text-forest-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {opt.id}
                      </span>
                      <div className="flex-1">
                        <span className="leading-relaxed">{opt.text}</span>
                        {isSelected && (
                          <span className="block mt-1 text-[11px] font-semibold text-forest-700/80">
                            Gaya: {opt.style}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback & Proceed */}
              {commSelected && (
                <div
                  className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed animate-fadeIn ${
                    isCommCorrect
                      ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                      : 'bg-peach-100 border-peach-300 text-forest-900'
                  }`}
                >
                  <p className="font-bold mb-1">
                    {isCommCorrect ? '🌟 Tepat Sekali (Komunikasi Asertif)!' : '💡 Pembahasan:'}
                  </p>
                  <p>{commChosen?.feedback}</p>
                </div>
              )}

              {/* Gated Next Button (only active if they choose the correct asertif style) */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D5]">
                <span className="text-xs text-forest-700/70">
                  {isCommCorrect ? '✓ Jawaban benar! Silakan lanjut ke soal berikutnya.' : 'Pilih respon asertif untuk membuka soal berikutnya.'}
                </span>

                <button
                  onClick={handleNextComm}
                  disabled={!isCommCorrect}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  <span>{commIdx < COMMUNICATION_QUESTIONS.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="bg-white rounded-4xl border border-[#E8E2D5] p-6 sm:p-10 shadow-card text-center space-y-6 animate-fadeIn">
              <span className="text-5xl">🏆</span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-900">
                Hebat! Kamu Menyelesaikan 10 Soal Kenali Cara Bicaramu
              </h3>
              <p className="text-xs sm:text-sm text-forest-700/80 max-w-lg mx-auto">
                Skor Asertifmu: <strong>{commCorrectCount} / 10 Soal</strong>. Kamu telah mempelajari cara menyampaikan batasan, rasa kecewa, dan apresiasi secara elegan tanpa menyakiti orang lain!
              </p>

              <div className="p-5 rounded-3xl bg-[#FAF8F1] border border-[#E8E2D5] max-w-md mx-auto text-left space-y-2 text-xs">
                <span className="font-bold text-forest-900 uppercase">3 Kunci Utama Asertif:</span>
                <p>1. <strong>Gunakan "I-Statement":</strong> Katakan apa yang kamu rasakan tanpa langsung menyalahkan.</p>
                <p>2. <strong>Tenang & Tatap Mata:</strong> Sampaikan dengan nada suara mantap dan bersahabat.</p>
                <p>3. <strong>Berikan Solusi Alternatif:</strong> Saat menolak, tawarkan opsi lain yang nyaman bagimu.</p>
              </div>

              <button
                onClick={() => {
                  setCommIdx(0);
                  setCommSelected(null);
                  setCommCorrectCount(0);
                  setCommCompleted(false);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-colors shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Latihan</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
