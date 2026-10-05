import {
  CircleDot,
  Sparkles,
  Activity,
  Braces,
  Smile,
  ScanSearch,
  HeartPulse,
  Scissors,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import "../styles/services-grid.css";

const services = [
  {
    id: 1,
    title: "Dental Implants",
    description:
      "Permanent, natural-looking teeth with advanced implant solutions.",
    icon: CircleDot,
  },
  {
    id: 2,
    title: "Smile Designing",
    description:
      "Custom smile makeovers designed for aesthetics and confidence.",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Root Canal Treatment",
    description:
      "Painless root canal treatment with modern techniques to save the tooth.",
    icon: Activity,
  },
  {
    id: 4,
    title: "Braces & Aligners",
    description:
      "Clear aligners and braces designed to straighten teeth comfortably.",
    icon: Braces,
  },
  {
    id: 5,
    title: "Full Mouth Rehabilitation",
    description:
      "Complete dental restoration for improved function, health, and aesthetics.",
    icon: Smile,
  },
  {
    id: 6,
    title: "Crowns & Bridges",
    description:
      "Restore damaged or missing teeth with natural-looking dental restorations.",
    icon: ScanSearch,
  },
  {
    id: 7,
    title: "Gum Treatment",
    description:
      "Care focused on gum health, smile harmony, and long-term oral wellness.",
    icon: HeartPulse,
  },
  {
    id: 8,
    title: "Oral Surgical Care",
    description:
      "Safe tooth extraction and surgical procedures performed with comfort and precision.",
    icon: Scissors,
  },
];

function ServicesGrid() {
  return (
    <section className="services-grid-section">
      <div className="services-grid-container">

        {/* Section Heading */}
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

        {/* Services */}
        <div className="services-grid">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.id}
                style={{
                  "--card-delay": `${index * 0.1}s`,
                }}
              >
                {/* Animated top border */}
                <div className="service-card-top-line" />

                {/* Icon */}
                <div className="service-card-icon">
                  <Icon size={48} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="service-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                {/* Book Consultation */}
                <Link
                  to="/appointment"
                  className="service-card-link"
                >
                  <span>Book Consultation</span>

                  <ArrowRight
                    size={19}
                    strokeWidth={2.5}
                  />
                </Link>

                {/* Bottom glow */}
                <div className="service-card-glow" />
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;