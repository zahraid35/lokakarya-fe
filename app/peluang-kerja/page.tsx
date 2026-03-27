"use client";

import React, { useState } from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import { 
  Search, 
  ChevronDown, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight,  
  Briefcase,
  X,
  CheckCircle2,
  Clock,
  Send
} from 'lucide-react';
interface Job {
  id: number;
  judul: string;
  kategori: string;
  tipe: string;
  reward: string;
  tglPosting: string;
  deskripsi: string;
  syarat: string[];
  accent: string;
}

const JOB_OPPORTUNITIES: Job[] = [
  {
    id: 1,
    judul: "Designer UI/UX Mobile App",
    kategori: "Desain",
    tipe: "Peluang Portofolio",
    reward: "Portofolio & Sertifikat",
    tglPosting: "26/03/2026",
    deskripsi: "Kami membutuhkan desainer UI/UX untuk membantu merancang ulang aplikasi mobile toko kelontong UMKM kami agar lebih modern dan user-friendly.",
    syarat: ["Menguasai Figma", "Paham prinsip User-Centered Design", "Komitmen menyelesaikan proyek hingga akhir"],
    accent: "#e6a020",
  },
  {
    id: 2,
    judul: "Frontend Developer React",
    kategori: "Web Dev",
    tipe: "Peluang Portofolio",
    reward: "Sertifikat Pelatihan & Portofolio",
    tglPosting: "25/03/2026",
    deskripsi: "Bantu kami membangun landing page responsif untuk katalog produk UMKM kerajinan tangan lokal menggunakan React.js dan Tailwind CSS.",
    syarat: ["Menguasai Dasar React.js", "Paham Tailwind CSS", "Mampu bekerja secara mandiri"],
    accent: "#7c6df0",
  },
  {
    id: 3,
    judul: "Copywriter Konten Media Sosial",
    kategori: "Penulisan",
    tipe: "Peluang Portofolio",
    reward: "Portofolio & Surat Rekomendasi",
    tglPosting: "24/03/2026",
    deskripsi: "Menyusun rangkaian copy untuk caption Instagram dan Facebook bagi UMKM kuliner kekinian.",
    syarat: ["Bakat menulis kreatif", "Paham tren media sosial", "Bahasa Indonesia yang baik dan benar"],
    accent: "#4ab3f4",
  },
  {
    id: 4,
    judul: "Fotografer Produk Fashion",
    kategori: "Fotografi",
    tipe: "Peluang Portofolio",
    reward: "Portofolio & Eksposur Media",
    tglPosting: "23/03/2026",
    deskripsi: "Membutuhkan fotografer untuk sesi pemotretan produk fashion batik UMKM untuk keperluan katalog digital.",
    syarat: ["Memiliki kamera sendiri", "Mampu melakukan basic editing", "Mata yang jeli untuk komposisi"],
    accent: "#f06090",
  },
];

