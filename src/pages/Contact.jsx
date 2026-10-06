

// // import { useState } from "react";

// // import {
// //   MapPin,
// //   Phone,
// //   Mail,
// //   Clock3,
// //   MessageCircle,
// //   Send,
// //   ArrowRight,
// //   CheckCircle2,
// //   X,
// // } from "lucide-react";

// // import { Link } from "react-router-dom";

// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // import "../styles/contact-page.css";

// // const initialForm = {
// //   name: "",
// //   email: "",
// //   phone: "",
// //   subject: "",
// //   message: "",
// // };

// // function Contact() {
// //   const [formData, setFormData] = useState(initialForm);
// //   const [errors, setErrors] = useState({});
// //   const [showSuccess, setShowSuccess] = useState(false);

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;

// //     setFormData((previous) => ({
// //       ...previous,
// //       [name]: value,
// //     }));

// //     if (errors[name]) {
// //       setErrors((previous) => ({
// //         ...previous,
// //         [name]: "",
// //       }));
// //     }
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};

// //     if (!formData.name.trim()) {
// //       newErrors.name = "Please enter your name.";
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = "Please enter your email.";
// //     } else if (
// //       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
// //     ) {
// //       newErrors.email = "Enter a valid email address.";
// //     }

// //     if (!formData.phone.trim()) {
// //       newErrors.phone = "Please enter your phone number.";
// //     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
// //       newErrors.phone = "Enter a valid 10-digit phone number.";
// //     }

// //     if (!formData.subject.trim()) {
// //       newErrors.subject = "Please enter a subject.";
// //     }

// //     if (!formData.message.trim()) {
// //       newErrors.message = "Please enter your message.";
// //     } else if (formData.message.trim().length < 10) {
// //       newErrors.message =
// //         "Message should contain at least 10 characters.";
// //     }

// //     return newErrors;
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     const validationErrors = validateForm();

// //     if (Object.keys(validationErrors).length > 0) {
// //       setErrors(validationErrors);
// //       return;
// //     }

// //     // Later you can replace this with your backend API call.
// //     console.log("Contact request:", formData);

// //     setErrors({});
// //     setFormData(initialForm);

// //     // Show success popup
// //     setShowSuccess(true);
// //   };

// //   const closeSuccessPopup = () => {
// //     setShowSuccess(false);
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <main className="contact-page">

// //         {/* =========================
// //             HERO BANNER
// //         ========================= */}
// //         <section className="contact-hero">
// //   <div className="contact-hero-content">
// //     <span>GET IN TOUCH</span>

// //     <h1>
// //       We're Here to
// //       <strong>Help You Smile</strong>
// //     </h1>

// //     <p>
// //       Have a question about your dental care?
// //       Contact Trio Dent Dental Clinic and our team
// //       will be happy to assist you.
// //     </p>

// //     <Link to="/appointment" className="contact-hero-button">
// //       Book an Appointment
// //       <ArrowRight size={15} />
// //     </Link>
// //   </div>
// // </section>


// //         {/* =========================
// //             CONTACT INFORMATION
// //         ========================= */}

// //         <section className="contact-info-section">
// //           <div className="contact-info-container">

// //             <div className="contact-info-heading">
// //               <span className="contact-eyebrow">
// //                 CONTACT TRIO DENT
// //               </span>

// //               <h2>
// //                 Let's Start a
// //                 <span>Conversation</span>
// //               </h2>

// //               <p>
// //                 Whether you want to schedule an appointment,
// //                 ask about a treatment, or simply have a question,
// //                 we're here to help.
// //               </p>
// //             </div>


// //             <div className="contact-info-grid">

// //               {/* LOCATION */}

// //               <div className="contact-info-card">
// //                 <div className="contact-card-icon">
// //                   <MapPin size={20} />
// //                 </div>

// //                 <div>
// //                   <span>VISIT US</span>

// //                   <h3>Clinic Location</h3>

// //                   <p>
// //                     Trio Dent Dental Clinic
// //                     <br />
// //                     Rajahmundry, Andhra Pradesh
// //                   </p>
// //                 </div>
// //               </div>


// //               {/* PHONE */}

// //               <div className="contact-info-card">
// //                 <div className="contact-card-icon">
// //                   <Phone size={20} />
// //                 </div>

