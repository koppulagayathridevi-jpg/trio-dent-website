// // import AboutSection from "./components/AboutSection";
// // import AppointmentSection from "./components/AppointmentSection";
// // import ContactSection from "./components/ContactSection";
// // import DoctorsSection from "./components/DoctorsSection";
// // import Footer from "./components/Footer";
// // import GallerySection from "./components/GallerySection";
// // import Hero from "./components/Hero";
// // import Navbar from "./components/Navbar";
// // import ServicesSection from "./components/ServicesSection";
// // import TestimonialsSection from "./components/TestimonialsSection";

// // function App() {
// //   return (
// //     <>
// //       <Navbar />

// //       <main>
// //         <Hero/>
// //         <AboutSection/>
// //         <ServicesSection/>
// //         <DoctorsSection/>
// //         <GallerySection/>
// //         <TestimonialsSection/>
// //         <AppointmentSection/>
// //         <ContactSection/>
        
// //       </main>
// //       <Footer/>
// //     </>
// //   );
// // }

// // export default App;

// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Doctors from "./pages/Doctors";
// import Gallery from "./pages/Gallery"
// import Testimonial from "./pages/Testimonials"
// import Appointment from "./pages/Appointment";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Routes>

//       <Route path="/" element={<Home />} />

//       <Route path="/about" element={<About />} />

//       <Route path="/services" element={<Services/>}/>

//       <Route  path="/doctors" element={<Doctors/>}/>
//       <Route path="/gallery" element={<Gallery/>}/>
//       <Route path="/testimonials" element={<Testimonial/>}/>
//       <Route path="/appointment" element={<Appointment/>}/>
//       <Route path="/contact" element={<Contact/>}/>

//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";

import FloatingContact from "./components/FloatingContact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingContact />
    </>
  );
}

export default App;