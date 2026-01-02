"use client";
import { useRef, useState, useEffect } from "react";
import {
  Eraser,
  Trash2,
  Download,
  ArrowRight,
  ArrowLeft, // Tambahkan ini
  Paintbrush,
  Undo2,
} from "lucide-react";

// Pastikan props menerima onNext dan onBack
export default function Studio({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#6366f1");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        // Simpan state gambar jika ingin persisten saat resize
        const tempImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
        canvas.width = container.clientWidth;
        canvas.height = 500;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(tempImage, 0, 0);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const startDrawing = (e: any) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current?.getContext("2d");
    ctx?.beginPath();
  };

  const draw = (e: any) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.strokeStyle = isEraser ? "#FFFFFF" : color;
    ctx.lineWidth = brushSize;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const downloadArt = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "karya-seni-saya.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in pb-20 px-4">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-4xl font-black mb-2 text-slate-800 tracking-tight flex items-center gap-3">
          <Paintbrush className="text-art-primary" size={36} /> Studio{" "}
          <span className="text-art-secondary">Lukis</span>
        </h2>
        <p className="text-slate-500 text-lg">
          Tuangkan imajinasimu pada kanvas digital di bawah ini.
        </p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100">
        {/* Toolbar */}
        <div className="bg-slate-50/80 backdrop-blur-md p-6 border-b border-slate-200 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Warna
              </span>
              <input
                type="color"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                  setIsEraser(false);
                }}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white shadow-sm overflow-hidden"
              />
            </div>

            <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Kuas
              </span>
              <input
                type="range"
                min="1"
                max="50"
                value={brushSize}
                onChange={(e) => setBrushSize(parseInt(e.target.value))}
                className="w-32 accent-art-primary"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEraser(!isEraser)}
              className={`p-3 rounded-xl transition-all flex items-center gap-2 font-bold text-sm
                ${
                  isEraser
                    ? "bg-art-primary text-white"
                    : "bg-white text-slate-600 border border-slate-200"
                }
              `}
            >
              <Eraser size={20} />{" "}
              <span className="hidden sm:inline">Eraser</span>
            </button>
            <button
              onClick={clearCanvas}
              className="p-3 bg-white text-slate-600 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all border border-slate-200 flex items-center gap-2 font-bold text-sm"
            >
              <Trash2 size={20} />{" "}
              <span className="hidden sm:inline">Clear</span>
            </button>
            <button
              onClick={downloadArt}
              className="p-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-xl transition-all flex items-center gap-2 font-bold text-sm"
            >
              <Download size={20} />{" "}
              <span className="hidden sm:inline">Save</span>
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="relative bg-slate-200 p-4 md:p-8">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={draw}
            onMouseOut={stopDrawing}
            onTouchStart={startDrawing}
            onTouchEnd={stopDrawing}
            onTouchMove={draw}
            className="w-full cursor-crosshair touch-none bg-white shadow-inner rounded-lg"
          />
        </div>
      </div>

      {/* Navigation Card */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm mt-12">
        <p className="text-slate-500 font-medium text-center italic">
          Karya sudah selesai? Lihat galeri inspirasi karya maestro seni.
        </p>

        <button
          onClick={onBack} // Gunakan onBack di sini
          className="flex items-center gap-2 text-slate-400 hover:text-slate-600 font-bold transition-colors"
        >
          <ArrowLeft size={20} /> Kembali ke Teknik
        </button>

        <button
          onClick={onNext} // Fungsi navigasi utama
          className="bg-art-secondary hover:bg-pink-600 text-white px-10 py-4 rounded-2xl shadow-xl shadow-pink-100 transition-all transform hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3 font-bold w-full md:w-auto"
        >
          Lihat Galeri Inspirasi <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}
