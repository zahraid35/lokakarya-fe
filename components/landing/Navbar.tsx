"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// theme="dark"  → dipakai di halaman Hero (bg gelap)
// theme="light" → dipakai di halaman dengan bg terang (f5f2eb)
type NavbarProps = { theme?: 'dark' | 'light' };

const Navbar = ({ theme = 'dark' }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Cari Freelancer', href: '#' },
    { label: 'Peluang Kerja', href: '/peluang-kerja' },
  ];

  // ── Color tokens berdasarkan theme ──
  const bg = isLight
    ? scrolled ? 'rgba(245,242,235,0.88)' : 'rgba(245,242,235,0.95)'
    : scrolled ? 'rgba(20,20,20,0.82)'    : 'transparent';

  const borderColor = isLight
    ? 'rgba(26,26,26,0.08)'
    : scrolled ? 'rgba(255,255,255,0.06)' : 'transparent';

  const logoText    = isLight ? '#1a1a1a'              : 'white';
  const linkText    = isLight ? 'rgba(26,26,26,0.55)'  : 'rgba(255,255,255,0.50)';
  const linkHoverBg = isLight ? 'rgba(26,26,26,0.05)'  : 'rgba(255,255,255,0.06)';
  const linkHoverTx = isLight ? '#1a1a1a'              : 'white';
  const daftarText  = isLight ? 'rgba(26,26,26,0.45)'  : 'rgba(255,255,255,0.45)';
  const hamburgerBg = isLight ? 'rgba(26,26,26,0.06)'  : 'rgba(255,255,255,0.07)';
  const hamburgerLine = isLight ? 'rgba(26,26,26,0.6)' : 'rgba(255,255,255,0.7)';

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: bg,
          backdropFilter: (scrolled || isLight) ? 'blur(18px) saturate(1.6)' : 'none',
          WebkitBackdropFilter: (scrolled || isLight) ? 'blur(18px) saturate(1.6)' : 'none',
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="flex items-center justify-between h-16 sm:h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group select-none">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#1a1a1a] font-bold text-sm shrink-0"
                style={{ background: 'linear-gradient(135deg, #e6a020, #f5c842)' }}
              >
                L
              </span>
              <span
                className="text-[17px] font-semibold tracking-tight transition-colors"
                style={{ color: logoText }}
              >
                LokaKarya
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm rounded-xl transition-all duration-150 font-medium"
                  style={{ color: linkText }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = linkHoverTx;
                    (e.currentTarget as HTMLElement).style.background = linkHoverBg;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = linkText;
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <button
                className="flex items-center gap-1 px-4 py-2 text-sm rounded-xl transition-all duration-150 font-medium group"
                style={{ color: linkText }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = linkHoverTx;
                  (e.currentTarget as HTMLElement).style.background = linkHoverBg;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = linkText;
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                Pusat Rekrutmen
                <svg
                  className="w-3.5 h-3.5 mt-px group-hover:rotate-180 transition-transform duration-200"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/daftar"
                className="text-sm font-medium px-2 transition-colors"
                style={{ color: daftarText }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = linkHoverTx}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = daftarText}
              >
                Daftar
              </Link>
              <Link
                href="/login"
                className="px-5 py-2 text-sm font-semibold text-[#1a1a1a] rounded-xl transition-all duration-150 hover:brightness-110 active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #e6a020 0%, #f0b830 100%)',
                  boxShadow: '0 2px 16px rgba(230,160,32,0.2)',
                }}
              >
                Masuk
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl transition-colors"
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = hamburgerBg}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              {[
                isOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
                'none',
                isOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              ].map((transform, i) => (
                <span
                  key={i}
                  className="block w-5 h-[1.5px] rounded-full transition-all duration-300 origin-center"
                  style={{
                    background: hamburgerLine,
                    transform,
                    opacity: i === 1 && isOpen ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-[78vw] max-w-[300px] z-50 md:hidden flex flex-col"
        style={{
          background: 'rgba(22,22,22,0.96)',
          backdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(255,255,255,0.07)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
          <span className="text-sm text-white/40 font-medium tracking-wider uppercase">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-4 py-4 gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all duration-150 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <button className="flex items-center justify-between px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all duration-150 font-medium">
            Pusat Rekrutmen
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="px-4 pb-8 flex flex-col gap-3 border-t border-white/[0.06] pt-4">
          <Link
            href="/daftar"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-center text-sm font-medium text-white/60 hover:text-white bg-white/[0.05] hover:bg-white/[0.09] rounded-xl transition-all"
          >
            Buat Akun
          </Link>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-center text-sm font-semibold text-[#1a1a1a] rounded-xl transition-all hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, #e6a020 0%, #f0b830 100%)',
              boxShadow: '0 2px 20px rgba(230,160,32,0.22)',
            }}
          >
            Masuk
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;