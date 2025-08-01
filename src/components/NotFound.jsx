import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound-section">
      <div className="notfound-container">
        {/* Glitch 404 */}
        <h1 className="glitch" data-text="404">
          404
        </h1>
        <h2 className="subtitle">Oops! Page Not Found</h2>
        <p className="message">
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back to streaming fun!
        </p>

        {/* Back Home Button */}
        <Link to="/" className="home-btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
