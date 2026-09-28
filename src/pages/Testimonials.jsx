import {
  Quote,
  Star,
  ArrowRight,
  Heart,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/testimonials-page.css";

const testimonials = [
  {
    name: "Nag K",
    treatment: "Teeth Extraction, Root Canal & Crowns",
    text:
      "I was here for my teeth extraction and root Canal treatment. And perfectly fixed set of 4 crowns. Mam explained the procedure in detail well and treatment was very good. With painlessly, impressed with their work and hospitality they do follow up after the treatment. Cost is afforadable. I highly recommend Triodent.",
  },
  {
    name: "Bandaru Sudhakar Babu",
    treatment: "Dental Care",
    text:
      "I had a fantastic experience at Triodent Dental clinic at Rajahmundry. The staff was incredibly friendly and professional, and the facility was clean and modern. The dentist was skilled and took the time to explain everything thoroughly. I felt comfortable throughout my visit and would highly recommend this clinic for top-notch dental care!",
  },
  {
    name: "Bhaskar Reddy",
    treatment: "Dental Health Care",
    text:
      "Choosing Triodent Dental Clinic was one of the best decisions I've made for my dental health. The expertise and compassion of the staff are truly commendable.",
  },

  // Additional testimonials
  {
    name: "Ananya Reddy",
    treatment: "Root Canal Treatment",
    text:
      "The doctors explained my treatment clearly and made me feel comfortable throughout the entire process. The clinic was clean, welcoming, and professional.",
  },
  {
    name: "Rahul Kumar",
    treatment: "Dental Implant Treatment",
    text:
      "I had a very good experience at the clinic. The team was friendly and professional, and every step of the treatment was explained properly.",
  },
  {
    name: "Priya Sharma",
    treatment: "Smile & Aesthetic Dentistry",
    text:
      "The staff were very caring and attentive. I appreciated the comfortable environment and the time the doctors took to understand my concerns.",
  },
  {
    name: "Vikram Rao",
    treatment: "Orthodontic Treatment",
    text:
      "The doctors were patient and answered all my questions. The overall experience was smooth, comfortable, and well organized.",
  },
  {
    name: "Sneha Reddy",
    treatment: "General Dental Care",
    text:
      "From consultation to treatment, everyone was friendly and helpful. I felt comfortable throughout my visit and received clear guidance.",
  },
  {
    name: "Arjun Varma",
    treatment: "Full Mouth Rehabilitation",
    text:
      "The treatment plan was explained in a simple way and the team made sure I understood everything before proceeding with the treatment.",
  },
];
function Testimonials() {
  return (
    <>
      <Navbar />

      <main className="testimonials-page">

        {/* =========================================
            HERO BANNER
        ========================================= */}

        <section className="testimonials-hero">

          <div className="testimonials-hero-overlay"></div>

          <div className="testimonials-hero-container">

            <div className="testimonials-hero-content">

              <span className="page-eyebrow">
                PATIENT EXPERIENCES
              </span>

              <h1>
                Smiles That Speak
                <span>For Themselves</span>
              </h1>

              <p>
                Discover what patients have shared about
                their experience with dental care at Trio Dent.
              </p>

              <div className="testimonials-hero-actions">

                <Link
                  to="/appointment"
                  className="testimonials-hero-button"
                >
                  Book an Appointment
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/contact"
                  className="testimonials-hero-secondary"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

          <div className="testimonials-hero-bottom">
            <div className="hero-trust-item">
              <Heart size={15} />
              <span>Patient-Centered Care</span>
            </div>

            <div className="hero-trust-line"></div>

            <div className="hero-trust-item">
              <MessageCircle size={15} />
              <span>Comfortable Experience</span>
            </div>
          </div>

        </section>


        {/* =========================================
            INTRO
        ========================================= */}

        <section className="testimonials-intro-section">

          <div className="testimonials-page-container">

            <div className="section-heading">

              <span className="section-eyebrow">
                PATIENT STORIES
              </span>

              <h2>
                Care That Leaves
                <span>A Lasting Impression</span>
              </h2>

              <p>
  Hear directly from our patients about their
  experiences with Trio Dent Dental Clinic and
  the care they received.
</p>

            </div>

          </div>

        </section>


        {/* =========================================
            TESTIMONIAL CARDS
        ========================================= */}

        <section className="testimonials-list">

          <div className="testimonials-page-container">

            <div className="testimonials-page-grid">

              {testimonials.map((item, index) => (

                <article
                  className="testimonial-page-card"
                  key={item.name}
                >

                  <div className="testimonial-page-top">

                    <div className="testimonial-page-quote">
                      <Quote size={20} />
                    </div>

                    <div className="testimonial-page-stars">

                      {[1, 2, 3, 4, 5].map((star) => (

                        <Star
                          key={star}
                          size={13}
                          fill="currentColor"
                        />

                      ))}

                    </div>

                  </div>


                  <span className="testimonial-page-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  <p className="testimonial-page-text">
                    “{item.text}”
                  </p>


                  <div className="testimonial-page-author">

                    <div className="testimonial-page-avatar">
                      {item.name.charAt(0)}
                    </div>

                    <div className="testimonial-page-author-info">

                      <h3>
                        {item.name}
                      </h3>

                      <span>
                        {item.treatment}
                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================
            EXPERIENCE SECTION
        ========================================= */}

        <section className="testimonial-experience">

          <div className="testimonial-experience-container">

            <div className="testimonial-experience-image">

              <img
                src="/images/image2.png"
                alt="Trio Dent Dental Clinic"
              />

              <div className="testimonial-experience-badge">

                <div className="testimonial-badge-icon">
                  <Heart size={17} />
                </div>

                <div>
                  <strong>Patient-Centered Care</strong>
                  <span>Comfort at every visit</span>
                </div>

              </div>

            </div>


            <div className="testimonial-experience-content">

              <span className="section-eyebrow">
                YOUR EXPERIENCE MATTERS
              </span>

              <h2>
                Your Comfort Is
                <span>Our Priority</span>
              </h2>

              <p>
                From your first consultation to your follow-up
                care, we aim to make every visit comfortable,
                clear, and personalized around your dental needs.
              </p>


              <div className="testimonial-experience-features">

                <div className="testimonial-feature">
                  <CheckCircle2 size={16} />
                  <span>Clear treatment guidance</span>
                </div>

                <div className="testimonial-feature">
                  <CheckCircle2 size={16} />
                  <span>Comfort-focused environment</span>
                </div>

                <div className="testimonial-feature">
                  <CheckCircle2 size={16} />
                  <span>Personalized dental care</span>
                </div>

              </div>


              <Link
                to="/appointment"
                className="testimonial-button"
              >
                Book an Appointment
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

        </section>


        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="testimonials-final-cta">

          <div className="testimonials-final-cta-container">

            <div>

              <span className="section-eyebrow">
                START YOUR JOURNEY
              </span>

              <h2>
                Ready For Your
                <span>Next Smile?</span>
              </h2>

              <p>
                Schedule a consultation with the Trio Dent
                dental team and take the next step toward
                better dental health.
              </p>

            </div>

            <Link
              to="/appointment"
              className="testimonials-final-button"
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

export default Testimonials;