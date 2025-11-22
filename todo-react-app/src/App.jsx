import React from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthPage from "./components/AuthPage";
import TodoList from "./components/TodoList";
import "./App.css";

function AppContent() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {isLoggedIn ? <TodoList /> : <AuthPage />}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
