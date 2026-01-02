"use client";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Zap,
  Layers,
  Box,
  Sun,
  Fingerprint,
  Maximize,
} from "lucide-react";

export default function BasicElements({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  // 0: Titik, 1: Garis, 2: Bidang, 3: Gelap Terang, 4: Tekstur, 5: Ruang
  const [step, setStep] = useState(0);

  const stepsInfo = [
    {
      title: "Titik (Point)",
      desc: "Unsur paling sederhana. Sebuah jejak tunggal yang menjadi cikal bakal seluruh imajinasi visual.",
      button: "Tarik Menjadi Garis",
      icon: Zap,
    },
    {
      title: "Garis (Line)",
      desc: "Titik yang bergerak menciptakan garis. Ia mendefinisikan batas, arah, dan emosi dalam lukisan.",
      button: "Bentuk Menjadi Bidang",
      icon: Layers,
    },
    {
      title: "Bidang & Bentuk",
      desc: "Pertemuan garis menciptakan area 2D (Bidang) yang kemudian berkembang menjadi volume 3D (Bentuk).",
      button: "Beri Cahaya (Value)",
      icon: Box,
    },
    {
      title: "Gelap Terang (Value)",
      desc: "Permainan cahaya dan bayangan. Unsur ini memberikan ilusi volume sehingga objek terlihat nyata dan 'berisi'.",
      button: "Tambahkan Tekstur",
      icon: Sun,
    },
    {
      title: "Tekstur (Texture)",
      desc: "Sifat permukaan objek. Bisa terlihat halus, kasar, atau tajam, memberikan sensasi perabaan pada mata.",
      button: "Ciptakan Ruang",
      icon: Fingerprint,
    },
    {
      title: "Ruang (Space)",
      desc: "Area di sekitar objek. Memberikan kesan kedalaman (perspektif) sehingga karya terasa luas dan bernapas.",
      button: "Ulangi Evolusi",
      icon: Maximize,
    },
  ];

  const handleNextStep = () => {
    setStep((prev) => (prev + 1) % 6);
  };

  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in pb-20 px-4">
      {/* Header Section */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black mb-3 text-slate-800 tracking-tight">
          Unsur Dasar <span className="text-art-primary">Seni Lukis</span>
        </h2>
        <div className="h-1.5 w-20 bg-art-secondary rounded-full mb-6 mx-auto md:mx-0"></div>
        <p className="text-slate-500 text-lg">
          Lihat bagaimana satu titik sederhana berevolusi menjadi objek seni
          yang kompleks.
        </p>
      </div>

      {/* Main Interactive Display */}
      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Visual Area */}
          <div className="bg-slate-50 p-12 flex flex-col items-center justify-center min-h-[450px] relative overflow-hidden">
            <div className="absolute top-6 left-8 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <Sparkles size={12} className="text-art-secondary" /> Simulasi
              Evolusi Unsur
            </div>

            {/* BOX VISUALISASI UTAMA */}
            <div
              className={`relative flex items-center justify-center transition-all duration-700 w-full h-full 
              ${step === 5 ? "scale-75" : "scale-100"}`}
            >
              <div
                className={`transition-all duration-700 ease-in-out shadow-2xl
                  ${step === 0 ? "w-4 h-4 rounded-full bg-slate-800" : ""}
                  ${
                    step === 1
                      ? "w-1 h-48 rounded-full bg-slate-800 rotate-45"
                      : ""
                  }
                  ${
                    step === 2
                      ? "w-40 h-40 rounded-3xl bg-art-primary rotate-0"
                      : ""
                  }
                  ${
                    step === 3
                      ? "w-40 h-40 rounded-3xl bg-gradient-to-br from-white via-art-primary to-slate-900 shadow-[20px_20px_40px_rgba(0,0,0,0.3)]"
                      : ""
                  }
                  ${
                    step === 4
                      ? "w-40 h-40 rounded-3xl bg-gradient-to-br from-white via-art-primary to-slate-900 shadow-[20px_20px_40px_rgba(0,0,0,0.3)] opacity-90"
                      : ""
                  }
                  ${
                    step === 5
                      ? "w-40 h-40 rounded-3xl bg-gradient-to-br from-white via-art-primary to-slate-900 shadow-[20px_20px_40px_rgba(0,0,0,0.3)]"
                      : ""
                  }
                `}
              >
                {/* Overlay Tekstur (Step 4 & 5) */}
                {(step === 4 || step === 5) && (
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay rounded-3xl bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                )}
              </div>

              {/* Elemen Ruang (Step 5) */}
              {step === 5 && (
                <div className="absolute inset-0 border-2 border-dashed border-slate-200 rounded-full animate-[ping_3s_linear_infinite] -z-10" />
              )}
            </div>
          </div>

          {/* Info Area */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-art-secondary text-[10px] font-bold uppercase mb-4 w-fit">
              Langkah {step + 1} dari 6
            </div>

            <h3 className="text-3xl font-black text-slate-800 mb-4 flex items-center gap-3">
              {stepsInfo[step].title}
            </h3>

            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              {stepsInfo[step].desc}
            </p>

            <button
              onClick={handleNextStep}
              className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg group w-full"
            >
              {stepsInfo[step].button}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Card */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm mt-16">
        <button
          onClick={onBack}
          className="order-2 md:order-1 flex items-center gap-2 text-slate-400 hover:text-slate-600 font-bold transition-colors"
        >
          <ArrowLeft size={20} /> Kembali ke Alat
        </button>

        <p className="order-1 md:order-2 text-slate-500 font-medium text-center md:text-left">
          Luar biasa! Kamu sudah paham konstruksi dasar sebuah lukisan.
        </p>

        <button
          onClick={onNext}
          className="order-3 bg-art-secondary hover:bg-pink-600 text-white px-10 py-4 rounded-2xl shadow-xl shadow-pink-100 transition-all transform hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3 font-bold w-full md:w-auto"
        >
          Masuk ke Teori Warna <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}
