"use client";

import React, { useState } from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Search, ChevronDown, ArrowUpRight, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Briefcase } from 'lucide-react';

const JOB_OPPORTUNITIES = Array(9).fill(null).map((_, i) => ({
  judul: ["Dibutuhkan Designer UI/UX", "Frontend Developer React.js", "Copywriter Konten Produk", "Fotografer Produk UMKM", "Social Media Specialist", "Backend Developer Node.js", "Video Editor Konten Kreatif", "SEO Specialist E-commerce", "Motion Graphic Designer"][i % 9],
  kategori: ["Desain", "Web Dev", "Penulisan", "Fotografi", "Marketing", "Web Dev", "Visual", "Marketing", "Desain"][i % 9],
  tipe: i % 3 === 0 ? "Full-time" : "Freelance",
  budget: ["Rp 300.000", "Rp 1.500.000", "Rp 500.000", "Rp 750.000", "Rp 2.000.000", "Rp 3.500.000", "Rp 800.000", "Rp 1.200.000", "Rp 600.000"][i % 9],
  tglPosting: "30/04/2026 15:00",
  tglPenerimaan: "20/05/2026 13:00",
  accent: ["#e6a020","#7c6df0","#4ab3f4","#f06090","#e6a020","#7c6df0","#4ab3f4","#f06090","#e6a020"][i % 9],
}));

const KATEGORI_OPTIONS = ["Semua Kategori", "Desain", "Web Dev", "Penulisan", "Fotografi", "Marketing", "Visual"];
const TIPE_OPTIONS = ["Semua Tipe", "Freelance", "Full-time", "Part-time"];

