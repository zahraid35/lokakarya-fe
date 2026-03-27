"use client";

import React, { useState } from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Search, ArrowUpRight } from 'lucide-react';

const CATEGORIES_DATA = [
  {
    id: "populer",
    label: "Paling Populer",
    eyebrow: "Pilihan Terbaik Platform Kami",
    bentoCards: [
      { title: "Web Development", count: "340+", accent: "#e6a020", span: "md:col-span-2 md:row-span-2" },
      { title: "Application Development", count: "180+", accent: "#7c6df0", span: "" },
      { title: "UI/UX Designer", count: "220+", accent: "#4ab3f4", span: "" },
      { title: "Fotografi & Videografi", count: "160+", accent: "#f06090", span: "" },
      { title: "Jasa Ketik / Penulis", count: "95+", accent: "#4ab3f4", span: "" },
    ],
    subSections: [
      { id: 'web-pop', title: 'Pengembang Website & Aplikasi', items: 8 },
      { id: 'design-pop', title: 'Desainer Grafis', items: 8 },
      { id: 'marketing-pop', title: 'Iklan & Pemasaran', items: 8 },
    ]
  },
  {
    id: "web",
    label: "Web & Pemrograman",
    eyebrow: "Expertise di Bidang IT & Software",
    bentoCards: [
      { title: "Web Development", count: "340+", accent: "#e6a020", span: "md:col-span-2 md:row-span-2" },
      { title: "Application Development", count: "180+", accent: "#7c6df0", span: "" },
      { title: "Frontend Developer", count: "140+", accent: "#4ab3f4", span: "" },
      { title: "Backend Developer", count: "120+", accent: "#f06090", span: "" },
      { title: "Project Manager", count: "80+", accent: "#e6a020", span: "" },
    ],
    subSections: [{ id: 'web-detail', title: 'Layanan Web & Pemrograman Unggulan', items: 12 }]
  },
  {
    id: "design",
    label: "Grafis Desain",
    eyebrow: "Kreativitas Tanpa Batas untuk Brand Anda",
    bentoCards: [
      { title: "Logo & Branding", count: "210+", accent: "#e6a020", span: "md:col-span-2 md:row-span-2" },
      { title: "Ilustrasi Digital", count: "95+", accent: "#7c6df0", span: "" },
      { title: "Desain Kemasan", count: "70+", accent: "#4ab3f4", span: "" },
      { title: "Feed Social Media", count: "150+", accent: "#f06090", span: "" },
      { title: "UI Design Mobile", count: "110+", accent: "#4ab3f4", span: "" },
    ],
    subSections: [{ id: 'design-detail', title: 'Desainer Grafis Profesional', items: 8 }]
  },
  {
    id: "marketing",
    label: "Iklan & Pemasaran",
    eyebrow: "Jangkau Audiens Lebih Luas & Tepat Sasaran",
    bentoCards: [
      { title: "Social Media Ads", count: "190+", accent: "#e6a020", span: "md:col-span-2 md:row-span-2" },
      { title: "SEO Specialist", count: "85+", accent: "#7c6df0", span: "" },
      { title: "Content Planner", count: "130+", accent: "#4ab3f4", span: "" },
      { title: "Copywriting", count: "110+", accent: "#f06090", span: "" },
      { title: "Market Research", count: "60+", accent: "#e6a020", span: "" },
    ],
    subSections: [{ id: 'mkt-detail', title: 'Spesialis Iklan & Pemasaran', items: 8 }]
  },
  {
    id: "visual",
    label: "Visual & Audio",
    eyebrow: "Produksi Konten Audio Visual Berkualitas",
    bentoCards: [
      { title: "Video Editor", count: "175+", accent: "#e6a020", span: "md:col-span-2 md:row-span-2" },
      { title: "Motion Graphic", count: "90+", accent: "#7c6df0", span: "" },
      { title: "Voice Over", count: "65+", accent: "#4ab3f4", span: "" },
      { title: "Music Producer", count: "50+", accent: "#f06090", span: "" },
      { title: "Colorist", count: "40+", accent: "#4ab3f4", span: "" },
    ],
    subSections: [{ id: 'vis-detail', title: 'Produksi Visual & Audio', items: 4 }]
  },
  {
    id: "writing",
    label: "Penerjemah / Penulis",
    eyebrow: "Sampaikan Pesan Lewat Tulisan yang Kuat",
    bentoCards: [
      { title: "Artikel & Blog", count: "120+", accent: "#e6a020", span: "md:col-span-2 md:row-span-2" },
      { title: "Penerjemah Mandarin", count: "45+", accent: "#7c6df0", span: "" },
      { title: "Creative Writing", count: "80+", accent: "#4ab3f4", span: "" },
      { title: "Proofreading", count: "60+", accent: "#f06090", span: "" },
      { title: "Ghostwriter", count: "35+", accent: "#e6a020", span: "" },
    ],
    subSections: [{ id: 'wri-detail', title: 'Jasa Penulis & Penerjemah', items: 4 }]
  }
];

