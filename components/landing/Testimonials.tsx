import { Star, MessageSquareText } from "lucide-react";

const testimonials = Array(6).fill({
  name: "Rd Airlangga Dewanata",
  role: "Pelaku UMKM",
  rating: 5.0,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
});

export default function Testimonials() {
  return (
    <section className="bg-[#f2f0ea] py-20 px-6 md:px-12 lg:px-24 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-lg font-bold">Apa kata mereka?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e6a020]">
            Testimoni Pengguna & Kreator
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-[#eceae4] p-8 rounded-2xl flex flex-col gap-6">
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#d9d9d9] rounded-full shrink-0" />
                <div className="flex flex-col">
                  <h3 className="font-bold text-base">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{item.role}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#e6a020] text-[#e6a020]" />
                    ))}
                    <span className="text-sm font-bold ml-1">{item.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Button - Tulis Ulasan */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-2 font-bold border-b-2 border-black pb-1 hover:text-[#e6a020] hover:border-[#e6a020] transition-all">
            <MessageSquareText className="w-5 h-5 fill-black hover:fill-[#e6a020]" />
            Tulis Ulasan Anda
          </button>
        </div>
      </div>
    </section>
  );
}