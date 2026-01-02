"use client";
import {
  BookOpen,
  History,
  ArrowRight,
  Target,
  Lightbulb,
  Sparkles,
} from "lucide-react";

export default function Introduction({ onNext }: { onNext: () => void }) {
  return (
    /* Container Utama: py-6 di mobile agar tidak terlalu jauh ke bawah */
    <div className="w-full max-w-5xl mx-auto px-4 py-6 md:py-10 pb-24 animate-fade-in">
      
      {/* Header Section */}
      <div className="mb-8 md:mb-12 text-center md:text-left">
       
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 text-slate-800 tracking-tight leading-tight">
          Memahami Dunia <span className="text-indigo-600">Seni Lukis</span>
        </h2>
        <p className="text-slate-500 mt-4 text-base md:text-lg max-w-2xl">
          Sebelum memegang kuas, mari kita pahami esensi dari keindahan yang
          akan kita ciptakan di atas kanvas.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        {/* Card 1 */}
        <div className="group bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 hover:-translate-y-2 transition-all duration-300">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
            <BookOpen className="text-white" size={24} md:size={28} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-800">
            Apa itu Seni Lukis?
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
            Seni lukis adalah bentuk ekspresi manusia yang menggunakan medium
            warna dan garis pada bidang dua dimensi. Berbeda dengan menggambar
            biasa, melukis melibatkan manipulasi tekstur dan emosi.
          </p>
          <div className="mt-6 flex items-center gap-2 text-indigo-600 font-semibold text-sm">
            <Sparkles size={16} />
            <span>Ekspresi & Imajinasi</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 hover:-translate-y-2 transition-all duration-300">
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-200">
            <History className="text-white" size={24} md:size={28} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-800">
            Jejak Sejarah
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
            Dari lukisan dinding gua prasejarah hingga era modern, seni lukis
            telah menjadi saksi bisu peradaban manusia sebagai media ekspresi
            jiwa yang tak terbatas.
          </p>
          <div className="mt-6 flex items-center gap-2 text-pink-500 font-semibold text-sm">
            <Lightbulb size={16} />
            <span>Evolusi Tanpa Batas</span>
          </div>
        </div>
      </div>

      {/* Learning Goals Section */}
      <div className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-white relative overflow-hidden mb-8 md:mb-12">
        {/* Icon Target Background (Hidden di mobile biar gak menutupi teks) */}
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none hidden md:block">
          <Target size={120} />
        </div>

        <div className="relative z-10">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
            <Target className="text-pink-500" />
            Tujuan Pembelajaran
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Kuasai Alat",
                desc: "Mengenal berbagai jenis kuas dan media lukis.",
              },
              {
                title: "Teknik Dasar",
                desc: "Mempelajari sapuan kuas profesional.",
              },
              {
                title: "Karya Pertama",
                desc: "Praktik langsung di studio digital kami.",
              },
            ].map((goal, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/10"
              >
                <div className="text-pink-500 font-black text-xl md:text-2xl mb-2">
                  0{i + 1}
                </div>
                <h4 className="font-bold mb-1 text-white text-sm md:text-base">{goal.title}</h4>
                <p className="text-slate-400 text-xs md:text-sm">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm">
        <p className="text-slate-500 font-medium text-center md:text-left text-sm md:text-base">
          Sudah siap mengenal peralatan tempurmu?
        </p>
        <button
          onClick={onNext}
          className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl shadow-xl shadow-pink-100 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 font-bold text-sm md:text-base"
        >
          Siapkan Alat & Bahan <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
