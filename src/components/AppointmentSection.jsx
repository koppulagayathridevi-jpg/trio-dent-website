

import { useState } from "react";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";

import "../styles/appointment.css";

function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowSuccess(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="appointment-section" id="appointment">

      <div className="appointment-container">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="appointment-info">

          <p className="appointment-small-title">
            BOOK YOUR VISIT
          </p>

          <h2>
            Your Smile
            <span>Starts Here</span>
          </h2>

          <p className="appointment-description">
            Schedule a consultation with our dental team and
            take the next step toward a healthier and more
            confident smile.
          </p>


          <div className="appointment-details">

            {/* EASY APPOINTMENT */}

            <div className="appointment-detail">

              <div className="appointment-detail-icon">
                <CalendarDays size={18} />
              </div>

              <div>
                <h3>Easy Appointment</h3>
                <p>Choose a convenient date and time.</p>
              </div>

            </div>


            {/* FLEXIBLE TIMING */}

            <div className="appointment-detail">

              <div className="appointment-detail-icon">
                <Clock3 size={18} />
              </div>

              <div>
                <h3>Flexible Timing</h3>
                <p>Contact our clinic for available timings.</p>
              </div>

            </div>


            {/* CLINIC */}

            <div className="appointment-detail">

              <div className="appointment-detail-icon">
                <MapPin size={18} />
              </div>

              <div>
                <h3>Visit Our Clinic</h3>
                <p>Rajahmundry, Andhra Pradesh.</p>
              </div>

            </div>

          </div>


          {/* CALL BOX */}

          <div className="appointment-call-box">

            <div className="appointment-call-icon">
              <Phone size={18} />
            </div>

            <div>
              <span>Prefer to call?</span>

              <a href="tel:+919779485868">
                +91 97794 85868
              </a>
            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE FORM
        ===================================================== */}

        <div className="appointment-form-card">

          <div className="appointment-form-header">

            <p>REQUEST AN APPOINTMENT</p>

            <h3>
              Book Your
              <span>Consultation</span>
            </h3>

          </div>


          <form
            className="appointment-form"
            onSubmit={handleSubmit}
          >

            {/* =================================================
                NAME + PHONE
            ================================================= */}

            <div className="appointment-form-row">

              <div className="appointment-field">

                <label htmlFor="appointment-name">
                  Full Name
                </label>

                <input
                  id="appointment-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="appointment-field">

                <label htmlFor="appointment-phone">
                  Phone Number
                </label>

                <input
                  id="appointment-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* =================================================
                EMAIL + DATE
            ================================================= */}

            <div className="appointment-form-row">

              <div className="appointment-field">

                <label htmlFor="appointment-email">
                  Email Address
                </label>

                <input
                  id="appointment-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="appointment-field">

                <label htmlFor="appointment-date">
                  Preferred Date
                </label>

                <input
                  id="appointment-date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />

              </div>

            </div>


            {/* =================================================
                SERVICE
            ================================================= */}

            <div className="appointment-field">

              <label htmlFor="appointment-service">
                Select Service
              </label>

              <select
                id="appointment-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >

                <option value="" disabled>
                  Choose a service
                </option>

                <option value="Dental Implants">
                  Dental Implants
                </option>

                <option value="Root Canal Treatment">
                  Root Canal Treatment
                </option>

                <option value="Teeth Braces and Aligners">
                  Teeth Braces and Aligners
                </option>

                <option value="Veneers">
                  Veneers
                </option>

                <option value="Smile Designing">
                  Smile Designing
                </option>

                <option value="Loose Teeth and Bleeding Gums">
                  Loose Teeth and Bleeding Gums
                </option>

                <option value="Extraction and Laser Treatments">
                  Extraction and Laser Treatments
                </option>

                <option value="Dentures, Bridges and Crowns">
                  Dentures, Bridges and Crowns
                </option>

              </select>

            </div>


            {/* =================================================
                MESSAGE
            ================================================= */}

            <div className="appointment-field">

              <label htmlFor="appointment-message">
                Message
              </label>

              <textarea
                id="appointment-message"
                name="message"
                rows="4"
                placeholder="Tell us how we can help you..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="appointment-submit"
            >
              Request Appointment

              <ArrowRight size={16} />
            </button>

          </form>

        </div>

      </div>


      {/* =====================================================
          SUCCESS POPUP
      ===================================================== */}

      {showSuccess && (

        <div
          className="appointment-success-overlay"
          onClick={() => setShowSuccess(false)}
        >

          <div
            className="appointment-success-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              type="button"
              className="appointment-success-close"
              onClick={() => setShowSuccess(false)}
              aria-label="Close"
            >
              <X size={17} />
            </button>


            {/* ICON */}

            <div className="appointment-success-icon">
              <CheckCircle2 size={34} />
            </div>


            {/* CONTENT */}

            <p className="appointment-success-small">
              APPOINTMENT REQUEST
            </p>

            <h3>
              Request Sent
              <span>Successfully!</span>
            </h3>

            <p className="appointment-success-message">
              Thank you for contacting Trio Dent Dental Clinic.
              Your appointment request has been successfully
              received. Our team will contact you soon.
            </p>


            {/* BUTTON */}

            <button
              type="button"
              className="appointment-success-button"
              onClick={() => setShowSuccess(false)}
            >
              Done
              <ArrowRight size={15} />
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default AppointmentSection;