// //                 <div>
// //                   <span>CALL US</span>

// //                   <h3>Phone</h3>

// //                   <a href="tel:+919779485868">
// //                     +91 97794 85868
// //                   </a>
// //                 </div>
// //               </div>


// //               {/* EMAIL */}

// //               <div className="contact-info-card">
// //                 <div className="contact-card-icon">
// //                   <Mail size={20} />
// //                 </div>

// //                 <div>
// //                   <span>EMAIL US</span>

// //                   <h3>Email</h3>

// //                   <a href="mailto:info@triodentdentalclinic.com">
// //                     info@triodentdentalclinic.com
// //                   </a>
// //                 </div>
// //               </div>


// //               {/* HOURS */}

// //               <div className="contact-info-card">
// //                 <div className="contact-card-icon">
// //                   <Clock3 size={20} />
// //                 </div>

// //                 <div>
// //                   <span>OPENING HOURS</span>

// //                   <h3>Clinic Hours</h3>

// //                   <p>
// //                     Monday – Saturday
// //                     <br />
// //                     Please call for current timings
// //                   </p>
// //                 </div>
// //               </div>

// //             </div>
// //           </div>
// //         </section>


// //         {/* =========================
// //             QUICK ACTIONS
// //         ========================= */}

// //         <section className="contact-actions-section">
// //           <div className="contact-actions-container">

// //             <div className="contact-action-content">
// //               <span className="contact-eyebrow">
// //                 QUICK CONTACT
// //               </span>

// //               <h2>
// //                 Need Help
// //                 <span>Right Away?</span>
// //               </h2>

// //               <p>
// //                 For quick assistance, you can call the clinic
// //                 directly or send us a WhatsApp message.
// //               </p>
// //             </div>


// //             <div className="contact-action-buttons">

// //               <a
// //                 href="tel:+919779485868"
// //                 className="contact-call-button"
// //               >
// //                 <Phone size={17} />

// //                 <div>
// //                   <small>CALL THE CLINIC</small>
// //                   <strong>+91 97794 85868</strong>
// //                 </div>
// //               </a>


// //               <a
// //                 href="https://wa.me/919779485868"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="contact-whatsapp-button"
// //               >
// //                 <MessageCircle size={19} />

// //                 <div>
// //                   <small>WHATSAPP US</small>
// //                   <strong>Send a Message</strong>
// //                 </div>
// //               </a>

// //             </div>
// //           </div>
// //         </section>


// //         {/* =========================
// //             CONTACT FORM + MAP
// //         ========================= */}

// //         <section className="contact-main-section">
// //           <div className="contact-main-container">

// //             {/* FORM */}

// //             <div className="contact-form-wrapper">

// //               <div className="contact-form-heading">
// //                 <span className="contact-eyebrow">
// //                   SEND US A MESSAGE
// //                 </span>

// //                 <h2>
// //                   How Can We
// //                   <span>Help You?</span>
// //                 </h2>

// //                 <p>
// //                   Fill in the form below and we'll get back
// //                   to you as soon as possible.
// //                 </p>
// //               </div>


// //               <form
// //                 className="contact-form"
// //                 onSubmit={handleSubmit}
// //                 noValidate
// //               >

// //                 {/* NAME */}

// //                 <div className="contact-field">
// //                   <label htmlFor="contact-name">
// //                     Full Name <span>*</span>
// //                   </label>

// //                   <input
// //                     id="contact-name"
// //                     name="name"
// //                     type="text"
// //                     placeholder="Enter your full name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     aria-invalid={Boolean(errors.name)}
// //                   />

// //                   {errors.name && (
// //                     <small>{errors.name}</small>
// //                   )}
// //                 </div>


// //                 {/* EMAIL */}

// //                 <div className="contact-field">
// //                   <label htmlFor="contact-email">
// //                     Email Address <span>*</span>
// //                   </label>

// //                   <input
// //                     id="contact-email"
// //                     name="email"
// //                     type="email"
// //                     placeholder="Enter your email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     aria-invalid={Boolean(errors.email)}
// //                   />

// //                   {errors.email && (
// //                     <small>{errors.email}</small>
// //                   )}
// //                 </div>


// //                 {/* PHONE */}

