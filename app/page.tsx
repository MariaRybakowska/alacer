import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import OfferSection from "../components/OfferSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AlacerCo from "../components/AlacerCo";

export default function Home() {
  return (
    <main className="bg-[#FFFCF5] min-h-screen">
      <Navbar />
      <div className="max-w-[100%] mx-auto px-8">
        <Hero />
        <AlacerCo />
        <AboutSection />
        <OfferSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
