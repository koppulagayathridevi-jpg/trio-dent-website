import {
  Award,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/doctors-page.css";

function Doctors() {

  const doctors = [
    {
      image: "/images/doctor-1.jpg",
      name: "Dr. Jaya Bharathi",
      role: "Conservative Dentistry & Endodontics",
      expertise:
        "Aesthetics, Veneers, RCT and Endodontic Surgeries",
      department:
        "Department of Conservative Dentistry & Endodontics",
    },

    {
      image: "/images/doctor-2.jpg",
      name: "Dr. Pavan Kumar",
      role: "Orthodontics & Dentofacial Orthopedics",
      expertise:
        "Braces and Aligners",
      department:
        "Department of Orthodontics & Dentofacial Orthopedics",
      position:
        "Professor & HOD, LIDS",
    },

    {
      image: "/images/doctor-3.jpg",
      name: "Dr. Sowparnica",
      role: "Periodontology",
      expertise:
        "Periodontal Plastic Surgeries and LASER Periodontal Therapy",
      department:
        "Department of Periodontology",
    },

    {
      image: "/images/doctor-4.jpg",
      name: "Dr. Harika",
      role: "Pediatric Dentistry",
      expertise:
        "Child Care and Management",
      department:
        "Department of Pediatric Dentistry",
    },

    {
      image: "/images/doctor-5.jpg",
      name: "Dr. Bharathi Ram",
      role: "Oral & Maxillofacial Surgery",
      expertise:
        "Maxillofacial Trauma and Impactions",
      department:
        "Department of Oral & Maxillofacial Surgery",
    },

    {
      image: "/images/doctor-6.jpg",
      name: "Dr. Koteswararao",
      role: "Prosthodontics & Oral Implantology",
      expertise:
        "Dentures and Full Mouth Rehabilitation",
      department:
        "Department of Prosthodontics & Oral Implantology",
    },

    {
      image: "/images/doctor-7.jpg",
      name: "Dr. Goutham",
      role: "Prosthodontics & Oral Implantology",
      expertise:
        "Dental Implants and Full Mouth Rehabilitation",
      department:
        "Department of Prosthodontics & Oral Implantology",
    },
  ];


  const approach = [
    {
      icon: <GraduationCap size={20} />,
      title: "Specialized Expertise",
      description:
        "Our team brings specialized knowledge across multiple areas of dentistry to support comprehensive patient care.",
    },

    {
      icon: <CheckCircle2 size={20} />,
      title: "Patient-Centered Care",
      description:
        "We focus on understanding each patient's concerns and providing clear, personalized treatment guidance.",
    },

    {
      icon: <Award size={20} />,
      title: "Comprehensive Treatment",
      description:
        "Our multidisciplinary approach allows patients to access different areas of dental expertise in one clinical environment.",
    },
  ];


  return (
    <>
      <Navbar />

      <main>

        {/* =========================================
            HERO
        ========================================= */}

        <section className="doctors-page-hero">

          <div className="doctors-page-hero-container">

            <div className="doctors-page-hero-content">

              <p className="doctors-page-label">
                MEET OUR DENTAL TEAM
              </p>

              <h1>
                Experienced Care
                <span>For Your Smile</span>
              </h1>

              <p>
                Meet our team of dental specialists dedicated
                to providing specialized care with a
                patient-focused approach.
              </p>

              <a
                href="/appointment"
                className="doctors-page-hero-button"
              >
                Book a Consultation
                <CalendarDays size={15} />
              </a>

            </div>


            <div className="doctors-page-hero-image">

              <img
                src="/images/ment.png"
                alt="Trio Dent dental professional"
              />

              <div className="doctors-page-hero-card">

                <div className="doctors-page-hero-icon">
                  <Award size={18} />
                </div>

                <div>

                  <strong>
                    Specialized Dental Care
                  </strong>

                  <span>
                    Expertise across multiple specialties
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            DOCTORS
        ========================================= */}

        <section className="doctors-page-team">

          <div className="doctors-page-container">

            <div className="doctors-page-header">

              <p className="doctors-page-small-title">
                OUR DENTISTS
              </p>

              <h2>
                Meet The
                <span>Trio Dent Team</span>
              </h2>

              <p>
                Our dental specialists bring expertise across
                different areas of dentistry, helping provide
                comprehensive care for a wide range of dental needs.
              </p>

            </div>


            <div className="doctors-page-grid">

              {doctors.map((doctor, index) => (

                <article
                  className="doctors-page-card"
                  key={doctor.name}
                >

                  {/* IMAGE */}

                  <div className="doctors-page-card-image">

                    <img
                      src={doctor.image}
                      alt={doctor.name}
                    />

                    <div className="doctors-page-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="doctors-page-card-content">

                    <p className="doctors-page-card-role">
                      {doctor.role}
                    </p>

                    <h3>
                      {doctor.name}
                    </h3>


                    {/* Expertise */}

                    <div className="doctors-page-info">

                      <div className="doctors-page-info-label">

                        <Stethoscope size={14} />

                        <span>
                          EXPERTISE
                        </span>

                      </div>

                      <p>
                        {doctor.expertise}
                      </p>

                    </div>


                    {/* Department */}

                    <div className="doctors-page-info">

                      <div className="doctors-page-info-label">

                        <GraduationCap size={14} />

                        <span>
                          DEPARTMENT
                        </span>

                      </div>

                      <p>
                        {doctor.department}
                      </p>

                    </div>


                    {/* Position */}

                    {doctor.position && (
                      <div className="doctors-page-position">

                        {doctor.position}

                      </div>
                    )}


                    {/* Appointment */}

                    <a
                      href="/appointment"
                      className="doctors-page-card-button"
                    >

                      Book Consultation

                      <ArrowRight size={14} />

                    </a>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================
            OUR APPROACH
        ========================================= */}

        <section className="doctors-page-approach">

          <div className="doctors-page-approach-container">

            <div className="doctors-page-approach-image">

              <img
                src="/images/image2.png"
                alt="Modern Trio Dent dental clinic"
              />

            </div>


            <div className="doctors-page-approach-content">

              <p className="doctors-page-small-title">
                OUR APPROACH
              </p>

              <h2>
                Dentistry Built
                <span>Around You</span>
              </h2>

              <p>
                Good dental care begins with understanding the
                patient. Our approach focuses on communication,
                careful treatment planning, and creating a
                comfortable experience throughout your visit.
              </p>


              <div className="doctors-page-approach-list">

                {approach.map((item, index) => (

                  <div
                    className="doctors-page-approach-item"
                    key={index}
                  >

                    <div className="doctors-page-approach-icon">
                      {item.icon}
                    </div>

                    <div>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            CTA
        ========================================= */}

        <section className="doctors-page-cta">

          <div className="doctors-page-cta-container">

            <div>

              <p>
                READY TO MEET YOUR DENTAL TEAM?
              </p>

              <h2>
                Take The First Step
                <span>Toward A Healthier Smile</span>
              </h2>

            </div>


            <a
              href="/appointment"
              className="doctors-page-cta-button"
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

export default Doctors;