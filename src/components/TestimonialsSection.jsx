

import { Quote, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/testimonials.css";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nag K",
      treatment: "Teeth Extraction, Root Canal & Crowns",
      review:
        "I was here for my teeth extraction and root Canal treatment. And perfectly fixed set of 4 crowns. Mam explained the procedure in detail well and treatment was very good. With painlessly, impressed with their work and hospitality they do follow up after the treatment. Cost is afforadable. I highly recommend Triodent.",
    },
    {
      name: "Bandaru Sudhakar Babu",
      treatment: "Dental Care",
      review:
        "I had a fantastic experience at Triodent Dental clinic at Rajahmundry. The staff was incredibly friendly and professional, and the facility was clean and modern. The dentist was skilled and took the time to explain everything thoroughly. I felt comfortable throughout my visit and would highly recommend this clinic for top-notch dental care!",
    },
    {
      name: "Bhaskar Reddy",
      treatment: "Dental Health Care",
      review:
        "Choosing Triodent Dental Clinic was one of the best decisions I've made for my dental health. The expertise and compassion of the staff are truly commendable.",
    },
  ];

  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >
      <div className="testimonials-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="testimonials-header">

          <p className="testimonials-small-title">
            HAPPY CLIENTS
          </p>

          <h2>
            What Our Patients
            <span>Say About Us</span>
          </h2>

          <p className="testimonials-intro">
            Hear directly from our patients about their
            experiences with Trio Dent Dental Clinic and
            the care they received.
          </p>

        </div>


        {/* =========================
            TESTIMONIAL CARDS
        ========================= */}

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (

            <article
              className="testimonial-card"
              key={index}
            >

              {/* TOP */}

              <div className="testimonial-top">

                <div className="testimonial-quote">
                  <Quote size={19} />
                </div>

                <div className="testimonial-stars">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      fill="currentColor"
                    />
                  ))}

                </div>

              </div>


              {/* REVIEW */}

              <p className="testimonial-review">
                "{testimonial.review}"
              </p>


              {/* PATIENT */}

              <div className="testimonial-patient">

                <div className="patient-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div className="patient-details">

                  <h3>
                    {testimonial.name}
                  </h3>

                  <p>
                    {testimonial.treatment}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =========================
            BUTTON
        ========================= */}

        <div className="testimonials-button-wrapper">

          <Link
            to="/testimonials"
            className="testimonials-button"
          >
            View All Testimonials
            <ArrowRight size={14} />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;