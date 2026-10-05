

// // import { Phone, MapPin } from "lucide-react";
// // import { FaWhatsapp, FaInstagram } from "react-icons/fa";

// // import "../styles/floating-contact.css";

// // function FloatingContact() {
// //   return (
// //     <div className="floating-contact">

// //       {/* Instagram */}
// //       <a
// //         href="https://www.instagram.com/triodent_dental/"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="floating-button instagram"
// //         aria-label="Visit Trio Dent Instagram"
// //       >
// //         <FaInstagram size={24} />
// //         <span>Instagram</span>
// //       </a>


// //       {/* WhatsApp */}
// //       <a
// //         href="https://wa.me/919779485868"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="floating-button whatsapp"
// //         aria-label="Chat on WhatsApp"
// //       >
// //         <FaWhatsapp size={26} />
// //         <span>WhatsApp</span>
// //       </a>


// //       {/* Call */}
// //       <a
// //         href="tel:+919779485868"
// //         className="floating-button call"
// //         aria-label="Call Trio Dent Dental Clinic"
// //       >
// //         <Phone size={22} />
// //         <span>Call Us</span>
// //       </a>


// //       {/* Location */}
// //       <a
// //         href="https://www.google.com/maps/search/?api=1&query=Trio+Dent+Dental+Clinic+Rajahmundry+Andhra+Pradesh"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="floating-button location"
// //         aria-label="Find Trio Dent Dental Clinic on Google Maps"
// //       >
// //         <MapPin size={22} />
// //         <span>Location</span>
// //       </a>

// //     </div>
// //   );
// // }

// // export default FloatingContact;

// import { useState } from "react";

// import { Phone, MapPin, X } from "lucide-react";
// import { FaWhatsapp, FaInstagram } from "react-icons/fa";

// import "../styles/floating-contact.css";

// function FloatingContact() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleContact = () => {
//     setIsOpen((previous) => !previous);
//   };

//   return (
//     <div className={`floating-contact ${isOpen ? "open" : ""}`}>

//       {/* Contact Options */}
//       <div className="floating-contact-options">

//         {/* Instagram */}
//         <a
//           href="https://www.instagram.com/triodent_dental/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="floating-button instagram"
//           aria-label="Visit Trio Dent Instagram"
//         >
//           <FaInstagram size={23} />
//           <span>Instagram</span>
//         </a>

//         {/* WhatsApp */}
//         <a
//           href="https://wa.me/919779485868"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="floating-button whatsapp"
//           aria-label="Chat on WhatsApp"
//         >
//           <FaWhatsapp size={25} />
//           <span>WhatsApp</span>
//         </a>

//         {/* Call */}
//         <a
//           href="tel:+919779485868"
//           className="floating-button call"
//           aria-label="Call Trio Dent Dental Clinic"
//         >
//           <Phone size={21} />
//           <span>Call Us</span>
//         </a>

//         {/* Location */}
//         <a
//           href="https://www.google.com/maps/search/?api=1&query=Trio+Dent+Dental+Clinic+Rajahmundry+Andhra+Pradesh"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="floating-button location"
//           aria-label="Find Trio Dent Dental Clinic on Google Maps"
//         >
//           <MapPin size={21} />
//           <span>Location</span>
//         </a>

//       </div>

//       {/* Main Tooth Button */}
//       <button
//         type="button"
//         className="floating-main-button"
//         onClick={toggleContact}
//         aria-label={isOpen ? "Close contact options" : "Open contact options"}
//         aria-expanded={isOpen}
//       >
//         {isOpen ? (
//           <X size={27} />
//         ) : (
//           <span className="floating-tooth">🦷</span>
//         )}
//       </button>

//     </div>
//   );
// }

// export default FloatingContact;
import { useState } from "react";

import { Phone, MapPin, X } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import "../styles/floating-contact.css";

function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContact = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <div className={`floating-contact ${isOpen ? "open" : ""}`}>

      {/* =========================================
          CONTACT OPTIONS
      ========================================= */}
      <div className="floating-contact-options">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/triodent_dental/"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-button instagram"
          aria-label="Visit Trio Dent Instagram"
        >
          <FaInstagram size={23} />
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
          <FaWhatsapp size={25} />
          <span>WhatsApp</span>
        </a>


        {/* Call */}
        <a
          href="tel:+919779485868"
          className="floating-button call"
          aria-label="Call Trio Dent Dental Clinic"
        >
          <Phone size={21} />
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
          <MapPin size={21} />
          <span>Location</span>
        </a>

      </div>


      {/* =========================================
          MAIN COMBINED BUTTON
      ========================================= */}
      <button
        type="button"
        className="floating-main-button"
        onClick={toggleContact}
        aria-label={
          isOpen
            ? "Close contact options"
            : "Open contact options"
        }
        aria-expanded={isOpen}
      >

        {isOpen ? (
          <X className="main-close-icon" size={27} />
        ) : (
          <div className="combined-contact-icons">

            {/* Instagram */}
            <div className="combined-icon instagram-icon">
              <FaInstagram />
            </div>

            {/* WhatsApp */}
            <div className="combined-icon whatsapp-icon">
              <FaWhatsapp />
            </div>

            {/* Call */}
            <div className="combined-icon call-icon">
              <Phone />
            </div>

            {/* Location */}
            <div className="combined-icon location-icon">
              <MapPin />
            </div>

          </div>
        )}

      </button>


      {/* =========================================
          HINT MESSAGE
      ========================================= */}
      {!isOpen && (
        <div className="floating-hint">
          
        </div>
      )}

    </div>
  );
}

export default FloatingContact;