function SelectDropdown({ options, value, onChange }: { options: string[], value: string, onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-[#1a1a1a]/08 bg-white text-sm text-[#1a1a1a]/60 font-medium outline-none focus:ring-2 focus:ring-[#e6a020]/20 focus:border-[#e6a020]/30 transition-all cursor-pointer"
      >
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30 pointer-events-none" />
    </div>
  );
}

export default function PeluangKerjaPage() {
  const [kategori, setKategori] = useState("Semua Kategori");
  const [tipe, setTipe] = useState("Semua Tipe");

  return (
    <div className="min-h-screen bg-[#f5f2eb] flex flex-col">
      <Navbar theme="light" />

      <main className="flex-grow px-5 sm:px-8 md:px-12 lg:px-20 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[1.5px] bg-[#e6a020]" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e6a020]">
                Karir & Kolaborasi
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h1 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-[#1a1a1a] tracking-tight leading-snug">
                  Peluang{' '}
                  <span style={{
                    background: 'linear-gradient(90deg, #e6a020 0%, #c98a18 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Kerja
                  </span>
                </h1>
                <p className="text-sm text-[#1a1a1a]/40 mt-1.5">
                  Temukan pekerjaan yang sesuai dengan keahlian dan minatmu.
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-[300px] group shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30 group-focus-within:text-[#e6a020] transition-colors" />
                <input
                  type="text"
                  placeholder="Cari pekerjaan…"
                  className="w-full pl-11 pr-5 py-3 bg-white rounded-2xl border border-[#1a1a1a]/08 shadow-sm focus:ring-2 focus:ring-[#e6a020]/20 focus:border-[#e6a020]/30 outline-none transition-all text-sm placeholder:text-[#1a1a1a]/30"
                />
              </div>
            </div>
          </div>

          {/* ── Main Card ── */}
          <div
            className="rounded-2xl overflow-hidden border border-[#1a1a1a]/07"
            style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(12px)' }}
          >

            {/* Filter Bar */}
            <div className="px-6 sm:px-8 py-5 border-b border-[#1a1a1a]/06 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#e6a020]" />
                <h2 className="text-sm font-bold text-[#1a1a1a] tracking-wide">Daftar Lowongan</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="w-full sm:w-[180px]">
                  <SelectDropdown options={KATEGORI_OPTIONS} value={kategori} onChange={setKategori} />
                </div>
                <div className="w-full sm:w-[160px]">
                  <SelectDropdown options={TIPE_OPTIONS} value={tipe} onChange={setTipe} />
                </div>
              </div>
            </div>

            {/* Table — desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#1a1a1a]/05">
                    {["Judul Pekerjaan","Kategori","Tipe","Budget","Tgl Posting","Tgl Penerimaan",""].map((h, i) => (
                      <th key={i} className="px-6 py-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#1a1a1a]/30 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {JOB_OPPORTUNITIES.map((job, idx) => (
                    <tr
                      key={idx}
                      className="group border-b border-[#1a1a1a]/04 hover:bg-[#1a1a1a]/[0.02] transition-colors last:border-0"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: `${job.accent}18`, color: job.accent }}
                          >
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-[#1a1a1a] whitespace-nowrap">{job.judul}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                          style={{ background: `${job.accent}15`, color: job.accent }}
                        >
                          {job.kategori}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-medium text-[#1a1a1a]/50 bg-[#1a1a1a]/[0.05] px-2.5 py-1 rounded-full">
                          {job.tipe}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-[#1a1a1a]">{job.budget}</td>
                      <td className="px-6 py-4 text-xs text-[#1a1a1a]/40">{job.tglPosting}</td>
                      <td className="px-6 py-4 text-xs text-[#1a1a1a]/40">{job.tglPenerimaan}</td>
                      <td className="px-6 py-4">
                        <button
                          className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 rounded-xl flex items-center justify-center text-white"
                          style={{ background: 'linear-gradient(135deg, #e6a020, #c98a18)' }}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards — mobile */}
            <div className="md:hidden flex flex-col divide-y divide-[#1a1a1a]/05">
              {JOB_OPPORTUNITIES.map((job, idx) => (
                <div key={idx} className="px-5 py-4 flex items-start gap-3 hover:bg-[#1a1a1a]/[0.02] transition-colors">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${job.accent}18`, color: job.accent }}
                  >
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#1a1a1a] truncate">{job.judul}</p>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${job.accent}15`, color: job.accent }}>
                        {job.kategori}
                      </span>
                      <span className="text-[10px] font-medium text-[#1a1a1a]/40 bg-[#1a1a1a]/[0.05] px-2 py-0.5 rounded-full">
                        {job.tipe}
                      </span>
                      <span className="text-xs font-bold text-[#1a1a1a]">{job.budget}</span>
                    </div>
                    <p className="text-[10px] text-[#1a1a1a]/30 mt-1">{job.tglPosting}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#1a1a1a]/20 shrink-0 mt-1" />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="px-6 sm:px-8 py-4 border-t border-[#1a1a1a]/06 flex items-center justify-between gap-4">
              <p className="text-xs text-[#1a1a1a]/35">
                Menampilkan <span className="font-semibold text-[#1a1a1a]/60">9</span> dari <span className="font-semibold text-[#1a1a1a]/60">180</span> lowongan
              </p>
              <div className="flex items-center gap-1">
                {[
                  { icon: <ChevronsLeft className="w-4 h-4" />, disabled: true },
                  { icon: <ChevronLeft className="w-4 h-4" />, disabled: true },
                  { label: "1", active: true },
                  { label: "2" },
                  { label: "3" },
                  { icon: <ChevronRight className="w-4 h-4" />, disabled: false },
                  { icon: <ChevronsRight className="w-4 h-4" />, disabled: false },
                ].map((btn, i) => (
                  <button
                    key={i}
                    disabled={btn.disabled}
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all"
                    style={
                      btn.active
                        ? { background: 'linear-gradient(135deg,#e6a020,#c98a18)', color: '#fff' }
                        : btn.disabled
                          ? { color: 'rgba(26,26,26,0.2)', cursor: 'not-allowed' }
                          : { color: 'rgba(26,26,26,0.45)', background: 'transparent' }
                    }
                  >
                    {btn.icon ?? btn.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}