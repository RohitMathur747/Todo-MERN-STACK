import React from "react";
import "./CustomerFooter.css";

export default function CustomerFooter() {
  return (
    <footer className="customer-footer">
      <div className="customer-footer-container">
        <div className="customer-footer-content">
          <div className="customer-footer-section">
            <h3>Customer Portal</h3>
            <p>
              Your trusted partner for all your needs. We're here to serve you
              better.
            </p>
          </div>
          <div className="customer-footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/customer-dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/customer-details">My Details</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Support</a>
              </li>
            </ul>
          </div>
          <div className="customer-footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="/contact">Help Center</a>
              </li>
              <li>
                <a href="/contact">Customer Service</a>
              </li>
              <li>
                <a href="/contact">Technical Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="customer-footer-bottom">
          <p>&copy; 2024 Customer Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
