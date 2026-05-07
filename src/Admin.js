import React, { useEffect, useState } from "react";

export default function Admin({ goBack }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("answers")) || [];
    setAnswers(data);
  }, []);

  return (
    <div className="container">
      <h2>👑 Admin Dashboard</h2>
      <button onClick={goBack}>⬅ กลับ</button>

      {answers.length === 0 ? (
        <p>ยังไม่มีข้อมูล</p>
      ) : (
        answers.map((item, i) => (
          <div key={i} className="card">
            <p><b>ผู้ใช้:</b> {item.user}</p>
            <p><b>เวลา:</b> {item.date}</p>
            <p>Q1: {item.answers.q1}</p>
            <p>Q2: {item.answers.q2}</p>
          </div>
        ))
      )}
    </div>
  );
}