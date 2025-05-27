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
    <div className="min-h-screen scroll-smooth">
      <Header />


      <Hero  />

      <section id="about">
        <About />
      </section>

      <section id="leadership">
        <LeadershipPortfolio />
      </section>

      <section id="ventures">
        <Industry />
      </section>

      <section id="media">
        <MediaPage />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <FooterContent />
      <FooterPage />
    </div>
  );
}
