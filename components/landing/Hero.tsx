import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-32 md:pt-52 pb-40 bg-[#1a1a1a] text-center">
      {/* Background Glow (Biar gak flat banget) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e6a020] opacity-5 blur-[120px] pointer-events-none" />

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-white text-center leading-[1.1] max-w-[1000px] mx-auto mb-6">
        Tempat UMKM dan Kreator Berkolaborasi Membangun Proyek Digital
      </h1>

      {/* Buttons Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 mt-12">
        <button className="w-full md:w-auto px-8 py-4 bg-[#262626] text-white rounded-xl border border-white/10 hover:border-[#e6a020]/50 hover:bg-[#2d2d2d] transition-all shadow-xl font-medium">
          Daftar sebagai freelancer
        </button>
        
        <button className="w-full md:w-auto px-12 py-4 bg-[#262626] text-white rounded-xl border border-white/10 hover:border-[#e6a020]/50 hover:bg-[#2d2d2d] transition-all shadow-xl font-medium">
          Temukan Proyek
        </button>
      </div>
    </section>
  );
};

export default Hero;