import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import "./TodoDetail.css";

export default function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      const savedItems = localStorage.getItem("todoItems");
      if (savedItems) {
        const items = JSON.parse(savedItems);
        const foundItem = items.find((it) => it.id === id);
        setItem(foundItem);
      }
    }
  }, [id]);

  if (!item) {
    return <div>No item data found.</div>;
  }

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Todo Item Details", 20, 20);
    doc.text(`ID: ${item.id}`, 20, 40);
    doc.text(`Name: ${item.name}`, 20, 50);
    doc.text(`Event: ${item.event}`, 20, 60);
    doc.text(`Profession: ${item.profession}`, 20, 70);
    doc.text(`Education: ${item.education}`, 20, 80);
    doc.text(`Title: ${item.title}`, 20, 90);
    doc.text(`Description: ${item.description}`, 20, 100);
    doc.text(`Status: ${item.status}`, 20, 110);
    doc.text(`Due Date: ${item.dueDate}`, 20, 120);
    doc.text(`Completed: ${item.isCompleted ? "Yes" : "No"}`, 20, 130);
    doc.text(`Created At: ${item.createdAt}`, 20, 140);
    doc.text(`Updated At: ${item.updatedAt}`, 20, 150);
    doc.save(`${item.name}_details.pdf`);
  };

  const handleDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet([item]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Details");
    XLSX.writeFile(wb, `${item.name}_details.xlsx`);
  };

  return (
    <div className="todo-detail">
      <h2>Todo Item Details</h2>
      <div className="detail-item">
        <strong>ID:</strong> {item.id}
      </div>
      <div className="detail-item">
        <strong>Name:</strong> {item.name}
      </div>
      <div className="detail-item">
        <strong>Event:</strong> {item.event}
      </div>
      <div className="detail-item">
        <strong>Profession:</strong> {item.profession}
      </div>
      <div className="detail-item">
        <strong>Title:</strong> {item.title}
      </div>
      <div className="detail-item">
        <strong>Description:</strong> {item.description}
      </div>
      <div className="detail-item">
        <strong>Status:</strong> {item.status}
      </div>
      <div className="detail-item">
        <strong>Due Date:</strong>{" "}
        {item.dueDate ? new Date(item.dueDate).toLocaleDateString() : ""}
      </div>
      <div className="detail-item">
        <strong>Completed:</strong> {item.isCompleted ? "Yes" : "No"}
      </div>
      <div className="detail-item">
        <strong>Created At:</strong>{" "}
        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}
      </div>
      <div className="detail-item">
        <strong>Updated At:</strong> {item.updatedAt}
      </div>
      <div className="detail-actions">
        <button onClick={handleDownloadPDF} className="btn btn-primary">
          Download PDF
        </button>
        <button onClick={handleDownloadExcel} className="btn btn-secondary">
          Download Excel
        </button>
        <button onClick={() => navigate("/")} className="btn btn-ghost">
          Back to List
        </button>
      </div>
    </div>
  );
}
