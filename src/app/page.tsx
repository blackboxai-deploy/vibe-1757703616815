import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SafetySection from "@/components/SafetySection";
import DriverSignup from "@/components/DriverSignup";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <SafetySection />
      <DriverSignup />
      <Footer />
    </main>
  );
}