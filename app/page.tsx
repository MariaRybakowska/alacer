import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OfferSection from "../components/OfferSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AlacerCo from "../components/AlacerCo";
import Nar from "../components/Nar";

export default function Home() {
  return (
    <main className="bg-[#FFFCF5] min-h-screen">
      <Navbar />
      <div className="max-w-[100%] mx-auto px-4 md:px-8">
        <Hero />
        <AlacerCo />
        <OfferSection />
        <Nar />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
