export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    {
      name: "Facebook",
      href: "#",
      svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    },
    {
      name: "Instagram",
      href: "#",
      svg: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      svg: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
    },
    {
      name: "Github",
      href: "#",
      svg: (
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      ),
    },
  ];

  const footerLinks = [
    {
      title: "Tentang",
      links: ["Visi & Misi", "Struktur Organisasi", "Karir dan Kerjasama"],
    },
    {
      title: "Program",
      links: [
        "Informasi Pasar",
        "Sarana Pemasaran",
        "Promosi Produk",
        "Konsultasi Pemasaran",
        "Manajemen Pemasaran",
        "Inkubasi Pemasaran",
      ],
    },
    {
      title: "Event",
      links: ["Kalender Event", "Event"],
    },
    {
      title: "Media",
      links: ["Berita", "Galeri", "Video", "Publikasi"],
    },
  ];

  return (
    <footer className="relative bg-[#141414] pt-16 sm:pt-20 pb-8 px-5 sm:px-8 md:px-12 lg:px-20 text-white overflow-hidden border-t border-white/[0.06]">

      {/* Subtle warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#e6a020] opacity-[0.04] blur-[80px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Main Grid ── */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-14 sm:mb-16">

          {/* ── Left: Brand ── */}
          <div className="flex flex-col gap-6 max-w-[280px]">

            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <span
                className="w-8 h-8 rounded-xl flex items-center justify-center text-[#1a1a1a] font-bold text-sm shrink-0"
                style={{ background: "linear-gradient(135deg, #e6a020, #f5c842)" }}
              >
                L
              </span>
              <span className="text-xl font-semibold tracking-tight">LokaKarya</span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed">
              Platform kolaborasi digital yang menghubungkan UMKM dengan kreator berbakat untuk membangun portofolio dan karya luar biasa.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {socialMedia.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 border border-white/[0.08] hover:border-[#e6a020]/50 hover:text-[#e6a020] hover:bg-[#e6a020]/[0.08] transition-all duration-150"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Nav Links ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-xs font-bold tracking-[0.16em] uppercase text-white/30">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href="#"
                        className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-white/[0.07] mb-7" />

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <p>&copy; {currentYear} LokaKarya. Semua hak cipta dilindungi.</p>
          <div className="flex items-center gap-5">
            {["Kebijakan Privasi", "Syarat & Ketentuan", "Cookies"].map((item) => (
              <a key={item} href="#" className="hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}