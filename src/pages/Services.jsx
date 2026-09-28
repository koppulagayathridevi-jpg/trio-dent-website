
import {
  CircleDot,
  HeartPulse,
  Smile,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
  ScanFace,
  Activity,
  Baby,
  Crown,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/services-page.css";

function Services() {
  const services = [
    {
      icon: <CircleDot size={24} />,
      title: "Dental Implants",
      description:
        "Dental implant treatment for restoring missing teeth and supporting a natural-looking, functional smile.",
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Root Canal Treatment",
      description:
        "Root canal treatment focused on treating damaged or infected teeth while helping preserve your natural tooth.",
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Teeth Braces and Aligners",
      description:
        "Braces and aligner treatments designed to improve tooth alignment and create a healthier, more confident smile.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Veneers",
      description:
        "Veneer treatments designed to enhance the appearance of teeth and create a more refined smile.",
    },
    {
      icon: <Smile size={24} />,
      title: "Smile Designing",
      description:
        "Personalized smile designing focused on improving the appearance and overall harmony of your smile.",
    },
    {
      icon: <Activity size={24} />,
      title: "Treatment for Loose Teeth and Bleeding Gums",
      description:
        "Dental care focused on loose teeth, bleeding gums, and maintaining healthier gums and supporting tissues.",
    },
    {
      icon: <ScanFace size={24} />,
      title: "Extraction and Laser Treatments",
      description:
        "Dental extraction and laser-based treatments provided with attention to patient comfort and clinical care.",
    },
    {
      icon: <Crown size={24} />,
      title: "Dentures, Bridges and Crowns",
      description:
        "Restorative dental solutions including dentures, bridges, and crowns to restore the appearance and function of teeth.",
    },
  ];

  const benefits = [
    "Personalized treatment planning",
    "Modern dental techniques",
    "Comfort-focused treatment",
    "Clear treatment communication",
    "Experienced dental professionals",
    "Patient-centered care",
  ];

  return (
    <>
      <Navbar />

      <main className="services-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="services-page-hero">

          <div className="services-page-hero-container">

            <div className="services-page-hero-content">

              <p className="services-page-label">
                OUR DENTAL SERVICES
              </p>

              <h1>
                Complete Care
                <span>For Your Smile</span>
              </h1>

              <p>
                Discover personalized dental treatments designed
                to support your oral health, comfort, and
                confidence at every stage of your smile journey.
              </p>

              <Link
                to="/appointment"
                className="services-page-hero-button"
              >
                Book an Appointment
                <ArrowRight size={15} />
              </Link>

            </div>


            <div className="services-page-hero-image">

              <img
                src="/images/image2.png"
                alt="Trio Dent dental clinic"
              />

              <div className="services-page-image-card">

                <ShieldCheck size={20} />

                <div>
                  <strong>Personalized Care</strong>
                  <span>Focused on your smile</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="services-page-list">

          <div className="services-page-container">

            <div className="services-page-header">

              <p className="services-page-small-title">
                OUR SERVICES
              </p>

              <h2>
                Complete Dental Care
                <span>For Every Smile</span>
              </h2>

              <p>
                Explore our range of dental treatments designed
                to support your oral health, restore dental
                function, and enhance your smile.
              </p>

            </div>


            <div className="services-page-grid">

              {services.map((service, index) => (

                <article
                  className="services-page-card"
                  key={service.title}
                >

                  <div className="services-page-icon">
                    {service.icon}
                  </div>


                  <div className="services-page-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.description}
                  </p>


                  <Link
                    to="/appointment"
                    className="services-page-card-link"
                  >
                    Book Consultation
                    <ArrowRight size={14} />
                  </Link>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY CHOOSE US
        ===================================================== */}

        <section className="services-page-why">

          <div className="services-page-why-container">

            <div className="services-page-why-image">

              <img
                src="/images/gallery3.jpg"
                alt="Trio Dent dental care"
              />

            </div>


            <div className="services-page-why-content">

              <p className="services-page-small-title">
                OUR APPROACH
              </p>

              <h2>
                Care That Puts
                <span>You First</span>
              </h2>

              <p>
                Every smile is different. That's why we focus on
                understanding your concerns and creating a
                treatment approach suited to your individual
                needs.
              </p>


              <div className="services-page-benefits">

                {benefits.map((benefit, index) => (

                  <div
                    className="services-page-benefit"
                    key={index}
                  >

                    <div className="services-page-benefit-icon">
                      <ShieldCheck size={14} />
                    </div>

                    <span>
                      {benefit}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="services-page-cta">

          <div className="services-page-cta-container">

            <div>

              <p>
                READY TO CARE FOR YOUR SMILE?
              </p>

              <h2>
                Start Your Journey
                <span>To Better Dental Health</span>
              </h2>

            </div>


            <Link
              to="/appointment"
              className="services-page-cta-button"
            >
              Book Appointment
              <ArrowRight size={15} />
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Services;