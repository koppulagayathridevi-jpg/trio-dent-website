import { ArrowRight, Check } from "lucide-react";
import "../styles/about.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* IMAGE */}
        <div className="about-image-area">

          <div className="about-image-frame">
            <img
              src="/images/image2.png"
              alt="Trio Dent dental clinic"
            />
          </div>

          <div className="about-image-accent"></div>

        </div>


        {/* CONTENT */}
        <div className="about-content">

          <p className="about-small-title">
            ABOUT TRIO DENT
          </p>

          <h2>
            Modern Dentistry
            <span>With Personalized Care</span>
          </h2>

          <p className="about-description">
            At Trio Dent, we focus on providing comfortable,
            personalized dental care using modern techniques
            and technology. Our approach is centered around
            understanding every patient's needs and creating
            a comfortable treatment experience.
          </p>


          {/* FEATURES */}
          <div className="about-features">

            <div className="about-feature">
              <div className="about-check">
                <Check size={14} />
              </div>

              <span>
                Advanced Dental Technology
              </span>
            </div>


            <div className="about-feature">
              <div className="about-check">
                <Check size={14} />
              </div>

              <span>
                Experienced Dental Specialists
              </span>
            </div>


            <div className="about-feature">
              <div className="about-check">
                <Check size={14} />
              </div>

              <span>
                Personalized Treatment Plans
              </span>
            </div>


            <div className="about-feature">
              <div className="about-check">
                <Check size={14} />
              </div>

              <span>
                Comfortable Patient Experience
              </span>
            </div>

          </div>


          <a
            href="/contact"
            className="about-button"
          >
            Learn More
            <ArrowRight size={15} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;