import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aplikasi Seni Kelas Lukis - DesilaP",
  description: "Pelajari dasar seni lukis secara interaktif.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${montserrat.className} bg-art-bg text-slate-800 antialiased h-screen flex flex-col overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