// //                 <div className="contact-field">
// //                   <label htmlFor="contact-phone">
// //                     Phone Number <span>*</span>
// //                   </label>

// //                   <input
// //                     id="contact-phone"
// //                     name="phone"
// //                     type="tel"
// //                     inputMode="numeric"
// //                     maxLength="10"
// //                     placeholder="Enter 10-digit phone number"
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                     aria-invalid={Boolean(errors.phone)}
// //                   />

// //                   {errors.phone && (
// //                     <small>{errors.phone}</small>
// //                   )}
// //                 </div>


// //                 {/* SUBJECT */}

// //                 <div className="contact-field">
// //                   <label htmlFor="contact-subject">
// //                     Subject <span>*</span>
// //                   </label>

// //                   <input
// //                     id="contact-subject"
// //                     name="subject"
// //                     type="text"
// //                     placeholder="How can we help?"
// //                     value={formData.subject}
// //                     onChange={handleChange}
// //                     aria-invalid={Boolean(errors.subject)}
// //                   />

// //                   {errors.subject && (
// //                     <small>{errors.subject}</small>
// //                   )}
// //                 </div>


// //                 {/* MESSAGE */}

// //                 <div className="contact-field contact-field-full">
// //                   <label htmlFor="contact-message">
// //                     Message <span>*</span>
// //                   </label>

// //                   <textarea
// //                     id="contact-message"
// //                     name="message"
// //                     rows="6"
// //                     placeholder="Write your message here..."
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     aria-invalid={Boolean(errors.message)}
// //                   />

// //                   {errors.message && (
// //                     <small>{errors.message}</small>
// //                   )}
// //                 </div>


// //                 {/* SUBMIT */}

// //                 <div className="contact-submit-area">

// //                   <button
// //                     type="submit"
// //                     className="contact-submit-button"
// //                   >
// //                     Send Message
// //                     <Send size={15} />
// //                   </button>

// //                   <span>
// //                     * Required fields
// //                   </span>

// //                 </div>

// //               </form>
// //             </div>


// //             {/* MAP */}

// //             <div className="contact-map-wrapper">

// //               <div className="contact-map-heading">

// //                 <span className="contact-eyebrow">
// //                   FIND US
// //                 </span>

// //                 <h2>
// //                   Visit Our
// //                   <span>Clinic</span>
// //                 </h2>

// //               </div>


// //               <div className="contact-map">

// //                 <iframe
// //                   title="Trio Dent Dental Clinic Location"
// //                   src="https://www.google.com/maps?q=Trio%20Dent%20Dental%20Clinic%20Rajahmundry&output=embed"
// //                   loading="lazy"
// //                   referrerPolicy="no-referrer-when-downgrade"
// //                 ></iframe>

// //               </div>


// //               <div className="contact-map-bottom">

// //                 <div className="contact-map-address">

// //                   <MapPin size={17} />

// //                   <div>
// //                     <strong>
// //                       Trio Dent Dental Clinic
// //                     </strong>

// //                     <p>
// //                       Rajahmundry, Andhra Pradesh
// //                     </p>
// //                   </div>

// //                 </div>


// //                 <a
// //                   href="https://www.google.com/maps/search/?api=1&query=Trio+Dent+Dental+Clinic+Rajahmundry"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="contact-directions"
// //                 >
// //                   Get Directions
// //                   <ArrowRight size={14} />
// //                 </a>

// //               </div>

// //             </div>

// //           </div>
// //         </section>


// //         {/* =========================
// //             APPOINTMENT CTA
// //         ========================= */}

// //         <section className="contact-bottom-cta">

// //           <div>

// //             <span className="contact-eyebrow">
// //               READY FOR YOUR NEXT VISIT?
// //             </span>

// //             <h2>
// //               Take the First Step
// //               <span>Toward a Healthier Smile</span>
// //             </h2>

// //             <p>
// //               Schedule your dental consultation today.
// //             </p>

// //           </div>


// //           <Link
// //             to="/appointment"
// //             className="contact-appointment-button"
// //           >
// //             Book an Appointment
// //             <ArrowRight size={15} />
// //           </Link>

// //         </section>

// //       </main>


// //       {/* =========================
// //           SUCCESS POPUP
// //       ========================= */}

