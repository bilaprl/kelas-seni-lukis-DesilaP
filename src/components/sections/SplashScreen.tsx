"use client";
import { useState } from "react";
import { Play, Info, HelpCircle, Brush, X, Star, Sparkles } from "lucide-react";

export default function SplashScreen({ onStart }: { onStart: () => void }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
      {/* --- Elemen Dekoratif Latar Belakang --- */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 -right-10 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/canvas-orange.png')`,
        }}
      />

      {/* --- Konten Utama --- */}
      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl shadow-indigo-100 mb-8 transform hover:rotate-12 transition-transform duration-500 cursor-help group">
          <Brush className="text-art-primary w-16 h-16 group-hover:scale-110 transition-transform" />
          <Sparkles
            className="absolute -top-2 -right-20 text-yellow-400 animate-bounce"
            size={24}
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-800 tracking-tight">
          Dasar{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-art-primary to-art-secondary">
              Seni Lukis
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 338 12"
              fill="none"
            >
              <path
                d="M3 9C118.957 4.47226 254.444 -3.56608 335 9"
                stroke="#EC4899"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="text-slate-500 mb-12 max-w-lg text-lg md:text-xl font-medium leading-relaxed px-4">
          Bebaskan kreativitasmu. Pelajari teknik profesional melalui modul
          interaktif yang dirancang khusus untuk pemula.
        </p>

        {/* --- Grid Tombol --- */}
        <div className="flex flex-col gap-4 w-full max-w-xs px-4">
          <button
            onClick={onStart}
            className="group bg-art-primary hover:bg-indigo-700 text-white py-4 px-8 rounded-2xl shadow-xl shadow-indigo-200 font-bold transition-all transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-3"
          >
            <Play
              size={22}
              fill="currentColor"
              className="group-hover:translate-x-1 transition-transform"
            />
            Mulai Belajar
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setShowInfo(true)}
              className="bg-white/80 backdrop-blur-md hover:bg-white text-slate-700 py-3.5 px-4 rounded-2xl shadow-sm border border-slate-200 font-bold transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Info size={18} className="text-indigo-500" /> Tentang
            </button>

            <button
              onClick={() => window.open("https://wa.me/yournumber", "_blank")}
              className="bg-white/80 backdrop-blur-md hover:bg-white text-slate-700 py-3.5 px-4 rounded-2xl shadow-sm border border-slate-200 font-bold transition-all flex items-center justify-center gap-2 text-sm"
            >
              <HelpCircle size={18} className="text-pink-500" /> Bantuan
            </button>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2 text-slate-400 text-sm font-medium">
          <Star size={16} className="fill-slate-400" />
          <span>Membantu pengetahuan Seni Lukis Anda</span>
        </div>
      </div>

      {/* --- Modal Tentang (Pengganti Alert) --- */}
      {showInfo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-slate-900/20 animate-fade-in">
          <div className="bg-white rounded-[2rem] max-w-md w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setShowInfo(false)}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition"
            >
              <X size={20} className="text-slate-400" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-100 p-3 rounded-2xl">
                <Brush className="text-art-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Tentang Aplikasi
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong>ArtClass v1.0</strong> adalah platform edukasi seni yang
                menggabungkan teori tradisional dengan teknologi interaktif.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">✅ Kurikulum Standar Seni Rupa</li>
                <li className="flex gap-2">
                  ✅ Studio Lukis Digital Real-time
                </li>
                <li className="flex gap-2">
                  ✅ Evaluasi latihan berbentuk kuis
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowInfo(false)}
              className="w-full mt-8 bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-900 transition"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
