export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    { name: "Facebook", href: "#", svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> },
    { 
      name: "Instagram", 
      href: "#", 
      svg: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </>
      )
    },
    { 
      name: "Linkedin", 
      href: "#", 
      svg: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </>
      )
    },
    { 
      name: "Github", 
      href: "#", 
      svg: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/> 
    },
  ];

  const footerLinks = [
    {
      title: "TENTANG",
      links: ["Visi & Misi", "Struktur Organisasi", "Karir dan Kerjasama"],
    },
    {
      title: "PROGRAM",
      links: [
        "Informasi Pasar",
        "Sarana Pemasaran",
        "Promosi Produk",
        "Konsultasi Pemasaran",
        "Manajemen & Teknik pemasaran",
        "Inkubasi Pemasaran",
      ],
    },
    {
      title: "EVENT",
      links: ["Kalender event", "Event"],
    },
    {
      title: "MEDIA",
      links: ["Berita", "Galeri", "Video", "Publikasi"],
    },
  ];

  return (
    <footer className="bg-[#1a1a1a] pt-20 pb-10 px-6 md:px-12 lg:px-24 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Container Utama menggunakan Flexbox agar Sisi Kiri dan Kanan Terpisah Rapi */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          
          {/* Kolom 1: Branding & Sosmed (SISI KIRI) */}
          <div className="flex flex-col gap-6 max-w-xs">
            <h2 className="text-3xl font-bold tracking-tighter">LokaKarya</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Platform kolaborasi digital yang menghubungkan UMKM dengan kreator profesional untuk membangun proyek luar biasa.
            </p>
            <div className="flex items-center gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-[#a3a3a3] flex items-center justify-center text-[#1a1a1a] hover:bg-[#e6a020] hover:text-white transition-all shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* SISI KANAN: Menu Navigasi (Sesuai image_0ec689) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="font-bold text-base tracking-wide uppercase">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Garis Bawah & Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} LokaKarya. Semua hak cipta dilindungi.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}