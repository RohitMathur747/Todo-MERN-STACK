import React from "react";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-hero">
          <h1>About TodoApp</h1>
          <p className="hero-subtitle">
            Your simple and efficient solution for managing daily tasks
          </p>
        </section>

        <section className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              TodoApp was created with a single mission: to help you stay
              organized and productive. We believe that task management
              shouldn't be complicated. Our app provides a clean, intuitive
              interface that makes it easy to create, organize, and complete
              your tasks.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose TodoApp?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>✓ Simple & Intuitive</h3>
                <p>
                  Easy-to-use interface designed with user experience in mind.
                </p>
              </div>
              <div className="feature-card">
                <h3>⚡ Fast & Reliable</h3>
                <p>
                  Built with modern technologies for optimal performance and
                  reliability.
                </p>
              </div>
              <div className="feature-card">
                <h3>🔒 Secure</h3>
                <p>
                  Your data is protected with secure authentication and
                  encryption.
                </p>
              </div>
              <div className="feature-card">
                <h3>📱 Responsive Design</h3>
                <p>Works seamlessly on desktop, tablet, and mobile devices.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Technology Stack</h2>
            <div className="tech-stack">
              <div className="tech-item">
                <h4>Frontend</h4>
                <p>React with Vite for fast development and building</p>
              </div>
              <div className="tech-item">
                <h4>Backend</h4>
                <p>Node.js and Express for robust API endpoints</p>
              </div>
              <div className="tech-item">
                <h4>Database</h4>
                <p>MongoDB for flexible and scalable data storage</p>
              </div>
              <div className="tech-item">
                <h4>Architecture</h4>
                <p>MERN Stack (MongoDB, Express, React, Node.js)</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              TodoApp started as a project to demonstrate modern web development
              practices. We wanted to create something that was not only
              functional but also a pleasure to use. Today, it serves as a
              complete example of a full-stack JavaScript application that
              showcases best practices in frontend development, API design, and
              user authentication.
            </p>
          </div>

          <div className="about-section">
            <h2>Commitment to Quality</h2>
            <p>
              We are committed to continuously improving TodoApp. We listen to
              user feedback and regularly update our platform with new features
              and enhancements. Whether you're a casual user or a productivity
              enthusiast, TodoApp is designed to adapt to your needs.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
