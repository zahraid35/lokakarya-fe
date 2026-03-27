import { Star, MessageSquareText, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rd Airlangga Dewanata",
    role: "Pelaku UMKM",
    type: "UMKM",
    rating: 5.0,
    content: "LokaKarya sangat membantu bisnis saya. Saya mendapatkan logo berkualitas dari kreator berbakat, dan saya senang bisa membantu mereka membangun portofolio.",
    initials: "RA",
    accent: "#e6a020",
  },
  {
    name: "Siti Rahayu Pratiwi",
    role: "Mahasiswa Desain",
    type: "Kreator",
    rating: 5.0,
    content: "Dulu susah cari klien pertama. Di LokaKarya, saya bisa kerjakan proyek nyata dari UMKM dan portofolio saya sekarang jadi lebih profesional.",
    initials: "SR",
    accent: "#7c6df0",
  },
  {
    name: "Budi Santoso",
    role: "Pemilik Toko Online",
    type: "UMKM",
    rating: 4.0,
    content: "Fitur laporan progresnya sangat bagus. Saya bisa pantau tiap tahap pengerjaan video produk saya dari awal sampai selesai.",
    initials: "BS",
    accent: "#4ab3f4",
  },
  {
    name: "Ayu Maharani",
    role: "Content Writer",
    type: "Kreator",
    rating: 5.0,
    content: "Bukan soal uang, tapi pengalaman mengerjakan proyek nyata itu yang mahal. LokaKarya adalah tempat terbaik untuk tumbuh bersama UMKM.",
    initials: "AM",
    accent: "#f06090",
  },
  {
    name: "Dimas Prasetyo",
    role: "Startup Founder",
    type: "UMKM",
    rating: 5.0,
    content: "Platform ini menjembatani celah antara kebutuhan UMKM dan talenta muda. Proses apply-nya transparan dan terpercaya.",
    initials: "DP",
    accent: "#e6a020",
  },
  {
    name: "Nurul Hidayah",
    role: "Fotografer Pemula",
    type: "Kreator",
    rating: 4.0,
    content: "Senang bisa membantu UMKM lokal sambil mempraktikkan ilmu fotografi saya. Portofolio saya semakin beragam berkat platform ini.",
    initials: "NH",
    accent: "#4ab3f4",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          style={{
            fill: i <= rating ? "#e6a020" : "transparent",
            color: i <= rating ? "#e6a020" : "#1a1a1a30",
          }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-[#f5f2eb] py-20 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-20 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#e6a020] opacity-[0.04] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[1.5px] bg-[#e6a020]" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e6a020]">
                Apa kata mereka?
              </span>
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-[#1a1a1a] tracking-tight leading-snug">
              Testimoni{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #e6a020 0%, #c98a18 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pengguna & Kreator
              </span>
            </h2>
          </div>

          {/* CTA desktop */}
          <button className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]/50 hover:text-[#e6a020] transition-colors group">
            <MessageSquareText className="w-4 h-4" />
            Tulis Ulasan Anda
          </button>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-5 rounded-2xl p-6 sm:p-7 border border-[#1a1a1a]/07 hover:border-[#1a1a1a]/12 transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.5)" }}
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-5 right-6 w-8 h-8 opacity-[0.06]"
                style={{ color: item.accent }}
              />

              {/* Profile */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent}cc, ${item.accent}88)`,
                  }}
                >
                  {item.initials}
                </div>

                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="font-bold text-sm text-[#1a1a1a] truncate">{item.name}</h3>
                  <p className="text-xs text-[#1a1a1a]/45">{item.role}</p>
                </div>

                {/* Type badge */}
                <span
                  className="ml-auto text-[10px] font-bold tracking-[0.12em] uppercase px-2 py-1 rounded-full shrink-0"
                  style={{
                    background: `${item.accent}18`,
                    color: item.accent,
                    border: `1px solid ${item.accent}30`,
                  }}
                >
                  {item.type}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#1a1a1a]/07" />

              {/* Rating */}
              <div className="flex items-center gap-2">
                <StarRating rating={item.rating} />
                <span className="text-xs font-bold text-[#1a1a1a]/40">
                  {item.rating.toFixed(1)}
                </span>
              </div>

              {/* Content */}
              <p className="text-sm text-[#1a1a1a]/60 leading-relaxed flex-1">
                &ldquo;{item.content}&rdquo;
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                style={{ background: item.accent }}
              />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center sm:hidden">
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]/50 hover:text-[#e6a020] transition-colors">
            <MessageSquareText className="w-4 h-4" />
            Tulis Ulasan Anda
          </button>
        </div>

      </div>
    </section>
  );
}