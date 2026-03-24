"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)" }}
    >

      {/* ─── PANEL KIRI ─── */}
      <div className="relative w-full md:w-[38%] md:h-screen shrink-0 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #1c1c1c 0%, #0f0f0f 40%, #080808 100%)" }} />

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }} />

        {/* Orb center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(230,160,32,0.06) 0%, transparent 70%)"
        }} />

        {/* Orb top-left */}
        <div className="absolute -top-20 -left-20 w-56 h-56 md:w-80 md:h-80 rounded-full opacity-[0.12] blur-3xl" style={{
          background: "radial-gradient(circle, #f0b030 0%, transparent 70%)"
        }} />

        {/* Orb bottom-right */}
        <div className="absolute -bottom-16 -right-16 w-48 h-48 md:w-72 md:h-72 rounded-full opacity-[0.08] blur-3xl" style={{
          background: "radial-gradient(circle, #e6a020 0%, transparent 70%)"
        }} />

        {/* ── MOBILE LAYOUT ── */}
        <div className="md:hidden relative z-10 flex items-center px-4 h-[70px]">
          {/* Brand */}
          <div className="flex items-center gap-2 mr-4">
            <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-semibold">LokaKarya</span>
          </div>

          {/* Tab pill track */}
          <div className="relative flex-1 h-11 rounded-2xl flex items-center p-1" style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.09)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}>
            {[
              { name: "Daftar", path: "/register" },
              { name: "Masuk", path: "/login" },
            ].map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <div key={tab.path} className="relative flex-1 h-full flex items-center justify-center">
                  {isActive && (
                    <motion.div
                      layoutId="activeTabMobile"
                      className="absolute inset-0.5 rounded-xl"
                      transition={{ type: "spring", stiffness: 400, damping: 38 }}
                      style={{
                        background: "linear-gradient(145deg, #ffffff 0%, #fffdf5 100%)",
                        boxShadow: "0 2px 12px rgba(230,160,32,0.28), inset 0 1px 0 rgba(255,255,255,1)",
                      }}
                    />
                  )}
                  <Link
                    href={tab.path}
                    className={`relative z-10 text-sm font-bold tracking-wide transition-all duration-300 ${
                      isActive ? "text-[#e6a020]" : "text-white/40"
                    }`}
                  >
                    {tab.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:flex items-center justify-end h-full">

          {/* Brand mark */}
          <div className="absolute top-10 left-10 flex items-center gap-3">
            <span className="text-white/30 text-xs tracking-[0.25em] uppercase font-semibold">LokaKarya</span>
          </div>

          {/* Desktop tabs */}
          <div className="flex flex-col">
            {[
              { name: "Daftar", path: "/register" },
              { name: "Masuk", path: "/login" },
            ].map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <div key={tab.path} className="relative flex justify-end items-center h-[92px]">
                  {isActive && (
                    <motion.div
                      layoutId="activeTabDesktop"
                      className="absolute right-0 w-56 h-full flex flex-col justify-center"
                      transition={{ type: "spring", stiffness: 380, damping: 36 }}
                    >
                      <div className="absolute -top-[36px] right-0 h-[36px] w-[36px] bg-white">
                        <div className="h-full w-full rounded-br-[36px]" style={{ background: "#0f0f0f" }} />
                      </div>
                      <div className="w-full h-full rounded-l-[32px]" style={{
                        background: "white",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(230,160,32,0.15)",
                      }} />
                      <div className="absolute -bottom-[36px] right-0 h-[36px] w-[36px] bg-white">
                        <div className="h-full w-full rounded-tr-[36px]" style={{ background: "#0f0f0f" }} />
                      </div>
                    </motion.div>
                  )}
                  <Link
                    href={tab.path}
                    className={`relative z-20 w-56 text-center pr-12 text-lg font-bold tracking-wide transition-all duration-300 ${
                      isActive ? "text-[#e6a020]" : "text-white/35 hover:text-white/60"
                    }`}
                  >
                    {tab.name}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Desktop tagline */}
          <div className="absolute bottom-10 left-10 flex flex-col gap-2">
            <div className="w-8 h-[1px]" style={{ background: "rgba(230,160,32,0.4)" }} />
            <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-medium">Platform UMKM Digital</p>
          </div>
        </div>
      </div>

      {/* ─── PANEL KANAN ─── */}
      <div className="relative w-full md:w-[62%] flex-1 md:h-screen overflow-hidden" style={{
        background: "#ffffff"
      }}>
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }} />
        {/* Warm orb top-right */}
        <div className="absolute -top-24 -right-24 w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(230,160,32,0.07) 0%, rgba(230,160,32,0.02) 50%, transparent 70%)",
        }} />
        {/* Orb bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(230,160,32,0.04) 0%, transparent 70%)",
        }} />
        {/* Gold shimmer line — mobile only */}
        <div className="md:hidden absolute top-0 left-0 right-0 h-[2px] z-20 pointer-events-none" style={{
          background: "linear-gradient(to right, transparent 5%, rgba(230,160,32,0.5) 30%, rgba(240,192,80,0.7) 50%, rgba(230,160,32,0.5) 70%, transparent 95%)",
        }} />
        {/* Scrollable */}
        <div className="relative w-full h-full overflow-y-auto z-10">
          {children}
        </div>
      </div>

    </div>
  );
}