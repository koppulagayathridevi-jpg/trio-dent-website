

import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import "../styles/floating-contact.css";

function FloatingContact() {
  return (
    <div className="floating-contact">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/triodent_dental/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button instagram"
        aria-label="Visit Trio Dent Instagram"
      >
        <FaInstagram size={24} />
        <span>Instagram</span>
      </a>


      {/* WhatsApp */}
      <a
        href="https://wa.me/919779485868"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
        <span>WhatsApp</span>
      </a>


      {/* Call */}
      <a
        href="tel:+919779485868"
        className="floating-button call"
        aria-label="Call Trio Dent Dental Clinic"
      >
        <Phone size={22} />
        <span>Call Us</span>
      </a>


      {/* Location */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Trio+Dent+Dental+Clinic+Rajahmundry+Andhra+Pradesh"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button location"
        aria-label="Find Trio Dent Dental Clinic on Google Maps"
      >
        <MapPin size={22} />
        <span>Location</span>
      </a>

    </div>
  );
}

export default FloatingContact;