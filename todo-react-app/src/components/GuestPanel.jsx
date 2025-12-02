import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GuestPanel.css";

export default function GuestPanel() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [editingUser, setEditingUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (editingUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingUser.id ? { ...user, ...formData } : user
        )
      );
      setEditingUser(null);
    } else {
      const newUser = { ...formData, id: Date.now() };
      setUsers((prev) => [...prev, newUser]);
    }

    setFormData({ name: "", email: "", password: "" });
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    setEditingUser(user);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <section className="guest-panel">
      <div className="guest-wrapper">
        <h1>Welcome, Visitor</h1>
        <p className="intro">
          You can browse our About page, Contact us, or Register without signing
          in. Choose an option below to learn more about the app, to reach out,
          or to create an account.
        </p>
        <div className="guest-actions">
          <Link to="/about" className="guest-card">
            <h3>About Us</h3>
            <p>Learn about our mission, features, and team.</p>
          </Link>
          <Link to="/contact" className="guest-card contact">
            <h3>Contact</h3>
            <p>Get in touch with suggestions, support, or feedback.</p>
          </Link>
          <Link to="/" className="guest-card register">
            <h3>Register</h3>
            <p>Create an account to manage your tasks and more.</p>
          </Link>
        </div>

        {/* Users Table */}
        {users.length > 0 && (
          <div className="users-table-section">
            <h2>Registered Users</h2>
            <table className="users-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(user)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="footer-note">
          <small>
            Want to manage tasks? You can sign in anytime to access your todo
            list.
          </small>
        </div>
      </div>
    </section>
  );
}
