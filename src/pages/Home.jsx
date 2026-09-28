import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import DoctorsSection from "../components/DoctorsSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import AppointmentSection from "../components/AppointmentSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <StatsSection/>

        <AboutSection />

        <ServicesSection />

        <DoctorsSection />

        <GallerySection />

        <TestimonialsSection />

        <AppointmentSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;