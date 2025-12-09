import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import "./CustomerHeader.css";

export default function CustomerHeader() {
  const { isLoggedIn, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="customer-header">
      <div className="customer-header-container">
        <div className="customer-logo">
          <Link to="/customer-dashboard" className="customer-logo-link">
            <h2>Customer Portal</h2>
          </Link>
        </div>
        <nav className="customer-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customer-dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/customer-details">My Details</Link>
            </li>
          </ul>
        </nav>
        <div className="customer-auth-section">
          <button
            className="customer-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            aria-pressed={theme === "dark"}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
          {isLoggedIn ? (
            <>
              <span className="customer-user-name">
                Welcome, {user?.name || "Customer"}
              </span>
              <button className="customer-logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="customer-theme-toggle customer-login-btn"
                onClick={() => navigate("/customer/auth")}
              >
                Login
              </button>
              <button
                className="customer-theme-toggle customer-register-btn"
                onClick={() => navigate("/customer/auth")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
