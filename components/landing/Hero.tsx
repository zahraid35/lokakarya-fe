import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-5 sm:px-8 md:px-12 pt-28 sm:pt-36 md:pt-44 pb-24 sm:pb-32 bg-[#1a1a1a] text-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[480px] md:w-[600px] h-[320px] sm:h-[480px] md:h-[600px] bg-[#e6a020] opacity-[0.06] blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* ── Content wrapper — selalu center ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1000px] mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e6a020] animate-pulse" />
          <span className="text-[11px] sm:text-xs text-white/50 tracking-widest uppercase font-medium">
            Membangun Portofolio & UMKM Lokal
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-[clamp(1.75rem,5vw,3.25rem)] font-semibold text-white leading-[1.15] mb-5 sm:mb-6 tracking-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Kolaborasi Kreatif untuk{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #e6a020 0%, #f5c842 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Tumbuh Bersama
          </span>{' '}
          UMKM Indonesia
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-white/40 max-w-[420px] mb-10 sm:mb-12 leading-relaxed">
          Platform di mana talenta bertemu dengan tantangan nyata — bantu UMKM berkembang dan bangun portofolio profesionalmu.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[360px] sm:max-w-none">
          <Link href="/register" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 text-white/80 rounded-2xl border border-white/[0.08] hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 text-sm sm:text-base font-medium">
              Gabung sebagai Kreator
            </button>
          </Link>

          <Link href="/proyek" className="block w-full sm:w-auto">
            <button
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold text-[#1a1a1a] group flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #e6a020 0%, #f0b830 100%)',
                boxShadow: '0 4px 24px rgba(230, 160, 32, 0.25)',
              }}
            >
              Cari Peluang Kolaborasi
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-2 mt-10 sm:mt-12">
          <div className="flex -space-x-2">
            {['#e6a020', '#7c6df0', '#4ab3f4'].map((color, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#1a1a1a]"
                style={{ backgroundColor: color, opacity: 0.85 }}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-white/35">
            Bergabung dengan <span className="text-white/60 font-medium">2.400+</span> kreator aktif
          </span>
        </div>

      </div>
    </section>
  );
};

export default Hero;