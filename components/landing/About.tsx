import { Briefcase, Wrench, Handshake } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "01",
    title: "Bangun Portofolio Nyata",
    description:
      "Kreator mendapatkan kesempatan mengerjakan proyek dari bisnis asli untuk memperkuat portofolio profesional mereka.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    label: "02",
    title: "Solusi Kreatif UMKM",
    description:
      "UMKM mendapatkan dukungan desain, video, hingga pengembangan web untuk meningkatkan kualitas digital produk mereka.",
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    label: "03",
    title: "Progress Terstruktur",
    description:
      "Sistem lamaran (apply) dan laporan progress berkala memastikan kolaborasi berjalan transparan dari awal hingga akhir.",
  },
];

export default function About() {
  return (
    <section className="relative bg-[#f5f2eb] py-20 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-20 overflow-hidden">

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Warm glow accent */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#e6a020] opacity-[0.06] blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-5 h-[1.5px] bg-[#e6a020]" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e6a020]">
                Apa itu LokaKarya?
              </span>
            </div>

            <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-[#1a1a1a] leading-[1.25] tracking-tight">
              Ruang Kolaborasi untuk{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #e6a020 0%, #d4911a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tumbuh Bersama
              </span>{" "}
              lewat Karya Nyata
            </h2>
          </div>

          {/* Divider visible only on desktop */}
          <p className="hidden sm:block text-sm text-[#1a1a1a]/40 max-w-[200px] text-right leading-relaxed">
            Menghubungkan talenta dengan peluang yang tepat.
          </p>
        </div>

        {/* ── Divider Line ── */}
        <div className="w-full h-px bg-[#1a1a1a]/10 mb-10 sm:mb-14" />

        {/* ── Features Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#1a1a1a]/10 rounded-2xl overflow-hidden">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-[#f5f2eb] hover:bg-[#eee9de] transition-colors duration-200 p-7 sm:p-8 gap-5"
            >
              {/* Number label */}
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#1a1a1a]/25 uppercase">
                {item.label}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #e6a020 0%, #c98a18 100%)",
                  boxShadow: "0 4px 16px rgba(230,160,32,0.25)",
                }}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-[#1a1a1a] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1a1a1a]/55 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-7 right-7 h-[2px] rounded-full bg-[#e6a020] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* ── Bottom Stats Strip ── */}
        <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { value: "2.4K+", label: "Kreator Aktif" },
            { value: "500+", label: "Proyek Selesai" },
            { value: "98%", label: "Kepuasan Klien" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start gap-1">
              <span className="text-xl sm:text-2xl font-bold text-[#1a1a1a] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-[#1a1a1a]/45 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}