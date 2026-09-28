import { ArrowRight, Award, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/doctors.css";

function DoctorsSection() {
  const doctors = [
    {
      image: "/images/doctor-1.jpg",
      name: "Dr. Jaya Bharathi",
      specialization: "Conservative Dentistry & Endodontics",
      expertise:
        "Aesthetics, Veneers, RCT and Endodontic Surgeries",
    },
    {
      image: "/images/doctor-2.jpg",
      name: "Dr. Pavan Kumar",
      specialization: "Orthodontics & Dentofacial Orthopedics",
      expertise: "Braces and Aligners",
    },
    {
      image: "/images/doctor-3.jpg",
      name: "Dr. Sowparnica",
      specialization: "Periodontology",
      expertise:
        "Periodontal Plastic Surgeries and LASER Periodontal Therapy",
    },
    {
      image: "/images/doctor-4.jpg",
      name: "Dr. Harika",
      specialization: "Pediatric Dentistry",
      expertise: "Child Care and Management",
    },
    {
      image: "/images/doctor-5.jpg",
      name: "Dr. Bharathi Ram",
      specialization: "Oral & Maxillofacial Surgery",
      expertise: "Maxillofacial Trauma and Impactions",
    },
    {
      image: "/images/doctor-6.jpg",
      name: "Dr. Koteswararao",
      specialization: "Prosthodontics & Oral Implantology",
      expertise: "Dentures and Full Mouth Rehabilitation",
    },
    {
      image: "/images/doctor-7.jpg",
      name: "Dr. Goutham",
      specialization: "Prosthodontics & Oral Implantology",
      expertise: "Dental Implants and Full Mouth Rehabilitation",
    },
  ];

  return (
    <section className="doctors-section" id="doctors">
      <div className="doctors-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="doctors-header">

          <p className="doctors-small-title">
            MEET OUR DENTISTS
          </p>

          <h2>
            Experienced Care
            <span>For Your Smile</span>
          </h2>

          <p className="doctors-intro">
            Meet our team of dental specialists dedicated to
            providing specialized care with a patient-focused
            approach.
          </p>

        </div>

        {/* =========================
            DOCTOR CARDS
        ========================= */}

        <div className="doctors-grid">

          {doctors.map((doctor, index) => (

            <article
              className="doctor-card"
              key={doctor.name}
            >

              {/* IMAGE */}

              <div className="doctor-image">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                />

                <div className="doctor-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="doctor-image-overlay">

                  <Link to="/doctors">
                    View Profile
                    <ArrowRight size={13} />
                  </Link>

                </div>

              </div>

              {/* CONTENT */}

              <div className="doctor-content">

                <div className="doctor-icon">
                  <Award size={16} />
                </div>

                <div className="doctor-details">

                  <p className="doctor-label">
                    DENTAL SPECIALIST
                  </p>

                  <h3>
                    {doctor.name}
                  </h3>

                  <div className="doctor-specialization">

                    <Stethoscope size={13} />

                    <span>
                      {doctor.specialization}
                    </span>

                  </div>

                  <p className="doctor-expertise">
                    {doctor.expertise}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* =========================
            BUTTON
        ========================= */}

        <div className="doctors-button-wrapper">

          <Link
            to="/doctors"
            className="doctors-button"
          >
            Meet Our Full Team

            <ArrowRight size={15} />

          </Link>

        </div>

      </div>
    </section>
  );
}

export default DoctorsSection;