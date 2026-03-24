import { ArrowUpRight, Palette, PenLine, Mic2, Camera, Megaphone, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Desain Grafis",
    tag: "Populer",
    count: "340+ proyek",
    icon: <Palette className="w-5 h-5" />,
    span: "md:row-span-2",
    accent: "#e6a020",
  },
  {
    id: 2,
    title: "Penulisan & Artikel",
    count: "120+ proyek",
    icon: <PenLine className="w-5 h-5" />,
    accent: "#7c6df0",
  },
  {
    id: 3,
    title: "Pengisi Suara",
    count: "80+ proyek",
    icon: <Mic2 className="w-5 h-5" />,
    accent: "#4ab3f4",
  },
  {
    id: 4,
    title: "Fotografi & Videografi",
    count: "210+ proyek",
    icon: <Camera className="w-5 h-5" />,
    span: "md:col-span-2",
    accent: "#e6a020",
  },
  {
    id: 5,
    title: "Iklan & Pemasaran",
    count: "95+ proyek",
    icon: <Megaphone className="w-5 h-5" />,
    accent: "#f06090",
  },
  {
    id: 6,
    title: "Pengembangan Web & Aplikasi",
    count: "280+ proyek",
    icon: <Code2 className="w-5 h-5" />,
    span: "md:col-span-2",
    accent: "#4ab3f4",
  },
];

export default function Projects() {
  return (
    <section className="relative bg-[#f5f2eb] py-20 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-20 overflow-hidden">

      {/* Warm glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#e6a020] opacity-[0.05] blur-[90px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[1.5px] bg-[#e6a020]" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e6a020]">
                Proyek Terbuka
              </span>
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-[#1a1a1a] tracking-tight leading-snug">
              Pekerjaan Paling{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #e6a020 0%, #c98a18 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Banyak Dicari
              </span>
            </h2>
          </div>

          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a1a1a]/50 hover:text-[#e6a020] transition-colors group"
          >
            Lihat Semua
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:auto-rows-[168px]">
          {projects.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 ${item.span ?? ""}`}
              style={{ background: "#222120" }}
            >
              {/* Soft colored glow per card */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-full blur-[60px] opacity-20 pointer-events-none"
                style={{ background: item.accent }}
              />

              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${item.accent}22`,
                    color: item.accent,
                    border: `1px solid ${item.accent}33`,
                  }}
                >
                  {item.icon}
                </div>

                {item.tag && (
                  <span
                    className="text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: `${item.accent}22`,
                      color: item.accent,
                      border: `1px solid ${item.accent}33`,
                    }}
                  >
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Bottom row: text + arrow */}
              <div className="flex items-end justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/35 font-medium">{item.count}</p>
                </div>

                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -mb-0.5"
                  style={{ background: item.accent }}
                >
                  <ArrowUpRight className="w-4 h-4 text-[#1a1a1a]" />
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                style={{ background: item.accent }}
              />
            </a>
          ))}
        </div>

        {/* Mobile "Lihat Semua" */}
        <div className="mt-8 flex justify-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a1a1a]/50 hover:text-[#e6a020] transition-colors"
          >
            Lihat Semua Kategori
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}