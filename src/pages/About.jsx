import {
  Check,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/about-page.css";

function About() {
  const values = [
    {
      icon: <Heart size={22} />,
      title: "Patient First",
      description:
        "Every treatment begins with understanding the patient's needs, concerns, and expectations.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Trusted Care",
      description:
        "We focus on clear communication, careful treatment planning, and a comfortable dental experience.",
    },
    {
      icon: <Sparkles size={22} />,
      title: "Modern Approach",
      description:
        "Our approach combines contemporary dental techniques with personalized attention.",
    },
    {
      icon: <Users size={22} />,
      title: "Personalized Treatment",
      description:
        "Every smile is different, so treatment is planned according to each patient's individual needs.",
    },
  ];

  const reasons = [
    "Personalized dental treatment",
    "Modern clinical environment",
    "Comfort-focused patient care",
    "Clear treatment communication",
    "Experienced dental professionals",
    "Focus on long-term oral health",
  ];

  return (
    <>
      <Navbar />

      <main>

        {/* ABOUT HERO */}

        <section className="about-page-hero">

          <div className="about-page-hero-container">

            <div className="about-page-hero-content">

              <p className="about-page-label">
                ABOUT TRIO DENT
              </p>

              <h1>
                Dentistry With
                <span>A Personal Touch</span>
              </h1>

              <p>
                Discover a modern approach to dental care where
                advanced treatment, comfort, and personalized
                attention come together.
              </p>

            </div>

            <div className="about-page-hero-image">

              <img
                src="/images/certificate.png"
                alt="Trio Dent dental clinic"
              />

            </div>

          </div>

        </section>


        {/* WHO WE ARE */}

        <section className="about-who-section">

          <div className="about-who-container">

            <div className="about-who-image">

              <img
                src="/images/ment.png"
                alt="Trio Dent clinic"
              />

              <div className="about-experience-card">

                <strong>Trio Dent</strong>

                <span>
                  Modern Dental Care
                </span>

              </div>

            </div>


            <div className="about-who-content">

              <p className="about-page-small-title">
                WHO WE ARE
              </p>

              <h2>
                More Than
                <span>Just Dental Care</span>
              </h2>

              <p>
                At Trio Dent, we believe that dental care should
                be comfortable, transparent, and personalized.
                Our goal is to create a welcoming environment
                where patients feel confident about their
                treatment journey.
              </p>

              <p>
                From routine dental care to specialized
                treatments, our approach focuses on understanding
                each patient's needs and providing appropriate
                treatment with attention to comfort and quality.
              </p>


              <div className="about-check-list">

                {reasons.map((reason, index) => (
                  <div
                    className="about-check-item"
                    key={index}
                  >

                    <div className="about-check-icon">
                      <Check size={13} />
                    </div>

                    <span>{reason}</span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* PHILOSOPHY */}

        <section className="about-philosophy-section">

          <div className="about-philosophy-container">

            <div className="about-philosophy-header">

              <p className="about-page-small-title">
                OUR PHILOSOPHY
              </p>

              <h2>
                Care That Begins
                <span>With Understanding</span>
              </h2>

              <p>
                We believe good dentistry is not only about
                treatment. It is also about listening,
                explaining, and creating a comfortable experience
                for every patient.
              </p>

            </div>


            <div className="about-values-grid">

              {values.map((value, index) => (
                <div
                  className="about-value-card"
                  key={index}
                >

                  <div className="about-value-icon">
                    {value.icon}
                  </div>

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* MODERN CARE */}

        <section className="about-modern-section">

          <div className="about-modern-container">

            <div className="about-modern-content">

              <p className="about-page-small-title">
                MODERN DENTAL CARE
              </p>

              <h2>
                Technology Meets
                <span>Personalized Care</span>
              </h2>

              <p>
                A comfortable dental experience starts with the
                right environment. Our approach focuses on
                combining modern dental practices with
                personalized attention.
              </p>

              <div className="about-modern-points">

                <div>
                  <Check size={15} />
                  <span>Comfort-focused treatment</span>
                </div>

                <div>
                  <Check size={15} />
                  <span>Personalized treatment planning</span>
                </div>

                <div>
                  <Check size={15} />
                  <span>Clear patient communication</span>
                </div>

              </div>

              <a
                href="/#appointment"
                className="about-page-button"
              >
                Book an Appointment
                <ArrowRight size={15} />
              </a>

            </div>


            <div className="about-modern-image">

              <img
                src="/images/image3.png"
                alt="Modern dental treatment environment"
              />

              <div className="about-modern-accent"></div>

            </div>

          </div>

        </section>


        {/* CTA */}

        <section className="about-cta-section">

          <div className="about-cta-container">

            <div>

              <p>
                READY TO TAKE THE NEXT STEP?
              </p>

              <h2>
                Your Smile Deserves
                <span>Personalized Care</span>
              </h2>

            </div>

            <a
              href="/#appointment"
              className="about-cta-button"
            >
              Book Appointment
              <ArrowRight size={15} />
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;