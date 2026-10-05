import { useState } from "react";
import {
  Search,
  CircleDot,
  Baby,
  Braces,
  CalendarCheck,
  Zap,
  Sparkles,
  TriangleAlert,
  Check,
} from "lucide-react";

import "../styles/appointment-services.css";

const services = [
  {
    id: "checkup",
    title: "Regular Check-up",
    icon: Search,
  },
  {
    id: "implants",
    title: "Dental Implants",
    icon: CircleDot,
  },
  {
    id: "kids",
    title: "Kids Dentistry",
    icon: Baby,
  },
  {
    id: "braces",
    title: "Braces & Aligners",
    icon: Braces,
  },
  {
    id: "followup",
    title: "Follow Appointment",
    icon: CalendarCheck,
  },
  {
    id: "pain",
    title: "Tooth Pain",
    icon: Zap,
  },
  {
    id: "cleaning",
    title: "Tooth Cleaning",
    icon: Sparkles,
  },
  {
    id: "emergency",
    title: "Emergency Care",
    icon: TriangleAlert,
  },
];

function AppointmentServices({ onServiceSelect }) {
  const [selectedService, setSelectedService] = useState("");

  const handleSelect = (service) => {
    setSelectedService(service.title);

    if (onServiceSelect) {
      onServiceSelect(service.title);
    }
  };

  return (
    <section className="appointment-services">
      <div className="appointment-services-container">

        {/* Heading */}
        <div className="appointment-services-heading">
          <span className="appointment-services-eyebrow">
            FIND THE RIGHT CARE
          </span>

          <h2>
            How can we help you <span>today?</span>
          </h2>

          <p>
            Select one option that best describes your need,
            then continue with your appointment.
          </p>
        </div>

        {/* Cards */}
        <div className="appointment-services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isSelected = selectedService === service.title;

            return (
              <button
                key={service.id}
                type="button"
                className={`appointment-service-card ${
                  isSelected ? "selected" : ""
                }`}
                style={{
                  "--animation-delay": `${index * 0.08}s`,
                }}
                onClick={() => handleSelect(service)}
              >

                {/* Selected Check */}
                <span className="appointment-service-check">
                  <Check size={14} strokeWidth={3} />
                </span>

                {/* Icon */}
                <span className="appointment-service-icon">
                  <Icon size={43} strokeWidth={1.6} />
                </span>

                {/* Title */}
                <span className="appointment-service-title">
                  {service.title}
                </span>

                {/* Hover line */}
                <span className="appointment-service-line" />
              </button>
            );
          })}
        </div>

        {/* Continue */}
        <div
          className={`appointment-services-action ${
            selectedService ? "visible" : ""
          }`}
        >
          <button
            type="button"
            className="appointment-services-continue"
            onClick={() => {
              document
                .querySelector(".appointment-form-section")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
          >
            Continue
            <span>→</span>
          </button>

          <p>
            Selected: <strong>{selectedService}</strong>
          </p>
        </div>

      </div>
    </section>
  );
}

export default AppointmentServices;