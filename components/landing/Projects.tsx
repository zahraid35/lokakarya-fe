import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="bg-[#f2f0ea] py-20 px-6 md:px-12 lg:px-24 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header - Rapi Sesuai Figma */}
        <div className="mb-12">
          <p className="text-sm md:text-lg font-medium mb-1">Project Terbuka</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#e6a020]">
            Pekerjaan paling banyak dicari
          </h2>
        </div>

        {/* BENTO GRID - PERBAIKAN TOTAL */}
        {/* Kita paksa 3 kolom di desktop dengan auto-rows agar kotaknya sama tinggi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[170px]">
          
          {/* BARIS UTAMA (Row 1 & 2) */}

          {/* 1. DESAIN GRAFIS (Mengambil Kolom 1, Baris 1 & 2) */}
          <div className="md:row-span-2 bg-[#33312e] rounded-2xl p-8 flex flex-col justify-end text-white relative">
            <h3 className="text-xl md:text-2xl font-bold">DESAIN GRAFIS</h3>
            <p className="text-gray-400">Freelancer</p>
          </div>

          {/* 2. PENULISAN & ARTIKEL (Kolom 2, Baris 1) */}
          <div className="bg-[#33312e] rounded-2xl p-8 flex flex-col justify-end text-white">
            <h3 className="text-lg md:text-xl font-bold">PENULISAN & ARTIKEL</h3>
            <p className="text-gray-400">Freelancer</p>
          </div>

          {/* 3. PENGISI SUARA (Kolom 3, Baris 1) */}
          <div className="bg-[#33312e] rounded-2xl p-8 flex flex-col justify-end text-white">
            <h3 className="text-lg md:text-xl font-bold">PENGISI SUARA</h3>
            <p className="text-gray-400">Freelancer</p>
          </div>

          {/* 4. FOTOGRAFI & VIDEOGRAFI (Mengambil Kolom 2 & 3, Baris 2) */}
          {/* Ini kuncinya, dia menggabungkan kolom tengah dan kanan di bawah penulisan & pengisi suara */}
          <div className="md:col-span-2 bg-[#33312e] rounded-2xl p-8 flex flex-col justify-end text-white">
            <h3 className="text-lg md:text-xl font-bold">FOTOGRAFI & VIDEOGRAFI</h3>
            <p className="text-gray-400">Freelancer</p>
          </div>

          {/* BARIS BAWAH (Row 3) */}

          {/* 5. IKLAN PEMASARAN (Kolom 1, Baris 3) */}
          <div className="bg-[#33312e] rounded-2xl p-8 flex flex-col justify-end text-white md:row-start-3 md:col-start-1">
            <h3 className="text-lg md:text-xl font-bold leading-tight">IKLAN PEMASARAN</h3>
            <p className="text-gray-400">Freelancer</p>
          </div>

          {/* 6. PENGEMBANGAN WEB & APLIKASI (Kolom 2, Baris 3) */}
          <div className="bg-[#33312e] rounded-2xl p-8 flex flex-col justify-end text-white md:row-start-3 md:col-start-2 md:col-span-2">
            <h3 className="text-lg md:text-xl font-bold leading-tight">PENGEMBANGAN WEB & APLIKASI</h3>
            <p className="text-gray-400">Freelancer</p>
          </div>
        </div>

        {/* Footer Link - Rapi ke Tengah */}
        <div className="mt-12 flex justify-center">
          <a href="#" className="flex items-center gap-2 font-medium text-black hover:text-[#e6a020] transition-colors text-sm md:text-base">
            Lihat Lainnya <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}