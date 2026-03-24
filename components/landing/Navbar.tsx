import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-[#1a1a1a]">
      {/* Logo */}
      <div className="text-2xl font-medium text-white tracking-tight">
        LokaKarya
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
          Cari Freelancer Terbaik
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
          Peluang Kerja
        </Link>
        <div className="flex items-center text-gray-400 hover:text-white cursor-pointer group transition-colors text-sm font-medium">
          Pusat Rekrutmen
          <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>

      {/* Auth Button */}
      <Link 
        href="/login" 
        className="px-8 py-2 bg-[#333333] text-white rounded-full text-sm font-semibold hover:bg-[#444444] transition-all"
      >
        Masuk
      </Link>
    </nav>
  );
};

export default Navbar;