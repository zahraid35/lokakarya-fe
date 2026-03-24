export default function Background() {
  return (
    <section className="bg-[#f2f0ea] py-20 px-6 md:px-12 lg:px-24 text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-lg font-bold mb-2">Latar Belakang Platform</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e6a020]">
            Mengapa LokaKarya Dibutuhkan?
          </h2>
        </div>

        {/* Content Paragraphs */}
        <div className="flex flex-col gap-8 max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Saat ini banyak individu maupun pelaku bisnis yang membutuhkan layanan kreatif dan digital seperti desain grafis, pemasaran digital, 
            fotografi, serta pengembangan website, namun sering mengalami kesulitan dalam menemukan penyedia jasa profesional yang sesuai 
            dengan kebutuhan mereka. Di sisi lain, para kreator atau tenaga profesional yang memiliki keterampilan di bidang tersebut juga masih 
            terbatas dalam mendapatkan wadah yang efektif untuk mempromosikan keahlian serta memperoleh proyek atau pekerjaan. Selain itu, 
            proses kolaborasi antara klien dan penyedia jasa sering kali belum terstruktur dengan baik, sehingga komunikasi dan pengelolaan proyek 
            menjadi kurang efisien. Akses terhadap informasi lowongan pekerjaan di bidang kreatif dan digital juga masih terbatas, sehingga masyarakat 
            kesulitan menemukan peluang kerja yang sesuai. Oleh karena itu, dibutuhkan sebuah platform terintegrasi yang dapat menghubungkan 
            klien, kreator, serta peluang pekerjaan dalam satu sistem yang lebih mudah diakses dan terorganisir.
          </p>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            LokaKarya hadir sebagai platform digital yang memudahkan pengguna dalam menemukan layanan profesional, mempromosikan keahlian 
            kreator, serta membangun kolaborasi proyek secara lebih terstruktur. Selain itu, platform ini juga menyediakan informasi lowongan 
            pekerjaan sehingga membuka peluang kerja yang lebih luas. Dengan sistem yang terintegrasi, LokaKarya menjadi wadah yang 
            menghubungkan klien, kreator, dan peluang kerja dalam satu tempat yang mudah diakses dan efisien.
          </p>
        </div>
      </div>
    </section>
  );
}