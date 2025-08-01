import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_2.png";
import Container from "./Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar while scrolling
      setShowNavbar(false);

      // Detect if user stopped scrolling
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowNavbar(true);
      }, 300); // show again after 300ms stop

      // Add shadow if scrolled a bit
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="mobile-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      <nav
        className={`navbar-container transition-all duration-300 ${
          scrolled ? "navbar-scrolled" : ""
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"} fixed top-0 left-0 w-full z-50`}
      >
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Hunt Share Live"
                className="h-10 w-auto logo-img"
              />
              <h2 className="text-white font-semibold tracking-wide">
                Hunt Share Live
              </h2>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "All Streams", path: "/streams" },
                { name: "Policy", path: "/policy" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, idx) => (
                <Link key={idx} to={link.path} className="nav-link">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Download Button */}
            <Link to="/" className="hidden md:block">
              <div className="download-btn">Download App</div>
            </Link>

            {/* Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`hamburger ${isOpen ? "open" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <div className="mobile-menu-inner">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "All Streams", path: "/streams" },
              { name: "Policy", path: "/policy" },
              { name: "Contact Us", path: "/contact" },
            ].map((link, idx) => (
              <Link key={idx} to={link.path} className="nav-link">
                {link.name}
              </Link>
            ))}

            <Link
              to="/"
              className="download-btn w-full text-center mt-6"
              onClick={() => setIsOpen(false)}
            >
              Download App
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
