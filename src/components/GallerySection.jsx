

import { ArrowRight, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/gallery.css";

function GallerySection() {
  const galleryItems = [
    {
      src: "/images/demo1.webp",
      title: "Smile Transformation",
      category: "Before & After",
      description:
        "Aesthetic dental treatment focused on improving the appearance of the smile.",
    },
    {
      src: "/images/demo2.webp",
      title: "Dental Smile Restoration",
      category: "Before & After",
      description:
        "Restorative dental care designed to improve smile appearance and function.",
    },
    {
      src: "/images/demo4.webp",
      title: "Periapical Surgery",
      category: "Dental Procedure",
      description:
        "Clinical treatment showcasing specialized endodontic surgical care.",
    },
    {
      src: "/images/demo6.jpg",
      title: "Smile Correction",
      category: "Before & After",
      description:
        "A smile transformation showing visible improvement after dental treatment.",
    },
    {
      src: "/images/image1.jpg",
      title: "Smile Enhancement",
      category: "Before & After",
      description:
        "Aesthetic dental treatment focused on creating a healthier-looking smile.",
    },
    {
      src: "/images/gallery2.jpg",
      title: "Smile Transformation",
      category: "Before & After",
      description:
        "A complete smile improvement showcased through a before and after result.",
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        {/* HEADER */}
        <div className="gallery-header">
          <div className="gallery-heading">
            <p className="gallery-small-title">
              OUR TREATMENT RESULTS
            </p>

            <h2>
              Before & After
              <span>Smile Transformations</span>
            </h2>
          </div>

          <p className="gallery-description">
            Explore selected treatment results from Trio Dent,
            showcasing smile transformations, restorative care,
            and specialized dental procedures.
          </p>
        </div>


        {/* GALLERY GRID */}
        <div className="gallery-grid">

          {galleryItems.map((item, index) => (
            <article
              className="gallery-card"
              key={`${item.title}-${index}`}
            >

              <div className="gallery-card-image">

                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="gallery-card-overlay">
                  <div className="gallery-view">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <span className="gallery-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              <div className="gallery-card-content">

                <span className="gallery-category">
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


        {/* BOTTOM */}
        <div className="gallery-bottom">

          <div className="gallery-bottom-text">

            <span>
              REAL RESULTS • SPECIALIZED CARE
            </span>

            <p>
              Discover more about our dental treatments
              and patient-focused approach.
            </p>

          </div>

          <Link
            to="/gallery"
            className="gallery-button"
          >
            View Full Gallery
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default GallerySection;