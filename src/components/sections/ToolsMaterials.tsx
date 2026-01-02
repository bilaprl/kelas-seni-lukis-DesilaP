"use client";
import { useState, useEffect } from "react";
import {
  Brush,
  Palette,
  Square,
  Droplet,
  Frame,
  X,
  ArrowRight,
  ArrowLeft,
  Layers,
  Sparkles,
  Wind,
} from "lucide-react";

interface Tool {
  id: string;
  name: string;
  category: string;
  // Mengubah deskripsi menjadi array string untuk poin-poin
  points: string[];
  icon: any;
  color: string;
}

const toolsData: Tool[] = [
  {
    id: "1",
    name: "Jenis Kuas",
    category: "Aplikator",
    points: [
      "Bulu Alami: Terbuat dari rambut hewan, sangat baik untuk menahan air (Cat Air).",
      "Bulu Sintetis: Lebih kaku dan tahan lama, cocok untuk cat yang kental (Akrilik/Minyak).",
      "Bentuk Round: Ujung lancip untuk detail garis dan sapuan tipis.",
      "Bentuk Flat: Ujung kotak untuk mengisi area luas dan membuat garis tegas.",
      "Bentuk Filbert: Ujung melengkung untuk teknik blending (pencampuran halus).",
    ],
    icon: Brush,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "2",
    name: "Palet Lukis",
    category: "Wadah",
    points: [
      "Palet Kayu: Standar untuk cat minyak karena tidak menyerap minyak dari cat.",
      "Palet Plastik/Keramik: Memiliki cekungan untuk menampung air (Cat Air).",
      "Palet Kertas: Lembaran sekali pakai yang praktis untuk cat akrilik.",
      "Pisau Palet: Digunakan selain untuk mencampur warna, juga bisa untuk teknik tekstur tebal (Impasto).",
    ],
    icon: Palette,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "3",
    name: "Media Kanvas",
    category: "Media Lukis",
    points: [
      "Bahan Katun: Lebih ekonomis dan halus, cocok untuk pemula.",
      "Bahan Linen: Sangat kuat dan tahan lama, pilihan utama profesional.",
      "Lapisan Gesso: Primer yang menutup pori kain agar cat tidak merembes.",
      "Spanram: Bingkai kayu yang menjaga kanvas tetap kencang saat dilukis.",
    ],
    icon: Square,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "4",
    name: "Cat Minyak",
    category: "Pewarna",
    points: [
      "Waktu Kering: Sangat lambat (3-7 hari), memberi waktu lama untuk revisi.",
      "Pelarut: Membutuhkan Turpentine atau Linseed Oil (tidak bisa dengan air).",
      "Karakter: Warna sangat pekat dan memberikan kesan mewah/klasik.",
      "Bau: Memiliki aroma khas kimia, butuh sirkulasi udara yang baik.",
    ],
    icon: Droplet,
    color: "bg-red-50 text-red-600",
  },
  {
    id: "5",
    name: "Cat Akrilik",
    category: "Pewarna",
    points: [
      "Waktu Kering: Sangat cepat (10-20 menit), cocok untuk pelukis ekspresif.",
      "Pelarut: Berbasis air, mudah dibersihkan dari tangan dan kuas.",
      "Fleksibilitas: Bisa digunakan di kertas, kain, kayu, hingga tembok.",
      "Daya Tahan: Setelah kering menjadi lapisan plastik yang tahan air.",
    ],
    icon: Wind,
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: "6",
    name: "Cat Air",
    category: "Pewarna",
    points: [
      "Sifat: Transparan, keindahan didapat dari tumpukan lapisan tipis.",
      "Media: Wajib menggunakan kertas tebal khusus (khawatir kertas bergelombang).",
      "Teknik Wet-on-Wet: Memasukkan warna pada area kertas yang masih basah.",
      "Portabilitas: Sangat praktis dibawa bepergian dalam bentuk cake/pan.",
    ],
    icon: Layers,
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function ToolsMaterials({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  useEffect(() => {
    if (selectedTool) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedTool]);

  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in pb-20 px-4">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black mb-3 text-slate-800 tracking-tight">
          Eksplorasi <span className="text-art-primary">Alat & Bahan</span>
        </h2>
        <div className="h-1.5 w-20 bg-art-secondary rounded-full mb-6 mx-auto md:mx-0"></div>
        <p className="text-slate-500 text-lg">
          Klik setiap kartu untuk melihat panduan penggunaan alat secara
          mendalam.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {toolsData.map((tool) => (
          <div
            key={tool.id}
            onClick={() => setSelectedTool(tool)}
            className="group bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-art-primary/30 cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div
              className={`relative z-10 w-14 h-14 md:w-16 md:h-16 ${tool.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <tool.icon size={30} />
            </div>
            <h4 className="relative z-10 text-lg font-bold text-slate-800 group-hover:text-art-primary transition-colors">
              {tool.name}
            </h4>
          </div>
        ))}
      </div>

      {/* MODAL DETAIL */}
      {selectedTool && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedTool(null)}
          />

          <div className="relative z-[110] bg-white rounded-[2.5rem] max-w-md w-full p-8 md:p-10 shadow-2xl animate-fade-in flex flex-col items-center">
            <button
              onClick={() => setSelectedTool(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:bg-slate-50 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="w-full">
              <div
                className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 ${selectedTool.color} shadow-lg shadow-current/10`}
              >
                <selectedTool.icon size={44} />
              </div>

              <div className="text-center mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold mb-2 uppercase tracking-widest">
                  {selectedTool.category}
                </div>
                <h3 className="text-2xl font-black text-slate-800">
                  {selectedTool.name}
                </h3>
              </div>

              {/* LIST POIN-POIN PENJELASAN */}
              <ul className="space-y-3">
                {selectedTool.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-art-secondary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-art-primary font-bold text-sm">
                <Sparkles size={16} />
                <span>Tips & Panduan Material</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Card (Sesuai gaya Introduce) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm mt-10">
        <button
          onClick={onBack}
          className="order-2 md:order-1 flex items-center gap-2 text-slate-400 hover:text-slate-600 font-bold transition-colors"
        >
          <ArrowLeft size={20} /> Kembali ke Pengenalan
        </button>

        <p className="order-1 md:order-2 text-slate-500 font-medium text-center md:text-left">
          Alat sudah siap? Mari pelajari Unsur Dasar Seni Lukis.
        </p>

        <button
          onClick={onNext}
          className="order-3 bg-art-secondary hover:bg-pink-600 text-white px-10 py-4 rounded-2xl shadow-xl shadow-pink-100 transition-all transform hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3 font-bold w-full md:w-auto"
        >
          Pelajari Unsur Dasar <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}