export default function TemukanProyekPage() {
  const [activeTab, setActiveTab] = useState("populer");
  const activeData = CATEGORIES_DATA.find(cat => cat.id === activeTab) || CATEGORIES_DATA[0];

  return (
    <div className="min-h-screen bg-[#f5f2eb] flex flex-col">
      <Navbar />

      <main className="flex-grow px-5 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">

            {/* Left: Title */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-[1.5px] bg-[#e6a020]" />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e6a020]">
                  {activeData.eyebrow}
                </span>
              </div>
              <h1 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-[#1a1a1a] tracking-tight leading-snug">
                Temukan Kebutuhan{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #e6a020 0%, #c98a18 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Layanan Anda
                </span>
              </h1>
            </div>

            {/* Right: Search */}
            <div className="relative w-full md:w-[340px] lg:w-[400px] group shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30 group-focus-within:text-[#e6a020] transition-colors" />
              <input
                type="text"
                placeholder="Cari layanan, misal: desain logo…"
                className="w-full pl-11 pr-5 py-3.5 bg-white rounded-2xl border border-[#1a1a1a]/08 shadow-sm focus:ring-2 focus:ring-[#e6a020]/20 focus:border-[#e6a020]/30 outline-none transition-all text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35"
              />
            </div>
          </div>

          {/* ── Tabs ── */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10 sm:mb-12">
            {CATEGORIES_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all duration-150 border"
                style={
                  activeTab === cat.id
                    ? {
                        background: 'linear-gradient(135deg, #e6a020, #c98a18)',
                        color: '#fff',
                        borderColor: 'transparent',
                        boxShadow: '0 2px 12px rgba(230,160,32,0.25)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.6)',
                        color: 'rgba(26,26,26,0.5)',
                        borderColor: 'rgba(26,26,26,0.08)',
                      }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* ── Bento Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:auto-rows-[168px] mb-20 sm:mb-28">
            {activeData.bentoCards.map((card, idx) => (
              <a
                key={idx}
                href="#"
                className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 ${card.span}`}
                style={{ background: '#222120' }}
              >
                {/* Glow */}
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-full blur-[60px] opacity-20 pointer-events-none"
                  style={{ background: card.accent }}
                />

                {/* Top: count badge */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-[11px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: `${card.accent}20`,
                      color: card.accent,
                      border: `1px solid ${card.accent}35`,
                    }}
                  >
                    {card.count} proyek
                  </span>
                </div>

                {/* Bottom: title + arrow */}
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-white/35 mt-1">Freelancer</p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: card.accent }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#1a1a1a]" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  style={{ background: card.accent }}
                />
              </a>
            ))}
          </div>

          {/* ── Sub-sections ── */}
          <div className="space-y-20 sm:space-y-28">
            {activeData.subSections?.map((section) => (
              <section key={section.id}>

                {/* Section header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 sm:mb-10">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="w-5 h-[1.5px] bg-[#e6a020]" />
                      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e6a020]">
                        Produk Unggulan
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a1a1a]/40 hover:text-[#e6a020] transition-colors group shrink-0"
                  >
                    Lihat Semua
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {Array(section.items).fill(null).map((_, i) => (
                    <div
                      key={i}
                      className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-[#1a1a1a]/06 hover:border-[#e6a020]/30 transition-all duration-200 hover:-translate-y-0.5"
                      style={{ background: 'rgba(255,255,255,0.5)' }}
                    >
                      {/* Placeholder image area */}
                      <div className="absolute inset-0 bg-[#1a1a1a]/[0.06]" />

                      {/* Bottom overlay */}
                      <div
                        className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.7), transparent)' }}
                      >
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center ml-auto"
                          style={{ background: '#e6a020' }}
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#1a1a1a]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </main>

      <div className="mt-20 sm:mt-28">
        <Footer />
      </div>
    </div>
  );
}