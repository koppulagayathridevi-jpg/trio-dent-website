import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import "../styles/footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* ================= FOOTER MAIN ================= */}
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <img
              src="/images/logo.png"
              alt="Trio Dent Dental Clinic"
            />
          </Link>

          <p>
            Providing modern, comfortable, and personalized
            dental care with a focus on healthier and
            confident smiles.
          </p>

          <Link to="/appointment" className="footer-appointment">
            Book an Appointment
            <ArrowRight size={14} />
          </Link>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>

        </div>


        {/* SERVICES */}
        <div className="footer-column">

          <h3>Our Services</h3>

          <Link to="/services">General Dentistry</Link>
          <Link to="/services">Teeth Whitening</Link>
          <Link to="/services">Dental Implants</Link>
          <Link to="/services">Root Canal Treatment</Link>
          <Link to="/services">Pediatric Dentistry</Link>
          <Link to="/services">Orthodontic Care</Link>

        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <div className="footer-contact-item">

            <div className="footer-contact-icon">
              <MapPin size={16} />
            </div>

            <div>
              <span className="footer-contact-label">
                Visit Us
              </span>

              <p>
                Trio Dent Dental Clinic
                <br />
                Rajahmundry, Andhra Pradesh
              </p>
            </div>

          </div>


          <div className="footer-contact-item">

            <div className="footer-contact-icon">
              <Phone size={16} />
            </div>

            <div>
              <span className="footer-contact-label">
                Call Us
              </span>

              <a href="tel:+919779485868">
                +91 97794 85868
              </a>
            </div>

          </div>


          <div className="footer-contact-item">

            <div className="footer-contact-icon">
              <Mail size={16} />
            </div>

            <div>
              <span className="footer-contact-label">
                Email Us
              </span>

              <a href="mailto:info@triodentdentalclinic.com">
                info@triodentdentalclinic.com
              </a>
            </div>

          </div>

        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} Trio Dent Dental Clinic.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <span>•</span>

            <Link to="/terms">
              Terms & Conditions
            </Link>

          </div>

          <button
            onClick={scrollToTop}
            className="footer-top-button"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;