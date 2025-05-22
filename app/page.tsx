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
    <div className="bg-[#FFFFFF66] backdrop-blur-[8px] min-h-screen scroll-smooth">
      <Header />

      {/* Hero section does not need an ID unless linked */}
      <Hero />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Leadership Section */}
      <section id="leadership">
        <LeadershipPortfolio />
      </section>

      {/* Ventures or Industry Section */}
      <section id="ventures">
        <Industry />
      </section>

      {/* Media Section */}
      <section id="media">
        <MediaPage />
      </section>

      {/* Gallery (Optional) */}
       <section id="gallery">
        <Gallery />
      </section> 

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer Sections */}
      <FooterContent />
      <FooterPage />
    </div>
  );
}