// //       {showSuccess && (
// //         <div
// //           className="contact-success-overlay"
// //           onClick={closeSuccessPopup}
// //         >

// //           <div
// //             className="contact-success-popup"
// //             onClick={(event) => event.stopPropagation()}
// //           >

// //             <button
// //               className="contact-success-close"
// //               onClick={closeSuccessPopup}
// //               aria-label="Close success message"
// //             >
// //               <X size={18} />
// //             </button>


// //             <div className="contact-success-icon">
// //               <CheckCircle2 size={42} />
// //             </div>


// //             <h2>
// //               Thank You!
// //             </h2>

// //             <p className="contact-success-main">
// //               Thank you for contacting Trio Dent.
// //             </p>

// //             <p className="contact-success-sub">
// //               Our team will be in touch with you soon.
// //             </p>


// //             <button
// //               className="contact-success-button"
// //               onClick={closeSuccessPopup}
// //             >
// //               Okay
// //             </button>

// //           </div>

// //         </div>
// //       )}


// //       <Footer />
// //     </>
// //   );
// // }

// // export default Contact;

// import { useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock3,
//   MessageCircle,
//   Send,
//   ArrowRight,
//   CheckCircle2,
//   X,
//   CalendarDays,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// import "../styles/contact-page.css";

// const initialForm = {
//   name: "",
//   email: "",
//   phone: "",
//   subject: "",
//   message: "",
// };

// function Contact() {
//   const [formData, setFormData] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((previous) => ({
//         ...previous,
//         [name]: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter your name.";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Please enter your email.";
//     } else if (
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//     ) {
//       newErrors.email = "Enter a valid email address.";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Please enter your phone number.";
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = "Enter a valid 10-digit phone number.";
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = "Please enter a subject.";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Please enter your message.";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message =
//         "Message should contain at least 10 characters.";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     console.log("Contact request:", formData);

//     setErrors({});
//     setFormData(initialForm);
//     setSubmitted(true);
//   };

//   const closeSuccessPopup = () => {
//     setSubmitted(false);
//   };

//   return (
//     <>
//       <Navbar />

//       <main className="contact-page">

//         {/* =====================================================
//             HERO
//         ===================================================== */}
//         <section className="contact-hero">
//   <div className="contact-hero-container">

//     {/* LEFT CONTENT */}
//     <div className="contact-hero-content">
//       <span className="contact-hero-label">
//         GET IN TOUCH
//       </span>

//       <h1>
//         We're Here to
//         <span>Help You Smile</span>
//       </h1>

//       <p>
//         Have a question about your dental care?
//         Contact Trio Dent Dental Clinic and our
//         team will be happy to assist you.
//       </p>

//       <div className="contact-hero-buttons">
//         <Link
//           to="/appointment"
//           className="contact-hero-primary"
//         >
//           Book an Appointment
//           <ArrowRight size={16} />
//         </Link>

//         <a
//           href="tel:+919779485868"
//           className="contact-hero-secondary"
//         >
//           Call Us
//         </a>
//       </div>

//       <div className="contact-hero-features">
//         <span>♡ Patient-Centered Care</span>
//         <span className="contact-feature-divider"></span>
//         <span>◯ Comfortable Experience</span>
//       </div>
//     </div>

//     {/* RIGHT IMAGE */}
//     <div className="contact-hero-image">
//       <img
//         src="/images/hello1.png"
//         alt="Trio Dent Dental Clinic"
//       />
//     </div>

//   </div>
// </section>
//         {/* =====================================================
//             CONTACT INFORMATION
//         ===================================================== */}
//         <section className="contact-info-section">

//           <div className="contact-info-container">

//             <div className="contact-section-heading">
//               <p className="contact-eyebrow">
//                 CONTACT TRIO DENT
//               </p>

//               <h2>
//                 Let's Start a
//                 <span>Conversation</span>
//               </h2>

//               <p>
//                 Whether you want to schedule an appointment,
//                 ask about a treatment, or simply have a question,
//                 we're here to help.
//               </p>
//             </div>


//             <div className="contact-info-grid">

//               {/* LOCATION */}
//               <div className="contact-info-card">

//                 <div className="contact-card-icon">
//                   <MapPin size={20} />
//                 </div>

