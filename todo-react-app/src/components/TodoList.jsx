import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TodoList.css";

export default function TodoList() {
  const navigate = useNavigate();
  const emptyItem = {
    id: "",
    name: "",
    event: "",
    profession: "",
    education: "",
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
    isCompleted: false,
    createdAt: "",
    updatedAt: "",
  };
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("todoItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [form, setForm] = useState(emptyItem);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

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
    const now = new Date().toISOString();
    setItems((prev) => [...prev, { ...form, createdAt: now, updatedAt: now }]);
    setForm(emptyItem);
  }

  function handleEdit(index) {
    setEditingIndex(index);
    setForm(items[index]);
  }

  function handleUpdate(e) {
    e.preventDefault();
    if (editingIndex < 0) return;
    const now = new Date().toISOString();
    setItems((prev) =>
      prev.map((it, i) =>
        i === editingIndex ? { ...form, updatedAt: now } : it
      )
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
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Task Title"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Task Description"
          rows="3"
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          placeholder="Due Date"
        />
        <label>
          <input
            type="checkbox"
            name="isCompleted"
            checked={form.isCompleted}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, isCompleted: e.target.checked }))
            }
          />
          Completed
        </label>

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
              <th>Title</th>
              <th>Created Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr>
                <td colSpan={8} className="empty-message">
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
                <td>{it.title}</td>
                <td>
                  {it.createdAt
                    ? new Date(it.createdAt).toLocaleDateString()
                    : ""}
                </td>
                <td>{it.dueDate}</td>
                <td className="todo-actions">
                  <button
                    className="btn btn-view"
                    onClick={() => navigate(`/todo/${it.id}`)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-edit"
                    onClick={() => handleEdit(idx)}
                  >
                    Edit
                  </button>
                  {/* Delete uses a soft red by default. To use green, add the 'green' class: className="btn btn-delete green" */}
                  <button
                    className="btn btn-delete"
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
