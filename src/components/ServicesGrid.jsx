// import {
//   CircleDot,
//   Sparkles,
//   Activity,
//   Braces,
//   Smile,
//   ScanSearch,
//   HeartPulse,
//   Scissors,
//   ArrowRight,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// import "../styles/services-grid.css";

// const services = [
//   {
//     id: 1,
//     title: "Dental Implants",
//     description:
//       "Permanent, natural-looking teeth with advanced implant solutions.",
//     icon: CircleDot,
//   },
//   {
//     id: 2,
//     title: "Smile Designing",
//     description:
//       "Custom smile makeovers designed for aesthetics and confidence.",
//     icon: Sparkles,
//   },
//   {
//     id: 3,
//     title: "Root Canal Treatment",
//     description:
//       "Painless root canal treatment with modern techniques to save the tooth.",
//     icon: Activity,
//   },
//   {
//     id: 4,
//     title: "Braces & Aligners",
//     description:
//       "Clear aligners and braces designed to straighten teeth comfortably.",
//     icon: Braces,
//   },
//   {
//     id: 5,
//     title: "Full Mouth Rehabilitation",
//     description:
//       "Complete dental restoration for improved function, health, and aesthetics.",
//     icon: Smile,
//   },
//   {
//     id: 6,
//     title: "Crowns & Bridges",
//     description:
//       "Restore damaged or missing teeth with natural-looking dental restorations.",
//     icon: ScanSearch,
//   },
//   {
//     id: 7,
//     title: "Gum Treatment",
//     description:
//       "Care focused on gum health, smile harmony, and long-term oral wellness.",
//     icon: HeartPulse,
//   },
//   {
//     id: 8,
//     title: "Oral Surgical Care",
//     description:
//       "Safe tooth extraction and surgical procedures performed with comfort and precision.",
//     icon: Scissors,
//   },
// ];

// function ServicesGrid() {
//   return (
//     <section className="services-grid-section">
//       <div className="services-grid-container">

//         {/* Section Heading */}
//         <div className="services-grid-heading">
//           <span className="services-grid-eyebrow">
//             OUR SPECIALIZED CARE
//           </span>

//           <h2>
//             Advanced Care for
//             <span> Every Smile</span>
//           </h2>

//           <p>
//             Comprehensive dental treatments designed with modern
//             technology, precision, and personalized care.
//           </p>
//         </div>

//         {/* Services */}
//         <div className="services-grid">

//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 className="service-card"
//                 key={service.id}
//                 style={{
//                   "--card-delay": `${index * 0.1}s`,
//                 }}
//               >
//                 {/* Animated top border */}
//                 <div className="service-card-top-line" />

//                 {/* Icon */}
//                 <div className="service-card-icon">
//                   <Icon size={48} strokeWidth={1.5} />
//                 </div>

//                 {/* Content */}
//                 <div className="service-card-content">
//                   <h3>{service.title}</h3>

//                   <p>{service.description}</p>
//                 </div>

//                 {/* Book Consultation */}
//                 <Link
//                   to="/appointment"
//                   className="service-card-link"
//                 >
//                   <span>Book Consultation</span>

//                   <ArrowRight
//                     size={19}
//                     strokeWidth={2.5}
//                   />
//                 </Link>

//                 {/* Bottom glow */}
//                 <div className="service-card-glow" />
//               </article>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServicesGrid;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/services-grid.css";

const services = [
  {
    id: 1,
    title: "Invisalign Aligners",
    description:
      "Clear and comfortable aligners designed to straighten your teeth discreetly.",
    image: "/images/trio_dent_tooth_icons/invisalign-aligners.png",
  },
  {
    id: 2,
    title: "Dental Implants",
    description:
      "Permanent, natural-looking teeth with advanced implant solutions.",
    image: "/images/trio_dent_tooth_icons/dental-implants.png",
  },
  {
    id: 3,
    title: "Partha Aligners",
    description:
      "Comfortable modern aligners designed for a straighter and healthier smile.",
    image: "/images/trio_dent_tooth_icons/partha-aligners.png",
  },
  {
    id: 4,
    title: "Kids Dentistry",
    description:
      "Gentle and friendly dental care specially designed for children.",
    image: "/images/trio_dent_tooth_icons/kids-dentistry.png",
  },
  {
    id: 5,
    title: "Smile Makeover",
    description:
      "Custom smile makeovers designed to enhance your smile and confidence.",
    image: "/images/trio_dent_tooth_icons/smile-makeover.png",
  },
  {
    id: 6,
    title: "Root Canal",
    description:
      "Modern root canal treatment focused on saving your natural tooth.",
    image: "/images/trio_dent_tooth_icons/root-canal.png",
  },
  {
    id: 7,
    title: "Laser Dentistry",
    description:
      "Modern laser treatments for comfortable and precise dental care.",
    image: "/images/trio_dent_tooth_icons/laser-dentistry.png",
  },
  {
    id: 8,
    title: "Dental Crowns",
    description:
      "Natural-looking crowns designed to restore damaged and weakened teeth.",
    image: "/images/trio_dent_tooth_icons/dental-crowns.png",
  },
  {
    id: 9,
    title: "Dentures",
    description:
      "Comfortable and natural-looking dentures for improved smile and function.",
    image: "/images/trio_dent_tooth_icons/dentures.png",
  },
  {
    id: 10,
    title: "Dental Braces",
    description:
      "Effective braces designed to straighten teeth and improve your bite.",
    image: "/images/trio_dent_tooth_icons/dental-braces.png",
  },
  {
    id: 11,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatment for a brighter and more confident smile.",
    image: "/images/trio_dent_tooth_icons/teeth-whitening.png",
  },
  {
    id: 12,
    title: "Tooth Decay Treatment",
    description:
      "Effective treatment to protect damaged teeth and restore oral health.",
    image: "/images/trio_dent_tooth_icons/tooth-decay.png",
  },
];

function ServicesGrid() {
  return (
    <section className="services-grid-section">
      <div className="services-grid-container">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="services-grid-heading">
          <span className="services-grid-eyebrow">
            OUR SPECIALIZED CARE
          </span>

          <h2>
            Advanced Care for
            <span> Every Smile</span>
          </h2>

          <p>
            Comprehensive dental treatments designed with modern
            technology, precision, and personalized care.
          </p>
        </div>

        {/* =========================
            SERVICES
        ========================== */}
        <div className="services-grid">

          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.id}
              style={{
                "--card-delay": `${index * 0.08}s`,
              }}
            >

              {/* Animated top line */}
              <div className="service-card-top-line" />

              {/* Dental Illustration */}
              <div className="service-card-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="service-card-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              {/* Appointment */}
              <Link
                to="/appointment"
                className="service-card-link"
              >
                <span>Book Consultation</span>

                <ArrowRight
                  size={18}
                  strokeWidth={2.5}
                />
              </Link>

              {/* Bottom glow */}
              <div className="service-card-glow" />

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;