//                 <div>
//                   <span>VISIT US</span>
//                   <h3>Clinic Location</h3>

//                   <p>
//                     Trio Dent Dental Clinic
//                     <br />
//                     Rajahmundry, Andhra Pradesh
//                   </p>
//                 </div>

//               </div>


//               {/* PHONE */}
//               <div className="contact-info-card">

//                 <div className="contact-card-icon">
//                   <Phone size={20} />
//                 </div>

//                 <div>
//                   <span>CALL US</span>
//                   <h3>Phone</h3>

//                   <a href="tel:+919779485868">
//                     +91 97794 85868
//                   </a>
//                 </div>

//               </div>


//               {/* EMAIL */}
//               <div className="contact-info-card">

//                 <div className="contact-card-icon">
//                   <Mail size={20} />
//                 </div>

//                 <div>
//                   <span>EMAIL US</span>
//                   <h3>Email</h3>

//                   <a href="mailto:info@triodentdentalclinic.com">
//                     info@triodentdentalclinic.com
//                   </a>
//                 </div>

//               </div>


//               {/* HOURS */}
//               <div className="contact-info-card">

//                 <div className="contact-card-icon">
//                   <Clock3 size={20} />
//                 </div>

//                 <div>
//                   <span>OPENING HOURS</span>
//                   <h3>Clinic Hours</h3>

//                   <p>
//                     Monday – Saturday
//                     <br />
//                     Please call for current timings
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             QUICK CONTACT
//         ===================================================== */}
//         <section className="contact-actions-section">

//           <div className="contact-actions-container">

//             <div className="contact-actions-content">

//               <p className="contact-eyebrow">
//                 QUICK CONTACT
//               </p>

//               <h2>
//                 Need Help
//                 <span>Right Away?</span>
//               </h2>

//               <p>
//                 For quick assistance, call the clinic directly
//                 or send us a WhatsApp message.
//               </p>

//             </div>


//             <div className="contact-action-buttons">

//               <a
//                 href="tel:+919779485868"
//                 className="contact-call-button"
//               >
//                 <Phone size={20} />

//                 <div>
//                   <small>CALL THE CLINIC</small>
//                   <strong>+91 97794 85868</strong>
//                 </div>

//               </a>


//               <a
//                 href="https://wa.me/919779485868"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-whatsapp-button"
//               >
//                 <MessageCircle size={21} />

//                 <div>
//                   <small>WHATSAPP US</small>
//                   <strong>Send a Message</strong>
//                 </div>

//               </a>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             CONTACT FORM + MAP
//         ===================================================== */}
//         <section className="contact-main-section">

//           <div className="contact-main-container">

//             {/* FORM */}
//             <div className="contact-form-wrapper">

//               <div className="contact-form-heading">

//                 <p className="contact-eyebrow">
//                   SEND US A MESSAGE
//                 </p>

//                 <h2>
//                   How Can We
//                   <span>Help You?</span>
//                 </h2>

//                 <p>
//                   Fill in the form below and our team will
//                   get back to you as soon as possible.
//                 </p>

//               </div>


//               <form
//                 className="contact-form"
//                 onSubmit={handleSubmit}
//                 noValidate
//               >

//                 {/* NAME */}
//                 <div className="contact-field">

//                   <label htmlFor="contact-name">
//                     Full Name <span>*</span>
//                   </label>

//                   <input
//                     id="contact-name"
//                     name="name"
//                     type="text"
//                     placeholder="Enter your full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     aria-invalid={Boolean(errors.name)}
//                   />

//                   {errors.name && (
//                     <small>{errors.name}</small>
//                   )}

//                 </div>


//                 {/* EMAIL */}
//                 <div className="contact-field">

//                   <label htmlFor="contact-email">
//                     Email Address <span>*</span>
//                   </label>

//                   <input
//                     id="contact-email"
//                     name="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     aria-invalid={Boolean(errors.email)}
//                   />

//                   {errors.email && (
//                     <small>{errors.email}</small>
//                   )}

//                 </div>


//                 {/* PHONE */}
//                 <div className="contact-field">

//                   <label htmlFor="contact-phone">
//                     Phone Number <span>*</span>
//                   </label>

