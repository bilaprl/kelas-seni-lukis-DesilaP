"use client";
import { useEffect, useRef, useState } from "react";
import { Download, Home, Award, CheckCircle, Save, LogOut } from "lucide-react";

export default function Certificate({ onRestart }: { onRestart: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [name, setName] = useState("Sobat Seni");

  // Fungsi untuk menggambar sertifikat yang lebih artistik
  const drawCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Background Clean White
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Decorative Frame (Indigo & Pink)
    ctx.lineWidth = 15;
    ctx.strokeStyle = "#6366f1"; // Indigo
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ec4899"; // Pink
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    // 3. Ornamen Sudut
    ctx.fillStyle = "#6366f1";
    ctx.fillRect(0, 0, 80, 80); // Top Left
    ctx.fillRect(canvas.width - 80, canvas.height - 80, 80, 80); // Bottom Right

    // 4. Logo / Icon placeholder di Canvas
    ctx.font = "40px serif";
    ctx.fillText("🎨", canvas.width / 2, 80);

    // 5. Content Text
    ctx.textAlign = "center";
    ctx.fillStyle = "#1e293b";

    ctx.font = "bold 42px Montserrat, sans-serif";
    ctx.fillText("SERTIFIKAT KELULUSAN", canvas.width / 2, 150);

    ctx.font = "500 20px Montserrat, sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.fillText("Diberikan dengan bangga kepada:", canvas.width / 2, 210);

    // Nama User dengan style Calligraphy/Serif
    ctx.font = "bold italic 65px Georgia, serif";
    ctx.fillStyle = "#ec4899";
    ctx.fillText(name, canvas.width / 2, 290);

    // Deskripsi Kelulusan
    ctx.font = "20px Montserrat, sans-serif";
    ctx.fillStyle = "#334155";
    ctx.fillText(
      "Telah menyelesaikan seluruh materi pembelajaran di",
      canvas.width / 2,
      360
    );

    ctx.font = "bold 24px Montserrat, sans-serif";
    ctx.fillStyle = "#6366f1";
    ctx.fillText("KELAS MELUKIS INTERAKTIF 2026", canvas.width / 2, 400);

    // Tanggal & Tanda Tangan Digital
    ctx.font = "14px Montserrat, sans-serif";
    ctx.fillStyle = "#94a3b8";
    const date = new Date().toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    ctx.fillText(`Diterbitkan pada: ${date}`, canvas.width / 2, 460);
  };

  useEffect(() => {
    drawCertificate();
  }, [name]); // Redraw otomatis saat nama berubah

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `Sertifikat_Melukis_${name.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center p-4 md:p-10 animate-fade-in pb-20 text-center">
      {/* Badge Selamat */}
      <div className="bg-indigo-50 p-4 rounded-full mb-6">
        <Award className="w-12 h-12 text-indigo-600 animate-pulse" />
      </div>

      <h2 className="text-4xl font-black text-slate-900 mb-2">
        Hore! Materi Selesai!
      </h2>
      <p className="text-slate-500 mb-10 max-w-md">
        Kamu telah menyelesaikan semua langkah pembelajaran. Silakan simpan
        sertifikat ini sebagai bukti progress belajarmu.
      </p>

      {/* Input Nama Card */}
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 mb-10 w-full max-w-md flex flex-col gap-4">
        <label className="text-left text-xs font-black uppercase tracking-widest text-slate-400">
          Tulis Nama Lengkapmu:
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            maxLength={25}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border-2 border-slate-100 rounded-2xl px-5 py-3 focus:border-indigo-500 outline-none transition-all font-bold text-slate-700"
            placeholder="Contoh: Seniman Hebat"
          />
        </div>
      </div>

      {/* Preview Sertifikat */}
      <div className="relative group shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden mb-12 border-4 border-white transition-transform hover:scale-[1.01]">
        <canvas
          ref={canvasRef}
          width={800}
          height={550}
          className="w-full h-auto max-w-2xl bg-white"
        />
        <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
          <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold text-indigo-600 shadow-xl">
            Preview Sertifikat
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
        <button
          onClick={downloadImage}
          className="flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 transition-all active:scale-95"
        >
          <Save size={22} /> Simpan Sertifikat
        </button>

        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all active:scale-95"
        >
          <LogOut size={22} /> Keluar Kelas
        </button>
      </div>

      <p className="mt-8 text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
        Progress Belajar Berhasil Diselesaikan{" "}
        <CheckCircle size={10} className="inline ml-1 text-green-500" />
      </p>
    </div>
  );
}
