"use client";
import { useState } from "react";
import {
  PlayCircle,
  ArrowRight,
  ArrowLeft,
  Video,
  CheckCircle2,
  MonitorPlay,
} from "lucide-react";

const techniques = [
  {
    id: "aquarel",
    title: "Teknik Aquarel",
    desc: "Menggunakan sapuan warna yang tipis dan transparan. Keindahan teknik ini terletak pada tumpukan lapisan warna yang membiarkan tekstur kertas tetap terlihat.",
    tool: "Cat Air (Watercolor)",
    color: "bg-blue-500",
    videoId: "emyNo7N6TJM",
  },
  {
    id: "plakat",
    title: "Teknik Plakat",
    desc: "Kebalikan dari aquarel, teknik ini menggunakan sapuan warna yang tebal dan pekat (opaque) sehingga menutup seluruh permukaan media.",
    tool: "Akrilik / Cat Minyak",
    color: "bg-orange-500",
    videoId: "15uR0NymfS8",
  },
  {
    id: "pointilis",
    title: "Teknik Pointilis",
    desc: "Teknik unik yang membentuk objek atau gambar hanya dari susunan titik-titik kecil. Kerapatan titik menentukan gelap-terangnya objek.",
    tool: "Spidol / Kuas Kecil",
    color: "bg-emerald-500",
    videoId: "NahN8YS__W0",
  },
  {
    id: "dussel",
    title: "Teknik Dussel",
    desc: "Teknik menggambar dengan cara menggosok media (pensil/konte) sehingga menimbulkan kesan gelap-terang atau gradasi yang sangat halus.",
    tool: "Pensil / Graphite",
    color: "bg-slate-500",
    videoId: "T7qSQlja0d4",
  },
];

export default function Techniques({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [playing, setPlaying] = useState<string | null>(null);

  const activeTech = techniques.find((t) => t.id === playing);

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in pb-20 px-4">
      {/* Header Section */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black mb-3 text-slate-800 tracking-tight">
          Teknik Dasar <span className="text-art-primary">Melukis</span>
        </h2>
        <div className="h-1.5 w-20 bg-art-secondary rounded-full mb-6 mx-auto md:mx-0"></div>
        <p className="text-slate-500 text-lg">
          Pilih salah satu teknik di bawah untuk mempelajari cara aplikasinya
          melalui video.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* VIDEO PLAYER (KIRI) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-black rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video relative border-8 border-white">
            {playing ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeTech?.videoId}?autoplay=1&rel=0`}
                title={activeTech?.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                <MonitorPlay size={80} className="text-white/10 mx-auto mb-4" />
                <p className="text-slate-400 font-medium italic">
                  Pilih teknik di samping untuk memutar video
                </p>
              </div>
            )}
          </div>

          {/* Description Card */}
          {activeTech && (
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${activeTech.color}`} />
                <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">
                  {activeTech.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                "{activeTech.desc}"
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                <CheckCircle2 size={16} className="text-emerald-500" />
                Media Utama: {activeTech.tool}
              </div>
            </div>
          )}
        </div>

        {/* LIST TECHNIQUES (KANAN) */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <Video size={16} /> Modul Pembelajaran
          </h4>
          {techniques.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setPlaying(tech.id)}
              className={`w-full p-5 rounded-[1.5rem] border-2 text-left transition-all duration-300 flex items-center justify-between group
                ${
                  playing === tech.id
                    ? "border-art-primary bg-indigo-50/50 shadow-md translate-x-2"
                    : "border-slate-50 bg-white hover:border-slate-200"
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold transition-transform group-hover:scale-110 ${
                    playing === tech.id
                      ? "bg-art-primary"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {tech.title.charAt(7)}
                </div>
                <div>
                  <h4
                    className={`font-bold transition-colors ${
                      playing === tech.id
                        ? "text-art-primary"
                        : "text-slate-700"
                    }`}
                  >
                    {tech.title}
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {tech.id === "aquarel" ? "Transparan" : "Opaque"}
                  </p>
                </div>
              </div>
              <PlayCircle
                className={`transition-all ${
                  playing === tech.id
                    ? "text-art-primary scale-110"
                    : "text-slate-200 group-hover:text-slate-300"
                }`}
                size={28}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Card */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm mt-16">
        <button
          onClick={onBack}
          className="order-2 md:order-1 flex items-center gap-2 text-slate-400 hover:text-slate-600 font-bold transition-colors"
        >
          <ArrowLeft size={20} /> Kembali ke Teori Warna
        </button>

        <p className="order-1 md:order-2 text-slate-500 font-medium text-center md:text-left">
          Sudah paham tekniknya? Mari kita coba melukis di Studio.
        </p>

        <button
          onClick={onNext}
          className="order-3 bg-art-secondary hover:bg-pink-600 text-white px-10 py-4 rounded-2xl shadow-xl shadow-pink-100 transition-all transform hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3 font-bold w-full md:w-auto"
        >
          Masuk ke Studio <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}
