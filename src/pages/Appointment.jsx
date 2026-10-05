import { useState } from "react";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  CircleDot,
  HeartPulse,
  Smile,
  Sparkles,
  Activity,
  Baby,
  ShieldAlert,
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

  // =========================================
  // APPOINTMENT SERVICES
  // =========================================

  const appointmentServices = [
    {
      title: "Regular Check-up",
      description: "Routine dental examination and consultation.",
      icon: <CalendarDays size={22} />,
    },
    {
      title: "Dental Implants",
      description: "Treatment options for replacing missing teeth.",
      icon: <CircleDot size={22} />,
    },
    {
      title: "Root Canal Treatment",
      description: "Care for damaged or infected natural teeth.",
      icon: <HeartPulse size={22} />,
    },
    {
      title: "Braces & Aligners",
      description: "Treatment for improved tooth alignment.",
      icon: <Smile size={22} />,
    },
    {
      title: "Veneers & Smile Designing",
      description: "Aesthetic care for a more refined smile.",
      icon: <Sparkles size={22} />,
    },
    {
      title: "Gum Treatment",
      description: "Care for bleeding gums and gum concerns.",
      icon: <Activity size={22} />,
    },
    {
      title: "Kids Dentistry",
      description: "Dental care focused on children's needs.",
      icon: <Baby size={22} />,
    },
    {
      title: "Emergency Care",
      description: "Care for urgent dental concerns.",
      icon: <ShieldAlert size={22} />,
    },
  ];

  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear field error while typing
    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  // =========================================
  // HANDLE SERVICE CARD SELECTION
  // =========================================

  const handleServiceSelect = (service) => {
    setFormData((previous) => ({
      ...previous,
      service,
    }));

    setErrors((previous) => ({
      ...previous,
      service: "",
    }));
  };

  // =========================================
  // SCROLL TO FORM
  // =========================================

  const scrollToForm = () => {
    const formSection = document.getElementById("appointment-form");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // =========================================
  // FORM VALIDATION
  // =========================================

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    // Date
    if (!formData.date) {
      newErrors.date = "Please select an appointment date.";
    }

    // Time
    if (!formData.time) {
      newErrors.time = "Please select a preferred time.";
    }

    // Service
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    return newErrors;
  };

  // =========================================
  // CLOSE SUCCESS POPUP
  // CLEAR EVERYTHING
  // =========================================

  const closeSuccessPopup = () => {
    setSubmitted(false);
    setFormData(initialForm);
    setErrors({});
  };

  // =========================================
  // SUBMIT FORM
  // =========================================

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // UI-only for now
    // Later connect this to your backend/API
    console.log("Appointment request:", formData);

    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="appointment-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="appointment-hero">

          <div className="appointment-hero-content">

            <p className="appointment-eyebrow">
              BOOK YOUR VISIT
            </p>

            <h1>
              Your Smile
              <span>Starts Here</span>
            </h1>

            <p className="appointment-hero-description">
              Schedule your dental consultation with the
              experienced team at Trio Dent Dental Clinic.
            </p>

            <button
              type="button"
              onClick={scrollToForm}
              className="appointment-hero-button"
            >
              Book an Appointment
              <ArrowRight size={15} />
            </button>

          </div>

          <div className="appointment-hero-image">

            <img
              src="/images/hello1.png"
              alt="Trio Dent Dental Clinic"
            />

            <div className="appointment-hero-card">

              <div className="appointment-hero-card-icon">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>
                  Personalized Dental Care
                </strong>

                <span>
                  Care planned around your smile
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* =========================================
            SERVICE SELECTION
        ========================================= */}

        <section className="appointment-services">

          <div className="appointment-services-container">

            <div className="appointment-services-header">

              <p className="section-eyebrow">
                START YOUR VISIT
              </p>

              <h2>
                How Can We Help
                <span>You Today?</span>
              </h2>

              <p>
                Choose the type of dental care you are
                looking for and continue with your
                appointment request.
              </p>

            </div>

            <div className="appointment-services-grid">

              {appointmentServices.map((service) => (

                <button
                  type="button"
                  key={service.title}
                  className={`appointment-service-card ${
                    formData.service === service.title
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleServiceSelect(service.title)
                  }
                >

                  <div className="appointment-service-icon">
                    {service.icon}
                  </div>

                  <div className="appointment-service-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>

                  <div className="appointment-service-arrow">
                    <ArrowRight size={15} />
                  </div>

                </button>

              ))}

            </div>

            {/* SELECTED SERVICE */}

            {formData.service && (

              <div className="appointment-selected-service">

                <div>

                  <span>
                    SELECTED SERVICE
                  </span>

                  <strong>
                    {formData.service}
                  </strong>

                </div>

                <button
                  type="button"
                  onClick={scrollToForm}
                >
                  Continue to Appointment
                  <ArrowRight size={15} />
                </button>

              </div>

            )}

          </div>

        </section>

        {/* =========================================
            APPOINTMENT FORM
        ========================================= */}

        <section
          className="appointment-section"
          id="appointment-form"
        >

          <div className="appointment-container">

            {/* LEFT INFORMATION */}

            <div className="appointment-info">

              <p className="section-eyebrow">
                PLAN YOUR VISIT
              </p>

              <h2>
                Let's Plan Your
                <span>Dental Care</span>
              </h2>

              <p className="appointment-intro">
                Tell us a little about your requirements
                and our team can help arrange a suitable
                consultation.
              </p>

              <div className="appointment-info-list">

                {/* Easy Appointment */}

                <div className="appointment-info-item">

                  <div className="appointment-info-icon">
                    <CalendarDays size={19} />
                  </div>

                  <div>

                    <h3>
                      Easy Appointment
                    </h3>

                    <p>
                      Choose your preferred date and time.
                    </p>

                  </div>

                </div>

                {/* Convenient Timing */}

                <div className="appointment-info-item">

                  <div className="appointment-info-icon">
                    <Clock3 size={19} />
                  </div>

                  <div>

                    <h3>
                      Convenient Timing
                    </h3>

                    <p>
                      Share your preferred consultation time.
                    </p>

                  </div>

                </div>

                {/* Phone */}

                <div className="appointment-info-item">

                  <div className="appointment-info-icon">
                    <Phone size={19} />
                  </div>

                  <div>

                    <h3>
                      Need Help?
                    </h3>

                    <p>
                      Call us at +91 97794 85868.
                    </p>

                  </div>

                </div>

              </div>

              {/* LOCATION */}

              <div className="appointment-location">

                <MapPin size={17} />

                <div>

                  <span>
                    Clinic Location
                  </span>

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

            {/* FORM CARD */}

            <div className="appointment-form-card">

              <div className="appointment-form-header">

                <span>
                  BOOK A VISIT
                </span>

                <h2>
                  Request an Appointment
                </h2>

                <p>
                  Fill in your details and we'll help
                  arrange your visit.
                </p>

              </div>

              <form
                className="appointment-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* =========================================
                    NAME
                ========================================= */}

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
                    <small>
                      {errors.name}
                    </small>
                  )}

                </div>

                {/* =========================================
                    PHONE
                ========================================= */}

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
                    <small>
                      {errors.phone}
                    </small>
                  )}

                </div>

                {/* =========================================
                    EMAIL
                ========================================= */}

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
                    <small>
                      {errors.email}
                    </small>
                  )}

                </div>

                {/* =========================================
                    DATE
                ========================================= */}

                <div className="form-field">

                  <label htmlFor="date">
                    Preferred Date <span>*</span>
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={
                      new Date()
                        .toISOString()
                        .split("T")[0]
                    }
                    value={formData.date}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.date)}
                  />

                  {errors.date && (
                    <small>
                      {errors.date}
                    </small>
                  )}

                </div>

                {/* =========================================
                    TIME
                ========================================= */}

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
                    <small>
                      {errors.time}
                    </small>
                  )}

                </div>

                {/* =========================================
                    SERVICE
                ========================================= */}

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

                    {appointmentServices.map(
                      (service) => (

                        <option
                          key={service.title}
                          value={service.title}
                        >
                          {service.title}
                        </option>

                      )
                    )}

                  </select>

                  {errors.service && (
                    <small>
                      {errors.service}
                    </small>
                  )}

                </div>

                {/* =========================================
                    MESSAGE
                ========================================= */}

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
                  />

                </div>

                {/* =========================================
                    SUBMIT
                ========================================= */}

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

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <section className="appointment-bottom">

          <div>

            <p className="section-eyebrow">
              HAVE QUESTIONS?
            </p>

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

        {/* =========================================
            SUCCESS POPUP
        ========================================= */}

        {submitted && (

          <div className="appointment-popup-overlay">

            <div
              className="appointment-popup"
              role="dialog"
              aria-modal="true"
              aria-labelledby="appointment-popup-title"
            >

              {/* CLOSE */}

              <button
                type="button"
                className="appointment-popup-close"
                onClick={closeSuccessPopup}
                aria-label="Close appointment confirmation"
              >
                ×
              </button>

              {/* SUCCESS ICON */}

              <div className="appointment-popup-icon">
                <CheckCircle2 size={30} />
              </div>

              {/* TITLE */}

              <h2 id="appointment-popup-title">
                Thank You!
              </h2>

              {/* MESSAGE */}

              <p>
                Your appointment request has been received.
                Our team will contact you soon.
              </p>

              {/* DONE */}

              <button
                type="button"
                className="appointment-popup-button"
                onClick={closeSuccessPopup}
              >
                Done
              </button>

            </div>

          </div>

        )}

      </main>

      <Footer />
    </>
  );
}

export default Appointment;