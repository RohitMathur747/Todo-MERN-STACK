import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomerHeader from "./components/CustomerHeader";
import CustomerFooter from "./components/CustomerFooter";
import AuthPage from "./components/AuthPage";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import GuestPanel from "./components/GuestPanel";
import CustomerAuthPage from "./components/CustomerAuthPage";
import CustomerDashboard from "./components/CustomerDashboard";
import CustomerDetailsPage from "./components/CustomerDetailsPage";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const isCustomerRoute = location.pathname.startsWith("/customer");

  return (
    <>
      {isCustomerRoute ? <CustomerHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/guest" element={<GuestPanel />} />
        <Route path="/customer/auth" element={<CustomerAuthPage />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/details" element={<CustomerDetailsPage />} />
      </Routes>
      {isCustomerRoute ? <CustomerFooter /> : <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
