import React, { useState } from "react";

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
    <div
      style={{
        maxWidth: 900,
        margin: "16px auto",
        fontFamily: "Segoe UI, Roboto, sans-serif",
      }}
    >
      <h2>Todo / People List</h2>

      <form
        onSubmit={editingIndex >= 0 ? handleUpdate : handleCreate}
        style={{
          display: "grid",
          gap: 8,
          gridTemplateColumns: "1fr 1fr",
          marginBottom: 12,
        }}
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

        <div style={{ gridColumn: "1 / -1", display: "flex", gap: 8 }}>
          {editingIndex >= 0 ? (
            <>
              <button type="submit">Update</button>
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            </>
          ) : (
            <button type="submit">Create</button>
          )}
        </div>
      </form>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                padding: 8,
              }}
            >
              ID
            </th>
            <th
              style={{
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                padding: 8,
              }}
            >
              Name
            </th>
            <th
              style={{
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                padding: 8,
              }}
            >
              Event
            </th>
            <th
              style={{
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                padding: 8,
              }}
            >
              Profession
            </th>
            <th
              style={{
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                padding: 8,
              }}
            >
              Education
            </th>
            <th
              style={{
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                padding: 8,
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 && (
            <tr>
              <td colSpan={6} style={{ padding: 12 }}>
                No items yet.
              </td>
            </tr>
          )}
          {items.map((it, idx) => (
            <tr
              key={it.id}
              style={{
                background: idx === editingIndex ? "#f9f9e6" : "transparent",
              }}
            >
              <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                {it.id}
              </td>
              <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                {it.name}
              </td>
              <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                {it.event}
              </td>
              <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                {it.profession}
              </td>
              <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                {it.education}
              </td>
              <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                <button
                  onClick={() => handleEdit(idx)}
                  style={{ marginRight: 8 }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(idx)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
