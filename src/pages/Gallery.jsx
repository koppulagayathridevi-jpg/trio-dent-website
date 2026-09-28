

import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/gallery-page.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      image: "/images/demo1.webp",
      title: "Smile Transformation",
      category: "Before & After",
      description:
        "Aesthetic dental treatment focused on improving the appearance of the smile.",
    },
    {
      image: "/images/demo2.webp",
      title: "Dental Smile Restoration",
      category: "Before & After",
      description:
        "Restorative dental care designed to improve smile appearance and function.",
    },
    {
      image: "/images/demo4.webp",
      title: "Periapical Surgery",
      category: "Dental Procedure",
      description:
        "Clinical treatment showcasing specialized endodontic surgical care.",
    },
    {
      image: "/images/demo6.jpg",
      title: "Smile Correction",
      category: "Before & After",
      description:
        "A smile transformation showing visible improvement after dental treatment.",
    },
    {
      image: "/images/image1.jpg",
      title: "Smile Enhancement",
      category: "Before & After",
      description:
        "Aesthetic dental treatment focused on creating a healthier-looking smile.",
    },
    {
      image: "/images/gallery2.jpg",
      title: "Smile Transformation",
      category: "Before & After",
      description:
        "A complete smile improvement showcased through a before and after result.",
    },
  ];

  const categories = [
    "All",
    "Before & After",
    "Dental Procedure",
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const currentIndex = selectedImage
    ? filteredImages.findIndex(
        (image) => image.image === selectedImage.image
      )
    : -1;

  const showPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      currentIndex === 0
        ? filteredImages.length - 1
        : currentIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      currentIndex === filteredImages.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <>
      <Navbar />

      <main className="gallery-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="gallery-page-hero">

          <div className="gallery-page-hero-container">

            <div className="gallery-page-hero-content">

              <p className="gallery-page-label">
                OUR TREATMENT RESULTS
              </p>

              <h1>
                Before & After
                <span>Smile Transformations</span>
              </h1>

              <p>
                Explore selected dental treatment results,
                smile transformations, restorative care,
                and specialized procedures at Trio Dent.
              </p>

              <Link
                to="/appointment"
                className="gallery-page-hero-button"
              >
                Book an Appointment
                <ArrowRight size={15} />
              </Link>

            </div>


            <div className="gallery-page-hero-image">

              <img
                src="/images/image1.jpg"
                alt="Trio Dent smile transformation"
              />

              <div className="gallery-page-hero-badge">

                <strong>Trio Dent</strong>

                <span>
                  Before & After Results
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            GALLERY SECTION
        ========================================= */}

        <section className="gallery-page-section">

          <div className="gallery-page-container">

            <div className="gallery-page-header">

              <div>

                <p className="gallery-page-small-title">
                  TREATMENT RESULTS
                </p>

                <h2>
                  Explore Our
                  <span>Smile Transformations</span>
                </h2>

              </div>

              <p>
                View selected treatment results showcasing
                aesthetic dentistry, restorative treatments,
                and specialized dental procedures.
              </p>

            </div>


            {/* =====================================
                FILTERS
            ===================================== */}

            <div className="gallery-page-filters">

              {categories.map((category) => (

                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>

              ))}

            </div>


            {/* =====================================
                GRID
            ===================================== */}

            <div className="gallery-page-grid">

              {filteredImages.map((item, index) => (

                <article
                  className="gallery-page-card"
                  key={`${item.image}-${index}`}
                  onClick={() => setSelectedImage(item)}
                >

                  <div className="gallery-page-image">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <div className="gallery-page-overlay">

                      <div className="gallery-page-expand">
                        <Maximize2 size={17} />
                      </div>

                    </div>

                    <span className="gallery-page-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  <div className="gallery-page-card-content">

                    <span className="gallery-page-category">
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================
            EXPERIENCE
        ========================================= */}

        <section className="gallery-page-experience">

          <div className="gallery-page-experience-container">

            <div className="gallery-page-experience-image">

              <img
                src="/images/ment.png"
                alt="Trio Dent dental clinic"
              />

            </div>


            <div className="gallery-page-experience-content">

              <p className="gallery-page-small-title">
                THE TRIO DENT APPROACH
              </p>

              <h2>
                Focused On
                <span>Your Smile</span>
              </h2>

              <p>
                Our dental care combines specialized treatment,
                modern techniques, and personalized attention
                to support every patient's dental needs.
              </p>


              <div className="gallery-page-points">

                <div>
                  <span>01</span>
                  <p>
                    Personalized treatment planning
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    Specialized dental care
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    Patient-focused experience
                  </p>
                </div>

              </div>


              <Link
                to="/appointment"
                className="gallery-page-button"
              >
                Book an Appointment
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

        </section>


        {/* =========================================
            CTA
        ========================================= */}

        <section className="gallery-page-cta">

          <div className="gallery-page-cta-container">

            <div>

              <p>
                READY TO START YOUR SMILE JOURNEY?
              </p>

              <h2>
                Take The First Step
                <span>Toward A Better Smile</span>
              </h2>

            </div>

            <Link
              to="/appointment"
              className="gallery-page-cta-button"
            >
              Book Appointment
              <ArrowRight size={15} />
            </Link>

          </div>

        </section>

      </main>


      {/* =========================================
          LIGHTBOX
      ========================================= */}

      {selectedImage && (

        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={22} />
          </button>


          <button
            className="gallery-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={25} />
          </button>


          <div
            className="gallery-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-info">

              <span>
                {selectedImage.category}
              </span>

              <h3>
                {selectedImage.title}
              </h3>

              <p>
                {selectedImage.description}
              </p>

            </div>

          </div>


          <button
            className="gallery-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={25} />
          </button>

        </div>

      )}


      <Footer />

    </>
  );
}

export default Gallery;