//                   <input
//                     id="contact-phone"
//                     name="phone"
//                     type="tel"
//                     inputMode="numeric"
//                     maxLength="10"
//                     placeholder="Enter 10-digit phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     aria-invalid={Boolean(errors.phone)}
//                   />

//                   {errors.phone && (
//                     <small>{errors.phone}</small>
//                   )}

//                 </div>


//                 {/* SUBJECT */}
//                 <div className="contact-field">

//                   <label htmlFor="contact-subject">
//                     Subject <span>*</span>
//                   </label>

//                   <input
//                     id="contact-subject"
//                     name="subject"
//                     type="text"
//                     placeholder="How can we help?"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     aria-invalid={Boolean(errors.subject)}
//                   />

//                   {errors.subject && (
//                     <small>{errors.subject}</small>
//                   )}

//                 </div>


//                 {/* MESSAGE */}
//                 <div className="contact-field contact-field-full">

//                   <label htmlFor="contact-message">
//                     Message <span>*</span>
//                   </label>

//                   <textarea
//                     id="contact-message"
//                     name="message"
//                     rows="6"
//                     placeholder="Write your message here..."
//                     value={formData.message}
//                     onChange={handleChange}
//                     aria-invalid={Boolean(errors.message)}
//                   />

//                   {errors.message && (
//                     <small>{errors.message}</small>
//                   )}

//                 </div>


//                 {/* SUBMIT */}
//                 <div className="contact-submit-area">

//                   <button
//                     type="submit"
//                     className="contact-submit-button"
//                   >
//                     Send Message
//                     <Send size={15} />
//                   </button>

//                   <span>
//                     * Required fields
//                   </span>

//                 </div>

//               </form>

//             </div>


//             {/* MAP */}
//             <div className="contact-map-wrapper">

//               <div className="contact-map-heading">

//                 <p className="contact-eyebrow">
//                   FIND US
//                 </p>

//                 <h2>
//                   Visit Our
//                   <span>Clinic</span>
//                 </h2>

//               </div>


//               <div className="contact-map">

//                 <iframe
//                   title="Trio Dent Dental Clinic Location"
//                   src="https://www.google.com/maps?q=Trio%20Dent%20Dental%20Clinic%20Rajahmundry&output=embed"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />

//               </div>


//               <div className="contact-map-bottom">

//                 <div className="contact-map-address">

//                   <MapPin size={18} />

//                   <div>
//                     <strong>
//                       Trio Dent Dental Clinic
//                     </strong>

//                     <p>
//                       Rajahmundry, Andhra Pradesh
//                     </p>
//                   </div>

//                 </div>


//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=Trio+Dent+Dental+Clinic+Rajahmundry"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="contact-directions"
//                 >
//                   Get Directions
//                   <ArrowRight size={14} />
//                 </a>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             BOTTOM CTA
//         ===================================================== */}
//         <section className="contact-bottom-cta">

//           <div>

//             <p className="contact-eyebrow">
//               READY FOR YOUR NEXT VISIT?
//             </p>

//             <h2>
//               Take the First Step
//               <span>Toward a Healthier Smile</span>
//             </h2>

//             <p>
//               Schedule your dental consultation today.
//             </p>

//           </div>

//           <Link
//             to="/appointment"
//             className="contact-appointment-button"
//           >
//             Book an Appointment
//             <ArrowRight size={15} />
//           </Link>

//         </section>


//         {/* =====================================================
//             SUCCESS POPUP
//         ===================================================== */}
//         {submitted && (
//           <div
//             className="contact-success-overlay"
//             onClick={closeSuccessPopup}
//           >

//             <div
//               className="contact-success-popup"
//               onClick={(event) => event.stopPropagation()}
//             >

//               <button
//                 className="contact-success-close"
//                 onClick={closeSuccessPopup}
//                 aria-label="Close message"
//               >
//                 <X size={18} />
//               </button>


//               <div className="contact-success-icon">
//                 <CheckCircle2 size={35} />
//               </div>


//               <h3>
//                 Thank You!
//               </h3>


//               <p>
//                 Thank you for contacting Trio Dent Dental Clinic.
//                 Our team will get in touch with you soon.
//               </p>


