import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OfferSection from "../components/OfferSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AlacerCo from "../components/AlacerCo";
import Nar from "../components/Nar";

export const metadata: Metadata = {
  title:
    "Alacer - Panele Akustyczne | Wykończenia Wnętrz | Doradztwo Akustyczne",
  description:
    "Wykończenia wnętrz panelami ściennymi i sufitowymi. Akustyka wnętrz prywatnych i publicznych. Panele akustyczne, doradztwo akustyczne, analiza akustyczna. Alacer - ekspert w akustyce wnętrz.",
  keywords: [
    "akustyka",
    "panele akustyczne",
    "panele wykończenia",
    "alacer",
    "doradztwo akustyczne",
    "analiza akustyczna",
    "wykończenia wnętrz",
    "panele ścienne",
    "panele sufitowe",
    "akustyka wnętrz",
    "systemy akustyczne",
    "panele dźwiękochłonne",
    "wykończenia akustyczne",
    "konsultacje akustyczne",
    "projektowanie akustyczne",
  ],
  openGraph: {
    title:
      "Alacer - Panele Akustyczne | Wykończenia Wnętrz | Doradztwo Akustyczne",
    description:
      "Wykończenia wnętrz panelami ściennymi i sufitowymi. Akustyka wnętrz prywatnych i publicznych. Panele akustyczne, doradztwo akustyczne, analiza akustyczna.",
    url: "https://alacer.pl",
    siteName: "Alacer",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alacer - Panele Akustyczne",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  alternates: {
    canonical: "https://alacer.pl",
  },
};

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
