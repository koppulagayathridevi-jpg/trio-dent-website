

import {
  CircleDot,
  HeartPulse,
  Stethoscope,
  Sparkles,
  Smile,
  Activity,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import "../styles/services.css";

function ServicesSection() {
  const services = [
    {
      icon: <CircleDot size={25} />,
      title: "Dental Implants",
      description:
        "Dental implant solutions designed to restore missing teeth and support a natural-looking smile.",
    },
    {
      icon: <HeartPulse size={25} />,
      title: "Root Canal Treatment",
      description:
        "Comfort-focused treatment for damaged or infected teeth while helping preserve natural teeth.",
    },
    {
      icon: <Stethoscope size={25} />,
      title: "Teeth Braces and Aligners",
      description:
        "Braces and aligner treatments designed to improve tooth alignment and smile appearance.",
    },
    {
      icon: <Sparkles size={25} />,
      title: "Veneers",
      description:
        "Veneer treatments designed to enhance the appearance and overall look of your smile.",
    },
    {
      icon: <Smile size={25} />,
      title: "Smile Designing",
      description:
        "Personalized smile designing focused on creating a more balanced and confident smile.",
    },
    {
      icon: <Activity size={25} />,
      title: "Loose Teeth & Bleeding Gums",
      description:
        "Dental care focused on loose teeth, bleeding gums, and healthier gums and supporting tissues.",
    },
  ];

  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="services-header">

          <p className="services-small-title">
            OUR SERVICES
          </p>

          <h2>
            Complete Care For
            <span>Your Smile</span>
          </h2>

          <p className="services-intro">
            Explore our range of dental treatments designed to
            support your oral health, restore dental function,
            and enhance your smile.
          </p>

        </div>


        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        <div className="services-grid">

          {services.map((service, index) => (

            <article
              className="service-card"
              key={service.title}
            >

              <div className="service-icon">
                {service.icon}
              </div>


              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              <h3>
                {service.title}
              </h3>


              <p>
                {service.description}
              </p>


              <Link
                to="/services"
                className="service-link"
              >
                Learn More
                <ArrowRight size={14} />
              </Link>

            </article>

          ))}

        </div>


        {/* =====================================================
            BOTTOM BUTTON
        ===================================================== */}

        <div className="services-button-wrapper">

          <Link
            to="/services"
            className="services-all-button"
          >
            View All Services
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;