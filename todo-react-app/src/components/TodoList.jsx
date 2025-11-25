import React, { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  const emptyItem = {
    id: "",
    name: "",
    event: "",
    profession: "",
    education: "",
  };
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyItem);
  const [editingIndex, setEditingIndex] = useState(-1);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleCreate(e) {
    e.preventDefault();
    if (!form.id) return alert("ID is required");
    // Prevent duplicate IDs
    if (items.some((it) => it.id === form.id))
      return alert("ID already exists");
    setItems((prev) => [...prev, { ...form }]);
    setForm(emptyItem);
  }

  function handleEdit(index) {
    setEditingIndex(index);
    setForm(items[index]);
  }

  function handleUpdate(e) {
    e.preventDefault();
    if (editingIndex < 0) return;
    setItems((prev) =>
      prev.map((it, i) => (i === editingIndex ? { ...form } : it))
    );
    setEditingIndex(-1);
    setForm(emptyItem);
  }

  function handleDelete(index) {
    if (!confirm("Delete this item?")) return;
    setItems((prev) => prev.filter((_, i) => i !== index));
    // if deleting the edited item, cancel edit
    if (editingIndex === index) {
      setEditingIndex(-1);
      setForm(emptyItem);
    }
  }

  function handleCancelEdit() {
    setEditingIndex(-1);
    setForm(emptyItem);
  }

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo / People List</h2>

      <form
        onSubmit={editingIndex >= 0 ? handleUpdate : handleCreate}
        className="todo-form"
      >
        <input
          name="id"
          value={form.id}
          onChange={handleChange}
          placeholder="ID"
        />
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <select name="event" value={form.event} onChange={handleChange}>
          <option value="">Select Event</option>
          <option value="global">Global</option>
          <option value="private">Private</option>
          <option value="customer access">Customer Access</option>
        </select>

        <select
          name="profession"
          value={form.profession}
          onChange={handleChange}
        >
          <option value="">Select Profession</option>
          <option value="engineer">Engineer</option>
          <option value="developer">Developer</option>
          <option value="senior developer">Senior Developer</option>
          <option value="tester">Tester</option>
          <option value="manager">Manager</option>
          <option value="scrum master">Scrum Master</option>
        </select>
        <select name="education" value={form.education} onChange={handleChange}>
          <option value="">Select Education</option>
          <option value="btech">B.Tech</option>
          <option value="ba">BA</option>
          <option value="bsc">BSc</option>
          <option value="mcom">MCom</option>
          <option value="bcom">BCom</option>
          <option value="bba">BBA</option>
          <option value="other">Other</option>
        </select>

        <div className="form-actions">
          {editingIndex >= 0 ? (
            <>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                className="btn btn-ghost"
              >
                Cancel
              </button>
            </>
          ) : (
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          )}
        </div>
      </form>

      <div className="todo-table-wrapper">
        <table className="todo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Event</th>
              <th>Profession</th>
              <th>Education</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr>
                <td colSpan={6} className="empty-message">
                  No items yet.
                </td>
              </tr>
            )}
            {items.map((it, idx) => (
              <tr
                key={it.id}
                className={idx === editingIndex ? "todo-editing-row" : ""}
              >
                <td>{it.id}</td>
                <td>{it.name}</td>
                <td>{it.event}</td>
                <td>{it.profession}</td>
                <td>{it.education}</td>
                <td className="todo-actions">
                  <button
                    className="btn btn-ghost"
                    onClick={() => handleEdit(idx)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(idx)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
