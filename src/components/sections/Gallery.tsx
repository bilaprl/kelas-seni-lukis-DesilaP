"use client";
import { useState } from "react";
import {
  Search,
  ArrowRight,
  ArrowLeft,
  MousePointer2,
  User,
  Info,
  Palette,
} from "lucide-react";

const artworks = [
  // MAESTRO INDONESIA
  {
    title: "Penangkapan Pangeran Diponegoro",
    artist: "Raden Saleh",
    year: "1857",
    technique:
      "Romanticism — Penggunaan pencahayaan dramatis (chiaroscuro) dan detail anatomi yang sangat presisi untuk menangkap ketegangan emosional dalam peristiwa sejarah.",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Raden_Saleh_-_Diponegoro_arrest.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Raden_Saleh_-_Diponegoro_arrest.jpg",
  },
  {
    title: "Potret Diri (Self Portrait)",
    artist: "Affandi",
    year: "1975",
    technique:
      "Ekspresionisme (Teknik Plototan) — Teknik unik di mana cat minyak dikeluarkan langsung dari tube ke kanvas lalu disapu menggunakan tangan/jari, menciptakan tekstur cat yang sangat tebal, kasar, dan ekspresif.",
    url: "https://www.artnet.com/WebServices/images/ll2095353llgvkkR3CfDrCWBHBAD/affandi-potret-diri-(self-portrait).jpg",
    full: "https://www.artnet.com/WebServices/images/ll2095353llgvkkR3CfDrCWBHBAD/affandi-potret-diri-(self-portrait).jpg",
  },
  // Contoh penerapan di array artworks
  {
    title: "Kakak dan Adik",
    artist: "Basoeki Abdullah",
    year: "1971",
    technique:
      "Realistik-Naturalis: Pencitraan objek yang halus dengan gradasi warna rapi.",
    url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBK8pFawPyJhjywTlYoAPHh1oYxlIi-sbshmIJuEtWhbhoHZV7sz0taDhdgQAqXPDQNpXyxBDx7xANScn3ZxaDcN4wuOKUmS9LAoANbuyFJHa2cwGKuWs5ZM5-7helCLE4H5RL94u7aDI/w1200-h630-p-k-no-nu/Basuki+Abdullah%252C+Kakak+Adik%252C+1971.jpg",
    full: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBK8pFawPyJhjywTlYoAPHh1oYxlIi-sbshmIJuEtWhbhoHZV7sz0taDhdgQAqXPDQNpXyxBDx7xANScn3ZxaDcN4wuOKUmS9LAoANbuyFJHa2cwGKuWs5ZM5-7helCLE4H5RL94u7aDI/w1200-h630-p-k-no-nu/Basuki+Abdullah%252C+Kakak+Adik%252C+1971.jpg",
  },
  // MAESTRO DUNIA
  {
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    technique:
      "Impasto: Penggunaan cat yang sangat tebal untuk menciptakan tekstur timbul yang mengekspresikan emosi dan gerakan langit.",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "1503",
    technique:
      "Sfumato: Teknik menciptakan transisi warna yang sangat halus untuk memberikan kesan kedalaman dan realisme pada wajah.",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
  },
  {
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    year: "1831",
    technique:
      "Ukiyo-e: Teknik cetak blok kayu tradisional yang menggunakan garis tegas dan perspektif dramatis untuk menggambarkan alam.",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/800px-Great_Wave_off_Kanagawa2.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Great_Wave_off_Kanagawa2.jpg",
  },
];

export default function Gallery({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [zoomImg, setZoomImg] = useState<{
    idx: number;
    x: number;
    y: number;
  } | null>(null);

  const handleInteraction = (e: any, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setZoomImg({ idx, x, y });
  };

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in pb-20 px-4">
      {/* Header Section */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black mb-3 text-slate-800 tracking-tight">
          Galeri<span className="text-art-primary"> Mahakarya</span>
        </h2>
        <div className="h-1.5 w-20 bg-art-secondary rounded-full mb-6 mx-auto md:mx-0"></div>
        <p className="text-slate-500 text-lg">
          Eksplorasi detail teknik lukis dari maestro dunia melalui fitur
          pembesar interaktif.
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
          <MousePointer2 size={14} className="text-pink-500" />
          Sentuh atau arahkan kursor pada gambar untuk melihat detail
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {artworks.map((art, idx) => (
          <div
            key={idx}
            className="break-inside-avoid group bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div
              className="relative overflow-hidden bg-slate-200 cursor-crosshair aspect-[4/5]"
              onMouseMove={(e) => handleInteraction(e, idx)}
              onTouchMove={(e) => handleInteraction(e, idx)}
              onMouseLeave={() => setZoomImg(null)}
              onTouchEnd={() => setZoomImg(null)}
            >
              <img
                src={art.url}
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {zoomImg?.idx === idx && (
                <div
                  className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${art.full})`,
                    backgroundPosition: `${zoomImg.x}% ${zoomImg.y}%`,
                    backgroundSize: "400%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 border-[12px] border-white/10 backdrop-contrast-125" />
                </div>
              )}

              <div className="absolute bottom-4 right-4 z-20 p-3 bg-black/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all">
                <Search size={20} />
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-black text-slate-900 text-2xl tracking-tight">
                    {art.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <User size={14} className="text-pink-500" />
                    <p className="text-sm text-slate-600 font-bold">
                      {art.artist}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-black bg-slate-100 text-slate-400 px-3 py-1 rounded-lg">
                  {art.year}
                </span>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-pink-50/30 p-5 rounded-2xl border border-slate-100 group-hover:border-pink-200 transition-colors">
                <div className="flex gap-3">
                  <Info size={18} className="shrink-0 text-pink-500 mt-1" />
                  <div className="text-[13px] text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block mb-1">
                      Analisis Teknik:
                    </strong>
                    {art.technique}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Card */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm mt-12">
        <p className="text-slate-500 font-medium text-center italic">
          Sudah terinspirasi? pengetahuanmu sudah bertambah! lanjutkan tes
          pengetahuan Seni Lukis.
        </p>

        <button
          onClick={onBack} // Gunakan onBack di sini
          className="flex items-center gap-2 text-slate-400 hover:text-slate-600 font-bold transition-colors"
        >
          <ArrowLeft size={20} /> Kembali ke Studio
        </button>

        <button
          onClick={onNext} // Fungsi navigasi utama
          className="bg-art-secondary hover:bg-pink-600 text-white px-10 py-4 rounded-2xl shadow-xl shadow-pink-100 transition-all transform hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3 font-bold w-full md:w-auto"
        >
          Mulai Kuis! <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}
