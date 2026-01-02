"use client";
import { useState, useEffect } from "react";

// Import Komponen Navigasi
import Navigation from "@/components/Navigation";

// Import Semua Section
import SplashScreen from "@/components/sections/SplashScreen";
import Introduction from "@/components/sections/Introduction";
import ToolsMaterials from "@/components/sections/ToolsMaterials";
import BasicElements from "@/components/sections/BasicElements";
import ColorTheory from "@/components/sections/ColorTheory";
import Techniques from "@/components/sections/Techniques";
import Studio from "@/components/sections/Studio";
import Gallery from "@/components/sections/Gallery";
import Quiz from "@/components/sections/Quiz";
import Certificate from "@/components/sections/Certificate";

// Update urutan SECTIONS sesuai instruksi baru
const SECTIONS = [
  "splash",
  "introduction", // 1. Pengenalan
  "tools", // 2. Alat Bahan
  "elements", // 3. Unsur Dasar Seni Lukis
  "colors", // 4. Teori Warna
  "techniques", // 5. Teknik Dasar
  "studio", // 6. Studio (Praktik)
  "gallery", // 7. Galeri Inspirasi
  "quiz", // 8. Evaluasi
  "certificate", // 9. Penutup/Sertifikat
];

export default function App() {
  const [currentSection, setCurrentSection] = useState("splash");
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const currentIndex = SECTIONS.indexOf(currentSection);
    const totalSteps = SECTIONS.length - 1;
    const calculatedProgress = (currentIndex / totalSteps) * 100;
    setProgress(calculatedProgress);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection, mounted]);

  const goToNext = () => {
    const currentIndex = SECTIONS.indexOf(currentSection);
    if (currentIndex < SECTIONS.length - 1) {
      setCurrentSection(SECTIONS[currentIndex + 1]);
    }
  };

  const goToSection = (id: string) => {
    setCurrentSection(id);
  };

  if (!mounted) return <div className="min-h-screen bg-slate-50" />;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-art-primary flex flex-col overflow-x-hidden">
      {/* 1. NAVIGATION BAR */}
      {currentSection !== "splash" && (
        <header className="sticky top-0 z-[60] bg-white/80 backdrop-blur-xl border-b border-slate-100">
          <Navigation activeSection={currentSection} onNavigate={goToSection} />
          {/* Progress Bar Container */}
          <div className="h-1 w-full bg-slate-100/30">
            <div
              className="h-full bg-indigo-600 transition-all duration-700 ease-in-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </header>
      )}

      {/* 2. MAIN CONTENT AREA */}
      <main
        className={`flex-1 w-full flex flex-col ${
          currentSection === "splash"
            ? ""
            : "max-w-7xl mx-auto px-4 py-6 md:py-10"
        }`}
      >
        {currentSection === "splash" && (
          <SplashScreen onStart={() => goToSection("introduction")} />
        )}

        {currentSection === "introduction" && (
          <Introduction onNext={goToNext} />
        )}

        {/* 2. Alat Bahan */}
        {currentSection === "tools" && (
          <ToolsMaterials
            onNext={goToNext}
            onBack={() => goToSection("introduction")}
          />
        )}

        {/* 3. Unsur Dasar Seni Lukis */}
        {currentSection === "elements" && (
          <BasicElements
            onNext={goToNext}
            onBack={() => goToSection("tools")}
          />
        )}

        {/* 4. Teori Warna */}
        {currentSection === "colors" && (
          <ColorTheory
            onNext={goToNext}
            onBack={() => goToSection("elements")}
          />
        )}

        {/* 5. Teknik Dasar */}
        {currentSection === "techniques" && (
          <Techniques onNext={goToNext} onBack={() => goToSection("colors")} />
        )}

        {/* 6. Studio */}
        {currentSection === "studio" && (
          <Studio onNext={goToNext} onBack={() => goToSection("techniques")} />
        )}

        {/* 7. Galeri Inspirasi */}
        {currentSection === "gallery" && (
          <Gallery onNext={goToNext} onBack={() => goToSection("studio")} />
        )}

        {/* 8. Evaluasi */}
        {currentSection === "quiz" && <Quiz onComplete={goToNext} />}

        {/* 9. Penutup/Sertifikat */}
        {currentSection === "certificate" && (
          <Certificate onRestart={() => goToSection("splash")} />
        )}
      </main>

      {/* 3. FOOTER */}
      {currentSection !== "splash" && currentSection !== "certificate" && (
        <footer className="w-full py-8 text-center text-slate-400 text-sm border-t border-slate-100 bg-white/50">
          <p>Materi Dasar Seni Lukis • 2026 Interactive Learning</p>
        </footer>
      )}
    </div>
  );
}
