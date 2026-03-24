import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// 1. Konfigurasi Font Jakarta Sans
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta", 
});

export const metadata: Metadata = {
  title: "LokaKarya - Kolaborasi UMKM & Kreator",
  description: "Platform kolaborasi digital terbaik di Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full">
      <body className={`${jakarta.variable} font-sans antialiased bg-[#1a1a1a] text-white`}>
        {children}
      </body>
    </html>
  );
}