const KATEGORI_OPTIONS = ["Semua Kategori", "Desain", "Web Dev", "Penulisan", "Fotografi", "Marketing", "Visual"];

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
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsApplyModalOpen(false);
      setSelectedJob(null);
    }, 2000);
  };

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
                Kolaborasi Portofolio
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h1 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-[#1a1a1a] tracking-tight leading-snug">
                  Eksplorasi{' '}
                  <span style={{
                    background: 'linear-gradient(90deg, #e6a020 0%, #c98a18 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Peluang Kreatif
                  </span>
                </h1>
                <p className="text-sm text-[#1a1a1a]/40 mt-1.5">
                  Bangun portofolio profesionalmu dengan membantu tantangan nyata UMKM Indonesia.
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-[300px] group shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30 group-focus-within:text-[#e6a020] transition-colors" />
                <input
                  type="text"
                  placeholder="Cari keahlianmu…"
                  className="w-full pl-11 pr-5 py-3 bg-white rounded-2xl border border-[#1a1a1a]/08 shadow-sm focus:ring-2 focus:ring-[#e6a020]/20 focus:border-[#e6a020]/30 outline-none transition-all text-sm placeholder:text-[#1a1a1a]/30"
                />
              </div>
            </div>
          </div>

          {/* ── Filter Bar ── */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
               <span className="text-sm font-semibold text-[#1a1a1a]/60">Filter:</span>
               <div className="w-[200px]">
                  <SelectDropdown options={KATEGORI_OPTIONS} value={kategori} onChange={setKategori} />
               </div>
            </div>
            <p className="text-xs text-[#1a1a1a]/35">
              Menampilkan <span className="font-semibold text-[#1a1a1a]/60">{JOB_OPPORTUNITIES.length}</span> peluang tersedia
            </p>
          </div>

          {/* ── Grid Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JOB_OPPORTUNITIES.map((job) => (
              <div 
                key={job.id}
                className="group relative bg-white border border-[#1a1a1a]/07 rounded-3xl p-6 hover:shadow-xl hover:shadow-[#e6a020]/05 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-10 h-10 rounded-2xl flex items-center justify-center"
                      style={{ background: `${job.accent}15`, color: job.accent }}
                    >
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#1a1a1a]/40 bg-[#1a1a1a]/[0.04] px-3 py-1 rounded-full border border-[#1a1a1a]/05">
                      {job.tglPosting}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#e6a020] transition-colors">
                    {job.judul}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                     <span className="text-[10px] font-black px-2 py-0.5 rounded-md tracking-wider uppercase" style={{ background: `${job.accent}15`, color: job.accent }}>
                        {job.kategori}
                     </span>
                     <span className="text-[11px] font-medium text-[#1a1a1a]/40">
                        • {job.tipe}
                     </span>
                  </div>
                  <p className="text-sm text-[#1a1a1a]/50 line-clamp-3 leading-relaxed mb-6">
                    {job.deskripsi}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1a1a1a]/05">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#1a1a1a]/30 uppercase tracking-widest">Reward</span>
                    <span className="text-xs font-bold text-[#1a1a1a]/70">{job.reward}</span>
                  </div>
                  <button 
                    onClick={() => {
                        setSelectedJob(job);
                        setIsApplyModalOpen(true);
                    }}
                    className="w-full py-3.5 bg-[#1a1a1a] text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#e6a020] transition-all active:scale-[0.98]"
                  >
                    Pelajari Selengkapnya
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (Simplified) */}
          <div className="mt-12 flex justify-center">
             <div className="flex items-center gap-1 p-1 bg-white border border-[#1a1a1a]/05 rounded-2xl shadow-sm">
                <button className="w-9 h-9 rounded-xl flex items-center justify-center text-[#1a1a1a]/20 cursor-not-allowed"><ChevronLeft className="w-4 h-4" /></button>
                <button className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold bg-[#e6a020] text-white">1</button>
                <button className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-[#1a1a1a]/40 hover:bg-[#1a1a1a]/05">2</button>
                <button className="w-9 h-9 rounded-xl flex items-center justify-center text-[#1a1a1a]/40 hover:bg-[#1a1a1a]/05"><ChevronRight className="w-4 h-4" /></button>
             </div>
          </div>

        </div>
      </main>

      {/* ── Modal Apply ── */}
      {isApplyModalOpen && selectedJob && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-8">
            <div className="absolute inset-0 bg-[#1a1a1a]/80 backdrop-blur-md" onClick={() => setIsApplyModalOpen(false)} />
            
            <div className="relative w-full max-w-2xl bg-[#f5f2eb] rounded-[32px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
               {/* Modal Header */}
               <div className="p-8 pb-0 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                     <div 
                       className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                       style={{ background: `${selectedJob.accent}15`, color: selectedJob.accent }}
                     >
                       <Briefcase className="w-7 h-7" />
                     </div>
                     <div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#1a1a1a] leading-tight">
                           {selectedJob.judul}
                        </h2>
                        <span className="text-sm font-bold text-[#e6a020] uppercase tracking-widest">{selectedJob.kategori}</span>
                     </div>
                  </div>
                  <button 
                    onClick={() => setIsApplyModalOpen(false)}
                    className="w-10 h-10 rounded-full bg-white border border-[#1a1a1a]/05 flex items-center justify-center hover:bg-white/80 transition-colors"
                  >
                     <X className="w-5 h-5 text-[#1a1a1a]" />
                  </button>
               </div>

               {/* Modal Content */}
               <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                     <div className="md:col-span-2">
                        <h4 className="text-sm font-bold text-[#1a1a1a] mb-3 flex items-center gap-2 uppercase tracking-wider">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#e6a020]" />
                           Tentang Kolaborasi
                        </h4>
                        <p className="text-[#1a1a1a]/60 text-sm leading-relaxed mb-6">
                           {selectedJob.deskripsi}
                        </p>

                        <h4 className="text-sm font-bold text-[#1a1a1a] mb-3 flex items-center gap-2 uppercase tracking-wider">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#e6a020]" />
                           Persyaratan
                        </h4>
                        <ul className="space-y-2">
                           {selectedJob.syarat.map((s: string, i: number) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-[#1a1a1a]/60">
                                 <CheckCircle2 className="w-4 h-4 text-[#e6a020] shrink-0 mt-0.5" />
                                 {s}
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div className="space-y-6">
                        <div className="p-5 rounded-2xl bg-white border border-[#1a1a1a]/05">
                           <h5 className="text-[10px] font-bold text-[#1a1a1a]/30 uppercase tracking-[0.2em] mb-4">Status Alur</h5>
                           <div className="space-y-4">
                              {[
                                 { label: 'Apply', done: true, current: false },
                                 { label: 'Review UMKM', done: false, current: true },
                                 { label: 'Accepted', done: false, current: false }
                              ].map((step, i) => (
                                 <div key={i} className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${step.done ? 'bg-green-500' : step.current ? 'bg-[#e6a020]' : 'bg-[#1a1a1a]/10'}`}>
                                       {step.done ? <CheckCircle2 className="w-3 h-3 text-white" /> : <Clock className="w-3 h-3 text-white" />}
                                    </div>
                                    <span className={`text-xs font-bold ${step.done || step.current ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/30'}`}>{step.label}</span>
                                 </div>
                              ))}
                           </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#1a1a1a] text-white">
                           <h5 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Benefit Utama</h5>
                           <p className="text-xs font-bold">{selectedJob.reward}</p>
                        </div>
                     </div>
                  </div>

                  {/* Apply Form Section */}
                  <div className="pt-8 border-t border-[#1a1a1a]/08">
                     {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-6 text-center animate-bounce">
                           <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-xl shadow-green-500/20">
                              <CheckCircle2 className="w-8 h-8 text-white" />
                           </div>
                           <h3 className="text-lg font-bold text-[#1a1a1a]">Aplikasi Terkirim!</h3>
                           <p className="text-sm text-[#1a1a1a]/50">Mohon tunggu kabar selanjutnya dari UMKM terkait.</p>
                        </div>
                     ) : (
                        <form onSubmit={handleApply} className="space-y-5">
                           <div>
                              <label className="block text-xs font-bold text-[#1a1a1a] mb-2 uppercase tracking-wider">Kenapa kamu tertarik bergabung?</label>
                              <textarea 
                                 required
                                 placeholder="Ceritakan motivasimu dan bagaimana kamu bisa membantu proyek ini..."
                                 className="w-full p-4 rounded-xl border border-[#1a1a1a]/08 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[#e6a020]/20 focus:border-[#e6a020]/30 outline-none text-sm min-h-[100px] transition-all"
                              />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-[#1a1a1a] mb-2 uppercase tracking-wider">URL Portofolio Terkait (Opsional)</label>
                              <input 
                                 type="url"
                                 placeholder="https://behance.net/username..."
                                 className="w-full p-4 rounded-xl border border-[#1a1a1a]/08 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[#e6a020]/20 focus:border-[#e6a020]/30 outline-none text-sm transition-all"
                              />
                           </div>
                           <button 
                              type="submit"
                              className="w-full py-4 bg-[#e6a020] text-[#1a1a1a] rounded-2xl text-base font-black flex items-center justify-center gap-3 shadow-xl shadow-[#e6a020]/20 hover:scale-[1.01] active:scale-[0.98] transition-all"
                           >
                              Kirim Aplikasi Sekarang
                              <Send className="w-5 h-5" />
                           </button>
                        </form>
                     )}
                  </div>
               </div>
            </div>
         </div>
      )}

      <Footer />
      
      <style jsx global>{`
         .custom-scrollbar::-webkit-scrollbar { width: 6px; }
      `}</style>
    </div>
  );
}