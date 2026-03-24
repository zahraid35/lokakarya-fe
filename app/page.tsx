import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Background from "@/components/landing/Background";
import Projects from "@/components/landing/Projects";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <Hero />
      <About />
      <Background />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}