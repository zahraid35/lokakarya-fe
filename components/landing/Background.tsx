export default function Background() {
  const problems = [
    "Sulit menemukan penyedia jasa kreatif & digital yang profesional",
    "Kreator kekurangan wadah efektif untuk mempromosikan keahlian",
    "Kolaborasi klien–penyedia jasa belum terstruktur dengan baik",
    "Akses informasi lowongan kerja di bidang kreatif masih terbatas",
  ];

  return (
    <section className="relative bg-[#f5f2eb] py-20 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-20 overflow-hidden border-t border-[#1a1a1a]/08">

      {/* Subtle warm glow */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#e6a020] opacity-[0.05] blur-[90px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-5 h-[1.5px] bg-[#e6a020]" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e6a020]">
              Latar Belakang Platform
            </span>
          </div>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-[#1a1a1a] leading-snug tracking-tight max-w-lg">
            Mengapa LokaKarya{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #e6a020 0%, #c98a18 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Dibutuhkan?
            </span>
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-start">

          {/* Left — Paragraphs */}
          <div className="flex flex-col gap-6">
            <p className="text-[#1a1a1a]/65 leading-[1.85] text-sm sm:text-base">
              Saat ini banyak individu maupun pelaku bisnis yang membutuhkan layanan kreatif
              dan digital seperti desain grafis, pemasaran digital, fotografi, serta
              pengembangan website — namun sering mengalami kesulitan dalam menemukan
              penyedia jasa profesional yang sesuai. Di sisi lain, para kreator yang memiliki
              keterampilan di bidang tersebut juga masih terbatas dalam mendapatkan wadah
              yang efektif untuk mempromosikan keahlian serta memperoleh proyek.
            </p>
            <p className="text-[#1a1a1a]/65 leading-[1.85] text-sm sm:text-base">
              Proses kolaborasi antara klien dan penyedia jasa sering kali belum terstruktur
              dengan baik, sehingga komunikasi dan pengelolaan proyek menjadi kurang efisien.
              Oleh karena itu, dibutuhkan sebuah platform terintegrasi yang dapat
              menghubungkan klien, kreator, serta peluang pekerjaan dalam satu sistem yang
              mudah diakses.
            </p>

            {/* Solution callout */}
            <div
              className="mt-2 p-5 sm:p-6 rounded-2xl border border-[#e6a020]/20"
              style={{ background: "rgba(230,160,32,0.06)" }}
            >
              <p className="text-sm sm:text-base text-[#1a1a1a]/75 leading-relaxed">
                <span className="font-semibold text-[#c98a18]">LokaKarya</span> hadir sebagai
                platform digital yang memudahkan pengguna menemukan layanan profesional,
                mempromosikan keahlian kreator, serta membangun kolaborasi proyek secara
                terstruktur — semuanya dalam satu tempat yang efisien.
              </p>
            </div>
          </div>

          {/* Right — Problem List Card */}
          <div
            className="rounded-2xl border border-[#1a1a1a]/08 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.55)" }}
          >
            <div className="px-6 py-4 border-b border-[#1a1a1a]/07">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#1a1a1a]/35">
                Tantangan yang Ada
              </span>
            </div>
            <ul className="flex flex-col divide-y divide-[#1a1a1a]/06">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-4 px-6 py-4 group">
                  <span
                    className="mt-[3px] w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-[10px] font-bold"
                    style={{
                      background: "linear-gradient(135deg, #e6a020, #c98a18)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm text-[#1a1a1a]/60 leading-relaxed">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}