import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import "./TodoDetail.css";

export default function TodoDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state?.id;
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
        <strong>Education:</strong> {item.education}
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
