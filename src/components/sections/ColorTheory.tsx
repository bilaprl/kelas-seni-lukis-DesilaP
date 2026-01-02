"use client";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  RotateCcw,
  Palette,
  Info,
  Disc,
} from "lucide-react";

export default function ColorTheory({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [mix, setMix] = useState<string[]>([]);

  const handleMix = (color: string) => {
    if (mix.length >= 2) {
      setMix([color]);
    } else {
      setMix([...mix, color]);
    }
  };

  const getResultColor = () => {
    if (mix.length < 2) return "bg-slate-100";
    const s = new Set(mix);

    // Logika Sekunder Dasar
    if (s.has("red") && s.has("yellow")) return "bg-orange-500";
    if (s.has("red") && s.has("blue")) return "bg-purple-600";
    if (s.has("blue") && s.has("yellow")) return "bg-green-500";

    // Logika Tint (Warna + Putih)
    if (s.has("white")) {
      if (s.has("red")) return "bg-red-300";
      if (s.has("blue")) return "bg-blue-300";
      if (s.has("yellow")) return "bg-yellow-200";
      if (s.has("black")) return "bg-slate-400";
      if (s.has("white")) return "bg-white";
    }

    // Logika Shade (Warna + Hitam)
    if (s.has("black")) {
      if (s.has("red")) return "bg-red-900";
      if (s.has("blue")) return "bg-blue-900";
      if (s.has("yellow")) return "bg-yellow-700";
      if (s.has("black")) return "bg-black";
    }

    if (mix[0] === mix[1]) {
      if (mix[0] === "red") return "bg-red-500";
      if (mix[0] === "yellow") return "bg-yellow-400";
      if (mix[0] === "blue") return "bg-blue-600";
    }
    return "bg-slate-800";
  };

  const getResultName = () => {
    if (mix.length < 2) return "Menunggu...";
    const s = new Set(mix);
    if (s.has("red") && s.has("yellow")) return "Oranye (Sekunder)";
    if (s.has("red") && s.has("blue")) return "Ungu (Sekunder)";
    if (s.has("blue") && s.has("yellow")) return "Hijau (Sekunder)";
    if (s.has("white") && s.has("red")) return "Pink (Tint)";
    if (s.has("white") && s.has("blue")) return "Biru Muda (Tint)";
    if (s.has("black") && s.has("red")) return "Marun (Shade)";
    if (s.has("black") && s.has("blue")) return "Navy (Shade)";
    if (s.has("black") && s.has("white")) return "Abu-abu (Neutral)";
    return "Hasil Campuran";
  };

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in pb-20 px-4">
      {/* Header Section */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black mb-3 text-slate-800 tracking-tight">
          Teori <span className="text-art-primary">Warna</span>
        </h2>
        <div className="h-1.5 w-20 bg-art-secondary rounded-full mb-6 mx-auto md:mx-0"></div>
        <p className="text-slate-500 text-lg">
          Memahami hubungan antar warna melalui Lingkaran Warna (Color Wheel).
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Kiri: Materi Lingkaran Warna */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
              <Disc className="text-art-secondary" size={24} />
              Lingkaran Warna (Color Wheel)
            </h3>

            <div className="space-y-6 mt-6">
              <section>
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" /> Warna
                  Primer
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Fondasi utama yang terdiri dari{" "}
                  <strong>Merah, Kuning, dan Biru</strong>. Warna ini murni dan
                  tidak bisa diciptakan dengan mencampur warna lain.
                </p>
              </section>

              <section>
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500" /> Warna
                  Sekunder
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Dihasilkan dari pencampuran dua warna primer (50:50).
                  <br />• Merah + Kuning = <strong>Oranye</strong>
                  <br />• Kuning + Biru = <strong>Hijau</strong>
                  <br />• Biru + Merah = <strong>Ungu</strong>
                </p>
              </section>

              <section>
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-400" /> Warna
                  Tersier
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Diciptakan dengan mencampur warna primer dan sekunder yang
                  bersebelahan. Contohnya: <em>Yellow-Green, Blue-Purple,</em>{" "}
                  atau <em>Red-Orange</em>.
                </p>
              </section>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                    <Disc className="text-art-secondary" size={24} />
                    Dimensi
                  </h3>

                  {/* Penjelasan Tint, Shade, & Neutral (DITAMBAHKAN) */}
                  <section className="space-y-4">
                    <h4 className="font-bold text-slate-800 mb-2">
                      Mengatur Nilai (Value)
                    </h4>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-300 flex-shrink-0 border border-slate-100" />
                      <div>
                        <p className="font-bold text-slate-800 text-sm">
                          Tint (Warna + Putih)
                        </p>
                        <p className="text-xs text-slate-500">
                          Menambahkan putih untuk mencerahkan warna. Hasilnya
                          adalah warna-warna pastel yang lembut dan tenang.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-900 flex-shrink-0 border border-slate-100" />
                      <div>
                        <p className="font-bold text-slate-800 text-sm">
                          Shade (Warna + Hitam)
                        </p>
                        <p className="text-xs text-slate-500">
                          Menambahkan hitam untuk menggelapkan warna. Digunakan
                          untuk menciptakan bayangan, kedalaman, dan kesan
                          dramatis.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-400 flex-shrink-0 border border-slate-100" />
                      <div>
                        <p className="font-bold text-slate-800 text-sm">
                          Neutral (Hitam, Putih, Abu)
                        </p>
                        <p className="text-xs text-slate-500">
                          Warna akromatik yang tidak memiliki rona (hue).
                          Berfungsi sebagai penyeimbang dan pengatur intensitas
                          cahaya dalam lukisan.
                        </p>
                      </div>
                    </div>
                  </section>

                  <div className="pt-4 border-t border-slate-50">
                    <div className="bg-blue-50 p-4 rounded-2xl flex gap-3 italic text-xs text-blue-700">
                      <Sparkles size={18} className="flex-shrink-0" />
                      Tips: Gunakan "Tint" untuk area yang terkena cahaya
                      langsung, dan "Shade" untuk area yang membelakangi cahaya.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-50">
                <div className="bg-amber-50 p-4 rounded-2xl flex gap-3 italic text-xs text-amber-700">
                  <Info size={18} className="flex-shrink-0" />
                  Penting: Memahami roda warna membantu pelukis menciptakan
                  kontras (komplementer) dan harmoni (analog).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kanan: Mixer Interaktif (Kode sebelumnya tetap utuh) */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center sticky top-28">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-slate-800 mb-2">
              Laboratorium Warna
            </h3>
            <p className="text-slate-400 text-sm">
              Pilih 2 warna untuk simulasi pencampuran
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "red", color: "bg-red-500", label: "Merah" },
              { id: "yellow", color: "bg-yellow-400", label: "Kuning" },
              { id: "blue", color: "bg-blue-600", label: "Biru" },
              {
                id: "white",
                color: "bg-white border-slate-200",
                label: "Putih",
              },
              { id: "black", color: "bg-black", label: "Hitam" },
            ].map((c) => (
              <div key={c.id} className="flex flex-col items-center gap-2">
                <button
                  onClick={() => handleMix(c.id)}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg transition-all active:scale-90 border-4 border-white
                    ${
                      mix.includes(c.id)
                        ? "ring-4 ring-art-primary scale-110"
                        : "hover:scale-105"
                    }
                    ${c.color}
                  `}
                />
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          <div className="relative">
            <div
              className={`w-44 h-44 rounded-full shadow-2xl transition-all duration-700 ease-in-out border-8 border-white flex flex-col items-center justify-center overflow-hidden ${getResultColor()}`}
            >
              {mix.length === 2 && (
                <Sparkles
                  className={`${
                    mix.includes("white") ? "text-slate-400" : "text-white"
                  } animate-pulse`}
                  size={32}
                />
              )}
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md border border-slate-100 whitespace-nowrap">
              <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                {mix.length === 0
                  ? "Pilih Warna"
                  : mix.length === 1
                  ? "Tambah 1 Lagi"
                  : getResultName()}
              </p>
            </div>
          </div>

          <button
            onClick={() => setMix([])}
            className="mt-12 flex items-center gap-2 text-slate-400 hover:text-art-primary font-bold text-sm transition-colors"
          >
            <RotateCcw size={16} /> Bersihkan Palet
          </button>
        </div>
      </div>

      {/* Navigation Card */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm mt-16">
        <button
          onClick={onBack}
          className="order-2 md:order-1 flex items-center gap-2 text-slate-400 hover:text-slate-600 font-bold transition-colors"
        >
          <ArrowLeft size={20} /> Kembali ke Unsur Dasar
        </button>

        <p className="order-1 md:order-2 text-slate-500 font-medium text-center md:text-left">
          Teori sudah matang? Mari lanjut ke cara mengaplikasikannya.
        </p>

        <button
          onClick={onNext}
          className="order-3 bg-art-secondary hover:bg-pink-600 text-white px-10 py-4 rounded-2xl shadow-xl shadow-pink-100 transition-all transform hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3 font-bold w-full md:w-auto"
        >
          Lanjut ke Teknik Dasar <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}
