"use client";
import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  RefreshCw,
  Award,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Apa warna sekunder yang dihasilkan dari campuran Merah dan Kuning?",
    options: ["Hijau", "Ungu", "Oranye", "Coklat"],
    correct: 2,
  },
  {
    id: 2,
    text: "Teknik melukis dengan sapuan warna tipis dan transparan disebut?",
    options: ["Plakat", "Aquarel", "Pointilis", "Spray"],
    correct: 1,
  },
  {
    id: 3,
    text: "Manakah di bawah ini yang BUKAN merupakan unsur dasar seni rupa?",
    options: ["Garis", "Warna", "Kuas", "Tekstur"],
    correct: 2,
  },
  {
    id: 4,
    text: "Warna primer dalam seni rupa pigmen adalah?",
    options: [
      "Merah, Kuning, Biru",
      "Merah, Hijau, Biru",
      "Hitam dan Putih",
      "Coklat, Emas, Perak",
    ],
    correct: 0,
  },
  {
    id: 5,
    text: "Unsur seni rupa yang terbentuk dari pertemuan ujung-ujung garis adalah?",
    options: ["Titik", "Bidang", "Tekstur", "Gelap Terang"],
    correct: 1,
  },
  {
    id: 6,
    text: "Teknik 'Glazing' pada karya seni berfungsi untuk?",
    options: [
      "Membuat cat cepat kering",
      "Menciptakan kilauan cahaya transparan",
      "Menutup lubang pada kanvas",
      "Menghilangkan warna asli",
    ],
    correct: 1,
  },
  {
    id: 7,
    text: "Warna komplementer (lawan) dari Biru dalam lingkaran warna adalah?",
    options: ["Hijau", "Ungu", "Merah", "Oranye"],
    correct: 3,
  },
  {
    id: 8,
    text: "Seni rupa yang memiliki dimensi panjang, lebar, dan tinggi disebut?",
    options: ["2 Dimensi", "3 Dimensi", "4 Dimensi", "Seni Terapan"],
    correct: 1,
  },
];

export default function Quiz({ onComplete }: { onComplete: () => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  const handleAnswer = (optionIndex: number) => {
    setSelectedOpt(optionIndex);
    const isCorrect = optionIndex === questions[currentQ].correct;

    setTimeout(() => {
      if (isCorrect) {
        setScore((prev) => prev + 100 / questions.length);
      }

      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelectedOpt(null);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedOpt(null);
  };

  if (showResult) {
    return (
      <div className="max-w-md mx-auto flex flex-col items-center justify-center min-h-[60vh] animate-fade-in text-center p-8 bg-white rounded-[3rem] shadow-2xl border border-slate-100 mt-10">
        <div className="relative mb-6">
          <Award className="w-24 h-24 text-yellow-500 animate-bounce" />
          <Sparkles className="absolute -top-2 -right-2 text-pink-500 animate-pulse" />
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-2">
          Quiz Selesai!
        </h2>
        <p className="text-slate-500 font-medium mb-8">
          Hasil evaluasi belajar kamu:
        </p>

        <div className="relative inline-block mb-10">
          <div className="text-8xl font-black text-pink-600 leading-none">
            {Math.round(score)}
          </div>
          <div className="text-sm font-bold text-slate-400 mt-2 tracking-widest uppercase">
            Skor Total
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <button
            onClick={resetQuiz}
            className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
          >
            <RefreshCw size={20} /> Ulangi
          </button>
          <button
            onClick={onComplete}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-100 active:scale-95"
          >
            <CheckCircle size={20} /> Selesai
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentQ + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto pt-10 px-4 animate-fade-in pb-20 font-sans">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          Evaluasi Teori Seni
        </div>
        <h2 className="text-3xl font-black text-slate-900 leading-tight">
          Uji <span className="text-pink-600">Pemahaman</span>
        </h2>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">
            Soal {currentQ + 1} dari {questions.length}
          </span>
          <span className="text-xs font-black text-pink-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-1 border border-slate-200">
          <div
            className="h-full bg-pink-600 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(219,39,119,0.3)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-pink-600"></div>

        <h3 className="text-xl md:text-2xl font-bold mb-10 text-slate-800 leading-snug">
          {questions[currentQ].text}
        </h3>

        <div className="space-y-4">
          {questions[currentQ].options.map((opt, idx) => {
            const isCorrect = idx === questions[currentQ].correct;
            const isSelected = selectedOpt === idx;

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={selectedOpt !== null}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex justify-between items-center group
                  ${
                    isSelected
                      ? isCorrect
                        ? "bg-green-50 border-green-500 text-green-700 shadow-lg shadow-green-100"
                        : "bg-red-50 border-red-500 text-red-700 shadow-lg shadow-red-100"
                      : "border-slate-100 hover:border-pink-200 hover:bg-pink-50/30 text-slate-600"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs transition-colors
                        ${
                          isSelected
                            ? isCorrect
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                            : "bg-slate-100 text-slate-400 group-hover:bg-pink-600 group-hover:text-white"
                        }
                    `}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-bold">{opt}</span>
                </div>

                {isSelected &&
                  (isCorrect ? (
                    <CheckCircle size={24} className="text-green-600" />
                  ) : (
                    <XCircle size={24} className="text-red-600" />
                  ))}
                {!isSelected && (
                  <ChevronRight
                    size={18}
                    className="text-slate-300 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
