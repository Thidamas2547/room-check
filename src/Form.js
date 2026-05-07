import React, { useState } from "react";

export default function Form({ user, goAdmin, logout }) {
  const [formData, setFormData] = useState({ q1: "", q2: "" });

  const handleSubmit = () => {
    const newAnswer = {
      user: user.username,
      answers: formData,
      date: new Date().toLocaleString(),
    };

    const oldData = JSON.parse(localStorage.getItem("answers")) || [];
    oldData.push(newAnswer);

    localStorage.setItem("answers", JSON.stringify(oldData));

    alert("ส่งข้อมูลแล้ว");
    setFormData({ q1: "", q2: "" });
  };

  return (
    <div className="container">
      <h2>📝 แบบสอบถาม</h2>
      <p>ผู้ใช้: {user.username}</p>

      <input
        placeholder="คำถาม 1"
        value={formData.q1}
        onChange={(e) => setFormData({ ...formData, q1: e.target.value })}
      />

      <input
        placeholder="คำถาม 2"
        value={formData.q2}
        onChange={(e) => setFormData({ ...formData, q2: e.target.value })}
      />

      <button onClick={handleSubmit}>ส่ง</button>

      {user.role === "admin" && (
        <button onClick={goAdmin}>👑 ไปหน้า Admin</button>
      )}

      <button onClick={logout}>ออกจากระบบ</button>
    </div>
  );
}