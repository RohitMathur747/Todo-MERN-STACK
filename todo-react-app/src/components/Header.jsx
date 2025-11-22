import React from "react";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

export default function Header() {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>TodoApp</h2>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
            <span className="guest">Guest</span>
          )}
        </div>
      </div>
    </header>
  );
}
