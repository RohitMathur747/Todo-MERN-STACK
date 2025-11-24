import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <p>Your simple and efficient todo app to manage your daily tasks.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            Email: <a href="mailto:support@todoapp.com">support@todoapp.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 TodoApp. All rights reserved.</p>
      </div>
    </footer>
  );
}
