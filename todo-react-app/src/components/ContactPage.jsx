import React, { useState } from "react";
import "./ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p className="hero-subtitle">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </section>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:support@todoapp.com">support@todoapp.com</a>
              </p>
              <p className="small-text">We'll respond within 24 hours</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
              <p className="small-text">Mon - Fri, 9AM - 6PM EST</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>123 Tech Street, Tech City, TC 12345</p>
              <p className="small-text">United States</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Support Hours</h3>
              <p>24/7 Email Support</p>
              <p className="small-text">
                Live chat available during business hours
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your inquiry..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-items">
            <div className="faq-item">
              <h4>How do I create an account?</h4>
              <p>
                Click on the login page and select "Sign Up". Fill in your
                details and you'll be ready to start managing your tasks.
              </p>
            </div>
            <div className="faq-item">
              <h4>Is my data secure?</h4>
              <p>
                Yes, we use industry-standard security measures including
                encryption and secure authentication protocols to protect your
                data.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can I export my tasks?</h4>
              <p>
                Currently, tasks are stored securely in our cloud database. We
                are working on adding export features in future updates.
              </p>
            </div>
            <div className="faq-item">
              <h4>How can I delete my account?</h4>
              <p>
                Please contact us at support@todoapp.com with your account
                details, and we'll help you with the account deletion process.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
