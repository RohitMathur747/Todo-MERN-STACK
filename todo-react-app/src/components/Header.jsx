import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

export default function Header() {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <h2>TodoApp</h2>
          </Link>
        </div>
        <nav className="nav">
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
        </nav>
        <div className="auth-section">
          {isLoggedIn ? (
            <>
              <span className="user-name">Welcome, {user?.name || "User"}</span>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/guest"
                className="guest-btn"
                aria-label="Visitor / Guest access"
              >
                Guest
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
