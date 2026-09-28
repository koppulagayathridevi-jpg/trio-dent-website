import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
} from "lucide-react";

import "../styles/contact.css";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <p className="contact-small-title">
            GET IN TOUCH
          </p>

          <h2>
            We're Here To
            <span>Help You Smile</span>
          </h2>

          <p>
            Have a question or want to schedule a visit?
            Reach out to our team and we'll be happy to assist you.
          </p>
        </div>


        {/* CONTACT CONTENT */}
        <div className="contact-content">

          {/* LEFT */}
          <div className="contact-info">

            <div className="contact-info-card">
              <div className="contact-icon">
                <MapPin size={19} />
              </div>

              <div>
                <h3>Visit Our Clinic</h3>

                <p>
                  Trio Dent Dental Clinic
                  <br />
                  Rajahmundry, Andhra Pradesh
                </p>
              </div>
            </div>


            <div className="contact-info-card">
              <div className="contact-icon">
                <Phone size={19} />
              </div>

              <div>
                <h3>Call Us</h3>

                <a href="tel:+919779485868">
                  +91 97794 85868
                </a>
              </div>
            </div>


            <div className="contact-info-card">
              <div className="contact-icon">
                <Mail size={19} />
              </div>

              <div>
                <h3>Email Us</h3>

                <a href="mailto:info@triodentdentalclinic.com">
                  info@triodentdentalclinic.com
                </a>
              </div>
            </div>


            <div className="contact-info-card">
              <div className="contact-icon">
                <Clock3 size={19} />
              </div>

              <div>
                <h3>Clinic Hours</h3>

                <p>
                  Please contact the clinic
                  <br />
                  for current consultation timings.
                </p>
              </div>
            </div>

          </div>


          {/* MAP PLACEHOLDER */}
          <div className="contact-map">

            <div className="contact-map-overlay">

              <div className="contact-map-pin">
                <MapPin size={25} />
              </div>

              <h3>
                Trio Dent Dental Clinic
              </h3>

              <p>
                Rajahmundry, Andhra Pradesh
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Trio%20Dent%20Dental%20Clinic%20Rajahmundry"
                target="_blank"
                rel="noreferrer"
                className="contact-map-button"
              >
                Get Directions
                <ArrowRight size={14} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;