import { Link } from "react-router-dom"; // ⬅ Add this
import logo from "../assets/logo_2.png";
import Container from "./Container";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container bg-[#181818] text-white">
      <Container>
        {/* Main Footer */}
        <div className="py-8 grid gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center place-items-center">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="Hunt Share Live" className="w-44 h-auto mb-4 footer-logo" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Connecting the world through live moments and real-time fun.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h1 className="footer-title">Hunt Share Live</h1>
            <ul className="space-y-2 text-gray-400">
              {[
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Live Streaming", path: "/services" },
                { name: "Terms and Conditions", path: "/terms" },
                { name: "Rules and regulations", path: "/rules" },
                { name: "Privacy Policy", path: "/policy" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Browse Links */}
          <div>
            <h1 className="footer-title">Services</h1>
            <ul className="space-y-2 text-gray-400">
              {[
                { name: "Live Stream", path: "/services" },
                { name: "In Stream Games", path: "/services" },
                { name: "Chat Rooms", path: "/services" },
                { name: "Agency System", path: "/services" },
                { name: "Agent Services", path: "/services" },
                { name: "Fast Withdrawals", path: "/services" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h1 className="footer-title">Join Us On</h1>
            <div className="flex space-x-4 text-gray-400 justify-center">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-icon"><FaTwitter size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-icon"><FaFacebookF size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-icon"><FaLinkedinIn size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-icon"><FaYoutube size={18} /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6"></div>

        {/* Bottom Bar */}
        <div className="py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Hunt Share Live. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
