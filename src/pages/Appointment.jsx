import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/appointment-page.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  service: "",
  message: "",
};

function Appointment() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove field error while typing
    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.date) {
      newErrors.date = "Please select an appointment date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select a preferred time.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    // UI-only for now.
    // Later this can be replaced with an API request.
    console.log("Appointment request:", formData);

    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      

      <main className="appointment-page">
        <section className="appointment-hero">
  <div className="appointment-hero-content">
    <span className="appointment-eyebrow">
      BOOK YOUR VISIT
    </span>

    <h1>
      Your Smile
      <span>Starts Here</span>
    </h1>

    <p>
      Schedule your dental consultation with the
      experienced team at Trio Dent Dental Clinic.
    </p>

    <Link
      to="#appointment-form"
      className="appointment-hero-button"
    >
      Book an Appointment
      <ArrowRight size={15} />
    </Link>
  </div>
</section>

   
        {/* BOOKING AREA */}
        <section className="appointment-section">
          <div className="appointment-container">

            {/* LEFT INFO */}
            <div className="appointment-info">

              <span className="section-eyebrow">
                PLAN YOUR VISIT
              </span>

              <h2>
                Let's Plan Your
                <span>Dental Care</span>
              </h2>

              <p className="appointment-intro">
                Tell us a little about your requirements and our
                team can help arrange a suitable consultation.
              </p>

              <div className="appointment-info-list">

                <div className="appointment-info-item">
                  <div className="appointment-info-icon">
                    <CalendarDays size={19} />
                  </div>

                  <div>
                    <h3>Easy Appointment</h3>
                    <p>
                      Choose your preferred date and time.
                    </p>
                  </div>
                </div>

                <div className="appointment-info-item">
                  <div className="appointment-info-icon">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <h3>Convenient Timing</h3>
                    <p>
                      Share a preferred consultation time.
                    </p>
                  </div>
                </div>

                <div className="appointment-info-item">
                  <div className="appointment-info-icon">
                    <Phone size={19} />
                  </div>

                  <div>
                    <h3>Need Help?</h3>
                    <p>
                      Call us at +91 97794 85868.
                    </p>
                  </div>
                </div>

              </div>

              <div className="appointment-location">
                <MapPin size={17} />

                <div>
                  <span>Clinic Location</span>
                  <p>
                    Trio Dent Dental Clinic
                    <br />
                    Rajahmundry, Andhra Pradesh
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="appointment-contact-link"
              >
                View Contact Details
                <ArrowRight size={14} />
              </Link>

            </div>

            {/* FORM */}
            <div className="appointment-form-card">

              <div className="appointment-form-header">
                <span>BOOK A VISIT</span>

                <h2>Request an Appointment</h2>

                <p>
                  Fill in your details and we'll help you arrange
                  your visit.
                </p>
              </div>

              {submitted && (
                <div className="appointment-success">
                  <CheckCircle2 size={19} />

                  <div>
                    <strong>Request received</strong>
                    <p>
                      Your appointment request has been recorded.
                    </p>
                  </div>
                </div>
              )}

              <form
                className="appointment-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* NAME */}
                <div className="form-field">
                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                  />

                  {errors.name && (
                    <small>{errors.name}</small>
                  )}
                </div>

                {/* PHONE */}
                <div className="form-field">
                  <label htmlFor="phone">
                    Phone Number <span>*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength="10"
                    placeholder="Enter 10-digit phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                  />

                  {errors.phone && (
                    <small>{errors.phone}</small>
                  )}
                </div>

                {/* EMAIL */}
                <div className="form-field">
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                  />

                  {errors.email && (
                    <small>{errors.email}</small>
                  )}
                </div>

                {/* DATE */}
                <div className="form-field">
                  <label htmlFor="date">
                    Preferred Date <span>*</span>
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.date)}
                  />

                  {errors.date && (
                    <small>{errors.date}</small>
                  )}
                </div>

                {/* TIME */}
                <div className="form-field">
                  <label htmlFor="time">
                    Preferred Time <span>*</span>
                  </label>

                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.time)}
                  >
                    <option value="">
                      Select a time
                    </option>
                    <option value="09:00 AM">
                      09:00 AM
                    </option>
                    <option value="10:00 AM">
                      10:00 AM
                    </option>
                    <option value="11:00 AM">
                      11:00 AM
                    </option>
                    <option value="12:00 PM">
                      12:00 PM
                    </option>
                    <option value="02:00 PM">
                      02:00 PM
                    </option>
                    <option value="03:00 PM">
                      03:00 PM
                    </option>
                    <option value="04:00 PM">
                      04:00 PM
                    </option>
                    <option value="05:00 PM">
                      05:00 PM
                    </option>
                    <option value="06:00 PM">
                      06:00 PM
                    </option>
                  </select>

                  {errors.time && (
                    <small>{errors.time}</small>
                  )}
                </div>

                {/* SERVICE */}
                <div className="form-field">
                  <label htmlFor="service">
                    Dental Service <span>*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.service)}
                  >
                    <option value="">
                      Select a service
                    </option>
                    <option value="General Dentistry">
                      General Dentistry
                    </option>
                    <option value="Teeth Whitening">
                      Teeth Whitening
                    </option>
                    <option value="Dental Implants">
                      Dental Implants
                    </option>
                    <option value="Root Canal Treatment">
                      Root Canal Treatment
                    </option>
                    <option value="Pediatric Dentistry">
                      Pediatric Dentistry
                    </option>
                    <option value="Orthodontic Care">
                      Orthodontic Care
                    </option>
                    <option value="Consultation">
                      General Consultation
                    </option>
                  </select>

                  {errors.service && (
                    <small>{errors.service}</small>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="form-field form-field-full">
                  <label htmlFor="message">
                    Additional Information
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us briefly about your dental concern..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-submit-area">
                  <button
                    type="submit"
                    className="appointment-submit"
                  >
                    Request Appointment
                    <ArrowRight size={16} />
                  </button>

                  <p>
                    * Required fields
                  </p>
                </div>

              </form>
            </div>

          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="appointment-bottom">
          <div>
            <span className="section-eyebrow">
              HAVE QUESTIONS?
            </span>

            <h2>
              We're Here to
              <span>Help You Smile</span>
            </h2>

            <p>
              If you're unsure which treatment you need,
              contact our clinic and speak with our team.
            </p>
          </div>

          <a
            href="tel:+919779485868"
            className="appointment-call-button"
          >
            <Phone size={16} />
            Call the Clinic
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Appointment;