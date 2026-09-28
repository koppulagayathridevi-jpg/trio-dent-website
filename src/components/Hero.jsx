import { ArrowRight, CalendarDays } from "lucide-react";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <p className="hero-small-title">
            ADVANCED AESTHETIC & ENDODONTIC CARE
          </p>

          <h1>
            Healthy Smiles
            <span>For A Brighter Tomorrow</span>
          </h1>

          <p className="hero-description">
            Advanced dental care with experienced specialists,
            modern technology, and personalized treatment
            designed around your smile.
          </p>

          <div className="hero-buttons">

            <a
              href="/contact"
              className="hero-book-button"
            >
              <CalendarDays size={15} />
              Book Appointment
            </a>

            <a
              href="/services"
              className="hero-services-button"
            >
              Our Services
              <ArrowRight size={15} />
            </a>

          </div>

        </div>


        {/* 4 Image Showcase */}
        <div className="hero-showcase">

          <div className="hero-showcase-track">

            <div className="showcase-image">
              <img
                src="/images/ment.png"
                alt="Trio Dent Clinic"
              />
            </div>

            <div className="showcase-image showcase-main">
              <img
                src="/images/image2.png"
                alt="Trio Dent Dental Care"
              />
            </div>

            <div className="showcase-image">
              <img
                src="/images/image3.png"
                alt="Trio Dent Treatment"
              />
            </div>

            <div className="showcase-image">
              <img
                src="/images/certificate.png"
                alt="Trio Dent Clinic"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;