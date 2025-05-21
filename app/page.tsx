"use client";
import Hero from "./Components/Hero";
import LeadershipPortfolio from "./Components/leadership";
import MediaPage from "./Components/media-page";
import About from "./Components/About";
import Industry from "./Components/Industry";
import FooterContent from "./Components/Footer-Content";
import FooterPage from "./Components/footer";
import ContactSection from "./Components/contact-section";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";

export default function Page() {
  return (
    <div className="bg-[#FFFFFF66] backdrop-blur-[8px] min-h-screen">
      <Header />
      <Hero />
      <About />
      <LeadershipPortfolio />
      <Industry />
      <MediaPage />
      <Gallery />
      <ContactSection />
      <FooterContent />
      <FooterPage />
    </div>
  );
}
