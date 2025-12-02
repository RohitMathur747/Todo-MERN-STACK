import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthPage from "./components/AuthPage";
import TodoList from "./components/TodoList";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import GuestPanel from "./components/GuestPanel";
import "./App.css";

function AppContent() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={isLoggedIn ? <TodoList /> : <AuthPage />} />
          {/* Public visitor/guest panel with quick links to About/Contact */}
          <Route path="/guest" element={<GuestPanel />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}
