import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="Trio Dent Dental Clinic"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Doctors
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Testimonials
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>

        </nav>

        {/* Right Side */}
        <div className="navbar-actions">

          <Link
            to="/appointment"
            className="navbar-book"
            onClick={closeMenu}
          >
            Book Appointment
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="navbar-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/doctors"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Doctors
        </NavLink>

        <NavLink
          to="/gallery"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Gallery
        </NavLink>

        <NavLink
          to="/testimonials"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Testimonials
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>

        <Link
          to="/appointment"
          className="mobile-book"
          onClick={closeMenu}
        >
          Book Appointment
        </Link>

      </nav>
    </header>
  );
}

export default Navbar;