import React from "react";
import { Link } from "react-router-dom";
import "./GuestPanel.css";

export default function GuestPanel() {
  return (
    <section className="guest-panel">
      <div className="guest-wrapper">
        <h1>Welcome, Visitor</h1>
        <p className="intro">
          You can browse our About page or Contact us without signing in. Choose
          an option below to learn more about the app or to reach out.
        </p>
        <div className="guest-actions">
          <Link to="/about" className="guest-card">
            <h3>About Us</h3>
            <p>Learn about our mission, features, and team.</p>
          </Link>
          <Link to="/contact" className="guest-card contact">
            <h3>Contact</h3>
            <p>Get in touch with suggestions, support, or feedback.</p>
          </Link>
        </div>
        <div className="footer-note">
          <small>
            Want to manage tasks? You can sign in anytime to access your todo
            list.
          </small>
        </div>
      </div>
    </section>
  );
}
