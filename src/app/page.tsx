import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import { MovingTestimonies } from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Features />
      <MovingTestimonies />
      <Footer />
    </main>
  );
}