//               <button
//                 className="contact-success-button"
//                 onClick={closeSuccessPopup}
//               >
//                 Done
//               </button>

//             </div>

//           </div>
//         )}

//       </main>

//       <Footer />
//     </>
//   );
// }

// export default Contact;

import { useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  MessageCircle,
  Send,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/contact-page.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    // Subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message should contain at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Temporary frontend submission
    // Replace this later with your backend API.
    console.log("Contact request:", formData);

    setErrors({});
    setFormData(initialForm);
    setSubmitted(true);
  };

  const closeSuccessPopup = () => {
    setSubmitted(false);
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* =====================================================
            HERO BANNER
        ===================================================== */}

        <section className="contact-hero">
          <div className="contact-hero-container">

            {/* HERO CONTENT */}
            <div className="contact-hero-content">

              <span className="contact-hero-label">
                GET IN TOUCH
              </span>

              <h1>
                We're Here to
                <span>Help You Smile</span>
              </h1>

              <p>
                Have a question about your dental care?
                Contact Trio Dent Dental Clinic and our
                team will be happy to assist you.
              </p>

              <div className="contact-hero-buttons">

                <Link
                  to="/appointment"
                  className="contact-hero-primary"
                >
                  Book an Appointment
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="tel:+919779485868"
                  className="contact-hero-secondary"
                >
                  Call Us
                </a>

              </div>

              <div className="contact-hero-features">

                <span>
                  ♡ Patient-Centered Care
                </span>

                <span className="contact-feature-divider"></span>

                <span>
                  ◯ Comfortable Experience
                </span>

              </div>

            </div>

            {/* FULL HERO IMAGE */}
            <div className="contact-hero-image">
              <img
                src="/images/hello1.png"
                alt="Trio Dent Dental Clinic"
              />
            </div>

          </div>
        </section>


        {/* =====================================================
            CONTACT INFORMATION
        ===================================================== */}

        <section className="contact-info-section">
          <div className="contact-info-container">

            <div className="contact-section-heading">

              <p className="contact-eyebrow">
                CONTACT TRIO DENT
              </p>

              <h2>
                Let's Start a
                <span>Conversation</span>
              </h2>

              <p>
                Whether you want to schedule an appointment,
                ask about a treatment, or simply have a question,
                we're here to help.
              </p>

            </div>


            <div className="contact-info-grid">

              {/* LOCATION */}
              <div className="contact-info-card">

                <div className="contact-card-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>VISIT US</span>

                  <h3>Clinic Location</h3>

                  <p>
                    Trio Dent Dental Clinic
                    <br />
                    Rajahmundry, Andhra Pradesh
                  </p>
                </div>

              </div>


              {/* PHONE */}
              <div className="contact-info-card">

                <div className="contact-card-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <span>CALL US</span>

                  <h3>Phone</h3>

                  <a href="tel:+919779485868">
                    +91 97794 85868
                  </a>
                </div>

              </div>


              {/* EMAIL */}
              <div className="contact-info-card">

                <div className="contact-card-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>EMAIL US</span>

                  <h3>Email</h3>

                  <a href="mailto:info@triodentdentalclinic.com">
                    info@triodentdentalclinic.com
                  </a>
                </div>

              </div>


              {/* HOURS */}
              <div className="contact-info-card">

                <div className="contact-card-icon">
                  <Clock3 size={20} />
                </div>

                <div>
                  <span>OPENING HOURS</span>

                  <h3>Clinic Hours</h3>

                  <p>
                    Monday – Saturday
                    <br />
                    Please call for current timings
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            QUICK CONTACT
        ===================================================== */}

        <section className="contact-actions-section">

          <div className="contact-actions-container">

            <div className="contact-actions-content">

              <p className="contact-eyebrow">
                QUICK CONTACT
              </p>

              <h2>
                Need Help
                <span>Right Away?</span>
              </h2>

              <p>
                For quick assistance, call the clinic directly
                or send us a WhatsApp message.
              </p>

            </div>


            <div className="contact-action-buttons">

              {/* CALL */}
              <a
                href="tel:+919779485868"
                className="contact-call-button"
              >

                <Phone size={20} />

                <div>
                  <small>CALL THE CLINIC</small>
                  <strong>+91 97794 85868</strong>
                </div>

              </a>


              {/* WHATSAPP */}
              <a
                href="https://wa.me/919779485868"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-button"
              >

                <MessageCircle size={21} />

                <div>
                  <small>WHATSAPP US</small>
                  <strong>Send a Message</strong>
                </div>

              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT FORM + MAP
        ===================================================== */}

        <section className="contact-main-section">

          <div className="contact-main-container">

            {/* FORM */}
            <div className="contact-form-wrapper">

              <div className="contact-form-heading">

                <p className="contact-eyebrow">
                  SEND US A MESSAGE
                </p>

                <h2>
                  How Can We
                  <span>Help You?</span>
                </h2>

                <p>
                  Fill in the form below and our team will
                  get back to you as soon as possible.
                </p>

              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* NAME */}
                <div className="contact-field">

                  <label htmlFor="contact-name">
                    Full Name <span>*</span>
                  </label>

                  <input
                    id="contact-name"
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


                {/* EMAIL */}
                <div className="contact-field">

                  <label htmlFor="contact-email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="contact-email"
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


                {/* PHONE */}
                <div className="contact-field">

                  <label htmlFor="contact-phone">
                    Phone Number <span>*</span>
                  </label>

                  <input
                    id="contact-phone"
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


                {/* SUBJECT */}
                <div className="contact-field">

                  <label htmlFor="contact-subject">
                    Subject <span>*</span>
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.subject)}
                  />

                  {errors.subject && (
                    <small>{errors.subject}</small>
                  )}

                </div>


                {/* MESSAGE */}
                <div className="contact-field contact-field-full">

                  <label htmlFor="contact-message">
                    Message <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                  />

                  {errors.message && (
                    <small>{errors.message}</small>
                  )}

                </div>


                {/* SUBMIT */}
                <div className="contact-submit-area">

                  <button
                    type="submit"
                    className="contact-submit-button"
                  >
                    Send Message
                    <Send size={15} />
                  </button>

                  <span>
                    * Required fields
                  </span>

                </div>

              </form>

            </div>


            {/* MAP */}
            <div className="contact-map-wrapper">

              <div className="contact-map-heading">

                <p className="contact-eyebrow">
                  FIND US
                </p>

                <h2>
                  Visit Our
                  <span>Clinic</span>
                </h2>

              </div>


              <div className="contact-map">

                <iframe
                  title="Trio Dent Dental Clinic Location"
                  src="https://www.google.com/maps?q=Trio%20Dent%20Dental%20Clinic%20Rajahmundry&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>


              <div className="contact-map-bottom">

                <div className="contact-map-address">

                  <MapPin size={18} />

                  <div>

                    <strong>
                      Trio Dent Dental Clinic
                    </strong>

                    <p>
                      Rajahmundry, Andhra Pradesh
                    </p>

                  </div>

                </div>


                <a
                  href="https://www.google.com/maps/search/?api=1&query=Trio+Dent+Dental+Clinic+Rajahmundry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-directions"
                >
                  Get Directions
                  <ArrowRight size={14} />
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="contact-bottom-cta">

          <div>

            <p className="contact-eyebrow">
              READY FOR YOUR NEXT VISIT?
            </p>

            <h2>
              Take the First Step
              <span>Toward a Healthier Smile</span>
            </h2>

            <p>
              Schedule your dental consultation today.
            </p>

          </div>


          <Link
            to="/appointment"
            className="contact-appointment-button"
          >
            Book an Appointment
            <ArrowRight size={15} />
          </Link>

        </section>


        {/* =====================================================
            SUCCESS POPUP
        ===================================================== */}

        {submitted && (

          <div
            className="contact-success-overlay"
            onClick={closeSuccessPopup}
          >

            <div
              className="contact-success-popup"
              onClick={(event) => event.stopPropagation()}
            >

              <button
                className="contact-success-close"
                onClick={closeSuccessPopup}
                aria-label="Close message"
              >
                <X size={18} />
              </button>


              <div className="contact-success-icon">
                <CheckCircle2 size={35} />
              </div>


              <h3>
                Thank You!
              </h3>


              <p>
                Thank you for contacting Trio Dent Dental Clinic.
                Our team will get in touch with you soon.
              </p>


              <button
                className="contact-success-button"
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

export default Contact;