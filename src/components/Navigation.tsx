"use client";
import { Palette, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const MENU_ITEMS = [
  { id: "introduction", label: "Pengenalan" },
  { id: "tools", label: "Alat & Bahan" },
  { id: "elements", label: "Unsur Seni" },
  { id: "colors", label: "Warna" },
  { id: "techniques", label: "Teknik" },
  { id: "studio", label: "Studio" },
  { id: "gallery", label: "Galeri" },
  { id: "quiz", label: "Kuis" },
];

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Menutup menu otomatis jika layar di-resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => onNavigate("splash")}
          >
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
              <Palette size={20} strokeWidth={2.5} />
            </div>
            <h1 className="text-lg font-black tracking-tighter text-slate-900 uppercase">
              Kelas<span className="text-indigo-600">Melukis</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-xl text-[11px] font-black transition-all uppercase tracking-wider
                  ${
                    activeSection === item.id
                      ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200"
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Hamburger Button (Toggle) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU (Sistem Dropdown Standar) */}
      <div
        className={`
          lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden z-[100]
          ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 invisible"
          }
        `}
      >
        <div className="px-4 py-4 space-y-1">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between p-4 rounded-xl font-bold transition-all
                ${
                  activeSection === item.id
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:bg-slate-50"
                }
              `}
            >
              <span className="text-sm uppercase tracking-wide">
                {item.label}
              </span>
              <ChevronRight
                size={16}
                className={
                  activeSection === item.id ? "text-white" : "text-slate-300"
                }
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
