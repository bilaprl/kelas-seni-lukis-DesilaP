"use client";
import { useState } from "react";
import { Play, Info, HelpCircle, Brush, X, Star, Sparkles } from "lucide-react";

export default function SplashScreen({ onStart }: { onStart: () => void }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden px-4 py-10">
      {/* --- Elemen Dekoratif Latar Belakang --- */}
      <div className="absolute top-10 -left-20 w-48 h-48 md:w-72 md:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-5 -right-10 w-56 h-56 md:w-80 md:h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      
      {/* --- Konten Utama --- */}
      <div className="relative z-10 flex flex-col items-center animate-fade-in text-center w-full">
        
        {/* Container Icon Brush */}
        <div className="relative bg-white p-5 md:p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-indigo-100 mb-6 md:mb-8 transition-all duration-500 hover:rotate-12 group cursor-pointer border border-slate-50">
          <Brush className="text-indigo-600 w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110" />
          <Sparkles className="absolute -top-2 -right-10 md:-right-20 text-yellow-400 animate-bounce" size={20} />
        </div>

        {/* Heading - SOLUSI FINAL ANTI-GAIB */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 text-slate-800 tracking-tight leading-tight">
          Dasar{" "}
          <span className="relative inline-block">
            {/* KUNCI: Kita tidak pakai text-transparent sebagai class utama. 
                Kita pakai text-indigo-600 sebagai warna default (fallback).
                Gradien hanya dipasang lewat style inline yang memaksa clipping.
            */}
            <span 
              className="relative z-10 text-indigo-600 inline-block bg-gradient-to-r from-indigo-600 to-pink-500"
              style={{ 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'inherit', // Defaultnya Indigo
                backgroundClip: 'text',
                // Inline style ini akan mencoba menimpa warna jika didukung
                backgroundImage: 'linear-gradient(to right, #4f46e5, #ec4899)'
              }}
            >
              <span className="[supports(-webkit-background-clip:text)]:text-transparent">
                 Seni Lukis
              </span>
            </span>
            
            {/* SVG Coretan Pink - Diberi margin agar tidak menabrak teks */}
            <svg
              className="absolute -bottom-2 left-0 w-full pointer-events-none z-0"
              viewBox="0 0 338 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M3 9C118.957 4.47226 254.444 -3.56608 335 9"
                stroke="#ec4899"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="text-slate-500 mb-8 md:mb-12 max-w-sm md:max-w-lg text-base md:text-xl font-medium leading-relaxed px-4">
          Bebaskan kreativitasmu. Pelajari teknik profesional melalui modul
          interaktif yang dirancang khusus untuk pemula.
        </p>

        {/* Tombol Navigasi */}
        <div className="flex flex-col gap-3 w-full max-w-[280px] md:max-w-xs px-4">
          <button
            onClick={onStart}
            className="group bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 md:px-8 rounded-2xl shadow-xl shadow-indigo-200 font-bold transition-all transform active:scale-95 flex items-center justify-center gap-3 text-base md:text-lg"
          >
            <Play size={20} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
            Mulai Belajar
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setShowInfo(true)}
              className="bg-white/90 backdrop-blur-md hover:bg-white text-slate-700 py-3 md:py-3.5 px-3 rounded-2xl shadow-sm border border-slate-200 font-bold transition-all flex items-center justify-center gap-2 text-xs md:text-sm"
            >
              <Info size={16} className="text-indigo-500" /> Tentang
            </button>

            <button
              onClick={() => window.open("https://wa.me/yournumber", "_blank")}
              className="bg-white/90 backdrop-blur-md hover:bg-white text-slate-700 py-3 md:py-3.5 px-3 rounded-2xl shadow-sm border border-slate-200 font-bold transition-all flex items-center justify-center gap-2 text-xs md:text-sm"
            >
              <HelpCircle size={16} className="text-pink-500" /> Bantuan
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex items-center gap-2 text-slate-400 text-xs md:text-sm font-medium">
          <Star size={14} className="fill-slate-400" />
          <span>Membantu pengetahuan Seni Lukis Anda</span>
        </div>
      </div>

      {/* --- Modal Tentang --- */}
      {showInfo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-md bg-slate-900/40 animate-fade-in">
          <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] max-w-md w-full p-6 md:p-8 shadow-2xl relative mx-4">
            <button
              onClick={() => setShowInfo(false)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition"
            >
              <X size={20} className="text-slate-400" />
            </button>

            <div className="flex items-center gap-3 md:gap-4 mb-6 text-left">
              <div className="bg-indigo-100 p-2 md:p-3 rounded-xl md:rounded-2xl shrink-0">
                <Brush className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                Tentang Aplikasi
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed text-left">
              <p>
                <strong>ArtClass v1.0</strong> adalah platform edukasi seni yang
                menggabungkan teori tradisional dengan teknologi interaktif.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">✅ Kurikulum Standar Seni Rupa</li>
                <li className="flex items-center gap-2">✅ Studio Lukis Digital Real-time</li>
                <li className="flex items-center gap-2">✅ Evaluasi latihan berbentuk kuis</li>
              </ul>
            </div>

            <button
              onClick={() => setShowInfo(false)}
              className="w-full mt-8 bg-slate-800 text-white py-3.5 rounded-xl font-bold hover:bg-slate-900 transition active:scale-95 shadow-lg"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
