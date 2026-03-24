import { Briefcase, Wrench, Handshake } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-black" />,
    title: "Informasi Lowongan Pekerjaan",
    description: "Menyediakan informasi lowongan pekerjaan bagi individu yang ingin menemukan peluang kerja sesuai dengan keterampilan dan minat mereka."
  },
  {
    icon: <Wrench className="w-8 h-8 text-black" />,
    title: "Layanan Jasa Profesional",
    description: "Menyediakan berbagai layanan seperti pemasaran produk, desain grafis, hingga pengembangan website untuk mendukung kebutuhan bisnis digital."
  },
  {
    icon: <Handshake className="w-8 h-8 text-black" />,
    title: "Kolaborasi Profesional",
    description: "Menghubungkan klien dengan penyedia jasa kreatif dan profesional untuk mempermudah proses kerja sama dalam berbagai kebutuhan layanan digital."
  }
];

export default function About() {
  return (
    <section className="bg-[#f2f0ea] py-20 px-6 md:px-12 lg:px-24 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-lg font-medium mb-4">Apa itu LokaKarya?</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e6a020] leading-tight max-w-4xl">
            Perancangan Platform Website LokaKarya sebagai Media Penyedia Layanan Jasa Kreatif dan Informasi Lowongan Pekerjaan bagi UMKM dan Masyarakat
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}